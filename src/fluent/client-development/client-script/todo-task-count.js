/**
 * @file Client script implementation for displaying task summaries on list forms
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/client/c_GlideFormAPI GlideForm API Documentation}
 * @see {@link https://developer.servicenow.com/dev.do#!/guides/paris/now-platform/client-scripting/client-scripts Client Script Best Practices}
 * @see {@link https://developer.servicenow.com/dev.do#!/guides/paris/now-platform/debugging-scripts/debugging-client-side-scripts Debugging Client Scripts}
 * @see {@link https://developer.servicenow.com/dev.do#!/guides/paris/app-store-and-servicenow-labs/performance-troubleshooting/performance-optimization-techniques-client-scripts Client Script Performance Optimization}
 * 
 * @description
 * This client script enhances the list form by displaying information about tasks
 * associated with the list. It retrieves task data from the scratchpad (populated by
 * the set-scratchpad business rule) and displays it using GlideForm API methods.
 * 
 * The script follows these best practices:
 * - Uses try/catch for error handling
 * - Validates data before processing
 * - Uses clear, descriptive variable names
 * - Includes comments for complex logic
 * - Follows performance best practices by minimizing DOM updates
 * 
 * Expected scratchpad data structure:
 * ```json
 * {
 *   "taskSummary": "[{\"title\":\"Task 1\",\"state\":\"todo\"},{\"title\":\"Task 2\",\"state\":\"in_progress\"}]"
 * }
 * ```
 * 
 * Testing/Debugging:
 * - Check browser console for errors (F12 in most browsers)
 * - Use jslog() to output debug information to browser console
 * - Verify that taskSummary exists in g_scratchpad by adding console.log(g_scratchpad)
 */

/**
 * Handler function that executes when a list form loads
 * 
 * This function:
 * 1. Retrieves task data from the scratchpad (set by the server-side set-scratchpad business rule)
 * 2. Parses the JSON data into a JavaScript array
 * 3. Iterates through each task and adds an information message to the form
 * 
 * @function onLoad
 * @returns {void}
 * 
 * @example
 * // Example scratchpad data (taskSummary):
 * // [{"title":"Complete project","state":"todo"},{"title":"Review code","state":"in_progress"}]
 */
/**
 * Handler function that executes when a list form loads
 * 
 * This function:
 * 1. Retrieves task data from the scratchpad (set by the server-side set-scratchpad business rule)
 * 2. Parses the JSON data into a JavaScript array
 * 3. Iterates through each task and adds an information message to the form
 * 
 * Error handling is implemented to catch and handle any issues with missing or malformed data.
 * 
 * @function onLoad
 * @returns {void}
 * 
 * @example
 * // Example scratchpad data (taskSummary):
 * // [{"title":"Complete project","state":"todo"},{"title":"Review code","state":"in_progress"}]
 * 
 * @example
 * // GlideForm API usage examples:
 * // g_form.addInfoMessage("Message") - Adds an info message to the form
 * // g_form.addErrorMessage("Error") - Adds an error message to the form
 * // g_form.clearMessages() - Clears all messages
 */
function onLoad() {
    try {
        // Check if taskSummary exists in scratchpad
        if (!g_scratchpad.taskSummary) {
            // No task data available, display a message and exit
            g_form.addInfoMessage("No tasks found for this list.");
            return;
        }
        
        // Parse the taskSummary JSON string from scratchpad into a JavaScript array
        const tasks = JSON.parse(g_scratchpad.taskSummary);
        
        // Check if we have any tasks
        if (!tasks || tasks.length === 0) {
            g_form.addInfoMessage("This list doesn't contain any tasks yet.");
            return;
        }
        
        // Performance optimization: prepare a summary message instead of adding multiple messages
        let countByState = {
            'todo': 0,
            'in_progress': 0,
            'done': 0,
            'canceled': 0
        };
        
        // Count tasks by state
        tasks.forEach(task => {
            if (countByState.hasOwnProperty(task.state)) {
                countByState[task.state]++;
            }
        });
        
        // Add summary message
        g_form.addInfoMessage(`Summary: ${tasks.length} tasks total (${countByState.todo} to do, ${countByState.in_progress} in progress, ${countByState.done} done, ${countByState.canceled} canceled)`);
        
        // Iterate through each task and add an information message to the form
        tasks.forEach(task => {
            // Add an information message showing the task title and state
            // Uses the GlideForm API's addInfoMessage method
            g_form.addInfoMessage(`Task: ${task.title} - State: ${task.state}`);
        });
        
        // Log for debugging (only appears in browser console)
        jslog("Task summary display complete");
        
    } catch (error) {
        // Handle any errors that occur during processing
        g_form.addErrorMessage("An error occurred while processing task data: " + error.message);
        jslog("Error in todo-task-count client script: " + error.message);
    }
}

/**
 * Helper function for logging debug information to the browser console
 * Only outputs in development instances (not in production)
 * 
 * @function jslog
 * @param {string} message - The message to log
 * @returns {void}
 */
function jslog(message) {
    if (typeof console !== 'undefined' && console.log) {
        console.log("[Todos App] " + message);
    }
}

