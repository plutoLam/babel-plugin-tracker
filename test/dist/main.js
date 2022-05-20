/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./test/index.js":
/*!***********************!*\
  !*** ./test/index.js ***!
  \***********************/
/***/ (() => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n// @debug\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n  }\n\n  _createClass(App, [{\n    key: \"inClass\",\n    value: // inner\n\n    /* 块级 */\n    // 123\n    function inClass() {\n      // inClass\n      console.log(213);\n      var buried = \" inClass\";\n    }\n  }]);\n\n  return App;\n}(); // 外边的猴嘴\n\n\nfunction fn() {\n  // fn右边\n  // fn\n  console.log(buried);\n  var a = 1;\n\n  function inFn() {\n    // inFn2\n    // inFn\n    console.log(buried); // 在log后面b前面\n\n    var b = 2;\n    var buried = \" inFn\";\n    var buried = \" inFn2\";\n    var buried = \" 在log后面b前面\";\n  } // 猴嘴\n\n\n  inFn();\n\n  function testFn() {\n    console.log(123);\n\n    function test() {\n      console.log(234); // test\n\n      var buried = \" test\";\n    }\n  }\n\n  var buried = \" fn\";\n  var buried = \" fn右边\";\n  var buried = \" 猴嘴\";\n}\n\nfn();\n\nvar a = function a() {\n  // a\n  console.log(buried);\n  var buried = \" a\";\n};\n\na();\n\n//# sourceURL=webpack://babel-buried-plugin/./test/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./test/index.js"]();
/******/ 	
/******/ })()
;