const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoEnter = document.getElementById("todo-enter");
const todoList = document.querySelector("ul");
function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodo;
    button.innerText = "❎";
    button.addEventListener("click", (event) => {
        const li = event.target.parentElement;
        li.remove();
    });
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}
todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    todoInput.focus();
    paintTodo(newTodo);
});
