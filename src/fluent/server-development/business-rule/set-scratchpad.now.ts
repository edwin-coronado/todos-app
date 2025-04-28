import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['set-scratchpad-br'],
    name: "Set scratchpad",
    when: "display",
    table: 'x_snc_todos_list',
    script: Now.include('./set-scratchpad.js')
})