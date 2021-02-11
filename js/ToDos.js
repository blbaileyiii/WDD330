import {loadTasks, saveTasks} from './ls.js';
import {filterID,
        filterIncomplete, 
        filterComplete, 
        getAddTaskInput, 
        getAddTaskBtn,
        getTaskUL,
        setCount} from './utilities.js';

export default class ToDos {

    constructor() {
        this.toDoList = this.getTodos();
        this.addBindings();
        this.filter = 'all';
        this.filterTodos();
    }
    
    saveTodos() {
        saveTasks("todo", toDoList);
        this.filterTodos();        
    }

    getTodos(){
        let toDoList = loadTasks("todo");
        if(!toDoList){
            toDoList = [];
        }
        return toDoList;
    }

    listTodos(list) {     
        let taskUL = getTaskUL();
        taskUL.innerHTML = "";
        list.forEach(task => {
            //console.log(task.content);
        let li = document.createElement('li');
        let input = document.createElement('input');
        let label = document.createElement('label');
        let button = document.createElement('button');

        li.classList.add('task');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', task.id);
        input.addEventListener("change", this.completeTodo.bind(this));
        input.checked = task.completed;

        label.classList.add('task-desc');
        label.setAttribute('for', task.id);
        label.textContent = task.content;
        button.textContent = "X";
        button.addEventListener("click", this.removeTodo.bind(this));

        li.appendChild(input);
        li.appendChild(label);
        li.appendChild(button);

        taskUL.appendChild(li);
        });

        setCount(list);
    }

    addTodo() {
        console.log(this.toDoList);
        let input = getAddTaskInput();
        if(input.value){
            this.toDoList[this.toDoList.length] = {id: Date.now(), content: input.value, completed: false};
            this.saveTodos();
            input.value = "";
        }
        console.log(this.toDoList);        
    }

    completeTodo(chkBox) {
        let task = filterID(this.toDoList, chkBox.target.id);

        if (chkBox.target.checked) {
            task.completed = true;
        } else {
            task.completed = false;
        }

        this.saveTodos();
    }

    removeTodo(completeBtn) {
        this.saveTodos();
    }

    applyFilter(filterBtn){
        if (document.querySelector('.filter-active')){
            document.querySelector('.filter-active').classList.remove('filter-active');
        }
        filterBtn.target.classList.add('filter-active');

        this.filter = filterBtn.target.value;

        this.filterTodos();
    }

    filterTodos() {
        switch(this.filter) {
            case "all":
                this.listTodos(this.toDoList);
                break;
            case "incomplete":
                this.listTodos(filterIncomplete(this.toDoList));
                break;
            case "complete":
                this.listTodos(filterComplete(this.toDoList));
                break;
            default:
                break;
        }   
    }

    addBindings() {
        let addTaskBtn = getAddTaskBtn();

        addTaskBtn.addEventListener("click", this.addTodo.bind(this));
        
        document.querySelector('.filter-all').addEventListener("click", this.applyFilter.bind(this));
        document.querySelector('.filter-incomplete').addEventListener("click", this.applyFilter.bind(this));
        document.querySelector('.filter-complete').addEventListener("click", this.applyFilter.bind(this));
    }
}
