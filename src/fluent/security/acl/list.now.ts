/**
 * @see {@link https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/acl-api.html ACL API Reference}
 */
import { ACL } from '@servicenow/sdk/core'
import { x_snc_todos_user } from '../roles/user.now'
import { CREATED_BY_ME, CREATED_BY_ME_OR_NEW } from '../../../server/constants'

/**
 * Access Control List (ACL) rules for the List table
 * Defines who can read, write, create, and delete lists
 * Uses CREATED_BY_ME condition to restrict users to their own lists
 */
export const x_snc_todos_list_acl = ACL({
    $id: Now.ID['list-acl'],
    operation: "create",
    table: "x_snc_todos_list",
    roles: [x_snc_todos_user]
})

// Allow users to read their own lists
ACL({
    $id: Now.ID['list-read-acl'],
    operation: "read",
    table: "x_snc_todos_list",
    roles: [x_snc_todos_user],
    condition: CREATED_BY_ME
})

// Allow users to update their own lists
ACL({
    $id: Now.ID['list-write-acl'],
    operation: "write",
    table: "x_snc_todos_list",
    roles: [x_snc_todos_user],
    condition: CREATED_BY_ME_OR_NEW
})

// Allow users to delete their own lists
ACL({
    $id: Now.ID['list-delete-acl'],
    operation: "delete",
    table: "x_snc_todos_list",
    roles: [x_snc_todos_user],
    condition: CREATED_BY_ME
})