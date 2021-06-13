import { domFun } from './domfunc'
import { Project, Todo, Projects } from './projectClass'



const test = new Project('Yes');
const test2 = new Project('no');


let project = new Projects();








const mainDiv = document.querySelector('.main');
const sideBar = document.querySelector('.sideBar');
const projectDiv = document.querySelector('#projectTitles');
const btnProject = document.querySelector('#projectBtn');
const popupProjectDiv = document.querySelector('.popupProject');
const contentDiv = document.querySelector('.content')

const popupDiv = document.querySelector('.popupTask');
const todoForm = document.querySelector('#todoform');

const closeBtn = document.querySelector('#close');



const titleInput = document.querySelector('#titleInput');
const selectInput = document.querySelector('#priority');
const dateInput = document.querySelector('#date');
const textInput = document.querySelector('#description');





todoForm.addEventListener('submit', (e) => {
    project.allProjects[todoForm.dataset.number].todo.push(new Todo(titleInput.value, selectInput.value, textInput.value, dateInput.value))
    e.preventDefault();
    taskDisplay(todoForm);
    // console.log(project.allProjects)


})





closeBtn.addEventListener('click', (e) => {
    popupDiv.style.display = 'none';

});





function formMaker() {

    const form = document.createElement('form');
    form.setAttribute('action', 'submit');


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        formAction(text.value);
        form.remove();


        popupProjectDiv.style.display = 'none'


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





function formAction(text) {

    let number = 0

    project.allProjects.forEach(project => {
        number++
    })

    let buttonAdd = document.querySelector('#addButton');
    buttonAdd.addEventListener('click', (e) => {
        todoForm.setAttribute('data-number', e.target.dataset.number);

        popupDiv.style.display = 'flex';
    })

    let h3 = document.createElement('h3');
    h3.textContent = text;
    h3.setAttribute('data-number', number)

    projectDiv.append(h3);






    h3.addEventListener('click', (e) => {

        e.currentTarget.classList.add('active')
        // contentDiv.innerHTML = project.allProjects[e.target.dataset.number].todo

        buttonAdd.setAttribute('data-number', e.target.dataset.number);
        // myFunction()

        if (e.currentTarget.classList.contains('active')) {
            taskDisplay(e.target)
        }

        let siblings = getSiblings(e.currentTarget);
        let siblingText = siblings.map(e => e.classList.remove('active'));





    })

    btnProject.disabled = false;
    project.newProject(text)
    // project.allProjects.forEach(project => {

    // })


}


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


// function taskCreation() {
//     const todoDiv = document.createElement('div')
//     todoDiv.classList.add('card')
//     contentDiv.append(todoDiv)

//     let h4 = document.createElement('h4');
//     todoDiv.append(h4)
//     let spanP = document.createElement('span');
//     todoDiv.append(spanP)
//     let p = document.createElement('p');
//     todoDiv.append(p)
//     let spanDate = document.createElement('span');
//     todoDiv.append(spanDate)


// }


// function myFunction() {
//     let div = document.querySelector('.card')
//     div.remove();
// }


function taskDisplay(item) {

    let projectArr = project.allProjects[item.dataset.number].todo

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('card')
    contentDiv.append(todoDiv)

    let h4 = document.createElement('h4');
    todoDiv.append(h4)
    let spanP = document.createElement('span');
    todoDiv.append(spanP)
    let p = document.createElement('p');
    todoDiv.append(p)
    let spanDate = document.createElement('span');
    todoDiv.append(spanDate)
    console.log(projectArr)


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





















export { formMaker }




