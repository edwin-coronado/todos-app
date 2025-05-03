// filepath: /Users/edwin.coronado/git/todos-app/src/fluent/security/acl/category.now.ts
// Defines Access Control Lists (ACLs) for the category table using ServiceNow Fluent ACL API
// Categories are managed by admins only, not regular users
import { Acl } from '@servicenow/sdk/core'
import { x_snc_todos_admin } from '../roles/admin.now'

// Restricts category creation to admin users only
Acl({
    $id: Now.ID['category_create_acl'],
    operation: "create",
    type: "record",
    table: "x_snc_todos_category",
    roles: [x_snc_todos_admin]
})

// Restricts category reading to admin users only
// No condition needed since all categories are visible to admins
Acl({
    $id: Now.ID['category_read_acl'],
    operation: "read",
    type: "record",
    table: "x_snc_todos_category",
    roles: [x_snc_todos_admin],
})

// Restricts category updates to admin users only
Acl({
    $id: Now.ID['category_write_acl'],
    operation: "write",
    type: "record",
    table: "x_snc_todos_category",
    roles: [x_snc_todos_admin]
})

// Restricts category deletion to admin users only
Acl({
    $id: Now.ID['category_delete_acl'],
    operation: "delete",
    type: "record",
    table: "x_snc_todos_category",
    roles: [x_snc_todos_admin]
})