// filepath: /Users/edwin.coronado/git/todos-app/src/fluent/security/acl/list.now.ts
// Defines Access Control Lists (ACLs) for the list table using ServiceNow Fluent ACL API
// Controls which roles can perform CRUD operations on todo list records
import { Acl } from '@servicenow/sdk/core'
import { CREATED_BY_ME, CREATED_BY_ME_OR_NEW } from '../../../server/constants'
import { x_snc_todos_user } from '../roles/user.now'

// Allows users with the todos_user role to create new list records
Acl({
    $id: Now.ID['list_create_acl'],
    operation: "create",
    type: "record",
    table: "x_snc_todos_list",
    roles: [x_snc_todos_user]
})

// Allows users with the todos_user role to read only list records they created
Acl({
    $id: Now.ID['list_read_acl'],
    operation: "read",
    type: "record",
    table: "x_snc_todos_list",
    roles: [x_snc_todos_user],
    condition: CREATED_BY_ME // Restricts access to only records created by the current user
})

// Allows users with the todos_user role to update only list records they created
Acl({
    $id: Now.ID['list_write_acl'],
    operation: "write",
    type: "record",
    table: "x_snc_todos_list",
    roles: [x_snc_todos_user],
    condition: CREATED_BY_ME_OR_NEW // Allows updates to existing records created by the user or new records
})

// Allows users with the todos_user role to delete only list records they created
Acl({
    $id: Now.ID['list_delete_acl'],
    operation: "delete",
    type: "record",
    table: "x_snc_todos_list",
    roles: [x_snc_todos_user],
    condition: CREATED_BY_ME // Restricts deletion to only records created by the current user
})