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


const btnProject = document.querySelector('#projectBtn')


function test() {
    btnProject.addEventListener('click', () => {
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

const mainDiv = document.querySelector('.main')

const sideBar = document.querySelector('.sideBar')

const btnProject = document.querySelector('#projectBtn')


function createProject(title) {


    let projectDiv = document.createElement('div')
    projectDiv.classList.add('project')
    mainDiv.append(projectDiv)

    let h2 = document.createElement('h2')
    h2.textContent = title;
    projectDiv.append(h2);

    let deleteBtn = document.createElement('button');

    deleteBtn.textContent = "Delete"
    projectDiv.append(deleteBtn)



    let buttonAdd = document.createElement('button');

    buttonAdd.textContent = "Add a Task"
    projectDiv.append(buttonAdd)


}




function formMaker() {

    const form = document.createElement('form');
    form.setAttribute('action', 'submit');


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        formAction(text);
        form.remove();

    });

    const text = document.createElement('input');
    text.setAttribute('type', 'text');
    text.setAttribute('name', 'Title');


    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute("value", "Submit");

    sideBar.append(form);
    form.append(text);
    form.append(submit);

}


function formAction(input) {
    let title = input.value

    createProject(title)

    projectArr.push(new _projectClass__WEBPACK_IMPORTED_MODULE_1__.Project(title));
    btnProject.disabled = false;
    console.log(projectArr)
    console.log(title)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb3BhZ2UvLi9zcmMvZG9tZnVuYy5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9kb21zdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvcGFnZS8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9wYWdlLy4vc3JjL3Byb2plY3RDbGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCb0M7O0FBRXJDOzs7QUFHQTtBQUNBO0FBQ0EsUUFBUSxvREFBUztBQUNqQjtBQUNBLEtBQUs7Ozs7O0FBS0w7OztBQUdlOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJNO0FBQ1k7QUFDTTs7QUFFdkMsK0NBQUk7O0FBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ1k7O0FBRTlDOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTs7O0FBR0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLGtEQUFPO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZkO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguOTJkZjQ2MzQyNjJhYTM3ZTg3YWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBkb21GdW4gPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9uTWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGl2TWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICAgICAgcmV0dXJuIGRpdlxyXG4gICAgfTtcclxuICAgIGNvbnN0IGgyTWFrZXIgPSAodGV4dCA9ICcnLCBzdHlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgaDIudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGgyLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiBoMlxyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaDJNYWtlcixcclxuICAgICAgICBkaXZNYWtlcixcclxuICAgICAgICBidXR0b25NYWtlcixcclxuICAgIH1cclxuXHJcblxyXG59KSgpO1xyXG5leHBvcnQgeyBkb21GdW4gfSIsImltcG9ydCB7IGZvcm1NYWtlciB9IGZyb20gJy4vcHJvamVjdCdcclxuXHJcbmNvbnN0IGJ0blByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEJ0bicpXHJcblxyXG5cclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuICAgIGJ0blByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZm9ybU1ha2VyKClcclxuICAgICAgICBidG5Qcm9qZWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgdGVzdCB9XHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyB0ZXN0IH0gZnJvbSAnLi9kb21zdHVmZidcclxuaW1wb3J0IHsgcHJvamVjdEFyciB9IGZyb20gJy4vcHJvamVjdCc7XHJcblxyXG50ZXN0KClcclxuXHJcbi8vIGNvbnNvbGUubG9nKCdoZWxsbycpXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgZG9tRnVuIH0gZnJvbSAnLi9kb21mdW5jJ1xyXG5pbXBvcnQgeyBQcm9qZWN0LCBUb2RvIH0gZnJvbSAnLi9wcm9qZWN0Q2xhc3MnXHJcblxyXG5jb25zdCBwcm9qZWN0QXJyID0gW107XHJcblxyXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxyXG5cclxuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyJylcclxuXHJcbmNvbnN0IGJ0blByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEJ0bicpXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xyXG5cclxuXHJcbiAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxyXG4gICAgbWFpbkRpdi5hcHBlbmQocHJvamVjdERpdilcclxuXHJcbiAgICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBoMi50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgcHJvamVjdERpdi5hcHBlbmQoaDIpO1xyXG5cclxuICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiXHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZChkZWxldGVCdG4pXHJcblxyXG5cclxuXHJcbiAgICBsZXQgYnV0dG9uQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgYnV0dG9uQWRkLnRleHRDb250ZW50ID0gXCJBZGQgYSBUYXNrXCJcclxuICAgIHByb2plY3REaXYuYXBwZW5kKGJ1dHRvbkFkZClcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb3JtTWFrZXIoKSB7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnc3VibWl0Jyk7XHJcblxyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZm9ybUFjdGlvbih0ZXh0KTtcclxuICAgICAgICBmb3JtLnJlbW92ZSgpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnVGl0bGUnKTtcclxuXHJcblxyXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XHJcblxyXG4gICAgc2lkZUJhci5hcHBlbmQoZm9ybSk7XHJcbiAgICBmb3JtLmFwcGVuZCh0ZXh0KTtcclxuICAgIGZvcm0uYXBwZW5kKHN1Ym1pdCk7XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZm9ybUFjdGlvbihpbnB1dCkge1xyXG4gICAgbGV0IHRpdGxlID0gaW5wdXQudmFsdWVcclxuXHJcbiAgICBjcmVhdGVQcm9qZWN0KHRpdGxlKVxyXG5cclxuICAgIHByb2plY3RBcnIucHVzaChuZXcgUHJvamVjdCh0aXRsZSkpO1xyXG4gICAgYnRuUHJvamVjdC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdEFycilcclxuICAgIGNvbnNvbGUubG9nKHRpdGxlKVxyXG5cclxufVxyXG5leHBvcnQgeyBmb3JtTWFrZXIsIH1cclxuXHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy50b2RvID0gW107XHJcblxyXG4gICAgfVxyXG4gICAgYWRkKGFycikge1xyXG4gICAgICAgIGFyci5wdXNoKHRoaXMpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVG9kbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXkpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcbiAgICAgICAgdGhpcy5wcmlvcml5ID0gcHJpb3JpeVxyXG4gICAgfVxyXG4gICAgcHJvamVjdGFkZCh0b2RvQXJyKSB7XHJcbiAgICAgICAgdG9kb0Fyci5wdXNoKHRoaXMpXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=