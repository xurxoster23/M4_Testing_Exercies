const addTask   =   ()  => {
    const newTask       =   document.getElementById('new-task');
    let   currentTask   =   document.getElementById('task-list').innerHTML; 
    currentTask         +=  `<li>${newTask.value}</li>`;
    document.getElementById('task-list').innerHTML  =   currentTask;
    newTask.value       =   '';
}

document.getElementById('add-task').addEventListener('click',addTask);