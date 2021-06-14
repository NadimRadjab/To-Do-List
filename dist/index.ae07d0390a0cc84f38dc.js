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

        // todoForm.setAttribute('data-number', e.target.dataset.number);

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

        e.currentTarget.classList.toggle('active')
        // if (e.currentTarget.classList.contains('active')) {

        // }

        // Target the  h3 siblings
        let siblings = getSiblings(e.currentTarget);
        let siblingText = siblings.map(e => e.classList.remove('active'));

        contentDiv.innerHTML = ''
        let projectArr = _projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects
        console.log(projectArr)
        for (let i = 0; i < projectArr.length; i++) {
            let title = projectArr[i].title



            if (e.target.textContent === title) {


                if (e.target.classList.contains('active')) {
                    console.log(i)
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

// function taskDisplayForm(item) {

//     let projectArr = project.allProjects[item.dataset.number].todo

//     const todoDiv = document.createElement('div');
//     todoDiv.classList.add('card');
//     contentDiv.append(todoDiv);

//     let h4 = document.createElement('h4');
//     todoDiv.append(h4)
//     let spanP = document.createElement('span');
//     todoDiv.append(spanP)
//     let p = document.createElement('p');
//     todoDiv.append(p)
//     let spanDate = document.createElement('span');
//     todoDiv.append(spanDate)
//     let deleteButton = document.createElement('button')
//     deleteButton.textContent = 'delete'
//     todoDiv.append(deleteButton)


//     mouseOver(deleteButton);


//     for (let i = 0; i < projectArr.length; i++) {



//         // removeTask(deleteButton, projectArr, i)




//         for (let k = 0; k < 4; k++) {

//             switch (k) {
//                 case 0:
//                     h4.textContent = projectArr[i].title
//                     break;
//                 case 1:
//                     spanP.innerHTML = projectArr[i].priority
//                     break;
//                 case 2:
//                     p.textContent = projectArr[i].description
//                     break;
//                 case 3:
//                     spanDate.textContent = projectArr[i].dueDate
//                     break;

//             }
//         }

//     }
// }

// Display Function for the main h3 eventlistner

// function taskDisplayDiv(item) {

//     let projectArr = project.allProjects[item.dataset.number].todo


//     for (let i = 0; i < projectArr.length; i++) {

//         const todoDiv = document.createElement('div');
//         todoDiv.classList.add('card');
//         contentDiv.append(todoDiv);
//         let h4 = document.createElement('h4');
//         todoDiv.append(h4)
//         let spanP = document.createElement('span');
//         todoDiv.append(spanP)
//         let p = document.createElement('p');
//         todoDiv.append(p)
//         let spanDate = document.createElement('span');
//         todoDiv.append(spanDate)
//         let deleteButton = document.createElement('button')
//         todoDiv.append(deleteButton)
//         deleteButton.textContent = 'Delete'

//         mouseOver(deleteButton);

//         // removeTask(deleteButton, projectArr, i)
//         deleteButton.addEventListener('click', (e) => {
//             if (e.target.classList.contains('delete')) {
//                 projectArr.splice(i, 1)
//             }

//             console.log(projectArr)
//         })
//         removeDiv(deleteButton)

//         for (let k = 0; k < 4; k++) {


//             switch (k) {
//                 case 0:
//                     h4.textContent = projectArr[i].title
//                     break;
//                 case 1:
//                     spanP.innerHTML = projectArr[i].priority
//                     break;
//                 case 2:
//                     p.textContent = projectArr[i].description
//                     break;
//                 case 3:
//                     spanDate.textContent = projectArr[i].dueDate
//                     break;

//             }
//         }

//     }

// }




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

        console.log(_projectClass__WEBPACK_IMPORTED_MODULE_1__.project.allProjects);

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
                console.log(projectArr);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb3BhZ2UvLi9zcmMvZG9tZnVuYy5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9kb21zdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9wYWdlLy4vc3JjL3Byb2plY3RDbGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCMkM7O0FBRTVDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWdCOztBQUV4QixLQUFLOzs7OztBQUtMOzs7QUFHcUI7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNrQjs7O0FBR3ZDLHFEQUFVO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGtDO0FBQ1k7OztBQUc5QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsZUFBZSxzRUFBMkI7QUFDMUM7QUFDQSxLQUFLOzs7QUFH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OztBQUVBOztBQUVBOzs7OztBQUtBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBOztBQUVBLHlCQUF5Qiw4REFBbUI7QUFDNUMsdUJBQXVCLHVCQUF1QjtBQUM5Qzs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7O0FBWTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5aUIzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7QUFLQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJmaWxlIjoiaW5kZXguYWUwN2QwMzkwYTBjYzg0ZjM4ZGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBkb21GdW4gPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9uTWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGl2TWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICAgICAgcmV0dXJuIGRpdlxyXG4gICAgfTtcclxuICAgIGNvbnN0IGgyTWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgaDIudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGgyLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiBoMlxyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaDJNYWtlcixcclxuICAgICAgICBkaXZNYWtlcixcclxuICAgICAgICBidXR0b25NYWtlcixcclxuICAgIH1cclxuXHJcblxyXG59KSgpO1xyXG5leHBvcnQgeyBkb21GdW4gfSIsImltcG9ydCB7IHByb2plY3RGb3JtTWFrZXIgfSBmcm9tICcuL3Byb2plY3QnXHJcblxyXG5jb25zdCBidG5Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RCdG4nKTtcclxuY29uc3QgcG9wdXBQcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwUHJvamVjdCcpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgICBidG5Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwUHJvamVjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgcHJvamVjdEZvcm1NYWtlcigpXHJcblxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBhZGRQcm9qZWN0IH1cclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tICcuL2RvbXN0dWZmJ1xyXG5cclxuXHJcbmFkZFByb2plY3QoKVxyXG4vLyBjb25zb2xlLmxvZygnaGVsbG8nKVxyXG5cclxuXHJcbiIsImltcG9ydCB7IGRvbUZ1biB9IGZyb20gJy4vZG9tZnVuYydcclxuaW1wb3J0IHsgVG9kbywgcHJvamVjdCB9IGZyb20gJy4vcHJvamVjdENsYXNzJ1xyXG5cclxuXHJcbi8vIERvbSBTZWxlY3Rpb25zXHJcbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG5jb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXInKTtcclxuXHJcbmNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlcycpO1xyXG5cclxuY29uc3QgcG9wdXBQcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwUHJvamVjdCcpO1xyXG5cclxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuXHJcbmNvbnN0IHBvcHVwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwVGFzaycpO1xyXG5cclxuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb2Zvcm0nKTtcclxuXHJcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlJyk7XHJcblxyXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjbG9zZVBvcHVwcygpXHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuLy8gQ2xvc2UgUG9wIFVwcyBGdW5jdGlvblxyXG5mdW5jdGlvbiBjbG9zZVBvcHVwcygpIHtcclxuICAgIHBvcHVwRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBwb3B1cFByb2plY3REaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLyBGdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBmcm9tXHJcbmZ1bmN0aW9uIHByb2plY3RGb3JtTWFrZXIoKSB7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnc3VibWl0Jyk7XHJcblxyXG5cclxuICAgIC8vIEV2ZW50IGxpc3RuZXJcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGZvcm1BY3Rpb24odGV4dC52YWx1ZSk7XHJcbiAgICAgICAgZm9ybS5yZW1vdmUoKTtcclxuICAgICAgICBjbG9zZVBvcHVwcygpXHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnVGl0bGUnKTtcclxuXHJcblxyXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XHJcblxyXG4gICAgcG9wdXBQcm9qZWN0RGl2LmFwcGVuZChmb3JtKTtcclxuICAgIGZvcm0uYXBwZW5kKHRleHQpO1xyXG4gICAgZm9ybS5hcHBlbmQoc3VibWl0KTtcclxuXHJcbn1cclxuXHJcblxyXG4vLyBGb3JtIEFjdGlvbiBmdW5jdGlvbiBcclxuZnVuY3Rpb24gZm9ybUFjdGlvbih0ZXh0KSB7XHJcbiAgICBsZXQgbnVtYmVyID0gMFxyXG5cclxuXHJcbiAgICAvLyBhZGRzIDEgdG8gYSBudW1iZXIgZm9yIGV2ZXJ5IHByb2plY3RcclxuICAgIGxldCB0ZXN0ID0gcHJvamVjdC5hbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIG51bWJlcisrXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBsZXQgYnV0dG9uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEJ1dHRvbicpO1xyXG4gICAgYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgLy8gdG9kb0Zvcm0uc2V0QXR0cmlidXRlKCdkYXRhLW51bWJlcicsIGUudGFyZ2V0LmRhdGFzZXQubnVtYmVyKTtcclxuXHJcbiAgICAgICAgcG9wdXBEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0pXHJcblxyXG4gICAgLy8gTWFpbiBoMyBob2xkcyB0aGUgcHJvamVjdCB0aXRsZVxyXG5cclxuICAgIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBoMy50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBoMy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtYmVyJywgbnVtYmVyKVxyXG4gICAgcHJvamVjdERpdi5hcHBlbmQoaDMpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gaDMgZXZlbnQgbGlzdG5lciBcclxuXHJcbiAgICBoMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblxyXG5cclxuICAgICAgICBidXR0b25BZGQuc2V0QXR0cmlidXRlKCdkYXRhLW51bWJlcicsIGUudGFyZ2V0LmRhdGFzZXQubnVtYmVyKTtcclxuXHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICAgICAgLy8gaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcblxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gVGFyZ2V0IHRoZSAgaDMgc2libGluZ3NcclxuICAgICAgICBsZXQgc2libGluZ3MgPSBnZXRTaWJsaW5ncyhlLmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCBzaWJsaW5nVGV4dCA9IHNpYmxpbmdzLm1hcChlID0+IGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG5cclxuICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgbGV0IHByb2plY3RBcnIgPSBwcm9qZWN0LmFsbFByb2plY3RzXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEFycilcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRpdGxlID0gcHJvamVjdEFycltpXS50aXRsZVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IHRpdGxlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaSlcclxuICAgICAgICAgICAgICAgICAgICB0YXNrRGlzcGxheURpdihpLClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Zvcm0uY2xhc3NOYW1lID0gdGl0bGVcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBBZGRzIHRoZSBQcm9qZWN0IHRvIHRoZSBQcm9qZWN0IENsYXNzIENvbnRhaW5lclxyXG4gICAgcHJvamVjdC5uZXdQcm9qZWN0KHRleHQpXHJcblxyXG5cclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdG8gZ2V0IHNpYmxpbmdzIG9mIGFuIGVsZW1lbnRcclxubGV0IGdldFNpYmxpbmdzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vIGZvciBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICBsZXQgc2libGluZ3MgPSBbXTtcclxuICAgIC8vIGlmIG5vIHBhcmVudCwgcmV0dXJuIG5vIHNpYmxpbmdcclxuICAgIGlmICghZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xyXG4gICAgfVxyXG4gICAgLy8gZmlyc3QgY2hpbGQgb2YgdGhlIHBhcmVudCBub2RlXHJcbiAgICBsZXQgc2libGluZyA9IGUucGFyZW50Tm9kZS5maXJzdENoaWxkO1xyXG5cclxuICAgIC8vIGNvbGxlY3Rpbmcgc2libGluZ3NcclxuICAgIHdoaWxlIChzaWJsaW5nKSB7XHJcbiAgICAgICAgaWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZSkge1xyXG4gICAgICAgICAgICBzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNpYmxpbmdzO1xyXG59O1xyXG5cclxuXHJcbi8vIFRvZG9Gb3JtIEV2ZW50bGlzbnRlclxyXG50b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGFza0Zvcm1BY3Rpb24oKTtcclxuICAgIGNsb3NlUG9wdXBzKCk7XHJcblxyXG5cclxufSlcclxuXHJcblxyXG4vLyBUb2RvRm9ybSBJbnB1dHMgRnVuY3Rpb24gYW5kIG5ldyBUb2RvIENyZWF0aW9uXHJcbmZ1bmN0aW9uIHRhc2tGb3JtQWN0aW9uKCkge1xyXG5cclxuXHJcbiAgICBsZXQgYnV0dG9uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEJ1dHRvbicpO1xyXG4gICAgYnV0dG9uQWRkLnNldEF0dHJpYnV0ZSgnZGF0YS1udW1iZXInLCAwKVxyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZUlucHV0Jyk7XHJcbiAgICBjb25zdCBzZWxlY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xyXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcclxuICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xyXG5cclxuXHJcblxyXG4gICAgbGV0IHByb2plY3RBcnIgPSBwcm9qZWN0LmFsbFByb2plY3RzXHJcblxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCB0aXRsZSA9IHByb2plY3RBcnJbaV0udGl0bGVcclxuICAgICAgICBpZiAodG9kb0Zvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKHRpdGxlKSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHByb2plY3QuYWxsUHJvamVjdHNbaV0udG9kby5wdXNoKG5ldyBUb2RvKHRpdGxlSW5wdXQudmFsdWUsIHNlbGVjdElucHV0LnZhbHVlLCB0ZXh0SW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSkpO1xyXG5cclxuICAgICAgICAgICAgdGFza0Rpc3BsYXlGb3JtKGkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdGFza0Rpc3BsYXlGb3JtKHRvZG9Gb3JtKTtcclxuICAgIHRhc2tGb3JtUmVzZXQodGl0bGVJbnB1dCwgc2VsZWN0SW5wdXQsIGRhdGVJbnB1dCwgdGV4dElucHV0KVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIFJlc2V0IEZvcm0gRnVuY3Rpb25cclxuZnVuY3Rpb24gdGFza0Zvcm1SZXNldCh0aXRsZSwgc2VsZWN0LCBkYXRlLCB0ZXh0KSB7XHJcbiAgICB0aXRsZS52YWx1ZSA9ICcnXHJcbiAgICBzZWxlY3QudmFsdWUgPSAnJ1xyXG4gICAgZGF0ZS52YWx1ZSA9ICcnXHJcbiAgICB0ZXh0LnZhbHVlID0gJydcclxufVxyXG5cclxuXHJcblxyXG4vLyBEaXNwbGF5IEZ1bmN0aW9uIGZvciB0aGUgVG9kbyBGb3JtIG9uIFN1Ym1pdFxyXG5cclxuLy8gZnVuY3Rpb24gdGFza0Rpc3BsYXlGb3JtKGl0ZW0pIHtcclxuXHJcbi8vICAgICBsZXQgcHJvamVjdEFyciA9IHByb2plY3QuYWxsUHJvamVjdHNbaXRlbS5kYXRhc2V0Lm51bWJlcl0udG9kb1xyXG5cclxuLy8gICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4vLyAgICAgY29udGVudERpdi5hcHBlbmQodG9kb0Rpdik7XHJcblxyXG4vLyAgICAgbGV0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuLy8gICAgIHRvZG9EaXYuYXBwZW5kKGg0KVxyXG4vLyAgICAgbGV0IHNwYW5QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4vLyAgICAgdG9kb0Rpdi5hcHBlbmQoc3BhblApXHJcbi8vICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuLy8gICAgIHRvZG9EaXYuYXBwZW5kKHApXHJcbi8vICAgICBsZXQgc3BhbkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbi8vICAgICB0b2RvRGl2LmFwcGVuZChzcGFuRGF0ZSlcclxuLy8gICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4vLyAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ2RlbGV0ZSdcclxuLy8gICAgIHRvZG9EaXYuYXBwZW5kKGRlbGV0ZUJ1dHRvbilcclxuXHJcblxyXG4vLyAgICAgbW91c2VPdmVyKGRlbGV0ZUJ1dHRvbik7XHJcblxyXG5cclxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xyXG5cclxuXHJcblxyXG4vLyAgICAgICAgIC8vIHJlbW92ZVRhc2soZGVsZXRlQnV0dG9uLCBwcm9qZWN0QXJyLCBpKVxyXG5cclxuXHJcblxyXG5cclxuLy8gICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xyXG5cclxuLy8gICAgICAgICAgICAgc3dpdGNoIChrKSB7XHJcbi8vICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaDQudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLnRpdGxlXHJcbi8vICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgc3BhblAuaW5uZXJIVE1MID0gcHJvamVjdEFycltpXS5wcmlvcml0eVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLmRlc2NyaXB0aW9uXHJcbi8vICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgc3BhbkRhdGUudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLmR1ZURhdGVcclxuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBEaXNwbGF5IEZ1bmN0aW9uIGZvciB0aGUgbWFpbiBoMyBldmVudGxpc3RuZXJcclxuXHJcbi8vIGZ1bmN0aW9uIHRhc2tEaXNwbGF5RGl2KGl0ZW0pIHtcclxuXHJcbi8vICAgICBsZXQgcHJvamVjdEFyciA9IHByb2plY3QuYWxsUHJvamVjdHNbaXRlbS5kYXRhc2V0Lm51bWJlcl0udG9kb1xyXG5cclxuXHJcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuXHJcbi8vICAgICAgICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4vLyAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kKHRvZG9EaXYpO1xyXG4vLyAgICAgICAgIGxldCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbi8vICAgICAgICAgdG9kb0Rpdi5hcHBlbmQoaDQpXHJcbi8vICAgICAgICAgbGV0IHNwYW5QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4vLyAgICAgICAgIHRvZG9EaXYuYXBwZW5kKHNwYW5QKVxyXG4vLyAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4vLyAgICAgICAgIHRvZG9EaXYuYXBwZW5kKHApXHJcbi8vICAgICAgICAgbGV0IHNwYW5EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4vLyAgICAgICAgIHRvZG9EaXYuYXBwZW5kKHNwYW5EYXRlKVxyXG4vLyAgICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4vLyAgICAgICAgIHRvZG9EaXYuYXBwZW5kKGRlbGV0ZUJ1dHRvbilcclxuLy8gICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJ1xyXG5cclxuLy8gICAgICAgICBtb3VzZU92ZXIoZGVsZXRlQnV0dG9uKTtcclxuXHJcbi8vICAgICAgICAgLy8gcmVtb3ZlVGFzayhkZWxldGVCdXR0b24sIHByb2plY3RBcnIsIGkpXHJcbi8vICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuLy8gICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykpIHtcclxuLy8gICAgICAgICAgICAgICAgIHByb2plY3RBcnIuc3BsaWNlKGksIDEpXHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnIpXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgICAgICByZW1vdmVEaXYoZGVsZXRlQnV0dG9uKVxyXG5cclxuLy8gICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xyXG5cclxuXHJcbi8vICAgICAgICAgICAgIHN3aXRjaCAoaykge1xyXG4vLyAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGg0LnRleHRDb250ZW50ID0gcHJvamVjdEFycltpXS50aXRsZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHNwYW5QLmlubmVySFRNTCA9IHByb2plY3RBcnJbaV0ucHJpb3JpdHlcclxuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuLy8gICAgICAgICAgICAgICAgICAgICBwLnRleHRDb250ZW50ID0gcHJvamVjdEFycltpXS5kZXNjcmlwdGlvblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHNwYW5EYXRlLnRleHRDb250ZW50ID0gcHJvamVjdEFycltpXS5kdWVEYXRlXHJcbi8vICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgIH1cclxuXHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRhc2tEaXNwbGF5Rm9ybShpKSB7XHJcblxyXG5cclxuICAgIGxldCBwcm9qZWN0QXJyID0gcHJvamVjdC5hbGxQcm9qZWN0c1tpXS50b2RvO1xyXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IHByb2plY3QuYWxsUHJvamVjdHNbaV0udGl0bGU7XHJcblxyXG4gICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICBjb250ZW50RGl2LmFwcGVuZCh0b2RvRGl2KTtcclxuICAgIGxldCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICB0b2RvRGl2LmFwcGVuZChoNCk7XHJcbiAgICBsZXQgc3BhblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0b2RvRGl2LmFwcGVuZChzcGFuUCk7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRvZG9EaXYuYXBwZW5kKHApO1xyXG4gICAgbGV0IHNwYW5EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdG9kb0Rpdi5hcHBlbmQoc3BhbkRhdGUpO1xyXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdG9kb0Rpdi5hcHBlbmQoZGVsZXRlQnV0dG9uKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xyXG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IHByb2plY3RUaXRsZTtcclxuXHJcblxyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgIHJlbW92ZVRhc2soZGVsZXRlQnV0dG9uLCBwcm9qZWN0QXJyLCBpKVxyXG4gICAgICAgIGJ1dHRvblRhc2tBZGQoZGVsZXRlQnV0dG9uKVxyXG5cclxuICAgICAgICBtb3VzZU92ZXIoZGVsZXRlQnV0dG9uKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcclxuXHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGspIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBoNC50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0udGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhblAuaW5uZXJIVE1MID0gcHJvamVjdEFycltpXS5wcmlvcml0eTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBwLnRleHRDb250ZW50ID0gcHJvamVjdEFycltpXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBzcGFuRGF0ZS50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0uZHVlRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGFza0Rpc3BsYXlEaXYoaSkge1xyXG5cclxuXHJcbiAgICBsZXQgcHJvamVjdEFyciA9IHByb2plY3QuYWxsUHJvamVjdHNbaV0udG9kb1xyXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IHByb2plY3QuYWxsUHJvamVjdHNbaV0udGl0bGVcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnIpXHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgICAgICBjb250ZW50RGl2LmFwcGVuZCh0b2RvRGl2KTtcclxuICAgICAgICBsZXQgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kKGg0KVxyXG4gICAgICAgIGxldCBzcGFuUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZChzcGFuUClcclxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZChwKVxyXG4gICAgICAgIGxldCBzcGFuRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZChzcGFuRGF0ZSlcclxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZChkZWxldGVCdXR0b24pXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IHByb2plY3RUaXRsZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC5hbGxQcm9qZWN0cyk7XHJcblxyXG4gICAgICAgIHJlbW92ZVRhc2soZGVsZXRlQnV0dG9uLCBwcm9qZWN0QXJyLCBpKTtcclxuICAgICAgICBidXR0b25UYXNrQWRkKGRlbGV0ZUJ1dHRvbik7XHJcblxyXG4gICAgICAgIG1vdXNlT3ZlcihkZWxldGVCdXR0b24pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChrKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaDQudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW5QLmlubmVySFRNTCA9IHByb2plY3RBcnJbaV0ucHJpb3JpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbkRhdGUudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyW2ldLmR1ZURhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbW91c2VPdmVyKGJ1dHRvbiwpIHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdkZWxldGUnKTtcclxuXHJcbiAgICB9KTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2RlbGV0ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxufTtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhc2soYnV0dG9uLCBhcnIsIGkpIHtcclxuXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJydcclxuXHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKSB7XHJcblxyXG4gICAgICAgICAgICBhcnIuc3BsaWNlKGksIDEpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59O1xyXG5cclxuZnVuY3Rpb24gYnV0dG9uVGFza0FkZChidXR0b24pIHtcclxuXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgcHJvamVjdEFyciA9IHByb2plY3QuYWxsUHJvamVjdHNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRpdGxlID0gcHJvamVjdEFycltpXS50aXRsZVxyXG5cclxuICAgICAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnModGl0bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0YXNrRGlzcGxheURpdihpKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgcHJvamVjdEZvcm1NYWtlciB9XHJcblxyXG5cclxuXHJcblxyXG4iLCJjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy50b2RvID0gW107XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgUHJvamVjdHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld1Byb2plY3QodGl0bGUpIHtcclxuICAgICAgICBsZXQgcCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocCk7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFsbFByb2plY3RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBudW1iZXJPZlByb2plY3RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmxlbmd0aDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3RzKCk7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVG9kbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==