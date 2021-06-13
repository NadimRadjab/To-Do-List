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


let project = new _projectClass__WEBPACK_IMPORTED_MODULE_1__.Projects();








const mainDiv = document.querySelector('.main');
const sideBar = document.querySelector('.sideBar');
const projectDiv = document.querySelector('#projectTitles');
const btnProject = document.querySelector('#projectBtn');
const popupProjectDiv = document.querySelector('.popupProject');
const contentDiv = document.querySelector('.content')

const popupDiv = document.querySelector('.popupTask');
const todoForm = document.querySelector('#todoform');

const closeBtn = document.querySelector('#close');



const titleInput = document.querySelector('#titleInput');
const selectInput = document.querySelector('#priority');
const dateInput = document.querySelector('#date');
const textInput = document.querySelector('#description');





todoForm.addEventListener('submit', (e) => {
    project.allProjects[todoForm.dataset.number].todo.push(new _projectClass__WEBPACK_IMPORTED_MODULE_1__.Todo(titleInput.value, selectInput.value, textInput.value, dateInput.value))
    e.preventDefault();
    taskDisplay(todoForm);
    // console.log(project.allProjects)


})





closeBtn.addEventListener('click', (e) => {
    popupDiv.style.display = 'none';

});





function formMaker() {

    const form = document.createElement('form');
    form.setAttribute('action', 'submit');


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        formAction(text.value);
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

    let number = 0

    project.allProjects.forEach(project => {
        number++
    })

    let buttonAdd = document.querySelector('#addButton');
    buttonAdd.addEventListener('click', (e) => {
        todoForm.setAttribute('data-number', e.target.dataset.number);

        popupDiv.style.display = 'flex';
    })

    let h3 = document.createElement('h3');
    h3.textContent = text;
    h3.setAttribute('data-number', number)

    projectDiv.append(h3);






    h3.addEventListener('click', (e) => {

        e.currentTarget.classList.add('active')
        // contentDiv.innerHTML = project.allProjects[e.target.dataset.number].todo

        buttonAdd.setAttribute('data-number', e.target.dataset.number);
        // myFunction()

        if (e.currentTarget.classList.contains('active')) {
            taskDisplay(e.target)
        }

        let siblings = getSiblings(e.currentTarget);
        let siblingText = siblings.map(e => e.classList.remove('active'));





    })

    btnProject.disabled = false;
    project.newProject(text)
    // project.allProjects.forEach(project => {

    // })


}


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


// function taskCreation() {
//     const todoDiv = document.createElement('div')
//     todoDiv.classList.add('card')
//     contentDiv.append(todoDiv)

//     let h4 = document.createElement('h4');
//     todoDiv.append(h4)
//     let spanP = document.createElement('span');
//     todoDiv.append(spanP)
//     let p = document.createElement('p');
//     todoDiv.append(p)
//     let spanDate = document.createElement('span');
//     todoDiv.append(spanDate)


// }


// function myFunction() {
//     let div = document.querySelector('.card')
//     div.remove();
// }


