import { Task } from "./objects/task.js";
import { Project } from "./objects/project.js";

let DEFAULT_PROJECT = new Project("DEFAULT");
let ALL_PROJECTS = [DEFAULT_PROJECT];

const getAllProjects = () => ALL_PROJECTS;

const getAllTasks = (project) => project.getTasks();

function createProject(name) {
  ALL_PROJECTS[ALL_PROJECTS.length] = new Project(name);
  return;
}

function deleteProject(project) {
  const index = ALL_PROJECTS.indexOf(project);
  ALL_PROJECTS.splice(index, 1);
}

function addTaskToProject(project) {
  project.addTask(task);
}

function deleteTaskFromProject(task, project) {
  project.removeTask(task);
}

function createTask(title, description, dueDay, dueMonth, dueYear) {
  return new Task(title, description, dueDay, dueMonth, dueYear);
}

// const getProjectById = (id) =>
//   ALL_PROJECTS.find((project) => project.id === id);
// const getTaskById = (taskId, projectId) => {
//   const project = getProjectById(projectId);
//   return project.tasks.find((task) => task.id === taskId);
// };

const updateProjectName = (name, project) => {
  project.setName(name);
};

const updateDueDate = (year, month, day, task) => {
  let newDate = new Date(year, month, day);
  task.setDate(newDate);
};

function updateTaskName(task, name) {
  task.setName(name);
}

function updateTaskDecription(task, description) {
  task.setDescription(description);
}

function changeTaskStatus(task) {
  task.setStatus();
}

export {
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
};
