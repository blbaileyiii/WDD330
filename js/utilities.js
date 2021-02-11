function filterID(list, chkBoxID){
    return list.filter(task => task.id == chkBoxID)[0];
}

function filterIncomplete(list){
    return list.filter(item => item.completed != true);
}

function filterComplete(list){
    return list.filter(item => item.completed == true);
}

function getAddTaskInput(){
    return document.getElementById('add-task-input');
}

function getAddTaskBtn(){
    return document.querySelector('.add-task')
}

function getTaskUL(){
    return document.querySelector('.tasks-list');
}

export {
    filterID,
    filterIncomplete,
    filterComplete,
    getAddTaskInput,
    getAddTaskBtn,
    getTaskUL
}