import { fromPairs } from "lodash";
import { task } from "./dailyTaskClass";
import { contentDiv, todoForm, popupDiv, mouseOver } from "./project"
import { addWeek, removeWeek, editWeek, } from './thisWeek';
import { addDay, displayDay, removeDay, editDay } from './today'



function introInbox() {
    task.newTask('Tutorial', "High", "This is the Inbox. Here you can create tasks delete tasks and edit tasks.", 'Today Bro');
    task.newTask('Tutorial Projects', "High", "Click on  Projects to open the Projects Window and create your first Project and tasks to it.", '18-06-2021');
    task.newTask('Shoping', "Medium", "milk, egss, bread", '18/06/2021');
    taskDisplayInbox();
}

let buttonAdd = document.querySelector('#addButton');
buttonAdd.addEventListener('click', (e) => {
    popupDiv.style.display = 'flex';
})



function inboxCreation() {
    todoForm.addEventListener('submit', (e) => {

        taskFormAction();
        addWeek();
        addDay();
        e.stopPropagation();
        e.preventDefault();





    })

}



function taskFormAction() {

    const titleInput = document.querySelector('#titleInput');
    const selectInput = document.querySelector('#priority');
    const dateInput = document.querySelector('#date');
    const textInput = document.querySelector('#description');
    let title = titleInput.value

    let tasks = JSON.parse(localStorage.getItem('todos')) || [];

    if (todoForm.classList.contains('Inbox')) {


        // task.newTask(title, selectInput.value, textInput.value, dateInput.value);
        tasks.push(task.newTask(title, selectInput.value, textInput.value, dateInput.value));
        localStorage.setItem('todos', JSON.stringify(tasks))
        taskDisplayInbox();

        taskFormReset(titleInput, selectInput, dateInput, textInput);

    }





}


function taskFormReset(title, select, date, text) {
    title.value = '';
    select.value = '';
    date.value = '';
    text.value = '';
}




// Function That displays cards when inbox is pressed
// function taskDisplayInbox() {

//     let taskArr = task.allTasks;


//     for (let i = 0; i < taskArr.length; i++) {
//         let title = taskArr[i].title;
//         const todoDiv = document.createElement('div');
//         todoDiv.classList.add('card');
//         contentDiv.append(todoDiv);
//         let h4 = document.createElement('h4');
//         todoDiv.append(h4);
//         let spanP = document.createElement('span');
//         todoDiv.append(spanP);
//         let pText = document.createElement('textarea');
//         pText.classList.add('cardTextBox');
//         pText.classList.add(title.replace(/\s/g, '$'));
//         todoDiv.append(pText);
//         editText(pText);
//         let inputDate = document.createElement('input');
//         inputDate.setAttribute('type', 'date');


//         inputDate.className = title.replace(/\s/g, '$');
//         mouseTest(inputDate);
//         edit(inputDate);
//         editWeek(inputDate);
//         editDay(inputDate);
//         todoDiv.append(inputDate);
//         let deleteButton = document.createElement('button');
//         todoDiv.append(deleteButton);
//         deleteButton.textContent = 'X';

//         deleteButton.className = title.replace(/\s/g, '$');
//         removeWeek(deleteButton);

//         removeDay(deleteButton);

//         removeTask(deleteButton);
//         mouseOver(deleteButton);


//         for (let k = 0; k < 4; k++) {


//             switch (k) {
//                 case 0:
//                     h4.textContent = taskArr[i].title;
//                     break;
//                 case 1:
//                     spanP.textContent = taskArr[i].priority;
//                     break;
//                 case 2:
//                     pText.textContent = taskArr[i].description;
//                     break;
//                 case 3:
//                     inputDate.value = taskArr[i].date;
//                     break;
//             }
//         }


//     }
// }



function taskDisplayInbox() {


    let tasks = JSON.parse(localStorage.getItem('todos'));

    for (let i = 0; i < tasks.length; i++) {

        // console.log(taskArr[i])
        let title = tasks[i].title;
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('card');
        contentDiv.append(todoDiv);
        let h4 = document.createElement('h4');
        todoDiv.append(h4);
        let spanP = document.createElement('span');
        todoDiv.append(spanP);
        let pText = document.createElement('textarea');
        pText.classList.add('cardTextBox');
        pText.classList.add(title.replace(/\s/g, '$'));
        todoDiv.append(pText);
        editText(pText);
        let inputDate = document.createElement('input');
        inputDate.setAttribute('type', 'date');


        inputDate.className = title.replace(/\s/g, '$');
        mouseTest(inputDate);
        edit(inputDate);
        editWeek(inputDate);
        editDay(inputDate);
        todoDiv.append(inputDate);
        let deleteButton = document.createElement('button');
        todoDiv.append(deleteButton);
        deleteButton.textContent = 'X';

        deleteButton.className = title.replace(/\s/g, '$');
        removeWeek(deleteButton);

        removeDay(deleteButton);

        removeTask(deleteButton);
        mouseOver(deleteButton);


        for (let k = 0; k < 4; k++) {


            switch (k) {
                case 0:
                    h4.textContent = tasks[i].title;
                    break;
                case 1:
                    spanP.textContent = tasks[i].priority;
                    break;
                case 2:
                    pText.textContent = tasks[i].description;
                    break;
                case 3:
                    inputDate.value = tasks[i].date;
                    break;
            }
        }


    }

}







function mouseTest(button) {
    button.addEventListener('mouseover', (e) => {
        button.classList.toggle('edit');

    });
    button.addEventListener('mouseout', (e) => {
        button.classList.toggle('edit');
    });

}


// Function Edits the timeInput
function edit(input) {
    let tasks = JSON.parse(localStorage.getItem('todos'));
    let taskArr = task.allTasks;

    input.addEventListener('mouseleave', (e) => {
        // weekNumber.subtraction();
        for (let i = 0; i < tasks.length; i++) {
            let title = tasks[i].title.replace(/\s/g, '$');

            if (e.target.classList.contains(title)) {
                tasks[i].date = input.value;



            }
            localStorage.setItem('todos', JSON.stringify(tasks));
        };

        console.log(tasks)
    });
}


// Function edits the  Textbox
function editText(textDesc) {
    let tasks = JSON.parse(localStorage.getItem('todos'));
    let taskArr = task.allTasks;
    textDesc.addEventListener('mouseleave', (e) => {
        for (let i = 0; i < tasks.length; i++) {
            let title = tasks[i].title.replace(/\s/g, '$');
            // console.log(taskArr[i])
            if (e.target.classList.contains(title)) {
                tasks[i].description = textDesc.value;

            }
            localStorage.setItem('todos', JSON.stringify(tasks));
        };

    });
}



// Function Removes the Task
function removeTask(span) {
    let tasks = JSON.parse(localStorage.getItem('todos'));
    let taskArr = task.allTasks;
    span.addEventListener('click', (e) => {
        for (let i = 0; i < tasks.length; i++) {

            let title = tasks[i].title.replace(/\s/g, '$');

            if (e.target.classList.contains(title)) {

                // e.target.parentNode.remove();
                tasks.splice(i, 1);
                console.log(tasks)

            }

        }
        contentDiv.innerHTML = '';

        localStorage.setItem('todos', JSON.stringify(tasks));
        taskDisplayInbox();
    });
}









export { inboxCreation, taskDisplayInbox, introInbox }