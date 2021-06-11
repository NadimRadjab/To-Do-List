import { formMaker } from './project'

const btnProject = document.querySelector('#projectBtn')


function test() {
    btnProject.addEventListener('click', () => {
        formMaker()
        btnProject.disabled = true;
    })




}


export { test }
