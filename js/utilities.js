function filterIncomplete(list){
    return list.filter(item => item.completed != true);
}

function filterComplete(list){
    return list.filter(item => item.completed == true);
}

function getAddTaskDesc(){
    return document.getElementById('add-task-input').value;
}

function resetAddTaskDesc(){
    document.getElementById('add-task-input').value = "";
}

export {
    filterIncomplete,
    filterComplete,
    getAddTaskDesc,
    resetAddTaskDesc
}