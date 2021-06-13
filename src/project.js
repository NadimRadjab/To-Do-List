import { domFun } from './domfunc'
import { Project, Todo, Projects } from './projectClass'



const test = new Project('Yes');
const test2 = new Project('no');


let project = new Projects()




const projectArr = [];



const mainDiv = document.querySelector('.main');
const sideBar = document.querySelector('.sideBar');
const projectDiv = document.querySelector('#projectTitles')
const btnProject = document.querySelector('#projectBtn');
const popupProjectDiv = document.querySelector('.popupProject');


const todoForm = document.querySelector('.popupTask');

const closeBtn = document.querySelector('#close');



const titleInput = document.querySelector('#titleInput');
const selectInput = document.querySelector('#priority');
const dateInput = document.querySelector('#date');
const textInput = document.querySelector('#description');
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    taskCreation();
    project.allProjects.forEach(project => {

    })
    // project.allProjects.forEach(project => project.todo.push(new Todo(titleInput.value, selectInput.value, textInput.value, dateInput.value)))
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
    h3.addEventListener('click', (e) => {
        // console.log(projectArr.indexOf(e.target))

        const hello = project.allProjects.forEach(project => console.log(project.title = e.target.textContent))

        project.allProjects.forEach(project => {
            if (project.title === e.target.textContent) {
                console.log("hellloooooo")
            }
        })

        console.log(project.allProjects)


        buttonAdd.remove()
        mainDiv.append(buttonAdd)

    })

    // let deleteBtn = document.createElement('button');

    // deleteBtn.textContent = "Delete";
    // projectDiv.append(deleteBtn);



    let buttonAdd = document.createElement('button');
    buttonAdd.textContent = "Add a Task";
    buttonAdd.addEventListener('click', (e) => {
        todoForm.style.display = 'flex';
    })


    // projectDiv.append(buttonAdd);


}



function formMaker() {




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
    project.newProject(text.value)
    project.allProjects.forEach(project => console.log(project.todo))
    // console.log(project.allProjects)
    // projectArr.push(new Project(text.value));

}
















function taskCreation() {

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('card')
    mainDiv.append(todoDiv)

    for (let i = 0; i < projectArr.length; i++) {


        // new Todo(titleInput.value, selectInput.value, textInput.value, dateInput.value).projectadd(projectArr[i].todo)
        // projectArr[i].todo.push(new Todo(titleInput.value, selectInput.value, textInput.value, dateInput.value))
        console.log(projectArr[i])


        for (let j = 0; j < projectArr[i].todo.length; j++) {
            let h4 = document.createElement('h4');
            todoDiv.append(h4)
            let spanP = document.createElement('span');
            todoDiv.append(spanP)
            let p = document.createElement('p');
            todoDiv.append(p)
            let spanDate = document.createElement('span');
            todoDiv.append(spanDate)

            for (let k = 0; k < 5; k++) {



                switch (k) {
                    case 0:
                        h4.textContent = projectArr[i].todo[j].title
                        break;
                    case 1:
                        spanP.innerHTML = projectArr[i].todo[j].priority
                        break;
                    case 2:
                        p.textContent = projectArr[i].todo[j].description
                        break;
                    case 3:
                        spanDate.textContent = projectArr[i].todo[j].dueDate
                        break;




                }
            }
        }
    }
}





















export { formMaker }




