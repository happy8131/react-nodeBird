"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserProfile */ \"./components/UserProfile.js\");\n/* harmony import */ var _LogginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LogginForm */ \"./components/LogginForm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst AppLayout = (param)=>{\n    let { children  } = param;\n    _s();\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n                mode: \"horizontal\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            children: \"노드버드\"\n                        }, void 0, false, {\n                            fileName: \"/home/happy8131/prepare/front/components/AppLayout.js\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/happy8131/prepare/front/components/AppLayout.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/profile\",\n                            children: \"프로필\"\n                        }, void 0, false, {\n                            fileName: \"/home/happy8131/prepare/front/components/AppLayout.js\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/happy8131/prepare/front/components/AppLayout.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Input.Search, {\n                            enterButton: true,\n                            style: {\n                                verticalAlign: \"middle\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/happy8131/prepare/front/components/AppLayout.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/happy8131/prepare/front/components/AppLayout.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/signup\",\n                            children: \"회원가입\"\n                        }, void 0, false, {\n                            fileName: \"/home/happy8131/prepare/front/components/AppLayout.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/happy8131/prepare/front/components/AppLayout.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/happy8131/prepare/front/components/AppLayout.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                        xs: 24,\n                        md: 6,\n                        children: isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserProfile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/happy8131/prepare/front/components/AppLayout.js\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LogginForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/happy8131/prepare/front/components/AppLayout.js\",\n                            lineNumber: 31,\n                            columnNumber: 43\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/happy8131/prepare/front/components/AppLayout.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                        xs: 24,\n                        md: 12,\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/home/happy8131/prepare/front/components/AppLayout.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                        xs: 24,\n                        md: 6,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.zerocho.com\",\n                            target: \"_blank\",\n                            rel: \"noreferrer noopener\",\n                            children: \"Made by eroCho\"\n                        }, void 0, false, {\n                            fileName: \"/home/happy8131/prepare/front/components/AppLayout.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/happy8131/prepare/front/components/AppLayout.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/happy8131/prepare/front/components/AppLayout.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/happy8131/prepare/front/components/AppLayout.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AppLayout, \"g0MSgNVZk+vKiEFnDJ9VPEfswFA=\");\n_c = AppLayout;\nAppLayout.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\nvar _c;\n$RefreshReg$(_c, \"AppLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcExheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUM7QUFDTjtBQUNnQjtBQUNaO0FBQ087QUFDRjtBQUV0QyxNQUFNUyxZQUFZLFNBQWtCO1FBQWpCLEVBQUVDLFNBQVEsRUFBRTs7SUFDN0IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDLEtBQUs7SUFDbEQscUJBQ0UsOERBQUNPOzswQkFDQyw4REFBQ1gsc0NBQUlBO2dCQUFDWSxNQUFLOztrQ0FDVCw4REFBQ1osMkNBQVM7a0NBQ1IsNEVBQUNELGtEQUFJQTs0QkFBQ2UsTUFBSztzQ0FBSTs7Ozs7Ozs7Ozs7a0NBRWpCLDhEQUFDZCwyQ0FBUztrQ0FDUiw0RUFBQ0Qsa0RBQUlBOzRCQUFDZSxNQUFLO3NDQUFXOzs7Ozs7Ozs7OztrQ0FFeEIsOERBQUNkLDJDQUFTO2tDQUNSLDRFQUFDQyw4Q0FBWTs0QkFDWGUsV0FBVzs0QkFDWEMsT0FBTztnQ0FBRUMsZUFBZTs0QkFBUzs7Ozs7Ozs7Ozs7a0NBR3JDLDhEQUFDbEIsMkNBQVM7a0NBQ1IsNEVBQUNELGtEQUFJQTs0QkFBQ2UsTUFBSztzQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3pCLDhEQUFDWixxQ0FBR0E7O2tDQUNGLDhEQUFDQyxxQ0FBR0E7d0JBQUNnQixJQUFJO3dCQUFJQyxJQUFJO2tDQUNkWCwyQkFBYSw4REFBQ0osb0RBQVdBOzs7O3NEQUFNLDhEQUFDQyxtREFBVUE7Ozs7cUNBQUc7Ozs7OztrQ0FFaEQsOERBQUNILHFDQUFHQTt3QkFBQ2dCLElBQUk7d0JBQUlDLElBQUk7a0NBQ2RaOzs7Ozs7a0NBRUgsOERBQUNMLHFDQUFHQTt3QkFBQ2dCLElBQUk7d0JBQUlDLElBQUk7a0NBQ2YsNEVBQUNDOzRCQUNDUCxNQUFLOzRCQUNMUSxRQUFPOzRCQUNQQyxLQUFJO3NDQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBeENNaEI7S0FBQUE7QUEwQ05BLFVBQVVpQixTQUFTLEdBQUc7SUFDcEJoQixVQUFVVixtRUFBeUI7QUFDckM7QUFFQSwrREFBZVMsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FwcExheW91dC5qcz9jZDZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IE1lbnUsIElucHV0LCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gXCIuL1VzZXJQcm9maWxlXCI7XG5pbXBvcnQgTG9nZ2luRm9ybSBmcm9tIFwiLi9Mb2dnaW5Gb3JtXCI7XG5cbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+64W465Oc67KE65OcPC9MaW5rPlxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj7tlITroZztlYQ8L0xpbms+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgIDxJbnB1dC5TZWFyY2hcbiAgICAgICAgICAgIGVudGVyQnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiIH19XG4gICAgICAgICAgPjwvSW5wdXQuU2VhcmNoPlxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPu2ajOybkOqwgOyehTwvTGluaz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICA8L01lbnU+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxuICAgICAgICAgIHtpc0xvZ2dlZEluID8gPFVzZXJQcm9maWxlIC8+IDogPExvZ2dpbkZvcm0gLz59XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuemVyb2Noby5jb21cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIE1hZGUgYnkgZXJvQ2hvXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XG4iXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiTGluayIsIk1lbnUiLCJJbnB1dCIsIlJvdyIsIkNvbCIsInVzZVN0YXRlIiwiVXNlclByb2ZpbGUiLCJMb2dnaW5Gb3JtIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsImRpdiIsIm1vZGUiLCJJdGVtIiwiaHJlZiIsIlNlYXJjaCIsImVudGVyQnV0dG9uIiwic3R5bGUiLCJ2ZXJ0aWNhbEFsaWduIiwieHMiLCJtZCIsImEiLCJ0YXJnZXQiLCJyZWwiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AppLayout.js\n"));

