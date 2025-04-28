import { Record } from "@servicenow/sdk/core";

export default Record({
    $id: "448679cc4f0122107b614d94b2ce0b34",
    table: "sys_ui_policy",
    data: {
        active: true,
        conditions: "closed_onISEMPTY^EQ",
        global: true,
        inherit: false,
        isolate_script: true,
        on_load: true,
        order: 100,
        reverse_if_false: true,
        run_scripts: false,
        script_false: `function onCondition() {

}`,
        script_true: `function onCondition() {

}`,
        short_description: "Hide \"Closed on\" if empty",
        sys_domain: "global",
        sys_domain_path: "/",
        sys_name: "Hide \"Closed on\" if empty",
        table: "x_snc_todos_task",
        ui_type: 0
    }
});
