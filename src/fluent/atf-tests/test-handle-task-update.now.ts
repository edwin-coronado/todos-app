import { Test } from '@servicenow/sdk/core'

Test({
    name: "Test task closure behavior",
    $id: Now.ID['atf-test-0'],
    active: true,
    failOnServerError: true
}, atf => {
    const list0 = atf.server.recordInsert({
        $id: Now.ID['list0'],
        table: 'x_snc_todos_list',
        fieldValues: {
            "name": "My Tasks",
            "active": true
        },
        assert: 'record_successfully_inserted'
    })

    const task0 = atf.server.recordInsert({
        $id: Now.ID['task0'],
        table: 'x_snc_todos_task',
        fieldValues: {
            title: 'Eat tacos',
            list: list0.record_id
        },
    })

    const task1 = atf.server.recordInsert({
        $id: Now.ID['task1'],
        table: 'x_snc_todos_task',
        fieldValues: {
            title: 'Sleep',
            list: list0.record_id
        },
    })

    atf.server.recordUpdate({
        $id: Now.ID['update-task0'],
        table: 'x_snc_todos_task',
        recordId: task0.record_id,
        fieldValues: {
            state: 'done'
        }
    })

    atf.server.recordUpdate({
        $id: Now.ID['update-task1'],
        table: 'x_snc_todos_task',
        recordId: task1.record_id,
        fieldValues: {
            state: 'canceled'
        }
    })

    atf.server.recordValidation({
        $id: Now.ID['validate-task0'],
        table: 'x_snc_todos_task',
        recordId: task0.record_id,
        fieldValues: "active=false^closed_onISNOTEMPTY",
        assert: 'record_validated'
    })

    atf.server.recordValidation({
        $id: Now.ID['validate-task1'],
        table: 'x_snc_todos_task',
        recordId: task1.record_id,
        fieldValues: "active=false^closed_onISNOTEMPTY",
        assert: 'record_validated'
    })

    atf.server.recordValidation({
        $id: Now.ID['validate-list0'],
        table: 'x_snc_todos_list',
        recordId: list0.record_id,
        fieldValues: "active=false^closed_onISNOTEMPTY",
        assert: 'record_validated'
    })

})