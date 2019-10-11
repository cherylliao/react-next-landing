module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!******************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!****************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!*******************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!*****************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!*****************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!****************************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!**************************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!*****************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!***************************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!***************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!***************************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!*********************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!**********************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*******************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!**********************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!**********************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/construct.js":
/*!*****************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/construct.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/reflect/construct */ "../../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");



function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;
  if (_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!*******************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!**********************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!***************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!**********************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!****************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!****************************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "../../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!***********************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!********************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!************************************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!**********************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!*********************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "../../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!**************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!***********************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*************************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!**************************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css":
/*!************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/@glidejs/glide/dist/css/glide.core.min.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/common/src/assets/css/flaticon.css":
/*!****************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/css/flaticon.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/common/src/assets/css/style.js":
/*!************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/css/style.js ***!
  \************************************************************************************/
/*! exports provided: ResetCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetCSS", function() { return ResetCSS; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flaticon.css */ "../../node_modules/common/src/assets/css/flaticon.css");
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_flaticon_css__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ::selection {\n    background: #333333;\n    color: #ffffff;\n  }\n\n  html {\n    box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  *:focus {\n    outline: none;\n  }\n\n  html,\n  html a,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  a,\n  p,\n  li,\n  dl,\n  th,\n  dt,\n  input,\n  textarea,\n  span,\n  div {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style-type: none;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: none;\n  }\n\n  .reuseModalHolder {\n    padding: 0 !important;\n    &.demo_switcher_modal {\n      border: 0 !important;\n      background-color: rgba(16, 30, 77, 0.9) !important;\n      .innerRndComponent {\n        border-radius: 8px !important;\n      }\n    }\n  }\n\n  button.modalCloseBtn {\n    position: fixed !important;\n    z-index: 999991 !important;\n    background-color: transparent !important;\n    top: 10px !important;\n    right: 10px !important;\n    min-width: 34px !important;\n    min-height: 34px !important;\n    padding: 0 !important;\n    span.btn-icon {\n      font-size: 22px !important;\n      transform: rotate(45deg) !important;\n    }\n\n    &.alt {\n      border-radius: 50% !important;\n      z-index: 999999 !important;\n      padding: 0 !important;\n      transition: all 0.3s ease !important;\n      top: 25px !important;\n      right: 30px !important;\n      min-width: 40px !important;\n      min-height: 40px !important;\n\n      span.btn-icon {\n        font-size: 20px !important;\n      }\n\n      &:hover {\n        opacity: 0.88 !important;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ResetCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/google-icon.jpg":
/*!****************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/agency/google-icon.jpg ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/login-bg.jpg":
/*!*************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/agency/login-bg.jpg ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/login-bg-be2e9a02a773eac061cd01d2724c9825.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/logo.png":
/*!*********************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/agency/logo.png ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-b73048211d7a9a05b4c449061f130c5f.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/error.svg":
/*!***************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/error.svg ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZGMzNTQ1IiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEuOTc2IDUxLjk3NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEuOTc2IDUxLjk3NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KICA8Zz4NCiAgICA8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwDQogICAgICBDNTQuNTEsMzQuMjM1LDU0LjUxLDE3Ljc0LDQ0LjM3Myw3LjYwM3ogTTM2LjI0MSwzNi4yNDFjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBsLTcuNDI1LTcuNDI1bC03Ljc3OCw3Ljc3OA0KICAgICAgYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwYy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0NywwLTIuODI4bDcuNzc4LTcuNzc4bC03LjQyNS03LjQyNWMtMC43ODEtMC43ODEtMC43ODEtMi4wNDgsMC0yLjgyOA0KICAgICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4DQogICAgICBsLTcuMDcxLDcuMDcxbDcuNDI1LDcuNDI1QzM3LjAyMiwzNC4xOTQsMzcuMDIyLDM1LjQ2LDM2LjI0MSwzNi4yNDF6Ii8+DQogIDwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/about_parent.png":
/*!*******************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/about_parent.png ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABBUAAAKyCAMAAAC9lhZZAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACOlBMVEW8vLyKiopeXl6Ojo60tLSampqFhYV3d3dycnJzc3N6enqIiIifn5+3t7ecnJyCgoJpaWlmZma7u7upqamQkJB/f392dnZxcXGAgICSkpKqqqq1tbWhoaGXl5eWlpampqa5ubkuLi4AAABhYWGzs7N+fn5KSkodHR0BAQEDAwMjIyNQUFCEhIS2trYeHh5JSUm6uroEBAQRERGTk5MxMTEKCgoMDAw0NDSNjY0zMzMVFRUcHBw/Pz9qamqbm5uwsLACAgJEREQHBwdMTExNTU2kpKRYWFhubm5GRkYZGRldXV15eXkwMDA8PDyMjIxCQkIPDw9sbGy4uLhAQEBaWloODg6ysrJSUlIhISGZmZlTU1MFBQUkJCSjo6MyMjJZWVkWFhaxsbEaGhqVlZV4eHhjY2NVVVWYmJgiIiJtbW0mJiZUVFSGhoZoaGgNDQ19fX0lJSWRkZGtra1LS0uvr69DQ0OJiYk6OjplZWUrKytRUVGoqKgvLy8UFBRvb2+urq5HR0esrKw7OzssLCwbGxt1dXWPj48LCwsQEBAICAhra2stLS0SEhJFRUWnp6coKCg5OTmgoKB8fHwgICApKSknJydbW1tWVlalpaVXV1erq6uLi4tISEgGBgY4ODg+Pj4qKiqHh4d0dHQJCQlnZ2dkZGSDg4MfHx97e3s3NzdiYmIXFxeUlJQTExM2NjZOTk5PT09gYGAYGBienp5cXFw1NTVfX1+dnZ09PT1wcHBBQUGBgYGioqL+/v6U+bJwAAAAAWJLR0S9PdXSeQAAHE9JREFUeNrt3fmfFNW5MPBmiTHKZrszLtgujAs6CKMJaiDjFjUojAFFNApqNBpHJb6ikrhcSRQX3MWNq8a4Rb1xyas3771/3AsKfZ6urq1npod8PvP9/gRdp07V9Ol6uvrUOc9pNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYMjNmfm/WePad/aODfnzwTw45dM7cSTmVeT+cysz5paUWzKztsCl4/5qHH3HkUUf/+JhjFzbHtf/AccfPOnTWCScuGvcZTHIrQOOk1vdO7nW/U049bfFga5/TzzjzrCUTPZOBs/fVdk5ZqaGlrdrO7fN711w2c/lw+2jnnX/yvJ4iw5KfzvzZivZbeMGFF/2858Ay+a0AjZWrxhUVlv1iJHsJDl88b2Kncsn+mkqjwon1g0Kfo8Kll63oOuLZl59Sc+/mob8c7tr9iisvPdCtAI2rWuOICst+lX8Vrp4zgTOZ366mNCpc/W8SFeZcM5h7zDVrR2vsPXrU4vxTHry29nvYl1aARmN171Fh5TmFl+HSX4/7t+3h6+pFhYP/LaLC+utWFR71+g2Vu8+4oPikV91Q63ajP60Aez5bG3uOCstWtErceNP4TqT5m1RHaVS4+d8hKlx9S9lhlx5dvvema8pPe/OtB6oVYI+j93+OakeF2yp6+9YdO64TOSxUURoVLjzwUaF5+2DFgX9b1m14x+aq81764wPUCrDn831nr1Hhd5WX4sh4HnLeET/lpVHhrgMeFUZ/WX3ku4vDwu9Hapz5PQekFWCPQ9ufoppR4cc1PtHD1b+rs2Z39L2VRoWxAx0VRlfXOXThUIl7T6916r87AK0AezTv6zEq3F9rsMAtW3o9kT907F8WFR7oISj0JSo0/0+tQw/OyN/9wXpBoTV41tS3AuyxIH2GakWFlZ1dXKdvvfzWhXNHF8566OHOD+TWHkfjHNO5e1lUOOFAR4UrOw+x4pFD5m0ZHdg267A/dnY2/Gll3t4/z4xRGL7w0fsXDow+tuGQizPdh8OFHYb9agXY4/6N6SNUKyo8Hj90S294Im2Z9x8dH8jK3rIO2zK/Csqiwr3tUmcekPfsoI4zfXJGuPJuOq0jLpyWs/dA5yiF7X8eSNuaM87v2Phw0UXdp1aAPe6PF2OdqPCX+JG7IDOG7pinwsY1D/RwHs3lma/4sqhwe7vURQfiPXvi6XCeY/dmLtxlV4Stgz/v3v2S+GfueGZRZvPVm+P2R6e0FaDRGFqwMX68akSFZuz+f3ZTdvO858Lmu3s4k4cyQaE0KqSxOwcdiHft+XCaZ+zs2vzYC2H7i12b749/5eKXuqsfiCMZxnIv6n61Aoy+/ErnlVgjKpwait+3qXv7vPA9tXFndX37nNDVd1YWFdIo3wMxrvfYcJav5nUcrDw7lMieYfO1qt0bzddDkV15JfrUCkx3pxx0yZrslVgdFZo3ptJPvZFXYn6o77q6JzO7e/BvWVRoDyocPACjeptPppO84rHcIseNpCLZno97w9/4yqaCQ7yZyoy8lbO9P63ANNbccsSjF9+XNzKvOiq8HUpflV/knfCJrvub9rTucymJCnPb537LAXj70vCO1u6iqYkXpTLrMvOkXk2bip8wNP8zlXq9e3OfWoHpasG1LxQPAaqOCu+mwu8VdI9vCXevz9Q7qSNzzqUkKrzULvSrA/AOPpvO8aGiMqPbU6H3O7bEnx9/LT7IlnQfN9adLaE/rcC0dUarRGVU2BKG39xfVOjkVOb6Wue0sx2nlqbOz5Ko8Pt2odNq1T+pwliJ6xcVlgqTOjt/QoShWq+WDSUIIxcPyW7rTyswfU0sKjyayj5cWGjlB6lUnewfQ39sF//buXWiwtp2oQ+n/g0Mt+YfFZeanQYqfRxfXxT6ct4ufVNSR/D52W19aQWmsYlFhZDi4+XiUuGB/OtVNe7xYbv08matqHBDu9CpU/7+rR9pH/yusu/6MCQ6DjoO6WJeKR91eFS74KonMpv60gpMYxOKCg+kLCNPlfT+35pqPKP6jG5t3w+PbWvUigpb24WmfvJPuljLRw1+ksrFyRAz08sVMyKXnNcu+efOLX1pBaazCUWF8FTt+ZJizTC67/CqEzoldcwd2agXFdLN9fpe//ybNrS9UVrwgVSw4/770/axxwbK9l+4o21tePln6Z2pSs6Yxkq92/9WYFqbUFS4OBUtTcx+dyp3VUWV4Xf63jhQJyo0R/aXebrnPz88xz9vYUm5ZurraP09vH5KGm31h3G8+830ZOCzqrLpbmNd52+NfrQC09qEokKa1rOq9Fs6PNI/p6LK9MW3fW+mwjpRYWG7zHu9//1htHLZdMLQoffqovB6iCrvVx0qx5a0+4VVZUMe687ewj60AtPbWzuzjqsdFUJagxdKC85Oj84qnortbP96XvX53v/XiQpHtMv8ove//4Ev0h/xSWGpN1IH/shxccOZ7deHxzOs8vN08MoewGYaV9IxsKEPrQAZS2pHhfDls6u8ZBrrPzi7rNzQSZlj14kK6VH+zHH8uWmwQ2tNUUqSZpjO3Dlp8fr26/81nvc6DNc6uLJwmgH1j/62AmTVjwphXuMn5SW/TCU/Lyv393axJ4e+f6FOVEgpT24bz98bRlcX3cX/NRU5v+Nnxqa04fbxHPvPaf97Kwunjs2T+tsKkFU/KoRn8BVzFcPQvp+UFPu8fY87vK9Hvk5USKexbDx/7/qQsP2Y3BLbUp/g2LaOLWECwl/Gc+yQgHV+ZeFr22XX9bUVoEv9qJASPO4eKi+5LNX52+JS6ze3S+3vJK8TFd5rlxlfUsJwaZ+bN3Go+WIqkBklFL6ne34outc9af/qAVghzUKccD3ZrQDdakeFZuqC+7iiztAjtrW4VEqefs3+l+pEhXYmpOF9d/cDD3717n3PjQwuHVvxwjVXnlU5RTDcWec98L+q1X1e+/yiveXrcb3X4dFGdea0NFirdXwfWwG61Y4KT6SCL1ZVmlaGe6WwzMvtMre0vwtrRIX17SI37v3v6DFbd7c6DJ5xe/mqSbPTPUpOMqe3Ut//F9kAk/Ia/Oe43uswMvKhysJhznX4uTHZrQA5akeFMFvwhqpK023uU0VFTmz/eh9Mv9FrRIUftYu822jMXZu/qNryGWWzDP6Skkv8qSvxSZimfGhmUzPNeap8B3KF4Q5fVhYO2SEv71srQJ7aUSGkZr+nqtJw91vwA3wo5SkIj+5rRIV0Gpc15n/dKvJCWbd7GPaXnYwdkp/9I7vblrRtQXq1OefgS5ZvH1s6OPzc9avfPPWJkuOmiNb5XCHPtvDHhEewk9sKkKt2VAg/iisfCYYJey/ll0jz/18L2YpqRIW0GOVDqZc+x+Afipd1jsnXO1dyeSx9Q2/vesgfvqeP3P/aN7uykenODwunOKRfP63hRRVv4cuhyi/71QqQq3ZUmJkKPlhV6T9T2fy8IMvaE/92xMGDNaJC+qhXrcC0uDivwLL0G+KzjuCRnvsNdj/3DD8A9v1Vn//f3COvPqHguOGp6BEVb2HM9BwGcU5qK0C+2lEhdN1XzmBOiVHyH8yvTxP6Oobz1ogKncuolBopnqtwWe4XceOj9HLOkOTwPf39UIEtzxceenV+ZuVwd1PxsHDTjlBbeIQwma0ABWpHhTB8pmoWcEwwdlTe9nQ5re7oFqwRFTbXjwqt0wuzkswNSe/Tys0r00IKN4527zQz7bN3qMSD55YceuTyvP7OcJ0+Pdooc1is7I/9aQUoUDsqhLzDj1VVGu611+ZsPqS99YvOqqqjwqKaK7f+YFXh3cLxqZ7t7UwJaVr3xrxfH2luVGvPJf3MYPmxL8zp4bspbC9J5ronPnWk5X+vL60ARWpHhTSTqTVaVemM0kovTU/4Mqs2V0eFS3Ouv7Mv3PXQ2mf+fsPWr7s2fVB4mz0zFdq/vFKYeLQgb5f0PX16x/4F7soZe5keFrY+K0vbcmZHTSGZ0uS1AhSqHRXSQmmnV1Yalk3r/n2+KK2bnP1xXR0VZrQyXv1JuPh2PvpsZvMFRdMFR1OqiX0di2GGxB9zhzukodA74uDlQmd3r/Dyt7C5ZMpj5/q2cRDSpLUCFKsdFe4M10SVE8o++9+m78BskoLqqHB05/VyRlem5Fs/7SxxSdE5/ijlVTr7+zUX0tON4fz0bSlB09j8ip8P+yJW1+3AAyNhc2EX4IbMWvZhbPOktQIUqx0V0jP+4cpKw3CdrsXkj20/lNz9XXZbdVR4M14tgzNz7qKbx6yLZYpnVqZ53K2b9/z3p+m/f87fIY1BHonLPree+s0lJ1/0zO1nnt+1AM+1Xfcc4RlCa0fBxMsTsmv9LZ78VoAStaNCWgtyrLLSeanS7Hf1pq/bm37XtV91VPjvcLF8UNCX+EZHHrqHiwY/L0ppSVad0JidHpYW5W7LTW/33JsnDO0v0Dzh7kxg6IovC+MTxx25U7lv25E9RrhXmKRWgDK1o8Lmdrk1lZV+kyrNZj1NXXafdl981VEhLLw6VjRWqPFAXPi5+Eb9m7RU1Z2j16U/r2jQ8uJWl6f/lVnwbf3MjXH78InZSk7u2P+SrnkYb6zuPkrIsDZJrQBlxnGvUJ1bOXxLZSYapHnKT+estlwZFcIEpeHCoNBoPBEGEcan/Rmh7++/U0dBYRTpXjn7+Zyl5ue8Ekt05Zac23nHse6rmGu6ecc5S1vdbpzsVoBStaNC+rCvqax0Q9G3VHgoeVDOfpVRYUu7wNKry07g1tgb+KOiUkMPt7q9U1jp9kzJwX/lFjtleSzUFbvmbczUsvzk949bv2jJluMPOfOCVq73JrkVoFztqJDu3at/0Ybe745ftOGh5Jd5+1VGhU2f7Hds+RnsChdVcQf8cSNdV+BnxdMLM1FhsGjk5EBIjZBd46URx3CVCj81wtrbk9EKUGEc4xU+qKw0JAd7JL4+s/3y2bljeCqjQm3rQ7ff5uJkC2EI8r5LfVZxnWd3Fl1QWHBbeIiwqqtnIaysWWLXlvTvTye3FaBC7aiQvuZXVVYanvJdFl6+v31fvzR/zOHkRYWOXr3iyZNxkajvlU1aurOj5IsliV3i7cCV3Ztvrw4KjzRDgoWQKW4SWgGq1I4KYbJi5Vjbs1LZkDFk02ftV/+Wv98kRoW3woSJR4uLXRpWdN/jlSUlVd4VS46ULd7YDL8h8rKj/atqNsc/m3HORLj/n3grQKXaUSHMAq5MmBq+Kxe0X2ymlAHLC75nJzEqxHlEvywp1jFY8vQ7ymqM3QV5twBBHLKcl6B9WXxI0mX33lyvd6T/h/HKE24FqFY7KoTMPpVzeMNSBGlqYJrYm1lmIZnMqBCyIZRlQ44LRXWsNNstzExqbSxPO98MV33uk4qVZxaPmT7j+188IUP9gklsBahWOyr8OhW8o6rSkB2gPXzvpvRQ8sii/SYzKoQFNEfKcrvuTDmiB7eV1hjyILb+X8XRQ1qXgjuVDavz48LYgh9+GoQV6Q+ZvFaAGmpHhTDkZ0ZVpeG5YDs3WFr+ofiKn8yoEAY8td4qKRfyt2ZywGQ9Hkoe2Sg3KxU9u6jMN2eGPM77fPbh/tGOl6cXw3yJibYC1FA7KoTVUw6pqjSkLmunZWz/It5enGZ1MqNC48l0EiXDIBd2zKUqXbrxhlCwKuXJ3NSfuLE41Cx6+/VnR9oFl961a1YqG+42wvoWE20FqKF2VEgrxBc9QUjCb/X2uITSjMzl5lUdL1fIh1o8CKHZOfF6XVni9q9Sue2VRw+PMQ8vLdg8fNYxtx198CEPzul8qJBO//SwYaKtADXUjgonpoLXVVX6cbrM2q9NeVQIN9AHFRY6OHOod0sqDGWr144KkzvHtyJ0GpmweRJbAWqoHRUWtfMiVC5b2BxpF32t/eKUR4WU3aW4s+2mD7LHKllCPmRwqx5BnOZgtq6uLJz3HqbBmWFo44RbAWqovyb11+2CVcsWvpXqTH31Ux4VQhd8UVLXoWe7jrWm+JHjS6nUm5VHn5kKnzWes99WcLAJtgLUUD8qpGFBSxeVlwwJA79tvzjlUSFMNyhIetSZX32fa+u8VdV5EEPV/zOes38/7X/VJLYC1FA/KryeSs4pLxkGEKV79ymPClemCo7PLxEmNYeFrYuf7f+pXaY6D+JDqcLKRZ7yzEz7dywHN8FWgBrqR4UwrObe8pIXp5LpkdiUR4WQPT1/vMJompb8Wsgd/XThU8f0vKI6i0lYzu3YysI5UpKGsY4nmxNsBaihflSYk0pWfFWmCQPnpU/0lEeFNBSxYGxj+tpdOq9xWjrcNUU1ph3Orzx6uCbnVBbuNjrS3r2zV3GCrQA11I8KoVf8vdKCs0/Pu3qmPCqktEX58yDCErRfNRorv0jHK8rRlpaJ/7ry6GmwwOCSysLdwr3LRZPZClBD/ajQSHlGl55SVi58osN0o0Muq5a+IK+PL+9Pbbhr+X41Mo4NpIs+98t/IKVDu3PvMKGw/tpzBdMRd6Yi5ZOj9ly857aLrhhPs4QM8Znb/4m1AtTQQ1R4JhX9qKzczalcj+Pv06WUO+L57vT9WzmNOOYcyV1lMXU7rPqhM/LCtMPzBXWmLM9V8yDCync/Cy8f9OF+z5TuPpTuXLLDKPvfCkx7PUSFsOpIWW9bM107Y4t6O5mKqBB62qqnBoehjXnTIB5Mm3/9wytvhaRuBYMhH2kX+EWj3O9SXTHjScgQVTa2OiZMyT4E7X8rMO31EBWaKZfSmpJEQCHh+DWN3lREhcNTzb+qqqr5dTrZoe7NK1e0N5+9/3d/WNn9i5W5laZkKh8UJ339XsjFEB9Mhp8ppROxQsqYbKdK/1uBaa+HqBC/fucXlwqT/U7t8WQqokLMsvxNRVVhFFDeV2qaTzjYXnIuJmDJz/8+kFaSK1/7/btU00hc/zbEtWtLdv956hPpHqzc91Zg2uslKtyayhZ3ay9JU5OHe52qVxUVQiaid8praoaxzDk/B45MW+9Or74R1nLLHySdnl/+qfRvC5OYO+dbpfv63SVdI2H9qIOnvhWY9nqJCs3wXb2hqFCYWdhzkoSqqBBuwAfLbxY+SiVvWdS19a2Umn1zvGZCIvgVm/KqrTmKeENIs9S5akR4tnB74e4hZcu67ku6763AtNdLVGgsSIWLZuwNpGHBZclO8lVFhYEwxfGksqE5K8NZPNS1tfli2vrTuGHovbQhtyuvmWYnLy1ckqoxel+q5ty5HZuuDhf8yoLdB8Jln9cm/W4Fpr2eosKmcFUWjO6fmUq81/PJVEWFkOat1TqsuJ6h0Fv3QfcA5r+mrZkp0d8trfgDQ4/k5sKfADFp01eZM3subfoyf+/mO6nIeXmRo9+twLTXU1QIj+ZaX+feYt8aVjqYX11fRmVUCMshtVYV5lJphv6HnL8qrAGxIvsoIeRbuiXvMcOir1OBJwtGEcUFqYazw53C7KaCKdbhVqAg31KfW4Fpr7eosDD0x23NuYV/64q0/a7eR99XRoVmzL6+uyBxwZLQ19f6YqCsjkOzG0evL7yP+MFPQt0P541wbN4TSnTf0BweLtjhW3P2vyjsvT1/sHSfW4Fpr7eoEBMctS7u+sA9EBddG0cKosqo0Dg2XnKDtw/lFJnXsRZ89yTicNXmPMiIq1m/nVP7UFxB6uvuUYPrY0hqbZ7bVSBMm2oNd/0AmBt/fRTOwe5vKzDt9RgVZodurNa7mXvsDeE7qvR5fJHqqBAfTu7x2hHZ7TvPXBULPN5VwXcpqULufIffhos+7yfC53EZh8F/LOzY2PxkRTz6YM5Y44UjscBlszs2zuqIaIVjF/vbCkx7PUaFOFJ4z2XzUfii2nTZxrBpzRN1asuoERUGXml1ePjokEL5gZdXd67guLirbyA+H8j9yT0QLqov8wp0xqWRd2Yt2r9l24LFnSf3z7z9OxNAPff3nfs3zP5kecemj4tnP/W1FZj2eo0KHR3srdad93w3tPfVhR893pkYdVzJCmtEhcZxw62M7e/uOmzt2od2Xfhxdsua/+3aPWRoKshmGJZy63xuuc/szKXfGv7ZdR+uvef1a7Kvt7YO5dW/6NVMsVce//aZi7695NXdnS+PvdQo1s9WYNrrOSosyX6od29+5YqxzGs1EhvmqRMVGlcvbdX0QXcWpM/T74vCvK0hAcsVs3O2zxmud/i7ZufXf+m6OnuPlM507GcrMO31HBUaWxa3Kl0zvp7vWlGh8fvd1Sew11j3QgwD4dxfLqp/ZRhT8EhegZ9urHP4VwvHM9TZf0fxyjb9bgWmvd6jQuONz6o+ju+O1qwqo15UaNz/dNUJ7HVFTgqn8KR/a/Elk3IutQZz00PPGKk+/PklOVEOqrzdea5yRGL/WoFpbxxRofHWC+Ufx38MjfNkakaFxs6TWpX+I2dYYOgyOG9hSf3vpnLbc+cWHf+niqMPvl76Hrz9VPnuz5avjt3fVmDaG09UaAw8X/JpHDm4dj1ZdaNCY+iZD1ql1vw151YgJFVoHVVW/cLwC/3u3BJbXiw9/OaqBaPn3Fmy99IPFx3IVmDaG1dU2PPb/paij+Pyl3qoJqN2VNjzTXlJyV34xi9zs7eHq+j88p/cR6WSg/m9fpmRCR0+mFmdwHXuzYXnv/p/K/fuayvAOJ3yt9yb6PvmT1kP1+Gvn5t/RYztWjjx2qstWZv/y37Nt9VJJfe69Pm8uLDqwuNr7f2DA98KEI3etnUkczmec8SUfhoXHfqHri/sddfOn7JOtqH3n88+DDzv2rPqH37hyZnfEYMvHFajQ6HDgW8F6DDw+w+vufGzsVWDO2557/kFnw9N/Rk0L/3k5tX3rdixanD4ucWfXvfovCm+IIbuuPy0X20/b2lrZM3m31yydkOvh7/0qjPPv2BsY2vjmle23vw/Vfnk8x34VgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYK//Dwc73HiFbTkQAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI5VDA0OjQxOjU5LTA1OjAwNDYi7wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yOVQwNDo0MTo1OS0wNTowMEVrmlMAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/curv-bg.svg":
/*!**************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/curv-bg.svg ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIwLjY5OCIgaGVpZ2h0PSIxMDM5Ljg2IiB2aWV3Qm94PSIwIDAgMTkyMC42OTggMTAzOS44NiI+DQogIDxwYXRoIGlkPSJVbmlvbl8xIiBkYXRhLW5hbWU9IlVuaW9uIDEiIGQ9Ik0yNDc4Ljc2MywxMDg2LjAzNGgtMTkyMHYtODk1bDEuOTkuNGMtMS44Ni0uNTkzLTIuNzczLS45NjktMi42ODItMS4xMTZDNjM3LjkzOCw2MS42MjYsOTAyLjk4OSw2Ljg2NCwxMTAxLjkyOSw3Ni44NTljMTcwLjgzNCw2MC4xMDgsMzg2Ljk0NCwyMjUuNDYxLDQ4Mi4xNDUsMzIyLjM3NWwxLjg0OS4zNzVjMjIuMzY3LDE1LjM1NCw0Ni42MzQsMzAuODc1LDcyLjEzLDQ2LjEyOSwyNi41NjIsMTUuOSw1NC44MzMsMzEuNzI2LDg0LjAyOSw0Ny4wNTVhMjE0Ni4zLDIxNDYuMywwLDAsMCwyMDEuMDUsOTIuMTY2YzI3Ljk2NywxMS4xNjYsNTYuMTMxLDIxLDgzLjcxMiwyOS4yMjUsMjYuMjEsNy44MTgsNTIuNTIsMTQuMzcyLDc4LjIsMTkuNDgsMjQuMzM3LDQuODQyLDQ4LjY2Miw4LjUsNzIuMywxMC44NjIsMjIuMzQ2LDIuMjM3LDQ0LjU1NywzLjM3LDY2LjAxOSwzLjM2OWE1NTguOTkzLDU1OC45OTMsMCwwLDAsODEuMTM4LTUuNzI4LDQzNC4wNTEsNDM0LjA1MSwwLDAsMCw2Ni45OTItMTUuMTE4LDMwMS4yNDksMzAxLjI0OSwwLDAsMCw1MS43NzgtMjEuNDIsMjAyLjgyOCwyMDIuODI4LDAsMCwwLDE5Ljg1LTEyLjEwOEExNDEuNzQ1LDE0MS43NDUsMCwwLDAsMjQ3OC43NjMsNTgxdjUwNS4wMzdoMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01NTguMDY1IC00Ni4xNzUpIiBmaWxsPSIjMzUyZmQ5IiBvcGFjaXR5PSIwLjA0MSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/feature/1.svg":
/*!****************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/feature/1.svg ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-fd7735a6eb1f3879c3101a636408f9b9.svg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/feature/2.svg":
/*!****************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/feature/2.svg ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-f830efd893912c752db7eb34467d41cc.svg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/feature/3.svg":
/*!****************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/feature/3.svg ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5OCIgaGVpZ2h0PSIxMDUiIHZpZXdCb3g9IjAgMCA5OCAxMDUiPg0KICA8ZyBpZD0iR3JvdXBfMzY0NiIgZGF0YS1uYW1lPSJHcm91cCAzNjQ2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMzNyAtMTIzMikiPg0KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfNzMiIGRhdGEtbmFtZT0iRWxsaXBzZSA3MyIgY3g9IjQ1IiBjeT0iNDUiIHI9IjQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzQ1IDEyNDcpIiBmaWxsPSIjZTFlMGY5Ii8+DQogICAgPGNpcmNsZSBpZD0iRWxsaXBzZV82OSIgZGF0YS1uYW1lPSJFbGxpcHNlIDY5IiBjeD0iMjQuNSIgY3k9IjI0LjUiIHI9IjI0LjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMzcgMTIzMikiIGZpbGw9IiNmZGVmMDAiIG9wYWNpdHk9IjAuMjk5Ii8+DQogICAgPGcgaWQ9Il84MzcxMjQiIGRhdGEtbmFtZT0iODM3MTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjU0LjQzMSAxMDQ1LjMpIiBvcGFjaXR5PSIwLjY5NiI+DQogICAgICA8cGF0aCBpZD0iUGF0aF8yODU3IiBkYXRhLW5hbWU9IlBhdGggMjg1NyIgZD0iTTkyLjgsMzQ0LjUyNmExLjYyNywxLjYyNywwLDAsMSwxLjctLjkxMWMxLjY1Ny4wMjEsMy4zMTUsMCw1LjAzNCwwVjMwOS45NzFIOTYuMzIyYy0xLjM4OC0uMDIxLTEuNzgyLS4zOTQtMS43ODItMS43ODJ2LTguODY3YzAtMS40MDkuMzczLTEuNzgyLDEuNzYxLTEuOGg4Ljk0OWMxLjM0NywwLDEuNzQuMzk0LDEuNzQsMS43NHY5LjAzMmMwLDEuMjQzLS40MTQsMS42MzctMS42MzcsMS42NTctMS4wMzYuMDIxLTIuMDkyLDAtMy4xOSwwdjMzLjU4MWg1LjQ2OWMwLS43LjAyMS0xLjM4OC0uMDIxLTIuMDcyLS4wMjEtLjE2Ni0uMjY5LS4zNzMtLjQ1Ni0uNDM1YTIuODQ3LDIuODQ3LDAsMCwxLTIuMTU0LTIuOXEtLjA2Mi00Ljg0OCwwLTkuN2EyLjgyNCwyLjgyNCwwLDAsMSwyLjY3Mi0zLjAyNWMuMTI0LS4wMjEuMjY5LS4wODMuNDc2LS4xNDV2LTExYzAtMS40MjkuMzczLTEuODIzLDEuODIzLTEuODIzLDEuMzA1LDAsMi41OS0uMDIxLDMuODk1LjAyMSwxLjAxNS4wMjEsMS41NTQuNjg0LDEuMzQ3LDEuNTMzLS4xODYuNzI1LS43MjUuOTExLTEuMzg4LjkzMi0xLjAxNS4wMjEtMi4wMywwLTMuMTA3LDBWMzI1LjNIMTE0LjNjLS4xLS40NTYtLjIyOC0uODctLjMxMS0xLjMwNWE0LjM0NSw0LjM0NSwwLDAsMSwzLjk3OC01LjE3OWM0LjE0My0uMTI0LDguMjg3LS4xNDUsMTIuNDMsMGE0LjQxMSw0LjQxMSwwLDAsMSwzLjk3OCw1Ljg2M2MtLjA2Mi4xODYtLjEuMzczLS4xODYuNjIxaDIuMjc5Yy0uMDYyLS4yMjgtLjEtLjQzNS0uMTY2LS42NDJhNC40MjgsNC40MjgsMCwwLDEsMy45MTUtNS44NDJjNC4wNi0uMTQ1LDguMTIxLS4xNjYsMTIuMTgxLS4wMjEsMy4yNTIuMSw1LjA1NSwyLjk4Myw0LjA2LDYuMDkxYTMuMDkxLDMuMDkxLDAsMCwwLS4wODMuMzk0SDE1OS44VjMxNC45MjJIMTIwLjI3YTYuMjcsNi4yNywwLDAsMS0xLjI0My0uMDgzLDEuMTk0LDEuMTk0LDAsMCwxLDAtMi4zMiw1LjIyNCw1LjIyNCwwLDAsMSwuOTk0LS4wODNoNDAuMzU1YzEuNjM3LDAsMS45NDcuMzExLDEuOTQ3LDEuOTI3LDAsMy40LjAyMSw2Ljc5NSwwLDEwLjE5MiwwLC41OC4xNDUuODA4Ljc0Ni44OTFhMi43MjksMi43MjksMCwwLDEsMi4zNDEsMi40MjQsNi41MTYsNi41MTYsMCwwLDEsLjA2Mi45MTF2OS4wMzJhMi45NDcsMi45NDcsMCwwLDEtMi4yLDMuMjExLjg2Ljg2LDAsMCwwLS40MzUuNTM5Yy0uMDYyLjYyMS0uMDIxLDEuMjY0LS4wMjEsMS45NDdoNS44MjFWMzA5LjkzaC0zLjIzMmMtMS4zODgtLjAyMS0xLjc2MS0uMzczLTEuNzYxLTEuNzgydi04Ljg2N2MwLTEuNDA5LjM3My0xLjc4MiwxLjc4Mi0xLjc4Mmg4Ljk0OWMxLjMwNSwwLDEuNy4zOTQsMS43LDEuNjc4LjAyMSwzLjA0NS4wMjEsNi4wNywwLDkuMTE1LDAsMS4yNDMtLjQxNCwxLjYxNi0xLjY1NywxLjYzNy0xLjAzNi4wMjEtMi4wOTIsMC0zLjE3LDB2MzMuNjQzaDQuNDEzYzEuNjc4LDAsMi4wMDkuMzExLDIuMDA5LDEuOTY4djMuNzI5YzAsMS4zNjctLjM3MywxLjc2MS0xLjc4MiwxLjc2MS0xLjQ5Mi4wMjEtMi45ODMsMC00LjQ3NSwwSDk0Ljg1MWMtLjgyOSwwLTEuNjE2LS4wMjEtMi4wMy0uOTEyQzkyLjgsMzQ4LjI3Niw5Mi44LDM0Ni4zOSw5Mi44LDM0NC41MjZabTIyLjY4NC0uOTk0aDM5LjQ2NXYtMi4zNDFjLS4yNDktLjAyMS0uNDE0LS4wNDEtLjU4LS4wNDEtMS4xLS4wMjEtMi4yMTcsMC0zLjMxNS0uMDYyYTEuMSwxLjEsMCwwLDEtMS4xMTktMS4yLDEuMTQ2LDEuMTQ2LDAsMCwxLDEuMS0xLjIyMiw3Ljk4Miw3Ljk4MiwwLDAsMSwuOTk0LS4wNDFjMy4zMTUsMCw2LjYyOS4wMjEsOS45NDQtLjAyMS4zMzEsMCwuOTMyLS4yNjkuOTUzLS40NTYuMDgzLTEuMi4wNDEtMi40LjA0MS0zLjU4NGgtNTUuNXYyLjhjMCwxLjI4NCwwLDEuMjg0LDEuMjg0LDEuMjg0aDM2LjIxMmE2LjI2OCw2LjI2OCwwLDAsMSwxLjA3Ny4wNjIsMS4wNywxLjA3LDAsMCwxLC45OTQsMS4yLDEuMDk0LDEuMDk0LDAsMCwxLS45NzQsMS4xNiw2LjE1LDYuMTUsMCwwLDEtMS4wNzcuMDYySDExNS40NjRDMTE1LjQ4NCwzNDEuOTc4LDExNS40ODQsMzQyLjcsMTE1LjQ4NCwzNDMuNTMyWm00Ny40Mi0xMS41OGExLjc3NSwxLjc3NSwwLDAsMCwuMDYyLS4zNTJjMC0uODA4LjAyMS0xLjYuMDIxLTIuNCwwLTEuMzI2LDAtMS4zMjYtMS4zMjYtMS4zMjZIMTEwLjJjLS42ODQsMC0xLjM4OC0uMDIxLTIuMDcyLjAyMS0uMjI4LjAyMS0uNi4yNDktLjYuMzk0LS4wNDEsMS4yMjItLjAyMSwyLjQ0NS0uMDIxLDMuNjY3Wk05NS4zMjcsMzQ4LjVoNzkuOHYtMi4zNDFoLTc5LjhabTI4Ljk2MS0yNy4yNDJ2LS4wMjFjLTEuODIzLDAtMy42NDYtLjAyMS01LjQ2OSwwYTMuMzYsMy4zNiwwLDAsMC0xLjI4NC4yMjgsMi4wMTgsMi4wMTgsMCwwLDAtMS4xNiwyLjE3NSwyLjA0LDIuMDQsMCwwLDAsMS45NjgsMS43YzMuOTE1LjAyMSw3LjgzMS4wMjEsMTEuNzY3LDBhMS45MDcsMS45MDcsMCwwLDAsLjg3LS4yNDksMi4wMjMsMi4wMjMsMCwwLDAtLjg5MS0zLjgzM0MxMjguMTYzLDMyMS4yNDEsMTI2LjIzNiwzMjEuMjYyLDEyNC4yODksMzIxLjI2MlptMjIuMSw0LjA4MXYuMDIxaDUuMzg2YTMuNDM0LDMuNDM0LDAsMCwwLDEuMjIyLS4xODYsMi4wNzgsMi4wNzgsMCwwLDAsMS4yNjQtMi4yLDIuMDI3LDIuMDI3LDAsMCwwLTEuODY0LTEuNzE5Yy00LS4wNDEtOC0uMDIxLTEyLjAxNSwwYTEuNzI3LDEuNzI3LDAsMCwwLS43LjIwNywyLjAzMSwyLjAzMSwwLDAsMCwuODI5LDMuODUzQzE0Mi40NzgsMzI1LjM4NCwxNDQuNDI1LDMyNS4zNDMsMTQ2LjM5MywzMjUuMzQzWm0yNy4xMTgtMTcuOTJ2LTcuMzU0SDE2Ni4ydjcuMzU0Wm0tNjkuMTEuMDIxVjMwMC4xMUg5Ny4wODh2Ny4zMzRabTUuNzgsMzYuMDg4aDIuNjkzdi0yLjM0MWgtMi42OTNabTQ3LjM3OC4wMjFoMi42OTN2LTIuMzYyaC0yLjY5M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTY4LjQyMikiIGZpbGw9IiMzNTJmZDkiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzI4NTgiIGRhdGEtbmFtZT0iUGF0aCAyODU4IiBkPSJNMjIxLjM0OCwyMTMuNzQ4djcuMDIzaDI3LjU3M3YtNy4wNjRIMjQ2LjdhNS4zNzYsNS4zNzYsMCwwLDEtMS4xNi0uMDgzLDEuMDE1LDEuMDE1LDAsMCwxLS45MTItMS4xODFjLjA4My0uNDM1LjU1OS0xLjA3Ny44Ny0xLjFhNDUuMzQyLDQ1LjM0MiwwLDAsMSw1LjAzNC0uMDIxYy42NDIuMDIxLjg3LjYyMS44OTEsMS4yMjIuMDIxLjc0Ni4wMjEsMS40OTIuMDIxLDIuMjM3djExLjZjMCwxLjU3NC0uMzMxLDEuOTA2LTEuODg1LDEuOTA2SDIyMC43MjdjLTEuNjE2LDAtMS45MjctLjMzMS0xLjkyNy0xLjk2OFYyMTMuMTQ3YzAtMS42MTYuMzExLTEuOTQ3LDEuOTQ3LTEuOTQ3aDE5LjA1OWEzLjk5MSwzLjk5MSwwLDAsMSwuNS4wMjFjLjc4Ny4wODMsMS4zMjYuNTgsMS4yNjQsMS4yNDNhMS4yMjQsMS4yMjQsMCwwLDEtMS4yMjIsMS4yMjJjLS4yNjkuMDIxLS41NTkuMDIxLS44MjkuMDIxSDIyMi4yQzIyMS45NDksMjEzLjcwNywyMjEuNjgsMjEzLjcyNywyMjEuMzQ4LDIxMy43NDhabTI3LjU3Myw5LjY1NEgyMjEuMzY5djIuMzQxaDI3LjU1M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05OS44OTcgMCkiIGZpbGw9IiMzNTJmZDkiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzI4NTkiIGRhdGEtbmFtZT0iUGF0aCAyODU5IiBkPSJNMjQxLjU5MiwyMzkuOTQ1Yy0uNjQyLDAtMS4yNjQuMDIxLTEuOTA2LDBhMS4xOTEsMS4xOTEsMCwwLDEtMS4yMjItMS4xMTksMS4xNzYsMS4xNzYsMCwwLDEsMS4xLTEuMzA1YzEuMzY3LS4wNjIsMi43NTUtLjA2Miw0LjEyMywwYTEuMTE5LDEuMTE5LDAsMCwxLDEuMDc3LDEuMzA1LDEuMTg2LDEuMTg2LDAsMCwxLTEuMiwxLjExOWgtMS45NjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE1LjQ4MSAtMjAuODMyKSIgZmlsbD0iIzM1MmZkOSIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/gallery/1.jpg":
/*!****************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/gallery/1.jpg ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/gallery/2.jpg":
/*!****************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/gallery/2.jpg ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/gallery/3.jpg":
/*!****************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/gallery/3.jpg ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/gallery/4.jpg":
/*!****************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/gallery/4.jpg ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAJYAYABAREA/8QAHAABAQADAQEBAQAAAAAAAAAAAAgFBwkGBAID/8QARBABAAEDAwMCBAQDAggPAAAAAAECAwQFBhEHCBITIQkxQVEUIjJhFSNxQmIWFzRDgZGhsRgZJDhTWHJzdYKTlrXB0//aAAgBAQAAPwCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf3k91N3t70LA0PamLj5e7teorrxYyI8rWFj0z4zfrpj9UzV+Win5TMVTPMU+NWidB6Q/EU6laZb3ln9W8nbleXRGRawczWbuDdmmY5j+RjWpot8x/Zq8Zj6xD99Nu67rx0I6sY3SLuhirNwMq5atTn5FNv18W3cnxt5NF63EU37HPPl5c1RxV7xNM0T0AvXrONZuZGRdot2rVM1111zxTTTEczMz9IiHPjdHc73GdzvUnN6e9snq6NoWHNU/jbXjavXLFNXj+Iv3645s0zPE00UcVe/H5p9o/lurYXxCOhGj3uoU9Vb25sLTaJyc6zZ1W7qUWbNPvXVXZyrcc0xHzmiJmI5n2iOYp7tN7lMXuN2Pk5+dg2dP3JolyjH1fEszM2pmuJm3ft8zMxRX41/lmZmJoqjmY4md4vG9Xuqm2ujOwNU6gbpvcY2n2+LNimqIuZeRV7W7FH96qf9Uc1T7RKRexruE6rdZ+uu6rW+N05OVpleiZOo4+mRxGNiVzl48Uxbp45iKaa6qY5mZ4n35n3XYAkDus7v92bS3pY6GdB9Op1HeeTVbs5WXTYjInFu3IiaLFm3PNNd3iYqqmqJppieOJnnx1zn9E/iNafple946s5WVn26PxFWjWNwV13uYjmaYszRGNVP92KpiflHLb3Zf3Y6v1sjUOnnUixasbz0SzN/1qLXoxnWKaoormq37RRdoqmmKoiIiYq5iI4lurrh1f0Dob041LqDr9ub9OLFNnExKa4pry8qv2t2qZ+nPEzM8TxTTVPE8cIi2hnd9vdpRk732tvn/BDbvrV28SbWdc0zFqmmeKqLXo01XrsUz7TXXzHPMeXMTEfftvuR7ju1jqXg7A7lr97Xtu500zGdcqi/coszV4zkY+RERVdimf1W7nNXEfKmZjnoPjZOPmY1rMxL9F6xfopuWrluqKqa6Ko5iqJj5xMTzyirud7t+pOR1Op7e+3HG9XX/XjCzNQs2qLt6rKmOarFmK+aKIojn1LlX6Zir9PhNU+L1/pf8RHpfol7qNT1Vy9bnBtzlZWnY+sXM+5at0xzVM49+36VcRHPNNHlP2iVGdoPdBZ7idp5djXMXHwd2aD4U6jYscxayLdfPhkW4mZmImYmKqeZ8ZiPfiqFAgAAAAAAAlXrL2mb46q9zO2+r93XdAnbGiXdMi5p+TcvfiK7GPe9W5RFMW5onyqqr4iao/V78Kqc6Piaaho+4epWxtp7f8M3cWNh37WVYx+K7sevdt/hrUxHv5TMXJin58VxP9qObn3TtzXNW6QavtHHveWsZm28jTqLnlxzk14tVuJ5/wC3PzRD8Nbem2dl7o3t033ZetaPuPVLuL+FtZn8mu9Xjzeou4/5uOLlM1xMUfOfz+35ZXF1R6g7N6Z7J1TdW+dQxcfTcbGuc2r1cRVlVeM8WKKZ/XXX+mKY+/2RR8LjbOu06nvjeNeNdt6Pcx8bTrdyqJii9kRXVXMUz9Zop45+3qU/d0AvXrWParv37tFu1bpmuuuuqIpppiOZmZn5REOf+4s7Ve/nuItbT0e/kWulGxrvqZWRbmaacqOeKrkT/wBJemmaLfPvTbiqrjnyicN8PPExsDue3/g4dmm1j42jahatW6flRRTqGPFMR/SIhenU3K6g4GxtW1Dpdi6Vl7mxbE38HF1O1cuWMmqn3m1xRcomKqoiYpny4iqY59uWle0PuwyuvtvWNr7503T9G3no1yq7Xh4lu5at38XmKZqpouV1V010V/lriZ9vKmfrMR6Puv7kcPt12Hb1PAs4edufV7voaRgZPlNurx4m5euRTVTV6dETHymJmqqmOY5mYznRbfHU7WekFHUbrVpejaTn5GNc1OjA0zGvWfw+FFHlR6sXbtyfUqiJq45jiKqYmOYlH/w79Hr6i9ad+9at0RTkahgW5vRdue8UZWfcuVV3ImflMUWrlP7RclccdZekFWpfwenqrs+c/wAvD8LGu4vreX28PPy5/bh5Db3a50r211gyOuWhUapj7hzb+TlXaaMuPwlyvIoqpuT6fj8p85q+f6uJS/8AFI3VlXMzYew8e5V6Phlarftx/brmabVqePvERej/AMy3OnGz8Hp/sHb2ydOtUW7GiabYwoimP1VUURFVU/eaquapn6zMynH4kuzcTXeg+PuubFP4zbOr2LtF3j80Wb/Nm5Rz9pqqszP70Q9j2l9Q68/tI29uzVbk3a9vaVl41/mf83hV3KaI5/7q3bTb8NTQat39Ud+9VNd/5VqOFjW6IvXI5n1827cruXI/vcWao5+1c/d0Sc3ui1mno18RDWNkaXEY2l6rnajgejR7U0Y9+zOXYtxH2pqpsxH7Q6QgAAAAAAAJr7n+gnX7q1urA1XpT1iubV0nH0unEyNP/i+bi27+RF25VNyaLETTPNNdFPMxz+X7RCQtsabuPsl614GvdeOmWFuWnPqm7h61byq79VExPFzIxqqpiiu5T5RM03aIrj8sxNHlzPS3Vuoe0tG6f3+qGXqtE7cs6ZGr/i6I5i5jTbiumqiPnM1RMeMfOZmIc4P8Bd+fEC6q6tvfa+1dC2boOn1U42RqVVqfO59aIuzT/lGR48TPEUxTT4xMx+Xy9P1F+Gp1J0zQbmr7U6l427s7DtTXGn5WHXiXLlMRz4Wq5u3KZqn6RV4RP3hu/sZ7jdG6h6Bc6Q6htXT9sbh2rjc0YeDY9DHysemqKa7lNufei7TXVHqUzzzNXlHzqinB97/W7XtX1HB7WukfqZm590128fV5x6vzWbFz3pxuY/TNdP5rkzxFNr5+1c8b/wC3zoloPQTptgbI0n07+Z/lOq50U8TmZlUR51/eKY4immPpTTH15mYz+H//AM6nqL/4VqX/AMljuiyC+8bpduLoR1P0ruz6SWfw9MZ1FWuWLdM+nRk1flm5XEf5q/TM0V/L89XPPNz2xvQvau4O9Xr1n9fupOmza2Ztq/RY03TK6vUtV3Lf5rWLEzERXTR5erdnjiqquI44qmItXrLVco6Qb5rs8+dO29Tmnj7/AIW5w5XdsHT3qh1sztV6N7O3Nc0HbWoza1LcuXRTMxNm15UW6KoiYm5zNyrxtcxEzzVP6OYrPVPhfdKrmhV2NF6gbqx9Y9P8mTlTj3sbz4+tmm3RV48/SLnP7y8N2f8AVXqJ0V65ZXax1P1C5k4FWRdwcGLl2blOFlU0TctzZqq9/RvUccU8fOuiYinmrnFfEijx6+bEuX/ax/BceJmfl7Zt7y/2TDo6n7v1qt09qm84r45qr02KP6/xDHn/AHRLWfafbyKuwvddNPl5V4O4vS/9CuPb/TywHwsJt/wLqJET/M/F6b5f08L/AB/9rsc4t3/zPif2Pwv01rTOeP20yz5/7pdHQAAAAAAAR7u/ut6jbA7xcbo7um7o+PsjLzcWzav14k03vSycen06puzVxERfq8Znjjimr+qwkT/FE1rQ7fTvZ+3rt21Os39arzbFHMTXTjUWK6Lk/eImu5a/rNP7Mv1F21uT/i2sbSPSvfjsfbOk5l61xPnTj0ZFi9VE/WPG1HMx9qZh93w19f0DO6D5egafdtRqel61kV6hZiY8/wCbTRNu7MfPiaafGJ+9uY+isblyi1RVdu100UURNVVVU8RER85mXN3tgyMfeff5ubdezeK9D/Ga7qFV21+i5jXKq6KK/wClVy7bqj+sPbdTOyHuF1zrbubqv056k6Bt6rV8+9k4l+zq2diZlq1cjiaaqrNieOY9piKph8v/AARu/D/rP1/+8tZ//JOXb90t617/AOqu49q9Leo87b3Jp2Jk3dR1KNWy8T8TboybdFyn1bFM3K/K5VRVxVERPjzPvEOoPQHZnULYHS7S9rdUd2TuTceLcyasrUZzr+X6tNd6uq3Hq34i5V40VU0+8e3HEeyTO6zqLuPuW6waX2p9Jsvz03EzYnXs23zNqq/bnm5Ncx87WPHMzHP5rntHvTTM+e6Pbl13sb7i9Q6Pb81C5c2Nua7brx8+7Hjbpprnxx82PpTxxNq7EfLxmfeKKeehGvaTj7i0DUdCyKv5Gp4d7ErmPf8AJcommZ/1SgX4bmp4uxOqPUTpTufww9w5NNmi1auTxVVcwbl+i/ap5+dX82KuI9+KKp+US6FObe4czF6pfEm0+/s2unKsabreF62RZnmmr8Bj0TkVcx7cRNmujn68R94ez+KNsvKu6fsjqJi2aps4l3J0jLuRH6ZuRTds/wBP0Xv9ixOkm+sHqZ0021vvT79F2jWNOs5FzxnnwvePF23P703Irpn96ZTf8S3feDonRnTdjU5FP8Q3Lqtuv0eff8LjxNddfH29SbMf6Z+zaHax03nbXa9tbZet49Vu5qmk3sjNoqjiuIzaq7vjVH0mKLtNMx/dSz8O/WbnTTrhvvoxuauMXUc63Nmmiv29TLwLtyKqKY+szRcu1R+1EuiNy5btW6rt2umiiiJqqqqniKYj5zM/SHOTtzn/AB39+24eqGnRN/R9IydR1O3e4/LXZ8JxMX3+kzFdFcR/cn7OjoAAAAAAAJ57se0nSe4zAw9Z0nU7Ojbt0m1NjFzL1E1WcmxMzVFm94/miIqmZpqiJmnyq9qufbQmmbK+J3sTDo2vt3W/4lp+NT6NnIrztKyvGiPaOLmX/O4iPlE/KPozPTbsW6l7735Z6l91W8adXuWq6Lk6VRlTk3cjxnmm1ducRRbtRP8AYt8xMTMc0rgy9Pwc7AvaVmYdm9h5FmrHu49dETbrtVU+NVE0/KaZiZjj7IS3l2OdZuk+9sjfnapverGs3pqmnTruZ+HybNFU8+j5V82si1E/KLkxPtTzFUx5MdrPSn4kXV/Dq2hv/cdrSdGyo9LJquZ+n49q7bn5xcjAibldMx86ZiYn7Ke7Ze2Ta/bjtnIxMLMnVdf1Xwq1TVK7fh6njz42rVPM+FunmZ45mZmZmZ+UU7oEo9r/AGodROinWrdfUfdWs7cytN13Cy8bGtafkX679FV3LtXqZrprs0UxHjbmJ4qn34+fzb26z4vU/UOnmqaV0gr0+zuXUKPwuPl52RVZow6KomK71M001TNcR+mOPaqYmflxOrezztcudv239R1fdt3Dzt565cmnMyceubluxjU1c0WbddURM+U/nrniOZ8Y9/CJnL923bhjdw+wKMHTKsXF3To1ycjR8u/M00fm4i7YuVREzFFcRE+0e1VNM/LmJz3bZtvq5svplhbM6w3tMy9R0XjFws3Cy6r/AK+HER6cXJqopmK6P0c+/NMUzPvy053Qdlmr9Qt409Yei24Le39401UXsmzVerx6Mm9RERTftXqI5tXuIiJ9uKuInmmeZq1pmbE+JxuvT6tl61uCrC0u9T6FzN/iOmWZqo+U+V7H5yJjj5/Wfry372p9o2h9u2Hk65qmo2ta3fqdmLGTnW6Jps41nmKps2In83E1RE1VzxNXjT7UxHE7e6m9ONs9Wdj6rsHd2NVd07VbXhVVRMRcs1xPlRdtzPyrpqiKo+ntxMTEzCJ9D6Ad8/bjk52gdDtw4G4tt5V6q9bt+ti00xM+3nVZy5iLVcxEc+nVMTxHMzx7Zvp52Z9YuqPUnG6qd2u5LOd+Dqoqo0ei/Rerv+E+VNmv0oizasczzNFvny5q+XMzNyREUxFNMRER7REJO7oOzbXOoG8rHWborr9rQN649Vu7kW67tVijKu24iKL1u7TEzbvRERTPMeNXEczTMTNWttd2F8SjqfpFfT/d2o4OmaNmUfh8zMnM0+zGRan2mLlWL5XppmOeaaaY8omYmJU52z9uW3e3PZdzQ8DKjUta1Oum/q+pzb8PXuUxMU0UU/Om3RzV4xM881VTPz4jb4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/gallery/5.jpg":
/*!****************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/gallery/5.jpg ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAJYAYABAREA/8QAHAABAQADAQEBAQAAAAAAAAAAAAgFBwkGBAID/8QARBABAAEDAwMCBAQDAggPAAAAAAECAwQFBhEHCBITIQkxQVEUIjJhFSNxQmIWFzRDgZGhsRgZJDhTWHJzdYKTlrXB0//aAAgBAQAAPwCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf3k91N3t70LA0PamLj5e7teorrxYyI8rWFj0z4zfrpj9UzV+Win5TMVTPMU+NWidB6Q/EU6laZb3ln9W8nbleXRGRawczWbuDdmmY5j+RjWpot8x/Zq8Zj6xD99Nu67rx0I6sY3SLuhirNwMq5atTn5FNv18W3cnxt5NF63EU37HPPl5c1RxV7xNM0T0AvXrONZuZGRdot2rVM1111zxTTTEczMz9IiHPjdHc73GdzvUnN6e9snq6NoWHNU/jbXjavXLFNXj+Iv3645s0zPE00UcVe/H5p9o/lurYXxCOhGj3uoU9Vb25sLTaJyc6zZ1W7qUWbNPvXVXZyrcc0xHzmiJmI5n2iOYp7tN7lMXuN2Pk5+dg2dP3JolyjH1fEszM2pmuJm3ft8zMxRX41/lmZmJoqjmY4md4vG9Xuqm2ujOwNU6gbpvcY2n2+LNimqIuZeRV7W7FH96qf9Uc1T7RKRexruE6rdZ+uu6rW+N05OVpleiZOo4+mRxGNiVzl48Uxbp45iKaa6qY5mZ4n35n3XYAkDus7v92bS3pY6GdB9Op1HeeTVbs5WXTYjInFu3IiaLFm3PNNd3iYqqmqJppieOJnnx1zn9E/iNafple946s5WVn26PxFWjWNwV13uYjmaYszRGNVP92KpiflHLb3Zf3Y6v1sjUOnnUixasbz0SzN/1qLXoxnWKaoormq37RRdoqmmKoiIiYq5iI4lurrh1f0Dob041LqDr9ub9OLFNnExKa4pry8qv2t2qZ+nPEzM8TxTTVPE8cIi2hnd9vdpRk732tvn/BDbvrV28SbWdc0zFqmmeKqLXo01XrsUz7TXXzHPMeXMTEfftvuR7ju1jqXg7A7lr97Xtu500zGdcqi/coszV4zkY+RERVdimf1W7nNXEfKmZjnoPjZOPmY1rMxL9F6xfopuWrluqKqa6Ko5iqJj5xMTzyirud7t+pOR1Op7e+3HG9XX/XjCzNQs2qLt6rKmOarFmK+aKIojn1LlX6Zir9PhNU+L1/pf8RHpfol7qNT1Vy9bnBtzlZWnY+sXM+5at0xzVM49+36VcRHPNNHlP2iVGdoPdBZ7idp5djXMXHwd2aD4U6jYscxayLdfPhkW4mZmImYmKqeZ8ZiPfiqFAgAAAAAAAlXrL2mb46q9zO2+r93XdAnbGiXdMi5p+TcvfiK7GPe9W5RFMW5onyqqr4iao/V78Kqc6Piaaho+4epWxtp7f8M3cWNh37WVYx+K7sevdt/hrUxHv5TMXJin58VxP9qObn3TtzXNW6QavtHHveWsZm28jTqLnlxzk14tVuJ5/wC3PzRD8Nbem2dl7o3t033ZetaPuPVLuL+FtZn8mu9Xjzeou4/5uOLlM1xMUfOfz+35ZXF1R6g7N6Z7J1TdW+dQxcfTcbGuc2r1cRVlVeM8WKKZ/XXX+mKY+/2RR8LjbOu06nvjeNeNdt6Pcx8bTrdyqJii9kRXVXMUz9Zop45+3qU/d0AvXrWParv37tFu1bpmuuuuqIpppiOZmZn5REOf+4s7Ve/nuItbT0e/kWulGxrvqZWRbmaacqOeKrkT/wBJemmaLfPvTbiqrjnyicN8PPExsDue3/g4dmm1j42jahatW6flRRTqGPFMR/SIhenU3K6g4GxtW1Dpdi6Vl7mxbE38HF1O1cuWMmqn3m1xRcomKqoiYpny4iqY59uWle0PuwyuvtvWNr7503T9G3no1yq7Xh4lu5at38XmKZqpouV1V010V/lriZ9vKmfrMR6Puv7kcPt12Hb1PAs4edufV7voaRgZPlNurx4m5euRTVTV6dETHymJmqqmOY5mYznRbfHU7WekFHUbrVpejaTn5GNc1OjA0zGvWfw+FFHlR6sXbtyfUqiJq45jiKqYmOYlH/w79Hr6i9ad+9at0RTkahgW5vRdue8UZWfcuVV3ImflMUWrlP7RclccdZekFWpfwenqrs+c/wAvD8LGu4vreX28PPy5/bh5Db3a50r211gyOuWhUapj7hzb+TlXaaMuPwlyvIoqpuT6fj8p85q+f6uJS/8AFI3VlXMzYew8e5V6Phlarftx/brmabVqePvERej/AMy3OnGz8Hp/sHb2ydOtUW7GiabYwoimP1VUURFVU/eaquapn6zMynH4kuzcTXeg+PuubFP4zbOr2LtF3j80Wb/Nm5Rz9pqqszP70Q9j2l9Q68/tI29uzVbk3a9vaVl41/mf83hV3KaI5/7q3bTb8NTQat39Ud+9VNd/5VqOFjW6IvXI5n1827cruXI/vcWao5+1c/d0Sc3ui1mno18RDWNkaXEY2l6rnajgejR7U0Y9+zOXYtxH2pqpsxH7Q6QgAAAAAAAJr7n+gnX7q1urA1XpT1iubV0nH0unEyNP/i+bi27+RF25VNyaLETTPNNdFPMxz+X7RCQtsabuPsl614GvdeOmWFuWnPqm7h61byq79VExPFzIxqqpiiu5T5RM03aIrj8sxNHlzPS3Vuoe0tG6f3+qGXqtE7cs6ZGr/i6I5i5jTbiumqiPnM1RMeMfOZmIc4P8Bd+fEC6q6tvfa+1dC2boOn1U42RqVVqfO59aIuzT/lGR48TPEUxTT4xMx+Xy9P1F+Gp1J0zQbmr7U6l427s7DtTXGn5WHXiXLlMRz4Wq5u3KZqn6RV4RP3hu/sZ7jdG6h6Bc6Q6htXT9sbh2rjc0YeDY9DHysemqKa7lNufei7TXVHqUzzzNXlHzqinB97/W7XtX1HB7WukfqZm590128fV5x6vzWbFz3pxuY/TNdP5rkzxFNr5+1c8b/wC3zoloPQTptgbI0n07+Z/lOq50U8TmZlUR51/eKY4immPpTTH15mYz+H//AM6nqL/4VqX/AMljuiyC+8bpduLoR1P0ruz6SWfw9MZ1FWuWLdM+nRk1flm5XEf5q/TM0V/L89XPPNz2xvQvau4O9Xr1n9fupOmza2Ztq/RY03TK6vUtV3Lf5rWLEzERXTR5erdnjiqquI44qmItXrLVco6Qb5rs8+dO29Tmnj7/AIW5w5XdsHT3qh1sztV6N7O3Nc0HbWoza1LcuXRTMxNm15UW6KoiYm5zNyrxtcxEzzVP6OYrPVPhfdKrmhV2NF6gbqx9Y9P8mTlTj3sbz4+tmm3RV48/SLnP7y8N2f8AVXqJ0V65ZXax1P1C5k4FWRdwcGLl2blOFlU0TctzZqq9/RvUccU8fOuiYinmrnFfEijx6+bEuX/ax/BceJmfl7Zt7y/2TDo6n7v1qt09qm84r45qr02KP6/xDHn/AHRLWfafbyKuwvddNPl5V4O4vS/9CuPb/TywHwsJt/wLqJET/M/F6b5f08L/AB/9rsc4t3/zPif2Pwv01rTOeP20yz5/7pdHQAAAAAAAR7u/ut6jbA7xcbo7um7o+PsjLzcWzav14k03vSycen06puzVxERfq8Znjjimr+qwkT/FE1rQ7fTvZ+3rt21Os39arzbFHMTXTjUWK6Lk/eImu5a/rNP7Mv1F21uT/i2sbSPSvfjsfbOk5l61xPnTj0ZFi9VE/WPG1HMx9qZh93w19f0DO6D5egafdtRqel61kV6hZiY8/wCbTRNu7MfPiaafGJ+9uY+isblyi1RVdu100UURNVVVU8RER85mXN3tgyMfeff5ubdezeK9D/Ga7qFV21+i5jXKq6KK/wClVy7bqj+sPbdTOyHuF1zrbubqv056k6Bt6rV8+9k4l+zq2diZlq1cjiaaqrNieOY9piKph8v/AARu/D/rP1/+8tZ//JOXb90t617/AOqu49q9Leo87b3Jp2Jk3dR1KNWy8T8TboybdFyn1bFM3K/K5VRVxVERPjzPvEOoPQHZnULYHS7S9rdUd2TuTceLcyasrUZzr+X6tNd6uq3Hq34i5V40VU0+8e3HEeyTO6zqLuPuW6waX2p9Jsvz03EzYnXs23zNqq/bnm5Ncx87WPHMzHP5rntHvTTM+e6Pbl13sb7i9Q6Pb81C5c2Nua7brx8+7Hjbpprnxx82PpTxxNq7EfLxmfeKKeehGvaTj7i0DUdCyKv5Gp4d7ErmPf8AJcommZ/1SgX4bmp4uxOqPUTpTufww9w5NNmi1auTxVVcwbl+i/ap5+dX82KuI9+KKp+US6FObe4czF6pfEm0+/s2unKsabreF62RZnmmr8Bj0TkVcx7cRNmujn68R94ez+KNsvKu6fsjqJi2aps4l3J0jLuRH6ZuRTds/wBP0Xv9ixOkm+sHqZ0021vvT79F2jWNOs5FzxnnwvePF23P703Irpn96ZTf8S3feDonRnTdjU5FP8Q3Lqtuv0eff8LjxNddfH29SbMf6Z+zaHax03nbXa9tbZet49Vu5qmk3sjNoqjiuIzaq7vjVH0mKLtNMx/dSz8O/WbnTTrhvvoxuauMXUc63Nmmiv29TLwLtyKqKY+szRcu1R+1EuiNy5btW6rt2umiiiJqqqqniKYj5zM/SHOTtzn/AB39+24eqGnRN/R9IydR1O3e4/LXZ8JxMX3+kzFdFcR/cn7OjoAAAAAAAJ57se0nSe4zAw9Z0nU7Ojbt0m1NjFzL1E1WcmxMzVFm94/miIqmZpqiJmnyq9qufbQmmbK+J3sTDo2vt3W/4lp+NT6NnIrztKyvGiPaOLmX/O4iPlE/KPozPTbsW6l7735Z6l91W8adXuWq6Lk6VRlTk3cjxnmm1ducRRbtRP8AYt8xMTMc0rgy9Pwc7AvaVmYdm9h5FmrHu49dETbrtVU+NVE0/KaZiZjj7IS3l2OdZuk+9sjfnapverGs3pqmnTruZ+HybNFU8+j5V82si1E/KLkxPtTzFUx5MdrPSn4kXV/Dq2hv/cdrSdGyo9LJquZ+n49q7bn5xcjAibldMx86ZiYn7Ke7Ze2Ta/bjtnIxMLMnVdf1Xwq1TVK7fh6njz42rVPM+FunmZ45mZmZmZ+UU7oEo9r/AGodROinWrdfUfdWs7cytN13Cy8bGtafkX679FV3LtXqZrprs0UxHjbmJ4qn34+fzb26z4vU/UOnmqaV0gr0+zuXUKPwuPl52RVZow6KomK71M001TNcR+mOPaqYmflxOrezztcudv239R1fdt3Dzt565cmnMyceubluxjU1c0WbddURM+U/nrniOZ8Y9/CJnL923bhjdw+wKMHTKsXF3To1ycjR8u/M00fm4i7YuVREzFFcRE+0e1VNM/LmJz3bZtvq5svplhbM6w3tMy9R0XjFws3Cy6r/AK+HER6cXJqopmK6P0c+/NMUzPvy053Qdlmr9Qt409Yei24Le39401UXsmzVerx6Mm9RERTftXqI5tXuIiJ9uKuInmmeZq1pmbE+JxuvT6tl61uCrC0u9T6FzN/iOmWZqo+U+V7H5yJjj5/Wfry372p9o2h9u2Hk65qmo2ta3fqdmLGTnW6Jps41nmKps2In83E1RE1VzxNXjT7UxHE7e6m9ONs9Wdj6rsHd2NVd07VbXhVVRMRcs1xPlRdtzPyrpqiKo+ntxMTEzCJ9D6Ad8/bjk52gdDtw4G4tt5V6q9bt+ti00xM+3nVZy5iLVcxEc+nVMTxHMzx7Zvp52Z9YuqPUnG6qd2u5LOd+Dqoqo0ei/Rerv+E+VNmv0oizasczzNFvny5q+XMzNyREUxFNMRER7REJO7oOzbXOoG8rHWborr9rQN649Vu7kW67tVijKu24iKL1u7TEzbvRERTPMeNXEczTMTNWttd2F8SjqfpFfT/d2o4OmaNmUfh8zMnM0+zGRan2mLlWL5XppmOeaaaY8omYmJU52z9uW3e3PZdzQ8DKjUta1Oum/q+pzb8PXuUxMU0UU/Om3RzV4xM881VTPz4jb4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/logo.svg":
/*!***********************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/logo.svg ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIwLjIyNyIgaGVpZ2h0PSI0OC4yNDUiIHZpZXdCb3g9IjAgMCAxMjAuMjI3IDQ4LjI0NSI+DQogIDxkZWZzPg0KICAgIDxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoIj4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzgwNTQiIGRhdGEtbmFtZT0iUGF0aCA4MDU0IiBkPSJNMS4xNzMtNy4yNjgsMTA3Ljc1Ni03LjdsLS43MzMtMjIuNzgxTDIuNTEyLTMwLjI2NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjE3MyAzMC40ODEpIiBmaWxsPSIjZmRlZjAwIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4NCiAgICA8L2NsaXBQYXRoPg0KICAgIDxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoLTIiPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfODA1NiIgZGF0YS1uYW1lPSJQYXRoIDgwNTYiIGQ9Ik0xLjAxNy0xMi4xNThsLjAwNi0uMTQ4LjAwNi4xNTFaTTQyLjYtMjkuNzM5bC0uMDQyLS4wMTMsMS45MDgtLjAwNi4wNDUuMDE2Wk03LjEtNi4wOGwuODE3LjAxOWMtLjIsMC0uNDA4LjAxMy0uNjEuMDEzUzYuOS02LjA1Niw2LjctNi4wNjFabTMxLjYuNmMtMi42NTMuMDUxLTMuMTc0LjA1NC01Ljc5LjAzMkMzNi4zMzQtNS41MTIsMzYuMzM0LTUuNTEyLDM4LjctNS40ODRabTQzLjgtLjI5Mi0yLjctLjFjLS40MzctLjAxOS0uNC0uMDQ1LjM2NC0uMDU2LjU3Ni0uMDA4LDEuMzY0LS4wMDYsMi4wNTQsMCwuMjQzLDAsLjU5My4wMDguNjk0LjAxNC42MzkuMDQzLDEuMjg5LjA4NSwxLjc2Ny4xMjkuMS4wMS0uNDg3LjAyNS0uNzgyLjAzOUM4My4yNTUtNS43NjQsODIuNzUzLTUuNzY3LDgyLjUtNS43NzZabS0zNS4wMTIuMzM0YzMuMjkyLS4wNDksNi45LS4wNTksMTAuNS0uMDY4LjMsMCwuODQzLjAxMi45MzUuMDIycy0uMTcuMDI5LS40NC4wMzJjLTMuMzY4LjAzOS02LjgxMS4wNzEtMTAuNDU3LjA4LS41NSwwLTEuMTI4LS4wMDktMi41NTEtLjAyWm0tNi4xLTI1LjE1MUw0Ni4zNS0zMC42Yy41MjIsMCwxLjEyOC4wMDksMS41NjUuMDE4YTcuNyw3LjcsMCwwLDEtMS40MDYuMDM3bC00LjAzNC4wMTljLTEuNjUxLjAwNi0zLjMxNy4wMTItNS4xNzgtLjAxMWwtMS4yNjItLjEwNmMuNzU5LS4wMTEsMS4yODQtLjAyNCwxLjgyNS0uMDI1bDE1LS4wMTJjLjM3LDAsLjc0OC4wMSwxLjM2NC4wMTktMS4zNDIuMDUtMy4xMTEuMDM0LTQuNjQ2LjAzN0g0NS4wM2MtMS42MDcsMC0zLjI2My0uMDA1LTUuNDQ3LjAxOFpNNzMuNDE1LTUuMjY5Yy0uOTQzLDAtMS40NTMtLjAzNS0uOTA1LS4wNTgsMS40LS4wNTksMy44NzktLjA1OCw1LjA0MiwwLC4yODIuMDE1LjQzNS4wMzIuNjUyLjA0OGw4LjIwNywwLDIuNzMsMGMzLjIyNC0uMDExLDUuMDI4LS4wODMsNC40MjMtLjE3NS0uMDg1LS4wMTMtLjMtLjAyNS0uMzYyLS4wMzhxLS4zMzItLjA2OSwxLjkwOS0uMDkyTDk3Ljc3NS01LjZjMS4zODQtLjAxMiwxLjg4Mi0uMDU0LjkzNS0uMDgybC01LjU5MS0uMTU3LTQuMzcuMDQzLTIuMTQtLjE0YzQuNzI5LS4xMzQsOS42NTktLjIzNCwxNi41MDgtLjIyMSwyLjI3NywwLDQuNDM1LS4wNDQsNS4yMTktLjFhNS4xNDIsNS4xNDIsMCwwLDAtMS4xNTUtLjA0OGwtMS4zNDQsMC0xMy4wMDguMDYyYy0yLjU4My4wMTMtNS4wNzMuMDA1LTcuOTMxLS4wMjEuNS0uMDI0LjcwNy0uMDQ4LDEuMjExLS4wNTZsNC4yNTMtLjA0NSw0LjI4NC0uMDQzYy45MjUtLjAxMSwxLjA3OC0uMDQ1LjQxNy0uMDY2LTEuMjQyLS4wNC0yLjc5Mi0uMDU1LTQuNTIyLS4wMzctMS40MTMuMDE1LTIuNzgyLjAzNS00LjA1OS4wNTgtMi4xMTIuMDM4LTQuMzY2LjA2Ni02LjgyMi4wNjctNS4zODUsMC0xMC4zNzYuMDYzLTE1LjYzNC4wODMtMS40MS4wMDUtMi42MjQuMDE4LTMuMzY3LjA1OC0uODc4LjA0Ny0yLjUyOS4wNjQtNC4xMzkuMDc0bC02Ljc0My4wMzFjLS4yOTIsMC0uNjc5LDAtLjg4NywwLS40MzctLjAwOS0xLjEyMy0uMDIzLTEuMDg1LS4wMzNzLjYyNi0uMDMxLDEuMS0uMDM1Yy42ODktLjAwNywxLjUwNi0uMDA2LDIuMjQyLDAsMi4yOTMuMDA5LDMuNzktLjAxOCw0Ljc0Mi0uMDc3LjI1LS4wMTYuNjU5LS4wMjkuOTczLS4wNDIsNC41NjMtLjAwOCw4LjAyMi0uMDgxLDExLjU1My0uMTQ4LjUzOS0uMDEsMS41ODUtLjAzLjczLS4wNjZMNjYuNC02LjVjLS43ODguMDEzLTEuNTk0LjAzMi0yLjQyOC4wMzMtMy4yNDUuMDA3LTYuMTI3LjA0OC05LjE4NS4wNzJMNTAuOC02LjM2NGMtMS44NjYuMDEyLTMuMzA2LDAtMy45MjgtLjA1OS0uMTI5LS4wMTItLjM5My0uMDI0LS42NzMtLjAzNC0xLjE1My0uMDQyLTIuMjc0LS4wNDgtNC0uMDI3LTIuNTc5LjAzMi00Ljg3LjA3Mi01Ljk4Ni4xNTEtLjY4NS4wNDktMi4wNDIuMDczLTMuNzA2LjA4OS00Ljk4NS4wNDktOS43NDUuMTIxLTE1LjE3Ny4xMjVsLS44ODcuMDA2Yy0yLjA4OS4wMjEtNC4wNjIuMDI0LTYuMTMzLS4wMDktMS43LS4wMjctMy41ODItLjAyMi01LjEuMDE3LS41NDcuMDE1LTEuMTE5LjAyNC0xLjcxOC4wMjlsLTEuMi4wMDdjMC0uMTEsMC0uMjIzLjAwNi0uMzQsMC0uMjc5LjAwNi0uNTY2LjAwOC0uODUyLDAtLjMyNSwwLS42NDksMC0uOTY0LS4wMDctLjYyOC0uMDIzLTEuMjE3LS4wNTYtMS42OTItLjEtMS40NjEtLjExNi0zLjAyOS0uMTEtNC43NjcsMC0uNDQ0LS4wMDYtLjktLjAwOS0xLjMzOS0uMDQ3LTIuOTI1LS4wMzktNS44ODYtLjA0NS04Ljg0MXEwLTIuNDM4LDAtNC44NzlINi43ODRsNS4xNi0uMDE0YzEuMTQ5LS4wMDUsMi40NDgsMCwzLjU3MS4wMTIuNTI3LjAwNSwxLC4wMzEsMS4xMS4wNS4wNjYuMDExLS41MjUuMDMxLS45ODIuMDM4LS43NzMuMDEzLTEuOTY0LjAxMi0yLjQ2OS4wMjktMS45NjMuMDY3LTQuOTU4LjA4MS03LjIzLjEzM0wzLjc3LTI5LjUxM2wtMS4yODgsMGMuMDA1LjMxNC4wMTEuNjMxLjAxNi45NTIuMDIzLDEuMjQxLjAxMiwyLjUtLjAzOCwzLjY2Ni0uMDYyLDEuNDUyLS4wNDEsMi45Ny0uMDIzLDQuNDc2YTIuMzkyLDIuMzkyLDAsMCwwLC4wOTQuOTQ1Yy4xNzIuMDQ2LjI0OS0uODI2LjI1My0yLjgxNSwwLS4yNjgsMC0uNTM4LDAtLjgwNS0uMDE0LTEuOTg5LS4wMjgtMy45NzgtLjA0NC02LjEwNWExLjkxMiwxLjkxMiwwLDAsMS0uMDYzLS4yYy4wMjctLjAwNi4wNzItLjAxMi4xMjItLjAxOC4xMDctLjAxMi4yMDYtLjAyMi4zMjItLjAyOS4zMDktLjAwNy42LS4wMTIuOTExLS4wMTQuNjIyLDAsMS4zMTksMCwyLjM4My4wMiwxLjg0OS4wMywzLjczMS4wMzIsNS43MTYuMDMyLDIuNTc3LDAsNS4yLS4wMDcsNy43MjEsMCwzLjY2Mi4wMTcsNy4yMzYuMDE2LDEwLjg2NiwwbDkuMDItLjAzNSwxMS43ODUtLjAyOCwxNi4zODYsMGg3Ljc1OWwtLjM1Ny0uMDcyYzEuMzg2LS4wMjksMi45MjktLjAzOCw0LjY0My0uMDQybDkuMDEzLS4wMjljNC45NjYtLjAxNSw5LjgzMi0uMDQ3LDE0LjkxOC0uMDQxbDMuODc0LDBxMCw1LjQ2OSwwLDEwLjk1M2MwLDEuNDMyLjAwOCwyLjg2OC0uMDM0LDQuMjYtLjAxLjMxNy0uMDA2LjcwNywwLDEuMDYsMCwuNTUzLjA1Ni45LjEuNjc5YTkuODgxLDkuODgxLDAsMCwwLC4xLTIuMTA4Yy0uMDMxLTEuNTY1LS4wMi0zLC4wMzYtNC40NDIuMDExLS4yOTEuMDIxLS44LjAwOS0uOTc2YTguOSw4LjksMCwwLDEsLjAyMi0xLjU1N2MuMDQ1LS41Ny4wMzQtMS4zMjEuMDIxLTIuMDQxLS4wMTctLjg2Ni0uMDQ1LTEuNzQ4LS4wNDItMi42MDhxMC0xLjY3NC4wMDgtMy4zNDZsLTEzLjUyOC4wMDVINjguMDI3bC01LjkxLDBjLTEuNjU1LDAtMy4yMjgtLjAxNS00Ljg1Mi4wMDktLjYzMi4wMDktMS41LDAtMS44MTMtLjAzMy40MzUtLjAwNy44OTMtLjAyLDEuNC0uMDIybDE1Ljc4NC0uMDYyLDM1LjM0OC0uMDY0aC4yNzJjLjAyNywzLjA0My4wNTQsNi4wOS4wODEsOS4xYTM2LjAwNiwzNi4wMDYsMCwwLDAsLjI0Myw0LjU0NiwxMy4zMDYsMTMuMzA2LDAsMCwxLC4xMTUsMS41NjZjLjAzNS45NTQuMDcsMS45LjExMiwzLjA0OC4wMzQtLjQxMS4wNjEtLjYwNy4wNzEtLjg5Mi4wNDMtMS4xMS4xMDUtMS42ODMuMjExLTEuNDYuMDY0LjEzNC4xMTEtLjI0LjE1OS0uNzUyLjA1NC0uNTg4LjExNi0xLjEuMjA3LTEsLjAxMi41MzguMDIzLDEuMDI2LjAzNCwxLjUzMXEuMDMsMy4yLjA2LDYuNDA5Yy4wMjIsMi4zNjguMDg4LDIuNzQxLjI2MywxLjUwOC4wMTMtLjEzNS4wMzQtLjMzNi4wNjEtLjYxMS0uMDA4LS44NTMtLjAxNy0xLjczMS0uMDI1LTIuNi0uMDE1LTEuMDYyLS4wMy0yLjExNi0uMDQ2LTMuMTc0LDAtNC4xNzMtLjEyLTguMDctLjE4NC0xMi4wOTMtLjAxOC0xLjEzMi0uMDM5LTEuMi0uMTczLS44NTdxLS4wMjEtMS4wODEtLjA0My0yLjE2NC0uMDE2LTEuMzc2LS4wMzMtMi43NjFsLTYuNDUzLjAxNC01LjU1Ny0uMDA4Yy0uNDExLS4wMTctLjg3LS4wMy0xLjA2NC0uMDQ2LS42MjctLjA1MS0xLjk1NS0uMDYyLTMuNjA5LS4wNmwtNC45ODMsMC00Ljk3Ny4wMDVjLTEuNzE2LjAwOC0zLjMuMDA1LTQuOTE2LS4wMTEtMy0uMDMtNS45LS4wMzYtOC40LjA0My0xLjY3Ny0uMDQzLTIuNjM0LS4xMjctNS41NjctLjA3MWwxLjE2Ni4wNTRjLTIuMjQ0LjAzMS00LjQuMDQtNi41ODkuMDA2LTIuMjEyLS4wMzUtNC41LS4wMzgtNy4wMS0uMDM2LTQsMC04LjAyMS0uMDEzLTkuNTI0LS4xNTEtLjA3MS0uMDA2LS40NjgtLjAxLS45NTMtLjAySDM4LjkyNWMtNi45MDYsMC0xMy4zLjA3OS0yMC4wNy4xbC00Ljg5LjAyN2MtMS45MTgsMC0zLjc2MS4wMTYtNS41NzguMDMxbC01LjUyOS4wNDctMi4zMzcuMDEycS4wMjEsMS4wMTYuMDQyLDIuMDEyLjAyNC42NzYuMDQ3LDEuMzQ0Yy4wMzIuODkyLjA2NSwxLjc3OS4xLDIuNjc3YTE2LjE4NiwxNi4xODYsMCwwLDAsLjIxNCwyLjMzMSw4LjQyOSw4LjQyOSwwLDAsMSwuMDY5LjkyN2MuMDIxLjkyMS4wNDMsMS44NzMuMDY1LDIuODMzLjAxMSwxLjA1LjAyMiwyLjEyMS4wMzMsMy4xODdhNi4wNTIsNi4wNTIsMCwwLDEtLjExLDEuNyw1LjE3NSw1LjE3NSwwLDAsMC0uMTQ0LDEuMTIxYy0uMDA5LjA5LS4wMjguMDM2LS4wNjIuMDY0LS4wMTctLjMwOS0uMDQxLS43NTEtLjA2Ny0xLjIyOC0uMDMuMzE4LS4wNi40OS0uMDU5LjY1NywwLDEuNDctLjA0NiwyLjk5MS4wMzQsNC40LjAyNC40MjcuMDM1Ljk5Mi4wNDQsMS41MTQuMDExLjM4Ny4wMjEuNzExLjAzLjk5My4wMTQuMzc2LjAzMi42ODcuMDUyLjk2M0wxLjMxMi01LjJjLjI5My0uMDA4LDEuMTUtLjAwOCwxLjc4LS4wMTIuMTEuMDIuMTUxLjAzOC4xNTIuMDU0cy0uMDMzLjAzLS4yLjA0MmMtLjM3Mi4wMjUtMS4xNTMuMDQ0LTIuNDYzLjA1OS0uMDA5LS4zLS4wMi0uNjc1LS4wMzItMS4xQy41NDItNi43NjUuNTI4LTcuNDU4LjUxNC04LjEyMy41MDgtOS4zNTUuNDctMTAuMzUuNC0xMS4yMjRjLS4wMjYtLjQ0Mi0uMDYxLTEuMDQ0LS4wODktMS41MzYtLjAxNi0uMjQ0LS4wNDEtLjQtLjA2NS0uNjE0LS4wNjIuODQ4LS4wMzYsMS43MTctLjAyMywyLjQxN3EuMDIyLDEuMzE3LjA0NiwyLjY0LjAxOSwxLjcxLjA0LDMuNDI3bDkuODE1LS4wMzVMMTEtNC45M2wxMi42MjQtLjA0N2M0LjA5Mi0uMDExLDguMTMzLS4wMTgsMTEuOS0uMDc0LDEuNTc2LS4wMjMsMy40MjUtLjAzMiw1LjItLjA0NywzLjUxMi4wODMsNy41MzguMDc3LDExLjM1Mi4wNDYsNC4xNy0uMDMzLDguMzcxLS4wMzcsMTIuNTk1LS4wNDhsMTAuNzgtLjA0OGEyMy4xMDYsMjMuMTA2LDAsMCwwLDIuNTc3LS4wNzljLjA3Ni0uMDE3LjE5NS0uMDM0LjI5NC0uMDUybC00LjkxLjAxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjA0IDMwLjg4OSkiIGZpbGw9IiNmZGVmMDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPg0KICAgIDwvY2xpcFBhdGg+DQogIDwvZGVmcz4NCiAgPGcgaWQ9Ikdyb3VwXzYyOTAiIGRhdGEtbmFtZT0iR3JvdXAgNjI5MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM2OS43NzMgLTI2OC43NTUpIj4NCiAgICA8dGV4dCBpZD0iU1FVQVJFRkVFVCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzkwIDMxMSkiIGZpbGw9IiNjNmM2YzYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtZmFtaWx5PSJQb3BwaW5zLUJvbGQsIFBvcHBpbnMiIGZvbnQtd2VpZ2h0PSI3MDAiPjx0c3BhbiB4PSIwIiB5PSIwIj5TUVVBUkVGRUVUPC90c3Bhbj48L3RleHQ+DQogICAgPGcgaWQ9Ikdyb3VwXzYyODkiIGRhdGEtbmFtZT0iR3JvdXAgNjI4OSIgdHJhbnNmb3JtPSJtYXRyaXgoMSwgLTAuMDE3LCAwLjAxNywgMSwgMzcwLjEwOCwgMzAxLjU1NikiPg0KICAgICAgPGcgaWQ9Ikdyb3VwXzYyODciIGRhdGEtbmFtZT0iR3JvdXAgNjI4NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDIgLTI5LjQ4MSkiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4NCiAgICAgICAgPHBhdGggaWQ9IlBhdGhfODA1MyIgZGF0YS1uYW1lPSJQYXRoIDgwNTMiIGQ9Ik0tMy4zODItMi42MjNIMTE0Ljc4M3YtMzIuMjVILTMuMzgyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMuMzkyIDMxLjIxNykiIGZpbGw9IiNmZGVmMDAiLz4NCiAgICAgIDwvZz4NCiAgICAgIDxnIGlkPSJHcm91cF82Mjg4IiBkYXRhLW5hbWU9Ikdyb3VwIDYyODgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMjA0IC0zMC44ODkpIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoLTIpIj4NCiAgICAgICAgPHBhdGggaWQ9IlBhdGhfODA1NSIgZGF0YS1uYW1lPSJQYXRoIDgwNTUiIGQ9Ik0tNC44LTEuNDEzSDExNC44NzVWLTM1Ljg4OUgtNC44WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjA0IDMxLjY1MSkiIGZpbGw9IiNmZGVmMDAiLz4NCiAgICAgIDwvZz4NCiAgICA8L2c+DQogICAgPHRleHQgaWQ9IkNPTkNSRVRFIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzODEgMjg4KSIgZmlsbD0iIzE5MTkxOSIgZm9udC1zaXplPSIxNiIgZm9udC1mYW1pbHk9IlBvcHBpbnMtQm9sZCwgUG9wcGlucyIgZm9udC13ZWlnaHQ9IjcwMCI+PHRzcGFuIHg9IjAiIHk9IjAiPkNPTkNSRVRFPC90c3Bhbj48L3RleHQ+DQogIDwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/map.png":
/*!**********************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/map.png ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-25359dc5a1f448af7b57ae2807a2d350.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/projects/1.png":
/*!*****************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/projects/1.png ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/slider/slide-1.png":
/*!*********************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/slider/slide-1.png ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/slide-1-c0f370865706184c8eae809367adffaa.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/slider/slide-2.png":
/*!*********************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/slider/slide-2.png ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/slide-2-d46ec48188a8a408bed6540bb4de1569.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/slider/slide-3.png":
/*!*********************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/slider/slide-3.png ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/slide-3-d46ec48188a8a408bed6540bb4de1569.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/team/member1.jpg":
/*!*******************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/team/member1.jpg ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/team/member2.jpg":
/*!*******************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/team/member2.jpg ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/team/member3.jpg":
/*!*******************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/team/member3.jpg ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/interior/twitter.svg":
/*!**************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/interior/twitter.svg ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjMuMjgzIiBoZWlnaHQ9IjEwMC4yOTgiIHZpZXdCb3g9IjAgMCAxMjMuMjgzIDEwMC4yOTgiPg0KICA8cGF0aCBpZD0iZjI0MyIgZD0iTTEyMy4yODMtMzIuOTg1YTQ5LjM0OCw0OS4zNDgsMCwwLDEtMTIuNTM3LDEzLjA2djMuMTM0cTAsMjcuNDI1LTE5LjcyLDQ5Ljc1N1QzOC42NTcsNTUuM0E2OS43NzIsNjkuNzcyLDAsMCwxLDAsNDMuODA2YTU1LjE4OCw1NS4xODgsMCwwLDAsNi4wMDcuNTIyLDQ5LjEzMiw0OS4xMzIsMCwwLDAsMzEuMzQzLTEwLjk3LDI1LjQyNiwyNS40MjYsMCwwLDEtMTQuNjI3LTUuMDkzLDIzLjkyOCwyMy45MjgsMCwwLDEtOC44ODEtMTIuNDA3LDMxLjQyNywzMS40MjcsMCwwLDAsNC43LjUyMiwyOS4zNiwyOS4zNiwwLDAsMCw2Ljc5MS0xLjA0NSwyNS41MzIsMjUuNTMyLDAsMCwxLTE0LjUtOC43NUEyNC4wNzIsMjQuMDcyLDAsMCwxLDQuOTYzLTkuNDc4di0uMjYxQTIzLjgxNCwyMy44MTQsMCwwLDAsMTYuNDU1LTYuNlE1LjIyNC0xMy45MTgsNS4yMjQtMjcuNzYxQTI1LjEzMSwyNS4xMzEsMCwwLDEsOC42MTktNDAuM1EyOC43MzEtMTUuNDg1LDYwLjYtMTMuOTE4YTIyLjgzLDIyLjgzLDAsMCwxLS41MjItNS43NDYsMjQuNDkxLDI0LjQ5MSwwLDAsMSw3LjMxMy0xOC4wMjJBMjQuNDkxLDI0LjQ5MSwwLDAsMSw4NS40MS00NWEyNC4xMzQsMjQuMTM0LDAsMCwxLDE4LjI4NCw4LjEsNDcuMDc5LDQ3LjA3OSwwLDAsMCwxNi4xOTQtNi4yNjksMjMuMTY2LDIzLjE2NiwwLDAsMS0xMS4yMzEsMTQuMUE0My4xMzYsNDMuMTM2LDAsMCwwLDEyMy4yODMtMzIuOTg1Wm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNDUpIiBmaWxsPSIjZjVmNWZjIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/success.svg":
/*!*****************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/assets/image/success.svg ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,DQo8c3ZnIGZpbGw9IiMwMEFDMzkiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MiA1MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTIgNTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCiAgPGc+DQogICAgPHBhdGggZD0iTTI2LDBDMTEuNjY0LDAsMCwxMS42NjMsMCwyNnMxMS42NjQsMjYsMjYsMjZzMjYtMTEuNjYzLDI2LTI2UzQwLjMzNiwwLDI2LDB6IE00MC40OTUsMTcuMzI5bC0xNiwxOA0KICAgICAgQzI0LjEwMSwzNS43NzIsMjMuNTUyLDM2LDIyLjk5OSwzNmMtMC40MzksMC0wLjg4LTAuMTQ0LTEuMjQ5LTAuNDM4bC0xMC04Yy0wLjg2Mi0wLjY4OS0xLjAwMi0xLjk0OC0wLjMxMi0yLjgxMQ0KICAgICAgYzAuNjg5LTAuODYzLDEuOTQ5LTEuMDAzLDIuODExLTAuMzEzbDguNTE3LDYuODEzbDE0LjczOS0xNi41ODFjMC43MzItMC44MjYsMS45OTgtMC45LDIuODIzLTAuMTY2DQogICAgICBDNDEuMTU0LDE1LjIzOSw0MS4yMjksMTYuNTAzLDQwLjQ5NSwxNy4zMjl6Ii8+DQogIDwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "../../node_modules/common/src/components/BlogPost/index.js":
/*!*********************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/components/BlogPost/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/common/src/components/BlogPost/index.js";



var BlogPost = function BlogPost(_ref) {
  var className = _ref.className,
      thumbUrl = _ref.thumbUrl,
      title = _ref.title,
      excerpt = _ref.excerpt,
      link = _ref.link;
  // Add all classs to an array
  var addAllClasses = ['blog_post']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: addAllClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "thumbnail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: thumbUrl,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "excerpt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, excerpt), link && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "learn_more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, link)));
};

BlogPost.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  thumbUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  excerpt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (BlogPost);

/***/ }),

