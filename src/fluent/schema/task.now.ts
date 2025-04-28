import { BooleanColumn, DateTimeColumn, IntegerColumn, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'

export const x_snc_todos_task = Table({
    name: 'x_snc_todos_task',
    display: "title",
    schema: {
        title: StringColumn({ label: 'Title', mandatory: true, maxLength: 255 }),
        description: StringColumn({ label: 'Description', maxLength: 4_000 }),
        order: IntegerColumn({ label: 'Order', default: 0 }),
        list: ReferenceColumn({ label: 'List', referenceTable: 'x_snc_todos_list', mandatory: true,
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