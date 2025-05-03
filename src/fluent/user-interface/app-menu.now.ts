import { ApplicationMenu, Record } from '@servicenow/sdk/core'
import { CUSTOM_APPLICATIONS_CATEGORY } from '../../server/constants'
import { x_snc_todos_user } from '../security/roles/user.now'

/**
 * Defines the application menu structure and navigation
 * Creates menu items for Lists, Tasks, and Categories
 * Only users with the todos_user role can access these menu items
 */
const menu = ApplicationMenu({
    $id: Now.ID['my-app-menu'],
    title: "Todo's app",
    description: "Todo's application to track lists, tasks, and subtasks",
    category: CUSTOM_APPLICATIONS_CATEGORY,
    roles: [x_snc_todos_user],
    active: true
})

// Create Lists menu module
Record({
    table: "sys_app_module",
    $id: Now.ID['lists-module'],
    data: {
        title: 'Lists',
        active: true,
        application: menu.$id,
        link_type: 'LIST',
        name: 'x_snc_todos_list',
        order: 200,
        override_menu_roles: false,
        require_confirmation: false,
        uncancelable: false
    }
})

// Create Tasks menu module
Record({
    table: "sys_app_module",
    $id: Now.ID['tasks-module'],
    data: {
        title: 'Tasks',
        active: true,
        application: menu.$id,
        link_type: 'LIST',
        name: 'x_snc_todos_task',
        order: 200,
        override_menu_roles: false,
        require_confirmation: false,
        uncancelable: false
    }
})

// Create Categories menu module
Record({
    table: "sys_app_module",
    $id: Now.ID['categories-module'],
    data: {
        title: 'Categories',
        active: true,
        application: menu.$id,
        link_type: 'LIST',
        name: 'x_snc_todos_category',
        order: 200,
        override_menu_roles: false,
        require_confirmation: false,
        uncancelable: false
    }
})
