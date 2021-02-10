import ToDos from './ToDos.js';

let todos = new ToDos();

document.querySelector('.add-task').addEventListener("click", todos.addTodo);

function renderToDoList(list, element) {

}

