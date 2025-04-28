import { BooleanColumn, DateTimeColumn, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'

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