import {loadTasks, saveTasks} from './ls.js';

export default class ToDos {

    constructor() {
        this.toDoList = [];
    }
    
    saveTodo(task, key) {

    }

    getTodos(key){

    }

    addTodo(src) {
        console.log(this.toDoList);
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
