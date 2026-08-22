function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {

        const li = document.createElement("li");

        li.textContent = task.text || task;

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {

            tasks.splice(index, 1);

            displayTasks();
        });

        li.textContent = "Task: " + task;

        taskList.appendChild(li);
    });
}