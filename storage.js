export function saveTasks(tasks) {
    // Save tasks array to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadTasks() {
    // Retrieve tasks array from local storage
    var savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
        return JSON.parse(savedTasks);
    } else {
        return []; // Return an empty array if no tasks are found in local storage
    }
}

export function showConfirmation(paragraph, tasks, saveTasksCallback) {
    var confirmed = confirm("Are you sure you want to delete this task?");
    if (confirmed) {
        var taskIndex = Array.from(paragraph.parentNode.children).indexOf(paragraph);
        tasks.splice(taskIndex, 1);
        paragraph.parentNode.removeChild(paragraph);
        saveTasksCallback(tasks);
    }
}
