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



const projectArr = [];

const mainDiv = document.querySelector('.main');
const sideBar = document.querySelector('.sideBar');
const projectDiv = document.querySelector('#projectTitles')
const btnProject = document.querySelector('#projectBtn');
const closeBtn = document.querySelector('#close')
const todoForm = document.querySelector('.popupTask');
const popupProjectDiv = document.querySelector('.popupProject');
todoForm.addEventListener('click', (e) => {
    e.preventDefault();
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
    h3.addEventListener('click', () => {
        mainDiv.innerHTML = h3.textContent
        mainDiv.append(buttonAdd)
    })

    // let deleteBtn = document.createElement('button');

    // deleteBtn.textContent = "Delete";
    // projectDiv.append(deleteBtn);



    let buttonAdd = document.createElement('button');
    buttonAdd.textContent = "Add a Task";
    buttonAdd.addEventListener('click', (e) => {
        console.log('hi')
        todoForm.style.display = 'flex';
    })


    // projectDiv.append(buttonAdd);


}



function formMaker() {



    // const projecForm = document.querySelector('#projectForm');
    // projecForm.addEventListener('submit', (e) => {

    //     e.preventDefault();


    //     formAction();
    //     popupProjectDiv.style.display = 'none'


    //     // let title = document.querySelector('#projectTitle');
    //     // // let value = title.value

    //     // btnProject.disabled = false;
    //     // projectArr.push(new Project(title.value));
    //     // console.log(projectArr)
    //     // console.log(title.value)



    // })



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
    projectArr.push(new _projectClass__WEBPACK_IMPORTED_MODULE_1__.Project(text.value));
    console.log(projectArr)
    console.log(text.value)

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
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
class Project {
    constructor(title) {
        this.title = title
        this.todo = [];

    }
    add(arr) {
        arr.push(this)
    }
}


class Todo {
    constructor(title, description, dueDate, prioriy) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.prioriy = prioriy
    }
    projectadd(todoArr) {
        todoArr.push(this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9kb21mdW5jLmpzIiwid2VicGFjazovL3RvZG9wYWdlLy4vc3JjL2RvbXN0dWZmLmpzIiwid2VicGFjazovL3RvZG9wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9wYWdlLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb3BhZ2UvLi9zcmMvcHJvamVjdENsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJvQzs7QUFFckM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBUztBQUNqQjtBQUNBLEtBQUs7Ozs7O0FBS0w7OztBQUdlOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJNO0FBQ1k7QUFDTTs7QUFFdkMsK0NBQUk7O0FBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ1k7O0FBRTlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBLENBQUM7OztBQUdEOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOzs7QUFHQTs7OztBQUlBOzs7O0FBSUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLFFBQVE7Ozs7QUFJUjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdCQUF3QixrREFBTztBQUMvQjtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckpiO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguNTE1NThiNzdkOWY1NzA4N2RkMjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBkb21GdW4gPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9uTWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGl2TWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICAgICAgcmV0dXJuIGRpdlxyXG4gICAgfTtcclxuICAgIGNvbnN0IGgyTWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgaDIudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGgyLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiBoMlxyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaDJNYWtlcixcclxuICAgICAgICBkaXZNYWtlcixcclxuICAgICAgICBidXR0b25NYWtlcixcclxuICAgIH1cclxuXHJcblxyXG59KSgpO1xyXG5leHBvcnQgeyBkb21GdW4gfSIsImltcG9ydCB7IGZvcm1NYWtlciB9IGZyb20gJy4vcHJvamVjdCdcclxuXHJcbmNvbnN0IGJ0blByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEJ0bicpO1xyXG5jb25zdCBwb3B1cFByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBQcm9qZWN0Jyk7XHJcblxyXG5cclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuICAgIGJ0blByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcG9wdXBQcm9qZWN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICBmb3JtTWFrZXIoKVxyXG4gICAgICAgIGJ0blByb2plY3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSlcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyB0ZXN0IH1cclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IHRlc3QgfSBmcm9tICcuL2RvbXN0dWZmJ1xyXG5pbXBvcnQgeyBwcm9qZWN0QXJyIH0gZnJvbSAnLi9wcm9qZWN0JztcclxuXHJcbnRlc3QoKVxyXG5cclxuLy8gY29uc29sZS5sb2coJ2hlbGxvJylcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBkb21GdW4gfSBmcm9tICcuL2RvbWZ1bmMnXHJcbmltcG9ydCB7IFByb2plY3QsIFRvZG8gfSBmcm9tICcuL3Byb2plY3RDbGFzcydcclxuXHJcbmNvbnN0IHByb2plY3RBcnIgPSBbXTtcclxuXHJcbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG5jb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXInKTtcclxuY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VGl0bGVzJylcclxuY29uc3QgYnRuUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0QnRuJyk7XHJcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlJylcclxuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBUYXNrJyk7XHJcbmNvbnN0IHBvcHVwUHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cFByb2plY3QnKTtcclxudG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KVxyXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xyXG5cclxuXHJcbiAgICAvLyBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy8gcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XHJcbiAgICAvLyBtYWluRGl2LmFwcGVuZChwcm9qZWN0RGl2KTtcclxuXHJcbiAgICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaDMudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgIHByb2plY3REaXYuYXBwZW5kKGgzKTtcclxuICAgIGgzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1haW5EaXYuaW5uZXJIVE1MID0gaDMudGV4dENvbnRlbnRcclxuICAgICAgICBtYWluRGl2LmFwcGVuZChidXR0b25BZGQpXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICAvLyBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xyXG4gICAgLy8gcHJvamVjdERpdi5hcHBlbmQoZGVsZXRlQnRuKTtcclxuXHJcblxyXG5cclxuICAgIGxldCBidXR0b25BZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbkFkZC50ZXh0Q29udGVudCA9IFwiQWRkIGEgVGFza1wiO1xyXG4gICAgYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaGknKVxyXG4gICAgICAgIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICAvLyBwcm9qZWN0RGl2LmFwcGVuZChidXR0b25BZGQpO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9ybU1ha2VyKCkge1xyXG5cclxuXHJcblxyXG4gICAgLy8gY29uc3QgcHJvamVjRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Rm9ybScpO1xyXG4gICAgLy8gcHJvamVjRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG5cclxuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cclxuICAgIC8vICAgICBmb3JtQWN0aW9uKCk7XHJcbiAgICAvLyAgICAgcG9wdXBQcm9qZWN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHJcblxyXG4gICAgLy8gICAgIC8vIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VGl0bGUnKTtcclxuICAgIC8vICAgICAvLyAvLyBsZXQgdmFsdWUgPSB0aXRsZS52YWx1ZVxyXG5cclxuICAgIC8vICAgICAvLyBidG5Qcm9qZWN0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAvLyAgICAgLy8gcHJvamVjdEFyci5wdXNoKG5ldyBQcm9qZWN0KHRpdGxlLnZhbHVlKSk7XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdEFycilcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh0aXRsZS52YWx1ZSlcclxuXHJcblxyXG5cclxuICAgIC8vIH0pXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICdzdWJtaXQnKTtcclxuXHJcblxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBmb3JtQWN0aW9uKHRleHQpO1xyXG4gICAgICAgIGZvcm0ucmVtb3ZlKCk7XHJcbiAgICAgICAgcG9wdXBQcm9qZWN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdUaXRsZScpO1xyXG5cclxuXHJcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcclxuXHJcbiAgICBwb3B1cFByb2plY3REaXYuYXBwZW5kKGZvcm0pO1xyXG4gICAgZm9ybS5hcHBlbmQodGV4dCk7XHJcbiAgICBmb3JtLmFwcGVuZChzdWJtaXQpO1xyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvcm1BY3Rpb24odGV4dCkge1xyXG5cclxuICAgIC8vIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VGl0bGUnKTtcclxuICAgIC8vIGxldCB2YWx1ZSA9IHRpdGxlLnZhbHVlXHJcblxyXG4gICAgY3JlYXRlUHJvamVjdCh0ZXh0LnZhbHVlKVxyXG5cclxuICAgIGJ0blByb2plY3QuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIHByb2plY3RBcnIucHVzaChuZXcgUHJvamVjdCh0ZXh0LnZhbHVlKSk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyKVxyXG4gICAgY29uc29sZS5sb2codGV4dC52YWx1ZSlcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZm9ybU1ha2VyIH1cclxuXHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy50b2RvID0gW107XHJcblxyXG4gICAgfVxyXG4gICAgYWRkKGFycikge1xyXG4gICAgICAgIGFyci5wdXNoKHRoaXMpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVG9kbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXkpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcbiAgICAgICAgdGhpcy5wcmlvcml5ID0gcHJpb3JpeVxyXG4gICAgfVxyXG4gICAgcHJvamVjdGFkZCh0b2RvQXJyKSB7XHJcbiAgICAgICAgdG9kb0Fyci5wdXNoKHRoaXMpXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=