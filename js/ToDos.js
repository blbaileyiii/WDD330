import {loadTasks, saveTasks} from './ls.js';

export default class ToDos {

    constructor() {
        this.toDoList = "Lee";
        let self = this;
    }
    
    saveTodo(task, key) {

    }

    getTodos(key){

    }

    addTodo(src) {
        console.log(self);
        //toDoList[toDoList.length] = {id: Date.now(), content: src.value, completed: false};
        console.log(self.toDoList);
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
