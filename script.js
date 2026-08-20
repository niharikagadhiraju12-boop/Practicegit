const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");
const clearAllBtn = document.getElementById("clearAllBtn");

let tasks = [];

function updateCounter() {
    taskCounter.textContent = "Total Tasks: " + tasks.length;
}
addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    tasks.push(taskText);

    taskInput.value = "";

    updateCounter();
});