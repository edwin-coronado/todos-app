// filepath: /Users/edwin.coronado/git/todos-app/src/fluent/server-development/business-rule/handle-task-update.now.ts
// Defines a business rule that executes after task records are inserted or updated
// Uses the Fluent BusinessRule API to register server-side automation logic
import { BusinessRule } from '@servicenow/sdk/core'
import { handleTaskUpdate } from '../../../server/utils'

BusinessRule({
    $id: Now.ID['handletaskupdate'], // Unique identifier for this business rule
    name: "Handle task update", // Display name in ServiceNow
    table: "x_snc_todos_task", // Table this business rule runs against
    action: ["update","insert"], // Events that trigger this business rule
    script: handleTaskUpdate, // External function containing the business logic
    active: true, // Business rule is enabled
    when: "after", // Executes after the database operation completes
    abort_action: false // Won't abort the operation if the script fails
})