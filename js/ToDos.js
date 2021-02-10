import {loadTasks, saveTasks} from './ls.js';

export default class ToDos {

    constructor() {
        this.toDoList = "Lee";
    }
    
    saveTodo(task, key) {

    }

    getTodos(key){

    }

    addTodo(src) {
        console.log(toDoList);
        toDoList[toDoList.length] = {id: Date.now(), content: src.value, completed: false};
        console.log(toDoList);
    }

    listTodos() {
        
    }

    completeTodo() {

    }

    removeTodo() {

    }

    filterTodos() {

    }
}
