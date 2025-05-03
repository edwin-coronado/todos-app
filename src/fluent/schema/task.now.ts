// filepath: /Users/edwin.coronado/git/todos-app/src/fluent/schema/task.now.ts
// Defines the Task table schema using ServiceNow Fluent Table API
// Core data structure for todo items with state tracking and list references
import { BooleanColumn, DateTimeColumn, IntegerColumn, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'

export const x_snc_todos_task = Table({
    name: 'x_snc_todos_task',
    display: "title", // Sets the primary display field for task records
    schema: {
        title: StringColumn({ label: 'Title', mandatory: true, maxLength: 255 }),
        description: StringColumn({ label: 'Description', maxLength: 4_000 }),
        order: IntegerColumn({ label: 'Order', default: 0 }), // For custom sorting/ordering of tasks
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
            read_only: true // System-managed field that users can't directly modify
        }),
        closed_on: DateTimeColumn({
            label: "Closed on",
            read_only: true // Automatically set when a task is completed
        }),
        state: StringColumn({
            label: 'State',
            mandatory: true,
            default: 'todo',
            choices: { // Defines valid state options using the Fluent Choice API pattern
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