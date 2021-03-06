function filterID(list, chkBoxID){
    return list.filter(task => task.id == chkBoxID)[0];
}

function getNdxByID(list, chkBoxID){
    return list.findIndex(task => task.id == chkBoxID);
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
    return document.querySelector('.add-task');
}

function getFilterAllBtn(){
    return document.querySelector('.filter-all');
}

function getFilterIncompleteBtn(){
    return document.querySelector('.filter-incomplete');
}

function getFilterCompleteBtn(){
    return document.querySelector('.filter-complete');
}

function getTaskUL(){
    return document.querySelector('.tasks-list');
}

function setCount(list){
    let countSpan = document.querySelector('.tasks-remaining');
    countSpan.textContent = filterIncomplete(list).length + ' tasks left';
}

export {
    filterID,
    getNdxByID,
    filterIncomplete,
    filterComplete,
    getAddTaskInput,
    getAddTaskBtn,
    getFilterAllBtn,
    getFilterIncompleteBtn,
    getFilterCompleteBtn,
    getTaskUL,
    setCount
}