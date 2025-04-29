/**
 * @file Client script declaration for displaying task summaries on list forms
 * @module client-development/client-script/todo-task-count
 * @see {@link https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/client-script-api-now-ts.html Client Script API Documentation}
 * @see {@link https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/servicenow-fluent-api-reference.html Fluent API Reference}
 * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/client/c_GlideFormAPI GlideForm API Documentation}
 */

import { ClientScript } from '@servicenow/sdk/core'

/**
 * Interface representing task data stored in the scratchpad
 * This defines the structure of the data that the set-scratchpad business rule
 * places in the scratchpad for this client script to consume.
 * 
 * @interface TaskSummary
 * @property {string} title - The title of the task
 * @property {string} state - The current state of the task (todo, in_progress, done, canceled)
 */
interface TaskSummary {
  title: string;
  state: string;
}

/**
 * Client script that displays task summaries on list forms
 * 
 * This client script:
 * - Executes when a list form loads
 * - Accesses task data from the scratchpad (populated by the set-scratchpad business rule)
 * - Displays each task's title and state using GlideForm's addInfoMessage method
 * 
 * The implementation is contained in the todo-task-count.js file, which gets
 * the task data from g_scratchpad.taskSummary, parses it, and displays messages.
 * 
 * @type {ClientScript}
 * @see {@link ./todo-task-count.js} for the implementation
 * @see {@link ../../server-development/business-rule/set-scratchpad.now.ts} for the business rule that populates the scratchpad
 */
ClientScript({
    /**
     * Unique identifier for this client script
     */
    $id: Now.ID['todo-task-count'],
    
    /**
         /**
     * Function reference for the client script
     * The implementation is in the associated JavaScript file (todo-task-count.js)
     * 
     * The script expects the scratchpad to contain:
     * - taskSummary: JSON string containing an array of TaskSummary objects
     *
     * @param {GlideForm} g_form - The form API object provided by ServiceNow
     * @returns {void}
     * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/client/c_GlideFormAPI GlideForm API}
     */
    script: function(g_form) {
ame: "Todo task count",
    
    /**
     * Table this client script applies to
     * This script runs on list forms
     */
    table: "x_snc_todos_list",
    
    /**
     * When the script runs
     * 'onLoad' indicates it executes when the form loads, before being presented to the user
     * This allows the script to enhance the form with additional information
     * @see {@link https://developer.servicenow.com/dev.do#!/guides/paris/now-platform/client-scripting/client-scripts#cs-types Client Script Types}
     */
    type: 'onLoad',
    
    /**
     * Whether the client script is active
     */
    active: true,
    global: true,
    name: "Show summary of tasks",
    active: true,
    applies_extended: false,
    description: "Shows a summary of the tasks and their states",
    isolate_script: true
});
