import { Role } from '@servicenow/sdk/core'
import { x_snc_todos_user } from './user.now'

export const x_snc_todos_admin = Role({
    $id: Now.ID['admin_role'],
    name: 'x_snc_todos.admin',
    contains_roles: [x_snc_todos_user]
})