const addDayBtn = document.getElementById('addDayBtn');
const removeDayBtn = document.getElementById('removeDayBtn');
const todoListContainer = document.getElementById('todoListContainer');
let dayCount = 0;

function createTodoList(dayName) {
    const todoListDiv = document.createElement('div');
    todoListDiv.classList.add('todo-list');
    const title = document.createElement('h2');
    title.textContent = dayName;
    todoListDiv.appendChild(title);
    const taskList = document.createElement('ul');
    todoListDiv.appendChild(taskList);
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Add activity';
    todoListDiv.appendChild(input);
    const addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.onclick = () => {
        const taskText = input.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(taskText));
            const deleteBtn = document.createElement('span');
            deleteBtn.textContent = 'X';
            deleteBtn.onclick = () => {
                taskList.removeChild(li);
            };
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            input.value = '';
        }
    };
    todoListDiv.appendChild(addButton);
    // Tambahkan tombol "hapus" di dalam container hari
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'X';
    removeBtn.onclick = () => {
        todoListContainer.removeChild(todoListDiv);
        dayCount--;
    };
    todoListDiv.appendChild(removeBtn);
    return todoListDiv;
}

addDayBtn.addEventListener('click', () => {
    if (dayCount < 7) {
        dayCount++;
        const dayName = `Day ${dayCount}`;
        const todoList = createTodoList(dayName);
        todoListContainer.appendChild(todoList);
    } else {
        alert("Maximum number of days reached!");
    }
});

removeDayBtn.addEventListener('click', () => {
    if (todoListContainer.children.length > 0) {
        todoListContainer.removeChild(todoListContainer.lastChild);
        dayCount--;
    }
});
