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

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nwindow.AddStatistic = function (category, action) {\n  console.log(category, action);\n  window._hmt && window._hmt.push([\"_trackEvent\", category, action]);\n};\n\n// @debug\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n  }\n\n  _createClass(App, [{\n    key: \"inClass\",\n    value: // inner\n\n    /* 块级 */\n    // 123\n    function inClass() {\n      console.log(213);\n      window.AddStatistic(\"赛事-m\", aaa);\n    }\n  }]);\n\n  return App;\n}(); // 外边的猴嘴\n\n\nfunction fn() {\n  // fn右边\n  var a = 1;\n\n  function inFn() {\n    var b = 2;\n    window.AddStatistic(\"阿斯顿撒\", \"qqq\");\n    window.AddStatistic(\"分享赛事详情页\", \"def\");\n    window.AddStatistic(\"赛事-v\", bbb);\n  } // 猴嘴\n\n\n  inFn();\n\n  function testFn() {\n    console.log(123);\n\n    function test() {\n      console.log(234);\n\n      // buried-5\n      var arr = function arr() {\n        function haha() {\n          window.AddStatistic(\"反对过\", rrr);\n        }\n\n        window.AddStatistic(\"自行车\", \"eee\");\n      };\n\n      window.AddStatistic(\"暗访\", www);\n    }\n  }\n\n  window.AddStatistic(\"赛事详情页\", \"abc\");\n}\n\nfn();\n\nvar a = function a() {\n  // a\n  console.log(buried);\n};\n\na();\n\n//# sourceURL=webpack://babel-plugin-tracker/./test/index.js?");

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