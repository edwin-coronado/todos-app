// filepath: /Users/edwin.coronado/git/todos-app/src/fluent/server-development/business-rule/set-scratchpad.now.ts
// Defines a display business rule that sets up the scratchpad with values needed by the client
// The scratchpad provides a way to pass server data to client scripts
import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['set-scratchpad-br'],
    name: "Set scratchpad",
    when: "display", // Runs when records are displayed in the UI
    table: 'x_snc_todos_list', // Applies to the todos list table
    script: Now.include('./set-scratchpad.js') // References external JS implementation file
})