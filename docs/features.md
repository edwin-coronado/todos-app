# Features Documentation

This document outlines the features and functionality of the Todos Application, explaining how users can manage tasks, lists, and categories.

## Task Management

### Task Creation and Organization

The Todos Application allows users to create and organize tasks within lists. Each task includes:

- **Title**: A short, descriptive name for the task
- **Description**: Optional detailed information about the task
- **State**: Current status of the task (todo, in_progress, done, canceled)
- **List**: The parent list to which the task belongs
- **Order**: Position of the task within its list

Tasks are created through the ServiceNow interface and are stored in the `x_snc_todos_task` table.

### State Transitions

Tasks follow a state-based lifecycle with four possible states:

1. **To do**: Initial state for new tasks
2. **In progress**: Tasks currently being worked on
3. **Done**: Completed tasks
4. **Canceled**: Tasks that have been abandoned or are no longer relevant

State transitions trigger automatic behaviors through business rules.

**Implementation**: The state transition logic is implemented in [`src/fluent/server-development/business-rule/handle-task-update.now.ts`](../src/fluent/server-development/business-rule/handle-task-update.now.ts) and [`src/server/utils.ts`](../src/server/utils.ts).

```typescript
export function handleTaskUpdate(current: GlideRecord, previous: GlideRecord): void {
  const previousState = previous.getValue('state');
  const currentState = current.getValue('state');

  const taskWasClosed = (previousState !== 'done' && previousState !== 'canceled')
    && (currentState === 'done' || currentState === 'canceled')

  const taskWasReopened = (previousState === 'done' || previousState === 'canceled')
    && (currentState !== 'done' && currentState !== 'canceled')

  const tasksInList = getTasksInList(current.getValue('list'));

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
}
```

### Automatic Closure Behavior

When a task's state changes to "done" or "canceled", the system automatically:

1. Marks the task as inactive
2. Sets the task's `closed_on` timestamp to the current time
3. Checks if all tasks in the parent list are now inactive
4. If so, marks the list as inactive and sets its `closed_on` timestamp

Conversely, when a task is reopened (state changes from "done" or "canceled" to another state), the system:

1. Marks the task as active again
2. Clears the task's `closed_on` timestamp
3. Marks the parent list as active and clears its `closed_on` timestamp

This automation ensures that lists accurately reflect the status of their contained tasks.

### Duration Tracking

The application tracks the duration of tasks from creation to completion. When a task is closed, the system:

1. Calculates the time between task creation and closure
2. Logs the duration with a breakdown of years, months, days, hours, minutes, and seconds

This feature provides insights into task completion times and can help identify bottlenecks or estimate future work.

**Implementation**: The duration tracking is implemented in the `logDuration` function in [`src/server/utils.ts`](../src/server/utils.ts):

```typescript
function logDuration(task: GlideRecord) {
  const start = task.getValue('sys_created_on');
  const end = task.getValue('closed_on');

  if (!end)
    return;

  const startMoment = moment(start);
  const endMoment = moment(end);

  const duration = moment.duration(endMoment.diff(startMoment));

  console.log(
    `Task '${task.getValue('title')}' was completed.
    Duration: ${duration.years()} years, ${duration.months()} months, ${duration.days()} days, ${duration.hours()} hours
    ${duration.minutes()} minutes, ${duration.seconds()} seconds`
  );
}
```

## List Management

### List Organization

Lists serve as containers for related tasks. Each list has:

- **Name**: A descriptive name for the list
- **Description**: Optional detailed information
- **Category**: Optional grouping for related lists
- **Active Status**: Whether the list contains active tasks
- **Closed Date**: When the list was closed (all tasks completed or canceled)

Lists provide a way to group related tasks and track their collective status.

### Category System

Categories provide the highest level of organization in the application. They allow users to group related lists together based on themes, projects, or any other organizational system.

The application comes with several predefined categories for common use cases:

- Work
- Personal
- Health/Fitness
- Home
- Finance
- Projects
- And more...

Users can select a category when creating a list, helping to maintain organization as the number of lists grows.

**Implementation**: Default categories are defined in [`src/fluent/schema/category.now.ts`](../src/fluent/schema/category.now.ts).

### Automatic List State Management

Lists automatically reflect the collective state of their contained tasks:

- A list is active if it contains any active tasks
- A list becomes inactive when all its tasks are done, canceled, or otherwise inactive
- A list is automatically reactivated when any of its tasks is reopened

This automation ensures that list status always accurately represents the status of contained tasks without manual updates.

## User Interface Features

### Task Count Display

When viewing a list record, the application automatically displays a summary of the tasks in that list, including:

- Total number of tasks
- Count of tasks by state (todo, in progress, done, canceled)
- Details of individual tasks

This feature is implemented through a client script that retrieves task data from the server and presents it directly on the list form.

**Implementation**: 
- Server-side data preparation: [`src/fluent/server-development/business-rule/set-scratchpad.js`](../src/fluent/server-development/business-rule/set-scratchpad.js)
- Client-side display: [`src/fluent/client-development/client-script/todo-task-count.js`](../src/fluent/client-development/client-script/todo-task-count.js)

```javascript
function onLoad() {
    try {
        // Check if taskSummary exists in scratchpad
        if (!g_scratchpad.taskSummary) {
            g_form.addInfoMessage("No tasks found for this list.");
            return;
        }
        
        // Parse the taskSummary JSON string from scratchpad into a JavaScript array
        const tasks = JSON.parse(g_scratchpad.taskSummary);
        
        // Display task count and details
        // ...
    } catch (error) {
        g_form.addErrorMessage("An error occurred while processing task data: " + error.message);
    }
}
```

### State Summaries

The application provides at-a-glance summaries of task states:

- Visual indicators for different states
- Count of tasks in each state
- Highlighting of overdue or urgent tasks

These summaries help users quickly understand the status of their tasks and identify areas that need attention.

### Form Enhancements

The application enhances standard ServiceNow forms with:

- Information messages showing task details
- Automatic update of related records
- Dynamic form behavior based on task state

These enhancements improve usability by presenting relevant information directly on the form without requiring navigation to other records.

## Related Documentation

- [Schema Documentation](./schema.md) - Details on the data model
- [Architecture Documentation](./architecture.md) - Information about business rules and client scripts
- [ServiceNow Client Scripting Documentation](https://developer.servicenow.com/dev.do#!/guides/paris/now-platform/client-scripting/client-scripts)
- [ServiceNow Business Rules Documentation](https://developer.servicenow.com/dev.do#!/guides/rome/now-platform/server-side-scripting/business-rules)
- [ServiceNow GlideForm API](https://developer.servicenow.com/dev.do#!/reference/api/rome/client/c_GlideFormAPI)