/***/ "../../node_modules/common/src/components/GlideCarousel/glide.style.js":
/*!********************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/components/GlideCarousel/glide.style.js ***!
  \********************************************************************************************************/
/*! exports provided: GlideSlideWrapper, ButtonControlWrapper, ButtonWrapper, BulletControlWrapper, BulletButton, DefaultBtn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlideSlideWrapper", function() { return GlideSlideWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonControlWrapper", function() { return ButtonControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletControlWrapper", function() { return BulletControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletButton", function() { return BulletButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultBtn", function() { return DefaultBtn; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);

 // Glide wrapper style

var GlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "glidestyle__GlideWrapper",
  componentId: "sc-1df9bf1-0"
})(["", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"]); // Glide slide wrapper style

var GlideSlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "glidestyle__GlideSlideWrapper",
  componentId: "sc-1df9bf1-1"
})(["", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"]); // Button wrapper style

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "glidestyle__ButtonWrapper",
  componentId: "sc-1df9bf1-2"
})(["display:inline-block;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["top"], styled_system__WEBPACK_IMPORTED_MODULE_1__["left"], styled_system__WEBPACK_IMPORTED_MODULE_1__["right"], styled_system__WEBPACK_IMPORTED_MODULE_1__["bottom"]); // ButtonControlWrapper style

var ButtonControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "glidestyle__ButtonControlWrapper",
  componentId: "sc-1df9bf1-3"
})(["", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["top"], styled_system__WEBPACK_IMPORTED_MODULE_1__["left"], styled_system__WEBPACK_IMPORTED_MODULE_1__["right"], styled_system__WEBPACK_IMPORTED_MODULE_1__["bottom"]); // BulletControlWrapper style

var BulletControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "glidestyle__BulletControlWrapper",
  componentId: "sc-1df9bf1-4"
})(["", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexWrap"]); // BulletButton style

var BulletButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "glidestyle__BulletButton",
  componentId: "sc-1df9bf1-5"
})(["cursor:pointer;width:10px;height:10px;margin:4px;border:0;padding:0;outline:none;border-radius:50%;background-color:#D6D6D6;&:hover,&.glide__bullet--active{background-color:#869791;}", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"]); // default button style

var DefaultBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "glidestyle__DefaultBtn",
  componentId: "sc-1df9bf1-6"
})(["cursor:pointer;margin:10px 3px;"]);

/* harmony default export */ __webpack_exports__["default"] = (GlideWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js":
/*!*******************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/components/GlideCarousel/glideSlide.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glide_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glide.style */ "../../node_modules/common/src/components/GlideCarousel/glide.style.js");
var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/common/src/components/GlideCarousel/glideSlide.js";


 // Glide Slide wrapper component

