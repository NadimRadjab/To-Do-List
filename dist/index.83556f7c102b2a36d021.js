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
/* harmony export */   "addProject": () => (/* binding */ addProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


const btnProject = document.querySelector('#projectBtn');
const popupProjectDiv = document.querySelector('.popupProject');


function addProject() {
    btnProject.addEventListener('click', () => {
        popupProjectDiv.style.display = 'flex'
        ;(0,_project__WEBPACK_IMPORTED_MODULE_0__.projectFormMaker)()

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





(0,_domstuff__WEBPACK_IMPORTED_MODULE_1__.addProject)()

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
/* harmony export */   "projectFormMaker": () => (/* binding */ projectFormMaker)
/* harmony export */ });
/* harmony import */ var _domfunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domfunc */ "./src/domfunc.js");
/* harmony import */ var _projectClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectClass */ "./src/projectClass.js");




// Dom Selections
const mainDiv = document.querySelector('.main');
const sideBar = document.querySelector('.sideBar');

const projectDiv = document.querySelector('#projectTitles');

const popupProjectDiv = document.querySelector('.popupProject');

const contentDiv = document.querySelector('.content')

const popupDiv = document.querySelector('.popupTask');

const todoForm = document.querySelector('#todoform');

const closeBtn = document.querySelector('#close');

closeBtn.addEventListener('click', (e) => {
    closePopups()


});


// Close Pop Ups Function
function closePopups() {
    popupDiv.style.display = 'none';
    popupProjectDiv.style.display = 'none'

}



// Function that creates a from
function projectFormMaker() {

    const form = document.createElement('form');
    form.setAttribute('action', 'submit');


    // Event listner
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        formAction(text.value);
        form.remove();
        closePopups()


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


// Form Action function 
function formAction(text) {


    let buttonAdd = document.querySelector('#addButton');
    buttonAdd.addEventListener('click', (e) => {


        popupDiv.style.display = 'flex';
    })

    // Main h3 holds the project title

    let h3 = document.createElement('h3');
    h3.textContent = text;
    projectDiv.append(h3);


    // h3 event listner 

    h3.addEventListener('click', (e) => {

        buttonAdd.setAttribute('data-number', e.target.dataset.number);

        e.currentTarget.classList.toggle('active')
        // if (e.currentTarget.classList.contains('active')) {

        // }

        // Target the  h3 siblings
        let siblings = getSiblings(e.currentTarget);
        let siblingText = siblings.map(e => e.classList.remove('active'));

        contentDiv.innerHTML = ''
        let projectArr = _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects

        for (let i = 0; i < projectArr.length; i++) {
            let title = projectArr[i].title



            if (e.target.textContent === title) {


                if (e.target.classList.contains('active')) {

                    taskDisplayDiv(i,)

                    todoForm.className = title
                }


            }
        }

    })


    // Adds the Project to the Project Class Container
    _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.newProject(text)


}

// Function to get siblings of an element
let getSiblings = function (e) {
    // for collecting siblings
    let siblings = [];
    // if no parent, return no sibling
    if (!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling = e.parentNode.firstChild;

    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;

    }

    return siblings;
};


// TodoForm Eventlisnter
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    taskFormAction();
    closePopups();


})


// TodoForm Inputs Function and new Todo Creation
function taskFormAction() {


    let buttonAdd = document.querySelector('#addButton');
    buttonAdd.setAttribute('data-number', 0)
    const titleInput = document.querySelector('#titleInput');
    const selectInput = document.querySelector('#priority');
    const dateInput = document.querySelector('#date');
    const textInput = document.querySelector('#description');



    let projectArr = _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects


    for (let i = 0; i < projectArr.length; i++) {
        let title = projectArr[i].title
        if (todoForm.classList.contains(title)) {


            _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects[i].todo.push(new _projectClass__WEBPACK_IMPORTED_MODULE_1__.Todo(titleInput.value, selectInput.value, textInput.value, dateInput.value));

            taskDisplayForm(i)
        }

    }


    // taskDisplayForm(todoForm);
    taskFormReset(titleInput, selectInput, dateInput, textInput)


}