function taskDisplay(item) {

    let projectArr = project.allProjects[item.dataset.number].todo

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('card')
    contentDiv.append(todoDiv)

    let h4 = document.createElement('h4');
    todoDiv.append(h4)
    let spanP = document.createElement('span');
    todoDiv.append(spanP)
    let p = document.createElement('p');
    todoDiv.append(p)
    let spanDate = document.createElement('span');
    todoDiv.append(spanDate)
    console.log(projectArr)


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb3BhZ2UvLi9zcmMvZG9tZnVuYy5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9kb21zdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9wYWdlLy4vc3JjL3Byb2plY3RDbGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCb0M7O0FBRXJDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVM7QUFDakI7QUFDQSxLQUFLOzs7OztBQUtMOzs7QUFHZTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CTTtBQUNZO0FBQ007O0FBRXZDLCtDQUFJOztBQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNzQjs7OztBQUl4RCxpQkFBaUIsa0RBQU87QUFDeEIsa0JBQWtCLGtEQUFPOzs7QUFHekIsa0JBQWtCLG1EQUFROzs7Ozs7Ozs7QUFTMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQSwrREFBK0QsK0NBQUk7QUFDbkU7QUFDQTtBQUNBOzs7QUFHQSxDQUFDOzs7Ozs7QUFNRDtBQUNBOztBQUVBLENBQUM7Ozs7OztBQU1EOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7O0FBTUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsUUFBUTs7O0FBR1I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxtQkFBbUIsdUJBQXVCOztBQUUxQyx1QkFBdUIsT0FBTzs7O0FBRzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQm9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1FiO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6ImluZGV4LjUyODI4NGY4YTgwMDZiNzAzYzA3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgZG9tRnVuID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbk1ha2VyID0gKHRleHQgPSAnJywgc3R5bGUpID0+IHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvblxyXG4gICAgfTtcclxuICAgIGNvbnN0IGRpdk1ha2VyID0gKHRleHQgPSAnJywgc3R5bGUpID0+IHtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiBkaXZcclxuICAgIH07XHJcbiAgICBjb25zdCBoMk1ha2VyID0gKHRleHQgPSAnJywgc3R5bGUpID0+IHtcclxuICAgICAgICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGgyLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICBoMi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgICAgICByZXR1cm4gaDJcclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGgyTWFrZXIsXHJcbiAgICAgICAgZGl2TWFrZXIsXHJcbiAgICAgICAgYnV0dG9uTWFrZXIsXHJcbiAgICB9XHJcblxyXG5cclxufSkoKTtcclxuZXhwb3J0IHsgZG9tRnVuIH0iLCJpbXBvcnQgeyBmb3JtTWFrZXIgfSBmcm9tICcuL3Byb2plY3QnXHJcblxyXG5jb25zdCBidG5Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RCdG4nKTtcclxuY29uc3QgcG9wdXBQcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwUHJvamVjdCcpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHRlc3QoKSB7XHJcbiAgICBidG5Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwUHJvamVjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgZm9ybU1ha2VyKClcclxuICAgICAgICBidG5Qcm9qZWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgdGVzdCB9XHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyB0ZXN0IH0gZnJvbSAnLi9kb21zdHVmZidcclxuaW1wb3J0IHsgcHJvamVjdEFyciB9IGZyb20gJy4vcHJvamVjdCc7XHJcblxyXG50ZXN0KClcclxuXHJcbi8vIGNvbnNvbGUubG9nKCdoZWxsbycpXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgZG9tRnVuIH0gZnJvbSAnLi9kb21mdW5jJ1xyXG5pbXBvcnQgeyBQcm9qZWN0LCBUb2RvLCBQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdENsYXNzJ1xyXG5cclxuXHJcblxyXG5jb25zdCB0ZXN0ID0gbmV3IFByb2plY3QoJ1llcycpO1xyXG5jb25zdCB0ZXN0MiA9IG5ldyBQcm9qZWN0KCdubycpO1xyXG5cclxuXHJcbmxldCBwcm9qZWN0ID0gbmV3IFByb2plY3RzKCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbmNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZUJhcicpO1xyXG5jb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZXMnKTtcclxuY29uc3QgYnRuUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0QnRuJyk7XHJcbmNvbnN0IHBvcHVwUHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cFByb2plY3QnKTtcclxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuXHJcbmNvbnN0IHBvcHVwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwVGFzaycpO1xyXG5jb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvZm9ybScpO1xyXG5cclxuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UnKTtcclxuXHJcblxyXG5cclxuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZUlucHV0Jyk7XHJcbmNvbnN0IHNlbGVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XHJcbmNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XHJcbmNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbnRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBwcm9qZWN0LmFsbFByb2plY3RzW3RvZG9Gb3JtLmRhdGFzZXQubnVtYmVyXS50b2RvLnB1c2gobmV3IFRvZG8odGl0bGVJbnB1dC52YWx1ZSwgc2VsZWN0SW5wdXQudmFsdWUsIHRleHRJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlKSlcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRhc2tEaXNwbGF5KHRvZG9Gb3JtKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QuYWxsUHJvamVjdHMpXHJcblxyXG5cclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBwb3B1cERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9ybU1ha2VyKCkge1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJ3N1Ym1pdCcpO1xyXG5cclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBmb3JtQWN0aW9uKHRleHQudmFsdWUpO1xyXG4gICAgICAgIGZvcm0ucmVtb3ZlKCk7XHJcblxyXG5cclxuICAgICAgICBwb3B1cFByb2plY3REaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKCduYW1lJywgJ1RpdGxlJyk7XHJcblxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xyXG5cclxuICAgIHBvcHVwUHJvamVjdERpdi5hcHBlbmQoZm9ybSk7XHJcbiAgICBmb3JtLmFwcGVuZCh0ZXh0KTtcclxuICAgIGZvcm0uYXBwZW5kKHN1Ym1pdCk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9ybUFjdGlvbih0ZXh0KSB7XHJcblxyXG4gICAgbGV0IG51bWJlciA9IDBcclxuXHJcbiAgICBwcm9qZWN0LmFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgbnVtYmVyKytcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRCdXR0b24nKTtcclxuICAgIGJ1dHRvbkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgdG9kb0Zvcm0uc2V0QXR0cmlidXRlKCdkYXRhLW51bWJlcicsIGUudGFyZ2V0LmRhdGFzZXQubnVtYmVyKTtcclxuXHJcbiAgICAgICAgcG9wdXBEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGgzLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIGgzLnNldEF0dHJpYnV0ZSgnZGF0YS1udW1iZXInLCBudW1iZXIpXHJcblxyXG4gICAgcHJvamVjdERpdi5hcHBlbmQoaDMpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgaDMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICAvLyBjb250ZW50RGl2LmlubmVySFRNTCA9IHByb2plY3QuYWxsUHJvamVjdHNbZS50YXJnZXQuZGF0YXNldC5udW1iZXJdLnRvZG9cclxuXHJcbiAgICAgICAgYnV0dG9uQWRkLnNldEF0dHJpYnV0ZSgnZGF0YS1udW1iZXInLCBlLnRhcmdldC5kYXRhc2V0Lm51bWJlcik7XHJcbiAgICAgICAgLy8gbXlGdW5jdGlvbigpXHJcblxyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICB0YXNrRGlzcGxheShlLnRhcmdldClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzaWJsaW5ncyA9IGdldFNpYmxpbmdzKGUuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgbGV0IHNpYmxpbmdUZXh0ID0gc2libGluZ3MubWFwKGUgPT4gZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgYnRuUHJvamVjdC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgcHJvamVjdC5uZXdQcm9qZWN0KHRleHQpXHJcbiAgICAvLyBwcm9qZWN0LmFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcblxyXG4gICAgLy8gfSlcclxuXHJcblxyXG59XHJcblxyXG5cclxubGV0IGdldFNpYmxpbmdzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vIGZvciBjb2xsZWN0aW5nIHNpYmxpbmdzXHJcbiAgICBsZXQgc2libGluZ3MgPSBbXTtcclxuICAgIC8vIGlmIG5vIHBhcmVudCwgcmV0dXJuIG5vIHNpYmxpbmdcclxuICAgIGlmICghZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xyXG4gICAgfVxyXG4gICAgLy8gZmlyc3QgY2hpbGQgb2YgdGhlIHBhcmVudCBub2RlXHJcbiAgICBsZXQgc2libGluZyA9IGUucGFyZW50Tm9kZS5maXJzdENoaWxkO1xyXG5cclxuICAgIC8vIGNvbGxlY3Rpbmcgc2libGluZ3NcclxuICAgIHdoaWxlIChzaWJsaW5nKSB7XHJcbiAgICAgICAgaWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZSkge1xyXG4gICAgICAgICAgICBzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNpYmxpbmdzO1xyXG59O1xyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHRhc2tDcmVhdGlvbigpIHtcclxuLy8gICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4vLyAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJylcclxuLy8gICAgIGNvbnRlbnREaXYuYXBwZW5kKHRvZG9EaXYpXHJcblxyXG4vLyAgICAgbGV0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuLy8gICAgIHRvZG9EaXYuYXBwZW5kKGg0KVxyXG4vLyAgICAgbGV0IHNwYW5QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4vLyAgICAgdG9kb0Rpdi5hcHBlbmQoc3BhblApXHJcbi8vICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuLy8gICAgIHRvZG9EaXYuYXBwZW5kKHApXHJcbi8vICAgICBsZXQgc3BhbkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbi8vICAgICB0b2RvRGl2LmFwcGVuZChzcGFuRGF0ZSlcclxuXHJcblxyXG4vLyB9XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gbXlGdW5jdGlvbigpIHtcclxuLy8gICAgIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpXHJcbi8vICAgICBkaXYucmVtb3ZlKCk7XHJcbi8vIH1cclxuXHJcblxyXG5mdW5jdGlvbiB0YXNrRGlzcGxheShpdGVtKSB7XHJcblxyXG4gICAgbGV0IHByb2plY3RBcnIgPSBwcm9qZWN0LmFsbFByb2plY3RzW2l0ZW0uZGF0YXNldC5udW1iZXJdLnRvZG9cclxuXHJcbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXHJcbiAgICBjb250ZW50RGl2LmFwcGVuZCh0b2RvRGl2KVxyXG5cclxuICAgIGxldCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICB0b2RvRGl2LmFwcGVuZChoNClcclxuICAgIGxldCBzcGFuUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRvZG9EaXYuYXBwZW5kKHNwYW5QKVxyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2RvRGl2LmFwcGVuZChwKVxyXG4gICAgbGV0IHNwYW5EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdG9kb0Rpdi5hcHBlbmQoc3BhbkRhdGUpXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyKVxyXG5cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcclxuXHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGspIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBoNC50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0udGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzcGFuUC5pbm5lckhUTUwgPSBwcm9qZWN0QXJyW2ldLnByaW9yaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBzcGFuRGF0ZS50ZXh0Q29udGVudCA9IHByb2plY3RBcnJbaV0uZHVlRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGZvcm1NYWtlciB9XHJcblxyXG5cclxuXHJcblxyXG4iLCJleHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMudG9kbyA9IFtdO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbmV3UHJvamVjdCh0aXRsZSkge1xyXG4gICAgICAgIGxldCBwID0gbmV3IFByb2plY3QodGl0bGUpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwKTtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsUHJvamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG51bWJlck9mUHJvamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9