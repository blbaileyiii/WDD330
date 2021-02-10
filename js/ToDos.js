import {loadTasks, saveTasks} from './ls.js';

export default class ToDos {

    constructor() {
        this.toDoList = null;
    }
    
    saveTodo(task, key) {

    }

    getTodos(key){

    }

    addTodo(src) {
        this.toDoList[this.toDoList.length] = {id: Date.now(), content: src.value, completed: false};
        console.log(this.toDoList);
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