var GlideSlide = function GlideSlide(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_2__["GlideSlideWrapper"], {
    className: "glide__slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, children);
};

GlideSlide.propTypes = {
  /** Children. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (GlideSlide);

/***/ }),

/***/ "../../node_modules/common/src/components/GlideCarousel/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/components/GlideCarousel/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @glidejs/glide */ "@glidejs/glide");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @glidejs/glide/dist/css/glide.core.min.css */ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css");
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _glide_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glide.style */ "../../node_modules/common/src/components/GlideCarousel/glide.style.js");


var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/common/src/components/GlideCarousel/index.js";






var GlideCarousel = function GlideCarousel(_ref) {
  var className = _ref.className,
      children = _ref.children,
      options = _ref.options,
      controls = _ref.controls,
      prevButton = _ref.prevButton,
      nextButton = _ref.nextButton,
      prevWrapper = _ref.prevWrapper,
      nextWrapper = _ref.nextWrapper,
      bullets = _ref.bullets,
      numberOfBullets = _ref.numberOfBullets,
      buttonWrapperStyle = _ref.buttonWrapperStyle,
      bulletWrapperStyle = _ref.bulletWrapperStyle,
      bulletButtonStyle = _ref.bulletButtonStyle,
      carouselSelector = _ref.carouselSelector;
  // Add all classs to an array
  var addAllClasses = ['glide']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // number of bullets loop


  var totalBullets = [];

  for (var i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  } // Load glide


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_4___default.a(carouselSelector ? "#".concat(carouselSelector) : '#glide', Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options));
    glide.mount();
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: addAllClasses.join(' '),
    id: carouselSelector || 'glide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "glide__track",
    "data-glide-el": "track",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "glide__slides",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, children)), controls && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["ButtonControlWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "glide__controls",
    "data-glide-el": "controls"
  }, buttonWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["ButtonWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevWrapper, {
    className: "glide__prev--area",
    "data-glide-dir": "<",
    "aria-label": "prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), prevButton ? prevButton : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["DefaultBtn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Prev")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["ButtonWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, nextWrapper, {
    className: "glide__next--area",
    "data-glide-dir": ">",
    "aria-label": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), nextButton ? nextButton : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["DefaultBtn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Next"))), bullets && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["BulletControlWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "glide__bullets",
    "data-glide-el": "controls[nav]"
  }, bulletWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, totalBullets.map(function (index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["BulletButton"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: index,
      className: "glide__bullet",
      "data-glide-dir": "=".concat(index),
      "aria-label": "bullet".concat(index + 1)
    }, bulletButtonStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }));
  }))));
};