// Reset Form Function
function taskFormReset(title, select, date, text) {
    title.value = ''
    select.value = ''
    date.value = ''
    text.value = ''
}







// Display Function for the Todo Form on Submit

function taskDisplayForm(i) {


    let projectArr = _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects[i].todo;
    let projectTitle = _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects[i].title;

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('card');
    contentDiv.append(todoDiv);
    let h4 = document.createElement('h4');
    todoDiv.append(h4);
    let spanP = document.createElement('span');
    todoDiv.append(spanP);
    let p = document.createElement('p');
    todoDiv.append(p);
    let spanDate = document.createElement('span');
    todoDiv.append(spanDate);
    let deleteButton = document.createElement('button');
    todoDiv.append(deleteButton);
    deleteButton.textContent = 'Delete';
    deleteButton.className = projectTitle;



    for (i = 0; i < projectArr.length; i++) {

        removeTask(deleteButton, projectArr, i)
        buttonTaskAdd(deleteButton)

        mouseOver(deleteButton);




        for (let k = 0; k < 4; k++) {


            switch (k) {
                case 0:
                    h4.textContent = projectArr[i].title;
                    break;
                case 1:
                    spanP.innerHTML = projectArr[i].priority;
                    break;
                case 2:
                    p.textContent = projectArr[i].description;
                    break;
                case 3:
                    spanDate.textContent = projectArr[i].dueDate;
                    break;
            }
        }


    }
}





// Display Function for the main h3 eventlistner

function taskDisplayDiv(i) {


    let projectArr = _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects[i].todo
    let projectTitle = _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects[i].title
    console.log(projectArr)

    for (i = 0; i < projectArr.length; i++) {


        const todoDiv = document.createElement('div');
        todoDiv.classList.add('card');
        contentDiv.append(todoDiv);
        let h4 = document.createElement('h4');
        todoDiv.append(h4)
        let spanP = document.createElement('span');
        todoDiv.append(spanP)
        let p = document.createElement('p');
        todoDiv.append(p)
        let spanDate = document.createElement('span');
        todoDiv.append(spanDate)
        let deleteButton = document.createElement('button')
        todoDiv.append(deleteButton)
        deleteButton.textContent = 'Delete';
        deleteButton.className = projectTitle;



        removeTask(deleteButton, projectArr, i);
        buttonTaskAdd(deleteButton);

        mouseOver(deleteButton);


        for (let k = 0; k < 4; k++) {


            switch (k) {
                case 0:
                    h4.textContent = projectArr[i].title;
                    break;
                case 1:
                    spanP.innerHTML = projectArr[i].priority;
                    break;
                case 2:
                    p.textContent = projectArr[i].description;
                    break;
                case 3:
                    spanDate.textContent = projectArr[i].dueDate;
                    break;
            }
        }


    }
}




function mouseOver(button,) {
    button.addEventListener('mouseover', (e) => {
        button.classList.toggle('delete');

    });
    button.addEventListener('mouseout', (e) => {
        button.classList.toggle('delete');
    });

    return button;
};



function removeTask(button, arr, i) {

    button.addEventListener('click', (e) => {
        contentDiv.innerHTML = ''

        if (e.currentTarget.classList.contains('delete')) {

            arr.splice(i, 1);




        }
    })
};

function buttonTaskAdd(button) {

    button.addEventListener('click', (e) => {

        let projectArr = _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects
        for (let i = 0; i < projectArr.length; i++) {
            let title = projectArr[i].title

            if (e.currentTarget.classList.contains(title)) {


                taskDisplayDiv(i);

            }


        }
    })
};













/***/ }),

