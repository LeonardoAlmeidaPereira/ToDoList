document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', toggleTodoItem);
    });
});

function toggleTodoItem(event) {
    const todoItem = event.target.closest('.todo-item');
    if (event.target.checked) {
        todoItem.classList.add('todo-item-through');
    } else {
        todoItem.classList.remove('todo-item-through');
    }
}

function addTask(){
    let tarefa = document.querySelector("input").value

    let li = document.createElement("li")
    li.innerHTML = '<input type="checkbox" name="cb-task" onchange="toggleTodoItem(event)">' +  tarefa + '<i class="fa-solid fa-xmark todo-item-close" onclick="removeTask(this)">'
    li.classList.add("todo-item")
    document.querySelector("ul").appendChild(li)
    document.getElementById("task").value = ""
}

function removeTask(li) {
    li.parentElement.remove()
}