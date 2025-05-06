import { GlideDateTime, GlideRecord } from '@servicenow/glide';
import { getTasksInList, closeList, openList } from './list-utils.ts';
import moment from 'moment';
export type Task = {
  title: string;
  description: string;
  order: number;
  state: string;
  list: string;
  active: boolean;
  sys_id: string;
};
export function handleTaskUpdate(current: GlideRecord, previous: GlideRecord): void {
  const previousState = previous.getValue('state');
  const currentState = current.getValue('state');
  const taskWasClosed = (previousState !== 'done' && previousState !== 'canceled')
    && (currentState === 'done' || currentState === 'canceled')
  const taskWasReopened = (previousState === 'done' || previousState === 'canceled')
    && (currentState !== 'done' && currentState !== 'canceled')
  const tasksInList = getTasksInList(current.getValue('list'));
  if (taskWasClosed) {
    closeTask(current);
    if (areAllTasksInactive(tasksInList)) {
      closeList(current.getValue('list'));
    }
  }
  if (taskWasReopened) {
    reopenTask(current);
    openList(current.getValue('list'));
  }
}
function logDuration(task: GlideRecord) {
  const start = task.getValue('sys_created_on');
  const end = task.getValue('closed_on');
  if (!end)
    return;
  const startMoment = moment(start);
  const endMoment = moment(end);
  const duration = moment.duration(endMoment.diff(startMoment));
  console.log(
    `Task '${task.getValue('title')}' was completed.
    Duration: ${duration.years()} years, ${duration.months()} months, ${duration.days()} days, ${duration.hours()} hours
    ${duration.minutes()} minutes, ${duration.seconds()} seconds`
  );
}
function reopenTask(task: GlideRecord) {
  task.setValue('active', true);
  task.setValue('closed_on', '');
  task.update();
}
function closeTask(task: GlideRecord) {
  task.setValue('active', false);
  task.setValue('closed_on', new GlideDateTime());
  task.update();
  try {
    logDuration(task);
  } catch (ex) {
    console.error('Error logging duration', ex);
  }
}
export function grToTask(task: GlideRecord): Task {
  return {
    sys_id: task.getValue('sys_id'),
    title: task.getValue('title'),
    description: task.getValue('description'),
    order: parseInt(task.getValue('order')),
    state: task.getValue('state'),
    list: task.getValue('list'),
    active: task.getValue('active') === "true"
  };
}
function areAllTasksInactive(tasks: Task[]): boolean {
  if (tasks.length === 0) {
    return true;
  }
  
  return tasks.every(task => 
    task.state === 'done' || 
    task.state === 'canceled'
  );
}