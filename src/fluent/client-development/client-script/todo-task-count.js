/**
 * Client-side function that runs when a list record is loaded
 * Parses task summary data from the scratchpad and displays info messages
 * showing the title and state of each task in the list
 */
function onLoad() {
    const tasks = JSON.parse(g_scratchpad.taskSummary);
    tasks.forEach(task => {
        g_form.addInfoMessage(`Task: ${task.title} - State: ${task.state}`)
    })
}

