import { Task } from "./modules/objects/task.js"
import { Project } from "./modules/objects/project.js"

let a = new Project("test");

for (let i = 0; i < 10; i++) {
  let task = new Task(`Task ${i + 1}`,"Generic Description",i + 1,2,2025 )
  a.addTask(task)
}

const tasks = a.getTasks()

for (let i = 0; i < tasks.length; i++) {
  console.log(tasks[i].getTitle())
}

a.removeTask(tasks[3])

console.log(a.getTasks())
