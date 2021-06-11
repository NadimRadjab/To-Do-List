export class Project {
    constructor(title) {
        this.title = title
        this.todo = [];

    }
    add(arr) {
        arr.push(this)
    }
}


export class Todo {
    constructor(title, description, dueDate, prioriy) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.prioriy = prioriy
    }
    projectadd(todoArr) {
        todoArr.push(this)
    }
}

