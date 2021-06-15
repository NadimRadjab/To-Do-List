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

    let h2Title = document.querySelector('#displayTitle')
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
    removeProject(spanDelete, h2Title)


    // h3 event listner 

    h3.addEventListener('click', (e) => {

        spanDelete.className = e.target.textContent

        e.currentTarget.classList.toggle('active')

        // Target the  h3 siblings
        let siblings = getSiblings(e.currentTarget);
        let siblingText = siblings.map(e => e.classList.remove('active'));

        contentDiv.innerHTML = ''
        let projectArr = _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects

        for (let i = 0; i < projectArr.length; i++) {
            let title = projectArr[i].title



            if (e.target.textContent === title + 'X') {

                h2Title.textContent = title
                if (e.target.classList.contains('active')) {
                    todoForm.className = title
                    taskDisplayDiv(i,)


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


function removeProject(span, h2) {
    let projectArr = _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects
    span.addEventListener('click', (e) => {
        h2.textContent = ''
        for (let i = 0; i < projectArr.length; i++) {
            let title = projectArr[i].title
            if (e.target.classList.contains(title + "X")) {

                e.target.parentNode.remove()
                console.log(projectArr)
                projectArr.splice(i, 1)
            }

        }


    });
}



function removeTask(button, arr, i) {

    button.addEventListener('click', (e) => {
        contentDiv.innerHTML = ''

        if (e.currentTarget.classList.contains('delete')) {

            arr.splice(i, 1);




        }
    })
};

function buttonTaskAdd(button,) {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb3BhZ2UvLi9zcmMvZG9tZnVuYy5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9kb21zdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9wYWdlLy4vc3JjL3Byb2plY3RDbGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCaUQ7O0FBRWxEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWdCOztBQUV4QixLQUFLOzs7OztBQUtMOzs7QUFHcUI7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTs7QUFFa0I7OztBQUd2QyxxREFBVTs7QUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQa0M7QUFDWTs7O0FBRzlDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLDhEQUFtQjs7QUFFNUMsdUJBQXVCLHVCQUF1QjtBQUM5Qzs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTs7QUFFQSxLQUFLOzs7QUFHTDtBQUNBLElBQUksNkRBQWtCOzs7QUFHdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLENBQUM7OztBQUdEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EscUJBQXFCLDhEQUFtQjs7O0FBR3hDLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTs7O0FBR0EsWUFBWSw4REFBbUIsa0JBQWtCLCtDQUFJOztBQUVyRDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOzs7QUFHQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBOzs7QUFHQSxxQkFBcUIsOERBQW1CO0FBQ3hDLHVCQUF1Qiw4REFBbUI7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsZUFBZSx1QkFBdUI7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsT0FBTzs7O0FBRzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7O0FBTUE7O0FBRUE7OztBQUdBLHFCQUFxQiw4REFBbUI7QUFDeEMsdUJBQXVCLDhEQUFtQjs7O0FBRzFDLGVBQWUsdUJBQXVCOzs7QUFHdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBOzs7QUFHQSx1QkFBdUIsT0FBTzs7O0FBRzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7OztBQUdBO0FBQ0EscUJBQXFCLDhEQUFtQjtBQUN4QztBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxLQUFLO0FBQ0w7Ozs7QUFJQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7OztBQUtBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBOzs7QUFHQSx5QkFBeUIsOERBQW1CO0FBQzVDLHVCQUF1Qix1QkFBdUI7QUFDOUM7O0FBRUE7OztBQUdBOztBQUVBOzs7QUFHQTtBQUNBLEtBQUs7QUFDTDs7Ozs7OztBQU8yQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM2EzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7QUFLQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJmaWxlIjoiaW5kZXguNGYyMTYzMDg4M2E0ZTVjOGVjODcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBkb21GdW4gPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9uTWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGl2TWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICAgICAgcmV0dXJuIGRpdlxyXG4gICAgfTtcclxuICAgIGNvbnN0IGgyTWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgaDIudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGgyLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiBoMlxyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaDJNYWtlcixcclxuICAgICAgICBkaXZNYWtlcixcclxuICAgICAgICBidXR0b25NYWtlcixcclxuICAgIH1cclxuXHJcblxyXG59KSgpO1xyXG5leHBvcnQgeyBkb21GdW4gfSIsImltcG9ydCB7IGxvYWQsIHByb2plY3RGb3JtTWFrZXIgfSBmcm9tICcuL3Byb2plY3QnXHJcblxyXG5jb25zdCBidG5Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RCdG4nKTtcclxuY29uc3QgcG9wdXBQcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwUHJvamVjdCcpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgICBidG5Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwUHJvamVjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgcHJvamVjdEZvcm1NYWtlcigpXHJcblxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBhZGRQcm9qZWN0IH1cclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSAnLi9kb21zdHVmZidcclxuXHJcblxyXG5hZGRQcm9qZWN0KClcclxuXHJcbi8vIGNvbnNvbGUubG9nKCdoZWxsbycpXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgZG9tRnVuIH0gZnJvbSAnLi9kb21mdW5jJ1xyXG5pbXBvcnQgeyBUb2RvLCBwcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0Q2xhc3MnXHJcblxyXG5cclxuLy8gRG9tIFNlbGVjdGlvbnNcclxuY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbmNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZUJhcicpO1xyXG5cclxuY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VGl0bGVzJyk7XHJcblxyXG5jb25zdCBwb3B1cFByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBQcm9qZWN0Jyk7XHJcblxyXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG5cclxuY29uc3QgcG9wdXBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBUYXNrJyk7XHJcblxyXG5jb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvZm9ybScpO1xyXG5cclxuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UnKTtcclxuXHJcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNsb3NlUG9wdXBzKClcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG4vLyBDbG9zZSBQb3AgVXBzIEZ1bmN0aW9uXHJcbmZ1bmN0aW9uIGNsb3NlUG9wdXBzKCkge1xyXG4gICAgcG9wdXBEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHBvcHVwUHJvamVjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vIEZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIGZyb21cclxuZnVuY3Rpb24gcHJvamVjdEZvcm1NYWtlcigpIHtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICdzdWJtaXQnKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm0nKVxyXG5cclxuXHJcbiAgICAvLyBFdmVudCBsaXN0bmVyXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBmb3JtQWN0aW9uKHRleHQudmFsdWUpO1xyXG4gICAgICAgIGZvcm0ucmVtb3ZlKCk7XHJcbiAgICAgICAgY2xvc2VQb3B1cHMoKVxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnLCk7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdUaXRsZScpO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzEzJylcclxuXHJcblxyXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcclxuXHJcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBmb3JtLnJlbW92ZSgpO1xyXG4gICAgICAgIGNsb3NlUG9wdXBzKCk7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBwb3B1cFByb2plY3REaXYuYXBwZW5kKGZvcm0pO1xyXG4gICAgZm9ybS5hcHBlbmQodGV4dCk7XHJcbiAgICBmb3JtLmFwcGVuZChzdWJtaXQpO1xyXG4gICAgZm9ybS5hcHBlbmQoY2FuY2VsQnRuKTtcclxuXHJcbn1cclxuXHJcblxyXG4vLyBGb3JtIEFjdGlvbiBmdW5jdGlvbiBcclxuZnVuY3Rpb24gZm9ybUFjdGlvbih0ZXh0KSB7XHJcblxyXG4gICAgbGV0IGgyVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheVRpdGxlJylcclxuICAgIGxldCBidXR0b25BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQnV0dG9uJyk7XHJcbiAgICBidXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIHBvcHVwRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIE1haW4gaDMgaG9sZHMgdGhlIHByb2plY3QgdGl0bGVcclxuXHJcbiAgICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaDMudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgcHJvamVjdERpdi5hcHBlbmQoaDMpO1xyXG4gICAgbGV0IHNwYW5EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzcGFuRGVsZXRlLnRleHRDb250ZW50ID0gJ1gnXHJcbiAgICBoMy5hcHBlbmQoc3BhbkRlbGV0ZSlcclxuICAgIHJlbW92ZVByb2plY3Qoc3BhbkRlbGV0ZSwgaDJUaXRsZSlcclxuXHJcblxyXG4gICAgLy8gaDMgZXZlbnQgbGlzdG5lciBcclxuXHJcbiAgICBoMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgICAgIHNwYW5EZWxldGUuY2xhc3NOYW1lID0gZS50YXJnZXQudGV4dENvbnRlbnRcclxuXHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcblxyXG4gICAgICAgIC8vIFRhcmdldCB0aGUgIGgzIHNpYmxpbmdzXHJcbiAgICAgICAgbGV0IHNpYmxpbmdzID0gZ2V0U2libGluZ3MoZS5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBsZXQgc2libGluZ1RleHQgPSBzaWJsaW5ncy5tYXAoZSA9PiBlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuXHJcbiAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIGxldCBwcm9qZWN0QXJyID0gcHJvamVjdC5hbGxQcm9qZWN0c1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRpdGxlID0gcHJvamVjdEFycltpXS50aXRsZVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IHRpdGxlICsgJ1gnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaDJUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlXHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9Gb3JtLmNsYXNzTmFtZSA9IHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0Rpc3BsYXlEaXYoaSwpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcblxyXG5cclxuICAgIC8vIEFkZHMgdGhlIFByb2plY3QgdG8gdGhlIFByb2plY3QgQ2xhc3MgQ29udGFpbmVyXHJcbiAgICBwcm9qZWN0Lm5ld1Byb2plY3QodGV4dClcclxuXHJcblxyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byBnZXQgc2libGluZ3Mgb2YgYW4gZWxlbWVudFxyXG5sZXQgZ2V0U2libGluZ3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gZm9yIGNvbGxlY3Rpbmcgc2libGluZ3NcclxuICAgIGxldCBzaWJsaW5ncyA9IFtdO1xyXG4gICAgLy8gaWYgbm8gcGFyZW50LCByZXR1cm4gbm8gc2libGluZ1xyXG4gICAgaWYgKCFlLnBhcmVudE5vZGUpIHtcclxuICAgICAgICByZXR1cm4gc2libGluZ3M7XHJcbiAgICB9XHJcbiAgICAvLyBmaXJzdCBjaGlsZCBvZiB0aGUgcGFyZW50IG5vZGVcclxuICAgIGxldCBzaWJsaW5nID0gZS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XHJcblxyXG4gICAgLy8gY29sbGVjdGluZyBzaWJsaW5nc1xyXG4gICAgd2hpbGUgKHNpYmxpbmcpIHtcclxuICAgICAgICBpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlKSB7XHJcbiAgICAgICAgICAgIHNpYmxpbmdzLnB1c2goc2libGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2libGluZ3M7XHJcbn07XHJcblxyXG5cclxuLy8gVG9kb0Zvcm0gRXZlbnRsaXNudGVyXHJcbnRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0YXNrRm9ybUFjdGlvbigpO1xyXG4gICAgY2xvc2VQb3B1cHMoKTtcclxuXHJcblxyXG59KVxyXG5cclxuXHJcbi8vIFRvZG9Gb3JtIElucHV0cyBGdW5jdGlvbiBhbmQgbmV3IFRvZG8gQ3JlYXRpb25cclxuZnVuY3Rpb24gdGFza0Zvcm1BY3Rpb24oKSB7XHJcblxyXG5cclxuICAgIGxldCBidXR0b25BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQnV0dG9uJyk7XHJcbiAgICBidXR0b25BZGQuc2V0QXR0cmlidXRlKCdkYXRhLW51bWJlcicsIDApXHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlSW5wdXQnKTtcclxuICAgIGNvbnN0IHNlbGVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XHJcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xyXG4gICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XHJcblxyXG5cclxuICAgIGxldCBwcm9qZWN0QXJyID0gcHJvamVjdC5hbGxQcm9qZWN0c1xyXG5cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgdGl0bGUgPSBwcm9qZWN0QXJyW2ldLnRpdGxlXHJcbiAgICAgICAgaWYgKHRvZG9Gb3JtLmNsYXNzTGlzdC5jb250YWlucyh0aXRsZSkpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0LmFsbFByb2plY3RzW2ldLnRvZG8ucHVzaChuZXcgVG9kbyh0aXRsZUlucHV0LnZhbHVlLCBzZWxlY3RJbnB1dC52YWx1ZSwgdGV4dElucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgIHRhc2tEaXNwbGF5Rm9ybShpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHRhc2tEaXNwbGF5Rm9ybSh0b2RvRm9ybSk7XHJcbiAgICB0YXNrRm9ybVJlc2V0KHRpdGxlSW5wdXQsIHNlbGVjdElucHV0LCBkYXRlSW5wdXQsIHRleHRJbnB1dClcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlc2V0IEZvcm0gRnVuY3Rpb25cclxuZnVuY3Rpb24gdGFza0Zvcm1SZXNldCh0aXRsZSwgc2VsZWN0LCBkYXRlLCB0ZXh0KSB7XHJcbiAgICB0aXRsZS52YWx1ZSA9ICcnXHJcbiAgICBzZWxlY3QudmFsdWUgPSAnJ1xyXG4gICAgZGF0ZS52YWx1ZSA9ICcnXHJcbiAgICB0ZXh0LnZhbHVlID0gJydcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8gRGlzcGxheSBGdW5jdGlvbiBmb3IgdGhlIFRvZG8gRm9ybSBvbiBTdWJtaXRcclxuXHJcbmZ1bmN0aW9uIHRhc2tEaXNwbGF5Rm9ybShpKSB7XHJcblxyXG5cclxuICAgIGxldCBwcm9qZWN0QXJyID0gcHJvamVjdC5hbGxQcm9qZWN0c1tpXS50b2RvO1xyXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IHByb2plY3QuYWxsUHJvamVjdHNbaV0udGl0bGU7XHJcblxyXG4gICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICBjb250ZW50RGl2LmFwcGVuZCh0b2RvRGl2KTtcclxuICAgIGxldCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICB0b2RvRGl2LmFwcGVuZChoNCk7XHJcbiAgICBsZXQgc3BhblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0b2RvRGl2LmFwcGVuZChzcGFuUCk7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAuY2xhc3NMaXN0LmFkZCgnY2FyZFNwYW4nKVxyXG4gICAgdG9kb0Rpdi5hcHBlbmQocCk7XHJcbiAgICBsZXQgc3BhbkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0b2RvRGl2LmFwcGVuZChzcGFuRGF0ZSk7XHJcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0b2RvRGl2LmFwcGVuZChkZWxldGVCdXR0b24pO1xyXG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xyXG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IHByb2plY3RUaXRsZTtcclxuXHJcblxyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgIHJlbW92ZVRhc2soZGVsZXRlQnV0dG9uLCBwcm9qZWN0QXJyLCBpKVxyXG4gICAgICAgIGJ1dHRvblRhc2tBZGQoZGVsZXRlQnV0dG9uKVxyXG4gICAgICAgIG1vdXNlT3ZlcihkZWxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoaykge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGg0LnRleHRDb250ZW50ID0gcHJvamVjdEFycltpXS50aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzcGFuUC5pbm5lckhUTUwgPSBwcm9qZWN0QXJyW2ldLnByaW9yaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW5EYXRlLnRleHRDb250ZW50ID0gcHJvamVjdEFycltpXS5kdWVEYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBEaXNwbGF5IEZ1bmN0aW9uIGZvciB0aGUgbWFpbiBoMyBldmVudGxpc3RuZXJcclxuXHJcbmZ1bmN0aW9uIHRhc2tEaXNwbGF5RGl2KGkpIHtcclxuXHJcblxyXG4gICAgbGV0IHByb2plY3RBcnIgPSBwcm9qZWN0LmFsbFByb2plY3RzW2ldLnRvZG9cclxuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LmFsbFByb2plY3RzW2ldLnRpdGxlXHJcblxyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSsrKSB7XHJcblxyXG5cclxuICAgICAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICAgICAgY29udGVudERpdi5hcHBlbmQodG9kb0Rpdik7XHJcbiAgICAgICAgbGV0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZChoNClcclxuICAgICAgICBsZXQgc3BhblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmQoc3BhblApXHJcbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdjYXJkU3BhbicpXHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmQocClcclxuICAgICAgICBsZXQgc3BhbkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmQoc3BhbkRhdGUpXHJcbiAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmQoZGVsZXRlQnV0dG9uKVxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcclxuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gcHJvamVjdFRpdGxlO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHJlbW92ZVRhc2soZGVsZXRlQnV0dG9uLCBwcm9qZWN0QXJyLCBpKTtcclxuICAgICAgICBidXR0b25UYXNrQWRkKGRlbGV0ZUJ1dHRvbik7XHJcblxyXG4gICAgICAgIG1vdXNlT3ZlcihkZWxldGVCdXR0b24pO1xyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcclxuXHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGspIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBoNC50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0udGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhblAuaW5uZXJIVE1MID0gcHJvamVjdEFycltpXS5wcmlvcml0eTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBwLnRleHRDb250ZW50ID0gcHJvamVjdEFycltpXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBzcGFuRGF0ZS50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0uZHVlRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBtb3VzZU92ZXIoYnV0dG9uLCkge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2RlbGV0ZScpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZGVsZXRlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVByb2plY3Qoc3BhbiwgaDIpIHtcclxuICAgIGxldCBwcm9qZWN0QXJyID0gcHJvamVjdC5hbGxQcm9qZWN0c1xyXG4gICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaDIudGV4dENvbnRlbnQgPSAnJ1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBwcm9qZWN0QXJyW2ldLnRpdGxlXHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnModGl0bGUgKyBcIlhcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyKVxyXG4gICAgICAgICAgICAgICAgcHJvamVjdEFyci5zcGxpY2UoaSwgMSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhc2soYnV0dG9uLCBhcnIsIGkpIHtcclxuXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJydcclxuXHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKSB7XHJcblxyXG4gICAgICAgICAgICBhcnIuc3BsaWNlKGksIDEpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59O1xyXG5cclxuZnVuY3Rpb24gYnV0dG9uVGFza0FkZChidXR0b24sKSB7XHJcblxyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0QXJyID0gcHJvamVjdC5hbGxQcm9qZWN0c1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBwcm9qZWN0QXJyW2ldLnRpdGxlXHJcblxyXG4gICAgICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyh0aXRsZSkpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdGFza0Rpc3BsYXlEaXYoaSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBwcm9qZWN0Rm9ybU1ha2VyIH1cclxuXHJcblxyXG5cclxuXHJcbiIsImNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnRvZG8gPSBbXTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbmV3UHJvamVjdCh0aXRsZSkge1xyXG4gICAgICAgIGxldCBwID0gbmV3IFByb2plY3QodGl0bGUpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwKTtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsUHJvamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG51bWJlck9mUHJvamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdHMoKTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9