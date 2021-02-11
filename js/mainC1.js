import ToDos from './ToDos.js';

let todos = new ToDos();

document.querySelector('.add-task').addEventListener("click", todos.addTodo.bind(todos, this.target.value));

function renderToDoList(list, element) {

}

