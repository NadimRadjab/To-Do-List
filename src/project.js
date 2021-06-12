import { domFun } from './domfunc'
import { Project, Todo } from './projectClass'

const projectArr = [];

const mainDiv = document.querySelector('.main');
const sideBar = document.querySelector('.sideBar');
const projectDiv = document.querySelector('#projectTitles')
const btnProject = document.querySelector('#projectBtn');
const closeBtn = document.querySelector('#close')
const todoForm = document.querySelector('.popupTask');
const popupProjectDiv = document.querySelector('.popupProject');
todoForm.addEventListener('click', (e) => {
    e.preventDefault();
})
closeBtn.addEventListener('click', (e) => {
    todoForm.style.display = 'none';

});


function createProject(title) {


    // let projectDiv = document.createElement('div');
    // projectDiv.classList.add('project');
    // mainDiv.append(projectDiv);

    let h3 = document.createElement('h3');
    h3.textContent = title;
    projectDiv.append(h3);
    h3.addEventListener('click', () => {
        mainDiv.innerHTML = h3.textContent
        mainDiv.append(buttonAdd)
    })

    // let deleteBtn = document.createElement('button');

    // deleteBtn.textContent = "Delete";
    // projectDiv.append(deleteBtn);



    let buttonAdd = document.createElement('button');
    buttonAdd.textContent = "Add a Task";
    buttonAdd.addEventListener('click', (e) => {
        console.log('hi')
        todoForm.style.display = 'flex';
    })


    // projectDiv.append(buttonAdd);


}



function formMaker() {



    // const projecForm = document.querySelector('#projectForm');
    // projecForm.addEventListener('submit', (e) => {

    //     e.preventDefault();


    //     formAction();
    //     popupProjectDiv.style.display = 'none'


    //     // let title = document.querySelector('#projectTitle');
    //     // // let value = title.value

    //     // btnProject.disabled = false;
    //     // projectArr.push(new Project(title.value));
    //     // console.log(projectArr)
    //     // console.log(title.value)



    // })



    const form = document.createElement('form');
    form.setAttribute('action', 'submit');


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        formAction(text);
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

    // let title = document.querySelector('#projectTitle');
    // let value = title.value

    createProject(text.value)

    btnProject.disabled = false;
    projectArr.push(new Project(text.value));
    console.log(projectArr)
    console.log(text.value)

}





















export { formMaker }




