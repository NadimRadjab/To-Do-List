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

/***/ "./src/dailyTaskClass.js":
/*!*******************************!*\
  !*** ./src/dailyTaskClass.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });

class Task {
    constructor(title, priority, description, date) {
        this.title = title
        this.priority = priority
        this.description = description
        this.date = date

    }

}


class Tasks {
    constructor() {
        this.tasks = [];
    }

    newTask(title, priority, description, date) {
        let t = new Task(title, priority, description, date);
        this.tasks.push(t);
        return t;
    }

    get allTasks() {
        return this.tasks;
    }

    get numberOfTasks() {
        return this.tasks.length;
    }
}

let task = new Tasks();






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
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addInboxTask": () => (/* binding */ addInboxTask)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox */ "./src/inbox.js");


const btnInbox = document.querySelector('#inbox')
const btnProject = document.querySelector('#projectBtn');


_project__WEBPACK_IMPORTED_MODULE_0__.todoForm.addEventListener('click', (e) => {

    e.stopPropagation()


})

function addProject() {
    btnProject.addEventListener('click', () => {
        _project__WEBPACK_IMPORTED_MODULE_0__.popupProjectDiv.style.display = 'flex'
        ;(0,_project__WEBPACK_IMPORTED_MODULE_0__.projectFormMaker)()

    })

}

function addInboxTask() {
    (0,_inbox__WEBPACK_IMPORTED_MODULE_1__.inboxCreation)()
    btnInbox.addEventListener('click', (e) => {
        _project__WEBPACK_IMPORTED_MODULE_0__.contentDiv.innerHTML = ''
        ;(0,_inbox__WEBPACK_IMPORTED_MODULE_1__.taskDisplayInbox)()
        btnInbox.classList.add('active')

        _project__WEBPACK_IMPORTED_MODULE_0__.todoForm.className = 'Inbox'
    })
}





/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inboxCreation": () => (/* binding */ inboxCreation),
/* harmony export */   "taskDisplayInbox": () => (/* binding */ taskDisplayInbox)
/* harmony export */ });
/* harmony import */ var _dailyTaskClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dailyTaskClass */ "./src/dailyTaskClass.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");





let buttonAdd = document.querySelector('#addButton');
buttonAdd.addEventListener('click', (e) => {
    _project__WEBPACK_IMPORTED_MODULE_1__.popupDiv.style.display = 'flex';
})



function inboxCreation() {
    _project__WEBPACK_IMPORTED_MODULE_1__.todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        taskFormAction();
        // closePopups();


    })

}



function taskFormAction() {


    let buttonAdd = document.querySelector('#addButton');

    const titleInput = document.querySelector('#titleInput');
    const selectInput = document.querySelector('#priority');
    const dateInput = document.querySelector('#date');
    const textInput = document.querySelector('#description');
    let title = titleInput.value

    console.log(title)

    let taskArr = _dailyTaskClass__WEBPACK_IMPORTED_MODULE_0__.task.allTasks

    if (_project__WEBPACK_IMPORTED_MODULE_1__.todoForm.classList.contains('Inbox')) {

        _dailyTaskClass__WEBPACK_IMPORTED_MODULE_0__.task.newTask(title, selectInput.value, textInput.value, dateInput.value);


    }


    taskDisplayInbox()
    // taskFormReset(titleInput, selectInput, dateInput, textInput)


}
function taskFormReset(title, select, date, text) {
    title.value = ''
    select.value = ''
    date.value = ''
    text.value = ''
}







