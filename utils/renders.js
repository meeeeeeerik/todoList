import { createTaskHtml } from "./htmlTemplates";

export function renderNewTask(task) {
  // get taskContainer
  const tasksContainer = document.querySelector('#tasksContainer');
  
  // get task html
  const taskHtml = createTaskHtml(task);

  // insert html
  tasksContainer.insertAdjacentHTML('beforeend', taskHtml);
}