GlideCarousel.propTypes = {
  /** className of the GlideCarousel. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Children. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** You can add your custom glid options using this prop. */
  options: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Hide || show controls nav. */
  controls: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Hide || show bullets nav. */
  bullets: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** This prop only take your slider / carousel / testimonials data length. */
  numberOfBullets: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /** bulletWrapperStyle is a bullet control wrapper style object prop.
   * It's contain display, space, alignItems,
   * justifyContent and flexWrap style-system prop.
   */
  bulletWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** buttonWrapperStyle is a button control wrapper style object prop.
   * It's contain same as buttonWrapperStyle style-system prop and
   * position, left, right, top and bottom.
   */
  buttonWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** prevWrapper is a previous button wrapper style object prop.
   * It's contain display, space, bg, borders, boxShadow, borderRadius,
   * position, top, left, right and bottom style-system prop.
   */
  prevWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** nextWrapper is a next button wrapper style object prop.
   * It's contain same as prevWrapper style-system prop.
   */
  nextWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Set previous button for glide carousel. */
  prevButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),

  /** Set next button for glide carousel. */
  nextButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),

  /** bulletButtonStyle is a bullet button style object prop.
   * It's contain  display, width, height, space,
   * bg, borders, boxShadow and borderRadius style-system prop.
   */
  bulletButtonStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
}; // GlideCarousel default props

GlideCarousel.defaultProps = {
  controls: true,
  bullets: false
};
/* harmony default export */ __webpack_exports__["default"] = (GlideCarousel);

/***/ }),

/***/ "../../node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js":
/*!************************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var HamburgMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "hamburgMenustyle__HamburgMenuWrapper",
  componentId: "sc-12m1tps-0"
})(["border:0;background:transparent;width:44px;height:30px;cursor:pointer;", " ", " ", " ", " ", " ", " ", " > span{display:block;width:100%;height:2px;margin:4px 0;float:right;background-color:", ";transition:all 0.3s ease;&:first-child{margin-top:0;}&:last-child{width:calc(100% - 10px);margin-bottom:0;}}&:focus,&:hover{outline:none;> span{&:last-child{width:100%;}}}&:focus,&.active{> span{&:first-child{transform:rotate(45deg);transform-origin:8px 50%;}&:nth-child(2){display:none;}&:last-child{width:100%;transform:rotate(-45deg);transform-origin:9px 50%;}}}"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["border"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], function (props) {
  return props.barColor ? props.barColor : '#10ac84';
});
HamburgMenuWrapper.displayName = 'HamburgMenuWrapper';
/* harmony default export */ __webpack_exports__["default"] = (HamburgMenuWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/HamburgMenu/index.js":
/*!************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/components/HamburgMenu/index.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hamburgMenu_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hamburgMenu.style */ "../../node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js");


var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/common/src/components/HamburgMenu/index.js";




var HamburgMenu = function HamburgMenu(_ref) {
  var className = _ref.className,
      wrapperStyle = _ref.wrapperStyle,
      barColor = _ref.barColor,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "wrapperStyle", "barColor"]);

  // Add all classs to an array
  var addAllClasses = ['hamburgMenu__bar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_hamburgMenu_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, wrapperStyle, {
    barColor: barColor,
    "aria-label": "hamburgMenu"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
};

HamburgMenu.propTypes = {
  /** ClassName of the Hamburg menu. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** barColor allow to change hambrug menu's bar color. */
  barColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** wrapperStyle prop allow to change Hamburg menu bg color, width, height, space, boxShadow, border and borderRadius.*/
  wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (HamburgMenu);

/***/ }),

/***/ "../../node_modules/common/src/components/Input/index.js":
/*!******************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/components/Input/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/common/src/components/Input/index.js";


var Input = function Input(_ref) {
  var className = _ref.className,
      type = _ref.type,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "type", "icon", "iconPosition"]);

  var addAllClasses = ['input_element'];
  var inputType = type ? type : 'text';

  if (className) {
    addAllClasses.push(className);
  }

  if (icon && iconPosition) {
    addAllClasses.push("icon-".concat(iconPosition));
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: addAllClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: inputType
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "input-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, icon));
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "../../node_modules/common/src/components/ScrollSpyMenu/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/components/ScrollSpyMenu/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scrollspy */ "react-scrollspy");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");


var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/common/src/components/ScrollSpyMenu/index.js";






var ScrollSpyMenu = function ScrollSpyMenu(_ref) {
  var className = _ref.className,
      menuItems = _ref.menuItems,
      drawerClose = _ref.drawerClose,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "menuItems", "drawerClose"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_6__["DrawerContext"]),
      dispatch = _useContext.dispatch; // empty array for scrollspy items


  var scrollItems = []; // convert menu path to scrollspy items

  menuItems.forEach(function (item) {
    scrollItems.push(item.path.slice(1));
  }); // Add all classs to an array

  var addAllClasses = ['scrollspy__menu']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // Close drawer when click on menu item


  var toggleDrawer = function toggleDrawer() {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items: scrollItems,
    className: addAllClasses.join(' '),
    drawerClose: drawerClose
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), menuItems.map(function (menu, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: "menu-item-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, menu.staticLink ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: menu.path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, menu.label) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, drawerClose ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: menu.path,
      offset: menu.offset,
      onClick: toggleDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, menu.label) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: menu.path,
      offset: menu.offset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, menu.label)));
  }));
};

ScrollSpyMenu.propTypes = {
  /** className of the ScrollSpyMenu. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** menuItems is an array of object prop which contain your menu
   * data.
   */
  menuItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,

  /** Class name that apply to the navigation element paired with the content element in viewport. */
  currentClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Class name that apply to the navigation elements that have been scrolled past [optional]. */
  scrolledPastClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
  componentTag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Style attribute to be passed to the generated <ul/> element [optional]. */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Offset value that adjusts to determine the elements are in the viewport [optional]. */
  offset: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /** Name of the element of scrollable container that can be used with querySelector [optional]. */
  rootEl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Function to be executed when the active item has been updated [optional].
   */
  onUpdate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
ScrollSpyMenu.defaultProps = {
  componentTag: 'ul',
  currentClassName: 'is-current'
};
/* harmony default export */ __webpack_exports__["default"] = (ScrollSpyMenu);

/***/ }),

/***/ "../../node_modules/common/src/components/UI/Container/index.js":
/*!*************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/components/UI/Container/index.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "../../node_modules/common/src/components/UI/Container/style.js");
var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/common/src/components/UI/Container/index.js";



var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      fullWidth = _ref.fullWidth,
      mobileGutter = _ref.mobileGutter,
      noGutter = _ref.noGutter,
      width = _ref.width,
      id = _ref.id;
  var addAllClasses = ['container'];

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: id,
    className: addAllClasses.join(' '),
    fullWidth: fullWidth,
    noGutter: noGutter,
    mobileGutter: mobileGutter,
    width: width,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "../../node_modules/common/src/components/UI/Container/style.js":
/*!*************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/components/UI/Container/style.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__ContainerWrapper",
  componentId: "sc-1gre7ok-0"
})(["margin-left:auto;margin-right:auto;", ";", ";@media (min-width:768px){max-width:750px;width:100%;}@media (min-width:992px){max-width:970px;width:100%;}@media (min-width:1220px){max-width:", ";width:100%;}@media (max-width:767px){", "}"], function (props) {
  return props.fullWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:100%;max-width:none !important;"]);
}, function (props) {
  return props.noGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:0;padding-right:0;"]) || Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:30px;padding-right:30px;"]);
}, function (props) {
  return props.width || '1170px';
}, function (props) {
  return props.mobileGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:20px;padding-right:20px;"]);
});
/* harmony default export */ __webpack_exports__["default"] = (ContainerWrapper);

/***/ }),

/***/ "../../node_modules/common/src/contexts/DrawerContext.js":
/*!******************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/contexts/DrawerContext.js ***!
  \******************************************************************************************/
/*! exports provided: DrawerContext, DrawerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContext", function() { return DrawerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerProvider", function() { return DrawerProvider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/common/src/contexts/DrawerContext.js";

var initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

var DrawerContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});
var DrawerProvider = function DrawerProvider(_ref) {
  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, initialState),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DrawerContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, children);
};

/***/ }),

/***/ "../../node_modules/common/src/data/Interior/index.js":
/*!***************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/data/Interior/index.js ***!
  \***************************************************************************************/
/*! exports provided: menuData, bannerData, featureData, aboutData, projectData, teamData, newsData, testimonialData, galleryData, newsletterData, footerData, socialProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuData", function() { return menuData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bannerData", function() { return bannerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureData", function() { return featureData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutData", function() { return aboutData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectData", function() { return projectData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamData", function() { return teamData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsData", function() { return newsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testimonialData", function() { return testimonialData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "galleryData", function() { return galleryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsletterData", function() { return newsletterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerData", function() { return footerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialProfile", function() { return socialProfile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_src_assets_image_interior_slider_slide_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/src/assets/image/interior/slider/slide-1.png */ "../../node_modules/common/src/assets/image/interior/slider/slide-1.png");
/* harmony import */ var common_src_assets_image_interior_slider_slide_1_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_slider_slide_1_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_src_assets_image_interior_slider_slide_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/src/assets/image/interior/slider/slide-2.png */ "../../node_modules/common/src/assets/image/interior/slider/slide-2.png");
/* harmony import */ var common_src_assets_image_interior_slider_slide_2_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_slider_slide_2_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_src_assets_image_interior_slider_slide_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/src/assets/image/interior/slider/slide-3.png */ "../../node_modules/common/src/assets/image/interior/slider/slide-3.png");
/* harmony import */ var common_src_assets_image_interior_slider_slide_3_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_slider_slide_3_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_src_assets_image_interior_feature_1_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/src/assets/image/interior/feature/1.svg */ "../../node_modules/common/src/assets/image/interior/feature/1.svg");
/* harmony import */ var common_src_assets_image_interior_feature_1_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_feature_1_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_src_assets_image_interior_feature_2_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/src/assets/image/interior/feature/2.svg */ "../../node_modules/common/src/assets/image/interior/feature/2.svg");
/* harmony import */ var common_src_assets_image_interior_feature_2_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_feature_2_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var common_src_assets_image_interior_feature_3_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/src/assets/image/interior/feature/3.svg */ "../../node_modules/common/src/assets/image/interior/feature/3.svg");
/* harmony import */ var common_src_assets_image_interior_feature_3_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_feature_3_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var common_src_assets_image_interior_about_parent_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/assets/image/interior/about_parent.png */ "../../node_modules/common/src/assets/image/interior/about_parent.png");
/* harmony import */ var common_src_assets_image_interior_about_parent_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_about_parent_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var common_src_assets_image_interior_projects_1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/assets/image/interior/projects/1.png */ "../../node_modules/common/src/assets/image/interior/projects/1.png");
/* harmony import */ var common_src_assets_image_interior_projects_1_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_projects_1_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons-kit/ionicons/socialFacebook */ "react-icons-kit/ionicons/socialFacebook");
/* harmony import */ var react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_kit_ionicons_socialDribbble__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons-kit/ionicons/socialDribbble */ "react-icons-kit/ionicons/socialDribbble");
/* harmony import */ var react_icons_kit_ionicons_socialDribbble__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialDribbble__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_kit_ionicons_socialGoogleplus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons-kit/ionicons/socialGoogleplus */ "react-icons-kit/ionicons/socialGoogleplus");
/* harmony import */ var react_icons_kit_ionicons_socialGoogleplus__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialGoogleplus__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_kit_ionicons_socialSkype__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons-kit/ionicons/socialSkype */ "react-icons-kit/ionicons/socialSkype");
/* harmony import */ var react_icons_kit_ionicons_socialSkype__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialSkype__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons-kit/ionicons/socialTwitter */ "react-icons-kit/ionicons/socialTwitter");
/* harmony import */ var react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var common_src_assets_image_interior_team_member1_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! common/src/assets/image/interior/team/member1.jpg */ "../../node_modules/common/src/assets/image/interior/team/member1.jpg");
/* harmony import */ var common_src_assets_image_interior_team_member1_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_team_member1_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var common_src_assets_image_interior_team_member2_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! common/src/assets/image/interior/team/member2.jpg */ "../../node_modules/common/src/assets/image/interior/team/member2.jpg");
/* harmony import */ var common_src_assets_image_interior_team_member2_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_team_member2_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var common_src_assets_image_interior_team_member3_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! common/src/assets/image/interior/team/member3.jpg */ "../../node_modules/common/src/assets/image/interior/team/member3.jpg");
/* harmony import */ var common_src_assets_image_interior_team_member3_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_team_member3_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var common_src_assets_image_interior_gallery_1_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! common/src/assets/image/interior/gallery/1.jpg */ "../../node_modules/common/src/assets/image/interior/gallery/1.jpg");
/* harmony import */ var common_src_assets_image_interior_gallery_1_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_gallery_1_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var common_src_assets_image_interior_gallery_2_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! common/src/assets/image/interior/gallery/2.jpg */ "../../node_modules/common/src/assets/image/interior/gallery/2.jpg");
/* harmony import */ var common_src_assets_image_interior_gallery_2_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_gallery_2_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var common_src_assets_image_interior_gallery_3_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! common/src/assets/image/interior/gallery/3.jpg */ "../../node_modules/common/src/assets/image/interior/gallery/3.jpg");
/* harmony import */ var common_src_assets_image_interior_gallery_3_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_gallery_3_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var common_src_assets_image_interior_gallery_4_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! common/src/assets/image/interior/gallery/4.jpg */ "../../node_modules/common/src/assets/image/interior/gallery/4.jpg");
/* harmony import */ var common_src_assets_image_interior_gallery_4_jpg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_gallery_4_jpg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var common_src_assets_image_interior_gallery_5_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! common/src/assets/image/interior/gallery/5.jpg */ "../../node_modules/common/src/assets/image/interior/gallery/5.jpg");
/* harmony import */ var common_src_assets_image_interior_gallery_5_jpg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_gallery_5_jpg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_icons_kit_fa_facebook__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-icons-kit/fa/facebook */ "react-icons-kit/fa/facebook");
/* harmony import */ var react_icons_kit_fa_facebook__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_facebook__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react_icons_kit_fa_dribbble__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-icons-kit/fa/dribbble */ "react-icons-kit/fa/dribbble");
/* harmony import */ var react_icons_kit_fa_dribbble__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_dribbble__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_icons_kit_fa_googlePlus__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-icons-kit/fa/googlePlus */ "react-icons-kit/fa/googlePlus");
/* harmony import */ var react_icons_kit_fa_googlePlus__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_googlePlus__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_icons_kit_fa_skype__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-icons-kit/fa/skype */ "react-icons-kit/fa/skype");
/* harmony import */ var react_icons_kit_fa_skype__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_skype__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react_icons_kit_fa_twitter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-icons-kit/fa/twitter */ "react-icons-kit/fa/twitter");
/* harmony import */ var react_icons_kit_fa_twitter__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_twitter__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var common_src_assets_image_interior_logo_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! common/src/assets/image/interior/logo.svg */ "../../node_modules/common/src/assets/image/interior/logo.svg");
/* harmony import */ var common_src_assets_image_interior_logo_svg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_logo_svg__WEBPACK_IMPORTED_MODULE_28__);
var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/common/src/data/Interior/index.js";


/* interiro dummy data list :-
- Navbar
- Banner
- Feature
- About
- Projects
- Team
- News
- Testimonial
- Gallery
- Newsletter
- Footer
  - menu widget
  - copyright
  - social links
*/

/* ------------------------------------ */
// Menu data

/* ------------------------------------ */
var menuData = [{
  label: 'Feature',
  path: '#feature',
  offset: '80'
}, {
  label: 'About',
  path: '#aboutUs',
  offset: '80'
}, {
  label: 'Project',
  path: '#project',
  offset: '80'
}, {
  label: 'Team',
  path: '#team',
  offset: '80'
}, {
  label: 'News',
  path: '#news',
  offset: '40'
}, {
  label: 'Testimonial',
  path: '#testimonial',
  offset: '80'
}];
/* ------------------------------------ */
// Banner section data

/* ------------------------------------ */




var bannerData = {
  // discount: '25%',
  // discountLabel: 'DISCOUNT ON YOUR FIRST DESIGN',
  title: '我們做漂亮的設計',
  text: '最珍貴的寶石精湛的工藝',
  carousel: [{
    id: 1,
    thumb_url: common_src_assets_image_interior_slider_slide_1_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    title: '項鍊',
    link: '#1'
  }, {
    id: 2,
    thumb_url: common_src_assets_image_interior_slider_slide_2_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    title: '環',
    link: '#1'
  }, {
    id: 3,
    thumb_url: common_src_assets_image_interior_slider_slide_3_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    title: '裝飾',
    link: '#1'
  }]
};
/* ------------------------------------ */
// Feature section data

/* ------------------------------------ */




var featureData = {
  title: '服務',
  slogan: '最佳客戶服務',
  features: [{
    id: 1,
    icon: common_src_assets_image_interior_feature_1_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    title: '投資',
    description: '珠寶是最好的投資之一。由於數量有限和世界公認的稀有性，價值會隨著時間而升值'
  }, {
    id: 2,
    icon: common_src_assets_image_interior_feature_2_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    title: '原石設計',
    description: '您可以從頭開始挑選石材並進行設計以滿足您的獨特需求'
  }, {
    id: 3,
    icon: common_src_assets_image_interior_feature_3_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    title: '珠寶選擇',
    description: '我們幫助您確定最適合您的珠寶'
  }]
};
/* ------------------------------------ */
// About section data

/* ------------------------------------ */


var aboutData = {
  thumb_url: common_src_assets_image_interior_about_parent_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  title: 'Hi, 認識 <br> 千子寶石',
  text: '我們在台北已經30年了. 從一開始，我們就去了泰國, 緬甸, 以從他們的來源獲得最優質的原石',
  text2: '然後，我們的工匠將它們從頭開始設計'
};
/* ------------------------------------ */
// Projects section data

/* ------------------------------------ */


var projectData = {
  title: '工作程序',
  slogan: '世界稀有',
  thumb_url: common_src_assets_image_interior_projects_1_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  projects: [{
    id: 1,
    text: '您不僅是客戶，而且是我們的朋友。我們是台北的一家有很多聯繫的老店',
    text2: '從紐約的綠色鑽石到斯里蘭卡的稀有藍寶石，我們擁有最好的與你分享'
  }, {
    id: 2,
    text: '安排私人觀看',
    text2: '我們確保您應得的是最好的'
  }, {
    id: 3,
    text: '我們確保一切都完全適合您',
    text2: ''
  }]
};
/* ------------------------------------ */
// Team section data

/* ------------------------------------ */










var teamData = {
  title: 'OUR TEAM MEMBER',
  slogan: 'Meet Our Perfectionist',
  members: [{
    id: 1,
    avatar: common_src_assets_image_interior_team_member1_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
    name: 'Roman Ul Oman',
    designation: 'Project Manager',
    social_links: [{
      id: 1,
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        icon: react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_10__["socialFacebook"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: undefined
      }),
      url: '#1'
    }, {
      id: 2,
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        icon: react_icons_kit_ionicons_socialDribbble__WEBPACK_IMPORTED_MODULE_11__["socialDribbble"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: undefined
      }),
      url: '#1'
    }, {
      id: 3,
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        icon: react_icons_kit_ionicons_socialGoogleplus__WEBPACK_IMPORTED_MODULE_12__["socialGoogleplus"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: undefined
      }),
      url: '#1'
    }, {
      id: 4,
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        icon: react_icons_kit_ionicons_socialSkype__WEBPACK_IMPORTED_MODULE_13__["socialSkype"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: undefined
      }),
      url: '#1'
    }, {
      id: 5,
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        icon: react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_14__["socialTwitter"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: undefined
      }),
      url: '#1'
    }]
  }, {
    id: 2,
    avatar: common_src_assets_image_interior_team_member2_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
    name: 'Jeny Doe',
    designation: 'Lead Designer',
    social_links: [{
      id: 1,
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        icon: react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_10__["socialFacebook"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: undefined
      }),
      url: '#1'
    }, {
      id: 2,
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        icon: react_icons_kit_ionicons_socialDribbble__WEBPACK_IMPORTED_MODULE_11__["socialDribbble"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: undefined
      }),
      url: '#1'
    }, {
      id: 3,
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        icon: react_icons_kit_ionicons_socialGoogleplus__WEBPACK_IMPORTED_MODULE_12__["socialGoogleplus"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: undefined
      }),
      url: '#1'
    }, {
      id: 4,
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        icon: react_icons_kit_ionicons_socialSkype__WEBPACK_IMPORTED_MODULE_13__["socialSkype"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: undefined
      }),
      url: '#1'
    }, {
      id: 5,
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        icon: react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_14__["socialTwitter"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: undefined
      }),
      url: '#1'
    }]
  }, {
    id: 3,
    avatar: common_src_assets_image_interior_team_member3_jpg__WEBPACK_IMPORTED_MODULE_17___default.a,
    name: 'Naina Cooper',
    designation: 'Marketing Manager',
    social_links: [{
      id: 1,
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        icon: react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_10__["socialFacebook"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: undefined
      }),
      url: '#1'
    }, {
      id: 2,
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        icon: react_icons_kit_ionicons_socialDribbble__WEBPACK_IMPORTED_MODULE_11__["socialDribbble"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: undefined
      }),
      url: '#1'
    }, {
      id: 3,
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        icon: react_icons_kit_ionicons_socialGoogleplus__WEBPACK_IMPORTED_MODULE_12__["socialGoogleplus"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: undefined
      }),
      url: '#1'
    }, {
      id: 4,
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        icon: react_icons_kit_ionicons_socialSkype__WEBPACK_IMPORTED_MODULE_13__["socialSkype"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: undefined
      }),
      url: '#1'
    }, {
      id: 5,
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        icon: react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_14__["socialTwitter"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: undefined
      }),
      url: '#1'
    }]
  }]
};
/* ------------------------------------ */
// News section data

/* ------------------------------------ */

var newsData = [{
  id: 1,
  title: 'Corporate design is a crucial part of your brand.',
  excerpt: 'Corporate design is a crucial part of your brand. Our approach corporate design is extraordinary. Please come and visit us',
  link_text: 'Read',
  link_url: '#'
}, {
  id: 2,
  title: 'Learn more about landscape plans, how to design them.',
  excerpt: 'Learn more about landscape plans, how to design them, what to watch out for in your layout. We deign the appropriate layout for our clients to deliver best',
  link_text: 'Read',
  link_url: '#'
}, {
  id: 3,
  title: 'Discover our design ideas, beautiful photos for interior design.',
  excerpt: 'Discover our design ideas, beautiful photos and how-to projects to create Interior Design. We try to reflect your personality on our design',
  link_text: 'Read',
  link_url: '#'
}, {
  id: 4,
  title: 'Interior design is an art and we are trying to paint monalisa.',
  excerpt: 'With the best players in the designing sector, we explore a whole new world of interior design.Our approach corporate design is extraordinary',
  link_text: 'Read',
  link_url: '#'
}];
/* ------------------------------------ */
// Testimonial data

