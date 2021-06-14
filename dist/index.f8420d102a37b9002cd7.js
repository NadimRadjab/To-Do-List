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
    let number = 0


    // adds 1 to a number for every project
    let test = _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects.forEach(project => {
        number++
    })


    let buttonAdd = document.querySelector('#addButton');
    buttonAdd.addEventListener('click', (e) => {

        todoForm.setAttribute('data-number', e.target.dataset.number);

        popupDiv.style.display = 'flex';
    })

    // Main h3 holds the project title

    let h3 = document.createElement('h3');
    h3.textContent = text;
    h3.setAttribute('data-number', number)
    projectDiv.append(h3);






    // h3 event listner 

    h3.addEventListener('click', (e) => {



        buttonAdd.setAttribute('data-number', e.target.dataset.number);

        contentDiv.innerHTML = ''
        e.currentTarget.classList.toggle('active')
        if (e.currentTarget.classList.contains('active')) {
            taskDisplayDiv(e.target)
        }

        // Target the  h3 siblings
        let siblings = getSiblings(e.currentTarget);
        let siblingText = siblings.map(e => e.classList.remove('active'));

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
    let num = 0
    num++
    let buttonAdd = document.querySelector('#addButton');
    buttonAdd.setAttribute('data-number', num)
    const titleInput = document.querySelector('#titleInput');
    const selectInput = document.querySelector('#priority');
    const dateInput = document.querySelector('#date');
    const textInput = document.querySelector('#description');

    _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects[todoForm.dataset.number].todo.push(new _projectClass__WEBPACK_IMPORTED_MODULE_1__.Todo(titleInput.value, selectInput.value, textInput.value, dateInput.value));

    taskDisplayForm(todoForm);
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

function taskDisplayForm(item) {

    let projectArr = _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects[item.dataset.number].todo

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

    deleteButton.setAttribute('data-number', projectArr.length - 1)
    deleteButton.addEventListener('mouseover', (e) => {
        deleteButton.classList.toggle('delete')
    })
    deleteButton.addEventListener('mouseout', (e) => {
        deleteButton.classList.toggle('delete')
    })
    deleteButton.textContent = 'Delete'
    todoDiv.append(deleteButton)
    deleteButton.addEventListener('click', (e) => {
        console.log('hello')
    })


    for (let i = 0; i < projectArr.length; i++) {



        for (let k = 0; k < 4; k++) {


            switch (k) {
                case 0:
                    h4.textContent = projectArr[i].title
                    break;
                case 1:
                    spanP.innerHTML = projectArr[i].priority
                    break;
                case 2:
                    p.textContent = projectArr[i].description
                    break;
                case 3:
                    spanDate.textContent = projectArr[i].dueDate
                    break;

            }
        }
    }
}

// Display Function for the main h3 eventlistner
function taskDisplayDiv(item) {

    let projectArr = _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects[item.dataset.number].todo

    // console.log(projectArr)
    let num = 0
    for (let i = 0; i < projectArr.length; i++) {

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
        num++



        deleteButton.setAttribute('data-number', projectArr.length - 1)
        deleteButton.addEventListener('mouseover', (e) => {
            deleteButton.classList.toggle('delete')
        })
        deleteButton.addEventListener('mouseout', (e) => {
            deleteButton.classList.toggle('delete')
        })


        deleteButton.setAttribute('data-number', num - 1)

        deleteButton.textContent = 'Delete'
        deleteButton.addEventListener('click', (e) => {

            if (e.target.classList.contains('delete')) {
                projectArr.splice(i, 1)
            }
            // projectArr.splice(e.target.dataset.number, 1)
            console.log(projectArr)
        })

        for (let k = 0; k < 4; k++) {


            switch (k) {
                case 0:
                    h4.textContent = projectArr[i].title
                    break;
                case 1:
                    spanP.innerHTML = projectArr[i].priority
                    break;
                case 2:
                    p.textContent = projectArr[i].description
                    break;
                case 3:
                    spanDate.textContent = projectArr[i].dueDate
                    break;

            }
        }

    }

}




function removeTask(item) {
    let projectArr = _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects[item.dataset.number].todo
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb3BhZ2UvLi9zcmMvZG9tZnVuYy5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9kb21zdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9wYWdlLy4vc3JjL3Byb2plY3RDbGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCMkM7O0FBRTVDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWdCOztBQUV4QixLQUFLOzs7OztBQUtMOzs7QUFHcUI7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNrQjs7O0FBR3ZDLHFEQUFVO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGtDO0FBQ1k7OztBQUc5QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsZUFBZSxzRUFBMkI7QUFDMUM7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7OztBQUlMO0FBQ0EsSUFBSSw2REFBa0I7OztBQUd0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSw4REFBbUIsd0NBQXdDLCtDQUFJOztBQUVuRTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBLHFCQUFxQiw4REFBbUI7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTCxtQkFBbUIsdUJBQXVCOzs7O0FBSTFDLHVCQUF1QixPQUFPOzs7QUFHOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsOERBQW1COztBQUV4QztBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1Qjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCx1QkFBdUIsT0FBTzs7O0FBRzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7QUFDQSxxQkFBcUIsOERBQW1CO0FBQ3hDOzs7QUFHMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNVM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87Ozs7O0FBS0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6ImluZGV4LmY4NDIwZDEwMmEzN2I5MDAyY2Q3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgZG9tRnVuID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbk1ha2VyID0gKHRleHQgPSAnJywgc3R5bGUpID0+IHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvblxyXG4gICAgfTtcclxuICAgIGNvbnN0IGRpdk1ha2VyID0gKHRleHQgPSAnJywgc3R5bGUpID0+IHtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiBkaXZcclxuICAgIH07XHJcbiAgICBjb25zdCBoMk1ha2VyID0gKHRleHQgPSAnJywgc3R5bGUpID0+IHtcclxuICAgICAgICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGgyLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICBoMi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgICAgICByZXR1cm4gaDJcclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGgyTWFrZXIsXHJcbiAgICAgICAgZGl2TWFrZXIsXHJcbiAgICAgICAgYnV0dG9uTWFrZXIsXHJcbiAgICB9XHJcblxyXG5cclxufSkoKTtcclxuZXhwb3J0IHsgZG9tRnVuIH0iLCJpbXBvcnQgeyBwcm9qZWN0Rm9ybU1ha2VyIH0gZnJvbSAnLi9wcm9qZWN0J1xyXG5cclxuY29uc3QgYnRuUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0QnRuJyk7XHJcbmNvbnN0IHBvcHVwUHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cFByb2plY3QnKTtcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xyXG4gICAgYnRuUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBwb3B1cFByb2plY3REaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIHByb2plY3RGb3JtTWFrZXIoKVxyXG5cclxuICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgYWRkUHJvamVjdCB9XHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSAnLi9kb21zdHVmZidcclxuXHJcblxyXG5hZGRQcm9qZWN0KClcclxuLy8gY29uc29sZS5sb2coJ2hlbGxvJylcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBkb21GdW4gfSBmcm9tICcuL2RvbWZ1bmMnXHJcbmltcG9ydCB7IFRvZG8sIHByb2plY3QgfSBmcm9tICcuL3Byb2plY3RDbGFzcydcclxuXHJcblxyXG4vLyBEb20gU2VsZWN0aW9uc1xyXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyJyk7XHJcblxyXG5jb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZXMnKTtcclxuXHJcbmNvbnN0IHBvcHVwUHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cFByb2plY3QnKTtcclxuXHJcbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcblxyXG5jb25zdCBwb3B1cERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cFRhc2snKTtcclxuXHJcbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9mb3JtJyk7XHJcblxyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZScpO1xyXG5cclxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY2xvc2VQb3B1cHMoKVxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbi8vIENsb3NlIFBvcCBVcHMgRnVuY3Rpb25cclxuZnVuY3Rpb24gY2xvc2VQb3B1cHMoKSB7XHJcbiAgICBwb3B1cERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgcG9wdXBQcm9qZWN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8gRnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgZnJvbVxyXG5mdW5jdGlvbiBwcm9qZWN0Rm9ybU1ha2VyKCkge1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJ3N1Ym1pdCcpO1xyXG5cclxuXHJcbiAgICAvLyBFdmVudCBsaXN0bmVyXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBmb3JtQWN0aW9uKHRleHQudmFsdWUpO1xyXG4gICAgICAgIGZvcm0ucmVtb3ZlKCk7XHJcbiAgICAgICAgY2xvc2VQb3B1cHMoKVxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKCduYW1lJywgJ1RpdGxlJyk7XHJcblxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xyXG5cclxuICAgIHBvcHVwUHJvamVjdERpdi5hcHBlbmQoZm9ybSk7XHJcbiAgICBmb3JtLmFwcGVuZCh0ZXh0KTtcclxuICAgIGZvcm0uYXBwZW5kKHN1Ym1pdCk7XHJcblxyXG59XHJcblxyXG5cclxuLy8gRm9ybSBBY3Rpb24gZnVuY3Rpb24gXHJcbmZ1bmN0aW9uIGZvcm1BY3Rpb24odGV4dCkge1xyXG4gICAgbGV0IG51bWJlciA9IDBcclxuXHJcblxyXG4gICAgLy8gYWRkcyAxIHRvIGEgbnVtYmVyIGZvciBldmVyeSBwcm9qZWN0XHJcbiAgICBsZXQgdGVzdCA9IHByb2plY3QuYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBudW1iZXIrK1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgbGV0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRCdXR0b24nKTtcclxuICAgIGJ1dHRvbkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgICAgIHRvZG9Gb3JtLnNldEF0dHJpYnV0ZSgnZGF0YS1udW1iZXInLCBlLnRhcmdldC5kYXRhc2V0Lm51bWJlcik7XHJcblxyXG4gICAgICAgIHBvcHVwRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIE1haW4gaDMgaG9sZHMgdGhlIHByb2plY3QgdGl0bGVcclxuXHJcbiAgICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaDMudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgaDMuc2V0QXR0cmlidXRlKCdkYXRhLW51bWJlcicsIG51bWJlcilcclxuICAgIHByb2plY3REaXYuYXBwZW5kKGgzKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIGgzIGV2ZW50IGxpc3RuZXIgXHJcblxyXG4gICAgaDMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuXHJcblxyXG4gICAgICAgIGJ1dHRvbkFkZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtYmVyJywgZS50YXJnZXQuZGF0YXNldC5udW1iZXIpO1xyXG5cclxuICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIHRhc2tEaXNwbGF5RGl2KGUudGFyZ2V0KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGFyZ2V0IHRoZSAgaDMgc2libGluZ3NcclxuICAgICAgICBsZXQgc2libGluZ3MgPSBnZXRTaWJsaW5ncyhlLmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCBzaWJsaW5nVGV4dCA9IHNpYmxpbmdzLm1hcChlID0+IGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG5cclxuICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAvLyBBZGRzIHRoZSBQcm9qZWN0IHRvIHRoZSBQcm9qZWN0IENsYXNzIENvbnRhaW5lclxyXG4gICAgcHJvamVjdC5uZXdQcm9qZWN0KHRleHQpXHJcblxyXG5cclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdG8gZ2V0IHNpYmxpbmdzIG9mIGFuIGVsZW1lbnRcclxubGV0IGdldFNpYmxpbmdzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vIGZvciBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICBsZXQgc2libGluZ3MgPSBbXTtcclxuICAgIC8vIGlmIG5vIHBhcmVudCwgcmV0dXJuIG5vIHNpYmxpbmdcclxuICAgIGlmICghZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xyXG4gICAgfVxyXG4gICAgLy8gZmlyc3QgY2hpbGQgb2YgdGhlIHBhcmVudCBub2RlXHJcbiAgICBsZXQgc2libGluZyA9IGUucGFyZW50Tm9kZS5maXJzdENoaWxkO1xyXG5cclxuICAgIC8vIGNvbGxlY3Rpbmcgc2libGluZ3NcclxuICAgIHdoaWxlIChzaWJsaW5nKSB7XHJcbiAgICAgICAgaWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZSkge1xyXG4gICAgICAgICAgICBzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNpYmxpbmdzO1xyXG59O1xyXG5cclxuXHJcbi8vIFRvZG9Gb3JtIEV2ZW50bGlzbnRlclxyXG50b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGFza0Zvcm1BY3Rpb24oKTtcclxuICAgIGNsb3NlUG9wdXBzKCk7XHJcblxyXG5cclxufSlcclxuXHJcblxyXG4vLyBUb2RvRm9ybSBJbnB1dHMgRnVuY3Rpb24gYW5kIG5ldyBUb2RvIENyZWF0aW9uXHJcbmZ1bmN0aW9uIHRhc2tGb3JtQWN0aW9uKCkge1xyXG4gICAgbGV0IG51bSA9IDBcclxuICAgIG51bSsrXHJcbiAgICBsZXQgYnV0dG9uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEJ1dHRvbicpO1xyXG4gICAgYnV0dG9uQWRkLnNldEF0dHJpYnV0ZSgnZGF0YS1udW1iZXInLCBudW0pXHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlSW5wdXQnKTtcclxuICAgIGNvbnN0IHNlbGVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XHJcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xyXG4gICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XHJcblxyXG4gICAgcHJvamVjdC5hbGxQcm9qZWN0c1t0b2RvRm9ybS5kYXRhc2V0Lm51bWJlcl0udG9kby5wdXNoKG5ldyBUb2RvKHRpdGxlSW5wdXQudmFsdWUsIHNlbGVjdElucHV0LnZhbHVlLCB0ZXh0SW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSkpO1xyXG5cclxuICAgIHRhc2tEaXNwbGF5Rm9ybSh0b2RvRm9ybSk7XHJcbiAgICB0YXNrRm9ybVJlc2V0KHRpdGxlSW5wdXQsIHNlbGVjdElucHV0LCBkYXRlSW5wdXQsIHRleHRJbnB1dClcclxuXHJcblxyXG59XHJcblxyXG4vLyBSZXNldCBGb3JtIEZ1bmN0aW9uXHJcbmZ1bmN0aW9uIHRhc2tGb3JtUmVzZXQodGl0bGUsIHNlbGVjdCwgZGF0ZSwgdGV4dCkge1xyXG4gICAgdGl0bGUudmFsdWUgPSAnJ1xyXG4gICAgc2VsZWN0LnZhbHVlID0gJydcclxuICAgIGRhdGUudmFsdWUgPSAnJ1xyXG4gICAgdGV4dC52YWx1ZSA9ICcnXHJcbn1cclxuXHJcblxyXG5cclxuLy8gRGlzcGxheSBGdW5jdGlvbiBmb3IgdGhlIFRvZG8gRm9ybSBvbiBTdWJtaXRcclxuXHJcbmZ1bmN0aW9uIHRhc2tEaXNwbGF5Rm9ybShpdGVtKSB7XHJcblxyXG4gICAgbGV0IHByb2plY3RBcnIgPSBwcm9qZWN0LmFsbFByb2plY3RzW2l0ZW0uZGF0YXNldC5udW1iZXJdLnRvZG9cclxuXHJcbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgIGNvbnRlbnREaXYuYXBwZW5kKHRvZG9EaXYpO1xyXG5cclxuICAgIGxldCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICB0b2RvRGl2LmFwcGVuZChoNClcclxuICAgIGxldCBzcGFuUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRvZG9EaXYuYXBwZW5kKHNwYW5QKVxyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2RvRGl2LmFwcGVuZChwKVxyXG4gICAgbGV0IHNwYW5EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdG9kb0Rpdi5hcHBlbmQoc3BhbkRhdGUpXHJcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLW51bWJlcicsIHByb2plY3RBcnIubGVuZ3RoIC0gMSlcclxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdkZWxldGUnKVxyXG4gICAgfSlcclxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2RlbGV0ZScpXHJcbiAgICB9KVxyXG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcclxuICAgIHRvZG9EaXYuYXBwZW5kKGRlbGV0ZUJ1dHRvbilcclxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvJylcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG5cclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChrKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaDQudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhblAuaW5uZXJIVE1MID0gcHJvamVjdEFycltpXS5wcmlvcml0eVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbkRhdGUudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLmR1ZURhdGVcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIERpc3BsYXkgRnVuY3Rpb24gZm9yIHRoZSBtYWluIGgzIGV2ZW50bGlzdG5lclxyXG5mdW5jdGlvbiB0YXNrRGlzcGxheURpdihpdGVtKSB7XHJcblxyXG4gICAgbGV0IHByb2plY3RBcnIgPSBwcm9qZWN0LmFsbFByb2plY3RzW2l0ZW0uZGF0YXNldC5udW1iZXJdLnRvZG9cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0QXJyKVxyXG4gICAgbGV0IG51bSA9IDBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICAgICAgY29udGVudERpdi5hcHBlbmQodG9kb0Rpdik7XHJcbiAgICAgICAgbGV0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZChoNClcclxuICAgICAgICBsZXQgc3BhblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmQoc3BhblApXHJcbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmQocClcclxuICAgICAgICBsZXQgc3BhbkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmQoc3BhbkRhdGUpXHJcbiAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmQoZGVsZXRlQnV0dG9uKVxyXG4gICAgICAgIG51bSsrXHJcblxyXG5cclxuXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1udW1iZXInLCBwcm9qZWN0QXJyLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdkZWxldGUnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2RlbGV0ZScpXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtYmVyJywgbnVtIC0gMSlcclxuXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcclxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykpIHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RBcnIuc3BsaWNlKGksIDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcHJvamVjdEFyci5zcGxpY2UoZS50YXJnZXQuZGF0YXNldC5udW1iZXIsIDEpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnIpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcclxuXHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGspIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBoNC50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0udGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzcGFuUC5pbm5lckhUTUwgPSBwcm9qZWN0QXJyW2ldLnByaW9yaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBzcGFuRGF0ZS50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0uZHVlRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVUYXNrKGl0ZW0pIHtcclxuICAgIGxldCBwcm9qZWN0QXJyID0gcHJvamVjdC5hbGxQcm9qZWN0c1tpdGVtLmRhdGFzZXQubnVtYmVyXS50b2RvXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBwcm9qZWN0Rm9ybU1ha2VyIH1cclxuXHJcblxyXG5cclxuXHJcbiIsImNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnRvZG8gPSBbXTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbmV3UHJvamVjdCh0aXRsZSkge1xyXG4gICAgICAgIGxldCBwID0gbmV3IFByb2plY3QodGl0bGUpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwKTtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsUHJvamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG51bWJlck9mUHJvamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdHMoKTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9