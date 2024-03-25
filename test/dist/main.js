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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nwindow.AddStatistic = function (category, action) {\n  console.log(category, action);\n  window._hmt && window._hmt.push([\"_trackEvent\", category, action]);\n};\n(function () {\n  var script = document.createElement(\"script\");\n  script.type = \"text/javascript\";\n  script.src = \"https://test.js\";\n  document.getElementsByTagName(\"head\")[0].appendChild(script);\n})();\n// @debug\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n  }\n  return _createClass(App, [{\n    key: \"inClass\",\n    value:\n    // inner\n    /* 块级 */\n    // 123\n    function inClass() {\n      console.log(213);\n      window.AddStatistic(\"param1\", aaa);\n    }\n  }]);\n}(); // 外边的猴嘴\nfunction fn() {\n  // fn右边\n\n  var a = 1;\n  function inFn() {\n    console.log(2);\n    window.AddStatistic(\"param4\", \"def\");\n    window.AddStatistic(\"param3\", bbb);\n    window.AddStatistic(\"param5\", \"qqq\");\n  }\n  // 猴嘴\n  inFn();\n  function testFn() {\n    var a = 123;\n    function test() {\n      console.log(234);\n      var arr = function arr() {\n        function haha() {\n          // aaa\n        }\n        window.AddStatistic(\"param7\", \"eee\");\n      };\n      window.AddStatistic(\"param6\", www);\n    }\n    window.AddStatistic(\"param8\", rrr);\n  }\n  window.AddStatistic(\"param2\", \"abc\");\n}\nfn();\nvar a = function a() {\n  // buri\n};\na();\n\n//# sourceURL=webpack://test/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;