/* ------------------------------------ */

var testimonialData = {
  title: 'TESTIMONIAL',
  slogan: 'What Our Clients Say',
  reviews: [{
    id: 0,
    name: 'Parker Joe',
    designation: 'Co-Founder & CEO',
    username: '@amader craft',
    account_url: '#',
    comment: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: 'https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg'
  }, {
    id: 1,
    name: 'Britney havana',
    designation: 'Co-Founder & CEO',
    username: '@Light’s craft',
    account_url: '#',
    comment: 'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
  }, {
    id: 2,
    name: 'June Spears',
    designation: 'Co-Founder & CEO',
    username: '@Eagle’s craft',
    account_url: '#',
    comment: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  }, {
    id: 3,
    name: 'Jessica Parker',
    designation: 'Co-Founder & CEO',
    username: '@Earth’s craft',
    account_url: '#',
    comment: 'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work !',
    avatar: 'https://pbs.twimg.com/profile_images/1049383024306081792/cQkGbpRO.jpg'
  }, {
    id: 4,
    name: 'Django Dsuja',
    designation: 'Co-Founder & CEO',
    username: '@Moon’s craft',
    account_url: '#',
    comment: 'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
    avatar: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg'
  }]
};
/* ------------------------------------ */
// Gallery data

/* ------------------------------------ */






var galleryData = [{
  id: 1,
  thumb_url: common_src_assets_image_interior_gallery_1_jpg__WEBPACK_IMPORTED_MODULE_18___default.a,
  name: 'Eco friendly',
  link: '#'
}, {
  id: 2,
  thumb_url: common_src_assets_image_interior_gallery_2_jpg__WEBPACK_IMPORTED_MODULE_19___default.a,
  name: 'Living',
  link: '#'
}, {
  id: 3,
  thumb_url: common_src_assets_image_interior_gallery_3_jpg__WEBPACK_IMPORTED_MODULE_20___default.a,
  name: 'Corner',
  link: '#'
}, {
  id: 4,
  thumb_url: common_src_assets_image_interior_gallery_4_jpg__WEBPACK_IMPORTED_MODULE_21___default.a,
  name: 'Wall decor',
  link: '#'
}, {
  id: 5,
  thumb_url: common_src_assets_image_interior_gallery_5_jpg__WEBPACK_IMPORTED_MODULE_22___default.a,
  name: 'Restroom',
  link: '#'
}];
/* ------------------------------------ */
// Newsletter data

/* ------------------------------------ */

var newsletterData = {
  title: 'SUBSCRIBE NEWSLETTER',
  slogan: 'Don’t Miss Out Any Offer',
  note: 'Note: Please call us at 12pm to 8am. otherwise our customer supporter will not available to reach your call, but you can drop mail anytime.'
};
/* ------------------------------------ */
// Footer data

/* ------------------------------------ */







var footerData = {
  logo: common_src_assets_image_interior_logo_svg__WEBPACK_IMPORTED_MODULE_28___default.a,
  mail: 'hello@redq.io',
  phone: '123-456-7890',
  socialLinks: [{
    id: 1,
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
      icon: react_icons_kit_fa_facebook__WEBPACK_IMPORTED_MODULE_23__["facebook"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459
      },
      __self: undefined
    }),
    name: 'facebook',
    link: '#'
  }, {
    id: 2,
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
      icon: react_icons_kit_fa_dribbble__WEBPACK_IMPORTED_MODULE_24__["dribbble"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465
      },
      __self: undefined
    }),
    name: 'dribbble',
    link: '#'
  }, {
    id: 3,
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
      icon: react_icons_kit_fa_googlePlus__WEBPACK_IMPORTED_MODULE_25__["googlePlus"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471
      },
      __self: undefined
    }),
    name: 'googlePlus',
    link: '#'
  }, {
    id: 4,
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
      icon: react_icons_kit_fa_skype__WEBPACK_IMPORTED_MODULE_26__["skype"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 477
      },
      __self: undefined
    }),
    name: 'skype',
    link: '#'
  }, {
    id: 5,
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
      icon: react_icons_kit_fa_twitter__WEBPACK_IMPORTED_MODULE_27__["twitter"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 483
      },
      __self: undefined
    }),
    name: 'twitter',
    link: '#'
  }],
  menuWidgets: [{
    id: 1,
    title: 'ABOUT US',
    menu: [{
      id: 1,
      text: 'Support Center',
      link: '#'
    }, {
      id: 2,
      text: 'Customer Support',
      link: '#'
    }, {
      id: 3,
      text: 'About Us',
      link: '#'
    }, {
      id: 4,
      text: 'Copyright',
      link: '#'
    }, {
      id: 5,
      text: 'Popular Campaign',
      link: '#'
    }]
  }, {
    id: 2,
    title: 'OUR INFORMATION',
    menu: [{
      id: 1,
      text: 'Return Policy',
      link: '#'
    }, {
      id: 2,
      text: 'Privacy Policy',
      link: '#'
    }, {
      id: 3,
      text: 'Terms & Conditions',
      link: '#'
    }, {
      id: 4,
      text: 'Site Map',
      link: '#'
    }, {
      id: 5,
      text: 'Store Hours',
      link: '#'
    }]
  }, {
    id: 3,
    title: 'MY ACCOUNT',
    menu: [{
      id: 1,
      text: 'Press inquiries',
      link: '#'
    }, {
      id: 2,
      text: 'Social media directories',
      link: '#'
    }, {
      id: 3,
      text: 'Images & B-roll',
      link: '#'
    }, {
      id: 4,
      text: 'Permissions',
      link: '#'
    }, {
      id: 5,
      text: 'Speaker requests',
      link: '#'
    }]
  }, {
    id: 4,
    title: 'POLICY',
    menu: [{
      id: 1,
      text: 'Application security',
      link: '#'
    }, {
      id: 2,
      text: 'Software principles',
      link: '#'
    }, {
      id: 3,
      text: 'Unwanted software policy',
      link: '#'
    }, {
      id: 4,
      text: 'Responsible supply chain',
      link: '#'
    }]
  }]
};
/* ------------------------------------ */
// social profile

/* ------------------------------------ */

var socialProfile = [{
  id: 1,
  icon: 'flaticon-facebook-logo',
  link: '#'
}, {
  id: 2,
  icon: 'flaticon-twitter-logo-silhouette',
  link: '#'
}, {
  id: 3,
  icon: 'flaticon-instagram',
  link: '#'
}, {
  id: 4,
  icon: 'flaticon-tumblr-logo',
  link: '#'
}, {
  id: 5,
  icon: 'flaticon-dribble-logo',
  link: '#'
}];

/***/ }),

/***/ "../../node_modules/common/src/theme/interior/colors.js":
/*!*****************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/theme/interior/colors.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var colors = {
  transparent: 'transparent',
  label: '#C6C6C6',
  lightBorder: '#f1f4f6',
  inactiveField: '#f2f2f2',
  inactiveButton: '#b7dbdd',
  inactiveIcon: '#EBEBEB',
  primaryHover: '#EDE10F',
  secondary: '#D50032',
  secondaryHover: '#EE2541',
  yellow: '#fdb32a',
  yellowHover: '#F29E02',
  border: '#dadada',
  black: '#000000',
  white: '#ffffff',
  primary: '#FDEF00',
  heading: '#191919',
  heading3: '#273343',
  quote: '#343d48',
  text: '#4E5865',
  lightText: '#7E7E7E',
  link: '#352FD9',
  banner: '#171717',
  darkBg: '#0D0D0D',
  lightBg: '#fbfafe'
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "../../node_modules/common/src/theme/interior/index.js":
/*!****************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/common/src/theme/interior/index.js ***!
  \****************************************************************************************/
/*! exports provided: interiorTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interiorTheme", function() { return interiorTheme; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "../../node_modules/common/src/theme/interior/colors.js");

var interiorTheme = {
  breakpoints: [480, 768, 990, 1220],
  space: [0, 5, 10, 15, 20, 25, 30, 40, 56, 71, 91],
  fontSizes: [10, 12, 14, 15, 16, 20, 24, 36, 48, 55, 60, 81],
  fontWeights: [300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  fonts: {
    roboto: '"Roboto", sans-serif'
  },
  borders: [0, '1px solid', '2px solid', '4px solid'],
  radius: [0, 3, 5, 10, 15, 20, 25, 50, 60, '50%'],
  colors: _colors__WEBPACK_IMPORTED_MODULE_0__["default"],
  colorStyles: {
    primary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover
      }
    },
    secondary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover
      }
    },
    warning: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover
      }
    },
    error: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
      }
    },
    primaryWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].heading,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover
      }
    },
    secondaryWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover
      }
    },
    warningWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover
      }
    },
    errorWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].label,
      padding: 0,
      height: 'auto',
      backgroundColor: "".concat(_colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent)
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0
      }
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center'
    }
  }
};

/***/ }),

/***/ "../../node_modules/next/dist/client/link.js":
/*!******************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/next/dist/client/link.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "../../node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../../node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  (0, _inherits2["default"])(Link, _react$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2["default"])(this, Link);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      })["catch"](function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.cleanUpListeners = function () {};
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          return _this3.handleRef(el);
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "../../node_modules/next/dist/client/router.js":
/*!********************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/next/dist/client/router.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _construct2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/construct */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/construct.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2["default"];

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _requestContext = __webpack_require__(/*! next-server/dist/lib/request-context */ "next-server/dist/lib/request-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react["default"].useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0, _urlPropertyFields = urlPropertyFields; _i < _urlPropertyFields.length; _i++) {
    var property = _urlPropertyFields[_i];

    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2["default"].events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty["default"])(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "../../node_modules/next/dist/client/with-router.js":
/*!*************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/next/dist/client/with-router.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    (0, _inherits2["default"])(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithRouteWrapper);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    (0, _createClass2["default"])(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "../../node_modules/next/link.js":
/*!******************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/next/link.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../../node_modules/rc-drawer/assets/index.css":
/*!********************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/rc-drawer/assets/index.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/rc-tabs/assets/index.css":
/*!******************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/rc-tabs/assets/index.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Animation/index.js":
/*!***********************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Animation/index.js ***!
  \***********************************************************************************************/
/*! exports provided: AnimSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimSpinner", function() { return AnimSpinner; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var spinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:rotate(0deg);}50%{transform:rotate(180deg);opacity:0.5;}100%{transform:rotate(360deg);}"]);
var AnimSpinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["animation:", " 1s linear infinite;"], spinner);


/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Box/index.js":
/*!*****************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Box/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");


var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Box/index.js";





var BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()('div').withConfig({
  displayName: "Box__BoxWrapper",
  componentId: "m50ttq-0"
})(_base__WEBPACK_IMPORTED_MODULE_6__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('Box'), function (props) {
  return props.flexBox && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])({
    display: 'flex'
  }, styled_system__WEBPACK_IMPORTED_MODULE_5__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_5__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_5__["justifyContent"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('FlexBox'));
});

var Box = function Box(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BoxWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Box);
Box.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,

  /** Using this props we can convert our Box Component to a Flex Container or Component */
  flexBox: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  as: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['div', 'article', 'section', 'address', 'header', 'footer', 'nav', 'main']),
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  flex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  order: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  alignSelf: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  border: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderTop: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderRight: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderBottom: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderLeft: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))])
};
Box.defaultProps = {
  as: 'div'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Button/button.style.js":
/*!***************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Button/button.style.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");





var ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "buttonstyle__ButtonStyle",
  componentId: "ntq24p-0"
})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:", ";background-color:", ";min-height:", "px;min-width:", "px;border-radius:", "px;font-family:inherit;font-size:", "px;font-weight:", ";text-decoration:none;text-transform:capitalize;padding-top:", "px;padding-bottom:", "px;padding-left:", "px;padding-right:", "px;border:0;transition:all 0.3s ease;span.btn-text{padding-left:", "px;padding-right:", "px;}span.btn-icon{display:flex;> div{display:flex !important;}}&:focus{outline:none;}&.is-material{box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}&.is-loading{.btn-text{padding-left:", "px;padding-right:", "px;}}", " ", " ", " ", " ", " ", ""], Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#028489'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('heights.3', '48'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('widths.3', '48'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radius.0', '3'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.4', '16'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.4', '500'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.4', '15'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.4', '15'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.1', '4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.1', '4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["buttonStyle"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["sizeStyle"], _base__WEBPACK_IMPORTED_MODULE_4__["base"]); // prop types can also be added from the style functions

ButtonStyle.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["variant"].propTypes);
ButtonStyle.displayName = 'ButtonStyle';
/* harmony default export */ __webpack_exports__["default"] = (ButtonStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Button/index.js":
/*!********************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Button/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button.style */ "../../node_modules/reusecore/src/elements/Button/button.style.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader */ "../../node_modules/reusecore/src/elements/Loader/index.js");


var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Button/index.js";





var Button = function Button(_ref) {
  var type = _ref.type,
      title = _ref.title,
      icon = _ref.icon,
      disabled = _ref.disabled,
      iconPosition = _ref.iconPosition,
      onClick = _ref.onClick,
      loader = _ref.loader,
      loaderColor = _ref.loaderColor,
      isMaterial = _ref.isMaterial,
      isLoading = _ref.isLoading,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["type", "title", "icon", "disabled", "iconPosition", "onClick", "loader", "loaderColor", "isMaterial", "isLoading", "className"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__button']; // isLoading prop checking

  if (isLoading) {
    addAllClasses.push('is-loading');
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // Checking button loading state


  var buttonIcon = isLoading !== false ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, loader ? loader : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    loaderColor: loaderColor || '#30C56D',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })) : icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "btn-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, icon); // set icon position

  var position = iconPosition || 'right';
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_button_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: type,
    className: addAllClasses.join(' '),
    icon: icon,
    disabled: disabled,
    "icon-position": position,
    onClick: onClick
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), position === 'left' && buttonIcon, title && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "btn-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, title), position === 'right' && buttonIcon);
};

Button.propTypes = {
  /** ClassName of the button */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Add icon */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['button', 'submit', 'reset']),

  /** Add icon */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Add loader */
  loader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Add Material effect */
  isMaterial: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Button Loading state */
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Button Loading state */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** If true button will be disabled */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Adjust your icon and loader position [if you use loader] */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right']),

  /** Variant change button shape */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['textButton', 'outlined', 'fab', 'extendedFab']),

  /** primary || secondary || warning || error  change text and border color.
   *  And primaryWithBg || secondaryWithBg || warningWithBg || errorWithBg change text, border and background color */
  colors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary', 'warning', 'error', 'primaryWithBg', 'secondaryWithBg', 'warningWithBg', 'errorWithBg']),

  /**
   * Gets called when the user clicks on the button
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: 'button'
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Checkbox/checkbox.style.js":
/*!*******************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Checkbox/checkbox.style.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var CheckBoxStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "checkboxstyle__CheckBoxStyle",
  componentId: "zx7hai-0"
})(["display:inline-flex;.reusecore__field-label{color:", ";font-size:", "px;font-weight:", ";}&.label_left{label{display:flex;align-items:center;.reusecore__field-label{margin-right:", "px;}}}&.label_right{label{display:flex;flex-direction:row-reverse;align-items:center;.reusecore__field-label{margin-left:", "px;}}}input[type='checkbox']{&.checkbox{opacity:0;position:absolute;margin:0;z-index:-1;width:0;height:0;overflow:hidden;pointer-events:none;&:checked + div{border-color:", ";background-color:", ";&::after{opacity:1;visibility:visible;transform:rotate(45deg) scale(1);}}}+ div{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:3px;border:1px solid ", ";position:relative;transition:all 0.3s ease;&::after{content:'';width:4px;height:10px;transform:rotate(45deg) scale(0.8);border-bottom:2px solid ", ";border-right:2px solid ", ";position:absolute;top:0;opacity:0;visibility:hidden;transition-property:opacity,visibility;transition-duration:0.3s;}}}", ""], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.4', '16'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.4', '500'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('space.3', '10'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('space.3', '10'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#028489'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#028489'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.borderColor', '#dadada'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), _base__WEBPACK_IMPORTED_MODULE_2__["base"]); // prop types can also be added from the style functions

CheckBoxStyle.propTypes = {};
CheckBoxStyle.displayName = 'CheckBoxStyle';
/* harmony default export */ __webpack_exports__["default"] = (CheckBoxStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Checkbox/index.js":
/*!**********************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Checkbox/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks */ "../../node_modules/reusecore/src/hooks/index.js");
/* harmony import */ var _checkbox_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox.style */ "../../node_modules/reusecore/src/elements/Checkbox/checkbox.style.js");



var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Checkbox/index.js";





var CheckBox = function CheckBox(_ref) {
  var className = _ref.className,
      isChecked = _ref.isChecked,
      labelText = _ref.labelText,
      value = _ref.value,
      id = _ref.id,
      htmlFor = _ref.htmlFor,
      labelPosition = _ref.labelPosition,
      isMaterial = _ref.isMaterial,
      disabled = _ref.disabled,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["className", "isChecked", "labelText", "value", "id", "htmlFor", "labelPosition", "isMaterial", "disabled"]);

  // use toggle hooks
  var _useToggle = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useToggle"])(isChecked),
      _useToggle2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useToggle, 2),
      toggleValue = _useToggle2[0],
      toggleHandler = _useToggle2[1]; // Add all classs to an array


  var addAllClasses = ['reusecore__checkbox']; // Add label position class

  if (labelPosition) {
    addAllClasses.push("label_".concat(labelPosition));
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // label control


  var LabelField = labelText && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "reusecore__field-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, labelText);
  var position = labelPosition || 'right';
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_checkbox_style__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: htmlFor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, position === 'left' || position === 'right' ? LabelField : '', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "checkbox",
    className: "checkbox",
    id: id,
    value: value,
    checked: toggleValue,
    onChange: toggleHandler,
    disabled: disabled
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })));
};

CheckBox.propTypes = {
  /** ClassName of the Checkbox */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /** labelText of the checkbox field */
  labelText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Note: id and htmlFor must be same.
   */
  htmlFor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]),

  /** Set checkbox id in number || string */
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]),

  /** value of the checkbox field */
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /** labelText of the checkbox field */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['right', 'left']),

  /** Checkbox toggle state based on isChecked prop */
  isChecked: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /** disabled of the checkbox field */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/** Checkbox default proptype */

CheckBox.defaultProps = {
  isChecked: false,
  labelText: 'Checkbox label',
  labelPosition: 'right',
  disabled: false
};
/* harmony default export */ __webpack_exports__["default"] = (CheckBox);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Drawer/index.js":
/*!********************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Drawer/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-drawer */ "rc-drawer");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-drawer/assets/index.css */ "../../node_modules/rc-drawer/assets/index.css");
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Drawer/index.js";





var Drawer = function Drawer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      closeButton = _ref.closeButton,
      closeButtonStyle = _ref.closeButtonStyle,
      drawerHandler = _ref.drawerHandler,
      toggleHandler = _ref.toggleHandler,
      open = _ref.open,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__drawer']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_drawer__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    open: open,
    onMaskClick: toggleHandler,
    className: addAllClasses.join(' ')
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "reusecore-drawer__close",
    onClick: toggleHandler,
    style: closeButtonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, closeButton), children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "reusecore-drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, drawerHandler));
};

Drawer.propTypes = {
  /** ClassName of the Drawer */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Used to render icon, button, text or any elements inside the closeButton prop. */
  closeButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** Set drawer width. Default value is 300px. */
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Set drawer position left || right || top || bottom. */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right', 'top', 'bottom']),

  /** drawerHandler could be button, icon, string or any component */
  drawerHandler: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element.isRequired
};
Drawer.defaultProps = {
  width: '300px',
  handler: false,
  level: null
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Heading/index.js":
/*!*********************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Heading/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Heading/index.js";





var HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('p').withConfig({
  displayName: "Heading__HeadingWrapper",
  componentId: "vaqy1n-0"
})(_base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Heading'));

var Heading = function Heading(_ref) {
  var content = _ref.content,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["content"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(HeadingWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), content);
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);
Heading.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  mt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  mb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: '1rem',
  fontWeight: 'bold'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Image/index.js":
/*!*******************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Image/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");


var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Image/index.js";




var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()('img').withConfig({
  displayName: "Image__ImageWrapper",
  componentId: "xwdy9p-0"
})({
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}, _base__WEBPACK_IMPORTED_MODULE_5__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_5__["themed"])('Image'));

var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["src", "alt"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: src,
    alt: alt
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Image);
Image.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};
Image.defaultProps = {
  m: 0
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Input/index.js":
/*!*******************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Input/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input.style */ "../../node_modules/reusecore/src/elements/Input/input.style.js");




var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Input/index.js";




var Input = function Input(_ref) {
  var label = _ref.label,
      value = _ref.value,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onChange = _ref.onChange,
      inputType = _ref.inputType,
      isMaterial = _ref.isMaterial,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      passwordShowHide = _ref.passwordShowHide,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["label", "value", "onBlur", "onFocus", "onChange", "inputType", "isMaterial", "icon", "iconPosition", "passwordShowHide", "className"]);

  // use toggle hooks
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    toggle: false,
    focus: false,
    value: ''
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; // toggle function


  var handleToggle = function handleToggle() {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      toggle: !state.toggle
    }));
  }; // add focus class


  var handleOnFocus = function handleOnFocus(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      focus: true
    }));
    onFocus(event);
  }; // remove focus class


  var handleOnBlur = function handleOnBlur(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      focus: false
    }));
    onBlur(event);
  }; // handle input value


  var handleOnChange = function handleOnChange(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      value: event.target.value
    }));
    onChange(event.target.value);
  }; // get input focus class


  var getInputFocusClass = function getInputFocusClass() {
    if (state.focus === true || state.value !== '') {
      return 'is-focus';
    } else {
      return '';
    }
  }; // init variable


  var inputElement, htmlFor; // Add all classs to an array

  var addAllClasses = ['reusecore__input']; // Add is-material class

  if (isMaterial) {
    addAllClasses.push('is-material');
  } // Add icon position class if input element has icon


  if (icon && iconPosition) {
    addAllClasses.push("icon-".concat(iconPosition));
  } // Add new class


  if (className) {
    addAllClasses.push(className);
  } // if lable is not empty


  if (label) {
    htmlFor = label.replace(/\s+/g, '_').toLowerCase();
  } // Label position


  var LabelPosition = isMaterial === true ? 'bottom' : 'top'; // Label field

  var LabelField = label && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: htmlFor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, label); // Input type check

  switch (inputType) {
    case 'textarea':
      inputElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        id: htmlFor,
        name: htmlFor,
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }));
      break;

    case 'password':
      inputElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "field-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        id: htmlFor,
        name: htmlFor,
        type: state.toggle ? 'password' : 'text',
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), passwordShowHide && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_input_style__WEBPACK_IMPORTED_MODULE_6__["EyeButton"], {
        onClick: handleToggle,
        className: state.toggle ? 'eye' : 'eye-closed',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      })));
      break;

    default:
      inputElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "field-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        id: htmlFor,
        name: htmlFor,
        type: inputType,
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      })), icon && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "input-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, icon));
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_input_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "".concat(addAllClasses.join(' '), " ").concat(getInputFocusClass()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, LabelPosition === 'top' && LabelField, inputElement, isMaterial && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), LabelPosition === 'bottom' && LabelField);
};
/** Inout prop type checking. */


Input.propTypes = {
  /** className of the Input component. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /** Set input label value. */
  label: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /** The input value, required for a controlled component. */
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['string', 'number']),

  /** Make default input into material style input. */
  isMaterial: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /** Password show hide icon button prop [*only for password field]. */
  passwordShowHide: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /** Set input type of the input element. Default type is text. */
  inputType: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['text', 'email', 'password', 'number', 'textarea']),

  /** Add icon in input field. This prop will not work with password
   * and textarea field.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /** Set input field icon position. Default position is 'left'. */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['left', 'right']),

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
/** Inout default type. */

Input.defaultProps = {
  inputType: 'text',
  isMaterial: false,
  iconPosition: 'left',
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  onChange: function onChange() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Input/input.style.js":
/*!*************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Input/input.style.js ***!
  \*************************************************************************************************/
/*! exports provided: EyeButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeButton", function() { return EyeButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var InputField = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "inputstyle__InputField",
  componentId: "sc-8lywy0-0"
})(["position:relative;.field-wrapper{position:relative;}&.icon-left,&.icon-right{.field-wrapper{display:flex;align-items:center;> .input-icon{position:absolute;top:0;bottom:auto;display:flex;align-items:center;justify-content:center;width:34px;height:40px;}}}&.icon-left{.field-wrapper{> .input-icon{left:0;right:auto;}> input{padding-left:34px;}}}&.icon-right{.field-wrapper{> .input-icon{left:auto;right:0;}> input{padding-right:34px;}}}label{display:block;color:", ";font-size:", "px;font-weight:", ";margin-bottom:", "px;transition:0.2s ease all;}textarea,input{font-size:16px;padding:11px;display:block;width:100%;color:", ";box-shadow:none;border-radius:4px;box-sizing:border-box;border:1px solid ", ";transition:border-color 0.2s ease;&:focus{outline:none;border-color:", ";}}textarea{min-height:150px;}&.is-material{label{position:absolute;left:0;top:10px;}input,textarea{border-radius:0;border-top:0;border-left:0;border-right:0;padding-left:0;padding-right:0;}textarea{min-height:40px;padding-bottom:0;}.highlight{position:absolute;height:1px;top:auto;left:50%;bottom:0;width:0;pointer-events:none;transition:all 0.2s ease;}&.icon-left,&.icon-right{.field-wrapper{flex-direction:row-reverse;> .input-icon{width:auto;}> input{flex:1;}}}&.icon-left{.field-wrapper{> input{padding-left:20px;}}label{top:-15px;font-size:12px;}}&.icon-right{.field-wrapper{> input{padding-right:20px;}}}&.is-focus{input{border-color:", ";}label{top:-16px;font-size:12px;color:", ";}.highlight{width:100%;height:2px;background-color:", ";left:0;}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.labelColor', '#767676'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.4', '16'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.4', '500'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('space.3', '10'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#028489'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#028489'));
var EyeButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "inputstyle__EyeButton",
  componentId: "sc-8lywy0-1"
})(["width:43px;height:40px;border:0;padding:0;margin:0;top:0;right:0;position:absolute;outline:none;cursor:pointer;box-shadow:none;display:flex;align-items:center;justify-content:center;background-color:transparent;> span{width:12px;height:12px;display:block;border:solid 1px ", ";border-radius:75% 15%;transform:rotate(45deg);position:relative;&:before{content:'';display:block;width:4px;height:4px;border-radius:50%;left:3px;top:3px;position:absolute;border:solid 1px ", ";}}&.eye-closed{> span{&:after{content:'';display:block;width:1px;height:20px;left:calc(50% - 1px / 2);top:-4px;position:absolute;background-color:", ";transform:rotate(-12deg);}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'));

/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Link/index.js":
/*!******************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Link/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Link/index.js";




var LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('a').withConfig({
  displayName: "Link__LinkWrapper",
  componentId: "efswp7-0"
})({
  textDecoration: 'none'
}, _base__WEBPACK_IMPORTED_MODULE_6__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('Link'));

var Link = function Link(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LinkWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Link);
Link.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired
}, _base__WEBPACK_IMPORTED_MODULE_6__["base"].propTypes);
Link.defaultProps = {
  as: 'a',
  m: 0,
  display: 'inline-block'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Loader/index.js":
/*!********************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Loader/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.style */ "../../node_modules/reusecore/src/elements/Loader/loader.style.js");


var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Loader/index.js";




var Loader = function Loader(_ref) {
  var loaderColor = _ref.loaderColor,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["loaderColor", "className"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__loader']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_loader_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' '),
    loaderColor: loaderColor
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

Loader.propTypes = {
  /** ClassName of the Loader */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Set loader width in number || string */
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /** Set loader height in number || string */
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /** Set color for loader */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
Loader.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Loader/loader.style.js":
/*!***************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Loader/loader.style.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Animation */ "../../node_modules/reusecore/src/elements/Animation/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");






var LoaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "loaderstyle__LoaderStyle",
  componentId: "sc-6byg9m-0"
})(["display:inline-flex;width:14px;height:14px;border-radius:50%;overflow:hidden;border-width:2px;border-style:solid;border-color:", ";border-top-color:transparent !important;", " ", " ", ""], function (props) {
  return props.loaderColor ? props.loaderColor : '#000000';
}, _Animation__WEBPACK_IMPORTED_MODULE_4__["AnimSpinner"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], _base__WEBPACK_IMPORTED_MODULE_5__["base"]); // prop types can also be added from the style functions

LoaderStyle.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_2__["variant"].propTypes);
LoaderStyle.displayName = 'LoaderStyle';
/* harmony default export */ __webpack_exports__["default"] = (LoaderStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Navbar/index.js":
/*!********************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Navbar/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.style */ "../../node_modules/reusecore/src/elements/Navbar/navbar.style.js");


var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Navbar/index.js";




var Navbar = function Navbar(_ref) {
  var className = _ref.className,
      children = _ref.children,
      navbarStyle = _ref.navbarStyle,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "navbarStyle"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__navbar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_navbar_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), children);
};

Navbar.propTypes = {
  /** ClassName of the Navbar. Default class is reusecore__navbar*/
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Used to render menu, logo, button or any component that
   * you want to show in navbar. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  space: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderRadius: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  boxShadow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  justifyContent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  flexDirection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  flexWrap: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/** Navbar default proptype */

Navbar.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Navbar/navbar.style.js":
/*!***************************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Navbar/navbar.style.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var NavbarStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "navbarstyle__NavbarStyle",
  componentId: "i4x6b2-0"
})(["display:flex;align-items:center;min-height:56px;padding:10px 16px;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"]);
NavbarStyle.displayName = 'NavbarStyle';
/* harmony default export */ __webpack_exports__["default"] = (NavbarStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Text/index.js":
/*!******************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Text/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/Text/index.js";





var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('p').withConfig({
  displayName: "Text__TextWrapper",
  componentId: "sc-15lufec-0"
})(_base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Text'));

var Text = function Text(_ref) {
  var content = _ref.content,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["content"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TextWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), content);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);
Text.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  mt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  mb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
Text.defaultProps = {
  as: 'p',
  mt: 0,
  mb: '1rem'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/UI/Logo/index.js":
/*!*********************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/UI/Logo/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Link */ "../../node_modules/reusecore/src/elements/Link/index.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Image */ "../../node_modules/reusecore/src/elements/Image/index.js");


var _jsxFileName = "/Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/UI/Logo/index.js";






var Logo = function Logo(_ref) {
  var logoWrapperStyle = _ref.logoWrapperStyle,
      logoStyle = _ref.logoStyle,
      titleStyle = _ref.titleStyle,
      withAchor = _ref.withAchor,
      anchorProps = _ref.anchorProps,
      logoSrc = _ref.logoSrc,
      title = _ref.title,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["logoWrapperStyle", "logoStyle", "titleStyle", "withAchor", "anchorProps", "logoSrc", "title"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, logoWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), withAchor ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, anchorProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), logoSrc ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: logoSrc,
    alt: title
  }, logoStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: title
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, logoSrc ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: logoSrc,
    alt: title
  }, logoStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: title
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))));
};

