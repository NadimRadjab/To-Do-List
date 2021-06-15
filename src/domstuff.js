import { projectFormMaker, todoForm, popupProjectDiv, contentDiv } from './project'
import { inboxCreation, taskDisplayInbox } from './inbox';
const btnInbox = document.querySelector('#inbox')
const btnProject = document.querySelector('#projectBtn');


todoForm.addEventListener('click', (e) => {

    e.stopPropagation()


})

function addProject() {
    btnProject.addEventListener('click', () => {
        popupProjectDiv.style.display = 'flex'
        projectFormMaker()

    })

}

function addInboxTask() {
    inboxCreation()
    btnInbox.addEventListener('click', (e) => {
        contentDiv.innerHTML = ''
        taskDisplayInbox()
        btnInbox.classList.add('active')

        todoForm.className = 'Inbox'
    })
}


export { addProject, addInboxTask }
