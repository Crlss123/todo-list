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
  updateTaskDecription,
} from "./utils.js";

import trash from "../img/delete.svg";
import { add } from "date-fns";

export function renderProjects() {
  let projectContainer = document.querySelector(".project-container");
  const projectsList = getAllProjects();

  for (const project of projectsList) {
    let projectName = project.getName();
    let projectCard = document.createElement("div");
    let projectBtn = document.createElement("a");
    projectBtn.textContent = projectName;
    projectCard.appendChild(projectBtn);
    projectCard.className = "project";
    projectBtn.addEventListener("click", () => renderTasks(project));

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
  console.log("click");
  let taskContainer = document.querySelector(".tasks-container");
  taskContainer.innerHTML = "";
  let header = document.createElement("h1");
  header.textContent = project.getName();
  taskContainer.appendChild(header);

  let addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "Add Task";
  addTaskBtn.className = "add-task";
  taskContainer.appendChild(addTaskBtn);

  const taskList = project.getTasks();

  for (const task of taskList) {
    let taskCard = document.createElement("div");
    taskCard.className = "task";

    let btn = document.createElement("button");
    btn.className = "done-btn";
    taskCard.appendChild(btn);

    let taskName = task.getName();
    let taskDueDate = task.getDate();
    let taskDay = taskDueDate.getDate();
    let taskMonth = taskDueDate.getMonth();
    let taskYear = taskDueDate.getFullYear();

    let name = document.createElement("h2");
    name.textContent = taskName;
    taskCard.appendChild(name);

    let dateContainer = document.createElement("div");
    dateContainer.className = "date";
    let heading = document.createElement("h2");
    heading.textContent = "Due to ";
    let daySpan = document.createElement("span");
    daySpan.textContent = taskDay;
    let dash1 = document.createTextNode(" - ");
    let monthSpan = document.createElement("span");
    monthSpan.textContent = taskMonth;
    let dash2 = document.createTextNode(" - ");
    let yearSpan = document.createElement("span");
    yearSpan.textContent = taskYear;
    heading.appendChild(daySpan);
    heading.appendChild(dash1);
    heading.appendChild(monthSpan);
    heading.appendChild(dash2);
    heading.appendChild(yearSpan);
    dateContainer.appendChild(heading);
    taskCard.appendChild(dateContainer);

    taskContainer.appendChild(taskCard);

    btn.addEventListener("click", () => {
      console.log(project.getTasks()[0])
      deleteTaskFromProject(task, project);
      console.log(project.getTasks()[0])
      taskCard.remove();
    });
  }
}

const addProjectBtn = document.querySelector(".project-btn");
addProjectBtn.addEventListener("click", () => {});
