import { projectFormMaker, todoForm, popupProjectDiv, contentDiv, } from './project'
import { inboxCreation, taskDisplayInbox } from './inbox';
import { taskDisplayTasks, projectTaskDisplay, trackingWeek, weekNumber } from './thisWeek';
import { taskDisplayDay, projectTaskDay } from './today';

const btnInbox = document.querySelector('#inbox')
const btnProject = document.querySelector('#projectBtn');
const thisWeek = document.querySelector('#thisWeek');
const addButton = document.querySelector('#addButton');
const mainDiv = document.querySelector('.main');
const dayButton = document.querySelector('#today');
const h2 = document.querySelector('#displayTitle');
const h2Project = document.querySelector('#projectTitle')
const projectDiv = document.querySelector('#projectTitles')


todoForm.addEventListener('click', (e) => {

    e.stopPropagation()


})

function addProject() {
    btnProject.addEventListener('click', () => {
        addButton.style.display = 'block';
        popupProjectDiv.style.display = 'flex'
        addButton.disabled = false
        projectDiv.style.height = '150px';
        projectDiv.classList.add('display');
        contentDiv.innerHTML = '';
        h2.textContent = 'Projects'
        projectFormMaker();

    })

}

function addInboxTask() {

    inboxCreation();
    btnInbox.addEventListener('click', (e) => {
        projectDiv.style.height = '0px';
        addButton.disabled = false
        addButton.style.display = 'block';
        contentDiv.innerHTML = '';
        taskDisplayInbox();
        btnInbox.classList.add('active');
        thisWeek.classList.remove('active');
        dayButton.classList.remove('active');
        h2.textContent = 'Inbox';
        todoForm.className = 'Inbox';
    })
}

function thisWeekTasks() {
    thisWeek.addEventListener('click', () => {
        projectDiv.style.height = '0px';
        btnInbox.classList.remove('active');
        thisWeek.classList.add('active');
        dayButton.classList.remove('active');
        h2.textContent = 'This Week';
        addButton.style.display = 'none';
        contentDiv.innerHTML = '';
        projectTaskDisplay();
        taskDisplayTasks();

    });
}
function thisDayTasks() {
    dayButton.addEventListener('click', () => {
        projectDiv.style.height = '0px';
        btnInbox.classList.remove('active');
        thisWeek.classList.remove('active');
        dayButton.classList.add('active');
        addButton.style.display = 'none';
        h2.textContent = 'Today';
        contentDiv.innerHTML = '';
        taskDisplayDay();
        projectTaskDay();
    });
}
function projectsContainer() {
    h2Project.addEventListener('click', () => {
        addButton.style.display = 'block';
        addButton.disabled = true
        contentDiv.innerHTML = '';
        h2.textContent = 'Projects';
        projectDiv.style.height = '150px';
        projectDiv.classList.add('display');

        btnProject.disabled = false

    });
}


export { addProject, addInboxTask, thisWeekTasks, thisDayTasks, projectsContainer }
