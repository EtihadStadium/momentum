const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoEnter = document.getElementById("todo-enter");
const todoList = document.querySelector("ul");
function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    todoList.appendChild(li);
}
todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    todoInput.focus();
    paintTodo(newTodo);
});
