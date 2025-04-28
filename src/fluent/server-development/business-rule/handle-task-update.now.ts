import { BusinessRule } from '@servicenow/sdk/core'
import { handleTaskUpdate } from '../../../server/utils'

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