const form = document.getElementById('todo-form');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskText = document.getElementById('task-input').value.trim();
  const dateTime = document.getElementById('datetime').value;

  if (taskText !== '') {
    addTask(taskText, dateTime);
    form.reset();
  }
});

function addTask(text, dateTime) {
  const li = document.createElement('li');
  li.classList.add('task');

  const info = document.createElement('div');
  info.classList.add('info');
  info.innerHTML = `<strong>${text}</strong><br><small>${dateTime}</small>`;

  const actions = document.createElement('div');
  actions.classList.add('actions');

  const doneBtn = document.createElement('button');
  doneBtn.textContent = '✓';
  doneBtn.classList.add('done');
  doneBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const editBtn = document.createElement('button');
  editBtn.textContent = '✎';
  editBtn.classList.add('edit');
  editBtn.onclick = () => {
    const newText = prompt('Edit your task', text);
    const newDate = prompt('Edit date/time (YYYY-MM-DDTHH:MM)', dateTime);
    if (newText) {
      info.innerHTML = `<strong>${newText}</strong><br><small>${newDate || ''}</small>`;
    }
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.classList.add('delete');
  deleteBtn.onclick = () => {
    li.remove();
  };

  actions.append(doneBtn, editBtn, deleteBtn);
  li.append(info, actions);
  taskList.appendChild(li);
}
