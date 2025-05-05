import { GlideDateTime, GlideRecord } from '@servicenow/glide';
import { grToTask, Task } from './task-utils'

export function openList(sysId: string) {
  const list = new GlideRecord('x_snc_todos_list');
  list.get(sysId);
  list.setValue('active', true);
  list.setValue('closed_on', '');
  list.update();
}

export function closeList(sysId: string) {
  const list = new GlideRecord('x_snc_todos_list');
  list.get(sysId);
  list.setValue('active', false);
  list.setValue('closed_on', new GlideDateTime());
  list.update();
}

export function getTasksInList(listSysId: string): Task[] {
  const tasks: Task[] = [];
  const gr = new GlideRecord('x_snc_todos_task');

  gr.addQuery('list', listSysId);
  gr.query();

  while (gr.next()) {
    tasks.push(grToTask(gr));
  }

  return tasks;
}