Logo.propTypes = {
  logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  logoWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  withAchor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  anchorProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
Logo.defaultProps = {
  logoWrapperStyle: {
    display: 'inline-block',
    mr: '1rem',
    'a:hover,a:focus': {
      textDecoration: 'none'
    }
  },
  titleStyle: {
    display: 'inline-block',
    fontSize: '2rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/base.js":
/*!************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/elements/base.js ***!
  \************************************************************************************/
/*! exports provided: themed, base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themed", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


/** this is our Base Component every components must be Extend it */

var themed = function themed(key) {
  return function (props) {
    return props.theme[key];
  };
};
var base = Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"])(function () {
  return {
    boxSizing: 'border-box'
  };
}, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_1__["order"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"]);
base.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_1__["display"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["width"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["height"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["color"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["order"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"].propTypes);

/***/ }),

/***/ "../../node_modules/reusecore/src/hooks/index.js":
/*!**********************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/hooks/index.js ***!
  \**********************************************************************************/
/*! exports provided: useToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle */ "../../node_modules/reusecore/src/hooks/toggle/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useToggle", function() { return _toggle__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../../node_modules/reusecore/src/hooks/toggle/index.js":
/*!*****************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/hooks/toggle/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (initialValue) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialValue),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var toggler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return setValue(function (value) {
      return !value;
    });
  });
  return [value, toggler];
});

/***/ }),

/***/ "../../node_modules/reusecore/src/theme/customVariant.js":
/*!******************************************************************************************!*\
  !*** /Users/cheryl/react-next-landing/node_modules/reusecore/src/theme/customVariant.js ***!
  \******************************************************************************************/
/*! exports provided: cards, buttonStyle, colorStyle, sizeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cards", function() { return cards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return colorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeStyle", function() { return sizeStyle; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);

var buttonStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'buttonStyles'
});
var colorStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'colorStyles',
  prop: 'colors'
});
var sizeStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'sizeStyles',
  prop: 'size'
});
var cards = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'cards'
});


/***/ }),

/***/ "./containers/Interior/AboutUs/aboutUs.style.js":
/*!******************************************************!*\
  !*** ./containers/Interior/AboutUs/aboutUs.style.js ***!
  \******************************************************/
/*! exports provided: Container, ImageWrapper, TextWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextWrapper", function() { return TextWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "aboutUsstyle__SectionWrapper",
  componentId: "sc-13r8y2y-0"
})(["padding:81px 0;@media only screen and (max-width:1440px){padding:60px 0;}@media only screen and (max-width:767px){padding:42px 0;}"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "aboutUsstyle__Container",
  componentId: "sc-13r8y2y-1"
})(["max-width:1627px;margin:0 auto;display:flex;align-items:center;@media only screen and (max-width:1700px){padding:0 70px;}@media only screen and (max-width:1360px){padding:0 30px;}@media only screen and (max-width:767px){flex-direction:column;}"]);
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "aboutUsstyle__ImageWrapper",
  componentId: "sc-13r8y2y-2"
})(["width:calc(100% - 507px);padding-right:75px;position:relative;@media only screen and (max-width:1200px){width:60%;padding-right:50px;}@media only screen and (max-width:991px){padding-right:0;}@media only screen and (max-width:767px){width:100%;padding-right:0;margin-bottom:30px;transform:rotateY(-180deg);}"]);
var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "aboutUsstyle__TextWrapper",
  componentId: "sc-13r8y2y-3"
})(["width:507px;@media only screen and (max-width:991px){padding-left:50px;}@media only screen and (max-width:767px){padding-left:0;width:100%;}h2{@media only screen and (min-width:1441px){margin-bottom:60px;}@media only screen and (min-width:1440px){margin-bottom:40px;}@media only screen and (min-width:767px){margin-bottom:30px;}}p{margin-bottom:30px;}.learn__more-btn{margin-top:20px;}"]);
/* harmony default export */ __webpack_exports__["default"] = (SectionWrapper);

/***/ }),

/***/ "./containers/Interior/AboutUs/index.js":
/*!**********************************************!*\
  !*** ./containers/Interior/AboutUs/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var _aboutUs_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aboutUs.style */ "./containers/Interior/AboutUs/aboutUs.style.js");
/* harmony import */ var common_src_data_Interior__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/data/Interior */ "../../node_modules/common/src/data/Interior/index.js");
var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/containers/Interior/AboutUs/index.js";









var AboutUs = function AboutUs() {
  var thumb_url = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_7__["aboutData"].thumb_url,
      title = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_7__["aboutData"].title,
      text = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_7__["aboutData"].text,
      text2 = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_7__["aboutData"].text2;

  var setTitle = function setTitle(title) {
    return {
      __html: title
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_aboutUs_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "aboutUs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_aboutUs_style__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_aboutUs_style__WEBPACK_IMPORTED_MODULE_6__["ImageWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    left: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: thumb_url,
    alt: "Interior Landing by RedQ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_aboutUs_style__WEBPACK_IMPORTED_MODULE_6__["TextWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    right: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dangerouslySetInnerHTML: setTitle(title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: text2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "learn__more-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "VISITE SITE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "next_arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutUs);

/***/ }),

/***/ "./containers/Interior/Banner/banner.style.js":
/*!****************************************************!*\
  !*** ./containers/Interior/Banner/banner.style.js ***!
  \****************************************************/
/*! exports provided: Container, ContentArea, HighlightedText, FormWrapper, ButtonGroup, CarouselArea, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentArea", function() { return ContentArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightedText", function() { return HighlightedText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWrapper", function() { return FormWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselArea", function() { return CarouselArea; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_src_assets_image_error_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/src/assets/image/error.svg */ "../../node_modules/common/src/assets/image/error.svg");
/* harmony import */ var common_src_assets_image_error_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_error_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_src_assets_image_success_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/src/assets/image/success.svg */ "../../node_modules/common/src/assets/image/success.svg");
/* harmony import */ var common_src_assets_image_success_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_success_svg__WEBPACK_IMPORTED_MODULE_3__);




var shake = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:translateX(0);opacity:0;}50%{transform:translateX(7px);}100%{transform:translateX(0);opacity:1;}"]);
var BannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "bannerstyle__BannerWrapper",
  componentId: "sc-1886bmd-0"
})(["padding-top:30px;margin-bottom:81px;background-color:", ";@media only screen and (max-width:1440px){margin-bottom:60px;}@media only screen and (max-width:767px){padding:135px 0 82px;margin-bottom:42px;}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.banner', '#171717'));
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "bannerstyle__Container",
  componentId: "sc-1886bmd-1"
})(["width:100%;max-width:1580px;min-height:100vh;margin:0 auto;padding:0 20px;display:flex;align-items:center;@media only screen and (max-width:1600px){padding:0 81px;}@media only screen and (max-width:1360px){padding:0 60px;}@media only screen and (max-width:991px){padding:0 30px;}@media only screen and (max-width:767px){flex-direction:column;}"]);
var ContentArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "bannerstyle__ContentArea",
  componentId: "sc-1886bmd-2"
})(["width:595px;padding-right:88px;@media only screen and (max-width:1600px){width:560px;}@media only screen and (max-width:1360px){width:40%;}@media only screen and (max-width:1200px){width:45%;}@media only screen and (max-width:767px){width:100%;padding-right:50px;}@media only screen and (max-width:480px){padding-right:0;}h1,p{color:", ";}h1{margin-bottom:30px;+ p{margin:0;}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.label', '#C6C6C6'));
var HighlightedText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "bannerstyle__HighlightedText",
  componentId: "sc-1886bmd-3"
})(["display:flex;align-items:center;max-width:334px;width:100%;min-height:28px;border-radius:80px;padding:3px 28px 3px 4px;font-size:12px;line-height:18px;font-weight:500;letter-spacing:1px;text-transform:uppercase;color:", ";background-color:", ";margin:0 0 40px;@media only screen and (max-width:767px){margin:0 0 30px;padding:3px 4px;}strong{display:inline-flex;align-items:center;min-width:51px;min-height:20px;padding:3px 11px;border-radius:30px;font-size:14px;font-weight:700;letter-spacing:0;color:", ";background-color:", ";margin-right:10px;}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.label', '#C6C6C6'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBg', '#0D0D0D'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#191919'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#FDEF00'));
var FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "bannerstyle__FormWrapper",
  componentId: "sc-1886bmd-4"
})(["margin-top:45px;@media only screen and (max-width:767px){margin-top:40px;}.input_element{display:flex;align-items:center;position:relative;input{width:100%;border:0;font-size:16px;padding:20px 25px 20px 65px;border-radius:5px;color:", ";background-color:", ";&::placeholder{color:", ";}}.input-icon{position:absolute;left:22px;i{color:", ";svg{width:auto;height:24px;}}}&::after{content:'';width:16px;height:16px;position:absolute;top:calc(50% - 16px / 2);right:25px;}&.invalid{&::after{background-image:url(", ");}}&.valid{&::after{background-image:url(", ");}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.label', '#C6C6C6'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.black', '#000000'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightText', '#7E7E7E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightText', '#7E7E7E'), common_src_assets_image_error_svg__WEBPACK_IMPORTED_MODULE_2___default.a, common_src_assets_image_success_svg__WEBPACK_IMPORTED_MODULE_3___default.a);
var ButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "bannerstyle__ButtonGroup",
  componentId: "sc-1886bmd-5"
})(["margin-top:50px;@media only screen and (max-width:767px){margin-top:25px;margin-bottom:54px;}.reusecore__button{font-size:14px;font-weight:500;border-radius:5px;&:first-child{margin-right:20px;&:hover{opacity:0.95;}}&:hover{.btn-icon{animation:", " 1s infinite;}}}"], shake);
var CarouselArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "bannerstyle__CarouselArea",
  componentId: "sc-1886bmd-6"
})(["width:calc(100% - 595px);display:flex;align-items:center;justify-content:center;@media only screen and (max-width:1600px){width:calc(100% - 560px);}@media only screen and (max-width:1360px){width:60%;}@media only screen and (max-width:1200px){width:55%;}@media only screen and (max-width:767px){width:100%;}#interior_carousel{.glide__slide{.item_wrapper{display:block;height:100vh;max-height:540px;border-radius:20px;overflow:hidden;position:relative;@media only screen and (max-width:1440px){max-height:460px;}@media only screen and (max-width:1200px){max-height:420px;}@media only screen and (max-width:991px){max-height:400px;}@media only screen and (max-width:767px){max-height:380px;}&::after{content:'';display:block;width:100%;height:30%;background:linear-gradient( rgba(255,255,255,0),rgba(0,0,0,0.8) );position:absolute;bottom:0;left:0;transition:height 0.3s ease;}img{width:100%;height:100%;object-fit:cover;transition:transform 0.3s ease;}h4{width:100%;position:absolute;bottom:0;left:0;margin:0;padding:25px 30px;color:", ";font-weight:600;z-index:1;transition:bottom 0.3s ease;@media only screen and (max-width:1440px){font-size:20px;}}}&:hover{.item_wrapper{&::after{height:70%;}img{transform:scale(1.1);}h4{color:", ";bottom:10px;}}}}.glide__controls{> div{> span{&.next_arrow{width:45px;background-color:", ";@media only screen and (max-width:667px){width:30px;}&::before{background-color:", ";transform:rotate(42deg);}&::after{background-color:", ";transform:rotate(-42deg);}}}}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.label', '#C6C6C6'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#FDEF00'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#FDEF00'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#FDEF00'));
/* harmony default export */ __webpack_exports__["default"] = (BannerWrapper);

/***/ }),

/***/ "./containers/Interior/Banner/index.js":
/*!*********************************************!*\
  !*** ./containers/Interior/Banner/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_kit_ionicons_iosEmailOutline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons-kit/ionicons/iosEmailOutline */ "react-icons-kit/ionicons/iosEmailOutline");
/* harmony import */ var react_icons_kit_ionicons_iosEmailOutline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_iosEmailOutline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var common_src_components_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/components/Input */ "../../node_modules/common/src/components/Input/index.js");
/* harmony import */ var common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/src/components/GlideCarousel */ "../../node_modules/common/src/components/GlideCarousel/index.js");
/* harmony import */ var common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! common/src/components/GlideCarousel/glideSlide */ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js");
/* harmony import */ var _interior_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../interior.style */ "./containers/Interior/interior.style.js");
/* harmony import */ var _banner_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./banner.style */ "./containers/Interior/Banner/banner.style.js");
/* harmony import */ var common_src_data_Interior__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! common/src/data/Interior */ "../../node_modules/common/src/data/Interior/index.js");


var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/containers/Interior/Banner/index.js";
















var Banner = function Banner() {
  var discount = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_16__["bannerData"].discount,
      discountLabel = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_16__["bannerData"].discountLabel,
      title = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_16__["bannerData"].title,
      text = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_16__["bannerData"].text,
      carousel = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_16__["bannerData"].carousel;
  var glideOptions = {
    type: 'carousel',
    perView: 3,
    gap: 20,
    breakpoints: {
      1200: {
        perView: 2
      },
      667: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setLoading(true);
  }, []);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    email: '',
    valid: ''
  }),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      state = _useState4[0],
      setState = _useState4[1];

  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  var handleOnChange = function handleOnChange(e) {
    var value = '';

    if (e.target.value.match(emailRegex)) {
      if (e.target.value.length > 0) {
        value = e.target.value;
        setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          email: value,
          valid: 'valid'
        }));
      }
    } else {
      if (e.target.value.length > 0) {
        setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          valid: 'invalid'
        }));
      } else {
        setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          valid: ''
        }));
      }
    }
  };

  var handleSubscriptionForm = function handleSubscriptionForm(e) {
    e.preventDefault();

    if (state.email.match(emailRegex)) {
      console.log(state.email);
      setState({
        email: '',
        valid: ''
      });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_15__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_15__["ContentArea"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    delay: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_15__["HighlightedText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, discount), " ", discountLabel), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], {
    as: "h1",
    content: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_8__["default"], {
    content: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_15__["FormWrapper"], {
    onSubmit: handleSubscriptionForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(common_src_components_Input__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: state.valid,
    type: "email",
    placeholder: "\u8F38\u5165\u96FB\u5B50\u90F5\u4EF6",
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
      icon: react_icons_kit_ionicons_iosEmailOutline__WEBPACK_IMPORTED_MODULE_6__["iosEmailOutline"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }),
    iconPosition: "left",
    required: true,
    onChange: handleOnChange,
    "aria-label": "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_15__["ButtonGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "submit",
    colors: "primaryWithBg",
    title: "\u514D\u8CBB\u8AEE\u8A62",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "\u63A2\u7D22",
    variant: "textButton",
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "flaticon-next",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_15__["CarouselArea"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, loading ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_12__["default"], {
    carouselSelector: "interior_carousel",
    options: glideOptions,
    nextButton: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "next_arrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }),
    prevButton: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "prev_arrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, carousel.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_13__["default"], {
      key: "carousel_key".concat(item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: item.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "item_wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_9__["default"], {
      src: item.thumb_url,
      alt: item.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], {
      as: "h4",
      content: item.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }))));
  }))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_interior_style__WEBPACK_IMPORTED_MODULE_14__["CircleLoader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./containers/Interior/Copyright/copyright.style.js":
/*!**********************************************************!*\
  !*** ./containers/Interior/Copyright/copyright.style.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var CopyrightWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "copyrightstyle__CopyrightWrapper",
  componentId: "sc-19d4tfj-0"
})(["ul{display:flex;align-items:center;li{margin:0 12px;&:first-child{margin-left:0;}&:last-child{margin-right:0;}a{color:#20201d;}}&:hover{li{a{&:not(:hover){opacity:0.4;}}}}}p{color:#20201d;font-size:16px;margin:30px 0 0;}"]);
/* harmony default export */ __webpack_exports__["default"] = (CopyrightWrapper);

/***/ }),

/***/ "./containers/Interior/Copyright/index.js":
/*!************************************************!*\
  !*** ./containers/Interior/Copyright/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var _copyright_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copyright.style */ "./containers/Interior/Copyright/copyright.style.js");
/* harmony import */ var common_src_data_Interior__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/src/data/Interior */ "../../node_modules/common/src/data/Interior/index.js");
var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/containers/Interior/Copyright/index.js";






var Copyright = function Copyright() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_copyright_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "copyright_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, common_src_data_Interior__WEBPACK_IMPORTED_MODULE_4__["socialProfile"].map(function (profile, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: "profile_key_".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: profile.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }))));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: "Copyrights 2019 @RedQ Inc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Copyright);

/***/ }),

/***/ "./containers/Interior/Feature/feature.style.js":
/*!******************************************************!*\
  !*** ./containers/Interior/Feature/feature.style.js ***!
  \******************************************************/
/*! exports provided: FeatureWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureWrapper", function() { return FeatureWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "featurestyle__SectionWrapper",
  componentId: "sc-1s51nkm-0"
})(["padding:81px 0;overflow:hidden;@media only screen and (max-width:1440px){padding:60px 0;}@media only screen and (max-width:767px){padding:42px 0 12px;header{padding:0 30px 40px;}}@media only screen and (max-width:480px){padding-bottom:30px;}"]);
var FeatureWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "featurestyle__FeatureWrapper",
  componentId: "sc-1s51nkm-1"
})(["display:flex;margin:0 -71.5px;@media only screen and (max-width:1360px){margin:0 -25px;}@media only screen and (max-width:767px){flex-wrap:wrap;}.blog_post{padding:0 71.5px;text-align:center;@media only screen and (max-width:1360px){padding:0 25px;}@media only screen and (max-width:767px){width:50%;margin-bottom:30px;}@media only screen and (max-width:480px){text-align:left;display:flex;width:100%;}.thumbnail{margin:30px 0 40px;@media only screen and (max-width:1360px){margin:0 0 27px;img{width:90px;height:auto;}}@media only screen and (max-width:480px){margin:0;width:60px;flex-shrink:0;}}.content{@media only screen and (max-width:480px){width:calc(100% - 60px);padding-left:20px;}h3{margin:0 0 16px;@media only screen and (max-width:1360px){font-size:20px;margin:0 0 12px;}@media only screen and (max-width:480px){line-height:34px;margin-bottom:7px;}}p{margin:0;}}}"]);
/* harmony default export */ __webpack_exports__["default"] = (SectionWrapper);

/***/ }),

/***/ "./containers/Interior/Feature/index.js":
/*!**********************************************!*\
  !*** ./containers/Interior/Feature/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var common_src_components_BlogPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/src/components/BlogPost */ "../../node_modules/common/src/components/BlogPost/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _interior_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interior.style */ "./containers/Interior/interior.style.js");
/* harmony import */ var _feature_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feature.style */ "./containers/Interior/Feature/feature.style.js");
/* harmony import */ var common_src_data_Interior___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/data/Interior/ */ "../../node_modules/common/src/data/Interior/index.js");
var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/containers/Interior/Feature/index.js";









var Feature = function Feature() {
  var title = common_src_data_Interior___WEBPACK_IMPORTED_MODULE_7__["featureData"].title,
      slogan = common_src_data_Interior___WEBPACK_IMPORTED_MODULE_7__["featureData"].slogan,
      features = common_src_data_Interior___WEBPACK_IMPORTED_MODULE_7__["featureData"].features;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_feature_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "feature",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_interior_style__WEBPACK_IMPORTED_MODULE_5__["SectionHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: "h5",
    content: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: slogan,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: "1360px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bottom: true,
    delay: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_feature_style__WEBPACK_IMPORTED_MODULE_6__["FeatureWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, features.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_components_BlogPost__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: "feature_key".concat(item.id),
      thumbUrl: item.icon,
      title: item.title,
      excerpt: item.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    });
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Feature);

/***/ }),

/***/ "./containers/Interior/Footer/footer.style.js":
/*!****************************************************!*\
  !*** ./containers/Interior/Footer/footer.style.js ***!
  \****************************************************/
/*! exports provided: CurvIcon, List, ListItem, SocialList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurvIcon", function() { return CurvIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialList", function() { return SocialList; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_src_assets_image_interior_map_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/src/assets/image/interior/map.png */ "../../node_modules/common/src/assets/image/interior/map.png");
/* harmony import */ var common_src_assets_image_interior_map_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_map_png__WEBPACK_IMPORTED_MODULE_2__);



var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({
  displayName: "footerstyle__FooterWrapper",
  componentId: "wm2a7k-0"
})(["width:100%;padding:70px 0 40px;background-color:", ";background-image:url(", ");background-repeat:no-repeat;background-position:top center;.col-one{.logo{width:110px;margin-bottom:20px;}}.widget_title{color:", ";font-size:14px;margin-bottom:16px;}.text{color:", ";font-size:14px;margin-bottom:9px;}.copyright{width:100%;margin-top:81px;padding-top:30px;align-items:center;justify-content:space-between;border-top:1px solid #212121;@media only screen and (max-width:480px){justify-content:center;margin-top:10px;padding-top:25px;flex-direction:column;}p{color:#464646;margin:0;svg{margin-left:10px;}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#171717'), common_src_assets_image_interior_map_png__WEBPACK_IMPORTED_MODULE_2___default.a, Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.label', '#C6C6C6'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.label', '#C6C6C6'));
var CurvIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "footerstyle__CurvIcon",
  componentId: "wm2a7k-1"
})(["background-color:", ";svg{width:100%;margin-bottom:-5px;fill:", ";}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightBg', '#fbfafe'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#171717'));
var List = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "footerstyle__List",
  componentId: "wm2a7k-2"
})(["width:100%;"]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "footerstyle__ListItem",
  componentId: "wm2a7k-3"
})(["a{color:", ";font-size:14px;line-height:35px;transition:all 0.3s ease;&:hover,&:focus{outline:0;text-decoration:none;color:", ";padding-left:5px;}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightText', '#7E7E7E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.inactiveIcon', '#EBEBEB'));
var SocialList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "footerstyle__SocialList",
  componentId: "wm2a7k-4"
})(["display:flex;align-items:center;margin-top:30px;li{margin-right:30px;@media only screen and (max-width:991px){margin-right:20px;}&:last-child{margin-right:0;}a{display:inline-flex;align-items:center;justify-content:center;line-height:1;color:", ";position:relative;i{position:relative;z-index:1;svg{width:15px;height:auto;}}&:hover{color:", ";}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightText', '#7E7E7E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#FDEF00'));
/* harmony default export */ __webpack_exports__["default"] = (FooterWrapper);

/***/ }),

/***/ "./containers/Interior/Footer/index.js":
/*!*********************************************!*\
  !*** ./containers/Interior/Footer/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/UI/Logo */ "../../node_modules/reusecore/src/elements/UI/Logo/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer.style */ "./containers/Interior/Footer/footer.style.js");
/* harmony import */ var common_src_data_Interior__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/src/data/Interior */ "../../node_modules/common/src/data/Interior/index.js");

var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/containers/Interior/Footer/index.js";











var Footer = function Footer(_ref) {
  var row = _ref.row,
      col = _ref.col,
      colOne = _ref.colOne,
      colTwo = _ref.colTwo;
  var logo = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_10__["footerData"].logo,
      mail = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_10__["footerData"].mail,
      phone = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_10__["footerData"].phone,
      socialLinks = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_10__["footerData"].socialLinks,
      menuWidgets = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_10__["footerData"].menuWidgets;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_9__["CurvIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1920 222.29",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0,222.29S547.82,11.93,1248.06.64C1867.75-9.36,1920,101.3,1920,101.3v121Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    width: "1330px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "col-one"
  }, colOne, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "logo",
    href: "/interior",
    logoSrc: logo,
    title: "Interior",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "text",
    content: mail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "text",
    content: phone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_9__["SocialList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, socialLinks.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: item.name,
      key: "link-key".concat(item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: item.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      "aria-label": item.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, item.icon)));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "col-two"
  }, colTwo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), menuWidgets.map(function (widget) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "col"
    }, col, {
      key: "footer__widget-key".concat(widget.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "widget_title",
      as: "h3",
      content: widget.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_9__["List"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, widget.menu.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_9__["ListItem"], {
        key: "list__item-".concat(item.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: item.link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, item.text)));
    })));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row copyright"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "text",
    content: "copyright 2019 @RedQ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Built & designed with", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "11.243",
    height: "10.378",
    viewBox: "0 0 11.243 10.378",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "f141",
    d: "M10.324-44.135a3.191,3.191,0,0,1,.919,2.311,3.191,3.191,0,0,1-.919,2.311l-4.7,4.892-4.7-4.892A3.191,3.191,0,0,1,0-41.825a3.191,3.191,0,0,1,.919-2.311A2.618,2.618,0,0,1,2.905-45a2.618,2.618,0,0,1,1.986.865l.73.757.757-.757A2.6,2.6,0,0,1,8.351-45,2.6,2.6,0,0,1,10.324-44.135Zm0,0",
    transform: "translate(0 45)",
    fill: "#f4291e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })))))));
}; // Footer style props


Footer.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  colOne: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  colTwo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // Footer default style

Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // Footer col one style
  colOne: {
    width: ['100%', '30%', '35%', '28%'],
    mt: [0, '13px', '0'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0]
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '65%', '72%'],
    flexBox: true,
    flexWrap: 'wrap'
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./containers/Interior/Gallery/gallery.style.js":
/*!******************************************************!*\
  !*** ./containers/Interior/Gallery/gallery.style.js ***!
  \******************************************************/
/*! exports provided: GalleryCard, Button, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryCard", function() { return GalleryCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var GalleryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "gallerystyle__GalleryWrapper",
  componentId: "b3406s-0"
})(["padding:0 0 160px;background:linear-gradient(#ffffff,#fbfafe);display:flex;@media only screen and (max-width:1440px){padding:0 0 150px;}@media only screen and (max-width:767px){padding:42px 0;flex-wrap:wrap;}.glide{position:relative;.glide__track{overflow:inherit;.glide__slides{overflow:inherit;> li{margin-top:-40px;@media only screen and (max-width:767px){margin-top:0;}&:nth-child(even){margin-top:0;}}}}.glide__controls{margin:0;.glide__prev--area,.glide__next--area{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background-color:", ";position:absolute;top:calc(50% - 20px);opacity:0;visibility:hidden;transition:opacity 0.3s ease;@media only screen and (max-width:767px){opacity:1;visibility:visible;}i{font-size:16px;line-height:1;font-weight:700;}}.glide__prev--area{left:30px;box-shadow:-1px 2px 0 rgba(0,0,0,0.1);}.glide__next--area{right:30px;box-shadow:1px 2px 0 rgba(0,0,0,0.1);}}&:hover{.glide__controls{.glide__prev--area,.glide__next--area{visibility:visible;opacity:1;}}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#FDEF00'));
var GalleryCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "gallerystyle__GalleryCard",
  componentId: "b3406s-1"
})(["position:relative;a{display:block;overflow:hidden;position:relative;box-shadow:0 30px 70px 10px rgba(25,25,25,0.19);@media only screen and (max-width:767px){box-shadow:0 5px 30px 5px rgba(25,25,25,0.19);}&::after{content:'';display:block;width:100%;height:130px;position:absolute;bottom:0;left:0;background:linear-gradient(rgba(255,255,255,0),rgba(0,0,0,0.82));transition:all 0.3s ease;}img{transform:scale(1);transition:all 0.3s ease;}&:hover{&::after{height:70%;}img{transform:scale(1.03);}.read_more__btn{color:", ";.arrow{width:28px;left:calc(100% + 10px);border-radius:4px;background-color:", ";&::before{transform:rotate(-42deg);transform-origin:top right;background-color:", ";}&::after{transform:rotate(42deg);transform-origin:10px 2px;background-color:", ";}}}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#FDEF00'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#FDEF00'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#FDEF00'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#FDEF00'));
var Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "gallerystyle__Button",
  componentId: "b3406s-2"
})(["&.read_more__btn{border:0;padding:0;background-color:transparent;cursor:pointer;position:absolute;bottom:35px;left:35px;font-size:22px;font-weight:600;text-transform:capitalize;color:", ";z-index:2;@media only screen and (max-width:1440px){font-size:18px;}@media only screen and (max-width:1200px){font-size:16px;}&:focus{outline:0;}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.label', '#C6C6C6'));
/* harmony default export */ __webpack_exports__["default"] = (GalleryWrapper);

/***/ }),

/***/ "./containers/Interior/Gallery/index.js":
/*!**********************************************!*\
  !*** ./containers/Interior/Gallery/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/src/components/GlideCarousel */ "../../node_modules/common/src/components/GlideCarousel/index.js");
/* harmony import */ var common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/src/components/GlideCarousel/glideSlide */ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js");
/* harmony import */ var _gallery_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery.style */ "./containers/Interior/Gallery/gallery.style.js");
/* harmony import */ var common_src_data_Interior__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/src/data/Interior */ "../../node_modules/common/src/data/Interior/index.js");
var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/containers/Interior/Gallery/index.js";








var Gallery = function Gallery() {
  var glideOptions = {
    type: 'carousel',
    perView: 5,
    gap: 0,
    breakpoints: {
      1200: {
        perView: 4
      },
      991: {
        perView: 3
      },
      480: {
        perView: 2
      }
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gallery_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    carouselSelector: "gallery_carousel",
    options: glideOptions,
    nextButton: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "flaticon-next",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }),
    prevButton: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "flaticon-left-arrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, common_src_data_Interior__WEBPACK_IMPORTED_MODULE_6__["galleryData"].map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: "gallery_key".concat(item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gallery_style__WEBPACK_IMPORTED_MODULE_5__["GalleryCard"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: item.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      src: item.thumb_url,
      alt: item.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gallery_style__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      className: "read_more__btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "arrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), item.name)))));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./containers/Interior/LoginModal/index.js":
