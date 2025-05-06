/**
 * @see {@link https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/acl-api.html ACL API Reference}
 */
import { Acl } from '@servicenow/sdk/core'
import { recordCreatedByMe, recordCreatedByMeOrNew } from '../../../server/utils'
import { x_snc_todos_user } from '../roles/user.now'

/**
 * Access Control List (ACL) rules for the List table
 * Defines who can read, write, create, and delete lists
 * Uses recordCreatedByMe or recordCreatedByMeOrNew scripts to restrict users to their own lists
 */
export const x_snc_todos_list_acl = Acl({
    $id: Now.ID['list-acl'],
    operation: "create",
    table: "x_snc_todos_list",
    roles: [x_snc_todos_user],
    type: 'record'
})

// Allow users to read their own lists
Acl({
    $id: Now.ID['list-read-acl'],
    operation: "read",
    table: "x_snc_todos_list",
    roles: [x_snc_todos_user],
    script: recordCreatedByMe,
    type: 'record'
})

// Allow users to update their own lists
Acl({
    $id: Now.ID['list-write-acl'],
    operation: "write",
    table: "x_snc_todos_list",
    roles: [x_snc_todos_user],
    script: recordCreatedByMeOrNew,
    type: 'record'
})

// Allow users to delete their own lists
Acl({
    $id: Now.ID['list-delete-acl'],
    operation: "delete",
    table: "x_snc_todos_list",
    roles: [x_snc_todos_user],
    script: recordCreatedByMe,
    type: 'record'
})