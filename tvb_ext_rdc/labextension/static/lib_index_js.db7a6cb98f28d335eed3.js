"use strict";
(self["webpackChunktvb_ext_rdc"] = self["webpackChunktvb_ext_rdc"] || []).push([["lib_index_js"],{

/***/ "./lib/IframeDisplay.js":
/*!******************************!*\
  !*** ./lib/IframeDisplay.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IframeDisplay: () => (/* binding */ IframeDisplay)
/* harmony export */ });
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_0__);

class IframeDisplay extends _lumino_widgets__WEBPACK_IMPORTED_MODULE_0__.Widget {
    constructor(url) {
        super({ node: document.createElement('div') });
        this.addClass('iframe-widget');
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.border = 'none'; // Remove default border
        this.node.appendChild(iframe);
    }
}



/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IframeDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IframeDisplay */ "./lib/IframeDisplay.js");
/* harmony import */ var _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/launcher */ "webpack/sharing/consume/default/@jupyterlab/launcher");
/* harmony import */ var _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_1__);



const extension = {
    id: 'my-iframe-widget',
    autoStart: true,
    requires: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ICommandPalette, _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_1__.ILauncher],
    activate: (app, commandPalette, launcher) => {
        const commandId = 'iframe-widget:open';
        app.commands.addCommand(commandId, {
            label: 'Guacamole',
            execute: () => {
                const iframe = new _IframeDisplay__WEBPACK_IMPORTED_MODULE_2__.IframeDisplay('http://localhost:8080/guacamole/');
                const widget = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.MainAreaWidget({ content: iframe });
                widget.title.label = 'Guacamole';
                widget.title.closable = true;
                app.shell.add(widget, 'main');
                app.shell.activateById(widget.id);
            }
        });
        commandPalette.addItem({
            command: commandId,
            category: 'Guacamole'
        });
        if (launcher) {
            launcher.add({
                command: commandId,
                category: 'Other',
                rank: 1
            });
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extension);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.db7a6cb98f28d335eed3.js.map