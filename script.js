const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(taskText);

    displayTasks();

    taskInput.value = "";
});

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function (task) {

        const li = document.createElement("li");

        li.textContent = task;

        taskList.appendChild(li);
    });
}