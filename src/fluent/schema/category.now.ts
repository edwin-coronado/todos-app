import { Record, StringColumn, Table } from '@servicenow/sdk/core'

export const x_snc_todos_category = Table({
    name: 'x_snc_todos_category',
    schema: {
        name: StringColumn({ label: 'Category', mandatory: true, maxLength: 40, unique: true })
    },
    label: "Todos Category",
    index: [{"name":"index","element":"name","unique":true}]
})

//Default categories
Record({
    $id: Now.ID['work-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Work' },
    $meta: {
        installMethod: 'demo'
    }
})

Record({
    $id: Now.ID['personal-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Personal' },
    $meta: {
        installMethod: 'demo'
    }
})

Record({
    $id: Now.ID['health-fitness-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Health/Fitness' },
    $meta: {
        installMethod: 'demo'
    }
})

Record({
    $id: Now.ID['home-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Home' },
    $meta: {
        installMethod: 'demo'
    }
})

Record({
    $id: Now.ID['finance-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Finance' },
    $meta: {
        installMethod: 'demo'
    }
})

Record({
    $id: Now.ID['shopping-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Shopping' },
    $meta: {
        installMethod: 'demo'
    }
})

Record({
    $id: Now.ID['errands-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Errands' },
    $meta: {
        installMethod: 'demo'
    }
})

Record({
    $id: Now.ID['study-learning-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Study/Learning' },
    $meta: {
        installMethod: 'demo'
    }
})

Record({
    $id: Now.ID['travel-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Travel' },
    $meta: {
        installMethod: 'demo'
    }
})

Record({
    $id: Now.ID['goals-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Goals' },
    $meta: {
        installMethod: 'demo'
    }
})

Record({
    $id: Now.ID['events-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Events' },
    $meta: {
        installMethod: 'demo'
    }
})

Record({
    $id: Now.ID['family-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Family' },
    $meta: {
        installMethod: 'demo'
    }
})

Record({
    $id: Now.ID['social-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Social' },
    $meta: {
        installMethod: 'demo'
    }
})

Record({
    $id: Now.ID['self-care-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Self-Care' },
    $meta: {
        installMethod: 'demo'
    }
})

Record({
    $id: Now.ID['projects-category'],
    table: 'x_snc_todos_category',
    data: { name: 'Projects' },
    $meta: {
        installMethod: 'demo'
    }
})
