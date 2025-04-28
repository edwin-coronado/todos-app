function onLoad() {
    const tasks = JSON.parse(g_scratchpad.taskSummary);
    tasks.forEach(task => {
        g_form.addInfoMessage(`Task: ${task.title} - State: ${task.state}`)
    })
}

