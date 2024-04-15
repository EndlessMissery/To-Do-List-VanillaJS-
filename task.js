import { saveTasks, loadTasks, showConfirmation } from './storage.js';

let toDoContainer = document.getElementById("to-do-container");
let inputField = document.getElementById("input-field");

function addTaskToDOM(taskText, tasks) {
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("button-styling");

    var completeButton = document.createElement("button");
    completeButton.classList.add("complete-styling");

    var failedButton = document.createElement("button");
    failedButton.classList.add("failed-styling");

    var clearButton = document.createElement("button");
    clearButton.classList.add("clear-style");

    toDoContainer.appendChild(paragraph);
    paragraph.appendChild(completeButton);
    paragraph.appendChild(deleteButton);
    paragraph.appendChild(failedButton);
    paragraph.appendChild(clearButton);

    deleteButton.addEventListener("click", function () {
        showConfirmation(paragraph, tasks, saveTasks);
    });

    completeButton.addEventListener("click", function () {
        paragraph.style.color = "green";
        saveTasks(tasks);
    });

    failedButton.addEventListener("click", function () {
        paragraph.style.color = "red";
        saveTasks(tasks);
    });

    clearButton.addEventListener("click", function () {
        paragraph.style.color = "black";
        saveTasks(tasks);
    });
}

export function addTodo() {
    var taskText = inputField.value.trim();
    if (taskText === "") {
        alert("Please write your task");
        return;
    }

    var tasks = loadTasks();
    tasks.push(taskText);
    addTaskToDOM(taskText, tasks);
    inputField.value = "";

    saveTasks(tasks);
}

export function loadTasksToDOM() {
    var tasks = loadTasks();
    tasks.forEach(function(taskText) {
        addTaskToDOM(taskText, tasks);
    });
}
