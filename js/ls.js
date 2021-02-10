function loadTasks(get){
    return JSON.parse(localStorage.getItem(get));
}

function saveTasks(set, item){
    localStorage.setItem(set, JSON.stringify(item));
}

export {
    loadTasks,
    saveTasks
}