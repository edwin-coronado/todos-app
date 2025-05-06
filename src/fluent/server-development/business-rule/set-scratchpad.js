(function executeRule(current, previous /*null when async*/) {
	// Add your code here
    const { getTasksInList } = require('./src/server/list-utils.ts');
    const taskSummary = JSON.stringify(getTasksInList(current.getUniqueValue()));
    g_scratchpad.taskSummary = taskSummary;

})(current, previous);