function filterIncomplete(list){
    return list.filter(item => item.completed != true);
}

function filterComplete(list){
    return list.filter(item => item.completed == true);
}

function getAddTask(){
    return document.getElementById('add-task-input');
}

export {
    filterIncomplete,
    filterComplete,
    getAddTask
}