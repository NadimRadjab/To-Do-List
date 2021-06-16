import { task } from "./dailyTaskClass";
import { contentDiv, todoForm, popupDiv, mouseOver } from "./project"




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

    const titleInput = document.querySelector('#titleInput');
    const selectInput = document.querySelector('#priority');
    const dateInput = document.querySelector('#date');
    const textInput = document.querySelector('#description');
    let title = titleInput.value



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



function taskDisplayInbox() {

    let taskArr = task.allTasks;


    for (let i = 0; i < taskArr.length; i++) {
        console.log(taskArr[i])
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
        let spanDate = document.createElement('input');
        spanDate.setAttribute('type', 'date');
        let title = taskArr[i].title;

        spanDate.className = title.replace(/\s/g, '$');
        mouseTest(spanDate)
        edit(spanDate)
        todoDiv.append(spanDate);
        let deleteButton = document.createElement('button');
        todoDiv.append(deleteButton);
        deleteButton.textContent = 'X';

        deleteButton.className = title.replace(/\s/g, '$');


        removeTask(deleteButton)
        mouseOver(deleteButton);

        for (let k = 0; k < 4; k++) {


            switch (k) {
                case 0:
                    h4.textContent = taskArr[i].title;
                    break;
                case 1:
                    spanP.textContent = taskArr[i].priority;
                    break;
                case 2:
                    p.textContent = taskArr[i].description;
                    break;
                case 3:
                    spanDate.value = taskArr[i].date;
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
function edit(input) {
    let taskArr = task.allTasks;
    input.addEventListener('mouseleave', (e) => {
        for (let i = 0; i < taskArr.length; i++) {
            let title = taskArr[i].title.replace(/\s/g, '$');
            console.log(taskArr[i])
            if (e.target.classList.contains(title)) {
                taskArr[i].date = input.value;
            }

        };
    });
}
function removeTask(span) {
    let taskArr = task.allTasks;
    span.addEventListener('click', (e) => {
        for (let i = 0; i < taskArr.length; i++) {

            let title = taskArr[i].title.replace(/\s/g, '$');

            if (e.target.classList.contains(title)) {

                e.target.parentNode.remove();
                console.log(taskArr);
                taskArr.splice(i, 1);
            }

        }


    });
}



export { inboxCreation, taskDisplayInbox }