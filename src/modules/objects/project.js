class Project {
  #tasks = [];
  #name;
  #id;

  constructor(name) {
    this.#name = name;
    this.#id = Date.now();
  }

  getName() {
    return this.#name;
  }

  setName(name) {
    this.#name = name;
  }

  getId(){
    return this.#id;
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
