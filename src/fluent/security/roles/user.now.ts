import { Role } from '@servicenow/sdk/core'

export const x_snc_todos_user = Role({
    $id: Now.ID['user_role'],
    name: 'x_snc_todos.user',
    contains_roles: ["a2e336209fd343b697d82a081cf58ce1"]
})