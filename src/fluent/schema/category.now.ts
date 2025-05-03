// filepath: /Users/edwin.coronado/git/todos-app/src/fluent/schema/category.now.ts
// Defines the Category table schema using ServiceNow Fluent Table API
// This creates a custom table to store categorization options for todo tasks
import { Record, StringColumn, Table } from '@servicenow/sdk/core'

export const x_snc_todos_category = Table({
    name: 'x_snc_todos_category', // Internal table name with app prefix
    schema: {
        name: StringColumn({ label: 'Category', mandatory: true, maxLength: 40, unique: true })
    },
    label: "Todos Category", // User-friendly table label
    index: [{"name":"index","element":"name","unique":true}] // Defines indexing for performance
})

// Define default category records using Fluent Record API
// Each Record call creates a predefined category during app installation

// Work category record definition with demo installation method
Record({
    $id: Now.ID['work-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Work' },
    $meta: {
        installMethod: 'demo'
    }
})

// Personal category record definition with demo installation method
Record({
    $id: Now.ID['personal-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Personal' },
    $meta: {
        installMethod: 'demo'
    }
})

// Health/Fitness category record definition with demo installation method
Record({
    $id: Now.ID['health-fitness-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Health/Fitness' },
    $meta: {
        installMethod: 'demo'
    }
})

// Home category record definition with demo installation method
Record({
    $id: Now.ID['home-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Home' },
    $meta: {
        installMethod: 'demo'
    }
})

// Finance category record definition with demo installation method
Record({
    $id: Now.ID['finance-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Finance' },
    $meta: {
        installMethod: 'demo'
    }
})

// Shopping category record definition with demo installation method
Record({
    $id: Now.ID['shopping-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Shopping' },
    $meta: {
        installMethod: 'demo'
    }
})

// Errands category record definition with demo installation method
Record({
    $id: Now.ID['errands-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Errands' },
    $meta: {
        installMethod: 'demo'
    }
})

// Study/Learning category record definition with demo installation method
Record({
    $id: Now.ID['study-learning-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Study/Learning' },
    $meta: {
        installMethod: 'demo'
    }
})

// Travel category record definition with demo installation method
Record({
    $id: Now.ID['travel-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Travel' },
    $meta: {
        installMethod: 'demo'
    }
})

// Goals category record definition with demo installation method
Record({
    $id: Now.ID['goals-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Goals' },
    $meta: {
        installMethod: 'demo'
    }
})

// Events category record definition with demo installation method
Record({
    $id: Now.ID['events-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Events' },
    $meta: {
        installMethod: 'demo'
    }
})

// Family category record definition with demo installation method
Record({
    $id: Now.ID['family-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Family' },
    $meta: {
        installMethod: 'demo'
    }
})

// Social category record definition with demo installation method
Record({
    $id: Now.ID['social-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Social' },
    $meta: {
        installMethod: 'demo'
    }
})

// Self-Care category record definition with demo installation method
Record({
    $id: Now.ID['self-care-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Self-Care' },
    $meta: {
        installMethod: 'demo'
    }
})

// Projects category record definition with demo installation method
Record({
    $id: Now.ID['projects-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Projects' },
    $meta: {
        installMethod: 'demo'
    }
})
