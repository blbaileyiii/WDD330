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
        console.log(this);
        //toDoList[toDoList.length] = {id: Date.now(), content: src.value, completed: false};
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
