function addTask(){
    let tarefa = document.querySelector("input").value

    let li = document.createElement("li")
    li.innerHTML = tarefa + '<i class="fa-solid fa-xmark todo-item-close" onclick="removeTask(this)">'
    li.classList.add("todo-item")
    document.querySelector("ul").appendChild(li)
    document.getElementById("task").value = ""
}

function removeTask(li) {
    li.parentElement.remove()
}