import { formMaker } from './project'

const btnProject = document.querySelector('#projectBtn');
const popupProjectDiv = document.querySelector('.popupProject');


function test() {
    btnProject.addEventListener('click', () => {
        popupProjectDiv.style.display = 'flex'
        formMaker()
        btnProject.disabled = true;
    })




}


export { test }