/***/ }),

/***/ "./components/LogginForm.js":
/*!**********************************!*\
  !*** ./components/LogginForm.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst LogginForm = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"로그인폼\"\n    }, void 0, false, {\n        fileName: \"/home/happy8131/prepare/front/components/LogginForm.js\",\n        lineNumber: 2,\n        columnNumber: 10\n    }, undefined);\n};\n_c = LogginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogginForm);\nvar _c;\n$RefreshReg$(_c, \"LogginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2dpbkZvcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFBQSxNQUFNQSxhQUFhLElBQU07SUFDdkIscUJBQU8sOERBQUNDO2tCQUFJOzs7Ozs7QUFDZDtLQUZNRDtBQUlOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTG9nZ2luRm9ybS5qcz82YzUxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExvZ2dpbkZvcm0gPSAoKSA9PiB7XG4gIHJldHVybiA8ZGl2PuuhnOq3uOyduO2PvDwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2dpbkZvcm07XG4iXSwibmFtZXMiOlsiTG9nZ2luRm9ybSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LogginForm.js\n"));

/***/ }),

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserProfile = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"UserProfile\"\n    }, void 0, false, {\n        fileName: \"/home/happy8131/prepare/front/components/UserProfile.js\",\n        lineNumber: 2,\n        columnNumber: 10\n    }, undefined);\n};\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJQcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQUEsTUFBTUEsY0FBYyxJQUFNO0lBQ3hCLHFCQUFPLDhEQUFDQztrQkFBSTs7Ozs7O0FBQ2Q7S0FGTUQ7QUFJTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VzZXJQcm9maWxlLmpzPzcxNWIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVXNlclByb2ZpbGUgPSAoKSA9PiB7XG4gIHJldHVybiA8ZGl2PlVzZXJQcm9maWxlPC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7XG4iXSwibmFtZXMiOlsiVXNlclByb2ZpbGUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserProfile.js\n"));

/***/ })

});