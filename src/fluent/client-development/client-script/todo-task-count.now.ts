/**
 * @see {@link https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/client-script-api.html Client Script API Reference}
 */
import { ClientScript } from "@servicenow/sdk/core";

/**
 * Client script that runs when loading a list record
 * Displays a summary of tasks in the list and their current states
 * Uses scratchpad data set by a corresponding server script
 */
export default ClientScript({
    $id: "2bd9bd5e4fc562107b614d94b2ce0be3",
    type:"onLoad",
    ui_type:"desktop",
    table: "x_snc_todos_list",
    script: Now.include('./todo-task-count.js'),
    global: true,
    name: "Show summary of tasks",
    active: true,
    applies_extended: false,
    description: "Shows a summary of the tasks and their states",
    isolate_script: true
});
