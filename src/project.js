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


    // Event listner
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        formAction(text.value);
        form.remove();
        closePopups()


    });

    const text = document.createElement('input');
    text.setAttribute('type', 'text');
    text.setAttribute('name', 'Title');


    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute("value", "Submit");

    popupProjectDiv.append(form);
    form.append(text);
    form.append(submit);

}


// Form Action function 
function formAction(text) {
    let number = 0


    // adds 1 to a number for every project
    let test = project.allProjects.forEach(project => {
        number++
    })


    let buttonAdd = document.querySelector('#addButton');
    buttonAdd.addEventListener('click', (e) => {

        todoForm.setAttribute('data-number', e.target.dataset.number);

        popupDiv.style.display = 'flex';
    })

    // Main h3 holds the project title

    let h3 = document.createElement('h3');
    h3.textContent = text;
    h3.setAttribute('data-number', number)
    projectDiv.append(h3);






    // h3 event listner 

    h3.addEventListener('click', (e) => {



        buttonAdd.setAttribute('data-number', e.target.dataset.number);

        contentDiv.innerHTML = ''
        e.currentTarget.classList.toggle('active')
        if (e.currentTarget.classList.contains('active')) {
            taskDisplayDiv(e.target)
        }

        // Target the  h3 siblings
        let siblings = getSiblings(e.currentTarget);
        let siblingText = siblings.map(e => e.classList.remove('active'));

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
    let num = 0
    num++
    let buttonAdd = document.querySelector('#addButton');
    buttonAdd.setAttribute('data-number', num)
    const titleInput = document.querySelector('#titleInput');
    const selectInput = document.querySelector('#priority');
    const dateInput = document.querySelector('#date');
    const textInput = document.querySelector('#description');

    project.allProjects[todoForm.dataset.number].todo.push(new Todo(titleInput.value, selectInput.value, textInput.value, dateInput.value));

    taskDisplayForm(todoForm);
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

function taskDisplayForm(item) {

    let projectArr = project.allProjects[item.dataset.number].todo

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('card');
    contentDiv.append(todoDiv);

    let h4 = document.createElement('h4');
    todoDiv.append(h4)
    let spanP = document.createElement('span');
    todoDiv.append(spanP)
    let p = document.createElement('p');
    todoDiv.append(p)
    let spanDate = document.createElement('span');
    todoDiv.append(spanDate)
    let deleteButton = document.createElement('button')

    deleteButton.setAttribute('data-number', projectArr.length - 1)
    deleteButton.addEventListener('mouseover', (e) => {
        deleteButton.classList.toggle('delete')
    })
    deleteButton.addEventListener('mouseout', (e) => {
        deleteButton.classList.toggle('delete')
    })
    deleteButton.textContent = 'Delete'
    todoDiv.append(deleteButton)
    deleteButton.addEventListener('click', (e) => {
        console.log('hello')
    })


    for (let i = 0; i < projectArr.length; i++) {



        for (let k = 0; k < 4; k++) {


            switch (k) {
                case 0:
                    h4.textContent = projectArr[i].title
                    break;
                case 1:
                    spanP.innerHTML = projectArr[i].priority
                    break;
                case 2:
                    p.textContent = projectArr[i].description
                    break;
                case 3:
                    spanDate.textContent = projectArr[i].dueDate
                    break;

            }
        }
    }
}

// Display Function for the main h3 eventlistner
function taskDisplayDiv(item) {

    let projectArr = project.allProjects[item.dataset.number].todo

    // console.log(projectArr)
    let num = 0
    for (let i = 0; i < projectArr.length; i++) {

        const todoDiv = document.createElement('div');
        todoDiv.classList.add('card');
        contentDiv.append(todoDiv);
        let h4 = document.createElement('h4');
        todoDiv.append(h4)
        let spanP = document.createElement('span');
        todoDiv.append(spanP)
        let p = document.createElement('p');
        todoDiv.append(p)
        let spanDate = document.createElement('span');
        todoDiv.append(spanDate)
        let deleteButton = document.createElement('button')
        todoDiv.append(deleteButton)
        num++



        deleteButton.setAttribute('data-number', projectArr.length - 1)
        deleteButton.addEventListener('mouseover', (e) => {
            deleteButton.classList.toggle('delete')
        })
        deleteButton.addEventListener('mouseout', (e) => {
            deleteButton.classList.toggle('delete')
        })


        deleteButton.setAttribute('data-number', num - 1)

        deleteButton.textContent = 'Delete'
        deleteButton.addEventListener('click', (e) => {

            if (e.target.classList.contains('delete')) {
                projectArr.splice(i, 1)
            }
            // projectArr.splice(e.target.dataset.number, 1)
            console.log(projectArr)
        })

        for (let k = 0; k < 4; k++) {


            switch (k) {
                case 0:
                    h4.textContent = projectArr[i].title
                    break;
                case 1:
                    spanP.innerHTML = projectArr[i].priority
                    break;
                case 2:
                    p.textContent = projectArr[i].description
                    break;
                case 3:
                    spanDate.textContent = projectArr[i].dueDate
                    break;

            }
        }

    }

}




function removeTask(item) {
    let projectArr = project.allProjects[item.dataset.number].todo
}


export { projectFormMaker }




