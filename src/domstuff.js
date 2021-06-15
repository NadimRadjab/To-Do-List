import { projectFormMaker, todoForm, popupProjectDiv, contentDiv, } from './project'
import { inboxCreation, taskDisplayInbox } from './inbox';
import { taskDisplayTasks, projectTaskDisplay } from './thisWeek';
const btnInbox = document.querySelector('#inbox')
const btnProject = document.querySelector('#projectBtn');
const thisWeek = document.querySelector('#thisWeek');
const addButton = document.querySelector('#addButton');
const mainDiv = document.querySelector('.main');
const containerDiv = document.querySelector('.container')

const h2 = document.querySelector('#displayTitle');
const divHolder = document.createElement('div')
divHolder.classList.add('.main')


todoForm.addEventListener('click', (e) => {

    e.stopPropagation()


})

function addProject() {
    btnProject.addEventListener('click', () => {
        popupProjectDiv.style.display = 'flex'
        projectFormMaker();

    })

}

function addInboxTask() {

    inboxCreation();
    btnInbox.addEventListener('click', (e) => {
        addButton.style.display = 'block'
        contentDiv.innerHTML = '';
        taskDisplayInbox();
        btnInbox.classList.add('active');
        h2.textContent = 'Inbox';
        todoForm.className = 'Inbox';
    })
}

function thisWeekTasks() {
    thisWeek.addEventListener('click', () => {
        btnInbox.classList.remove('active');
        thisWeek.classList.add('active');
        h2.textContent = 'This Week';
        addButton.style.display = 'none'
        contentDiv.innerHTML = '';
        projectTaskDisplay();
        taskDisplayTasks();

    })
}


export { addProject, addInboxTask, thisWeekTasks }
