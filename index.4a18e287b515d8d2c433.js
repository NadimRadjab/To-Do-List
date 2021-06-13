(self["webpackChunktodopage"] = self["webpackChunktodopage"] || []).push([["index"],{

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/domfunc.js":
/*!************************!*\
  !*** ./src/domfunc.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domFun": () => (/* binding */ domFun)
/* harmony export */ });
const domFun = (() => {
    const buttonMaker = (text = '', style) => {
        let button = document.createElement('button');
        button.textContent = text;
        button.classList.add(style);
        return button
    };
    const divMaker = (text = '', style) => {
        let div = document.createElement('div');
        div.classList.add(style);
        return div
    };
    const h2Maker = (text = '', style) => {
        let h2 = document.createElement('h2');
        h2.textContent = text;
        h2.classList.add(style);
        return h2
    };
    return {
        h2Maker,
        divMaker,
        buttonMaker,
    }


})();


/***/ }),

/***/ "./src/domstuff.js":
/*!*************************!*\
  !*** ./src/domstuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test": () => (/* binding */ test)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


const btnProject = document.querySelector('#projectBtn');
const popupProjectDiv = document.querySelector('.popupProject');


function test() {
    btnProject.addEventListener('click', () => {
        popupProjectDiv.style.display = 'flex'
        ;(0,_project__WEBPACK_IMPORTED_MODULE_0__.formMaker)()
        btnProject.disabled = true;
    })




}





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domstuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domstuff */ "./src/domstuff.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");




(0,_domstuff__WEBPACK_IMPORTED_MODULE_1__.test)()

// console.log('hello')




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formMaker": () => (/* binding */ formMaker)
/* harmony export */ });
/* harmony import */ var _domfunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domfunc */ "./src/domfunc.js");
/* harmony import */ var _projectClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectClass */ "./src/projectClass.js");





const test = new _projectClass__WEBPACK_IMPORTED_MODULE_1__.Project('Yes');
const test2 = new _projectClass__WEBPACK_IMPORTED_MODULE_1__.Project('no');


let project = new _projectClass__WEBPACK_IMPORTED_MODULE_1__.Projects()




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




























/***/ }),

/***/ "./src/projectClass.js":
/*!*****************************!*\
  !*** ./src/projectClass.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Projects": () => (/* binding */ Projects),
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
class Project {
    constructor(title) {
        this.title = title
        this.todo = [];

    }

}

class Projects {
    constructor() {
        this.projects = [];
    }

    newProject(title) {
        let p = new Project(title);
        this.projects.push(p);
        return p;
    }

    get allProjects() {
        return this.projects;
    }

    get numberOfProjects() {
        return this.projects.length;
    }
}



