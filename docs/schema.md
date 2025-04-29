# Data Schema Documentation

This document describes the data model of the Todos Application, including tables, fields, relationships, and configuration details.

## Overview

The Todos Application is built around three main tables that form a hierarchical data structure:

1. **Categories** - Top-level organization units that contain Lists
2. **Lists** - Collections of related Tasks
3. **Tasks** - Individual work items with states and properties

These tables are implemented using ServiceNow's Fluent API with TypeScript, providing type safety and declarative table definitions.

## Table Structure

### Categories Table (`x_snc_todos_category`)

Categories provide the highest level of organization in the application, allowing users to group related Lists together.

#### Fields

| Field | Type | Description | Properties |
|-------|------|-------------|------------|
| name | String | Category name | Mandatory, Unique, Max Length: 40 |

#### Implementation

The Category table is defined in [`src/fluent/schema/category.now.ts`](../src/fluent/schema/category.now.ts) using the ServiceNow SDK's Table API:

```typescript
export const x_snc_todos_category = Table({
    name: 'x_snc_todos_category',
    schema: {
        name: StringColumn({ label: 'Category', mandatory: true, maxLength: 40, unique: true })
    },
    label: "Todos Category",
    index: [{"name":"index","element":"name","unique":true}]
})
```

The application includes several default categories created on installation.

### Lists Table (`x_snc_todos_list`)

Lists are collections of related Tasks that belong to a Category.

#### Fields

| Field | Type | Description | Properties |
|-------|------|-------------|------------|
| name | String | List name | Mandatory, Max Length: 255 |
| description | String | Detailed description | Max Length: 4,000 |
| active | Boolean | Whether the list is active | Default: true, Read-only |
| closed_on | DateTime | When the list was closed | Read-only |
| category | Reference | Reference to parent category | References x_snc_todos_category |

#### Implementation

The List table is defined in [`src/fluent/schema/list.now.ts`](../src/fluent/schema/list.now.ts):

```typescript
export const x_snc_todos_list = Table({
    name: 'x_snc_todos_list',
    schema: {
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 255 }),
        active: BooleanColumn({ label: 'Active', default: "true", read_only: true }),
        description: StringColumn({ label: 'Description', maxLength: 4_000 }),
        closed_on: DateTimeColumn({ label: 'Closed on', read_only: true }),
        category: ReferenceColumn({
            label: 'Category', referenceTable: 'x_snc_todos_category',
            attributes: {
                encode_utf8: false
            },
            maxLength: 32
        })
    },
    label: "Todos List",
    index: [{ "name": "index", "element": "category", "unique": false }]
})
```

### Tasks Table (`x_snc_todos_task`)

Tasks are the core work items in the application, representing individual todo items.

#### Fields

| Field | Type | Description | Properties |
|-------|------|-------------|------------|
| title | String | Task title | Mandatory, Max Length: 255 |
| description | String | Detailed description | Max Length: 4,000 |
| order | Integer | Position in list | Default: 0 |
| list | Reference | Reference to parent list | Mandatory, References x_snc_todos_list |
| active | Boolean | Whether the task is active | Default: true, Read-only |
| closed_on | DateTime | When the task was closed | Read-only |
| state | String | Current state of the task | Mandatory, Default: 'todo' |

#### State Values

Tasks can be in one of four states:
- **todo** - Initial state for new tasks
- **in_progress** - Tasks currently being worked on
- **done** - Completed tasks
- **canceled** - Tasks that have been canceled

#### Implementation

The Task table is defined in [`src/fluent/schema/task.now.ts`](../src/fluent/schema/task.now.ts):

```typescript
export const x_snc_todos_task = Table({
    name: 'x_snc_todos_task',
    display: "title",
    schema: {
        title: StringColumn({ label: 'Title', mandatory: true, maxLength: 255 }),
        description: StringColumn({ label: 'Description', maxLength: 4_000 }),
        order: IntegerColumn({ label: 'Order', default: 0 }),
        list: ReferenceColumn({ 
            label: 'List', 
            referenceTable: 'x_snc_todos_list', 
            mandatory: true,
            attributes: {
                encode_utf8: false
            }
        }),
        active: BooleanColumn({
            default: "true",
            label: "Active",
            read_only: true
        }),
        closed_on: DateTimeColumn({
            label: "Closed on",
            read_only: true
        }),
        state: StringColumn({
            label: 'State',
            mandatory: true,
            default: 'todo',
            choices: {
                todo: {
                    label: 'To do',
                    inactive_on_update: false
                },
                in_progress: {
                    label: 'In progress',
                    inactive_on_update: false
                },
                done: {
                    label: 'Done',
                    inactive_on_update: false
                },
                canceled: {
                    label: 'Canceled',
                    inactive_on_update: false
                }
            }
        })
    },
    label: "Todos Task"
})
```

## Relationships

The data model establishes these relationships:

1. **Category-to-List**: One-to-many relationship
   - A Category can contain multiple Lists
   - A List belongs to exactly one Category (through the `category` field)

2. **List-to-Task**: One-to-many relationship
   - A List can contain multiple Tasks
   - A Task belongs to exactly one List (through the `list` field)

## State Management

Task state and list activity are managed automatically:

- When a task is set to "done" or "canceled", it is marked inactive and its `closed_on` timestamp is set
- When all tasks in a list are inactive, the list itself is marked inactive and its `closed_on` timestamp is set
- When a task is reopened, both the task and its list are marked active again

See [Features Documentation](./features.md) for more details on state transition logic.

## Table Indexes

Each table includes optimized indexes:

- **Category**: Unique index on the `name` field for fast lookups and to enforce uniqueness
- **List**: Index on the `category` field for efficient filtering by category
- **Task**: No custom indexes are defined beyond the default system indexes

## ServiceNow SDK References

For more information on table configuration using the ServiceNow SDK:

- [Table Declaration Reference](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/table-declaration.html)
- [Column Types Reference](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/column-types.html)
- [Reference Columns Documentation](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/reference-columns.html)
- [ServiceNow Fluent API Reference](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/servicenow-fluent-api-reference.html)

