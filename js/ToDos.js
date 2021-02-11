import {loadTasks, saveTasks} from './ls.js';

export default class ToDos {

    constructor() {
        this.toDoList = "Lee";
    }
    
    saveTodo(task, key) {

    }

    getTodos(key){

    }

    addTodo(event, that) {
        console.log(event);
        //toDoList[toDoList.length] = {id: Date.now(), content: src.value, completed: false};
        console.log(event.toDoList);
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