class Todo {
    constructor(title, priority, description, dueDate) {
        this.title = title
        this.prioriy = priority
        this.description = description
        this.dueDate = dueDate

    }
    newTodo(title, priority, description, dueDate) {
        let p = new Project(title, priority, description, dueDate);
        this.projects.push(p);
        return p;
    }

}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb3BhZ2UvLi9zcmMvZG9tZnVuYy5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9kb21zdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9wYWdlLy4vc3JjL3Byb2plY3RDbGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCb0M7O0FBRXJDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVM7QUFDakI7QUFDQSxLQUFLOzs7OztBQUtMOzs7QUFHZTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CTTtBQUNZO0FBQ007O0FBRXZDLCtDQUFJOztBQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNzQjs7OztBQUl4RCxpQkFBaUIsa0RBQU87QUFDeEIsa0JBQWtCLGtEQUFPOzs7QUFHekIsa0JBQWtCLG1EQUFROzs7OztBQUsxQjs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOzs7Ozs7O0FBT0Q7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOzs7QUFHQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7OztBQUdBOzs7O0FBSUE7Ozs7O0FBS0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQix1QkFBdUI7OztBQUcxQztBQUNBO0FBQ0E7OztBQUdBLHVCQUF1QiwrQkFBK0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsT0FBTzs7OztBQUlsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25QYjtBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiaW5kZXguNGExOGUyODdiNTE1ZDhkMmM0MzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBkb21GdW4gPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9uTWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGl2TWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICAgICAgcmV0dXJuIGRpdlxyXG4gICAgfTtcclxuICAgIGNvbnN0IGgyTWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgaDIudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGgyLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiBoMlxyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaDJNYWtlcixcclxuICAgICAgICBkaXZNYWtlcixcclxuICAgICAgICBidXR0b25NYWtlcixcclxuICAgIH1cclxuXHJcblxyXG59KSgpO1xyXG5leHBvcnQgeyBkb21GdW4gfSIsImltcG9ydCB7IGZvcm1NYWtlciB9IGZyb20gJy4vcHJvamVjdCdcclxuXHJcbmNvbnN0IGJ0blByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEJ0bicpO1xyXG5jb25zdCBwb3B1cFByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBQcm9qZWN0Jyk7XHJcblxyXG5cclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuICAgIGJ0blByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcG9wdXBQcm9qZWN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICBmb3JtTWFrZXIoKVxyXG4gICAgICAgIGJ0blByb2plY3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSlcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyB0ZXN0IH1cclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IHRlc3QgfSBmcm9tICcuL2RvbXN0dWZmJ1xyXG5pbXBvcnQgeyBwcm9qZWN0QXJyIH0gZnJvbSAnLi9wcm9qZWN0JztcclxuXHJcbnRlc3QoKVxyXG5cclxuLy8gY29uc29sZS5sb2coJ2hlbGxvJylcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBkb21GdW4gfSBmcm9tICcuL2RvbWZ1bmMnXHJcbmltcG9ydCB7IFByb2plY3QsIFRvZG8sIFByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0Q2xhc3MnXHJcblxyXG5cclxuXHJcbmNvbnN0IHRlc3QgPSBuZXcgUHJvamVjdCgnWWVzJyk7XHJcbmNvbnN0IHRlc3QyID0gbmV3IFByb2plY3QoJ25vJyk7XHJcblxyXG5cclxubGV0IHByb2plY3QgPSBuZXcgUHJvamVjdHMoKVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgcHJvamVjdEFyciA9IFtdO1xyXG5cclxuXHJcblxyXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyJyk7XHJcbmNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlcycpXHJcbmNvbnN0IGJ0blByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEJ0bicpO1xyXG5jb25zdCBwb3B1cFByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBQcm9qZWN0Jyk7XHJcblxyXG5cclxuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBUYXNrJyk7XHJcblxyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZScpO1xyXG5cclxuXHJcblxyXG5jb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlSW5wdXQnKTtcclxuY29uc3Qgc2VsZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcclxuY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcclxuY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XHJcbnRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0YXNrQ3JlYXRpb24oKTtcclxuICAgIHByb2plY3QuYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuXHJcbiAgICB9KVxyXG4gICAgLy8gcHJvamVjdC5hbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC50b2RvLnB1c2gobmV3IFRvZG8odGl0bGVJbnB1dC52YWx1ZSwgc2VsZWN0SW5wdXQudmFsdWUsIHRleHRJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlKSkpXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlKSB7XHJcblxyXG5cclxuICAgIC8vIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvLyBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcclxuICAgIC8vIG1haW5EaXYuYXBwZW5kKHByb2plY3REaXYpO1xyXG5cclxuICAgIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBoMy50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgcHJvamVjdERpdi5hcHBlbmQoaDMpO1xyXG4gICAgaDMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RBcnIuaW5kZXhPZihlLnRhcmdldCkpXHJcblxyXG4gICAgICAgIGNvbnN0IGhlbGxvID0gcHJvamVjdC5hbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gY29uc29sZS5sb2cocHJvamVjdC50aXRsZSA9IGUudGFyZ2V0LnRleHRDb250ZW50KSlcclxuXHJcbiAgICAgICAgcHJvamVjdC5hbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gZS50YXJnZXQudGV4dENvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbGxvb29vb29cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QuYWxsUHJvamVjdHMpXHJcblxyXG5cclxuICAgICAgICBidXR0b25BZGQucmVtb3ZlKClcclxuICAgICAgICBtYWluRGl2LmFwcGVuZChidXR0b25BZGQpXHJcblxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgLy8gZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcclxuICAgIC8vIHByb2plY3REaXYuYXBwZW5kKGRlbGV0ZUJ0bik7XHJcblxyXG5cclxuXHJcbiAgICBsZXQgYnV0dG9uQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25BZGQudGV4dENvbnRlbnQgPSBcIkFkZCBhIFRhc2tcIjtcclxuICAgIGJ1dHRvbkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgdG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0pXHJcblxyXG5cclxuICAgIC8vIHByb2plY3REaXYuYXBwZW5kKGJ1dHRvbkFkZCk7XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb3JtTWFrZXIoKSB7XHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnc3VibWl0Jyk7XHJcblxyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZm9ybUFjdGlvbih0ZXh0KTtcclxuICAgICAgICBmb3JtLnJlbW92ZSgpO1xyXG4gICAgICAgIHBvcHVwUHJvamVjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnVGl0bGUnKTtcclxuXHJcblxyXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XHJcblxyXG4gICAgcG9wdXBQcm9qZWN0RGl2LmFwcGVuZChmb3JtKTtcclxuICAgIGZvcm0uYXBwZW5kKHRleHQpO1xyXG4gICAgZm9ybS5hcHBlbmQoc3VibWl0KTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb3JtQWN0aW9uKHRleHQpIHtcclxuXHJcbiAgICAvLyBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlJyk7XHJcbiAgICAvLyBsZXQgdmFsdWUgPSB0aXRsZS52YWx1ZVxyXG5cclxuICAgIGNyZWF0ZVByb2plY3QodGV4dC52YWx1ZSlcclxuXHJcbiAgICBidG5Qcm9qZWN0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBwcm9qZWN0Lm5ld1Byb2plY3QodGV4dC52YWx1ZSlcclxuICAgIHByb2plY3QuYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IGNvbnNvbGUubG9nKHByb2plY3QudG9kbykpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0LmFsbFByb2plY3RzKVxyXG4gICAgLy8gcHJvamVjdEFyci5wdXNoKG5ldyBQcm9qZWN0KHRleHQudmFsdWUpKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRhc2tDcmVhdGlvbigpIHtcclxuXHJcbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXHJcbiAgICBtYWluRGl2LmFwcGVuZCh0b2RvRGl2KVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG5cclxuXHJcbiAgICAgICAgLy8gbmV3IFRvZG8odGl0bGVJbnB1dC52YWx1ZSwgc2VsZWN0SW5wdXQudmFsdWUsIHRleHRJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlKS5wcm9qZWN0YWRkKHByb2plY3RBcnJbaV0udG9kbylcclxuICAgICAgICAvLyBwcm9qZWN0QXJyW2ldLnRvZG8ucHVzaChuZXcgVG9kbyh0aXRsZUlucHV0LnZhbHVlLCBzZWxlY3RJbnB1dC52YWx1ZSwgdGV4dElucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJbaV0pXHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3RBcnJbaV0udG9kby5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBsZXQgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICAgICAgICB0b2RvRGl2LmFwcGVuZChoNClcclxuICAgICAgICAgICAgbGV0IHNwYW5QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICB0b2RvRGl2LmFwcGVuZChzcGFuUClcclxuICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHRvZG9EaXYuYXBwZW5kKHApXHJcbiAgICAgICAgICAgIGxldCBzcGFuRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgdG9kb0Rpdi5hcHBlbmQoc3BhbkRhdGUpXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDU7IGsrKykge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoNC50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0udG9kb1tqXS50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5QLmlubmVySFRNTCA9IHByb2plY3RBcnJbaV0udG9kb1tqXS5wcmlvcml0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLnRvZG9bal0uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuRGF0ZS50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0udG9kb1tqXS5kdWVEYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBmb3JtTWFrZXIgfVxyXG5cclxuXHJcblxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnRvZG8gPSBbXTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld1Byb2plY3QodGl0bGUpIHtcclxuICAgICAgICBsZXQgcCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocCk7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFsbFByb2plY3RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBudW1iZXJPZlByb2plY3RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmxlbmd0aDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVG9kbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5wcmlvcml5ID0gcHJpb3JpdHlcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcblxyXG4gICAgfVxyXG4gICAgbmV3VG9kbyh0aXRsZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSB7XHJcbiAgICAgICAgbGV0IHAgPSBuZXcgUHJvamVjdCh0aXRsZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBkdWVEYXRlKTtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocCk7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9