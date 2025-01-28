class Project {
  #tasks = [];
  #name;

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.#name;
  }

  setName(name) {
    this.#name = name;
  }

  addTask(task) {
    this.#tasks.push(task);
  }

  removeTask(task){
    const index = this.#tasks.indexOf(task);
    this.#tasks.splice(index, 1);
  }

  getTasks() {
    return this.#tasks;
  }
}

export { Project }
