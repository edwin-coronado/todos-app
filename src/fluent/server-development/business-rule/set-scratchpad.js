/**
 * @file Business rule implementation for setting scratchpad data before displaying list forms
 * @module business-rule/set-scratchpad
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server/no-namespace/c_GlideSystemScratchpad Scratchpad API Documentation}
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server/no-namespace/r_ScopedGlideRecordGetUniqueValue GlideRecord API Documentation}
 * @see {@link https://developer.servicenow.com/dev.do#!/guides/rome/now-platform/server-side-scripting/business-rules Business Rule Best Practices}
 * 
 * @description
 * This business rule runs before a list form is displayed and prepares data for the client script.
 * It retrieves all tasks that belong to the current list, formats them as JSON, and stores
 * this data in the scratchpad for the client script to access.
 * 
 * The scratchpad serves as a mechanism to pass data from server-side scripts to client-side scripts.
 * Data placed in the scratchpad is available to client scripts via g_scratchpad.
 * 
 * Expected output in the scratchpad:
 * ```json
 * {
 *   "taskSummary": "[{\"title\":\"Task 1\",\"state\":\"todo\"},{\"title\":\"Task 2\",\"state\":\"in_progress\"}]"
 * }
 * ```
 * 
 * Consumed by: src/fluent/client-development/client-script/todo-task-count.js
 * This data is used to display task information directly on the list form.
 */

/**
 * Business rule execution function for setting scratchpad data
 * 
 * This function:
 * 1. Retrieves all tasks associated with the current list using getTasksInList()
 * 2. Converts the task array to a JSON string
 * 3. Stores the JSON string in g_scratchpad.taskSummary
 * 
 * Error handling considerations:
 * - getTasksInList() handles its own errors and returns an empty array if no tasks are found
 * - JSON.stringify() should work for valid task objects, but might fail for complex objects
 * - Try/catch should be used in production code to prevent business rule failures
 * 
 * @function executeRule
 * @param {GlideRecord} current - The current list record being displayed
 * @param {GlideRecord} previous - The previous state of the record (null for display business rules)
 * @returns {void}
 * 
 * @example
 * // Example task object structure returned by getTasksInList():
 * // [
 * //   { title: "Task 1", description: "Do something", state: "todo", ... },
 * //   { title: "Task 2", description: "Do something else", state: "in_progress", ... }
 * // ]
 */
(function executeRule(current, previous /*null when async*/) {
    try {
        // Import the utility function to get tasks in a list
        const { getTasksInList } = require('./src/server/utils.ts');
        
        // Get the sys_id of the current list record
        const listSysId = current.getUniqueValue();
        
        // Get all tasks for this list
        const tasks = getTasksInList(listSysId);
        
        // Convert tasks array to JSON string for storage in scratchpad
        const taskSummary = JSON.stringify(tasks);
        
        // Store in scratchpad for client scripts to access
        g_scratchpad.taskSummary = taskSummary;
        
        // Log for troubleshooting (only visible in system logs)
        gs.debug("Scratchpad taskSummary set for list: " + listSysId + " with " + tasks.length + " tasks");
    } catch (error) {
        // Log any errors but don't fail the business rule
        gs.error("Error in set-scratchpad business rule: " + error);
        
        // Set an empty array as fallback
        g_scratchpad.taskSummary = "[]";
    }
})(current, previous);
