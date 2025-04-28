import { default_view, List } from "@servicenow/sdk/core";

export default List({
    $id: "53abf90e4ff422107b614d94b2ce0b18",
    view:default_view,
    table:"x_snc_todos_list",
    columns: ["name","active","category","description"]
});
