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

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nwindow.AddStatistic = function (category, action) {\n  console.log(category, action);\n  window._hmt && window._hmt.push([\"_trackEvent\", category, action]);\n};\n\n(function () {\n  var script = document.createElement(\"script\");\n  script.type = \"text/javascript\";\n  script.src = \"https://test.js\";\n  document.getElementsByTagName(\"head\")[0].appendChild(script);\n})();\n\n// @debug\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n  }\n\n  _createClass(App, [{\n    key: \"inClass\",\n    value: // inner\n\n    /* 块级 */\n    // 123\n    function inClass() {\n      console.log(213);\n      window.AddStatistic(\"param1\", aaa);\n    }\n  }]);\n\n  return App;\n}(); // 外边的猴嘴\n\n\nfunction fn() {\n  // fn右边\n  var a = 1;\n\n  function inFn() {\n    console.log(2);\n    window.AddStatistic(\"param4\", \"def\");\n    window.AddStatistic(\"param3\", bbb);\n    window.AddStatistic(\"param5\", \"qqq\");\n  } // 猴嘴\n\n\n  inFn();\n\n  function testFn() {\n    var a = 123;\n\n    function test() {\n      console.log(234);\n\n      var arr = function arr() {\n        function haha() {// aaa\n        }\n\n        window.AddStatistic(\"param7\", \"eee\");\n      };\n\n      window.AddStatistic(\"param6\", www);\n    }\n\n    window.AddStatistic(\"param8\", rrr);\n  }\n\n  window.AddStatistic(\"param2\", \"abc\");\n}\n\nfn();\n\nvar a = function a() {// buri\n};\n\na();\n\n//# sourceURL=webpack://babel-plugin-tracker/./test/index.js?");

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