function taskDisplayInbox(i) {



    let taskArr = _dailyTaskClass__WEBPACK_IMPORTED_MODULE_0__.task.allTasks
    let taskArrTitle = _dailyTaskClass__WEBPACK_IMPORTED_MODULE_0__.task.allTasks.title;


    for (i = 0; i < taskArr.length; i++) {






        console.log(taskArr)
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('card');
        _project__WEBPACK_IMPORTED_MODULE_1__.contentDiv.append(todoDiv);
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
        deleteButton.className = taskArrTitle;


        // removeTask(deleteButton, projectArr, i)
        // buttonTaskAdd(deleteButton)
        // mouseOver(deleteButton);

        for (let k = 0; k < 4; k++) {


            switch (k) {
                case 0:
                    h4.textContent = taskArr[i].title;
                    break;
                case 1:
                    spanP.innerHTML = taskArr[i].priority;
                    break;
                case 2:
                    p.textContent = taskArr[i].description;
                    break;
                case 3:
                    spanDate.textContent = taskArr[i].date;
                    break;
            }
        }


    }
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
;(0,_domstuff__WEBPACK_IMPORTED_MODULE_1__.addInboxTask)()
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
/* harmony export */   "projectFormMaker": () => (/* binding */ projectFormMaker),
/* harmony export */   "todoForm": () => (/* binding */ todoForm),
/* harmony export */   "popupProjectDiv": () => (/* binding */ popupProjectDiv),
/* harmony export */   "contentDiv": () => (/* binding */ contentDiv),
/* harmony export */   "popupDiv": () => (/* binding */ popupDiv)
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
sideBar.addEventListener('click', (e) => {
    sideBar.classList.remove('active');
});


closeBtn.addEventListener('click', (e) => {
    closePopups()


});


// Close Pop Ups Function
function closePopups() {
    popupDiv.style.display = 'none';
    popupProjectDiv.style.display = 'none'

}
popupDiv.addEventListener('click', closePopups);




// Function that creates a from
function projectFormMaker() {

    const form = document.createElement('form');
    form.setAttribute('action', 'submit');
    form.classList.add('projectForm');

    popupProjectDiv.addEventListener('click', () => {
        form.remove();
        closePopups();

    })

    // Event listner
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        formAction(text.value);
        form.remove();
        closePopups()


    });
    form.addEventListener('click', (e) => {

        e.stopPropagation()


    })


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
    h3.classList.add('test')
    h3.textContent = text;
    projectDiv.append(h3);
    let spanDelete = document.createElement('span');
    spanDelete.textContent = 'X'
    h3.append(spanDelete)
    removeProject(spanDelete, h2Title)



    document.addEventListener('click', (e) => {
        let isClickInsideElement = h3.contains(e.target);
        if (!isClickInsideElement) {
            h3.classList.remove('active')
        }
    });
    // h3 event listner 

    h3.addEventListener('click', (e) => {
        e.stopPropagation();
        spanDelete.className = e.target.textContent;

        e.currentTarget.classList.toggle('active');

        // Target the  h3 siblings
        let siblings = getSiblings(e.currentTarget);
        let siblingText = siblings.map(e => e.classList.remove('active'));

        contentDiv.innerHTML = '';
        let projectArr = _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects;

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

    const titleInput = document.querySelector('#titleInput');
    const selectInput = document.querySelector('#priority');
    const dateInput = document.querySelector('#date');
    const textInput = document.querySelector('#description');



    let projectArr = _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects


    for (let i = 0; i < projectArr.length; i++) {
        let title = projectArr[i].title
        if (todoForm.classList.contains(title)) {
            _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects[i].todo.push(new _projectClass__WEBPACK_IMPORTED_MODULE_1__.Todo(titleInput.value, selectInput.value, textInput.value, dateInput.value));

            taskDisplayDiv(i)
        }

    }


    // taskDisplayForm(todoForm);
    // taskFormReset(titleInput, selectInput, dateInput, textInput)


}



// Reset Form Function
function taskFormReset(title, select, date, text) {
    title.value = ''
    select.value = ''
    date.value = ''
    text.value = ''
}




// Display Function for the Todo Form on Submit

// function taskDisplayForm(i) {

//     let projectArr = project.allProjects[i].todo;
//     let projectTitle = project.allProjects[i].title;



//     for (i = 0; i < projectArr.length; i++) {






//         const todoDiv = document.createElement('div');
//         todoDiv.classList.add('card');
//         contentDiv.append(todoDiv);
//         let h4 = document.createElement('h4');
//         todoDiv.append(h4);
//         let spanP = document.createElement('span');
//         todoDiv.append(spanP);
//         let p = document.createElement('p');
//         p.classList.add('cardSpan')
//         todoDiv.append(p);
//         let spanDate = document.createElement('span');
//         todoDiv.append(spanDate);
//         let deleteButton = document.createElement('button');
//         todoDiv.append(deleteButton);
//         deleteButton.textContent = 'X';
//         deleteButton.className = projectTitle;





//         removeTask(deleteButton, projectArr, i)
//         buttonTaskAdd(deleteButton)
//         mouseOver(deleteButton);

//         for (let k = 0; k < 4; k++) {


//             switch (k) {
//                 case 0:
//                     h4.textContent = projectArr[i].title;
//                     break;
//                 case 1:
//                     spanP.innerHTML = projectArr[i].priority;
//                     break;
//                 case 2:
//                     p.textContent = projectArr[i].description;
//                     break;
//                 case 3:
//                     spanDate.textContent = projectArr[i].date;
//                     break;
//             }
//         }


//     }
// }





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
                    spanDate.textContent = projectArr[i].date;
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
    constructor(title, priority, description, date) {
        this.title = title
        this.priority = priority
        this.description = description
        this.date = date

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb3BhZ2UvLi9zcmMvZGFpbHlUYXNrQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9kb3BhZ2UvLi9zcmMvZG9tZnVuYy5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9kb21zdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9wYWdlLy4vc3JjL3Byb2plY3RDbGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCa0Y7QUFDekI7QUFDMUQ7QUFDQTs7O0FBR0EsK0RBQXlCOztBQUV6Qjs7O0FBR0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsUUFBUSxtRUFBNkI7QUFDckMsUUFBUSwyREFBZ0I7O0FBRXhCLEtBQUs7O0FBRUw7O0FBRUE7QUFDQSxJQUFJLHFEQUFhO0FBQ2pCO0FBQ0EsUUFBUSwwREFBb0I7QUFDNUIsUUFBUSx5REFBZ0I7QUFDeEI7O0FBRUEsUUFBUSx3REFBa0I7QUFD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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87Ozs7O0FBS0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6ImluZGV4LjJkZGIyMTk0MGU5OGU2MTY1NmY5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXHJcbmNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgZGF0ZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuY2xhc3MgVGFza3Mge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld1Rhc2sodGl0bGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgZGF0ZSkge1xyXG4gICAgICAgIGxldCB0ID0gbmV3IFRhc2sodGl0bGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgZGF0ZSk7XHJcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHQpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbGxUYXNrcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXNrcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbnVtYmVyT2ZUYXNrcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5sZW5ndGg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgdGFzayA9IG5ldyBUYXNrcygpO1xyXG5cclxuXHJcblxyXG5cclxuIiwiY29uc3QgZG9tRnVuID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbk1ha2VyID0gKHRleHQgPSAnJywgc3R5bGUpID0+IHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvblxyXG4gICAgfTtcclxuICAgIGNvbnN0IGRpdk1ha2VyID0gKHRleHQgPSAnJywgc3R5bGUpID0+IHtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiBkaXZcclxuICAgIH07XHJcbiAgICBjb25zdCBoMk1ha2VyID0gKHRleHQgPSAnJywgc3R5bGUpID0+IHtcclxuICAgICAgICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGgyLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICBoMi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgICAgICByZXR1cm4gaDJcclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGgyTWFrZXIsXHJcbiAgICAgICAgZGl2TWFrZXIsXHJcbiAgICAgICAgYnV0dG9uTWFrZXIsXHJcbiAgICB9XHJcblxyXG5cclxufSkoKTtcclxuZXhwb3J0IHsgZG9tRnVuIH0iLCJpbXBvcnQgeyBwcm9qZWN0Rm9ybU1ha2VyLCB0b2RvRm9ybSwgcG9wdXBQcm9qZWN0RGl2LCBjb250ZW50RGl2IH0gZnJvbSAnLi9wcm9qZWN0J1xyXG5pbXBvcnQgeyBpbmJveENyZWF0aW9uLCB0YXNrRGlzcGxheUluYm94IH0gZnJvbSAnLi9pbmJveCc7XHJcbmNvbnN0IGJ0bkluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luYm94JylcclxuY29uc3QgYnRuUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0QnRuJyk7XHJcblxyXG5cclxudG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuXHJcblxyXG59KVxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcclxuICAgIGJ0blByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcG9wdXBQcm9qZWN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICBwcm9qZWN0Rm9ybU1ha2VyKClcclxuXHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkSW5ib3hUYXNrKCkge1xyXG4gICAgaW5ib3hDcmVhdGlvbigpXHJcbiAgICBidG5JbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIHRhc2tEaXNwbGF5SW5ib3goKVxyXG4gICAgICAgIGJ0bkluYm94LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblxyXG4gICAgICAgIHRvZG9Gb3JtLmNsYXNzTmFtZSA9ICdJbmJveCdcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBhZGRQcm9qZWN0LCBhZGRJbmJveFRhc2sgfVxyXG4iLCJpbXBvcnQgeyB0YXNrIH0gZnJvbSBcIi4vZGFpbHlUYXNrQ2xhc3NcIjtcclxuaW1wb3J0IHsgY29udGVudERpdiwgdG9kb0Zvcm0sIHBvcHVwRGl2IH0gZnJvbSBcIi4vcHJvamVjdFwiXHJcblxyXG5cclxuXHJcbmxldCBidXR0b25BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQnV0dG9uJyk7XHJcbmJ1dHRvbkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBwb3B1cERpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG59KVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBpbmJveENyZWF0aW9uKCkge1xyXG4gICAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGFza0Zvcm1BY3Rpb24oKTtcclxuICAgICAgICAvLyBjbG9zZVBvcHVwcygpO1xyXG5cclxuXHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0YXNrRm9ybUFjdGlvbigpIHtcclxuXHJcblxyXG4gICAgbGV0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRCdXR0b24nKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlSW5wdXQnKTtcclxuICAgIGNvbnN0IHNlbGVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XHJcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xyXG4gICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XHJcbiAgICBsZXQgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlXHJcblxyXG4gICAgY29uc29sZS5sb2codGl0bGUpXHJcblxyXG4gICAgbGV0IHRhc2tBcnIgPSB0YXNrLmFsbFRhc2tzXHJcblxyXG4gICAgaWYgKHRvZG9Gb3JtLmNsYXNzTGlzdC5jb250YWlucygnSW5ib3gnKSkge1xyXG5cclxuICAgICAgICB0YXNrLm5ld1Rhc2sodGl0bGUsIHNlbGVjdElucHV0LnZhbHVlLCB0ZXh0SW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdGFza0Rpc3BsYXlJbmJveCgpXHJcbiAgICAvLyB0YXNrRm9ybVJlc2V0KHRpdGxlSW5wdXQsIHNlbGVjdElucHV0LCBkYXRlSW5wdXQsIHRleHRJbnB1dClcclxuXHJcblxyXG59XHJcbmZ1bmN0aW9uIHRhc2tGb3JtUmVzZXQodGl0bGUsIHNlbGVjdCwgZGF0ZSwgdGV4dCkge1xyXG4gICAgdGl0bGUudmFsdWUgPSAnJ1xyXG4gICAgc2VsZWN0LnZhbHVlID0gJydcclxuICAgIGRhdGUudmFsdWUgPSAnJ1xyXG4gICAgdGV4dC52YWx1ZSA9ICcnXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRhc2tEaXNwbGF5SW5ib3goaSkge1xyXG5cclxuXHJcblxyXG4gICAgbGV0IHRhc2tBcnIgPSB0YXNrLmFsbFRhc2tzXHJcbiAgICBsZXQgdGFza0FyclRpdGxlID0gdGFzay5hbGxUYXNrcy50aXRsZTtcclxuXHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IHRhc2tBcnIubGVuZ3RoOyBpKyspIHtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrQXJyKVxyXG4gICAgICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgICAgICBjb250ZW50RGl2LmFwcGVuZCh0b2RvRGl2KTtcclxuICAgICAgICBsZXQgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kKGg0KTtcclxuICAgICAgICBsZXQgc3BhblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmQoc3BhblApO1xyXG4gICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHAuY2xhc3NMaXN0LmFkZCgnY2FyZFNwYW4nKVxyXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kKHApO1xyXG4gICAgICAgIGxldCBzcGFuRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZChzcGFuRGF0ZSk7XHJcbiAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kKGRlbGV0ZUJ1dHRvbik7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSB0YXNrQXJyVGl0bGU7XHJcblxyXG5cclxuICAgICAgICAvLyByZW1vdmVUYXNrKGRlbGV0ZUJ1dHRvbiwgcHJvamVjdEFyciwgaSlcclxuICAgICAgICAvLyBidXR0b25UYXNrQWRkKGRlbGV0ZUJ1dHRvbilcclxuICAgICAgICAvLyBtb3VzZU92ZXIoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcclxuXHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGspIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBoNC50ZXh0Q29udGVudCA9IHRhc2tBcnJbaV0udGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhblAuaW5uZXJIVE1MID0gdGFza0FycltpXS5wcmlvcml0eTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBwLnRleHRDb250ZW50ID0gdGFza0FycltpXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBzcGFuRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tBcnJbaV0uZGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgaW5ib3hDcmVhdGlvbiwgdGFza0Rpc3BsYXlJbmJveCB9IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgeyBhZGRQcm9qZWN0LCBhZGRJbmJveFRhc2sgfSBmcm9tICcuL2RvbXN0dWZmJ1xyXG5cclxuXHJcbmFkZFByb2plY3QoKVxyXG5hZGRJbmJveFRhc2soKVxyXG4vLyBjb25zb2xlLmxvZygnaGVsbG8nKVxyXG5cclxuXHJcbiIsImltcG9ydCB7IGRvbUZ1biB9IGZyb20gJy4vZG9tZnVuYydcclxuaW1wb3J0IHsgVG9kbywgcHJvamVjdCB9IGZyb20gJy4vcHJvamVjdENsYXNzJ1xyXG5cclxuXHJcbi8vIERvbSBTZWxlY3Rpb25zXHJcbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG5jb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXInKTtcclxuXHJcbmNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlcycpO1xyXG5cclxuY29uc3QgcG9wdXBQcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwUHJvamVjdCcpO1xyXG5cclxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuXHJcbmNvbnN0IHBvcHVwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwVGFzaycpO1xyXG5cclxuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb2Zvcm0nKTtcclxuXHJcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlJyk7XHJcbnNpZGVCYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgc2lkZUJhci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG5cclxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY2xvc2VQb3B1cHMoKVxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbi8vIENsb3NlIFBvcCBVcHMgRnVuY3Rpb25cclxuZnVuY3Rpb24gY2xvc2VQb3B1cHMoKSB7XHJcbiAgICBwb3B1cERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgcG9wdXBQcm9qZWN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHJcbn1cclxucG9wdXBEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcHVwcyk7XHJcblxyXG5cclxuXHJcblxyXG4vLyBGdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBmcm9tXHJcbmZ1bmN0aW9uIHByb2plY3RGb3JtTWFrZXIoKSB7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnc3VibWl0Jyk7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGb3JtJyk7XHJcblxyXG4gICAgcG9wdXBQcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGZvcm0ucmVtb3ZlKCk7XHJcbiAgICAgICAgY2xvc2VQb3B1cHMoKTtcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIEV2ZW50IGxpc3RuZXJcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGZvcm1BY3Rpb24odGV4dC52YWx1ZSk7XHJcbiAgICAgICAgZm9ybS5yZW1vdmUoKTtcclxuICAgICAgICBjbG9zZVBvcHVwcygpXHJcblxyXG5cclxuICAgIH0pO1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuXHJcblxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JywpO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnVGl0bGUnKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcxMycpXHJcblxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnQWRkJztcclxuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XHJcblxyXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZm9ybS5yZW1vdmUoKTtcclxuICAgICAgICBjbG9zZVBvcHVwcygpO1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgcG9wdXBQcm9qZWN0RGl2LmFwcGVuZChmb3JtKTtcclxuICAgIGZvcm0uYXBwZW5kKHRleHQpO1xyXG4gICAgZm9ybS5hcHBlbmQoc3VibWl0KTtcclxuICAgIGZvcm0uYXBwZW5kKGNhbmNlbEJ0bik7XHJcblxyXG59XHJcblxyXG5cclxuLy8gRm9ybSBBY3Rpb24gZnVuY3Rpb24gXHJcbmZ1bmN0aW9uIGZvcm1BY3Rpb24odGV4dCkge1xyXG5cclxuICAgIGxldCBoMlRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc3BsYXlUaXRsZScpXHJcbiAgICBsZXQgYnV0dG9uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEJ1dHRvbicpO1xyXG4gICAgYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBwb3B1cERpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBNYWluIGgzIGhvbGRzIHRoZSBwcm9qZWN0IHRpdGxlXHJcblxyXG4gICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGgzLmNsYXNzTGlzdC5hZGQoJ3Rlc3QnKVxyXG4gICAgaDMudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgcHJvamVjdERpdi5hcHBlbmQoaDMpO1xyXG4gICAgbGV0IHNwYW5EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzcGFuRGVsZXRlLnRleHRDb250ZW50ID0gJ1gnXHJcbiAgICBoMy5hcHBlbmQoc3BhbkRlbGV0ZSlcclxuICAgIHJlbW92ZVByb2plY3Qoc3BhbkRlbGV0ZSwgaDJUaXRsZSlcclxuXHJcblxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBsZXQgaXNDbGlja0luc2lkZUVsZW1lbnQgPSBoMy5jb250YWlucyhlLnRhcmdldCk7XHJcbiAgICAgICAgaWYgKCFpc0NsaWNrSW5zaWRlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBoMy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gaDMgZXZlbnQgbGlzdG5lciBcclxuXHJcbiAgICBoMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBzcGFuRGVsZXRlLmNsYXNzTmFtZSA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG5cclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIC8vIFRhcmdldCB0aGUgIGgzIHNpYmxpbmdzXHJcbiAgICAgICAgbGV0IHNpYmxpbmdzID0gZ2V0U2libGluZ3MoZS5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBsZXQgc2libGluZ1RleHQgPSBzaWJsaW5ncy5tYXAoZSA9PiBlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuXHJcbiAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBsZXQgcHJvamVjdEFyciA9IHByb2plY3QuYWxsUHJvamVjdHM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBwcm9qZWN0QXJyW2ldLnRpdGxlXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gdGl0bGUgKyAnWCcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBoMlRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Zvcm0uY2xhc3NOYW1lID0gdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICB0YXNrRGlzcGxheURpdihpLClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgLy8gQWRkcyB0aGUgUHJvamVjdCB0byB0aGUgUHJvamVjdCBDbGFzcyBDb250YWluZXJcclxuICAgIHByb2plY3QubmV3UHJvamVjdCh0ZXh0KVxyXG5cclxuXHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGdldCBzaWJsaW5ncyBvZiBhbiBlbGVtZW50XHJcbmxldCBnZXRTaWJsaW5ncyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyBmb3IgY29sbGVjdGluZyBzaWJsaW5nc1xyXG4gICAgbGV0IHNpYmxpbmdzID0gW107XHJcbiAgICAvLyBpZiBubyBwYXJlbnQsIHJldHVybiBubyBzaWJsaW5nXHJcbiAgICBpZiAoIWUucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIHJldHVybiBzaWJsaW5ncztcclxuICAgIH1cclxuICAgIC8vIGZpcnN0IGNoaWxkIG9mIHRoZSBwYXJlbnQgbm9kZVxyXG4gICAgbGV0IHNpYmxpbmcgPSBlLnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcclxuXHJcbiAgICAvLyBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICB3aGlsZSAoc2libGluZykge1xyXG4gICAgICAgIGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGUpIHtcclxuICAgICAgICAgICAgc2libGluZ3MucHVzaChzaWJsaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaWJsaW5ncztcclxufTtcclxuXHJcblxyXG4vLyBUb2RvRm9ybSBFdmVudGxpc250ZXJcclxudG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0YXNrRm9ybUFjdGlvbigpO1xyXG4gICAgY2xvc2VQb3B1cHMoKTtcclxuXHJcblxyXG59KVxyXG5cclxuXHJcbi8vIFRvZG9Gb3JtIElucHV0cyBGdW5jdGlvbiBhbmQgbmV3IFRvZG8gQ3JlYXRpb25cclxuZnVuY3Rpb24gdGFza0Zvcm1BY3Rpb24oKSB7XHJcblxyXG5cclxuICAgIGxldCBidXR0b25BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQnV0dG9uJyk7XHJcblxyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZUlucHV0Jyk7XHJcbiAgICBjb25zdCBzZWxlY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xyXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcclxuICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xyXG5cclxuXHJcblxyXG4gICAgbGV0IHByb2plY3RBcnIgPSBwcm9qZWN0LmFsbFByb2plY3RzXHJcblxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCB0aXRsZSA9IHByb2plY3RBcnJbaV0udGl0bGVcclxuICAgICAgICBpZiAodG9kb0Zvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKHRpdGxlKSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0LmFsbFByb2plY3RzW2ldLnRvZG8ucHVzaChuZXcgVG9kbyh0aXRsZUlucHV0LnZhbHVlLCBzZWxlY3RJbnB1dC52YWx1ZSwgdGV4dElucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgIHRhc2tEaXNwbGF5RGl2KGkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdGFza0Rpc3BsYXlGb3JtKHRvZG9Gb3JtKTtcclxuICAgIC8vIHRhc2tGb3JtUmVzZXQodGl0bGVJbnB1dCwgc2VsZWN0SW5wdXQsIGRhdGVJbnB1dCwgdGV4dElucHV0KVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVzZXQgRm9ybSBGdW5jdGlvblxyXG5mdW5jdGlvbiB0YXNrRm9ybVJlc2V0KHRpdGxlLCBzZWxlY3QsIGRhdGUsIHRleHQpIHtcclxuICAgIHRpdGxlLnZhbHVlID0gJydcclxuICAgIHNlbGVjdC52YWx1ZSA9ICcnXHJcbiAgICBkYXRlLnZhbHVlID0gJydcclxuICAgIHRleHQudmFsdWUgPSAnJ1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyBEaXNwbGF5IEZ1bmN0aW9uIGZvciB0aGUgVG9kbyBGb3JtIG9uIFN1Ym1pdFxyXG5cclxuLy8gZnVuY3Rpb24gdGFza0Rpc3BsYXlGb3JtKGkpIHtcclxuXHJcbi8vICAgICBsZXQgcHJvamVjdEFyciA9IHByb2plY3QuYWxsUHJvamVjdHNbaV0udG9kbztcclxuLy8gICAgIGxldCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LmFsbFByb2plY3RzW2ldLnRpdGxlO1xyXG5cclxuXHJcblxyXG4vLyAgICAgZm9yIChpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gICAgICAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbi8vICAgICAgICAgY29udGVudERpdi5hcHBlbmQodG9kb0Rpdik7XHJcbi8vICAgICAgICAgbGV0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuLy8gICAgICAgICB0b2RvRGl2LmFwcGVuZChoNCk7XHJcbi8vICAgICAgICAgbGV0IHNwYW5QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4vLyAgICAgICAgIHRvZG9EaXYuYXBwZW5kKHNwYW5QKTtcclxuLy8gICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuLy8gICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2NhcmRTcGFuJylcclxuLy8gICAgICAgICB0b2RvRGl2LmFwcGVuZChwKTtcclxuLy8gICAgICAgICBsZXQgc3BhbkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbi8vICAgICAgICAgdG9kb0Rpdi5hcHBlbmQoc3BhbkRhdGUpO1xyXG4vLyAgICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuLy8gICAgICAgICB0b2RvRGl2LmFwcGVuZChkZWxldGVCdXR0b24pO1xyXG4vLyAgICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcclxuLy8gICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gcHJvamVjdFRpdGxlO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vICAgICAgICAgcmVtb3ZlVGFzayhkZWxldGVCdXR0b24sIHByb2plY3RBcnIsIGkpXHJcbi8vICAgICAgICAgYnV0dG9uVGFza0FkZChkZWxldGVCdXR0b24pXHJcbi8vICAgICAgICAgbW91c2VPdmVyKGRlbGV0ZUJ1dHRvbik7XHJcblxyXG4vLyAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XHJcblxyXG5cclxuLy8gICAgICAgICAgICAgc3dpdGNoIChrKSB7XHJcbi8vICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaDQudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLnRpdGxlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHNwYW5QLmlubmVySFRNTCA9IHByb2plY3RBcnJbaV0ucHJpb3JpdHk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0uZGVzY3JpcHRpb247XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgc3BhbkRhdGUudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLmRhdGU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcblxyXG5cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIERpc3BsYXkgRnVuY3Rpb24gZm9yIHRoZSBtYWluIGgzIGV2ZW50bGlzdG5lclxyXG5cclxuZnVuY3Rpb24gdGFza0Rpc3BsYXlEaXYoaSkge1xyXG5cclxuXHJcbiAgICBsZXQgcHJvamVjdEFyciA9IHByb2plY3QuYWxsUHJvamVjdHNbaV0udG9kb1xyXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IHByb2plY3QuYWxsUHJvamVjdHNbaV0udGl0bGVcclxuXHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgICAgICBjb250ZW50RGl2LmFwcGVuZCh0b2RvRGl2KTtcclxuICAgICAgICBsZXQgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kKGg0KVxyXG4gICAgICAgIGxldCBzcGFuUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZChzcGFuUClcclxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2NhcmRTcGFuJylcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZChwKVxyXG4gICAgICAgIGxldCBzcGFuRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZChzcGFuRGF0ZSlcclxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZChkZWxldGVCdXR0b24pXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBwcm9qZWN0VGl0bGU7XHJcblxyXG5cclxuXHJcbiAgICAgICAgcmVtb3ZlVGFzayhkZWxldGVCdXR0b24sIHByb2plY3RBcnIsIGkpO1xyXG4gICAgICAgIGJ1dHRvblRhc2tBZGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgbW91c2VPdmVyKGRlbGV0ZUJ1dHRvbik7XHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoaykge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGg0LnRleHRDb250ZW50ID0gcHJvamVjdEFycltpXS50aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzcGFuUC5pbm5lckhUTUwgPSBwcm9qZWN0QXJyW2ldLnByaW9yaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW5EYXRlLnRleHRDb250ZW50ID0gcHJvamVjdEFycltpXS5kYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1vdXNlT3ZlcihidXR0b24sKSB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZGVsZXRlJyk7XHJcblxyXG4gICAgfSk7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdkZWxldGUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBidXR0b247XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChzcGFuLCBoMikge1xyXG4gICAgbGV0IHByb2plY3RBcnIgPSBwcm9qZWN0LmFsbFByb2plY3RzXHJcbiAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBoMi50ZXh0Q29udGVudCA9ICcnXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHByb2plY3RBcnJbaV0udGl0bGVcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyh0aXRsZSArIFwiWFwiKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnIpXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0QXJyLnNwbGljZShpLCAxKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVGFzayhidXR0b24sIGFyciwgaSkge1xyXG5cclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJ1xyXG5cclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykpIHtcclxuXHJcbiAgICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn07XHJcblxyXG5mdW5jdGlvbiBidXR0b25UYXNrQWRkKGJ1dHRvbiwpIHtcclxuXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHByb2plY3RBcnIgPSBwcm9qZWN0LmFsbFByb2plY3RzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHByb2plY3RBcnJbaV0udGl0bGVcclxuXHJcbiAgICAgICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHRpdGxlKSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0YXNrRGlzcGxheURpdihpKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IHByb2plY3RGb3JtTWFrZXIsIHRvZG9Gb3JtLCBwb3B1cFByb2plY3REaXYsIGNvbnRlbnREaXYsIHBvcHVwRGl2IH1cclxuXHJcblxyXG5cclxuXHJcbiIsImNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnRvZG8gPSBbXTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbmV3UHJvamVjdCh0aXRsZSkge1xyXG4gICAgICAgIGxldCBwID0gbmV3IFByb2plY3QodGl0bGUpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwKTtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsUHJvamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG51bWJlck9mUHJvamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdHMoKTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGRhdGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9