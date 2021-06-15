import { task } from "./dailyTaskClass";
import { contentDiv, todoForm, popupDiv } from "./project"



let buttonAdd = document.querySelector('#addButton');
buttonAdd.addEventListener('click', (e) => {
    popupDiv.style.display = 'flex';
})



function inboxCreation() {
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        taskFormAction();
        // closePopups();


    })

}



function taskFormAction() {


    let buttonAdd = document.querySelector('#addButton');

    const titleInput = document.querySelector('#titleInput');
    const selectInput = document.querySelector('#priority');
    const dateInput = document.querySelector('#date');
    const textInput = document.querySelector('#description');
    let title = titleInput.value

    console.log(title)

    let taskArr = task.allTasks

    if (todoForm.classList.contains('Inbox')) {

        task.newTask(title, selectInput.value, textInput.value, dateInput.value);


    }


    taskDisplayInbox()
    // taskFormReset(titleInput, selectInput, dateInput, textInput)


}
function taskFormReset(title, select, date, text) {
    title.value = ''
    select.value = ''
    date.value = ''
    text.value = ''
}







function taskDisplayInbox(i) {



    let taskArr = task.allTasks
    let taskArrTitle = task.allTasks.title;


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
        deleteButton.className = taskArrTitle;


        // removeTask(deleteButton, projectArr, i)
        // buttonTaskAdd(deleteButton)
        // mouseOver(deleteButton);

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


export { inboxCreation, taskDisplayInbox }