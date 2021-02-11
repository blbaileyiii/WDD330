import {loadTasks, saveTasks} from './ls.js';
import {filterIncomplete, filterComplete, getAddTaskInput, getAddTaskBtn} from './utilities.js';

export default class ToDos {

    constructor() {
        this.toDoList = this.getTodos();
        this.addBindings();
    }
    
    saveTodo() {
        saveTasks("todo", toDoList);
    }

    getTodos(){
        let toDoList = loadTasks("todo");
        if(!toDoList){
            toDoList = [];
        }
        return toDoList;
    }

    listTodos() {        
    }

    addTodo() {
        console.log(this.toDoList);
        let input = getAddTaskInput();
        if(input.value){
            this.toDoList[this.toDoList.length] = {id: Date.now(), content: input.value, completed: false};        
            input.value = "";
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
        let addTaskBtn = getAddTaskBtn();

        addTaskBtn.addEventListener("click", this.addTodo.bind(this));
        //document.querySelector('.filter-all').addEventListener("click", applyFilter);
        //document.querySelector('.filter-incomplete').addEventListener("click", applyFilter);
        //document.querySelector('.filter-complete').addEventListener("click", applyFilter);
    }
}
