window.onload = startToDos;

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
    loadTasks();
    //set filters...
    countRemaining();
}

function loadTasks(){
    taskList = JSON.parse(localStorage.getItem("todo"));
    console.log(taskList);

    taskList.forEach(task => {
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

function saveTasks(){
    localStorage.setItem("todo", JSON.stringify(taskList));
    //console.log(localStorage.getItem("todo"));
}

function addTask(){
    //console.log("Start Add Task");
    //console.log(taskList);
    let addTaskInput = document.getElementById('add-task');
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
    let chkid = checkbox.id.replace("task-", "");
    let taskChk = taskList[chkid];

    if (checkbox.checked) {
        console.log("Checkbox is checked..");
        taskChk.completed = true;
        console.log(taskList[chkid]);
      } else {
        console.log("Checkbox is not checked..");
        taskChk.completed = false;
        console.log(taskList[chkid]);
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
    saveTasks();
    countRemaining();
}

function filterAll(){

}

function filterActive(){

}

function filterCompleted(){
    
}

function countRemaining(){
    let tasksRemaining = document.querySelector('.tasks-remaining')
    tasksRemaining.textContent = taskList.filter(task => task.completed != true).length + ' tasks left';
}