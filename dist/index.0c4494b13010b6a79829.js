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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb3BhZ2UvLi9zcmMvZG9tZnVuYy5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9kb21zdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9wYWdlLy4vc3JjL3Byb2plY3RDbGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCaUQ7O0FBRWxEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWdCOztBQUV4QixLQUFLOzs7OztBQUtMOzs7QUFHcUI7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNrQjs7O0FBR3ZDLHFEQUFVOztBQUVWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNZOzs7QUFHOUM7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsOERBQW1COztBQUU1Qyx1QkFBdUIsdUJBQXVCO0FBQzlDOzs7O0FBSUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsS0FBSzs7O0FBR0w7QUFDQSxJQUFJLDZEQUFrQjs7O0FBR3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDOzs7QUFHRDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxxQkFBcUIsOERBQW1COzs7QUFHeEMsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBOzs7QUFHQSxZQUFZLDhEQUFtQixrQkFBa0IsK0NBQUk7O0FBRXJEO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7OztBQUdBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBOztBQUVBOzs7QUFHQSxxQkFBcUIsOERBQW1CO0FBQ3hDLHVCQUF1Qiw4REFBbUI7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGVBQWUsdUJBQXVCOztBQUV0QztBQUNBOztBQUVBOzs7OztBQUtBLHVCQUF1QixPQUFPOzs7QUFHOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7QUFNQTs7QUFFQTs7O0FBR0EscUJBQXFCLDhEQUFtQjtBQUN4Qyx1QkFBdUIsOERBQW1CO0FBQzFDOztBQUVBLGVBQWUsdUJBQXVCOzs7QUFHdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTs7O0FBR0EsdUJBQXVCLE9BQU87OztBQUc5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQSx5QkFBeUIsOERBQW1CO0FBQzVDLHVCQUF1Qix1QkFBdUI7QUFDOUM7O0FBRUE7OztBQUdBOztBQUVBOzs7QUFHQTtBQUNBLEtBQUs7QUFDTDs7Ozs7OztBQU8yQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFozQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7QUFLQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJmaWxlIjoiaW5kZXguMGM0NDk0YjEzMDEwYjZhNzk4MjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBkb21GdW4gPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9uTWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGl2TWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICAgICAgcmV0dXJuIGRpdlxyXG4gICAgfTtcclxuICAgIGNvbnN0IGgyTWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgaDIudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGgyLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiBoMlxyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaDJNYWtlcixcclxuICAgICAgICBkaXZNYWtlcixcclxuICAgICAgICBidXR0b25NYWtlcixcclxuICAgIH1cclxuXHJcblxyXG59KSgpO1xyXG5leHBvcnQgeyBkb21GdW4gfSIsImltcG9ydCB7IGxvYWQsIHByb2plY3RGb3JtTWFrZXIgfSBmcm9tICcuL3Byb2plY3QnXHJcblxyXG5jb25zdCBidG5Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RCdG4nKTtcclxuY29uc3QgcG9wdXBQcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwUHJvamVjdCcpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgICBidG5Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwUHJvamVjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgcHJvamVjdEZvcm1NYWtlcigpXHJcblxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBhZGRQcm9qZWN0IH1cclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tICcuL2RvbXN0dWZmJ1xyXG5cclxuXHJcbmFkZFByb2plY3QoKVxyXG5cclxuLy8gY29uc29sZS5sb2coJ2hlbGxvJylcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBkb21GdW4gfSBmcm9tICcuL2RvbWZ1bmMnXHJcbmltcG9ydCB7IFRvZG8sIHByb2plY3QgfSBmcm9tICcuL3Byb2plY3RDbGFzcydcclxuXHJcblxyXG4vLyBEb20gU2VsZWN0aW9uc1xyXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyJyk7XHJcblxyXG5jb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZXMnKTtcclxuXHJcbmNvbnN0IHBvcHVwUHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cFByb2plY3QnKTtcclxuXHJcbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcblxyXG5jb25zdCBwb3B1cERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cFRhc2snKTtcclxuXHJcbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9mb3JtJyk7XHJcblxyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZScpO1xyXG5cclxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY2xvc2VQb3B1cHMoKVxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbi8vIENsb3NlIFBvcCBVcHMgRnVuY3Rpb25cclxuZnVuY3Rpb24gY2xvc2VQb3B1cHMoKSB7XHJcbiAgICBwb3B1cERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgcG9wdXBQcm9qZWN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8gRnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgZnJvbVxyXG5mdW5jdGlvbiBwcm9qZWN0Rm9ybU1ha2VyKCkge1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJ3N1Ym1pdCcpO1xyXG5cclxuXHJcbiAgICAvLyBFdmVudCBsaXN0bmVyXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBmb3JtQWN0aW9uKHRleHQudmFsdWUpO1xyXG4gICAgICAgIGZvcm0ucmVtb3ZlKCk7XHJcbiAgICAgICAgY2xvc2VQb3B1cHMoKVxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKCduYW1lJywgJ1RpdGxlJyk7XHJcblxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xyXG5cclxuICAgIHBvcHVwUHJvamVjdERpdi5hcHBlbmQoZm9ybSk7XHJcbiAgICBmb3JtLmFwcGVuZCh0ZXh0KTtcclxuICAgIGZvcm0uYXBwZW5kKHN1Ym1pdCk7XHJcblxyXG59XHJcblxyXG5cclxuLy8gRm9ybSBBY3Rpb24gZnVuY3Rpb24gXHJcbmZ1bmN0aW9uIGZvcm1BY3Rpb24odGV4dCkge1xyXG5cclxuXHJcbiAgICBsZXQgYnV0dG9uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEJ1dHRvbicpO1xyXG4gICAgYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcblxyXG4gICAgICAgIHBvcHVwRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIE1haW4gaDMgaG9sZHMgdGhlIHByb2plY3QgdGl0bGVcclxuXHJcbiAgICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaDMudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgcHJvamVjdERpdi5hcHBlbmQoaDMpO1xyXG5cclxuXHJcbiAgICAvLyBoMyBldmVudCBsaXN0bmVyIFxyXG5cclxuICAgIGgzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgYnV0dG9uQWRkLnNldEF0dHJpYnV0ZSgnZGF0YS1udW1iZXInLCBlLnRhcmdldC5kYXRhc2V0Lm51bWJlcik7XHJcblxyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgICAgIC8vIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIFRhcmdldCB0aGUgIGgzIHNpYmxpbmdzXHJcbiAgICAgICAgbGV0IHNpYmxpbmdzID0gZ2V0U2libGluZ3MoZS5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBsZXQgc2libGluZ1RleHQgPSBzaWJsaW5ncy5tYXAoZSA9PiBlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuXHJcbiAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIGxldCBwcm9qZWN0QXJyID0gcHJvamVjdC5hbGxQcm9qZWN0c1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRpdGxlID0gcHJvamVjdEFycltpXS50aXRsZVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IHRpdGxlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEaXNwbGF5RGl2KGksKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2RvRm9ybS5jbGFzc05hbWUgPSB0aXRsZVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgLy8gQWRkcyB0aGUgUHJvamVjdCB0byB0aGUgUHJvamVjdCBDbGFzcyBDb250YWluZXJcclxuICAgIHByb2plY3QubmV3UHJvamVjdCh0ZXh0KVxyXG5cclxuXHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGdldCBzaWJsaW5ncyBvZiBhbiBlbGVtZW50XHJcbmxldCBnZXRTaWJsaW5ncyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyBmb3IgY29sbGVjdGluZyBzaWJsaW5nc1xyXG4gICAgbGV0IHNpYmxpbmdzID0gW107XHJcbiAgICAvLyBpZiBubyBwYXJlbnQsIHJldHVybiBubyBzaWJsaW5nXHJcbiAgICBpZiAoIWUucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIHJldHVybiBzaWJsaW5ncztcclxuICAgIH1cclxuICAgIC8vIGZpcnN0IGNoaWxkIG9mIHRoZSBwYXJlbnQgbm9kZVxyXG4gICAgbGV0IHNpYmxpbmcgPSBlLnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcclxuXHJcbiAgICAvLyBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICB3aGlsZSAoc2libGluZykge1xyXG4gICAgICAgIGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGUpIHtcclxuICAgICAgICAgICAgc2libGluZ3MucHVzaChzaWJsaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaWJsaW5ncztcclxufTtcclxuXHJcblxyXG4vLyBUb2RvRm9ybSBFdmVudGxpc250ZXJcclxudG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRhc2tGb3JtQWN0aW9uKCk7XHJcbiAgICBjbG9zZVBvcHVwcygpO1xyXG5cclxuXHJcbn0pXHJcblxyXG5cclxuLy8gVG9kb0Zvcm0gSW5wdXRzIEZ1bmN0aW9uIGFuZCBuZXcgVG9kbyBDcmVhdGlvblxyXG5mdW5jdGlvbiB0YXNrRm9ybUFjdGlvbigpIHtcclxuXHJcblxyXG4gICAgbGV0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRCdXR0b24nKTtcclxuICAgIGJ1dHRvbkFkZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtYmVyJywgMClcclxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGVJbnB1dCcpO1xyXG4gICAgY29uc3Qgc2VsZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcclxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XHJcbiAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcclxuXHJcblxyXG5cclxuICAgIGxldCBwcm9qZWN0QXJyID0gcHJvamVjdC5hbGxQcm9qZWN0c1xyXG5cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgdGl0bGUgPSBwcm9qZWN0QXJyW2ldLnRpdGxlXHJcbiAgICAgICAgaWYgKHRvZG9Gb3JtLmNsYXNzTGlzdC5jb250YWlucyh0aXRsZSkpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0LmFsbFByb2plY3RzW2ldLnRvZG8ucHVzaChuZXcgVG9kbyh0aXRsZUlucHV0LnZhbHVlLCBzZWxlY3RJbnB1dC52YWx1ZSwgdGV4dElucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgIHRhc2tEaXNwbGF5Rm9ybShpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHRhc2tEaXNwbGF5Rm9ybSh0b2RvRm9ybSk7XHJcbiAgICB0YXNrRm9ybVJlc2V0KHRpdGxlSW5wdXQsIHNlbGVjdElucHV0LCBkYXRlSW5wdXQsIHRleHRJbnB1dClcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyBSZXNldCBGb3JtIEZ1bmN0aW9uXHJcbmZ1bmN0aW9uIHRhc2tGb3JtUmVzZXQodGl0bGUsIHNlbGVjdCwgZGF0ZSwgdGV4dCkge1xyXG4gICAgdGl0bGUudmFsdWUgPSAnJ1xyXG4gICAgc2VsZWN0LnZhbHVlID0gJydcclxuICAgIGRhdGUudmFsdWUgPSAnJ1xyXG4gICAgdGV4dC52YWx1ZSA9ICcnXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIERpc3BsYXkgRnVuY3Rpb24gZm9yIHRoZSBUb2RvIEZvcm0gb24gU3VibWl0XHJcblxyXG5mdW5jdGlvbiB0YXNrRGlzcGxheUZvcm0oaSkge1xyXG5cclxuXHJcbiAgICBsZXQgcHJvamVjdEFyciA9IHByb2plY3QuYWxsUHJvamVjdHNbaV0udG9kbztcclxuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LmFsbFByb2plY3RzW2ldLnRpdGxlO1xyXG5cclxuICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgY29udGVudERpdi5hcHBlbmQodG9kb0Rpdik7XHJcbiAgICBsZXQgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgdG9kb0Rpdi5hcHBlbmQoaDQpO1xyXG4gICAgbGV0IHNwYW5QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdG9kb0Rpdi5hcHBlbmQoc3BhblApO1xyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2RvRGl2LmFwcGVuZChwKTtcclxuICAgIGxldCBzcGFuRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRvZG9EaXYuYXBwZW5kKHNwYW5EYXRlKTtcclxuICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRvZG9EaXYuYXBwZW5kKGRlbGV0ZUJ1dHRvbik7XHJcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcclxuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBwcm9qZWN0VGl0bGU7XHJcblxyXG5cclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICByZW1vdmVUYXNrKGRlbGV0ZUJ1dHRvbiwgcHJvamVjdEFyciwgaSlcclxuICAgICAgICBidXR0b25UYXNrQWRkKGRlbGV0ZUJ1dHRvbilcclxuXHJcbiAgICAgICAgbW91c2VPdmVyKGRlbGV0ZUJ1dHRvbik7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChrKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaDQudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW5QLmlubmVySFRNTCA9IHByb2plY3RBcnJbaV0ucHJpb3JpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbkRhdGUudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLmR1ZURhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIERpc3BsYXkgRnVuY3Rpb24gZm9yIHRoZSBtYWluIGgzIGV2ZW50bGlzdG5lclxyXG5cclxuZnVuY3Rpb24gdGFza0Rpc3BsYXlEaXYoaSkge1xyXG5cclxuXHJcbiAgICBsZXQgcHJvamVjdEFyciA9IHByb2plY3QuYWxsUHJvamVjdHNbaV0udG9kb1xyXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IHByb2plY3QuYWxsUHJvamVjdHNbaV0udGl0bGVcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnIpXHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgICAgICBjb250ZW50RGl2LmFwcGVuZCh0b2RvRGl2KTtcclxuICAgICAgICBsZXQgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kKGg0KVxyXG4gICAgICAgIGxldCBzcGFuUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZChzcGFuUClcclxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZChwKVxyXG4gICAgICAgIGxldCBzcGFuRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZChzcGFuRGF0ZSlcclxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZChkZWxldGVCdXR0b24pXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IHByb2plY3RUaXRsZTtcclxuXHJcblxyXG5cclxuICAgICAgICByZW1vdmVUYXNrKGRlbGV0ZUJ1dHRvbiwgcHJvamVjdEFyciwgaSk7XHJcbiAgICAgICAgYnV0dG9uVGFza0FkZChkZWxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICBtb3VzZU92ZXIoZGVsZXRlQnV0dG9uKTtcclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChrKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaDQudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW5QLmlubmVySFRNTCA9IHByb2plY3RBcnJbaV0ucHJpb3JpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbkRhdGUudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLmR1ZURhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbW91c2VPdmVyKGJ1dHRvbiwpIHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdkZWxldGUnKTtcclxuXHJcbiAgICB9KTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2RlbGV0ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxufTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVGFzayhidXR0b24sIGFyciwgaSkge1xyXG5cclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJ1xyXG5cclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykpIHtcclxuXHJcbiAgICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn07XHJcblxyXG5mdW5jdGlvbiBidXR0b25UYXNrQWRkKGJ1dHRvbikge1xyXG5cclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0QXJyID0gcHJvamVjdC5hbGxQcm9qZWN0c1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBwcm9qZWN0QXJyW2ldLnRpdGxlXHJcblxyXG4gICAgICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyh0aXRsZSkpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdGFza0Rpc3BsYXlEaXYoaSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBwcm9qZWN0Rm9ybU1ha2VyIH1cclxuXHJcblxyXG5cclxuXHJcbiIsImNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnRvZG8gPSBbXTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbmV3UHJvamVjdCh0aXRsZSkge1xyXG4gICAgICAgIGxldCBwID0gbmV3IFByb2plY3QodGl0bGUpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwKTtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsUHJvamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG51bWJlck9mUHJvamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdHMoKTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9