import { default_view, List } from "@servicenow/sdk/core";

export default List({
    $id: "a3777d004f4122107b614d94b2ce0b48",
    view:default_view,
    table:"x_snc_todos_task",
    columns: ["title","state","active","closed_on","list","list.category","order","sys_created_on","sys_updated_on"]
});