/*!*************************************************!*\
  !*** ./containers/Interior/LoginModal/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-tabs */ "rc-tabs");
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rc_tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-tabs/lib/TabContent */ "rc-tabs/lib/TabContent");
/* harmony import */ var rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-tabs/lib/ScrollableInkTabBar */ "rc-tabs/lib/ScrollableInkTabBar");
/* harmony import */ var rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Input */ "../../node_modules/reusecore/src/elements/Input/index.js");
/* harmony import */ var reusecore_src_elements_Checkbox_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/Checkbox/index */ "../../node_modules/reusecore/src/elements/Checkbox/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _loginModal_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loginModal.style */ "./containers/Interior/LoginModal/loginModal.style.js");
/* harmony import */ var rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rc-tabs/assets/index.css */ "../../node_modules/rc-tabs/assets/index.css");
/* harmony import */ var rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var common_src_assets_image_agency_logo_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! common/src/assets/image/agency/logo.png */ "../../node_modules/common/src/assets/image/agency/logo.png");
/* harmony import */ var common_src_assets_image_agency_logo_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_agency_logo_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var common_src_assets_image_agency_login_bg_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! common/src/assets/image/agency/login-bg.jpg */ "../../node_modules/common/src/assets/image/agency/login-bg.jpg");
/* harmony import */ var common_src_assets_image_agency_login_bg_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_agency_login_bg_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var common_src_assets_image_agency_google_icon_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! common/src/assets/image/agency/google-icon.jpg */ "../../node_modules/common/src/assets/image/agency/google-icon.jpg");
/* harmony import */ var common_src_assets_image_agency_google_icon_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_agency_google_icon_jpg__WEBPACK_IMPORTED_MODULE_17__);

var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/containers/Interior/LoginModal/index.js";


















var LoginModal = function LoginModal(_ref) {
  var row = _ref.row,
      col = _ref.col,
      btnStyle = _ref.btnStyle,
      logoStyle = _ref.logoStyle,
      titleStyle = _ref.titleStyle,
      contentWrapper = _ref.contentWrapper,
      outlineBtnStyle = _ref.outlineBtnStyle,
      descriptionStyle = _ref.descriptionStyle,
      googleButtonStyle = _ref.googleButtonStyle;

  var LoginButtonGroup = function LoginButtonGroup() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "default",
      title: "LOGIN"
    }, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: "Forget Password",
      variant: "textButton"
    }, outlineBtnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })));
  };

  var SignupButtonGroup = function SignupButtonGroup() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "default",
      title: "REGISTER"
    }, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_loginModal_style__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "col imageCol"
  }, col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "patternImage",
    src: common_src_assets_image_agency_login_bg_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
    alt: "Login Banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "col tabCol"
  }, col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contentWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: common_src_assets_image_agency_logo_png__WEBPACK_IMPORTED_MODULE_15___default.a
  }, logoStyle, {
    alt: "Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_3___default.a, {
    defaultActiveKey: "loginForm",
    renderTabBar: function renderTabBar() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      });
    },
    renderTabContent: function renderTabContent() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPane"], {
    tab: "LOGIN",
    key: "loginForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Welcome Folk"
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Welcome to Mate Family. Please login with your personal account information letter."
  }, descriptionStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_12__["default"], {
      src: common_src_assets_image_agency_google_icon_jpg__WEBPACK_IMPORTED_MODULE_17___default.a,
      alt: "Google Icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }),
    title: "Sign in with Google",
    iconPosition: "left",
    className: "google-login__btn"
  }, googleButtonStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    inputType: "email",
    isMaterial: true,
    label: "Email Address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    inputType: "password",
    isMaterial: true,
    label: "Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Checkbox_index__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "remember",
    htmlFor: "remember",
    labelText: "Remember Me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoginButtonGroup, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPane"], {
    tab: "REGISTER",
    key: "registerForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Welcome Folk"
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Welcome to Mate Family. Please login with your personal account information letter."
  }, descriptionStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_12__["default"], {
      src: common_src_assets_image_agency_google_icon_jpg__WEBPACK_IMPORTED_MODULE_17___default.a,
      alt: "Google Icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }),
    title: "Sign up with Google",
    iconPosition: "left",
    className: "google-login__btn"
  }, googleButtonStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isMaterial: true,
    label: "Full Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    inputType: "email",
    isMaterial: true,
    label: "Email Address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    inputType: "password",
    isMaterial: true,
    label: "Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SignupButtonGroup, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }))))))));
}; // LoginModal style props


LoginModal.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  hintTextStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  contentWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  descriptionStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  googleButtonStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // LoginModal default style

LoginModal.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap'
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2]
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    height: 'auto',
    ml: '15px'
  },
  // Title default style
  titleStyle: {
    fontSize: ['22px', '36px', '50px'],
    fontWeight: '400',
    color: '#20201D',
    letterSpacing: '-0.025em',
    mt: '35px',
    mb: '10px'
  },
  // Description default style
  descriptionStyle: {
    color: 'rgba(52, 61, 72, 0.8)',
    fontSize: '15px',
    lineHeight: '26px',
    letterSpacing: '-0.025em',
    mb: '23px',
    ml: '1px'
  },
  // Content wrapper style
  contentWrapper: {
    pt: ['32px', '56px'],
    pl: ['17px', '32px', '38px', '40px', '56px'],
    pr: '32px',
    pb: ['32px', '56px']
  },
  // Default button style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500'
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#10ac84'
  },
  // Google button style
  googleButtonStyle: {
    bg: '#ffffff',
    color: '#343D48'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ }),

/***/ "./containers/Interior/LoginModal/loginModal.style.js":
/*!************************************************************!*\
  !*** ./containers/Interior/LoginModal/loginModal.style.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var LoginModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "loginModalstyle__LoginModalWrapper",
  componentId: "sc-31q2ny-0"
})(["width:80%;margin:71px auto;border-radius:5px;overflow:hidden;background-color:", ";@media only screen and (min-width:1201px){max-width:1170px;width:100%;}@media only screen and (max-width:667px){width:100%;}.col{position:relative;.patternImage{position:absolute;width:100%;height:100%;object-fit:cover;}@media only screen and (max-width:991px){width:100%;&.imageCol{display:none;}}}.reusecore__button{background-color:transparent;&.default{background-color:", ";transition:all 0.3s ease;&:hover{box-shadow:0px 9px 20px -5px rgba(16,172,132,0.57);}}}.rc-tabs{border:0;max-width:360px;margin:30px 0 0;@media only screen and (max-width:991px){max-width:100%;}.rc-tabs-bar{margin-left:15px;}.rc-tabs-nav-container{padding:0;.rc-tabs-tab-prev,.rc-tabs-tab-next{display:none;}.rc-tabs-nav-scroll,.rc-tabs-nav{width:100%;.rc-tabs-tab{width:50%;margin-right:0;padding:13px 0;text-align:center;}}}.rc-tabs-tabpane{padding-left:15px;padding-bottom:15px;padding-right:15px;@media (min-width:1200px){min-height:560px;}}.google-login__btn{width:100%;font-size:15px;font-weight:700;margin-bottom:45px;box-shadow:0 4px 15px rgba(0,0,0,0.1);.btn-icon{position:relative;left:-22px;img{width:21px;height:auto;}}}.reusecore__input{margin-bottom:30px;&.is-material{&.is-focus{label{color:", ";top:-12px;}.highlight{background-color:", ";}}}label{font-weight:400;font-size:14px;color:rgba(0,0,0,0.6);top:15px;}}.reusecore__checkbox{margin:0 0 35px;label{.reusecore__field-label{font-size:13px;font-weight:400;}}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#10ac84'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#10ac84'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#10ac84'));
/* harmony default export */ __webpack_exports__["default"] = (LoginModalWrapper);

/***/ }),

/***/ "./containers/Interior/Navbar/index.js":
/*!*********************************************!*\
  !*** ./containers/Interior/Navbar/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit/ionicons/androidClose */ "react-icons-kit/ionicons/androidClose");
/* harmony import */ var react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Navbar */ "../../node_modules/reusecore/src/elements/Navbar/index.js");
/* harmony import */ var reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Drawer */ "../../node_modules/reusecore/src/elements/Drawer/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/UI/Logo */ "../../node_modules/reusecore/src/elements/UI/Logo/index.js");
/* harmony import */ var common_src_components_HamburgMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/src/components/HamburgMenu */ "../../node_modules/common/src/components/HamburgMenu/index.js");
/* harmony import */ var common_src_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/components/ScrollSpyMenu */ "../../node_modules/common/src/components/ScrollSpyMenu/index.js");
/* harmony import */ var common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/src/contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar.style */ "./containers/Interior/Navbar/navbar.style.js");
/* harmony import */ var _SearchPanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../SearchPanel */ "./containers/Interior/SearchPanel/index.js");
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../LoginModal */ "./containers/Interior/LoginModal/index.js");
/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Copyright */ "./containers/Interior/Copyright/index.js");
/* harmony import */ var common_src_data_Interior__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! common/src/data/Interior */ "../../node_modules/common/src/data/Interior/index.js");
/* harmony import */ var common_src_assets_image_interior_logo_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! common/src/assets/image/interior/logo.svg */ "../../node_modules/common/src/assets/image/interior/logo.svg");
/* harmony import */ var common_src_assets_image_interior_logo_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_logo_svg__WEBPACK_IMPORTED_MODULE_18__);

var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/containers/Interior/Navbar/index.js";



















var CloseModalButton = function CloseModalButton() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "modalCloseBtn",
    variant: "fab",
    onClick: function onClick() {
      return Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["closeModal"])();
    },
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "flaticon-plus-symbol",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  });
};

var CloseModalButtonAlt = function CloseModalButtonAlt() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "modalCloseBtn alt",
    variant: "fab",
    onClick: function onClick() {
      return Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["closeModal"])();
    },
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "flaticon-plus-symbol",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  });
};

var Navbar = function Navbar(_ref) {
  var navbarStyle = _ref.navbarStyle,
      logoStyle = _ref.logoStyle;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_12__["DrawerContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var handleSearchModal = function handleSearchModal() {
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["openModal"])({
      config: {
        className: 'search-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: {
          transform: 'translateY(100px)'
        },
        animationTo: {
          transform: 'translateY(0)'
        },
        //
        transition: {
          mass: 1,
          tension: 180,
          friction: 26
        }
      },
      component: _SearchPanel__WEBPACK_IMPORTED_MODULE_14__["default"],
      componentProps: {},
      closeComponent: CloseModalButtonAlt,
      closeOnClickOutside: false
    });
  };

  var handleLoginModal = function handleLoginModal() {
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["openModal"])({
      config: {
        className: 'login-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: {
          transform: 'translateY(100px)'
        },
        animationTo: {
          transform: 'translateY(0)'
        },
        transition: {
          mass: 1,
          tension: 180,
          friction: 26
        }
      },
      component: _LoginModal__WEBPACK_IMPORTED_MODULE_15__["default"],
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false
    });
  };

  var toggleHandler = function toggleHandler() {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, navbarStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_navbar_style__WEBPACK_IMPORTED_MODULE_13__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_9__["default"], {
    href: "/interior",
    logoSrc: common_src_assets_image_interior_logo_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
    title: "Interior",
    logoStyle: logoStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "textButton",
    onClick: handleSearchModal,
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "flaticon-magnifying-glass",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }),
    "aria-label": "search button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "textButton",
    onClick: handleLoginModal,
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "flaticon-user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }),
    "aria-label": "registration button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "420px",
    placement: "right",
    drawerHandler: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_HamburgMenu__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: state.isOpen ? 'active' : '',
    onClick: toggleHandler,
    "aria-label": "drawer toggle button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    icon: react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_5__["androidClose"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    menuItems: common_src_data_Interior__WEBPACK_IMPORTED_MODULE_17__["menuData"],
    drawerClose: true,
    offset: -100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Copyright__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  })))));
};

Navbar.propTypes = {
  navbarStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px'
  },
  logoStyle: {
    width: '128px',
    height: 'auto'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./containers/Interior/Navbar/navbar.style.js":
/*!****************************************************!*\
  !*** ./containers/Interior/Navbar/navbar.style.js ***!
  \****************************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "navbarstyle__Container",
  componentId: "sc-1rpqsmj-0"
})(["margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px;display:flex;width:100%;align-items:center;justify-content:space-between;"]);


/***/ }),

/***/ "./containers/Interior/News/index.js":
/*!*******************************************!*\
  !*** ./containers/Interior/News/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var _news_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news.style */ "./containers/Interior/News/news.style.js");
/* harmony import */ var common_src_data_Interior__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/src/data/Interior */ "../../node_modules/common/src/data/Interior/index.js");
var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/containers/Interior/News/index.js";








var News = function News() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_news_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_news_style__WEBPACK_IMPORTED_MODULE_5__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "D")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 60,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "A")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 90,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "T")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: 90,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "E")))));
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ "./containers/Interior/News/news.style.js":
/*!************************************************!*\
  !*** ./containers/Interior/News/news.style.js ***!
  \************************************************/
/*! exports provided: ContentWrapper, NewsWrapper, NewsItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsWrapper", function() { return NewsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItem", function() { return NewsItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "newsstyle__SectionWrapper",
  componentId: "sc-1ro86gr-0"
})(["background-color:#fbfafe;padding-bottom:20px;margin-top:40px;position:relative;@media only screen and (max-width:1440px){margin-top:-20px;}@media only screen and (max-width:1360px){margin-top:-60px;}@media only screen and (max-width:767px){margin-top:22px;}&::before{content:'';display:block;width:100%;height:10vw;background-color:", ";position:absolute;top:0;left:0;@media only screen and (max-width:1440px){height:14vw;}@media only screen and (max-width:1360px){height:15vw;}@media only screen and (max-width:1200px){height:17vw;}@media only screen and (max-width:767px){height:13vw;}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "newsstyle__ContentWrapper",
  componentId: "sc-1ro86gr-1"
})(["max-width:1576px;margin:0 auto;position:relative;z-index:1;@media only screen and (max-width:1600px){padding:0 60px;}@media only screen and (max-width:1440px){padding:0 50px;margin-bottom:-30px;}@media only screen and (max-width:1200px){padding:0 30px;}.row{display:flex;justify-content:space-between;margin:0 -30px;@media only screen and (max-width:667px){padding:0 30px;}.col{width:calc(100% / 4);padding:0 50px;height:400px;display:flex;justify-content:center;align-items:center;font-size:25vw;color:#f5f5fc;font-weight:500;@media only screen and (min-width:768px) and (max-width:1200px){font-size:22vw;}@media only screen and (max-width:767px){height:auto;padding:0;}&:last-child{color:#fffbc0;}}}"]);
var NewsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "newsstyle__NewsWrapper",
  componentId: "sc-1ro86gr-2"
})(["display:flex;flex-wrap:wrap;margin:0 -30px;position:relative;top:-7vw;z-index:1;@media only screen and (max-width:1440px){top:-8vw;}@media only screen and (max-width:1360px){top:-12vw;}@media only screen and (min-width:992px) and (max-width:1200px){margin:0 -15px;top:-14vw;}@media only screen and (max-width:767px){top:-15vw;padding-bottom:50px;}"]);
var NewsItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "newsstyle__NewsItem",
  componentId: "sc-1ro86gr-3"
})(["width:calc(100% / 4);padding:0 50px;@media only screen and (max-width:1440px){padding:0 30px;}@media only screen and (min-width:992px) and (max-width:1200px){padding:0 15px;}@media only screen and (max-width:991px){width:calc(100% / 2);margin-top:50px;}@media only screen and (max-width:480px){width:calc(100% / 1);}h3{font-weight:400;margin:0 0 22px;@media only screen and (min-width:992px) and (max-width:1200px){font-size:18px;line-height:28px;margin:0 0 15px;}}p{margin:0 0 40px;}"]);
/* harmony default export */ __webpack_exports__["default"] = (SectionWrapper);

/***/ }),

/***/ "./containers/Interior/Newsletter/index.js":
/*!*************************************************!*\
  !*** ./containers/Interior/Newsletter/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit_ionicons_iosEmailOutline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit/ionicons/iosEmailOutline */ "react-icons-kit/ionicons/iosEmailOutline");
/* harmony import */ var react_icons_kit_ionicons_iosEmailOutline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_iosEmailOutline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var common_src_components_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/components/Input */ "../../node_modules/common/src/components/Input/index.js");
/* harmony import */ var _interior_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../interior.style */ "./containers/Interior/interior.style.js");
/* harmony import */ var _newsletter_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./newsletter.style */ "./containers/Interior/Newsletter/newsletter.style.js");
/* harmony import */ var common_src_data_Interior__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/src/data/Interior */ "../../node_modules/common/src/data/Interior/index.js");


var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/containers/Interior/Newsletter/index.js";












var Newsletter = function Newsletter() {
  var title = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_12__["newsletterData"].title,
      slogan = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_12__["newsletterData"].slogan,
      note = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_12__["newsletterData"].note;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    email: '',
    valid: ''
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  var handleOnChange = function handleOnChange(e) {
    var value = '';

    if (e.target.value.match(emailRegex)) {
      if (e.target.value.length > 0) {
        value = e.target.value;
        setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          email: value,
          valid: 'valid'
        }));
      }
    } else {
      if (e.target.value.length > 0) {
        setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          valid: 'invalid'
        }));
      } else {
        setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          valid: ''
        }));
      }
    }
  };

  var handleSubscriptionForm = function handleSubscriptionForm(e) {
    e.preventDefault();

    if (state.email.match(emailRegex)) {
      console.log(state.email);
      setState({
        email: '',
        valid: ''
      });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_newsletter_style__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
    bottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_interior_style__WEBPACK_IMPORTED_MODULE_10__["SectionHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    as: "h5",
    content: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    content: slogan,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
    bottom: true,
    delay: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_newsletter_style__WEBPACK_IMPORTED_MODULE_11__["FormWrapper"], {
    onSubmit: handleSubscriptionForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_newsletter_style__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(common_src_components_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: state.valid,
    type: "email",
    placeholder: "Enter email address",
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      icon: react_icons_kit_ionicons_iosEmailOutline__WEBPACK_IMPORTED_MODULE_4__["iosEmailOutline"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }),
    iconPosition: "left",
    required: true,
    onChange: handleOnChange,
    "aria-label": "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "submit",
    colors: "primaryWithBg",
    title: "Join Us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], {
    content: note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Newsletter);

/***/ }),

/***/ "./containers/Interior/Newsletter/newsletter.style.js":
/*!************************************************************!*\
  !*** ./containers/Interior/Newsletter/newsletter.style.js ***!
  \************************************************************/
/*! exports provided: FormWrapper, FormGroup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWrapper", function() { return FormWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_src_assets_image_error_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/src/assets/image/error.svg */ "../../node_modules/common/src/assets/image/error.svg");
/* harmony import */ var common_src_assets_image_error_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_error_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_src_assets_image_success_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/src/assets/image/success.svg */ "../../node_modules/common/src/assets/image/success.svg");
/* harmony import */ var common_src_assets_image_success_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_success_svg__WEBPACK_IMPORTED_MODULE_3__);




var SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "newsletterstyle__SectionWrapper",
  componentId: "hpwy1k-0"
})(["padding:51px 0 130px;background-color:", ";@media only screen and (max-width:1440px){padding:20px 0 100px;}@media only screen and (max-width:767px){padding:42px 0;flex-wrap:wrap;padding:60px 0;}@media only screen and (max-width:480px){header{padding:0 30px 40px;}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightBg', '#fbfafe'));
var FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "newsletterstyle__FormWrapper",
  componentId: "hpwy1k-1"
})(["max-width:760px;padding:0 30px;margin:0 auto;p{text-align:center;}"]);
var FormGroup = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "newsletterstyle__FormGroup",
  componentId: "hpwy1k-2"
})(["display:flex;align-items:center;margin-bottom:64px;@media only screen and (max-width:667px){margin-bottom:40px;flex-direction:column;}p{margin-bottom:0;}.input_element{width:calc(100% - 132px);display:flex;align-items:center;position:relative;padding-right:20px;@media only screen and (max-width:667px){width:100%;padding-right:0;margin-bottom:10px;}input{width:100%;font-size:16px;padding:20px 25px 20px 65px;border-radius:5px;border:1px solid #f4f4fd;color:", ";background-color:", ";transition:all 0.3s ease;@media only screen and (max-width:767px){padding:18px 25px 18px 60px;}&::placeholder{color:", ";}&:focus{border-color:", ";}}.input-icon{position:absolute;left:22px;i{color:", ";svg{width:auto;height:24px;}}}&::after{content:'';width:16px;height:16px;position:absolute;top:calc(50% - 16px / 2);right:45px;flex-shrink:0;@media only screen and (max-width:767px){right:24px;}}&.invalid{&::after{background-image:url(", ");}}&.valid{&::after{background-image:url(", ");}}}button.reusecore__button{width:132px;height:60px;font-size:14px;font-weight:500;text-transform:uppercase;@media only screen and (max-width:667px){width:100%;height:56px;}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#191919'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightText', '#7E7E7E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.inactiveIcon', '#EBEBEB'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightText', '#7E7E7E'), common_src_assets_image_error_svg__WEBPACK_IMPORTED_MODULE_2___default.a, common_src_assets_image_success_svg__WEBPACK_IMPORTED_MODULE_3___default.a);
/* harmony default export */ __webpack_exports__["default"] = (SectionWrapper);

/***/ }),

/***/ "./containers/Interior/Project/index.js":
/*!**********************************************!*\
  !*** ./containers/Interior/Project/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/src/components/GlideCarousel */ "../../node_modules/common/src/components/GlideCarousel/index.js");
/* harmony import */ var common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/components/GlideCarousel/glideSlide */ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js");
/* harmony import */ var _interior_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../interior.style */ "./containers/Interior/interior.style.js");
/* harmony import */ var _project_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project.style */ "./containers/Interior/Project/project.style.js");
/* harmony import */ var common_src_data_Interior__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/src/data/Interior */ "../../node_modules/common/src/data/Interior/index.js");
var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/containers/Interior/Project/index.js";












var Project = function Project() {
  var title = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_10__["projectData"].title,
      slogan = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_10__["projectData"].slogan,
      thumb_url = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_10__["projectData"].thumb_url,
      projects = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_10__["projectData"].projects;
  var glideOptions = {
    type: 'carousel',
    perView: 1,
    gap: 0
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_project_style__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "project",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: "1360px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_interior_style__WEBPACK_IMPORTED_MODULE_8__["SectionHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: "h5",
    content: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: slogan,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_project_style__WEBPACK_IMPORTED_MODULE_9__["ProjectWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    carouselSelector: "project_carousel",
    options: glideOptions,
    nextButton: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "next_arrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }),
    prevButton: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "prev_arrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, projects.map(function (project) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: "project_key".concat(project.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_project_style__WEBPACK_IMPORTED_MODULE_9__["TextWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
      content: project.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
      content: project.text2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_project_style__WEBPACK_IMPORTED_MODULE_9__["ImageWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: thumb_url,
    alt: "Interiro landing by RedQ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./containers/Interior/Project/project.style.js":
/*!******************************************************!*\
  !*** ./containers/Interior/Project/project.style.js ***!
  \******************************************************/
/*! exports provided: ProjectWrapper, TextWrapper, ImageWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectWrapper", function() { return ProjectWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextWrapper", function() { return TextWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_src_assets_image_interior_curv_bg_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/src/assets/image/interior/curv-bg.svg */ "../../node_modules/common/src/assets/image/interior/curv-bg.svg");
/* harmony import */ var common_src_assets_image_interior_curv_bg_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_curv_bg_svg__WEBPACK_IMPORTED_MODULE_2__);



var SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "projectstyle__SectionWrapper",
  componentId: "sc-1wggy61-0"
})(["padding:130px 0 260px;margin-top:140px;background-image:url(", ");background-repeat:no-repeat;background-size:cover;background-position:top left;position:relative;@media only screen and (max-width:1440px){padding:120px 0 190px;margin-top:81px;}@media only screen and (max-width:767px){margin-top:42px;padding:82px 0;}header{text-align:left;}.container{position:relative;&::after{content:'';display:block;width:calc(100% + 30px);height:70px;border-top-left-radius:20px;border-top-right-radius:20px;background-color:", ";position:absolute;bottom:-260px;left:-15px;@media only screen and (max-width:1440px){bottom:-190px;}@media only screen and (max-width:767px){bottom:-82px;}}}"], common_src_assets_image_interior_curv_bg_svg__WEBPACK_IMPORTED_MODULE_2___default.a, Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));
var ProjectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "projectstyle__ProjectWrapper",
  componentId: "sc-1wggy61-1"
})(["display:flex;padding:80px 60px;background-color:", ";@media only screen and (max-width:1200px){padding:40px;}@media only screen and (max-width:991px){padding:0;background-color:transparent;}@media only screen and (max-width:667px){flex-wrap:wrap;padding:0;flex-direction:column;background-color:transparent;}#project_carousel{width:calc(100% - 488px);@media only screen and (max-width:1200px){width:calc(100% - 460px);}@media only screen and (max-width:991px){width:calc(100% - 400px);margin-right:40px;}@media only screen and (max-width:667px){width:100%;}p{margin-bottom:30px;}.glide__controls{margin-top:20px;@media only screen and (max-width:767px){margin-top:0;}> div{> span{&.next_arrow{width:45px;background-color:", ";@media only screen and (max-width:667px){width:30px;}&::before{background-color:", ";transform:rotate(42deg);}&::after{transform:rotate(-42deg);background-color:", ";}}}&:hover{> span{background-color:", ";&::before,&::after{background-color:", ";}}}}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.link', '#352FD9'));
var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "projectstyle__TextWrapper",
  componentId: "sc-1wggy61-2"
})([""]);
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "projectstyle__ImageWrapper",
  componentId: "sc-1wggy61-3"
})(["width:488px;position:relative;@media only screen and (max-width:1200px){width:460px;}@media only screen and (max-width:991px){width:350px;}@media only screen and (max-width:667px){width:100%;margin-top:54px;}img{position:absolute;bottom:-80px;right:0;max-width:100%;height:auto;@media only screen and (max-width:1200px){bottom:-50px;}@media only screen and (max-width:767px){position:initial;bottom:0;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (SectionWrapper);

/***/ }),

/***/ "./containers/Interior/SearchPanel/index.js":
/*!**************************************************!*\
  !*** ./containers/Interior/SearchPanel/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Input */ "../../node_modules/reusecore/src/elements/Input/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_kit_ionicons_iosSearchStrong__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons-kit/ionicons/iosSearchStrong */ "react-icons-kit/ionicons/iosSearchStrong");
/* harmony import */ var react_icons_kit_ionicons_iosSearchStrong__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_iosSearchStrong__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _searchPanel_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./searchPanel.style */ "./containers/Interior/SearchPanel/searchPanel.style.js");

var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/containers/Interior/SearchPanel/index.js";









var SearchPanel = function SearchPanel(_ref) {
  var titleStyle = _ref.titleStyle,
      hintStyle = _ref.hintStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_searchPanel_style__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Search Panel"
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    inputType: "email",
    iconPosition: "right",
    placeholder: "Type what you want",
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
      icon: react_icons_kit_ionicons_iosSearchStrong__WEBPACK_IMPORTED_MODULE_7__["iosSearchStrong"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Example: \u201CApp Template\u201D \u201CApplication\u201D"
  }, hintStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })));
}; // SearchPanel style props


SearchPanel.propTypes = {
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  hintTextStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // SearchPanel default style

SearchPanel.defaultProps = {
  // Title default style
  titleStyle: {
    fontSize: ['24px', '30px'],
    fontWeight: '400',
    color: '#20201D',
    letterSpacing: '-0.025em',
    mb: '30px'
  },
  // hint default style
  hintStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: 'rgba(32, 32, 29, 0.55)',
    letterSpacing: '-0.025em',
    mt: '17px',
    ml: ['15px', '30px'],
    mb: '0'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SearchPanel);

/***/ }),

/***/ "./containers/Interior/SearchPanel/searchPanel.style.js":
/*!**************************************************************!*\
  !*** ./containers/Interior/SearchPanel/searchPanel.style.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var SearchPanelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "searchPanelstyle__SearchPanelWrapper",
  componentId: "cplmnb-0"
})(["max-width:600px;width:100%;margin:0 auto;padding:0 15px;.reusecore__input{.field-wrapper{input{border:0;border-radius:5px;height:70px;box-shadow:0 3px 20px rgba(35,49,90,0.08);color:#20201d;font-size:16px;font-weight:400;padding-left:39px;padding-right:80px;&:placholder{color:rgba(32,32,29,0.5);}}.input-icon{width:80px;height:100%;svg{width:28px;height:28px;path{fill:#20201d;}}}}}"]);
/* harmony default export */ __webpack_exports__["default"] = (SearchPanelWrapper);

/***/ }),

/***/ "./containers/Interior/Team/index.js":
/*!*******************************************!*\
  !*** ./containers/Interior/Team/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/components/GlideCarousel */ "../../node_modules/common/src/components/GlideCarousel/index.js");
/* harmony import */ var common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/components/GlideCarousel/glideSlide */ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js");
/* harmony import */ var _interior_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../interior.style */ "./containers/Interior/interior.style.js");
/* harmony import */ var _team_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./team.style */ "./containers/Interior/Team/team.style.js");
/* harmony import */ var common_src_data_Interior__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/src/data/Interior */ "../../node_modules/common/src/data/Interior/index.js");

var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/containers/Interior/Team/index.js";













