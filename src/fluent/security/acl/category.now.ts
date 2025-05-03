/**
 * @see {@link https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/acl-api.html ACL API Reference}
 */
import { Acl } from '@servicenow/sdk/core'
import { x_snc_todos_admin } from '../roles/admin.now'
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
    roles: [x_snc_todos_admin, x_snc_todos_user],
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