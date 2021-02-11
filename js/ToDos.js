import {loadTasks, saveTasks} from './ls.js';
import {filterIncomplete, filterComplete, getAddTaskDesc, resetAddTaskDesc} from './utilities.js';

export default class ToDos {

    constructor() {
        this.toDoList = [];
    }
    
    saveTodo(task, key) {

    }

    getTodos(key){

    }

    addTodo() {
        console.log(this.toDoList);
        let taskDesc = getAddTaskDesc();
        if(taskDesc){
            this.toDoList[this.toDoList.length] = {id: Date.now(), content: taskDesc, completed: false};        
            resetAddTaskDesc();
        }
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
