# ServiceNow SDK API Reference

This document provides detailed information about ServiceNow SDK API usage in the Todos Application, including common patterns, best practices, and troubleshooting guidance.

## ServiceNow SDK API Usage

### Table API

The Table API is used to define database tables in a declarative, type-safe manner.

#### Table Definition Pattern

```typescript
// src/fluent/schema/task.now.ts
export const x_snc_todos_task = Table({
    name: 'x_snc_todos_task',
    display: "title",
    schema: {
        // Field definitions
        title: StringColumn({ label: 'Title', mandatory: true, maxLength: 255 }),
        description: StringColumn({ label: 'Description', maxLength: 4_000 }),
        // ...other fields
    },
    label: "Todos Task"
})
```

#### Column Type Usage

The SDK provides various column types for different data needs:

- **StringColumn**: Text fields with optional constraints
- **IntegerColumn**: Numeric fields
- **BooleanColumn**: True/false fields
- **DateTimeColumn**: Date and time fields
- **ReferenceColumn**: References to other tables

#### Table Indexes

Optimize query performance with indexes:

```typescript
// src/fluent/schema/list.now.ts
export const x_snc_todos_list = Table({
    // ... table definition
    index: [{ "name": "index", "element": "category", "unique": false }]
})
```

**References**:
- [Table API Documentation](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/table-api-now-ts.html)
- [Table Declaration Reference](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/table-declaration.html)
- [Column Types Reference](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/column-types.html)

### Business Rule API

Business rules execute server-side logic when records are created, updated, viewed, or deleted.

#### Business Rule Definition Pattern

```typescript
// src/fluent/server-development/business-rule/handle-task-update.now.ts
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

#### External Script Inclusion

For complex business rules, it's a best practice to separate the implementation:

```typescript
// src/fluent/server-development/business-rule/set-scratchpad.now.ts
BusinessRule({
    $id: Now.ID['set-scratchpad-br'],
    name: "Set scratchpad",
    when: "display",
    table: 'x_snc_todos_list',
    script: Now.include('./set-scratchpad.js')
})
```

**References**:
- [Business Rule API Documentation](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/business-rule-api-now-ts.html)
- [Business Rule Declaration Reference](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/business-rule-declaration.html)

### Client Script API

Client scripts provide dynamic behavior in the user interface.

#### Client Script Definition Pattern

```typescript
// src/fluent/client-development/client-script/todo-task-count.now.ts
ClientScript({
    $id: Now.ID['todo-task-count'],
    name: "Todo task count",
    table: "x_snc_todos_list",
    type: 'onLoad',
    active: true,
    script: function(g_form) {
        // Implementation reference (actual code in separate JS file)
    }
})
```

#### Scratchpad Usage

Client scripts can access data from the scratchpad, set by server-side scripts:

```javascript
// src/fluent/client-development/client-script/todo-task-count.js
function onLoad() {
    try {
        // Parse the taskSummary JSON string from scratchpad
        const tasks = JSON.parse(g_scratchpad.taskSummary);
        
        // Use the data to enhance the UI
        // ...
    } catch (error) {
        g_form.addErrorMessage("An error occurred: " + error.message);
    }
}
```

**References**:
- [Client Script API Documentation](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/client-script-api-now-ts.html)
- [Client Script Declaration Reference](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/client-script-declaration.html)

### ACL API

Access Control Lists (ACLs) define who can access and modify records.

#### ACL Definition Pattern

```typescript
// src/fluent/security/acl/task.now.ts
Acl({
    $id: Now.ID['task_read_acl'],
    operation: "read",
    type: "record",
    table: "x_snc_todos_task",
    roles: [x_snc_todos_user],
    condition: CREATED_BY_ME
})
```

#### Role-Based Access Control

ACLs can be limited to specific roles:

```typescript
// src/fluent/security/acl/category.now.ts
Acl({
    $id: Now.ID['category_write_acl'],
    operation: "write",
    type: "record",
    table: "x_snc_todos_category",
    roles: [x_snc_todos_admin]
})
```

**References**:
- [ACL API Documentation](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/acl-api-now-ts.html)
- [Access Control Rule Declaration Reference](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/access-control-rule-declaration.html)

## Common Patterns

### Data Access Patterns

#### GlideRecord Query Pattern

```typescript
// src/server/utils.ts
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