var Team = function Team() {
  var title = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_12__["teamData"].title,
      slogan = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_12__["teamData"].slogan,
      members = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_12__["teamData"].members;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var glideOptions = {
    type: 'carousel',
    perView: 3,
    gap: 50,
    breakpoints: {
      1200: {
        perView: 3,
        gap: 30
      },
      767: {
        perView: 2,
        gap: 30
      },
      480: {
        perView: 1
      }
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(true);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_team_style__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "1360px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    bottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_interior_style__WEBPACK_IMPORTED_MODULE_10__["SectionHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    as: "h5",
    content: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: slogan,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    bottom: true,
    delay: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_team_style__WEBPACK_IMPORTED_MODULE_11__["CarouselWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    carouselSelector: "team_carousel",
    options: glideOptions,
    nextButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "next_arrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }),
    prevButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "prev_arrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, members.map(function (member) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: "project_key".concat(member.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_team_style__WEBPACK_IMPORTED_MODULE_11__["TeamCard"], {
      className: "team_card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_team_style__WEBPACK_IMPORTED_MODULE_11__["ImageWrapper"], {
      className: "image_wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
      src: member.avatar,
      alt: member.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_team_style__WEBPACK_IMPORTED_MODULE_11__["TextWrapper"], {
      className: "text_wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "name_plate",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], {
      as: "h3",
      content: member.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
      content: member.designation,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "social_links",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, member.social_links.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: "social_link__key".concat(item.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: item.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        "aria-label": "Check out our team member profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, item.icon)));
    })))));
  }))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_interior_style__WEBPACK_IMPORTED_MODULE_10__["CircleLoader"], {
    className: "alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ }),

/***/ "./containers/Interior/Team/team.style.js":
/*!************************************************!*\
  !*** ./containers/Interior/Team/team.style.js ***!
  \************************************************/
/*! exports provided: TeamCard, ImageWrapper, TextWrapper, CarouselWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamCard", function() { return TeamCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextWrapper", function() { return TextWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselWrapper", function() { return CarouselWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "teamstyle__SectionWrapper",
  componentId: "z9jtzw-0"
})(["padding:10px 0 81px;@media only screen and (max-width:1440px){padding:10px 0 60px;}@media only screen and (max-width:767px){padding-bottom:42px;}header{text-align:left;padding-bottom:60px;@media only screen and (max-width:1440px){padding-bottom:56px;}@media only screen and (max-width:375px){padding-right:61px;}}#team_carousel{.glide__controls{margin:0;position:absolute;top:-90px;right:0;> div{> span{&.next_arrow{width:45px;background-color:", ";@media only screen and (max-width:667px){width:30px;}&::before{background-color:", ";transform:rotate(42deg);}&::after{transform:rotate(-42deg);background-color:", ";}}}&:hover{> span{background-color:", ";&::before,&::after{background-color:", ";}&.next_arrow{width:45px;&::before{transform:rotate(42deg);}&::after{transform:rotate(-42deg);}}}}}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.link', '#352FD9'));
var TeamCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "teamstyle__TeamCard",
  componentId: "z9jtzw-1"
})(["position:relative;&:hover{.image_wrapper{&::before{opacity:1;visibility:visible;}img{transform:scale(1.07);}}}"]);
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "teamstyle__ImageWrapper",
  componentId: "z9jtzw-2"
})(["position:relative;overflow:hidden;border-radius:20px;&::before{content:'';display:block;width:100%;height:150px;background:linear-gradient( rgba(255,255,255,0),rgba(0,0,0,0.8) 110% );position:absolute;left:0;bottom:0;opacity:0;visibility:hidden;border-bottom-left-radius:20px;border-bottom-right-radius:20px;z-index:1;transition:opacity 0.3s ease;}img{width:100%;height:100%;object-fit:cover;transition:all 0.3s ease;}"]);
var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "teamstyle__TextWrapper",
  componentId: "z9jtzw-3"
})(["text-align:center;.name_plate{width:calc(100% - 120px);margin:-43px 0 20px 60px;padding:16px;border-radius:10px;background-color:", ";position:relative;z-index:1;@media only screen and (max-width:1200px){width:calc(100% - 80px);margin-left:40px;}@media only screen and (max-width:991px){width:calc(100% - 30px);margin-left:15px;}@media only screen and (max-width:767px){width:calc(100% - 60px);margin-left:30px;}h3{color:", ";font-size:20px;line-height:1;font-weight:500;text-transform:capitalize;margin-bottom:7px;@media only screen and (max-width:991px){font-size:18px;margin-bottom:4px;}@media only screen and (max-width:667px){font-size:16px;}}p{color:", ";font-size:14px;font-weight:400;margin:0;@media only screen and (max-width:991px){font-size:13px;}@media only screen and (max-width:667px){font-size:12px;}}}.social_links{display:inline-flex;li{display:flex;align-items:center;margin:0 7px;&:first-child{margin-left:0;}&:last-child{margin-right:0;}a{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:", ";transition:background-color 0.3s ease;&:hover{text-decoration:none;background-color:", ";}}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#FDEF00'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#191919'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#191919'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading3', '#273343'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#FDEF00'));
var CarouselWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "teamstyle__CarouselWrapper",
  componentId: "z9jtzw-4"
})(["display:flex;align-items:center;justify-content:center;width:100%;min-height:250px;"]);
/* harmony default export */ __webpack_exports__["default"] = (SectionWrapper);

/***/ }),

/***/ "./containers/Interior/Testimonial/carousel.js":
/*!*****************************************************!*\
  !*** ./containers/Interior/Testimonial/carousel.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @glidejs/glide */ "@glidejs/glide");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide/dist/css/glide.core.min.css */ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css");
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/containers/Interior/Testimonial/carousel.js";







var Carousel = function Carousel(_ref) {
  var data = _ref.data;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_1___default.a('#glide_carousel', {
      type: 'carousel',
      perView: 1,
      gap: 0
    });
    glide.mount();
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "glide",
    id: "glide_carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slide__wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "glide__track",
    "data-glide-el": "track",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "glide__slides",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, data.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "glide__slide",
      key: "glide__slide--key".concat(item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "testimonial_card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "user_info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], {
      as: "h3",
      content: item.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, item.designation, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: item.account_url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, item.username))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "review",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_3__["default"], {
      content: item.comment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }))));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "glide__arrows",
    "data-glide-el": "controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "glide__arrow glide__arrow--left",
    "data-glide-dir": "<",
    "aria-label": "prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "prev_arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "glide__arrow glide__arrow--right",
    "data-glide-dir": ">",
    "aria-label": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "next_arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "glide__bullets",
    "data-glide-el": "controls[nav]",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, data.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "glide__bullet",
      "data-glide-dir": "=".concat(item.id),
      key: "glide_bullet--key".concat(item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
      src: item.avatar,
      alt: item.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./containers/Interior/Testimonial/index.js":
/*!**************************************************!*\
  !*** ./containers/Interior/Testimonial/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel */ "./containers/Interior/Testimonial/carousel.js");
/* harmony import */ var _interior_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interior.style */ "./containers/Interior/interior.style.js");
/* harmony import */ var _testimonial_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonial.style */ "./containers/Interior/Testimonial/testimonial.style.js");
/* harmony import */ var common_src_data_Interior__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/data/Interior */ "../../node_modules/common/src/data/Interior/index.js");

var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/containers/Interior/Testimonial/index.js";








var Testimonial = function Testimonial() {
  var title = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_7__["testimonialData"].title,
      slogan = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_7__["testimonialData"].slogan,
      reviews = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_7__["testimonialData"].reviews;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(true);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonial_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "testimonial",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "1360px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_interior_style__WEBPACK_IMPORTED_MODULE_5__["SectionHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: "h5",
    content: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: slogan,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonial_style__WEBPACK_IMPORTED_MODULE_6__["CarouselWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_carousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: reviews,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_interior_style__WEBPACK_IMPORTED_MODULE_5__["CircleLoader"], {
    className: "alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

/***/ }),

/***/ "./containers/Interior/Testimonial/testimonial.style.js":
/*!**************************************************************!*\
  !*** ./containers/Interior/Testimonial/testimonial.style.js ***!
  \**************************************************************/
/*! exports provided: CarouselWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselWrapper", function() { return CarouselWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_src_assets_image_interior_twitter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/src/assets/image/interior/twitter.svg */ "../../node_modules/common/src/assets/image/interior/twitter.svg");
/* harmony import */ var common_src_assets_image_interior_twitter_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_twitter_svg__WEBPACK_IMPORTED_MODULE_2__);



var SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "testimonialstyle__SectionWrapper",
  componentId: "sc-1ujgdtl-0"
})(["padding:162px 0 200px;@media only screen and (max-width:1440px){padding:120px 0 160px;}@media only screen and (max-width:767px){padding:82px 0 41px;}header{text-align:left;padding-bottom:60px;@media only screen and (max-width:1440px){padding-bottom:56px;}@media only screen and (max-width:991px){padding-bottom:40px;}}"]);
var CarouselWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "testimonialstyle__CarouselWrapper",
  componentId: "sc-1ujgdtl-1"
})(["display:flex;align-items:center;justify-content:center;min-height:250px;.glide{display:flex;align-items:center;@media only screen and (max-width:991px){flex-direction:column;}.slide__wrapper{width:calc(100% - 500px);border-radius:30px;padding:85px 90px 90px 70px;background-color:", ";box-shadow:1px 2px 80px rgba(244,244,253,0.83);position:relative;@media only screen and (max-width:1440px){padding:70px 60px;}@media only screen and (max-width:1200px){width:calc(100% - 450px);padding:56px 50px;}@media only screen and (max-width:991px){width:100%;}@media only screen and (max-width:667px){margin-right:0;padding:0;box-shadow:none;}}.testimonial_card{width:calc(100% - 500px);padding-right:140px;@media only screen and (max-width:1200px){padding-right:50px;}@media only screen and (max-width:991px){width:calc(100% - 80px);}@media only screen and (max-width:767px){width:100%;padding-right:0;}.user_info{background-image:url(", ");background-repeat:no-repeat;background-size:123px auto;background-position:center left;padding-left:60px;margin-bottom:50px;height:100px;display:flex;flex-direction:column;justify-content:center;@media only screen and (max-width:1440px){background-size:100px auto;margin-bottom:30px;}@media only screen and (max-width:991px){background-size:90px auto;padding-left:55px;}@media only screen and (max-width:767px){padding-left:50px;margin-bottom:20px;}h3{margin:0 0 5px;}p{margin:0;}}.review{p{margin:0;}}}.glide__arrows{position:absolute;top:141px;right:90px;@media only screen and (max-width:1440px){top:130px;right:70px;}@media only screen and (max-width:1200px){top:115px;right:50px;}@media only screen and (max-width:991px){position:initial;display:none;}> button{background-color:transparent;> span{&.next_arrow{width:45px;background-color:", ";&::before{background-color:", ";transform:rotate(42deg) !important;}&::after{transform:rotate(-42deg) !important;background-color:", ";}}}&:hover{> span{background-color:", ";&::before,&::after{background-color:", ";}}}}}.glide__bullets{width:500px;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;height:450px;position:relative;margin-left:130px;@media only screen and (max-width:1440px){margin-left:80px;height:420px;}@media only screen and (max-width:1200px){width:390px;height:400px;margin-left:60px;}@media only screen and (max-width:991px){width:100%;max-width:400px;height:auto;margin:50px auto 0;justify-content:space-evenly;}> button{border:0;padding:0;cursor:pointer;position:relative;background:transparent;&:nth-child(2){position:absolute;right:0;@media only screen and (max-width:991px){position:relative;}}&:nth-child(3){position:absolute;bottom:0;@media only screen and (max-width:991px){position:relative;}}&:nth-child(4){position:absolute;left:0;@media only screen and (max-width:991px){position:relative;}}&:nth-child(5){position:absolute;top:0;@media only screen and (max-width:991px){position:relative;}}img{width:90px;height:90px;border-radius:50%;object-fit:cover;overflow:hidden;transition:all 0.27s ease;@media only screen and (max-width:991px){width:50px;height:50px;}@media only screen and (max-width:767px){width:40px;height:40px;}}&.glide__bullet--active{background-color:transparent;img{width:105px;height:105px;box-shadow:0 6px 30px -3px rgba(0,0,0,0.3);@media only screen and (max-width:1200px){width:95px;height:95px;}@media only screen and (max-width:991px){width:60px;height:60px;}@media only screen and (max-width:767px){width:50px;height:50px;box-shadow:none;}}&::before{content:'';display:block;width:100%;height:100%;border-radius:50%;border:1px solid ", ";position:absolute;top:0;left:0;transform:scale(1.25);}}&:focus{outline:0;}}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), common_src_assets_image_interior_twitter_svg__WEBPACK_IMPORTED_MODULE_2___default.a, Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.border', '#dadada'));
/* harmony default export */ __webpack_exports__["default"] = (SectionWrapper);

/***/ }),

/***/ "./containers/Interior/interior.style.js":
/*!***********************************************!*\
  !*** ./containers/Interior/interior.style.js ***!
  \***********************************************/
/*! exports provided: GlobalStyle, InteriorWrapper, ContentWrapper, SectionHeader, CircleLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteriorWrapper", function() { return InteriorWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionHeader", function() { return SectionHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleLoader", function() { return CircleLoader; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  body {\n    font-family: 'Roboto', sans-serif;\n  }\n\n  h1 {\n    font-size: 36px;\n    line-height: 56px;\n    font-family: 'Raleway', sans-serif;\n    font-weight: 500;\n    @media only screen and (max-width: 1440px) {\n      font-size: 34px;\n      line-height: 48px;\n    }\n    @media only screen and (max-width: 991px) {\n      font-size: 30px;\n      line-height: 42px;\n    }\n  }\n\n  h2 {\n    color: ", ";\n    font-size: 40px;\n    line-height: 56px;\n    font-family: 'Raleway', sans-serif;\n    font-weight: 600;\n    @media only screen and (max-width: 1440px) {\n      font-size: 36px;\n      line-height: 52px;\n    }\n    @media only screen and (max-width: 1360px) {\n      font-size: 30px;\n      line-height: 46px;\n    }\n  }\n\n  h3 {\n    color: ", ";\n    font-size: 24px;\n    line-height: 36px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n    @media only screen and (max-width: 1440px) {\n      font-size: 22px;\n      line-height: 32px;\n    }\n    @media only screen and (max-width: 991px) {\n      font-size: 20px;\n      line-height: 30px;  \n    }\n  }\n\n  h4 {\n    font-size: 22px;\n    line-height: 32px;\n    font-family: 'Raleway', sans-serif;\n    font-weight: 600;\n    @media only screen and (max-width: 1440px) {\n      font-size: 20px;\n      line-height: 30px;\n    }\n  }\n\n  p {\n    color: ", ";\n    font-size: 16px;\n    line-height: 26px;\n    font-family: 'Roboto', sans-serif;\n    @media only screen and (max-width: 1440px) {\n      font-size: 15px;\n    }\n  }\n\n\n  section {\n    position: relative;\n  }\n\n  img {\n    max-width: 100%;\n    height: auto;\n  }\n\n  /* Modal style */ \n  button.modalCloseBtn {\n    color: ", " !important;\n    &.alt {\n      color: ", " !important;\n      background-color: ", " !important;\n      box-shadow: 0 8px 38px rgba(253, 239, 0, 0.5) !important;\n    }\n  }\n\n  .reuseModalHolder {\n    border: 0 !important;\n    background-color: transparent !important;\n    &.search-modal {\n      background-color: rgba(255, 255, 255, 0.96) !important;\n      overflow-y: auto !important;\n      .innerRndComponent {\n        display: flex !important;\n        align-items: center !important;\n        justify-content: center !important;\n        iframe {\n          max-width: 700px !important;\n          max-height: 380px !important;\n          width: 100% !important;\n          height: 100% !important;\n          border-radius: 5px !important;\n        }\n      }\n    }\n\n    &.demo_switcher_modal {\n      border: 0 !important;\n      background-color: rgba(16, 30, 77, 0.8) !important;\n      .innerRndComponent {\n        border-radius: 8px !important;\n      }\n    }\n\n    .innerRndComponent {\n      padding-right: 0 !important;\n    }\n  }\n\n  .reuseModalCloseBtn {\n    cursor: pointer !important;\n  }\n\n  .reuseModalOverlay,\n  .reuseModalParentWrapper{\n    z-index: 99999!important;\n  }\n\n  .reuseModalHolder.login-modal{\n    .reusecore__button {\n      color: ", ";\n      &.default {\n        color: ", ";\n        background-color: ", ";\n        &:hover {\n          box-shadow: none;\n        }\n      }\n    }\n    @media (min-width: 768px) {\n      top: 0!important;\n      left: 0!important;\n      max-width: 100%!important;\n      max-height: 100%!important;\n    }\n  }\n\n  .reuseModalHolder.search-modal{\n    top: 0!important;\n    left: 0!important;\n    max-width: 100%!important;\n    max-height: 100%!important;\n    width: 100%;\n    height: 100%;\n  }\n\n  .reuseModalHolder.login-modal .innerRndComponent{\n    overflow-y: auto;\n    padding-right: 30px !important;\n    margin-right: -30px;\n    overflow-x: hidden;\n  }\n\n  /* Drawer style */\n  .drawer {\n    .drawer-content-wrapper {\n      @media only screen and (max-width: 480px) {\n        width: 320px !important;\n      }\n\n      button {\n        position: absolute;\n        top: 35px;\n        right: 27px;\n        border: 0;\n        padding: 0;\n        background: transparent;\n        cursor: pointer;\n        > i svg {\n          width: auto;\n          height: 35px;\n          fill: ", ";\n        }\n        &:hover {\n          > i svg {\n            fill: ", ";\n          }\n        }\n      }\n\n      .scrollspy__menu {\n        padding: 60px 71px;\n        max-height: 505px;\n        overflow-x: auto;\n        @media only screen and (max-width: 375px) {\n          padding: 45px 56px;\n        }\n        @media only screen and (max-width: 320px) {\n          max-height: 380px;\n        }\n        li {\n          margin: 35px 0;\n          @media only screen and (max-width: 667px) {\n            margin: 30px 0;\n          }\n          &:first-child {\n            margin-top: 0;\n          }\n          &:last-child {\n            margin-bottom: 0;\n          }\n          a {\n            display: block;\n            color: ", ";\n            font-size: 22px;\n            font-weight: 400;\n            transition: all 0.3s ease;\n            @media only screen and (max-width: 667px) {\n              font-size: 20px;\n            }\n            &:hover {\n              color: ", ";\n            }\n          }\n          &.is-current {\n            a {\n              color: ", ";\n              position: relative;\n              &:before {\n                content: '';\n                display: block;\n                width: 8px;\n                height: 8px;\n                border-radius: 50%;\n                background-color: ", ";\n                position: absolute;\n                top: calc(50% - 8px / 2);\n                left: -20px;\n              }\n            }\n          }\n        }\n      }\n      .copyright_section {\n        width: 100%;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        padding-left: 71px;\n        padding-bottom: 56px;\n        background-color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var shake = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%{transform:translateX(0);}50%{transform:translateX(7px);}100%{transform:translateX(0);}"]);
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.heading', '#191919'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.heading3', '#273343'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text', '#4E5865'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.heading', '#191919'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#FDEF00'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.heading', '#191919'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#FDEF00'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.heading', '#191919'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.heading', '#060F1E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
var InteriorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "interiorstyle__InteriorWrapper",
  componentId: "sc-1o6xmj7-0"
})(["overflow:hidden;display:flex;flex-direction:column;min-height:100vh;overflow-x:hidden;@media only screen and (max-width:1440px){.container{max-width:1260px;}}.reusecore__navbar{width:100%;position:fixed;left:0;top:0;padding:22px 0;transition:padding 0.2s ease,background-color 0.1s ease;.reusecore__button{color:", ";font-size:20px;margin-right:10px;@media only screen and (max-width:1440px){font-size:18px;margin-right:7px;}}.hamburgMenu__bar{> span{background-color:", ";}}}.sticky-nav-active{.reusecore__navbar{padding:16px 0;background-color:", ";box-shadow:0 0 20px rgba(0,0,0,0.1);.reusecore__button{color:", ";}.hamburgMenu__bar{span{background-color:", ";}}.smooth_scroll{color:", ";transition:color 0.3s ease;&:hover{color:", ";}}}}.learn__more-btn{display:inline-flex;align-items:center;color:", ";font-size:16px;font-weight:700;letter-spacing:0;position:relative;@media only screen and (max-width:1360px){font-size:14px;}.btn_text{z-index:1;margin-right:12px;text-transform:uppercase;}.next_arrow{width:40px;height:2px;background-color:", ";position:relative;&::before,&::after{content:'';display:block;width:12px;height:2px;border-radius:4px;background-color:", ";position:absolute;right:0;transition:all 0.3s ease;}&::before{transform:rotate(-42deg);transform-origin:top right;}&::after{transform:rotate(42deg);transform-origin:12px 1px;}}&:hover{.next_arrow{animation:", " 1s infinite;}}}.read_more__btn{display:inline-flex;align-items:center;color:", ";font-size:14px;font-weight:700;text-transform:uppercase;position:relative;transition:all 0.3s ease;.arrow{width:24px;height:2px;display:block;position:absolute;top:calc(50% - 1px);left:-15px;background-color:", ";transition:all 0.3s ease;&::before,&::after{content:'';display:block;width:10px;height:2px;border-radius:4px;background-color:", ";position:absolute;right:0;transition:transform 0.2s ease 0.1s;}&::before{transform:rotate(0);transform-origin:top right;}&::after{transform:rotate(0);transform-origin:10px 2px;}}&:hover{.arrow{width:28px;left:calc(100% + 10px);border-radius:4px;background-color:", ";&::before{transform:rotate(-42deg);transform-origin:top right;background-color:", ";}&::after{transform:rotate(42deg);transform-origin:10px 2px;background-color:", ";}}}&:hover,&:focus{outline:0;color:", ";}}.glide{.glide__controls{margin-top:30px;}.glide__controls > div,.glide__arrows > button{height:18px;padding:0;border:0;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;flex-direction:column;background-color:transparent;.prev_arrow,.next_arrow{display:block;width:24px;height:2px;background-color:", ";transition:width 0.3s ease;position:relative;@media only screen and (max-width:667px){width:20px;}&::before,&::after{content:'';display:block;width:14px;height:2px;border-radius:4px;background-color:", ";position:absolute;z-index:1;transition:all 0.3s ease;}&.next_arrow{&::before{right:0;transform:rotate(0);transform-origin:top right;}&::after{right:0;transform:rotate(0);transform-origin:14px 2px;}}&.prev_arrow{&::before{left:0;transform:rotate(0);transform-origin:top left;}&::after{left:0;transform:rotate(0);transform-origin:0 2px;}}}.next_arrow{margin-left:15px;}&:hover{> span{width:45px;border-radius:4px;background-color:", ";@media only screen and (max-width:667px){width:30px;}&::before,&::after{background-color:", ";}&.prev_arrow{&::before{transform:rotate(-42deg);}&::after{transform:rotate(42deg);}}&.next_arrow{&::before{transform:rotate(42deg);}&::after{transform:rotate(-42deg);}}}}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.label', '#C6C6C6'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.label', '#C6C6C6'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.heading', '#060F1E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.heading', '#060F1E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.heading', '#060F1E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text', '#294859'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.link', '#352FD9'), shake, Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.heading3', '#273343'), ('colors.primary', '#FDEF00'), ('colors.primary', '#FDEF00'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.label', '#C6C6C6'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.label', '#C6C6C6'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#FDEF00'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#FDEF00'));
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "interiorstyle__ContentWrapper",
  componentId: "sc-1o6xmj7-1"
})(["flex:1 0 auto;width:100%;overflow:hidden;"]);
/* ------------------------------------ */
// style for section header

/* ------------------------------------ */

var SectionHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header.withConfig({
  displayName: "interiorstyle__SectionHeader",
  componentId: "sc-1o6xmj7-2"
})(["text-align:center;padding-bottom:70px;@media only screen and (max-width:1440px){padding-bottom:56px;}@media only screen and (max-width:1200px){padding-bottom:50px;}@media only screen and (max-width:991px){padding-bottom:40px;}@media only screen and (max-width:480px){text-align:left;}h5{color:", ";font-size:16px;line-height:18px;font-weight:500;text-transform:uppercase;margin:0 0 15px;@media only screen and (max-width:1200px){font-size:14px;}@media only screen and (max-width:480px){font-size:13px;}}h2{color:", ";font-size:36px;line-height:54px;font-weight:600;margin:0;@media only screen and (max-width:1440px){font-size:30px;line-height:46px;}@media only screen and (max-width:1200px){font-size:28px;line-height:42px;}@media only screen and (max-width:767px){font-size:24px;line-height:35px;}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.link', '#352FD9'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.heading', '#191919'));
/* ------------------------------------ */
// style for circle loader

/* ------------------------------------ */

var rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["to{transform:rotate(360deg);}"]);
var grow = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["50%{transform:scale(1);}"]);
var CircleLoader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "interiorstyle__CircleLoader",
  componentId: "sc-1o6xmj7-3"
})(["animation:", " 3s linear infinite;width:50px;height:50px;flex-shrink:0;transform-origin:bottom center;.circle{animation:", " 1.5s linear infinite;background-color:", ";border-radius:50%;display:inline-block;margin:-9px;height:40px;width:40px;transform:scale(0);&:nth-of-type(2){animation-delay:0.75s;background-color:", ";}}&.alt{.circle{&:nth-of-type(2){background-color:", ";}}}"], rotate, grow, Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#FDEF00'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.heading', '#191919'));


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_src_theme_interior__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/src/theme/interior */ "../../node_modules/common/src/theme/interior/index.js");
/* harmony import */ var common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/src/contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var _containers_Interior_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/Interior/Navbar */ "./containers/Interior/Navbar/index.js");
/* harmony import */ var _containers_Interior_Banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/Interior/Banner */ "./containers/Interior/Banner/index.js");
/* harmony import */ var _containers_Interior_Feature__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../containers/Interior/Feature */ "./containers/Interior/Feature/index.js");
/* harmony import */ var _containers_Interior_AboutUs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../containers/Interior/AboutUs */ "./containers/Interior/AboutUs/index.js");
/* harmony import */ var _containers_Interior_Project__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../containers/Interior/Project */ "./containers/Interior/Project/index.js");
/* harmony import */ var _containers_Interior_Team__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../containers/Interior/Team */ "./containers/Interior/Team/index.js");
/* harmony import */ var _containers_Interior_News__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../containers/Interior/News */ "./containers/Interior/News/index.js");
/* harmony import */ var _containers_Interior_Testimonial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../containers/Interior/Testimonial */ "./containers/Interior/Testimonial/index.js");
/* harmony import */ var _containers_Interior_Gallery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../containers/Interior/Gallery */ "./containers/Interior/Gallery/index.js");
/* harmony import */ var _containers_Interior_Newsletter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../containers/Interior/Newsletter */ "./containers/Interior/Newsletter/index.js");
/* harmony import */ var _containers_Interior_Footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../containers/Interior/Footer */ "./containers/Interior/Footer/index.js");
/* harmony import */ var common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! common/src/assets/css/style */ "../../node_modules/common/src/assets/css/style.js");
/* harmony import */ var _containers_Interior_interior_style__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../containers/Interior/interior.style */ "./containers/Interior/interior.style.js");
var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/pages/index.js";



















/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: common_src_theme_interior__WEBPACK_IMPORTED_MODULE_4__["interiorTheme"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Jadeite Taipei | \u53F0\u5317\u7FE1\u7FE0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charset: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#171717",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "This is a website about a taipei jewelry store that sells jade,jadeite\r ,ruby,saphire,diamonds,jewelry. \u9019\u662F\u4E00\u500B\u6709\u95DC\u51FA\u552E\u7FE1\u7FE0\uFF0C\u7FE1\u7FE0\u7684\u53F0\u5317\u73E0\u5BF6\u5E97\u7684\u7DB2\u7AD9\r \uFF0C\u7D05\u5BF6\u77F3\uFF0C\u85CD\u5BF6\u77F3\uFF0C\u947D\u77F3,\u73E0\u5BF6.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: "diamond,diamonds,ruby,saphire,jade, jadeite, jewelry, \r \u947D\u77F3\uFF0C\u947D\u77F3\uFF0C\u7D05\u5BF6\u77F3\uFF0C\u85CD\u5BF6\u77F3\uFF0C\u7FE1\u7FE0\uFF0C\u7FE1\u7FE0\uFF0C\u73E0\u5BF6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "author",
    content: "Cheryl Liao",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Raleway:500,600&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_17__["ResetCSS"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Interior_interior_style__WEBPACK_IMPORTED_MODULE_18__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Interior_interior_style__WEBPACK_IMPORTED_MODULE_18__["InteriorWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-nav-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_5__["DrawerProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Interior_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Interior_interior_style__WEBPACK_IMPORTED_MODULE_18__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Interior_Banner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Interior_Feature__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Interior_AboutUs__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Interior_Project__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Interior_Team__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Interior_News__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Interior_Testimonial__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Interior_Gallery__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Interior_Newsletter__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Interior_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }))));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cheryl/react-next-landing/packages/landing/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@glidejs/glide":
/*!*********************************!*\
  !*** external "@glidejs/glide" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

/***/ }),

/***/ "@redq/reuse-modal":
/*!************************************!*\
  !*** external "@redq/reuse-modal" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/request-context":
/*!*******************************************************!*\
  !*** external "next-server/dist/lib/request-context" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "rc-drawer":
/*!****************************!*\
  !*** external "rc-drawer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "rc-tabs":
/*!**************************!*\
  !*** external "rc-tabs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tabs");

/***/ }),

/***/ "rc-tabs/lib/ScrollableInkTabBar":
/*!**************************************************!*\
  !*** external "rc-tabs/lib/ScrollableInkTabBar" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tabs/lib/ScrollableInkTabBar");

/***/ }),

/***/ "rc-tabs/lib/TabContent":
/*!*****************************************!*\
  !*** external "rc-tabs/lib/TabContent" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tabs/lib/TabContent");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-anchor-link-smooth-scroll":
/*!**************************************************!*\
  !*** external "react-anchor-link-smooth-scroll" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "react-icons-kit":
/*!**********************************!*\
  !*** external "react-icons-kit" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "react-icons-kit/fa/dribbble":
/*!**********************************************!*\
  !*** external "react-icons-kit/fa/dribbble" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/dribbble");

/***/ }),

/***/ "react-icons-kit/fa/facebook":
/*!**********************************************!*\
  !*** external "react-icons-kit/fa/facebook" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/facebook");

/***/ }),

/***/ "react-icons-kit/fa/googlePlus":
/*!************************************************!*\
  !*** external "react-icons-kit/fa/googlePlus" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/googlePlus");

/***/ }),

/***/ "react-icons-kit/fa/skype":
/*!*******************************************!*\
  !*** external "react-icons-kit/fa/skype" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/skype");

/***/ }),

/***/ "react-icons-kit/fa/twitter":
/*!*********************************************!*\
  !*** external "react-icons-kit/fa/twitter" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/twitter");

/***/ }),

/***/ "react-icons-kit/ionicons/androidClose":
/*!********************************************************!*\
  !*** external "react-icons-kit/ionicons/androidClose" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/androidClose");

/***/ }),

/***/ "react-icons-kit/ionicons/iosEmailOutline":
/*!***********************************************************!*\
  !*** external "react-icons-kit/ionicons/iosEmailOutline" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/iosEmailOutline");

/***/ }),

/***/ "react-icons-kit/ionicons/iosSearchStrong":
/*!***********************************************************!*\
  !*** external "react-icons-kit/ionicons/iosSearchStrong" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/iosSearchStrong");

/***/ }),

/***/ "react-icons-kit/ionicons/socialDribbble":
/*!**********************************************************!*\
  !*** external "react-icons-kit/ionicons/socialDribbble" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialDribbble");

/***/ }),

/***/ "react-icons-kit/ionicons/socialFacebook":
/*!**********************************************************!*\
  !*** external "react-icons-kit/ionicons/socialFacebook" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialFacebook");

/***/ }),

/***/ "react-icons-kit/ionicons/socialGoogleplus":
/*!************************************************************!*\
  !*** external "react-icons-kit/ionicons/socialGoogleplus" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialGoogleplus");

/***/ }),

/***/ "react-icons-kit/ionicons/socialSkype":
/*!*******************************************************!*\
  !*** external "react-icons-kit/ionicons/socialSkype" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialSkype");

/***/ }),

/***/ "react-icons-kit/ionicons/socialTwitter":
/*!*********************************************************!*\
  !*** external "react-icons-kit/ionicons/socialTwitter" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialTwitter");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-scrollspy":
/*!**********************************!*\
  !*** external "react-scrollspy" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map