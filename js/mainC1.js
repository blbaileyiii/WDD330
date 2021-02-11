import ToDos from './ToDos.js';

let todos = new ToDos();

document.querySelector('.add-task').addEventListener("click", todos.addTodo.bind(this));

function renderToDoList(list, element) {

}

