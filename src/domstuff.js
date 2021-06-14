import { load, projectFormMaker } from './project'

const btnProject = document.querySelector('#projectBtn');
const popupProjectDiv = document.querySelector('.popupProject');


function addProject() {
    btnProject.addEventListener('click', () => {
        popupProjectDiv.style.display = 'flex'
        projectFormMaker()

    })




}


export { addProject }
