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

        // todoForm.setAttribute('data-number', e.target.dataset.number);

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

        e.currentTarget.classList.toggle('active')
        // if (e.currentTarget.classList.contains('active')) {

        // }

        // Target the  h3 siblings
        let siblings = getSiblings(e.currentTarget);
        let siblingText = siblings.map(e => e.classList.remove('active'));

        contentDiv.innerHTML = ''
        let projectArr = project.allProjects
        console.log(projectArr)
        for (let i = 0; i < projectArr.length; i++) {
            let title = projectArr[i].title



            if (e.target.textContent === title) {


                if (e.target.classList.contains('active')) {
                    console.log(i)
                    taskDisplayDiv(i,)

                    todoForm.className = title
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

// function taskDisplayForm(item) {

//     let projectArr = project.allProjects[item.dataset.number].todo

//     const todoDiv = document.createElement('div');
//     todoDiv.classList.add('card');
//     contentDiv.append(todoDiv);

//     let h4 = document.createElement('h4');
//     todoDiv.append(h4)
//     let spanP = document.createElement('span');
//     todoDiv.append(spanP)
//     let p = document.createElement('p');
//     todoDiv.append(p)
//     let spanDate = document.createElement('span');
//     todoDiv.append(spanDate)
//     let deleteButton = document.createElement('button')
//     deleteButton.textContent = 'delete'
//     todoDiv.append(deleteButton)


//     mouseOver(deleteButton);


//     for (let i = 0; i < projectArr.length; i++) {



//         // removeTask(deleteButton, projectArr, i)




//         for (let k = 0; k < 4; k++) {

//             switch (k) {
//                 case 0:
//                     h4.textContent = projectArr[i].title
//                     break;
//                 case 1:
//                     spanP.innerHTML = projectArr[i].priority
//                     break;
//                 case 2:
//                     p.textContent = projectArr[i].description
//                     break;
//                 case 3:
//                     spanDate.textContent = projectArr[i].dueDate
//                     break;

//             }
//         }

//     }
// }

// Display Function for the main h3 eventlistner

// function taskDisplayDiv(item) {

//     let projectArr = project.allProjects[item.dataset.number].todo


//     for (let i = 0; i < projectArr.length; i++) {

//         const todoDiv = document.createElement('div');
//         todoDiv.classList.add('card');
//         contentDiv.append(todoDiv);
//         let h4 = document.createElement('h4');
//         todoDiv.append(h4)
//         let spanP = document.createElement('span');
//         todoDiv.append(spanP)
//         let p = document.createElement('p');
//         todoDiv.append(p)
//         let spanDate = document.createElement('span');
//         todoDiv.append(spanDate)
//         let deleteButton = document.createElement('button')
//         todoDiv.append(deleteButton)
//         deleteButton.textContent = 'Delete'

//         mouseOver(deleteButton);

//         // removeTask(deleteButton, projectArr, i)
//         deleteButton.addEventListener('click', (e) => {
//             if (e.target.classList.contains('delete')) {
//                 projectArr.splice(i, 1)
//             }

//             console.log(projectArr)
//         })
//         removeDiv(deleteButton)

//         for (let k = 0; k < 4; k++) {


//             switch (k) {
//                 case 0:
//                     h4.textContent = projectArr[i].title
//                     break;
//                 case 1:
//                     spanP.innerHTML = projectArr[i].priority
//                     break;
//                 case 2:
//                     p.textContent = projectArr[i].description
//                     break;
//                 case 3:
//                     spanDate.textContent = projectArr[i].dueDate
//                     break;

//             }
//         }

//     }

// }




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
    todoDiv.append(p);
    let spanDate = document.createElement('span');
    todoDiv.append(spanDate);
    let deleteButton = document.createElement('button');
    todoDiv.append(deleteButton);
    deleteButton.textContent = 'Delete';
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

















function taskDisplayDiv(i) {


    let projectArr = project.allProjects[i].todo
    let projectTitle = project.allProjects[i].title
    console.log(projectArr)

    for (i = 0; i < projectArr.length; i++) {


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
        deleteButton.textContent = 'Delete';
        deleteButton.className = projectTitle;

        console.log(project.allProjects);

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




function removeTask(button, arr, i) {

    button.addEventListener('click', (e) => {
        contentDiv.innerHTML = ''

        if (e.currentTarget.classList.contains('delete')) {

            arr.splice(i, 1);




        }
    })
};

function buttonTaskAdd(button) {

    button.addEventListener('click', (e) => {

        let projectArr = project.allProjects
        for (let i = 0; i < projectArr.length; i++) {
            let title = projectArr[i].title

            if (e.currentTarget.classList.contains(title)) {
                console.log(projectArr);

                taskDisplayDiv(i);

            }


        }
    })
};











export { projectFormMaker }




