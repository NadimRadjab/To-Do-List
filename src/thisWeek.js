import { add } from "lodash";
import { task } from "./dailyTaskClass";
import { contentDiv, } from "./project"
import { Todo, project } from './projectClass';
import { isThisWeek, parseISO } from './vendor';

const tracker = document.querySelector('#tracking');
const trackerP = document.querySelector('#trackingP');

// Arrays for the counter display
let weekArr = [];
let weekPro = [];




// function dispaly the counter

function display() {
    if (weekArr.length > 0) {
        tracker.style.color = '#ba181b';
        tracker.textContent = weekArr.length
        tracker.parentElement.classList.add('scaleSpan')
        setTimeout(() => {
            tracker.parentElement.classList.remove('scaleSpan')
        }, 600)
    } else if (weekArr.length <= 0) {
        tracker.textContent = weekArr.length
        tracker.parentElement.classList.remove('scaleSpan')
        tracker.style.color = 'black';
    }

    if (weekPro.length > 0) {
        trackerP.style.color = '#ba181b'
        trackerP.classList.add('scaleSpan')
        trackerP.textContent = weekPro.length
        trackerP.parentElement.classList.add('scaleSpan')
        setTimeout(() => {
            trackerP.parentElement.classList.remove('scaleSpan')
        }, 600)
    } else if (weekPro.length <= 0) {
        trackerP.textContent = weekPro.length
        trackerP.parentElement.classList.remove('scaleSpan')
        trackerP.style.color = 'black';
    }

}


// Functions add remove and edit for the inbox Tasks

function addWeek() {
    let taskArr = task.allTasks;
    for (let i = 0; i < taskArr.length; i++) {

        let timeTask = parseISO(taskArr[i].date);
        if (isThisWeek(timeTask) === true) {

            weekArr.push(taskArr[i]);
            weekArr = _.uniq(weekArr);
            display();


        }
    }


}

function removeWeek(button) {

    button.addEventListener('click', (e) => {
        for (let i = 0; i < weekArr.length; i++) {
            let title = weekArr[i].title.replace(/\s/g, '$');
            if (e.target.classList.contains(title)) {
                weekArr.splice(i, 1);



                display();

            }
        }


    });
}

function editWeek(textDesc) {
    textDesc.addEventListener('mouseleave', (e) => {
        addWeek();
        for (let i = 0; i < weekArr.length; i++) {
            let title = weekArr[i].title.replace(/\s/g, '$');

            let timeTask = parseISO(weekArr[i].date);

            if (e.target.classList.contains(title)) {
                if (isThisWeek(timeTask) === false) {
                    weekArr.splice(i, 1);

                    display();
                }


            }

        };
    });
}




// Functions add remove and edit for the projects Tasks
function addWeekProject() {
    let projectArr = project.allProjects;


    for (let i = 0; i < projectArr.length; i++) {
        let todoArr = projectArr[i].todo;

        for (let k = 0; k < todoArr.length; k++) {

            let timeProject = parseISO(todoArr[k].date)
            if (isThisWeek(timeProject) === true) {
                weekPro.push(todoArr[k]);
                weekPro = _.uniq(weekPro);
                display();

            }
        }
    }
}

function removeWeekTaskProject(button) {

    button.addEventListener('click', (e) => {


        for (let i = 0; i < weekPro.length; i++) {


            let title = weekPro[i].title.replace(/\s/g, '$');

            console.log(weekPro[i].date)
            let timeProject = parseISO(weekPro[i].date)

            if (e.target.classList.contains(title)) {
                if (isThisWeek(timeProject) === true) {

                    weekPro.splice(i, 1);


                }
                display();
            }
        }

    });
}
function removeWeekProject(span) {

    span.addEventListener('click', (e) => {
        weekPro.splice(0);
        addWeekProject();
        display();


    });
}

function editWeekProject(textDesc) {
    textDesc.addEventListener('mouseleave', (e) => {
        addWeekProject();
        for (let i = 0; i < weekPro.length; i++) {
            let title = weekPro[i].title.replace(/\s/g, '$');

            let timeTask = parseISO(weekPro[i].date);

            if (e.target.classList.contains(title)) {
                if (isThisWeek(timeTask) === false) {
                    weekPro.splice(i, 1);
                    display();
                }


            }

        };
    });
}






// function displays tasks for inbox

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




// function displays tasks for Projects
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





export { taskDisplayTasks, projectTaskDisplay, addWeek, removeWeek, display, editWeek, addWeekProject, removeWeekTaskProject, removeWeekProject, editWeekProject }