/***/ "./src/projectClass.js":
/*!*****************************!*\
  !*** ./src/projectClass.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project),
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

let project = new Projects();




class Todo {
    constructor(title, priority, description, dueDate) {
        this.title = title
        this.priority = priority
        this.description = description
        this.dueDate = dueDate

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9kb21mdW5jLmpzIiwid2VicGFjazovL3RvZG9wYWdlLy4vc3JjL2RvbXN0dWZmLmpzIiwid2VicGFjazovL3RvZG9wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9wYWdlLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb3BhZ2UvLi9zcmMvcHJvamVjdENsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJpRDs7QUFFbEQ7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7O0FBRXhCLEtBQUs7Ozs7O0FBS0w7OztBQUdxQjs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBOztBQUVrQjs7O0FBR3ZDLHFEQUFVOztBQUVWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BrQztBQUNZOzs7QUFHOUM7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsOERBQW1COztBQUU1Qyx1QkFBdUIsdUJBQXVCO0FBQzlDOzs7O0FBSUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsS0FBSzs7O0FBR0w7QUFDQSxJQUFJLDZEQUFrQjs7O0FBR3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDOzs7QUFHRDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxxQkFBcUIsOERBQW1COzs7QUFHeEMsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBOzs7QUFHQSxZQUFZLDhEQUFtQixrQkFBa0IsK0NBQUk7O0FBRXJEO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7OztBQUdBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBOztBQUVBOzs7QUFHQSxxQkFBcUIsOERBQW1CO0FBQ3hDLHVCQUF1Qiw4REFBbUI7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGVBQWUsdUJBQXVCOztBQUV0QztBQUNBOztBQUVBOzs7OztBQUtBLHVCQUF1QixPQUFPOzs7QUFHOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7QUFNQTs7QUFFQTs7O0FBR0EscUJBQXFCLDhEQUFtQjtBQUN4Qyx1QkFBdUIsOERBQW1CO0FBQzFDOztBQUVBLGVBQWUsdUJBQXVCOzs7QUFHdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTs7O0FBR0EsdUJBQXVCLE9BQU87OztBQUc5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQSx5QkFBeUIsOERBQW1CO0FBQzVDLHVCQUF1Qix1QkFBdUI7QUFDOUM7O0FBRUE7OztBQUdBOztBQUVBOzs7QUFHQTtBQUNBLEtBQUs7QUFDTDs7Ozs7OztBQU8yQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFozQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7QUFLQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJmaWxlIjoiaW5kZXguODM1NTZmN2MxMDJiMmEzNmQwMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBkb21GdW4gPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9uTWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGl2TWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICAgICAgcmV0dXJuIGRpdlxyXG4gICAgfTtcclxuICAgIGNvbnN0IGgyTWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgaDIudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGgyLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiBoMlxyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaDJNYWtlcixcclxuICAgICAgICBkaXZNYWtlcixcclxuICAgICAgICBidXR0b25NYWtlcixcclxuICAgIH1cclxuXHJcblxyXG59KSgpO1xyXG5leHBvcnQgeyBkb21GdW4gfSIsImltcG9ydCB7IGxvYWQsIHByb2plY3RGb3JtTWFrZXIgfSBmcm9tICcuL3Byb2plY3QnXHJcblxyXG5jb25zdCBidG5Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RCdG4nKTtcclxuY29uc3QgcG9wdXBQcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwUHJvamVjdCcpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgICBidG5Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwUHJvamVjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgcHJvamVjdEZvcm1NYWtlcigpXHJcblxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBhZGRQcm9qZWN0IH1cclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSAnLi9kb21zdHVmZidcclxuXHJcblxyXG5hZGRQcm9qZWN0KClcclxuXHJcbi8vIGNvbnNvbGUubG9nKCdoZWxsbycpXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgZG9tRnVuIH0gZnJvbSAnLi9kb21mdW5jJ1xyXG5pbXBvcnQgeyBUb2RvLCBwcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0Q2xhc3MnXHJcblxyXG5cclxuLy8gRG9tIFNlbGVjdGlvbnNcclxuY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbmNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZUJhcicpO1xyXG5cclxuY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VGl0bGVzJyk7XHJcblxyXG5jb25zdCBwb3B1cFByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBQcm9qZWN0Jyk7XHJcblxyXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG5cclxuY29uc3QgcG9wdXBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBUYXNrJyk7XHJcblxyXG5jb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvZm9ybScpO1xyXG5cclxuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UnKTtcclxuXHJcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNsb3NlUG9wdXBzKClcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG4vLyBDbG9zZSBQb3AgVXBzIEZ1bmN0aW9uXHJcbmZ1bmN0aW9uIGNsb3NlUG9wdXBzKCkge1xyXG4gICAgcG9wdXBEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHBvcHVwUHJvamVjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vIEZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIGZyb21cclxuZnVuY3Rpb24gcHJvamVjdEZvcm1NYWtlcigpIHtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICdzdWJtaXQnKTtcclxuXHJcblxyXG4gICAgLy8gRXZlbnQgbGlzdG5lclxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgZm9ybUFjdGlvbih0ZXh0LnZhbHVlKTtcclxuICAgICAgICBmb3JtLnJlbW92ZSgpO1xyXG4gICAgICAgIGNsb3NlUG9wdXBzKClcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdUaXRsZScpO1xyXG5cclxuXHJcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcclxuXHJcbiAgICBwb3B1cFByb2plY3REaXYuYXBwZW5kKGZvcm0pO1xyXG4gICAgZm9ybS5hcHBlbmQodGV4dCk7XHJcbiAgICBmb3JtLmFwcGVuZChzdWJtaXQpO1xyXG5cclxufVxyXG5cclxuXHJcbi8vIEZvcm0gQWN0aW9uIGZ1bmN0aW9uIFxyXG5mdW5jdGlvbiBmb3JtQWN0aW9uKHRleHQpIHtcclxuXHJcblxyXG4gICAgbGV0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRCdXR0b24nKTtcclxuICAgIGJ1dHRvbkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG5cclxuICAgICAgICBwb3B1cERpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBNYWluIGgzIGhvbGRzIHRoZSBwcm9qZWN0IHRpdGxlXHJcblxyXG4gICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGgzLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHByb2plY3REaXYuYXBwZW5kKGgzKTtcclxuXHJcblxyXG4gICAgLy8gaDMgZXZlbnQgbGlzdG5lciBcclxuXHJcbiAgICBoMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgICAgIGJ1dHRvbkFkZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtYmVyJywgZS50YXJnZXQuZGF0YXNldC5udW1iZXIpO1xyXG5cclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuICAgICAgICAvLyBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBUYXJnZXQgdGhlICBoMyBzaWJsaW5nc1xyXG4gICAgICAgIGxldCBzaWJsaW5ncyA9IGdldFNpYmxpbmdzKGUuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgbGV0IHNpYmxpbmdUZXh0ID0gc2libGluZ3MubWFwKGUgPT4gZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcblxyXG4gICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJydcclxuICAgICAgICBsZXQgcHJvamVjdEFyciA9IHByb2plY3QuYWxsUHJvamVjdHNcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHByb2plY3RBcnJbaV0udGl0bGVcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSB0aXRsZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0YXNrRGlzcGxheURpdihpLClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Zvcm0uY2xhc3NOYW1lID0gdGl0bGVcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcblxyXG5cclxuICAgIC8vIEFkZHMgdGhlIFByb2plY3QgdG8gdGhlIFByb2plY3QgQ2xhc3MgQ29udGFpbmVyXHJcbiAgICBwcm9qZWN0Lm5ld1Byb2plY3QodGV4dClcclxuXHJcblxyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byBnZXQgc2libGluZ3Mgb2YgYW4gZWxlbWVudFxyXG5sZXQgZ2V0U2libGluZ3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gZm9yIGNvbGxlY3Rpbmcgc2libGluZ3NcclxuICAgIGxldCBzaWJsaW5ncyA9IFtdO1xyXG4gICAgLy8gaWYgbm8gcGFyZW50LCByZXR1cm4gbm8gc2libGluZ1xyXG4gICAgaWYgKCFlLnBhcmVudE5vZGUpIHtcclxuICAgICAgICByZXR1cm4gc2libGluZ3M7XHJcbiAgICB9XHJcbiAgICAvLyBmaXJzdCBjaGlsZCBvZiB0aGUgcGFyZW50IG5vZGVcclxuICAgIGxldCBzaWJsaW5nID0gZS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XHJcblxyXG4gICAgLy8gY29sbGVjdGluZyBzaWJsaW5nc1xyXG4gICAgd2hpbGUgKHNpYmxpbmcpIHtcclxuICAgICAgICBpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlKSB7XHJcbiAgICAgICAgICAgIHNpYmxpbmdzLnB1c2goc2libGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2libGluZ3M7XHJcbn07XHJcblxyXG5cclxuLy8gVG9kb0Zvcm0gRXZlbnRsaXNudGVyXHJcbnRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0YXNrRm9ybUFjdGlvbigpO1xyXG4gICAgY2xvc2VQb3B1cHMoKTtcclxuXHJcblxyXG59KVxyXG5cclxuXHJcbi8vIFRvZG9Gb3JtIElucHV0cyBGdW5jdGlvbiBhbmQgbmV3IFRvZG8gQ3JlYXRpb25cclxuZnVuY3Rpb24gdGFza0Zvcm1BY3Rpb24oKSB7XHJcblxyXG5cclxuICAgIGxldCBidXR0b25BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQnV0dG9uJyk7XHJcbiAgICBidXR0b25BZGQuc2V0QXR0cmlidXRlKCdkYXRhLW51bWJlcicsIDApXHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlSW5wdXQnKTtcclxuICAgIGNvbnN0IHNlbGVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XHJcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xyXG4gICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XHJcblxyXG5cclxuXHJcbiAgICBsZXQgcHJvamVjdEFyciA9IHByb2plY3QuYWxsUHJvamVjdHNcclxuXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gcHJvamVjdEFycltpXS50aXRsZVxyXG4gICAgICAgIGlmICh0b2RvRm9ybS5jbGFzc0xpc3QuY29udGFpbnModGl0bGUpKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgcHJvamVjdC5hbGxQcm9qZWN0c1tpXS50b2RvLnB1c2gobmV3IFRvZG8odGl0bGVJbnB1dC52YWx1ZSwgc2VsZWN0SW5wdXQudmFsdWUsIHRleHRJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlKSk7XHJcblxyXG4gICAgICAgICAgICB0YXNrRGlzcGxheUZvcm0oaSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyB0YXNrRGlzcGxheUZvcm0odG9kb0Zvcm0pO1xyXG4gICAgdGFza0Zvcm1SZXNldCh0aXRsZUlucHV0LCBzZWxlY3RJbnB1dCwgZGF0ZUlucHV0LCB0ZXh0SW5wdXQpXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8gUmVzZXQgRm9ybSBGdW5jdGlvblxyXG5mdW5jdGlvbiB0YXNrRm9ybVJlc2V0KHRpdGxlLCBzZWxlY3QsIGRhdGUsIHRleHQpIHtcclxuICAgIHRpdGxlLnZhbHVlID0gJydcclxuICAgIHNlbGVjdC52YWx1ZSA9ICcnXHJcbiAgICBkYXRlLnZhbHVlID0gJydcclxuICAgIHRleHQudmFsdWUgPSAnJ1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBEaXNwbGF5IEZ1bmN0aW9uIGZvciB0aGUgVG9kbyBGb3JtIG9uIFN1Ym1pdFxyXG5cclxuZnVuY3Rpb24gdGFza0Rpc3BsYXlGb3JtKGkpIHtcclxuXHJcblxyXG4gICAgbGV0IHByb2plY3RBcnIgPSBwcm9qZWN0LmFsbFByb2plY3RzW2ldLnRvZG87XHJcbiAgICBsZXQgcHJvamVjdFRpdGxlID0gcHJvamVjdC5hbGxQcm9qZWN0c1tpXS50aXRsZTtcclxuXHJcbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgIGNvbnRlbnREaXYuYXBwZW5kKHRvZG9EaXYpO1xyXG4gICAgbGV0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgIHRvZG9EaXYuYXBwZW5kKGg0KTtcclxuICAgIGxldCBzcGFuUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRvZG9EaXYuYXBwZW5kKHNwYW5QKTtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdG9kb0Rpdi5hcHBlbmQocCk7XHJcbiAgICBsZXQgc3BhbkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0b2RvRGl2LmFwcGVuZChzcGFuRGF0ZSk7XHJcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0b2RvRGl2LmFwcGVuZChkZWxldGVCdXR0b24pO1xyXG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XHJcbiAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gcHJvamVjdFRpdGxlO1xyXG5cclxuXHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgcmVtb3ZlVGFzayhkZWxldGVCdXR0b24sIHByb2plY3RBcnIsIGkpXHJcbiAgICAgICAgYnV0dG9uVGFza0FkZChkZWxldGVCdXR0b24pXHJcblxyXG4gICAgICAgIG1vdXNlT3ZlcihkZWxldGVCdXR0b24pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoaykge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGg0LnRleHRDb250ZW50ID0gcHJvamVjdEFycltpXS50aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzcGFuUC5pbm5lckhUTUwgPSBwcm9qZWN0QXJyW2ldLnByaW9yaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW5EYXRlLnRleHRDb250ZW50ID0gcHJvamVjdEFycltpXS5kdWVEYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBEaXNwbGF5IEZ1bmN0aW9uIGZvciB0aGUgbWFpbiBoMyBldmVudGxpc3RuZXJcclxuXHJcbmZ1bmN0aW9uIHRhc2tEaXNwbGF5RGl2KGkpIHtcclxuXHJcblxyXG4gICAgbGV0IHByb2plY3RBcnIgPSBwcm9qZWN0LmFsbFByb2plY3RzW2ldLnRvZG9cclxuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LmFsbFByb2plY3RzW2ldLnRpdGxlXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyKVxyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSsrKSB7XHJcblxyXG5cclxuICAgICAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICAgICAgY29udGVudERpdi5hcHBlbmQodG9kb0Rpdik7XHJcbiAgICAgICAgbGV0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZChoNClcclxuICAgICAgICBsZXQgc3BhblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmQoc3BhblApXHJcbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmQocClcclxuICAgICAgICBsZXQgc3BhbkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmQoc3BhbkRhdGUpXHJcbiAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmQoZGVsZXRlQnV0dG9uKVxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBwcm9qZWN0VGl0bGU7XHJcblxyXG5cclxuXHJcbiAgICAgICAgcmVtb3ZlVGFzayhkZWxldGVCdXR0b24sIHByb2plY3RBcnIsIGkpO1xyXG4gICAgICAgIGJ1dHRvblRhc2tBZGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgbW91c2VPdmVyKGRlbGV0ZUJ1dHRvbik7XHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoaykge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGg0LnRleHRDb250ZW50ID0gcHJvamVjdEFycltpXS50aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzcGFuUC5pbm5lckhUTUwgPSBwcm9qZWN0QXJyW2ldLnByaW9yaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW5EYXRlLnRleHRDb250ZW50ID0gcHJvamVjdEFycltpXS5kdWVEYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1vdXNlT3ZlcihidXR0b24sKSB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZGVsZXRlJyk7XHJcblxyXG4gICAgfSk7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdkZWxldGUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBidXR0b247XHJcbn07XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhc2soYnV0dG9uLCBhcnIsIGkpIHtcclxuXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJydcclxuXHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKSB7XHJcblxyXG4gICAgICAgICAgICBhcnIuc3BsaWNlKGksIDEpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59O1xyXG5cclxuZnVuY3Rpb24gYnV0dG9uVGFza0FkZChidXR0b24pIHtcclxuXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgcHJvamVjdEFyciA9IHByb2plY3QuYWxsUHJvamVjdHNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRpdGxlID0gcHJvamVjdEFycltpXS50aXRsZVxyXG5cclxuICAgICAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnModGl0bGUpKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRhc2tEaXNwbGF5RGl2KGkpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgcHJvamVjdEZvcm1NYWtlciB9XHJcblxyXG5cclxuXHJcblxyXG4iLCJjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy50b2RvID0gW107XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgUHJvamVjdHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld1Byb2plY3QodGl0bGUpIHtcclxuICAgICAgICBsZXQgcCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocCk7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFsbFByb2plY3RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBudW1iZXJPZlByb2plY3RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmxlbmd0aDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3RzKCk7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVG9kbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==