/**
 * @see {@link https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/acl-api.html ACL API Reference}
 */
import { Acl } from '@servicenow/sdk/core'
import { x_snc_todos_user } from '../roles/user.now'
import { recordCreatedByMe, recordCreatedByMeOrNew } from '../../../server/utils'

/**
 * Access Control List (ACL) rules for the Task table
 * Defines who can read, write, create, and delete tasks
 * Tasks inherit ownership from their parent list
 */
export const x_snc_todos_task_acl = Acl({
    $id: Now.ID['task-acl'],
    operation: "create",
    table: "x_snc_todos_task",
    roles: [x_snc_todos_user],
    type: 'record'
})

// Allow users to read their own tasks
Acl({
    $id: Now.ID['task-read-acl'],
    operation: "read",
    table: "x_snc_todos_task",
    roles: [x_snc_todos_user],
    script: recordCreatedByMe,
    type: 'record'
})

// Allow users to update their own tasks
Acl({
    $id: Now.ID['task-write-acl'],
    operation: "write",
    table: "x_snc_todos_task",
    roles: [x_snc_todos_user],
    script: recordCreatedByMeOrNew,
    type: 'record'
})