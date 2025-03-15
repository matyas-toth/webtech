const addButton = document.getElementById('addButton');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', function() {
    const todoText = todoInput.value;
    if (todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
        todoList.appendChild(li);
        todoInput.value = '';
    }
});
