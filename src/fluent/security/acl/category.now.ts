/**
 * @see {@link https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/acl-api.html ACL API Reference}
 */
import { Acl } from '@servicenow/sdk/core'
import { x_snc_todos_admin } from '../roles/admin.now'
import { ACL } from '@servicenow/sdk/core'
import { x_snc_todos_user } from '../roles/user.now'

Acl({
    $id: Now.ID['category_create_acl'],
    operation: "create",
    type: "record",
    table: "x_snc_todos_category",
    roles: [x_snc_todos_admin]
})

Acl({
    $id: Now.ID['category_read_acl'],
    operation: "read",
    type: "record",
    table: "x_snc_todos_category",
    roles: [x_snc_todos_admin],
})

Acl({
    $id: Now.ID['category_write_acl'],
    operation: "write",
    type: "record",
    table: "x_snc_todos_category",
    roles: [x_snc_todos_admin]
})

Acl({
    $id: Now.ID['category_delete_acl'],
    operation: "delete",
    type: "record",
    table: "x_snc_todos_category",
    roles: [x_snc_todos_admin]
})

/**
 * Access Control List (ACL) rules for the Category table
 * Categories are read-only for regular users, as they are managed by administrators
 * All users can view categories to organize their lists
 */
export const x_snc_todos_category_acl = ACL({
    $id: Now.ID['category-read-acl'],
    operation: "read",
    table: "x_snc_todos_category",
    roles: [x_snc_todos_user]
})