import { task } from "./dailyTaskClass";
import { contentDiv, todoForm, popupDiv, mouseOver } from "./project"
import { isThisWeek, parseISO } from './vendor'




let buttonAdd = document.querySelector('#addButton');
buttonAdd.addEventListener('click', (e) => {
    popupDiv.style.display = 'flex';
})



function inboxCreation() {
    todoForm.addEventListener('submit', (e) => {
        taskFormAction();

        e.stopPropagation();
        e.preventDefault();

    })

}



function taskFormAction() {


    let buttonAdd = document.querySelector('#addButton');

    const titleInput = document.querySelector('#titleInput');
    const selectInput = document.querySelector('#priority');
    const dateInput = document.querySelector('#date');
    const textInput = document.querySelector('#description');
    let title = titleInput.value



    let taskArr = task.allTasks

    if (todoForm.classList.contains('Inbox')) {

        task.newTask(title, selectInput.value, textInput.value, dateInput.value);
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






function taskDisplayInbox(i) {

    let taskArr = task.allTasks;


    for (i = 0; i < taskArr.length; i++) {


        console.log(taskArr)
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
        let deleteButton = document.createElement('button');
        todoDiv.append(deleteButton);
        deleteButton.textContent = 'X';
        deleteButton.className = taskArr[i].title;


        removeTask(deleteButton)
        mouseOver(deleteButton);

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


function removeTask(span) {
    let taskArr = task.allTasks;
    span.addEventListener('click', (e) => {
        for (let i = 0; i < taskArr.length; i++) {
            let title = taskArr[i].title;
            if (e.target.classList.contains(title)) {

                e.target.parentNode.remove();
                console.log(taskArr);
                taskArr.splice(i, 1);
            }

        }


    });
}



export { inboxCreation, taskDisplayInbox }