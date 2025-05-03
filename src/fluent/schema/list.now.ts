import { BooleanColumn, DateTimeColumn, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'

/**
 * Defines the List table structure which represents a collection of related tasks
 * Lists can be categorized and track their active/closed state automatically
 */
export const x_snc_todos_list = Table({
    name: 'x_snc_todos_list',
    schema: {
        // Core list properties
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 255 }),
        description: StringColumn({ label: 'Description', maxLength: 4_000 }),
        
        // State tracking
        active: BooleanColumn({ label: 'Active', default: "true", read_only: true }),
        closed_on: DateTimeColumn({ label: 'Closed on', read_only: true }),
        
        // Categorization
        category: ReferenceColumn({
            label: 'Category', 
            referenceTable: 'x_snc_todos_category',
            attributes: {
                encode_utf8: false
            },
            maxLength: 32
        })
    },
    label: "Todos List",
    index: [{ "name": "index", "element": "category", "unique": false }]
})