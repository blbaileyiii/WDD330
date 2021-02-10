import {loadTasks, saveTasks} from './ls.js';

window.onload = startToDos;

document.querySelector('.filter-all').addEventListener("click", applyFilter);
document.querySelector('.filter-incomplete').addEventListener("click", applyFilter);
document.querySelector('.filter-complete').addEventListener("click", applyFilter);

const taskUl = document.querySelector('.tasks-list');
let taskList = [];

class ToDo {
    constructor(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
}

function startToDos(){
    taskList = loadTasks("todo");
    // console.log(taskList);
    if(taskList){
        displayTasks(filterAll());
        countRemaining();
    }
}

function displayTasks(filteredList){
    taskUl.innerHTML = "";
    filteredList.forEach(task => {
        //console.log(task.content);
        let li = document.createElement('li');
        let input = document.createElement('input');
        let label = document.createElement('label');
        let button = document.createElement('button');

        li.classList.add('task');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', task.id);
        input.addEventListener("change", completeTask);
        input.checked = task.completed;

        label.classList.add('task-desc');
        label.setAttribute('for', task.id);
        label.textContent = task.content;
        button.textContent = "X";
        button.addEventListener("click", removeTask);

        li.appendChild(input);
        li.appendChild(label);
        li.appendChild(button);

        taskUl.appendChild(li);
    });
}



function addTask(){
    //console.log("Start Add Task");
    //console.log(taskList);
    let addTaskInput = document.getElementById('add-task-input');
    let id = 'task-' + taskList.length;
    //console.log(id);
    if(addTaskInput.value) {
        let li = document.createElement('li');
        let input = document.createElement('input');
        let label = document.createElement('label');
        let button = document.createElement('button');

        //add values to components...
        li.classList.add('task');
        input.setAttribute('type', 'checkbox');
        input.addEventListener("change", completeTask);
        label.classList.add('task-desc');
        input.setAttribute('id', id);
        label.textContent = addTaskInput.value;
        label.setAttribute('for', id);
        button.textContent = "X";
        button.addEventListener("click", removeTask);

        li.appendChild(input);
        li.appendChild(label);
        li.appendChild(button);

        taskUl.appendChild(li);

        taskList[taskList.length] = new ToDo(id, addTaskInput.value, false)
        update();
        
        //set value = "";
        addTaskInput.value = '';
    }
}

function completeTask(task){
    let checkbox = task.target;
    let taskChk = taskList.filter(atask => atask.id == task.target.id)[0];

    if (checkbox.checked) {
        taskChk.completed = true;
        // console.log(taskChk)
        // console.log(taskList);
      } else {
        taskChk.completed = false;
        // console.log(taskChk)
        // console.log(taskList);
    }
    update();

}

function removeTask(task){
    let li = task.target.parentNode;
    let chkId = task.target.parentNode.firstChild.id;
    //console.log(chkId);
    li.remove();
    taskList.splice(chkId, 1);
    update();
}

function update() {
    saveTasks("todo", taskList);
    countRemaining();
}

function applyFilter(filter) {
    // UnSet the active filter...
    if (document.querySelector('.filter-active')){
        document.querySelector('.filter-active').classList.remove('filter-active');
    }

    filter.target.classList.forEach(aclass => {
        switch(aclass) {
            case "filter-all":
                displayTasks(filterAll());
                document.querySelector('.filter-all').classList.add('filter-active');
                break;
            case "filter-incomplete":
                displayTasks(filterIncomplete());
                document.querySelector('.filter-incomplete').classList.add('filter-active');
                break;
            case "filter-complete":
                displayTasks(filterComplete());
                document.querySelector('.filter-complete').classList.add('filter-active');
                break;
            default:
                break;
        }
    });
}

function filterAll(){
    return taskList;
}

function filterIncomplete(){
    return taskList.filter(task => task.completed != true);
}

function filterComplete(){
    return taskList.filter(task => task.completed == true);
}

function countRemaining(){
    let tasksRemaining = document.querySelector('.tasks-remaining')
    tasksRemaining.textContent = filterIncomplete().length + ' tasks left';
}

export {
    addTask
}