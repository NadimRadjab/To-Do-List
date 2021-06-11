class Project {
    constructor(name) {
        this.name = name
        this.todo = [];

    }
    add(arr) {
        arr.push(this)
    }
}


class Todo {
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

export class Project { }
export class Todo { }