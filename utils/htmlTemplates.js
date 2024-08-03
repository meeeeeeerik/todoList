import { modes, priorities } from "./constanst";

export function createTaskModalHtml(mode = modes.create) {
  let title = 'Новая задача';
  let submitButtonText = 'Создать';

  if (mode === modes.edit) {
    title = 'Редактировать задачу';
    submitButtonText = 'Сохранить'
  }

  return `
    <div id="taskModalContainer" class="bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center smoothOpen">
    
      <form id="taskModal" class="w-full max-w-md bg-white p-8 rounded-lg max-h-full relative">
        ${
          mode === modes.edit 
          ? `
          <div class="flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-10 bg-white rounded-lg" id="taskLoader">
            <div class="custom-loader"></div>
          </div>
          `
          : ''
        }

        <h2 class="text-lg font-bold text-blue-600 border-b-2 pb-2 mb-4">
          ${title}
        </h2>

        <label for="title" class="text-zinc-500 block mb-2">Название</label>
        <input id="title" type="text" class="w-full h-10 rounded-lg px-4 border mb-4" required>

        <label for="description" class="text-zinc-500 block mb-2">
          Описание
        </label>
        <textarea id="description" class="w-full h-32 rounded-lg px-4 py-2 border max-h-56 mb-4"></textarea>

        <label for="priority" class="text-zinc-500 block mb-2">
          Приоритет
        </label>
        <select id="priority" class="w-full h-10 rounded-lg px-4 border mb-6">
          <option value="${priorities.high}">Высокий</option>
          <option value="${priorities.medium}">Средний</option>
          <option value="${priorities.low}">Низкий</option>
          <option value="${priorities.empty}" selected>Без приорита</option>
        </select>

        <div class="flex justify-between">
          <button id="closeTaskModalButton" type="button" class="button button-gray">Отменить</button>
          <button id="submitTaskModalFormButton" class="button button-green">${submitButtonText}</button>
        </div>
      </form>
    </div>
  `;
}

export function createTaskHtml(task, isNew = false) {
  const classByPriority = {
    [priorities.high]: 'red',
    [priorities.medium]: 'yellow',
    [priorities.low]: 'blue',
    [priorities.empty]: '',
  };

  return `
    <div class="task ${ isNew ? 'openTask' : ''}" data-taskContainerId="${task.id}">
      <label class="checkboxWrapper" data-taskid="${task.id}" data-taskCheckbox>
          <input type="checkbox" />
          <div class="checkbox ${classByPriority[task.priority]}"></div>
      </label>

      <div class="ml-2 cursor-pointer hover:opacity-70 w-3/4" data-taskid="${task.id}" data-taskContent>
        <div class="mb-1 line-clamp-1">${task.title}</div>
        <div class="text-sm text-zinc-500 line-clamp-3">${task.description}</div>
      </div>
    </div>
  `;
}