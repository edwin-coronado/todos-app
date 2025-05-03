import { Role } from '@servicenow/sdk/core'

/**
 * Defines the base user role for the Todos application
 * Users with this role can:
 * - View and manage their own lists and tasks
 * - View categories
 * - Access the Todos application menu
 */
export const x_snc_todos_user = Role({
    $id: Now.ID['x_snc_todos_user'],
    name: 'x_snc_todos_user',
    description: 'User of the Todos application',
    assigns_to: ['user'],
    elevates_privilege: false,
    suffix: 'user'
})