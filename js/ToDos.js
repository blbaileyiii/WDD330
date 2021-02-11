import {loadTasks, saveTasks} from './ls.js';
import {filterIncomplete, 
        filterComplete, 
        getAddTaskInput, 
        getAddTaskBtn,
        getTaskUL} from './utilities.js';

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
        let taskUL = getTaskUL();
        taskUl.innerHTML = "";
        this.toDoList.forEach(task => {
            //console.log(task.content);
        let li = document.createElement('li');
        let input = document.createElement('input');
        let label = document.createElement('label');
        let button = document.createElement('button');

        li.classList.add('task');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', task.id);
        input.addEventListener("change", this.completeTodo);
        input.checked = task.completed;

        label.classList.add('task-desc');
        label.setAttribute('for', task.id);
        label.textContent = task.content;
        button.textContent = "X";
        button.addEventListener("click", this.removeTodo);

        li.appendChild(input);
        li.appendChild(label);
        li.appendChild(button);

        taskUL.appendChild(li);
        });
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
