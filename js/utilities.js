function filterID(list, chkBoxID){
    console.log(list);
    console.log(chkBoxID);
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

function setCount(list){
    let countSpan = document.querySelector('.tasks-remaining');
    countSpan.textContent = filterIncomplete(list).length + ' tasks left';
}

export {
    filterID,
    filterIncomplete,
    filterComplete,
    getAddTaskInput,
    getAddTaskBtn,
    getTaskUL,
    setCount
}