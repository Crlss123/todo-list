import { compareAsc, format } from "date-fns";

format(new Date(2014, 1, 11), "yyyy-MM-dd");

class Task {
  #title;
  #description;
  #dueDate;
  #status;
  #id;

  constructor(title, description, dueDay, dueMonth, dueYear) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = new Date(dueYear, dueMonth - 1, dueDay);
    this.#status = false;
    this.#id = Date.now();
  }

  getTitle() {
    return this.#title;
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
    this.#title = newTitle;
  }

  setDescription(newDescription) {
    this.#description = newDescription;
  }

  setDate(newDueDate) {
    this.#dueDate = newDueDate;
  }

  setStatus(newStatus) {
    this.#status = !this.#status;
  }
}

export { Task };
