import { task } from "./dailyTaskClass";
import { contentDiv, } from "./project"
import { project } from './projectClass';
import { isToday, parseISO } from './vendor';


const trackerDay = document.querySelector('#trackingDay');
const trackerDayP = document.querySelector('#trackingDayP');


let dayArr = [];
let dayPro = [];




// function dispaly the counter

function displayDay() {
    if (dayArr.length > 0) {
        trackerDay.style.color = 'red';
        trackerDay.textContent = dayArr.length
    } else if (dayArr.length <= 0) {
        trackerDay.textContent = dayArr.length
        trackerDay.style.color = 'blue';
    }

    if (dayPro.length > 0) {
        trackerDayP.style.color = 'red'
        trackerDayP.textContent = dayPro.length
    } else if (dayPro.length <= 0) {
        trackerDayP.textContent = dayPro.length
        trackerDayP.style.color = 'blue';
    }

}


// Functions add remove and edit for the inbox Tasks

function addDay() {
    let taskArr = task.allTasks;
    for (let i = 0; i < taskArr.length; i++) {

        let timeTask = parseISO(taskArr[i].date);
        if (isToday(timeTask) === true) {

            dayArr.push(taskArr[i]);
            dayArr = _.uniq(dayArr);
            displayDay();


        }
    }


}

function removeDay(button) {

    button.addEventListener('click', (e) => {
        for (let i = 0; i < dayArr.length; i++) {
            let title = dayArr[i].title.replace(/\s/g, '$');
            if (e.target.classList.contains(title)) {
                dayArr.splice(i, 1);
                displayDay();

            }
        }


    });
}

function editDay(textDesc) {
    textDesc.addEventListener('mouseleave', (e) => {
        addDay();
        for (let i = 0; i < dayArr.length; i++) {
            let title = dayArr[i].title.replace(/\s/g, '$');

            let timeTask = parseISO(dayArr[i].date);

            if (e.target.classList.contains(title)) {
                if (isToday(timeTask) === false) {
                    dayArr.splice(i, 1);

                    displayDay();
                }


            }

        };
    });
}




// Functions add remove and edit for the projects Tasks
function addDayProject() {
    let projectArr = project.allProjects;


    for (let i = 0; i < projectArr.length; i++) {
        let todoArr = projectArr[i].todo;

        for (let k = 0; k < todoArr.length; k++) {

            let timeProject = parseISO(todoArr[k].date)
            if (isToday(timeProject) === true) {
                dayPro.push(todoArr[k]);
                dayPro = _.uniq(dayPro);

                displayDay();

            }
        }
    }
}

function removeDayTaskProject(button) {

    button.addEventListener('click', (e) => {


        for (let i = 0; i < dayPro.length; i++) {


            let title = dayPro[i].title.replace(/\s/g, '$');

            console.log(dayPro[i].date)
            let timeProject = parseISO(dayPro[i].date)

            if (e.target.classList.contains(title)) {
                if (isToday(timeProject) === true) {

                    dayPro.splice(i, 1);


                }
                displayDay();
            }
        }

    });
}
function removeDayProject(span) {

    span.addEventListener('click', (e) => {
        dayPro.splice(0);
        addDayProject();
        displayDay();


    });
}

function editDayProject(textDesc) {
    textDesc.addEventListener('mouseleave', (e) => {
        addDayProject();
        for (let i = 0; i < dayPro.length; i++) {
            let title = dayPro[i].title.replace(/\s/g, '$');

            let timeTask = parseISO(dayPro[i].date);

            if (e.target.classList.contains(title)) {
                if (isToday(timeTask) === false) {
                    dayPro.splice(i, 1);
                    displayDay();
                }


            }

        };
    });
}













// function displays tasks for inbox
function taskDisplayDay() {

    let taskArr = task.allTasks;


    for (let i = 0; i < taskArr.length; i++) {
        let time = parseISO(taskArr[i].date)
        if (isToday(time) === true) {

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
function projectTaskDay() {


    let projectArr = project.allProjects;

    for (let j = 0; j < projectArr.length; j++) {
        let todoArr = projectArr[j].todo;

        for (let i = 0; i < todoArr.length; i++) {
            let time = parseISO(todoArr[i].date)
            if (isToday(time) === true) {
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

export { taskDisplayDay, projectTaskDay, addDay, displayDay, removeDay, editDay, addDayProject, removeDayProject, removeDayTaskProject, editDayProject }

