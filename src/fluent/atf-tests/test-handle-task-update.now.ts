import { Test } from '@servicenow/sdk/core'

/**
 * Tests the business logic that handles task closure and list state updates
 * Validates that tasks marked done/canceled are properly deactivated and 
 * when all tasks in a list are closed, the list is also closed
 */
Test({
    name: "Test task closure behavior", // Test name as shown in ServiceNow ATF UI
    $id: Now.ID['atf-test-0'],         // Unique identifier for reference in the ATF framework
    active: true,                      // Controls whether test can be executed in the system
    failOnServerError: true            // Test will fail if any server errors occur during execution
}, atf => {
    // Create a todo list record for testing
    const list0 = atf.server.recordInsert({
        $id: Now.ID['list0'],
        table: 'x_snc_todos_list',     // Target table for the insert operation
        fieldValues: {
            "name": "My Tasks",
            "active": true
        },
        assert: 'record_successfully_inserted' // Verifies the record was inserted successfully
    })

    // Create first task record linked to the list
    const task0 = atf.server.recordInsert({
        $id: Now.ID['task0'],
        table: 'x_snc_todos_task',
        fieldValues: {
            title: 'Eat tacos',
            list: list0.record_id      // Reference to the parent list record
        },
    })

    // Create second task record linked to the list
    const task1 = atf.server.recordInsert({
        $id: Now.ID['task1'],
        table: 'x_snc_todos_task',
        fieldValues: {
            title: 'Sleep',
            list: list0.record_id
        },
    })

    // Mark the first task as done - triggers business rule
    atf.server.recordUpdate({
        $id: Now.ID['update-task0'],
        table: 'x_snc_todos_task',
        recordId: task0.record_id,     // Sys_id of the record to update
        fieldValues: {
            state: 'done'
        }
    })

    // Mark the second task as canceled - triggers business rule
    atf.server.recordUpdate({
        $id: Now.ID['update-task1'],
        table: 'x_snc_todos_task',
        recordId: task1.record_id,
        fieldValues: {
            state: 'canceled'
        }
    })

    // Validate first task was deactivated and closed_on field was populated
    atf.server.recordValidation({
        $id: Now.ID['validate-task0'],
        table: 'x_snc_todos_task',
        recordId: task0.record_id,
        fieldValues: "active=false^closed_onISNOTEMPTY",  // Encoded query format
        assert: 'record_validated'     // Ensures the record meets the specified conditions
    })

    // Validate second task was deactivated and closed_on field was populated
    atf.server.recordValidation({
        $id: Now.ID['validate-task1'],
        table: 'x_snc_todos_task',
        recordId: task1.record_id,
        fieldValues: "active=false^closed_onISNOTEMPTY",
        assert: 'record_validated'
    })

    // Validate that list is automatically closed when all its tasks are closed
    atf.server.recordValidation({
        $id: Now.ID['validate-list0'],
        table: 'x_snc_todos_list',
        recordId: list0.record_id,
        fieldValues: "active=false^closed_onISNOTEMPTY",
        assert: 'record_validated'
    })
})