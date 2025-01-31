import { Task } from "./objects/task.js";
import { Project } from "./objects/project.js";

let DEFAULT_PROJECT = new Project("Not Grouped");
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

function addTaskToProject(task, project) {
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
  task.setDate(day, month, year);
};


function updateTaskName(task, name) {
  task.setTitle(name);
}


function updateTaskDescription(task, description) {
  task.setDescription(description);
}

let a = createTask("Caca", "cacac", 12, 12, 2025);
addTaskToProject(a, ALL_PROJECTS[0]);

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
  updateTaskDescription,
};
