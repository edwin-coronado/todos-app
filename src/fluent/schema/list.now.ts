// filepath: /Users/edwin.coronado/git/todos-app/src/fluent/schema/list.now.ts
// Defines the List table schema using ServiceNow Fluent Table API
// Represents a collection of related tasks that can be categorized
import { BooleanColumn, DateTimeColumn, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'

export const x_snc_todos_list = Table({
    name: 'x_snc_todos_list',
    schema: {
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 255 }),
        active: BooleanColumn({ label: 'Active', default: "true", read_only: true }), // System-managed field
        description: StringColumn({ label: 'Description', maxLength: 4_000 }),
        closed_on: DateTimeColumn({ label: 'Closed on', read_only: true }), // Timestamp for list completion
        category: ReferenceColumn({
            label: 'Category', 
            referenceTable: 'x_snc_todos_category', // References the category table for organization
            attributes: {
                encode_utf8: false
            },
            maxLength: 32
        })
    },
    label: "Todos List",
    index: [{ "name": "index", "element": "category", "unique": false }] // Index for optimized category filtering
})