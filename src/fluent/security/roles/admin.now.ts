// filepath: /Users/edwin.coronado/git/todos-app/src/fluent/security/roles/admin.now.ts
// Defines the admin role for the todos application using ServiceNow Fluent Role API
// Admin users have elevated privileges compared to regular users
import { Role } from '@servicenow/sdk/core'
import { x_snc_todos_user } from './user.now'

export const x_snc_todos_admin = Role({
    $id: Now.ID['admin_role'],
    name: 'x_snc_todos.admin', // Role name with app prefix
    contains_roles: [x_snc_todos_user] // Inherits all permissions from the user role plus additional admin permissions
})