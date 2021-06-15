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
    form.classList.add('projectForm')


    // Event listner
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        formAction(text.value);
        form.remove();
        closePopups()


    });

    const text = document.createElement('input');
    text.setAttribute('type', 'text',);
    text.setAttribute('name', 'Title');
    text.setAttribute('placeholder', 'Title');
    text.setAttribute('maxlength', '13')


    const submit = document.createElement('input');
    submit.textContent = 'Add';
    submit.setAttribute('type', 'submit');
    submit.setAttribute("value", "Submit");

    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => {
        form.remove();
        closePopups();
    })


    popupProjectDiv.append(form);
    form.append(text);
    form.append(submit);
    form.append(cancelBtn);

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
    let spanDelete = document.createElement('span');
    spanDelete.textContent = 'X'
    h3.append(spanDelete)


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
    p.classList.add('cardSpan')
    todoDiv.append(p);
    let spanDate = document.createElement('span');
    todoDiv.append(spanDate);
    let deleteButton = document.createElement('button');
    todoDiv.append(deleteButton);
    deleteButton.textContent = 'X';
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
        p.classList.add('cardSpan')
        todoDiv.append(p)
        let spanDate = document.createElement('span');
        todoDiv.append(spanDate)
        let deleteButton = document.createElement('button')
        todoDiv.append(deleteButton)
        deleteButton.textContent = 'X';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb3BhZ2UvLi9zcmMvZG9tZnVuYy5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9kb21zdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9wYWdlLy4vc3JjL3Byb2plY3RDbGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCaUQ7O0FBRWxEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWdCOztBQUV4QixLQUFLOzs7OztBQUtMOzs7QUFHcUI7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTs7QUFFa0I7OztBQUd2QyxxREFBVTs7QUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQa0M7QUFDWTs7O0FBRzlDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsOERBQW1COztBQUU1Qyx1QkFBdUIsdUJBQXVCO0FBQzlDOzs7O0FBSUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsS0FBSzs7O0FBR0w7QUFDQSxJQUFJLDZEQUFrQjs7O0FBR3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDOzs7QUFHRDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHFCQUFxQiw4REFBbUI7OztBQUd4QyxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7OztBQUdBLFlBQVksOERBQW1CLGtCQUFrQiwrQ0FBSTs7QUFFckQ7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQTs7O0FBR0EscUJBQXFCLDhEQUFtQjtBQUN4Qyx1QkFBdUIsOERBQW1COztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGVBQWUsdUJBQXVCOztBQUV0QztBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLE9BQU87OztBQUc5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7OztBQU1BOztBQUVBOzs7QUFHQSxxQkFBcUIsOERBQW1CO0FBQ3hDLHVCQUF1Qiw4REFBbUI7QUFDMUM7O0FBRUEsZUFBZSx1QkFBdUI7OztBQUd0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7OztBQUdBLHVCQUF1QixPQUFPOzs7QUFHOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUEseUJBQXlCLDhEQUFtQjtBQUM1Qyx1QkFBdUIsdUJBQXVCO0FBQzlDOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7QUFPMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3haM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87Ozs7O0FBS0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6ImluZGV4LjhkYzVkOWExZDMzMDk4NmFkMjViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgZG9tRnVuID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbk1ha2VyID0gKHRleHQgPSAnJywgc3R5bGUpID0+IHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvblxyXG4gICAgfTtcclxuICAgIGNvbnN0IGRpdk1ha2VyID0gKHRleHQgPSAnJywgc3R5bGUpID0+IHtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiBkaXZcclxuICAgIH07XHJcbiAgICBjb25zdCBoMk1ha2VyID0gKHRleHQgPSAnJywgc3R5bGUpID0+IHtcclxuICAgICAgICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGgyLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICBoMi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgICAgICByZXR1cm4gaDJcclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGgyTWFrZXIsXHJcbiAgICAgICAgZGl2TWFrZXIsXHJcbiAgICAgICAgYnV0dG9uTWFrZXIsXHJcbiAgICB9XHJcblxyXG5cclxufSkoKTtcclxuZXhwb3J0IHsgZG9tRnVuIH0iLCJpbXBvcnQgeyBsb2FkLCBwcm9qZWN0Rm9ybU1ha2VyIH0gZnJvbSAnLi9wcm9qZWN0J1xyXG5cclxuY29uc3QgYnRuUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0QnRuJyk7XHJcbmNvbnN0IHBvcHVwUHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cFByb2plY3QnKTtcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xyXG4gICAgYnRuUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBwb3B1cFByb2plY3REaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIHByb2plY3RGb3JtTWFrZXIoKVxyXG5cclxuICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgYWRkUHJvamVjdCB9XHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuaW1wb3J0IHsgYWRkUHJvamVjdCB9IGZyb20gJy4vZG9tc3R1ZmYnXHJcblxyXG5cclxuYWRkUHJvamVjdCgpXHJcblxyXG4vLyBjb25zb2xlLmxvZygnaGVsbG8nKVxyXG5cclxuXHJcbiIsImltcG9ydCB7IGRvbUZ1biB9IGZyb20gJy4vZG9tZnVuYydcclxuaW1wb3J0IHsgVG9kbywgcHJvamVjdCB9IGZyb20gJy4vcHJvamVjdENsYXNzJ1xyXG5cclxuXHJcbi8vIERvbSBTZWxlY3Rpb25zXHJcbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG5jb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXInKTtcclxuXHJcbmNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlcycpO1xyXG5cclxuY29uc3QgcG9wdXBQcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwUHJvamVjdCcpO1xyXG5cclxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuXHJcbmNvbnN0IHBvcHVwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwVGFzaycpO1xyXG5cclxuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb2Zvcm0nKTtcclxuXHJcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlJyk7XHJcblxyXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjbG9zZVBvcHVwcygpXHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuLy8gQ2xvc2UgUG9wIFVwcyBGdW5jdGlvblxyXG5mdW5jdGlvbiBjbG9zZVBvcHVwcygpIHtcclxuICAgIHBvcHVwRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBwb3B1cFByb2plY3REaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLyBGdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBmcm9tXHJcbmZ1bmN0aW9uIHByb2plY3RGb3JtTWFrZXIoKSB7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnc3VibWl0Jyk7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGb3JtJylcclxuXHJcblxyXG4gICAgLy8gRXZlbnQgbGlzdG5lclxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgZm9ybUFjdGlvbih0ZXh0LnZhbHVlKTtcclxuICAgICAgICBmb3JtLnJlbW92ZSgpO1xyXG4gICAgICAgIGNsb3NlUG9wdXBzKClcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JywpO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnVGl0bGUnKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcxMycpXHJcblxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnQWRkJztcclxuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XHJcblxyXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZm9ybS5yZW1vdmUoKTtcclxuICAgICAgICBjbG9zZVBvcHVwcygpO1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgcG9wdXBQcm9qZWN0RGl2LmFwcGVuZChmb3JtKTtcclxuICAgIGZvcm0uYXBwZW5kKHRleHQpO1xyXG4gICAgZm9ybS5hcHBlbmQoc3VibWl0KTtcclxuICAgIGZvcm0uYXBwZW5kKGNhbmNlbEJ0bik7XHJcblxyXG59XHJcblxyXG5cclxuLy8gRm9ybSBBY3Rpb24gZnVuY3Rpb24gXHJcbmZ1bmN0aW9uIGZvcm1BY3Rpb24odGV4dCkge1xyXG5cclxuXHJcbiAgICBsZXQgYnV0dG9uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEJ1dHRvbicpO1xyXG4gICAgYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBwb3B1cERpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBNYWluIGgzIGhvbGRzIHRoZSBwcm9qZWN0IHRpdGxlXHJcblxyXG4gICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGgzLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHByb2plY3REaXYuYXBwZW5kKGgzKTtcclxuICAgIGxldCBzcGFuRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgc3BhbkRlbGV0ZS50ZXh0Q29udGVudCA9ICdYJ1xyXG4gICAgaDMuYXBwZW5kKHNwYW5EZWxldGUpXHJcblxyXG5cclxuICAgIC8vIGgzIGV2ZW50IGxpc3RuZXIgXHJcblxyXG4gICAgaDMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICBidXR0b25BZGQuc2V0QXR0cmlidXRlKCdkYXRhLW51bWJlcicsIGUudGFyZ2V0LmRhdGFzZXQubnVtYmVyKTtcclxuXHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICAgICAgLy8gaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcblxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gVGFyZ2V0IHRoZSAgaDMgc2libGluZ3NcclxuICAgICAgICBsZXQgc2libGluZ3MgPSBnZXRTaWJsaW5ncyhlLmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCBzaWJsaW5nVGV4dCA9IHNpYmxpbmdzLm1hcChlID0+IGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG5cclxuICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgbGV0IHByb2plY3RBcnIgPSBwcm9qZWN0LmFsbFByb2plY3RzXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBwcm9qZWN0QXJyW2ldLnRpdGxlXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gdGl0bGUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0Rpc3BsYXlEaXYoaSwpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9Gb3JtLmNsYXNzTmFtZSA9IHRpdGxlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICAvLyBBZGRzIHRoZSBQcm9qZWN0IHRvIHRoZSBQcm9qZWN0IENsYXNzIENvbnRhaW5lclxyXG4gICAgcHJvamVjdC5uZXdQcm9qZWN0KHRleHQpXHJcblxyXG5cclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdG8gZ2V0IHNpYmxpbmdzIG9mIGFuIGVsZW1lbnRcclxubGV0IGdldFNpYmxpbmdzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vIGZvciBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICBsZXQgc2libGluZ3MgPSBbXTtcclxuICAgIC8vIGlmIG5vIHBhcmVudCwgcmV0dXJuIG5vIHNpYmxpbmdcclxuICAgIGlmICghZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xyXG4gICAgfVxyXG4gICAgLy8gZmlyc3QgY2hpbGQgb2YgdGhlIHBhcmVudCBub2RlXHJcbiAgICBsZXQgc2libGluZyA9IGUucGFyZW50Tm9kZS5maXJzdENoaWxkO1xyXG5cclxuICAgIC8vIGNvbGxlY3Rpbmcgc2libGluZ3NcclxuICAgIHdoaWxlIChzaWJsaW5nKSB7XHJcbiAgICAgICAgaWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZSkge1xyXG4gICAgICAgICAgICBzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNpYmxpbmdzO1xyXG59O1xyXG5cclxuXHJcbi8vIFRvZG9Gb3JtIEV2ZW50bGlzbnRlclxyXG50b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGFza0Zvcm1BY3Rpb24oKTtcclxuICAgIGNsb3NlUG9wdXBzKCk7XHJcblxyXG5cclxufSlcclxuXHJcblxyXG4vLyBUb2RvRm9ybSBJbnB1dHMgRnVuY3Rpb24gYW5kIG5ldyBUb2RvIENyZWF0aW9uXHJcbmZ1bmN0aW9uIHRhc2tGb3JtQWN0aW9uKCkge1xyXG5cclxuXHJcbiAgICBsZXQgYnV0dG9uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEJ1dHRvbicpO1xyXG4gICAgYnV0dG9uQWRkLnNldEF0dHJpYnV0ZSgnZGF0YS1udW1iZXInLCAwKVxyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZUlucHV0Jyk7XHJcbiAgICBjb25zdCBzZWxlY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xyXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcclxuICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xyXG5cclxuXHJcbiAgICBsZXQgcHJvamVjdEFyciA9IHByb2plY3QuYWxsUHJvamVjdHNcclxuXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gcHJvamVjdEFycltpXS50aXRsZVxyXG4gICAgICAgIGlmICh0b2RvRm9ybS5jbGFzc0xpc3QuY29udGFpbnModGl0bGUpKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgcHJvamVjdC5hbGxQcm9qZWN0c1tpXS50b2RvLnB1c2gobmV3IFRvZG8odGl0bGVJbnB1dC52YWx1ZSwgc2VsZWN0SW5wdXQudmFsdWUsIHRleHRJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlKSk7XHJcblxyXG4gICAgICAgICAgICB0YXNrRGlzcGxheUZvcm0oaSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyB0YXNrRGlzcGxheUZvcm0odG9kb0Zvcm0pO1xyXG4gICAgdGFza0Zvcm1SZXNldCh0aXRsZUlucHV0LCBzZWxlY3RJbnB1dCwgZGF0ZUlucHV0LCB0ZXh0SW5wdXQpXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXNldCBGb3JtIEZ1bmN0aW9uXHJcbmZ1bmN0aW9uIHRhc2tGb3JtUmVzZXQodGl0bGUsIHNlbGVjdCwgZGF0ZSwgdGV4dCkge1xyXG4gICAgdGl0bGUudmFsdWUgPSAnJ1xyXG4gICAgc2VsZWN0LnZhbHVlID0gJydcclxuICAgIGRhdGUudmFsdWUgPSAnJ1xyXG4gICAgdGV4dC52YWx1ZSA9ICcnXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIERpc3BsYXkgRnVuY3Rpb24gZm9yIHRoZSBUb2RvIEZvcm0gb24gU3VibWl0XHJcblxyXG5mdW5jdGlvbiB0YXNrRGlzcGxheUZvcm0oaSkge1xyXG5cclxuXHJcbiAgICBsZXQgcHJvamVjdEFyciA9IHByb2plY3QuYWxsUHJvamVjdHNbaV0udG9kbztcclxuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LmFsbFByb2plY3RzW2ldLnRpdGxlO1xyXG5cclxuICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgY29udGVudERpdi5hcHBlbmQodG9kb0Rpdik7XHJcbiAgICBsZXQgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgdG9kb0Rpdi5hcHBlbmQoaDQpO1xyXG4gICAgbGV0IHNwYW5QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdG9kb0Rpdi5hcHBlbmQoc3BhblApO1xyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ2NhcmRTcGFuJylcclxuICAgIHRvZG9EaXYuYXBwZW5kKHApO1xyXG4gICAgbGV0IHNwYW5EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdG9kb0Rpdi5hcHBlbmQoc3BhbkRhdGUpO1xyXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdG9kb0Rpdi5hcHBlbmQoZGVsZXRlQnV0dG9uKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcclxuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBwcm9qZWN0VGl0bGU7XHJcblxyXG5cclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICByZW1vdmVUYXNrKGRlbGV0ZUJ1dHRvbiwgcHJvamVjdEFyciwgaSlcclxuICAgICAgICBidXR0b25UYXNrQWRkKGRlbGV0ZUJ1dHRvbilcclxuICAgICAgICBtb3VzZU92ZXIoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcclxuXHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGspIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBoNC50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0udGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhblAuaW5uZXJIVE1MID0gcHJvamVjdEFycltpXS5wcmlvcml0eTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBwLnRleHRDb250ZW50ID0gcHJvamVjdEFycltpXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBzcGFuRGF0ZS50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0uZHVlRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gRGlzcGxheSBGdW5jdGlvbiBmb3IgdGhlIG1haW4gaDMgZXZlbnRsaXN0bmVyXHJcblxyXG5mdW5jdGlvbiB0YXNrRGlzcGxheURpdihpKSB7XHJcblxyXG5cclxuICAgIGxldCBwcm9qZWN0QXJyID0gcHJvamVjdC5hbGxQcm9qZWN0c1tpXS50b2RvXHJcbiAgICBsZXQgcHJvamVjdFRpdGxlID0gcHJvamVjdC5hbGxQcm9qZWN0c1tpXS50aXRsZVxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdEFycilcclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kKHRvZG9EaXYpO1xyXG4gICAgICAgIGxldCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmQoaDQpXHJcbiAgICAgICAgbGV0IHNwYW5QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kKHNwYW5QKVxyXG4gICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHAuY2xhc3NMaXN0LmFkZCgnY2FyZFNwYW4nKVxyXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kKHApXHJcbiAgICAgICAgbGV0IHNwYW5EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kKHNwYW5EYXRlKVxyXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kKGRlbGV0ZUJ1dHRvbilcclxuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IHByb2plY3RUaXRsZTtcclxuXHJcblxyXG5cclxuICAgICAgICByZW1vdmVUYXNrKGRlbGV0ZUJ1dHRvbiwgcHJvamVjdEFyciwgaSk7XHJcbiAgICAgICAgYnV0dG9uVGFza0FkZChkZWxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICBtb3VzZU92ZXIoZGVsZXRlQnV0dG9uKTtcclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChrKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaDQudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW5QLmlubmVySFRNTCA9IHByb2plY3RBcnJbaV0ucHJpb3JpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbkRhdGUudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLmR1ZURhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbW91c2VPdmVyKGJ1dHRvbiwpIHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdkZWxldGUnKTtcclxuXHJcbiAgICB9KTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2RlbGV0ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxufTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVGFzayhidXR0b24sIGFyciwgaSkge1xyXG5cclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJ1xyXG5cclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykpIHtcclxuXHJcbiAgICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn07XHJcblxyXG5mdW5jdGlvbiBidXR0b25UYXNrQWRkKGJ1dHRvbikge1xyXG5cclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0QXJyID0gcHJvamVjdC5hbGxQcm9qZWN0c1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBwcm9qZWN0QXJyW2ldLnRpdGxlXHJcblxyXG4gICAgICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyh0aXRsZSkpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdGFza0Rpc3BsYXlEaXYoaSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBwcm9qZWN0Rm9ybU1ha2VyIH1cclxuXHJcblxyXG5cclxuXHJcbiIsImNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnRvZG8gPSBbXTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbmV3UHJvamVjdCh0aXRsZSkge1xyXG4gICAgICAgIGxldCBwID0gbmV3IFByb2plY3QodGl0bGUpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwKTtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsUHJvamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG51bWJlck9mUHJvamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdHMoKTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9