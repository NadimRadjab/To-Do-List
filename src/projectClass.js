export class Project {
    constructor(title) {
        this.title = title
        this.todo = [];

    }

}

export class Projects {
    constructor() {
        this.projects = [];
    }

    newProject(title) {
        let p = new Project(title);
        this.projects.push(p);
        return p;
    }

    get allProjects() {
        return this.projects;
    }

    get numberOfProjects() {
        return this.projects.length;
    }
}



export class Todo {
    constructor(title, priority, description, dueDate) {
        this.title = title
        this.prioriy = priority
        this.description = description
        this.dueDate = dueDate

    }
    newTodo(title, priority, description, dueDate) {
        let p = new Project(title, priority, description, dueDate);
        this.projects.push(p);
        return p;
    }

}

