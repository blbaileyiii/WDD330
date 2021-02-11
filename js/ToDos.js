import {loadTasks, saveTasks} from './ls.js';
import {filterIncomplete, filterComplete, getAddTaskDesc, resetAddTaskDesc} from './utilities.js';

export default class ToDos {

    constructor() {
        this.toDoList = [];
        this.addBindings();
    }
    
    saveTodo(task, key) {

    }

    getTodos(key){

    }

    listTodos() {
        
    }

    addTodo() {
        console.log(this.toDoList);
        let taskDesc = getAddTask();
        if(taskDesc){
            this.toDoList[this.toDoList.length] = {id: Date.now(), content: taskDesc.value, completed: false};        
            taskDesc.value = "";
        }
        console.log(this.toDoList);        
    }

    completeTodo() {

    }

    removeTodo() {

    }

    filterTodos() {

    }

    addBindings() {
        document.querySelector('.add-task').addEventListener("click", todos.addTodo.bind(todos));
        //document.querySelector('.filter-all').addEventListener("click", applyFilter);
        //document.querySelector('.filter-incomplete').addEventListener("click", applyFilter);
        //document.querySelector('.filter-complete').addEventListener("click", applyFilter);
    }
}
