import { ClientScript } from "@servicenow/sdk/core";

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