#### Record Type Conversion

Convert GlideRecord objects to TypeScript types for type safety:

```typescript
// src/server/utils.ts
function grToTask(task: GlideRecord): Task {
  return {
    sys_id: task.getValue('sys_id'),
    title: task.getValue('title'),
    description: task.getValue('description'),
    order: parseInt(task.getValue('order')),
    state: task.getValue('state'),
    list: task.getValue('list'),
    active: task.getValue('active') === "true"
  };
}
```

### State Management Patterns

#### Detecting State Transitions

```typescript
// src/server/utils.ts
export function handleTaskUpdate(current: GlideRecord, previous: GlideRecord): void {
  const previousState = previous.getValue('state');
  const currentState = current.getValue('state');

  const taskWasClosed = (previousState !== 'done' && previousState !== 'canceled')
    && (currentState === 'done' || currentState === 'canceled')

  const taskWasReopened = (previousState === 'done' || previousState === 'canceled')
    && (currentState !== 'done' && currentState !== 'canceled')
  
  // Take action based on state transitions
  // ...
}
```

#### Conditional State Updates

```typescript
// src/server/utils.ts
if (taskWasClosed) {
  closeTask(current);
  if (areAllTasksInactive(tasksInList)) {
    closeList(current.getValue('list'));
  }
}

if (taskWasReopened) {
  reopenTask(current);
  openList(current.getValue('list'));
}
```

### Security Implementation Patterns

#### Record-Level Security

Restricting access to records created by the current user:

```typescript
// src/server/constants.ts
export const CREATED_BY_ME = "sys_created_by=javascript:gs.getUserName()^EQ";
```

This constant is used in ACLs to restrict access to records:

```typescript
// src/fluent/security/acl/task.now.ts
Acl({
    // ... ACL properties
    condition: CREATED_BY_ME
})
```

#### Role Inheritance

```typescript
// src/fluent/security/roles/admin.now.ts
export const x_snc_todos_admin = Role({
    $id: Now.ID['admin_role'],
    name: 'x_snc_todos.admin',
    contains_roles: [x_snc_todos_user]
})
```

### UI Enhancement Patterns

#### Form Message Pattern

```javascript
// src/fluent/client-development/client-script/todo-task-count.js
// Add information messages
g_form.addInfoMessage(`Summary: ${tasks.length} tasks total (${countByState.todo} to do, ${countByState.in_progress} in progress, ${countByState.done} done, ${countByState.canceled} canceled)`);

// Add error messages
g_form.addErrorMessage("An error occurred: " + error.message);
```

#### Scratchpad Data Pattern

```javascript
// Server side (set-scratchpad.js)
g_scratchpad.taskSummary = JSON.stringify(tasks);

// Client side (todo-task-count.js)
const tasks = JSON.parse(g_scratchpad.taskSummary);
```

## Best Practices

### Error Handling

#### Server-Side Error Handling

```typescript
// src/server/utils.ts
function closeTask(task: GlideRecord) {
  task.setValue('active', false);
  task.setValue('closed_on', new GlideDateTime());
  task.update();

  try {
    logDuration(task);
  } catch (ex) {
    console.error('Error logging duration', ex);
  }
}
```

#### Client-Side Error Handling

```javascript
// src/fluent/client-development/client-script/todo-task-count.js
try {
    // Code that might throw errors
    const tasks = JSON.parse(g_scratchpad.taskSummary);
    // ...
} catch (error) {
    // Handle the error
    g_form.addErrorMessage("An error occurred: " + error.message);
    jslog("Error in todo-task-count client script: " + error.message);
}
```

### Performance Optimization

#### Efficient Queries

Limit query results to only what you need:

