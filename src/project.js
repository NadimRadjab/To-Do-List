import { domFun } from './domfunc'
import { Project, Todo } from './projectClass'

const projectArr = [];

const mainDiv = document.querySelector('.main')

const sideBar = document.querySelector('.sideBar')

const btnProject = document.querySelector('#projectBtn')


function createProject(title) {


    let projectDiv = document.createElement('div')
    projectDiv.classList.add('project')
    mainDiv.append(projectDiv)

    let h2 = document.createElement('h2')
    h2.textContent = title;
    projectDiv.append(h2);

    let deleteBtn = document.createElement('button');

    deleteBtn.textContent = "Delete"
    projectDiv.append(deleteBtn)



    let buttonAdd = document.createElement('button');

    buttonAdd.textContent = "Add a Task"
    projectDiv.append(buttonAdd)


}




function formMaker() {

    const form = document.createElement('form');
    form.setAttribute('action', 'submit');


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        formAction(text);
        form.remove();

    });

    const text = document.createElement('input');
    text.setAttribute('type', 'text');
    text.setAttribute('name', 'Title');


    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute("value", "Submit");

    sideBar.append(form);
    form.append(text);
    form.append(submit);

}


function formAction(input) {
    let title = input.value

    createProject(title)

    projectArr.push(new Project(title));
    btnProject.disabled = false;
    console.log(projectArr)
    console.log(title)

}
export { formMaker, }




