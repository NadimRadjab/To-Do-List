import { domFun } from './domfunc'
import { Todo, project } from './projectClass'


// Dom Selections
const mainDiv = document.querySelector('.main');
const sideBar = document.querySelector('.sideBar');

const projectDiv = document.querySelector('#projectTitles');

const popupProjectDiv = document.querySelector('.popupProject');

const contentDiv = document.querySelector('.content')

const popupDiv = document.querySelector('.popupTask');

const todoForm = document.querySelector('#todoform');

const closeBtn = document.querySelector('#close');

closeBtn.addEventListener('click', (e) => {
    closePopups()


});


// Close Pop Ups Function
function closePopups() {
    popupDiv.style.display = 'none';
    popupProjectDiv.style.display = 'none'

}



// Function that creates a from
function projectFormMaker() {

    const form = document.createElement('form');
    form.setAttribute('action', 'submit');
    form.classList.add('projectForm')


    // Event listner
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        formAction(text.value);
        form.remove();
        closePopups()


    });

    const text = document.createElement('input');
    text.setAttribute('type', 'text',);
    text.setAttribute('name', 'Title');
    text.setAttribute('placeholder', 'Title');
    text.setAttribute('maxlength', '13')


    const submit = document.createElement('input');
    submit.textContent = 'Add';
    submit.setAttribute('type', 'submit');
    submit.setAttribute("value", "Submit");

    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => {
        form.remove();
        closePopups();
    })


    popupProjectDiv.append(form);
    form.append(text);
    form.append(submit);
    form.append(cancelBtn);

}


// Form Action function 
function formAction(text) {

    let h2Title = document.querySelector('#displayTitle')
    let buttonAdd = document.querySelector('#addButton');
    buttonAdd.addEventListener('click', (e) => {
        popupDiv.style.display = 'flex';
    })

    // Main h3 holds the project title

    let h3 = document.createElement('h3');
    h3.textContent = text;
    projectDiv.append(h3);
    let spanDelete = document.createElement('span');
    spanDelete.textContent = 'X'
    h3.append(spanDelete)
    removeProject(spanDelete, h2Title)


    // h3 event listner 

    h3.addEventListener('click', (e) => {

        spanDelete.className = e.target.textContent

        e.currentTarget.classList.toggle('active')

        // Target the  h3 siblings
        let siblings = getSiblings(e.currentTarget);
        let siblingText = siblings.map(e => e.classList.remove('active'));

        contentDiv.innerHTML = ''
        let projectArr = project.allProjects

        for (let i = 0; i < projectArr.length; i++) {
            let title = projectArr[i].title



            if (e.target.textContent === title + 'X') {

                h2Title.textContent = title
                if (e.target.classList.contains('active')) {
                    todoForm.className = title
                    taskDisplayDiv(i,)


                }


            }
        }

    })


    // Adds the Project to the Project Class Container
    project.newProject(text)


}

// Function to get siblings of an element
let getSiblings = function (e) {
    // for collecting siblings
    let siblings = [];
    // if no parent, return no sibling
    if (!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling = e.parentNode.firstChild;

    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;

    }

    return siblings;
};


// TodoForm Eventlisnter
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    taskFormAction();
    closePopups();


})


// TodoForm Inputs Function and new Todo Creation
function taskFormAction() {


    let buttonAdd = document.querySelector('#addButton');
    buttonAdd.setAttribute('data-number', 0)
    const titleInput = document.querySelector('#titleInput');
    const selectInput = document.querySelector('#priority');
    const dateInput = document.querySelector('#date');
    const textInput = document.querySelector('#description');


    let projectArr = project.allProjects


    for (let i = 0; i < projectArr.length; i++) {
        let title = projectArr[i].title
        if (todoForm.classList.contains(title)) {


            project.allProjects[i].todo.push(new Todo(titleInput.value, selectInput.value, textInput.value, dateInput.value));

            taskDisplayForm(i)
        }

    }


    // taskDisplayForm(todoForm);
    taskFormReset(titleInput, selectInput, dateInput, textInput)


}



// Reset Form Function
function taskFormReset(title, select, date, text) {
    title.value = ''
    select.value = ''
    date.value = ''
    text.value = ''
}




// Display Function for the Todo Form on Submit

function taskDisplayForm(i) {


    let projectArr = project.allProjects[i].todo;
    let projectTitle = project.allProjects[i].title;

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
    deleteButton.className = projectTitle;



    for (i = 0; i < projectArr.length; i++) {

        removeTask(deleteButton, projectArr, i)
        buttonTaskAdd(deleteButton)
        mouseOver(deleteButton);

        for (let k = 0; k < 4; k++) {


            switch (k) {
                case 0:
                    h4.textContent = projectArr[i].title;
                    break;
                case 1:
                    spanP.innerHTML = projectArr[i].priority;
                    break;
                case 2:
                    p.textContent = projectArr[i].description;
                    break;
                case 3:
                    spanDate.textContent = projectArr[i].dueDate;
                    break;
            }
        }


    }
}





// Display Function for the main h3 eventlistner

function taskDisplayDiv(i) {


    let projectArr = project.allProjects[i].todo
    let projectTitle = project.allProjects[i].title


    for (i = 0; i < projectArr.length; i++) {


        const todoDiv = document.createElement('div');
        todoDiv.classList.add('card');
        contentDiv.append(todoDiv);
        let h4 = document.createElement('h4');
        todoDiv.append(h4)
        let spanP = document.createElement('span');
        todoDiv.append(spanP)
        let p = document.createElement('p');
        p.classList.add('cardSpan')
        todoDiv.append(p)
        let spanDate = document.createElement('span');
        todoDiv.append(spanDate)
        let deleteButton = document.createElement('button')
        todoDiv.append(deleteButton)
        deleteButton.textContent = 'X';
        deleteButton.className = projectTitle;



        removeTask(deleteButton, projectArr, i);
        buttonTaskAdd(deleteButton);

        mouseOver(deleteButton);


        for (let k = 0; k < 4; k++) {


            switch (k) {
                case 0:
                    h4.textContent = projectArr[i].title;
                    break;
                case 1:
                    spanP.innerHTML = projectArr[i].priority;
                    break;
                case 2:
                    p.textContent = projectArr[i].description;
                    break;
                case 3:
                    spanDate.textContent = projectArr[i].dueDate;
                    break;
            }
        }


    }
}




function mouseOver(button,) {
    button.addEventListener('mouseover', (e) => {
        button.classList.toggle('delete');

    });
    button.addEventListener('mouseout', (e) => {
        button.classList.toggle('delete');
    });

    return button;
};


function removeProject(span, h2) {
    let projectArr = project.allProjects
    span.addEventListener('click', (e) => {
        h2.textContent = ''
        for (let i = 0; i < projectArr.length; i++) {
            let title = projectArr[i].title
            if (e.target.classList.contains(title + "X")) {

                e.target.parentNode.remove()
                console.log(projectArr)
                projectArr.splice(i, 1)
            }

        }


    });
}



function removeTask(button, arr, i) {

    button.addEventListener('click', (e) => {
        contentDiv.innerHTML = ''

        if (e.currentTarget.classList.contains('delete')) {

            arr.splice(i, 1);




        }
    })
};

function buttonTaskAdd(button,) {

    button.addEventListener('click', (e) => {


        let projectArr = project.allProjects
        for (let i = 0; i < projectArr.length; i++) {
            let title = projectArr[i].title

            if (e.currentTarget.classList.contains(title)) {


                taskDisplayDiv(i);

            }


        }
    })
};






export { projectFormMaker }




