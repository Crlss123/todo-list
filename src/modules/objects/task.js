import { compareAsc, format } from "date-fns";

format(new Date(2014, 1, 11), "yyyy-MM-dd");

class Task {
  #name;
  #description;
  #dueDay;
  #dueMonth;
  #dueYear;
  #status;
  #id;

  constructor(name, description, dueDay, dueMonth, dueYear) {
    this.#name = name;
    this.#description = description;
    this.#dueDay = dueDay;
    this.#dueMonth = dueMonth;
    this.#dueYear = dueYear;
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
    return `${this.#dueDay} - ${this.#dueMonth} - ${this.#dueYear}`
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

  setDate(dueDay, dueMonth, dueYear) {
    this.#dueDay = dueDay;
    this.#dueMonth = dueMonth;
    this.#dueYear = dueYear;
  }

  setStatus() {
    this.#status = !this.#status;
  }
}

export { Task };
