import { addTodo, loadTasksToDOM } from './task.js';

let addToDoButton = document.getElementById("add-task");
let inputField = document.getElementById("input-field");

addToDoButton.addEventListener("click", addTodo);

inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

// Load tasks when refreshing the page
window.addEventListener("load", loadTasksToDOM);