```typescript
// Add conditions to limit results
gr.addQuery('active', true);
gr.setLimit(100);
```

#### Batch UI Updates

Instead of updating the UI multiple times, prepare data and update once:

```javascript
// Inefficient: Multiple UI updates
tasks.forEach(task => {
    g_form.addInfoMessage(`Task: ${task.title}`);
});

// Better: Consolidate updates
let message = "Tasks:\n";
tasks.forEach(task => {
    message += `- ${task.title}\n`;
});
g_form.addInfoMessage(message);
```

### Security Considerations

#### Input Validation

Always validate input data, especially in client scripts:

```javascript
// Validate before using
if (!g_scratchpad.taskSummary) {
    g_form.addInfoMessage("No tasks found for this list.");
    return;
}
```

#### Minimal Permissions

Follow the principle of least privilege:

```typescript
// Only grant the permissions that are needed
Acl({
    // Only allow reading, not writing
    operation: "read",
    // Only for users with this role
    roles: [x_snc_todos_user],
    // Only for records they created
    condition: CREATED_BY_ME
})
```

### Testing Approaches

#### Isolated Test Data

Create and clean up test data within each test:

```typescript
// src/fluent/atf-tests/test-handle-task-update.now.ts
// Create test data
const list0 = atf.server.recordInsert({
    $id: Now.ID['list0'],
    table: 'x_snc_todos_list',
    // ...
})

// ... test actions ...

// Clean up
atf.server.recordDelete({
    $id: Now.ID['delete-test-list'],
    table: 'x_snc_todos_list',
    recordId: list0.record_id
})
```

#### Verification Steps

Always verify the expected outcomes:

```typescript
// Verify task is inactive
atf.server.recordValidation({
    $id: Now.ID['validate-task0'],
    table: 'x_snc_todos_task',
    recordId: task0.record_id,
    fieldValues: "active=false^closed_onISNOTEMPTY",
    assert: 'record_validated'
})
```

## Troubleshooting Guide

### Common Issues

#### Issue: Business Rule Not Firing

**Symptoms**: Your business rule doesn't execute when expected.

**Possible Causes**:
- Business rule is not active (`active: false`)
- Action doesn't match the operation (e.g., set for "update" but triggered on "insert")
- Table name is incorrect
- Scope conflicts

**Resolution**:
- Check the business rule configuration
- Verify that the table name matches exactly
- Ensure the action includes the operation you're performing
- Confirm that the rule is active

#### Issue: ACL Blocking Access

**Symptoms**: Users can't access or modify records they should have access to.

**Possible Causes**:
- Missing role assignment
- Incorrect condition formula
- Conflicting ACLs

**Resolution**:
- Check role assignments for the user
- Verify the condition formula using Query Builder
- Review all ACLs that might apply to the table
- Try temporarily disabling ACLs to isolate the issue

#### Issue: Client Script Not Loading

**Symptoms**: Client script behavior doesn't appear on forms.

**Possible Causes**:
- Script is inactive
- JavaScript errors preventing execution
- Wrong table or UI context

**Resolution**:
- Check that the script is active
- Look for JavaScript errors in the browser console
- Verify that the script's table and type match the context where you expect it to run

#### Issue: Type Errors During Build

**Symptoms**: TypeScript compilation fails with type errors.

**Possible Causes**:
- Missing type definitions
- Incorrect types or interfaces
- SDK version mismatch

**Resolution**:
- Run `npm run types` to regenerate type definitions
- Check the types used in your code
- Ensure SDK dependencies are at compatible versions

### Debugging Techniques

#### Server-Side Debugging

```typescript
// Add debug logs
gs.debug("Variable value: " + JSON.stringify(myVar));

// Log errors
gs.error("An error occurred: " + ex);
```

#### Client-Side Debugging

```javascript
// Log to browser console
console.log("Task data:", tasks);

// Use the jslog helper function
function jslog(message) {
    if (typeof console !== 'undefined' && console.log) {
        console.log("[Todos App] " + message);
    }
}

