import { task } from "./dailyTaskClass";
import { contentDiv, todoForm, popupDiv, mouseOver } from "./project"
import { Todo, project } from './projectClass';
import { isThisWeek, parseISO } from './vendor';




// Function tracking how many task we have in the same week
function trackingWeek(number) {

    number = 0;

    let taskArr = task.allTasks;
    for (let i = 0; i < taskArr.length; i++) {
        number++

        let time = parseISO(taskArr[i].date);
        if (isThisWeek(time) === true) {

            tracker.textContent = number;
        }
    }


    let projectArr = project.allProjects;
    for (let j = 0; j < projectArr.length; j++) {
        let todoArr = projectArr[j].todo;

        for (let i = 0; i < todoArr.length; i++) {
            number++
            let time = parseISO(todoArr[i].date)
            if (isThisWeek(time) === true) {
                tracker.textContent = number;
            }
        }
    }
    console.log(number)
    return number;

}
const tracker = document.querySelector('#tracking')

class Tracker {
    constructor() {
        this.number = 0
    }

    add() {
        let taskArr = task.allTasks;
        for (let i = 0; i < taskArr.length; i++) {


            let timeTask = parseISO(taskArr[i].date);
            if (isThisWeek(timeTask) === true) {
                this.number++
                tracker.textContent = this.number;
            }
        }


        // let projectArr = project.allProjects;
        // for (let j = 0; j < projectArr.length; j++) {
        //     let todoArr = projectArr[j].todo;

        //     for (let i = 0; i < todoArr.length; i++) {

        //         let timeProject = parseISO(todoArr[i].date)
        //         if (isThisWeek(timeProject) === true) {
        //             this.number++
        //             tracker.textContent = this.number;
        //         }
        //     }
        // }

    }

    subtraction() {
        let taskArr = task.allTasks;
        for (let i = 0; i < taskArr.length; i++) {


            let timeTask = parseISO(taskArr[i].date);
            if (isThisWeek(timeTask) === false) {
                this.number--
                tracker.textContent = this.number;
            }
        }


        // let projectArr = project.allProjects;
        // for (let j = 0; j < projectArr.length; j++) {
        //     let todoArr = projectArr[j].todo;

        //     for (let i = 0; i < todoArr.length; i++) {

        //         let timeProject = parseISO(todoArr[i].date)
        //         if (isThisWeek(timeProject) === false) {
        //             this.number--
        //             tracker.textContent = this.number;
        //         }
        //     }
        // }

    }
    get numbers() {
        return console.log(this)
    }


}

export let weekNumber = new Tracker()



function taskDisplayTasks() {

    let taskArr = task.allTasks;


    for (let i = 0; i < taskArr.length; i++) {
        let time = parseISO(taskArr[i].date)
        if (isThisWeek(time) === true) {


            const todoDiv = document.createElement('div');
            todoDiv.classList.add('card');
            contentDiv.append(todoDiv);
            let h4 = document.createElement('h4');
            todoDiv.append(h4);
            let spanP = document.createElement('span');
            todoDiv.append(spanP);
            let p = document.createElement('p');
            p.classList.add('cardSpan')
            todoDiv.append(p);
            let spanDate = document.createElement('span');
            todoDiv.append(spanDate);


            for (let k = 0; k < 4; k++) {


                switch (k) {
                    case 0:
                        h4.textContent = taskArr[i].title;
                        break;
                    case 1:
                        spanP.innerHTML = taskArr[i].priority;
                        break;
                    case 2:
                        p.textContent = taskArr[i].description;
                        break;
                    case 3:
                        spanDate.textContent = taskArr[i].date;
                        break;
                }
            }


        }
    }
}






function projectTaskDisplay() {


    let projectArr = project.allProjects;

    for (let j = 0; j < projectArr.length; j++) {
        let todoArr = projectArr[j].todo;

        for (let i = 0; i < todoArr.length; i++) {
            let time = parseISO(todoArr[i].date)
            if (isThisWeek(time) === true) {

                const todoDiv = document.createElement('div');
                todoDiv.classList.add('card');
                contentDiv.append(todoDiv);
                let h4 = document.createElement('h4');
                todoDiv.append(h4);
                let spanP = document.createElement('span');
                todoDiv.append(spanP);
                let p = document.createElement('p');
                p.classList.add('cardSpan');
                todoDiv.append(p);
                let spanDate = document.createElement('span');
                todoDiv.append(spanDate);




                for (let k = 0; k < 4; k++) {


                    switch (k) {
                        case 0:
                            h4.textContent = todoArr[i].title;
                            break;
                        case 1:
                            spanP.innerHTML = todoArr[i].priority;
                            break;
                        case 2:
                            p.textContent = todoArr[i].description;
                            break;
                        case 3:
                            spanDate.textContent = todoArr[i].date;
                            break;
                    }
                }


            }
        }
    }

}





export { taskDisplayTasks, projectTaskDisplay, trackingWeek }