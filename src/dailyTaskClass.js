
class Task {
    constructor(title, priority, description, date) {
        this.title = title
        this.priority = priority
        this.description = description
        this.date = date

    }

}


class Tasks {
    constructor() {
        this.tasks = [];
    }

    newTask(title, priority, description, date) {
        let t = new Task(title, priority, description, date);
        this.tasks.push(t);
        return t;
    }

    get allTasks() {
        return this.tasks;
    }

    get numberOfTasks() {
        return this.tasks.length;
    }
}

export let task = new Tasks();




