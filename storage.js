export function saveTasks(tasks) {
    // Save to local
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadTasks() {
    // Retrieve from local
    var savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
        return JSON.parse(savedTasks);
    } else {
        return []; // Return nothing if no tasks
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
