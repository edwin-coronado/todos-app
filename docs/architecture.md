# Architecture Documentation

This document describes the architectural design and components of the Todos Application, including business rules, client scripts, security model, and ServiceNow platform integration.

## System Architecture Overview

The Todos Application is built on the ServiceNow platform using the ServiceNow SDK, which provides a declarative and type-safe approach to application development. The architecture follows ServiceNow best practices and consists of these key components:

![Architecture Diagram](https://www.example.com/placeholder-for-architecture-diagram.png)

1. **Data Layer**: Three main tables (Tasks, Lists, Categories) with relationships
2. **Server-Side Logic**: Business rules and script includes for automation
3. **Security Layer**: ACLs and role-based access controls
4. **Client-Side Logic**: Client scripts and UI components
5. **User Interface**: Application menus and forms

## Business Rules and Server-Side Logic

Business rules are the primary server-side automation mechanism, triggering actions when records are created, updated, viewed, or deleted.

### Task Update Business Rule

The core automation is implemented in the Task Update business rule, which executes whenever a task record is inserted or updated. It handles:

- State transitions between todo, in_progress, done, and canceled
- Automatic closure of tasks and lists
- Duration tracking for completed tasks

**Implementation**: [`src/fluent/server-development/business-rule/handle-task-update.now.ts`](../src/fluent/server-development/business-rule/handle-task-update.now.ts)

```typescript
BusinessRule({
    $id: Now.ID['handletaskupdate'],
    name: "Handle task update",
    table: "x_snc_todos_task",
    action: ["update","insert"],
    script: handleTaskUpdate,
    active: true,
    when: "after",
    abort_action: false
})
```

The actual logic is implemented in [`src/server/utils.ts`](../src/server/utils.ts) in the `handleTaskUpdate` function, which analyzes state changes and takes appropriate actions.

### Scratchpad Business Rule

Another key business rule runs in "display" mode to prepare data for client scripts when viewing list forms:

**Implementation**: [`src/fluent/server-development/business-rule/set-scratchpad.now.ts`](../src/fluent/server-development/business-rule/set-scratchpad.now.ts) and [`src/fluent/server-development/business-rule/set-scratchpad.js`](../src/fluent/server-development/business-rule/set-scratchpad.js)

```typescript
BusinessRule({
    $id: Now.ID['set-scratchpad-br'],
    name: "Set scratchpad",
    when: "display",
    table: 'x_snc_todos_list',
    script: Now.include('./set-scratchpad.js')
})
```

The scratchpad is a temporary storage mechanism that allows data to be passed from server-side scripts to client-side scripts. This business rule queries for tasks in the current list and makes them available to client scripts.

## Client Scripting Architecture

Client scripts enhance the user interface by providing dynamic behavior on forms and lists.

### Task Count Client Script

The Task Count client script displays task information directly on list forms:

**Implementation**: [`src/fluent/client-development/client-script/todo-task-count.now.ts`](../src/fluent/client-development/client-script/todo-task-count.now.ts) and [`src/fluent/client-development/client-script/todo-task-count.js`](../src/fluent/client-development/client-script/todo-task-count.js)

```typescript
ClientScript({
    $id: Now.ID['todo-task-count'],
    name: "Todo task count",
    table: "x_snc_todos_list",
    type: 'onLoad',
    active: true,
    script: function(g_form) {
        // Implementation in todo-task-count.js
    }
})
```

This client script:
1. Retrieves task data from the scratchpad (populated by the set-scratchpad business rule)
2. Parses the data and generates summary information
3. Displays the information directly on the form

### Client-Server Data Flow

The application uses a specific pattern for client-server communication:

1. Server-side "display" business rules prepare and store data in the scratchpad
2. Client scripts access this data via the `g_scratchpad` object
3. Client scripts manipulate the UI using ServiceNow's GlideForm API

This pattern allows data to be efficiently passed from server to client without requiring additional AJAX calls.

## Security Model

The application implements a comprehensive security model using roles and access control lists (ACLs).

### Security Roles

Two main roles control access to the application:

1. **User Role**: Basic access to view and manage personal tasks and lists
   - **Implementation**: [`src/fluent/security/roles/user.now.ts`](../src/fluent/security/roles/user.now.ts)

2. **Admin Role**: Extended privileges for managing categories and all tasks/lists
   - **Implementation**: [`src/fluent/security/roles/admin.now.ts`](../src/fluent/security/roles/admin.now.ts)

The admin role includes the user role, inheriting all its permissions.

### Access Control Lists (ACLs)

Access to the application's tables is controlled by ACLs, which define who can read, write, create, and delete records.

#### Task ACLs

**Implementation**: [`src/fluent/security/acl/task.now.ts`](../src/fluent/security/acl/task.now.ts)

- **Create**: Users can create new tasks
- **Read**: Users can read tasks they created
- **Write**: Users can modify tasks they created or are currently creating
- **Delete**: Users can delete tasks they created

#### List ACLs

**Implementation**: [`src/fluent/security/acl/list.now.ts`](../src/fluent/security/acl/list.now.ts)

- Similar permissions as tasks, with conditions that restrict access to the creator

#### Category ACLs

**Implementation**: [`src/fluent/security/acl/category.now.ts`](../src/fluent/security/acl/category.now.ts)

- **Read**: All users can view categories
- **Write/Create/Delete**: Only administrators can modify categories

The security model follows ServiceNow best practices by using conditions to implement record-level security.

## ServiceNow Platform Integration

The Todos Application integrates with several ServiceNow platform features:

### Application Navigator Integration

The application appears in the ServiceNow application navigator via the Application Menu:

**Implementation**: [`src/fluent/user-interface/app-menu.now.ts`](../src/fluent/user-interface/app-menu.now.ts)

```typescript
const menu = ApplicationMenu({
    $id: Now.ID['my-app-menu'],
    title: "Todo's app",
    description: "Todo's application to track lists, tasks, and subtasks",
    category: CUSTOM_APPLICATIONS_CATEGORY,
    roles: [x_snc_todos_user],
    active: true
})
```

This menu includes modules for lists, tasks, and categories, allowing users to navigate to these components.

### GlideRecord Integration

The application uses GlideRecord for database operations, leveraging ServiceNow's ORM layer:

```typescript
export function getTasksInList(listSysId: string): Task[] {
  const tasks: Task[] = [];
  const gr = new GlideRecord('x_snc_todos_task');

  gr.addQuery('list', listSysId);
  gr.query();

  while (gr.next()) {
    tasks.push(grToTask(gr));
  }

  return tasks;
}
```

### GlideForm Integration

Client scripts use the GlideForm API to manipulate forms:

```javascript
g_form.addInfoMessage(`Summary: ${tasks.length} tasks total (${countByState.todo} to do, ${countByState.in_progress} in progress, ${countByState.done} done, ${countByState.canceled} canceled)`);
```

## Data Flow and State Management

The application follows a specific workflow for managing state:

1. When a user creates or updates a task in the UI, the client-side form submits the change to the server
2. The server records the change in the database
3. Business rules detect the change and perform automated actions:
   - Updating the task's active status and closed_on date
   - Checking if all tasks in the list are now inactive
   - Updating the list's status if necessary
4. When a user views a list form, the scratchpad business rule prepares task data
5. The client script consumes this data and enhances the UI with task information

This workflow ensures data consistency and provides a responsive user experience.

## ServiceNow SDK References

For more information on the ServiceNow SDK components used in this application:

- [Business Rule API](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/business-rule-api-now-ts.html)
- [Client Script API](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/client-script-api-now-ts.html)
- [ACL API](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/acl-api-now-ts.html)
- [Table API](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/table-api-now-ts.html)
- [ServiceNow Fluent API Reference](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/servicenow-fluent-api-reference.html)
- [GlideRecord API Documentation](https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server/r_ScopedGlideRecordAddQuery)
- [GlideForm API Documentation](https://developer.servicenow.com/dev.do#!/reference/api/rome/client/c_GlideFormAPI)

## Related Documentation

- [Schema Documentation](./schema.md) - Details on the data model
- [Features Documentation](./features.md) - Information about features and functionality
- [Development Guide](./development.md) - Guide to development workflows and tooling

