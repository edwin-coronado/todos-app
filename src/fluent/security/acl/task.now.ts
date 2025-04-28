import { Acl } from '@servicenow/sdk/core'
import { CREATED_BY_ME, CREATED_BY_ME_OR_NEW } from '../../../server/constants'
import { x_snc_todos_user } from '../roles/user.now'

Acl({
    $id: Now.ID['task_create_acl'],
    operation: "create",
    type: "record",
    table: "x_snc_todos_task",
    roles: [x_snc_todos_user]
})

Acl({
    $id: Now.ID['task_read_acl'],
    operation: "read",
    type: "record",
    table: "x_snc_todos_task",
    roles: [x_snc_todos_user],
    condition: CREATED_BY_ME
})

Acl({
    $id: Now.ID['task_write_acl'],
    operation: "write",
    type: "record",
    table: "x_snc_todos_task",
    roles: [x_snc_todos_user],
    condition: CREATED_BY_ME_OR_NEW
})

Acl({
    $id: Now.ID['task_delete_acl'],
    operation: "delete",
    type: "record",
    table: "x_snc_todos_task",
    roles: [x_snc_todos_user],
    condition: CREATED_BY_ME
})