import {
  getAllProjects,
  createProject,
  deleteProject,
  addTaskToProject,
  deleteTaskFromProject,
  createTask,
  updateDueDate,
  updateProjectName,
  updateTaskName,
  updateTaskDescription,
} from "./utils.js";

import trash from "../img/delete.svg";

let currentProject = null;

function renderProjects() {
  let projectContainer = document.querySelector(".project-container");
  projectContainer.innerHTML = "";
  const projectsList = getAllProjects();

  for (const project of projectsList) {
    let projectName = project.getName();
    let projectCard = document.createElement("div");
    let projectBtn = document.createElement("a");
    projectBtn.textContent = projectName;
    projectCard.appendChild(projectBtn);
    projectCard.className = "project";
    projectBtn.addEventListener("click", () => {
      currentProject = project; // Store the current project
      renderTasks(project);
    });

    let img = document.createElement("img");
    img.src = trash;
    projectCard.appendChild(img);
    projectContainer.appendChild(projectCard);
    img.addEventListener("click", () => {
      deleteProject(project);
      projectCard.remove();
    });
  }
}

function renderTasks(project) {
  let taskContainer = document.querySelector(".tasks-container");
  taskContainer.innerHTML = "";
  let header = document.createElement("h1");
  header.textContent = project.getName();
  taskContainer.appendChild(header);

  let addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "Add Task";
  addTaskBtn.className = "add-task";
  taskContainer.appendChild(addTaskBtn);

  // Only call addTaskDialog once when the page is loaded
  addTaskDialog();

  const taskList = project.getTasks();

  for (const task of taskList) {
    let taskCard = document.createElement("div");
    taskCard.className = "task";

    let btn = document.createElement("button");
    btn.className = "done-btn";
    taskCard.appendChild(btn);

    let taskName = task.getName();
    let taskDueDate = task.getDate();

    let name = document.createElement("h2");
    name.textContent = taskName;
    taskCard.appendChild(name);

    let dateContainer = document.createElement("div");
    dateContainer.className = "date";
    let date = document.createElement("h2");
    date.innerText = taskDueDate;
    dateContainer.appendChild(date);

    taskCard.appendChild(dateContainer);

    taskContainer.appendChild(taskCard);

    btn.addEventListener("click", () => {
      deleteTaskFromProject(task, project);
      taskCard.remove();
    });
  }
}

function addProjectDialog() {
  const addProjectBtn = document.querySelector(".project-btn");
  const projectDialog = document.querySelector(".dialog-project");
  const projectForm = document.querySelector("#form-project");

  addProjectBtn.addEventListener("click", () => {
    projectDialog.showModal();
  });

  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(projectForm);
    const name = formData.get("project-name").trim();
    createProject(name);
    renderProjects();
    projectDialog.close();
    projectForm.reset();
  });
}

function addTaskDialog() {
  const taskDialog = document.querySelector(".dialog-task");
  const taskForm = document.querySelector("#form-task");

  const addTaskBtn = document.querySelector(".add-task");
  addTaskBtn.addEventListener("click", () => {
    taskDialog.showModal();
  });

  // This function is now only responsible for handling the form submission
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(taskForm);
    const name = formData.get("task-name").trim();
    const description = formData.get("task-description").trim();
    const dateString = formData.get("task-date");

    if (dateString) {
      const [year, month, day] = dateString.split("-").map(Number);
      const task = createTask(name, description, day, month, year);
      addTaskToProject(task, currentProject);
      renderTasks(currentProject); // Re-render the tasks with the new one
    }

    taskDialog.close();
    taskForm.reset();
  });
}

function addMockTasks() {
  let array = [
    createTask("Limpiar cuarto", "", 15, 1, 2025),
    createTask("Hacer Tarea", "", 20, 2, 2025),
    createTask("Recoger la basura", "", 5, 3, 2025),
    createTask("Sacar la basura", "", 10, 4, 2025),
    createTask("Ir al gym", "", 25, 5, 2025),
  ];

  array.forEach((task) => {
    addTaskToProject(task, getAllProjects()[0]);
  });
}

addProjectDialog();
addMockTasks();
renderTasks(getAllProjects()[0]);

export { renderProjects, renderTasks };
