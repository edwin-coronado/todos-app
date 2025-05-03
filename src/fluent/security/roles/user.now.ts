// filepath: /Users/edwin.coronado/git/todos-app/src/fluent/security/roles/user.now.ts
// Defines the base user role for the todos application using ServiceNow Fluent Role API
// This role is assigned to users who need access to the todos application
import { Role } from '@servicenow/sdk/core'

export const x_snc_todos_user = Role({
    $id: Now.ID['user_role'],
    name: 'x_snc_todos.user', // Role name with app prefix
    contains_roles: ["a2e336209fd343b697d82a081cf58ce1"] // Inherits permissions from this base role
})