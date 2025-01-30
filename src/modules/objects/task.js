import { compareAsc, format } from "date-fns";

format(new Date(2014, 1, 11), "yyyy-MM-dd");

class Task {
  #name;
  #description;
  #dueDate;
  #status;
  #id;

  constructor(name, description, dueDay, dueMonth, dueYear) {
    this.#name = name;
    this.#description = description;
    this.#dueDate = new Date(dueYear, dueMonth - 1, dueDay);
    this.#status = false;
    this.#id = Date.now();
  }

  getName() {
    return this.#name;
  }

  getDescription() {
    return this.#description;
  }

  getId() {
    return this.#id;
  }

  getDate() {
    return this.#dueDate;
  }

  getStatus() {
    return this.#status;
  }

  setTitle(newTitle) {
    this.#name = newTitle;
  }

  setDescription(newDescription) {
    this.#description = newDescription;
  }

  setDate(newDueDate) {
    this.#dueDate = newDueDate;
  }

  setStatus() {
    this.#status = !this.#status;
  }
}

export { Task };
