const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoEnter = document.getElementById("todo-enter");
const todoList = document.querySelector("ul");
const TODO_KEY = "todo";
const savedTodos = localStorage.getItem(TODO_KEY);
let savedTodo = [];
function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newTodo.id;
    span.innerText = newTodo.text;
    button.innerText = "X";
    button.addEventListener("click", (event) => {
        const li = event.target.parentElement;
        console.log(li.id);
        li.remove();
        savedTodo = savedTodo.filter((item) => item.id !== parseInt(li.id));
        saveTodo();
    });
    li.appendChild(button);
    li.appendChild(span);
    todoList.appendChild(li);
}
function saveTodo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(savedTodo));
}
todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    todoInput.focus();
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    savedTodo.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
});
if (savedTodos !== null) {
    const parsedTodo = JSON.parse(savedTodos);
    savedTodo = parsedTodo;
    parsedTodo.forEach(paintTodo);
}
