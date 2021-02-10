function filterIncomplete(list){
    return list.filter(item => item.completed != true);
}

function filterComplete(list){
    return list.filter(item => item.completed == true);
}