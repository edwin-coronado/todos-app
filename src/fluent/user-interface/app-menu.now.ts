// filepath: /Users/edwin.coronado/git/todos-app/src/fluent/user-interface/app-menu.now.ts
// Defines the application menu and navigation structure using ServiceNow Fluent API
// Creates the app entry point and modules visible in the navigation menu
import { ApplicationMenu, Record } from '@servicenow/sdk/core'
import { CUSTOM_APPLICATIONS_CATEGORY } from '../../server/constants'
import { x_snc_todos_user } from '../security/roles/user.now'

// Define the main application menu entry
const menu = ApplicationMenu({
    $id: Now.ID['my-app-menu'],
    title: "Todo's app", // Display name in the application navigator
    description: "Todo's application to track lists, tasks, and subtasks",
    category: CUSTOM_APPLICATIONS_CATEGORY, // Places the app in the custom applications category
    roles: [x_snc_todos_user], // Only users with the todos_user role can see this menu
    active: true // The menu is enabled
})

// Define the Lists module in the application menu
Record({
    table: "sys_app_module",
    $id: Now.ID['lists-module'],
    data: {
        title: 'Lists',
        active: true,
        application: menu.$id, // Associates this module with the parent app menu
        link_type: 'LIST', // Opens a list view of records
        name: 'x_snc_todos_list', // Points to the todos list table
        order: 200, // Determines the display order in the menu
        override_menu_roles: false,
        require_confirmation: false,
        uncancelable: false
    }
})

// Define the Tasks module in the application menu
Record({
    table: "sys_app_module",
    $id: Now.ID['tasks-module'],
    data: {
        title: 'Tasks',
        active: true,
        application: menu.$id,
        link_type: 'LIST',
        name: 'x_snc_todos_task', // Points to the todos task table
        order: 200,
        override_menu_roles: false,
        require_confirmation: false,
        uncancelable: false
    }
})

// Define the Categories module in the application menu
Record({
    table: "sys_app_module",
    $id: Now.ID['categories-module'],
    data: {
        title: 'Categories',
        active: true,
        application: menu.$id,
        link_type: 'LIST',
        name: 'x_snc_todos_category', // Points to the todos category table
        order: 200,
        override_menu_roles: false,
        require_confirmation: false,
        uncancelable: false
    }
})
