import { projectFormMaker, todoForm, popupProjectDiv, contentDiv } from './project'
import { inboxCreation, taskDisplayInbox } from './inbox';
import { isThisWeek, isToday, isThisMonth, } from './vendor'
const btnInbox = document.querySelector('#inbox')
const btnProject = document.querySelector('#projectBtn');
const h2 = document.querySelector('#displayTitle');



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
        // let result = isThisWeek(new Date(2021, 5 + 1, 15))
        // let result2 = isToday(new Date(2021, 6, 15))
        // let result3 = isThisMonth(new Date(2021, 5, 15))

        // console.log(result)
        // console.log(result2)
        // console.log(result3)


        contentDiv.innerHTML = '';
        taskDisplayInbox();
        btnInbox.classList.add('active');
        h2.textContent = 'Inbox'

        todoForm.className = 'Inbox';
    })
}


export { addProject, addInboxTask }
