/**
 * @see {@link https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/business-rule-api.html Business Rule API Reference}
 */
import { BusinessRule } from '@servicenow/sdk/core'
import { handleTaskUpdate } from '../../../server/task-utils'

/**
 * Business rule that handles task state changes
 * Triggers after a task is inserted or updated to:
 * - Update task active status based on state
 * - Log task duration
 * - Update parent list status if all tasks are complete
 */
BusinessRule({
    $id: Now.ID['handletaskupdate'],
    name: "Handle task update",
    table: "x_snc_todos_task",
    action: ["update","insert"],
    script: handleTaskUpdate,
    active: true,
    when: "after",
    abort_action: false
})