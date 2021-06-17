import { fromPairs } from 'lodash';
import { Todo, project } from './projectClass';
import { addWeekProject, removeWeekProject, display, removeWeekTaskProject, editWeekProject } from './thisWeek';
import { addDayProject, removeDayProject, removeDayTaskProject, editDayProject, displayDay } from './today'


// Dom Selections

const sideBar = document.querySelector('.sideBar');

const projectDiv = document.querySelector('#projectTitles');

const popupProjectDiv = document.querySelector('.popupProject');

const contentDiv = document.querySelector('.content')

const popupDiv = document.querySelector('.popupTask');

const todoForm = document.querySelector('#todoform');

const closeBtn = document.querySelector('#close');
sideBar.addEventListener('click', (e) => {
    sideBar.classList.remove('active');
});


closeBtn.addEventListener('click', (e) => {
    closePopups()


});


// Close Pop Ups Function
function closePopups() {
    popupDiv.style.display = 'none';
    popupProjectDiv.style.display = 'none'

}
popupDiv.addEventListener('click', closePopups);




// Function that creates a from
function projectFormMaker() {

    const form = document.createElement('form');
    form.setAttribute('action', 'submit');
    form.classList.add('projectForm');

    popupProjectDiv.addEventListener('click', () => {
        form.remove();
        closePopups();

    })

    // Event listner
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        formAction(text.value);
        form.remove();
        closePopups()


    });
    form.addEventListener('click', (e) => {

        e.stopPropagation()


    })


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
    h3.classList.add('test');
    h3.textContent = text;
    projectDiv.append(h3);
    let spanDelete = document.createElement('span');
    spanDelete.textContent = 'X';
    h3.append(spanDelete);
    removeProject(spanDelete, h2Title);
    removeWeekProject(spanDelete);
    removeDayProject(spanDelete);
    addDayProject();



    document.addEventListener('click', (e) => {
        let isClickInsideElement = h3.contains(e.target);
        if (!isClickInsideElement) {
            h3.classList.remove('active');
        }
    });
    // h3 event listner 

    h3.addEventListener('click', (e) => {
        e.stopPropagation();
        spanDelete.className = e.target.textContent.replace(/\s/g, '$');;

        e.currentTarget.classList.toggle('active');

        // Target the  h3 siblings
        let siblings = getSiblings(e.currentTarget);
        let siblingText = siblings.map(e => e.classList.remove('active'));

        contentDiv.innerHTML = '';
        let projectArr = project.allProjects;

        for (let i = 0; i < projectArr.length; i++) {
            let title = projectArr[i].title



            if (e.target.textContent === title + 'X') {

                h2Title.textContent = title
                if (e.target.classList.contains('active')) {
                    todoForm.className = title.replace(/\s/g, '$')
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
    contentDiv.innerHTML = '';
    e.preventDefault();
    e.stopPropagation();
    taskFormAction();
    addWeekProject();
    addDayProject();
    display();
    displayDay();
    closePopups();


})


// TodoForm Inputs Function and new Todo Creation
function taskFormAction() {


    let buttonAdd = document.querySelector('#addButton');

    const titleInput = document.querySelector('#titleInput');
    const selectInput = document.querySelector('#priority');
    const dateInput = document.querySelector('#date');
    const textInput = document.querySelector('#description');



    let projectArr = project.allProjects


    for (let i = 0; i < projectArr.length; i++) {
        let title = projectArr[i].title.replace(/\s/g, '$')
        if (todoForm.classList.contains(title)) {
            project.allProjects[i].todo.push(new Todo(titleInput.value, selectInput.value, textInput.value, dateInput.value));

            taskDisplayDiv(i)
            taskFormReset(titleInput, selectInput, dateInput, textInput);

        }

    }





}



// Reset Form Function
function taskFormReset(title, select, date, text) {
    title.value = ''
    select.value = ''
    date.value = ''
    text.value = ''
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
        todoDiv.append(h4);
        let spanP = document.createElement('span');
        todoDiv.append(spanP);
        let pText = document.createElement('textarea');
        pText.classList.add('cardTextBox');
        pText.classList.add(projectArr[i].title.replace(/\s/g, '$'));
        todoDiv.append(pText);
        editText(pText);
        editDayProject(pText);
        editWeekProject(pText);
        let inputDate = document.createElement('input');
        inputDate.setAttribute('type', 'date');
        inputDate.className = projectArr[i].title.replace(/\s/g, '$');
        todoDiv.append(inputDate);

        edit(inputDate);


        let deleteButton = document.createElement('button');
        todoDiv.append(deleteButton);
        deleteButton.textContent = 'X';

        deleteButton.className = projectTitle.replace(/\s/g, '$');
        deleteButton.classList.add(projectArr[i].title.replace(/\s/g, '$'));


        removeTask(deleteButton, projectArr, i);
        removeDayTaskProject(deleteButton);
        removeWeekTaskProject(deleteButton);
        buttonTaskAdd(deleteButton);

        mouseOver(deleteButton);


        for (let k = 0; k < 4; k++) {


            switch (k) {
                case 0:
                    h4.textContent = projectArr[i].title;
                    break;
                case 1:
                    spanP.textContent = projectArr[i].priority;
                    break;
                case 2:
                    pText.textContent = projectArr[i].description;
                    break;
                case 3:
                    inputDate.value = projectArr[i].date;
                    break;
            }
        }


    }
}




// Helper function toggles delete
function mouseOver(button) {
    button.addEventListener('mouseover', (e) => {
        button.classList.toggle('delete');

    });
    button.addEventListener('mouseout', (e) => {
        button.classList.toggle('delete');
    });

    return button;
};


// Helper function  Deletes a Project
function removeProject(span, h2) {
    let projectArr = project.allProjects
    span.addEventListener('click', (e) => {
        h2.textContent = '';
        for (let i = 0; i < projectArr.length; i++) {
            let title = projectArr[i].title.replace(/\s/g, '$');
            if (e.target.classList.contains(title + "X")) {

                e.target.parentNode.remove();
                projectArr.splice(i, 1);
            }

        }


    });
}


// Helper Function Deletes Task from a Project
function removeTask(button, arr, i) {

    button.addEventListener('click', (e) => {
        contentDiv.innerHTML = '';

        if (e.currentTarget.classList.contains('delete')) {

            arr.splice(i, 1);




        }
    })
};




// Function Edits the timeInput
function edit(input) {
    let projectArr = project.allProjects
    input.addEventListener('mouseleave', (e) => {

        for (let i = 0; i < projectArr.length; i++) {
            let todoArr = projectArr[i].todo
            for (let j = 0; j < todoArr.length; j++) {

                let title = todoArr[j].title.replace(/\s/g, '$');


                if (e.target.classList.contains(title)) {
                    todoArr[j].date = input.value;

                };

            };

        };
    });
}

// Function edits the  Textbox
function editText(textDesc) {
    let projectArr = project.allProjects
    textDesc.addEventListener('mouseleave', (e) => {
        for (let i = 0; i < projectArr.length; i++) {
            let todoArr = projectArr[i].todo
            for (let j = 0; j < todoArr.length; j++) {
                let title = todoArr[j].title.replace(/\s/g, '$');
                if (e.target.classList.contains(title)) {
                    todoArr[j].description = textDesc.value;
                }
            }

        };
    });
}





// Helper Function Resets the  contentDiv
function buttonTaskAdd(button) {

    button.addEventListener('click', (e) => {


        let projectArr = project.allProjects;
        for (let i = 0; i < projectArr.length; i++) {
            let title = projectArr[i].title;

            if (e.currentTarget.classList.contains(title)) {

                taskDisplayDiv(i);

            };


        }
    });
};





export { projectFormMaker, mouseOver, todoForm, popupProjectDiv, contentDiv, popupDiv }




