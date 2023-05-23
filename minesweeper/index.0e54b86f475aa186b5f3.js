/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/polyfill/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! ./noConflict */ "./node_modules/@babel/polyfill/lib/noConflict.js");

var _global = _interopRequireDefault(__webpack_require__(/*! core-js/library/fn/global */ "./node_modules/core-js/library/fn/global.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

_global["default"]._babelPolyfill = true;

/***/ }),

/***/ "./node_modules/@babel/polyfill/lib/noConflict.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/noConflict.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/es6 */ "./node_modules/core-js/es6/index.js");

__webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");

__webpack_require__(/*! core-js/fn/array/flat-map */ "./node_modules/core-js/fn/array/flat-map.js");

__webpack_require__(/*! core-js/fn/string/pad-start */ "./node_modules/core-js/fn/string/pad-start.js");

__webpack_require__(/*! core-js/fn/string/pad-end */ "./node_modules/core-js/fn/string/pad-end.js");

__webpack_require__(/*! core-js/fn/string/trim-start */ "./node_modules/core-js/fn/string/trim-start.js");

__webpack_require__(/*! core-js/fn/string/trim-end */ "./node_modules/core-js/fn/string/trim-end.js");

__webpack_require__(/*! core-js/fn/symbol/async-iterator */ "./node_modules/core-js/fn/symbol/async-iterator.js");

__webpack_require__(/*! core-js/fn/object/get-own-property-descriptors */ "./node_modules/core-js/fn/object/get-own-property-descriptors.js");

__webpack_require__(/*! core-js/fn/object/values */ "./node_modules/core-js/fn/object/values.js");

__webpack_require__(/*! core-js/fn/object/entries */ "./node_modules/core-js/fn/object/entries.js");

__webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");

__webpack_require__(/*! core-js/web */ "./node_modules/core-js/web/index.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./minesweeper/src/modules/check-cell.js":
/*!***********************************************!*\
  !*** ./minesweeper/src/modules/check-cell.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckCells": () => (/* binding */ CheckCells)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* Get area of field to check */

var CheckCells = /*#__PURE__*/function () {
  function CheckCells(width, height) {
    _classCallCheck(this, CheckCells);
    // this.sell = cellNum;
    this.width = width;
    this.height = height;
    this.cells = document.querySelectorAll('.cell');
    this.mimeAmountClosedClasses = ['cell_closed', 'cell-one_closed', 'cell-two_closed', 'cell-three_closed', 'cell-four_closed', 'cell-five_closed', 'cell-six_closed', 'cell-seven_closed', 'cell-eight_closed'];
    this.mimeAmountOpenedClasses = ['cell_opened', 'cell-one_opened', 'cell-two_opened', 'cell-three_opened', 'cell-four_opened', 'cell-five_opened', 'cell-six_opened', 'cell-seven_opened', 'cell-eight_opened'];
  }

  /* get cells for check */
  _createClass(CheckCells, [{
    key: "getLeftTopCornerCell",
    value: function getLeftTopCornerCell() {
      return this.cells[0];
    }
  }, {
    key: "getRightTopCornerCell",
    value: function getRightTopCornerCell() {
      return this.cells[this.width - 1];
    }
  }, {
    key: "getLeftBottomCornerCell",
    value: function getLeftBottomCornerCell() {
      return this.cells[this.cells.length - this.width];
    }
  }, {
    key: "getRightBottomCornerCell",
    value: function getRightBottomCornerCell() {
      return this.cells[this.cells.length - 1];
    }
  }, {
    key: "getTopRow",
    value: function getTopRow() {
      var arr = [];
      for (var i = 1; i < this.width - 1; i += 1) {
        arr.push(this.cells[i]);
      }
      return arr;
    }
  }, {
    key: "getBottomRow",
    value: function getBottomRow() {
      var arr = [];
      for (var i = this.cells.length - this.width + 1; i < this.cells.length - 1; i += 1) {
        arr.push(this.cells[i]);
      }
      return arr;
    }
  }, {
    key: "getLeftCol",
    value: function getLeftCol() {
      var arr = [];
      for (var i = this.width; i < this.width * (this.height - 1); i += this.width) {
        arr.push(this.cells[i]);
      }
      return arr;
    }
  }, {
    key: "getRightCol",
    value: function getRightCol() {
      var arr = [];
      for (var i = this.width * 2 - 1; i < this.width * (this.height - 1); i += this.width) {
        arr.push(this.cells[i]);
      }
      return arr;
    }
  }, {
    key: "getInsideCells",
    value: function getInsideCells() {
      var arr = [];
      var startRowInd = this.width + 1;
      for (var i = this.width + 1; i < this.cells.length - this.width - 1; i += 1) {
        arr.push(this.cells[i]);
        if (i === startRowInd + this.width - 3) {
          i += 2;
          startRowInd += this.width;
        }
      }
      // console.log(arr)
      return arr;
    }

    /* check sells around */

    /* Fill mines amount around cell (first step) */
  }, {
    key: "fillMinesAmount",
    value: function fillMinesAmount(cell, stringSell) {
      var _this = this;
      /* First cell top row */

      if (stringSell === 'leftTopCornerCell' && cell.classList[2] !== 'cell-mined_closed') {
        var minesAmount = 0;
        var nextCell = this.cells[1];
        if (nextCell.classList[2] === 'cell-mined_closed') {
          minesAmount += 1;
        }
        var bottomCell = this.cells[this.width];
        if (bottomCell.classList[2] === 'cell-mined_closed') {
          minesAmount += 1;
        }
        var bottomRightCell = this.cells[this.width + 1];
        if (bottomRightCell.classList[2] === 'cell-mined_closed') {
          minesAmount += 1;
        }
        cell.classList.remove(cell.classList[2]);
        var targetClass = this.mimeAmountClosedClasses[minesAmount];
        cell.classList.add(targetClass);
      }

      /* Last cell top row */

      if (stringSell === 'rightTopCornerCell' && cell.classList[2] !== 'cell-mined_closed') {
        var _minesAmount = 0;
        var prevCell = this.cells[this.width - 2];
        if (prevCell.classList[2] === 'cell-mined_closed') {
          _minesAmount += 1;
        }
        var bottomLeftCell = this.cells[this.width * 2 - 2];
        if (bottomLeftCell.classList[2] === 'cell-mined_closed') {
          _minesAmount += 1;
        }
        var _bottomCell = this.cells[this.width * 2 - 1];
        if (_bottomCell.classList[2] === 'cell-mined_closed') {
          _minesAmount += 1;
        }
        cell.classList.remove(cell.classList[2]);
        var _targetClass = this.mimeAmountClosedClasses[_minesAmount];
        cell.classList.add(_targetClass);
      }

      /* First sell bottom row */

      if (stringSell === 'leftBottomCornerCell' && cell.classList[2] !== 'cell-mined_closed') {
        var _minesAmount2 = 0;
        var currIndex = Number(cell.classList[1] - 1);

        // const nextCell = this.cells[this.cells.length - this.width];
        var _nextCell = this.cells[currIndex + 1];
        if (_nextCell.classList[2] === 'cell-mined_closed') {
          _minesAmount2 += 1;
        }
        // const topCell = this.cells[Number(cell.classList[1]) - this.width];
        var topCell = this.cells[currIndex - this.width];
        if (topCell.classList[2] === 'cell-mined_closed') {
          _minesAmount2 += 1;
        }
        // const topRightCell = this.cells[Number(topCell.classList[1]) + 1]
        var topRightCell = this.cells[currIndex - this.width + 1];
        if (topRightCell.classList[2] === 'cell-mined_closed') {
          _minesAmount2 += 1;
        }
        cell.classList.remove(cell.classList[2]);
        var _targetClass2 = this.mimeAmountClosedClasses[_minesAmount2];
        cell.classList.add(_targetClass2);
      }
      /* Last sell bottom row */

      if (stringSell === 'rightBottomCornerCell' && cell.classList[2] !== 'cell-mined_closed') {
        var _minesAmount3 = 0;
        var _prevCell = this.cells[Number(cell.classList[1]) - 2];
        if (_prevCell.classList[2] === 'cell-mined_closed') {
          _minesAmount3 += 1;
        }
        var _topCell = this.cells[Number(cell.classList[1]) - this.width - 1];
        if (_topCell.classList[2] === 'cell-mined_closed') {
          _minesAmount3 += 1;
        }
        var topLeftCell = this.cells[Number(_topCell.classList[1]) - 2];
        if (topLeftCell.classList[2] === 'cell-mined_closed') {
          _minesAmount3 += 1;
        }
        cell.classList.remove(cell.classList[2]);
        var _targetClass3 = this.mimeAmountClosedClasses[_minesAmount3];
        cell.classList.add(_targetClass3);
      }

      /* Top row except corner cells */

      if (stringSell === 'topRow') {
        cell.forEach(function (item) {
          if (item.classList[2] !== 'cell-mined_closed') {
            var _minesAmount4 = 0;
            var _currIndex = Number(item.classList[1]) - 1;
            var _prevCell2 = _this.cells[_currIndex - 1];
            if (_prevCell2.classList[2] === 'cell-mined_closed') {
              _minesAmount4 += 1;
            }
            var _bottomLeftCell = _this.cells[_currIndex + _this.width - 1];
            if (_bottomLeftCell.classList[2] === 'cell-mined_closed') {
              _minesAmount4 += 1;
            }
            var _bottomCell2 = _this.cells[_currIndex + _this.width];
            if (_bottomCell2.classList[2] === 'cell-mined_closed') {
              _minesAmount4 += 1;
            }
            var _bottomRightCell = _this.cells[_currIndex + _this.width + 1];
            if (_bottomRightCell.classList[2] === 'cell-mined_closed') {
              _minesAmount4 += 1;
            }
            var _nextCell2 = _this.cells[_currIndex + 1];
            if (_nextCell2.classList[2] === 'cell-mined_closed') {
              _minesAmount4 += 1;
            }
            item.classList.remove(item.classList[2]);
            var _targetClass4 = _this.mimeAmountClosedClasses[_minesAmount4];
            item.classList.add(_targetClass4);
          }
        });
      }

      /* Bottom row except corner cells */

      if (stringSell === 'bottomRow') {
        cell.forEach(function (item) {
          if (item.classList[2] !== 'cell-mined_closed') {
            var _minesAmount5 = 0;
            var _currIndex2 = Number(item.classList[1]) - 1;
            var _prevCell3 = _this.cells[_currIndex2 - 1];
            if (_prevCell3.classList[2] === 'cell-mined_closed') {
              _minesAmount5 += 1;
            }
            var _topLeftCell = _this.cells[_currIndex2 - _this.width - 1];
            if (_topLeftCell.classList[2] === 'cell-mined_closed') {
              _minesAmount5 += 1;
            }
            var _topCell2 = _this.cells[_currIndex2 - _this.width];
            if (_topCell2.classList[2] === 'cell-mined_closed') {
              _minesAmount5 += 1;
            }
            var _topRightCell = _this.cells[_currIndex2 - _this.width + 1];
            if (_topRightCell.classList[2] === 'cell-mined_closed') {
              _minesAmount5 += 1;
            }
            var _nextCell3 = _this.cells[_currIndex2 + 1];
            if (_nextCell3.classList[2] === 'cell-mined_closed') {
              _minesAmount5 += 1;
            }
            item.classList.remove(item.classList[2]);
            var _targetClass5 = _this.mimeAmountClosedClasses[_minesAmount5];
            item.classList.add(_targetClass5);
          }
        });
      }

      /* Left column except corner cells */

      if (stringSell === 'leftCol') {
        cell.forEach(function (item) {
          if (item.classList[2] !== 'cell-mined_closed') {
            var _minesAmount6 = 0;
            var _currIndex3 = Number(item.classList[1]) - 1;
            var _topCell3 = _this.cells[_currIndex3 - _this.width];
            if (_topCell3.classList[2] === 'cell-mined_closed') {
              _minesAmount6 += 1;
            }
            var _topRightCell2 = _this.cells[_currIndex3 - _this.width + 1];
            if (_topRightCell2.classList[2] === 'cell-mined_closed') {
              _minesAmount6 += 1;
            }
            var _nextCell4 = _this.cells[_currIndex3 + 1];
            if (_nextCell4.classList[2] === 'cell-mined_closed') {
              _minesAmount6 += 1;
            }
            var _bottomRightCell2 = _this.cells[_currIndex3 + _this.width + 1];
            if (_bottomRightCell2.classList[2] === 'cell-mined_closed') {
              _minesAmount6 += 1;
            }
            var _bottomCell3 = _this.cells[_currIndex3 + _this.width];
            if (_bottomCell3.classList[2] === 'cell-mined_closed') {
              _minesAmount6 += 1;
            }
            item.classList.remove(item.classList[2]);
            var _targetClass6 = _this.mimeAmountClosedClasses[_minesAmount6];
            item.classList.add(_targetClass6);
          }
        });
      }

      /* Right column except corner cells */

      if (stringSell === 'rightCol') {
        cell.forEach(function (item) {
          if (item.classList[2] !== 'cell-mined_closed') {
            var _minesAmount7 = 0;
            var _currIndex4 = Number(item.classList[1]) - 1;
            var _topCell4 = _this.cells[_currIndex4 - _this.width];
            if (_topCell4.classList[2] === 'cell-mined_closed') {
              _minesAmount7 += 1;
            }
            var _topLeftCell2 = _this.cells[_currIndex4 - _this.width - 1];
            if (_topLeftCell2.classList[2] === 'cell-mined_closed') {
              _minesAmount7 += 1;
            }
            var _prevCell4 = _this.cells[_currIndex4 - 1];
            if (_prevCell4.classList[2] === 'cell-mined_closed') {
              _minesAmount7 += 1;
            }
            var _bottomLeftCell2 = _this.cells[_currIndex4 + _this.width - 1];
            if (_bottomLeftCell2.classList[2] === 'cell-mined_closed') {
              _minesAmount7 += 1;
            }
            var _bottomCell4 = _this.cells[_currIndex4 + _this.width];
            if (_bottomCell4.classList[2] === 'cell-mined_closed') {
              _minesAmount7 += 1;
            }
            item.classList.remove(item.classList[2]);
            var _targetClass7 = _this.mimeAmountClosedClasses[_minesAmount7];
            item.classList.add(_targetClass7);
          }
        });
      }

      /* Inside cells */

      if (stringSell === 'insideCells') {
        cell.forEach(function (item) {
          if (item.classList[2] !== 'cell-mined_closed') {
            var _minesAmount8 = 0;
            var _currIndex5 = Number(item.classList[1]) - 1;
            var _topLeftCell3 = _this.cells[_currIndex5 - _this.width - 1];
            if (_topLeftCell3.classList[2] === 'cell-mined_closed') {
              _minesAmount8 += 1;
            }
            var _topCell5 = _this.cells[_currIndex5 - _this.width];
            if (_topCell5.classList[2] === 'cell-mined_closed') {
              _minesAmount8 += 1;
            }
            var _topRightCell3 = _this.cells[_currIndex5 - _this.width + 1];
            if (_topRightCell3.classList[2] === 'cell-mined_closed') {
              _minesAmount8 += 1;
            }
            var _nextCell5 = _this.cells[_currIndex5 + 1];
            if (_nextCell5.classList[2] === 'cell-mined_closed') {
              _minesAmount8 += 1;
            }
            // console.log(this.width, currIndex)
            var _bottomRightCell3 = _this.cells[_currIndex5 + _this.width + 1];
            if (_bottomRightCell3.classList[2] === 'cell-mined_closed') {
              _minesAmount8 += 1;
            }
            var _bottomCell5 = _this.cells[_currIndex5 + _this.width];
            if (_bottomCell5.classList[2] === 'cell-mined_closed') {
              _minesAmount8 += 1;
            }
            var _bottomLeftCell3 = _this.cells[_currIndex5 + _this.width - 1];
            if (_bottomLeftCell3.classList[2] === 'cell-mined_closed') {
              _minesAmount8 += 1;
            }
            var _prevCell5 = _this.cells[_currIndex5 - 1];
            if (_prevCell5.classList[2] === 'cell-mined_closed') {
              _minesAmount8 += 1;
            }
            item.classList.remove(item.classList[2]);
            var _targetClass8 = _this.mimeAmountClosedClasses[_minesAmount8];
            item.classList.add(_targetClass8);
          }
        });
      }
      for (var i = 0; i < this.cells.length; i += 1) {
        localStorage.setItem(this.cells[i].classList[1], this.cells[i].classList[2]);
      }
      // console.log(this.cells)
    }
  }]);
  return CheckCells;
}();

/***/ }),

/***/ "./minesweeper/src/modules/elem-builder.js":
/*!*************************************************!*\
  !*** ./minesweeper/src/modules/elem-builder.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementBuilder": () => (/* binding */ ElementBuilder)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ElementBuilder = /*#__PURE__*/function () {
  function ElementBuilder(tag, parent) {
    _classCallCheck(this, ElementBuilder);
    this.tag = tag;
    for (var _len = arguments.length, classNames = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      classNames[_key - 2] = arguments[_key];
    }
    this.classNames = classNames;
    this.parent = parent;
  }

  /*  create element and put it inside the parent element  */
  _createClass(ElementBuilder, [{
    key: "createElement",
    value: function createElement() {
      var elem = this.tag;
      elem = document.createElement(elem);
      this.parent.append(elem);
      if (this.classNames.length > 1) {
        this.classNames.forEach(function (el) {
          elem.classList.add(el);
        });
      } else {
        elem.classList.add(this.classNames);
      }
      return elem;
    }
  }]);
  return ElementBuilder;
}();

/***/ }),

/***/ "./minesweeper/src/modules/functions.js":
/*!**********************************************!*\
  !*** ./minesweeper/src/modules/functions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageActions": () => (/* binding */ LocalStorageActions),
/* harmony export */   "changeStepsCouner": () => (/* binding */ changeStepsCouner),
/* harmony export */   "getTime": () => (/* binding */ getTime),
/* harmony export */   "saveGameResult": () => (/* binding */ saveGameResult),
/* harmony export */   "setMinesCouner": () => (/* binding */ setMinesCouner),
/* harmony export */   "setTimer": () => (/* binding */ setTimer)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*  Local storage actions */
var LocalStorageActions = /*#__PURE__*/function () {
  function LocalStorageActions(name, value) {
    _classCallCheck(this, LocalStorageActions);
    this.name = String(name);
    this.value = String(value);
  }
  _createClass(LocalStorageActions, [{
    key: "setItem",
    value: function setItem(name, value) {
      this.name = String(name);
      this.value = String(value);
      localStorage.setItem(this.name, this.value);
    }
  }, {
    key: "getItem",
    value: function getItem(name) {
      this.name = String(name);
      return localStorage.getItem(this.name);
    }
  }, {
    key: "changeValue",
    value: function changeValue(name, value) {
      this.name = String(name);
      this.value = String(value);
      localStorage[this.name] = this.value;
    }
  }]);
  return LocalStorageActions;
}();

/* Stes counter */

function changeStepsCouner(option) {
  var classArr = ['num0', 'num1', 'num2', 'num3', 'num4', 'num5', 'num5', 'num6', 'num7', 'num8', 'num9'];
  var stepsWindow = document.querySelector('.steps');
  var firstNum = stepsWindow.children[0];
  var secondNum = stepsWindow.children[1];
  var thirdNum = stepsWindow.children[2];
  if (option === 'init') {
    var stepPrev = Number(localStorage.getItem('steps-counter'));
    var stepCurrArr = String(stepPrev).split('');
    while (stepCurrArr.length < 3) {
      stepCurrArr.unshift('0');
    }
    stepCurrArr.forEach(function (item, i) {
      if (i === 0 && stepPrev + 1 > 99) {
        if (firstNum.classList[2]) {
          firstNum.classList.remove(firstNum.classList[2]);
        }
        firstNum.classList.add(classArr[Number(item)]);
      }
      if (i === 1 && stepPrev + 1 > 9) {
        if (secondNum.classList[2]) {
          secondNum.classList.remove(secondNum.classList[2]);
        }
        secondNum.classList.add(classArr[Number(item)]);
      }
      if (i === 2) {
        if (thirdNum.classList[2]) {
          thirdNum.classList.remove(thirdNum.classList[2]);
        }
        thirdNum.classList.add(classArr[Number(item)]);
      }
    });
  } else if (!localStorage.getItem('steps-counter')) {
    localStorage.setItem('steps-counter', '1');
    thirdNum.classList.add('num1');
  } else {
    var _stepPrev = Number(localStorage.getItem('steps-counter'));
    localStorage['steps-counter'] = String(_stepPrev + 1);
    var _stepCurrArr = String(_stepPrev + 1).split('');
    while (_stepCurrArr.length < 3) {
      _stepCurrArr.unshift('0');
    }
    _stepCurrArr.forEach(function (item, i) {
      if (i === 0 && _stepPrev + 1 > 99) {
        if (firstNum.classList[2]) {
          firstNum.classList.remove(firstNum.classList[2]);
        }
        firstNum.classList.add(classArr[Number(item)]);
      }
      if (i === 1 && _stepPrev + 1 > 9) {
        if (secondNum.classList[2]) {
          secondNum.classList.remove(secondNum.classList[2]);
        }
        secondNum.classList.add(classArr[Number(item)]);
      }
      if (i === 2) {
        if (thirdNum.classList[2]) {
          thirdNum.classList.remove(thirdNum.classList[2]);
        }
        thirdNum.classList.add(classArr[Number(item)]);
      }
    });
  }
}

/* Mines counter */

function setMinesCouner(option) {
  var classArr = ['num0', 'num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7', 'num8', 'num9', 'num-minus'];
  var minesCounter = document.querySelector('.mines-amount');
  var level = localStorage.getItem('active-level').toLowerCase();
  var firstNum = minesCounter.children[0];
  var secondNum = minesCounter.children[1];
  var thirdNum = minesCounter.children[2];
  // const hiddenMines = document.querySelectorAll('.cell-mined_closed');
  var minesHidden = localStorage.getItem("".concat(level, "-mines"));
  function fillCounter(minesHiddenArr) {
    minesHiddenArr.forEach(function (item, i) {
      if (i === 0) {
        if (firstNum.classList[2]) {
          firstNum.classList.remove(firstNum.classList[2]);
        }
        if (item !== '-' && item !== '0') {
          firstNum.classList.add(classArr[Number(item)]);
        } else if (item === '-') {
          firstNum.classList.add(classArr[10]);
        }
      }
      if (i === 1) {
        if (secondNum.classList[2]) {
          secondNum.classList.remove(secondNum.classList[2]);
        }
        if (item !== '-' && item !== '0') {
          secondNum.classList.add(classArr[Number(item)]);
        } else if (item === '-') {
          secondNum.classList.add(classArr[10]);
        } else if (item === '0' && minesHiddenArr.length > 2 && minesHiddenArr[0] !== '0') {
          secondNum.classList.add(classArr[0]);
        }
      }
      if (i === 2) {
        if (thirdNum.classList[2]) {
          thirdNum.classList.remove(thirdNum.classList[2]);
        }
        thirdNum.classList.add(classArr[Number(item)]);
      }
    });
  }
  if (option === 'init') {
    var minesHiddenArr = minesHidden.split('');
    while (minesHiddenArr.length < 3) {
      minesHiddenArr.unshift('0');
    }
    localStorage.setItem('mines-counter', "".concat(minesHidden));
    fillCounter(minesHiddenArr);
  } else if (option === 'minusMine') {
    var prevMinesAmount = Number(localStorage.getItem('mines-counter'));
    var currMinesAmount = prevMinesAmount - 1;
    localStorage.setItem('mines-counter', "".concat(currMinesAmount));
    var _minesHiddenArr = String(currMinesAmount).split('');
    while (_minesHiddenArr.length < 3) {
      _minesHiddenArr.unshift('0');
    }
    fillCounter(_minesHiddenArr);
  } else if (option === 'plusMine') {
    var _prevMinesAmount = Number(localStorage.getItem('mines-counter'));
    var _currMinesAmount = _prevMinesAmount + 1;
    localStorage.setItem('mines-counter', "".concat(_currMinesAmount));
    var _minesHiddenArr2 = String(_currMinesAmount).split('');
    while (_minesHiddenArr2.length < 3) {
      _minesHiddenArr2.unshift('0');
    }
    fillCounter(_minesHiddenArr2);
  } else if (option === 'restore') {
    var _currMinesAmount2 = Number(localStorage.getItem('mines-counter'));
    var _minesHiddenArr3 = String(_currMinesAmount2).split('');
    while (_minesHiddenArr3.length < 3) {
      _minesHiddenArr3.unshift('0');
    }
    fillCounter(_minesHiddenArr3);
  }
}

/* Timer */

function setTimer(option) {
  var classArr = ['num0', 'num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7', 'num8', 'num9'];
  var timerWindow = document.querySelector('.timer');
  var firstNum = timerWindow.children[0];
  var secondNum = timerWindow.children[1];
  var thirdNum = timerWindow.children[2];
  function fillCounter(array) {
    array.forEach(function (item, i) {
      if (i === 0) {
        if (firstNum.classList[2]) {
          firstNum.classList.remove(firstNum.classList[2]);
        }
        if (item !== '-' && item !== '0') {
          firstNum.classList.add(classArr[Number(item)]);
        } else if (item === '-') {
          firstNum.classList.add(classArr[10]);
        }
      }
      if (i === 1) {
        if (secondNum.classList[2]) {
          secondNum.classList.remove(secondNum.classList[2]);
        }
        if (item !== '-' && item !== '0') {
          secondNum.classList.add(classArr[Number(item)]);
        } else if (item === '-') {
          secondNum.classList.add(classArr[10]);
        } else if (item === '0' && array.length > 2 && array[0] !== '0') {
          secondNum.classList.add(classArr[0]);
        }
      }
      if (i === 2) {
        if (thirdNum.classList[2]) {
          thirdNum.classList.remove(thirdNum.classList[2]);
        }
        thirdNum.classList.add(classArr[Number(item)]);
      }
    });
  }
  var firstStep = localStorage.getItem('first-step');
  var prevTimer = 0;
  if (firstStep === 'false') {
    prevTimer = Number(localStorage.getItem('timer'));
  }
  function getCurrTimer() {
    if (option !== 'init') {
      return String(prevTimer + 1);
    }
    return String(prevTimer);
  }
  var currTimer = getCurrTimer();
  localStorage.setItem('timer', "".concat(currTimer));
  var currTimerArr = currTimer.split('');
  while (currTimerArr.length < 3) {
    currTimerArr.unshift('0');
  }
  fillCounter(currTimerArr);
}
function getTime() {
  var timer = Number(localStorage.getItem('timer')) + 1;
  var hours = Math.floor(timer / 3600);
  var minutes = Math.floor((timer - hours * 60) / 60);
  var seconds = timer - hours * 60 - minutes * 60;
  var timeMessageArr = [];
  if (hours > 1) {
    timeMessageArr.push("".concat(hours, " hours "));
  }
  if (hours === 1) {
    timeMessageArr.push("".concat(hours, " hour "));
  }
  if (minutes > 1) {
    timeMessageArr.push("".concat(minutes, " minutes "));
  }
  if (minutes === 1) {
    timeMessageArr.push("".concat(minutes, " minute "));
  }
  if (seconds > 1) {
    timeMessageArr.push("".concat(seconds, " seconds"));
  }
  if (seconds === 1) {
    timeMessageArr.push("".concat(seconds, " second"));
  }
  var timeMessage = timeMessageArr.join('');
  return timeMessage;
}

/* Best results */

function saveGameResult(steps, time) {
  var activeLevel = document.querySelector('.level_active');
  var level = activeLevel.innerText.toLowerCase();
  if (localStorage.getItem('results')) {
    var resultsObject = JSON.parse(localStorage.results);
    var targetLevelObj = resultsObject[level];
    if (targetLevelObj) {
      var resultsLength = Object.keys(targetLevelObj).length;
      // console.log(resultsObj)
      if (resultsLength < 10) {
        var resultNumber = resultsLength + 1;
        targetLevelObj[resultNumber] = {
          steps: steps,
          time: time
        };
        localStorage.results = JSON.stringify(resultsObject);
      } else {
        for (var i = 1; i < 11; i += 1) {
          if (i < 10) {
            var nextResult = i + 1;
            var value = targetLevelObj[nextResult];
            targetLevelObj[i] = value;
          } else if (i === 10) {
            var _resultNumber = 10;
            targetLevelObj[_resultNumber] = {
              steps: steps,
              time: time
            };
          }
        }
        localStorage.results = JSON.stringify(resultsObject);
      }
    } else {
      var resultsObj = JSON.parse(localStorage.results);
      resultsObj[level] = {
        1: {
          steps: steps,
          time: time
        }
      };
      localStorage.results = JSON.stringify(resultsObj);
    }
  } else {
    var _resultsObj = JSON.parse(localStorage.results);
    _resultsObj[level] = {
      1: {
        steps: steps,
        time: time
      }
    };
    localStorage.results = JSON.stringify(_resultsObj);
  }
}

/***/ }),

/***/ "./minesweeper/src/modules/header.js":
/*!*******************************************!*\
  !*** ./minesweeper/src/modules/header.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeaderHTML": () => (/* binding */ createHeaderHTML)
/* harmony export */ });
/* harmony import */ var _elem_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elem-builder */ "./minesweeper/src/modules/elem-builder.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./minesweeper/src/modules/functions.js");


function createHeaderHTML() {
  var localStor = new _functions__WEBPACK_IMPORTED_MODULE_1__.LocalStorageActions();
  if (!localStor.getItem('active-level')) {
    localStor.setItem('active-level', 'Beginner');
  }
  var activeLevelSaved = localStor.getItem('active-level');
  var body = document.querySelector('body');
  var header = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('header', body, 'header');
  header = header.createElement();
  var wrapperHeader = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', header, 'wrapper', 'wrapper_header');
  wrapperHeader = wrapperHeader.createElement();
  var h1 = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('h1', wrapperHeader, 'main-title');
  h1 = h1.createElement();
  h1.innerText = 'Minesweeper';

  /* Best results, Theme, Sound */
  var firstRow = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('ul', wrapperHeader, 'first-row');
  firstRow = firstRow.createElement();
  var results = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('li', firstRow, 'results');
  results = results.createElement();
  results.innerText = 'Best results';
  /* Theme */

  var themeSwitherName = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('li', firstRow, 'swither-name');
  themeSwitherName = themeSwitherName.createElement();
  themeSwitherName.innerText = 'Theme:';
  var themeSwither = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('label', firstRow, 'swither');
  themeSwither = themeSwither.createElement();
  var switherInput = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('input', themeSwither, 'swither__input');
  switherInput = switherInput.createElement();
  switherInput.setAttribute('type', 'checkbox');
  var switherSpan = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('span', themeSwither, 'theme', 'swither__span');
  switherSpan.createElement();

  /* Sound */

  var soundSwitherName = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('li', firstRow, 'swither-name');
  soundSwitherName = soundSwitherName.createElement();
  soundSwitherName.innerText = 'Sound:';
  var soundSwither = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('label', firstRow, 'swither');
  soundSwither = soundSwither.createElement();
  var soundInput = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('input', soundSwither, 'swither__input');
  soundInput = soundInput.createElement();
  soundInput.setAttribute('type', 'checkbox');
  var soundSpan = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('span', soundSwither, 'sound', 'swither__span');
  soundSpan.createElement();
  var soundSetting = localStorage.getItem('sound');
  if (!soundSetting) {
    localStorage.setItem('sound', 'on');
  } else if (soundSetting === 'off') {
    soundInput.setAttribute('checked', 'true');
  }

  /* Levels */

  var levelsList = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('ul', wrapperHeader, 'levels');
  levelsList = levelsList.createElement();
  var level = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('li', levelsList, 'level');
  level = level.createElement();
  level.innerText = 'Beginner';
  if (level.innerText === activeLevelSaved) {
    level.classList.add('level_active');
  }
  level = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('li', levelsList, 'level');
  level = level.createElement();
  level.innerText = 'Intermediate';
  if (level.innerText === activeLevelSaved) {
    level.classList.add('level_active');
  }
  level = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('li', levelsList, 'level');
  level = level.createElement();
  level.innerText = 'Expert';
  if (level.innerText === activeLevelSaved) {
    level.classList.add('level_active');
  }
  level = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('li', levelsList, 'level');
  level = level.createElement();
  level.innerText = 'Custom';
  if (level.innerText === activeLevelSaved) {
    level.classList.add('level_active');
  }

  /* Custom settings */
  var activeLevel = document.querySelector('.level_active');
  var customSettingsList = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('ul', wrapperHeader, 'custom-settings');
  customSettingsList = customSettingsList.createElement();
  if (activeLevel.innerText === 'Custom') {
    var _settingsItem = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('li', customSettingsList, 'settings-item');
    _settingsItem = _settingsItem.createElement();
    var _label = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('label', _settingsItem, 'settings-item__name');
    _label = _label.createElement();
    _label.innerText = 'Width: ';
    _label.htmlFor = 'custom-width';
    var _input = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('input', _label, 'settings-item__field');
    _input = _input.createElement();
    _input.setAttribute('type', 'number');
    _input.setAttribute('id', 'custom-width');
    _input.setAttribute('max', '100');
    _input.setAttribute('min', '10');
    if (localStorage['custom-width']) {
      if (!localStor.getItem('custom-width')) {
        localStor.changeValue('custom-width', '10');
        _input.value = 10;
      } else {
        _input.value = Number(localStor.getItem('custom-width'));
      }
    } else {
      _input.value = 10;
      localStor.setItem('custom-width', _input.value);
    }
    _settingsItem = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('li', customSettingsList, 'settings-item');
    _settingsItem = _settingsItem.createElement();
    _label = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('label', _settingsItem, 'settings-item__name');
    _label = _label.createElement();
    _label.innerText = 'Height: ';
    _label.htmlFor = 'custom-height';
    _input = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('input', _label, 'settings-item__field');
    _input = _input.createElement();
    _input.setAttribute('type', 'number');
    _input.setAttribute('id', 'custom-height');
    _input.setAttribute('max', '100');
    _input.setAttribute('min', '10');
    if (localStorage['custom-height']) {
      if (!localStor.getItem('custom-height')) {
        localStor.changeValue('custom-height', '10');
        _input.value = 10;
      } else {
        _input.value = Number(localStor.getItem('custom-height'));
      }
    } else {
      _input.value = 10;
      localStor.setItem('custom-height', _input.value);
    }
  }
  var settingsItem = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('li', customSettingsList, 'settings-item');
  settingsItem = settingsItem.createElement();
  var label = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('label', settingsItem, 'settings-item__name');
  label = label.createElement();
  label.innerText = 'Mines: ';
  label.htmlFor = 'custom-mines';
  var input = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('input', label, 'settings-item__field');
  input = input.createElement();
  input.setAttribute('type', 'number');
  input.setAttribute('id', 'custom-mines');
  input.setAttribute('max', '99');
  input.setAttribute('min', '10');
  if (localStorage["".concat(activeLevel.innerText.toLowerCase(), "-mines")]) {
    if (!localStor.getItem("".concat(activeLevel.innerText.toLowerCase(), "-mines"))) {
      localStor.setItem("".concat(activeLevel.innerText.toLowerCase(), "-mines"), '10');
      input.value = 10;
    } else {
      input.value = Number(localStor.getItem("".concat(activeLevel.innerText.toLowerCase(), "-mines")));
    }
  } else {
    input.value = 10;
    localStor.setItem("".concat(activeLevel.innerText.toLowerCase(), "-mines"), input.value);
  }
  settingsItem = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('li', customSettingsList, 'settings-item', 'update-btn');
  var updateBtn = settingsItem.createElement();
  updateBtn.innerText = 'Update';
}

/***/ }),

/***/ "./minesweeper/src/modules/levels.js":
/*!*******************************************!*\
  !*** ./minesweeper/src/modules/levels.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetLevelOptions": () => (/* binding */ GetLevelOptions),
/* harmony export */   "options": () => (/* binding */ options)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./minesweeper/src/modules/functions.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var localStor = new _functions__WEBPACK_IMPORTED_MODULE_0__.LocalStorageActions();
var activeLevel = localStor.getItem('active-level');
// eslint-disable-next-line consistent-return
function getMines() {
  if (activeLevel) {
    if (!localStor.getItem("".concat(activeLevel.toLowerCase(), "-mines"))) {
      return 10;
    }
    if (localStor.getItem("".concat(activeLevel.toLowerCase(), "-mines"))) {
      return Number(localStor.getItem("".concat(activeLevel.toLowerCase(), "-mines")));
    }
  } else {
    return 10;
  }
}
var options = {
  Beginner: {
    width: 10,
    height: 10,
    mines: getMines()
  },
  Intermediate: {
    width: 15,
    height: 15,
    mines: getMines()
  },
  Expert: {
    width: 25,
    height: 25,
    mines: getMines()
  }
};
function getWidthSetting() {
  return Number(localStor.getItem('custom-width'));
}
function getHeightSetting() {
  return Number(localStor.getItem('custom-height'));
}
var GetLevelOptions = /*#__PURE__*/function () {
  function GetLevelOptions(level) {
    _classCallCheck(this, GetLevelOptions);
    if (level !== 'Custom') {
      this.width = options[level].width;
      this.height = options[level].height;
      this.mines = options[level].mines;
    } else {
      this.width = getWidthSetting();
      this.height = getHeightSetting();
      this.mines = getMines();
    }
  }
  _createClass(GetLevelOptions, [{
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }
  }, {
    key: "getMines",
    value: function getMines() {
      return this.mines;
    }
  }, {
    key: "getGameMaxWidth",
    value: function getGameMaxWidth() {
      return this.width * 24 + 18 * 2;
    }
  }, {
    key: "getWidthPixels",
    value: function getWidthPixels() {
      return this.width * 24;
    }
  }, {
    key: "getHeightPixels",
    value: function getHeightPixels() {
      return this.height * 24;
    }
  }]);
  return GetLevelOptions;
}();

/***/ }),

/***/ "./minesweeper/src/modules/main.js":
/*!*****************************************!*\
  !*** ./minesweeper/src/modules/main.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearGame": () => (/* binding */ clearGame),
/* harmony export */   "clearHeader": () => (/* binding */ clearHeader),
/* harmony export */   "createGameFieldHTML": () => (/* binding */ createGameFieldHTML),
/* harmony export */   "createGameFooterHTML": () => (/* binding */ createGameFooterHTML),
/* harmony export */   "createMainHeaderHTML": () => (/* binding */ createMainHeaderHTML)
/* harmony export */ });
/* harmony import */ var _elem_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elem-builder */ "./minesweeper/src/modules/elem-builder.js");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels */ "./minesweeper/src/modules/levels.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./minesweeper/src/modules/functions.js");



var localStor = new _functions__WEBPACK_IMPORTED_MODULE_2__.LocalStorageActions();
function createCells(field, width, height) {
  if (!localStor.getItem('first-step')) {
    localStor.setItem('first-step', 'true');
    localStor.setItem('checked-cells', '');
  }
  var cellsNumber = width * height;
  if (localStor.getItem('first-step') === 'true') {
    for (var i = 0; i < cellsNumber; i += 1) {
      localStor.setItem("".concat(i + 1), 'cell_closed');
      var cell = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', field, 'cell', "".concat(i + 1), 'cell_closed');
      cell = cell.createElement();
      var theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        cell.classList.add('dark');
      }
    }
  } else if (localStor.getItem('first-step') === 'false') {
    for (var _i = 0; _i < cellsNumber; _i += 1) {
      var styleItem = localStor.getItem("".concat(_i + 1));
      var _cell = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', field, 'cell', "".concat(_i + 1), styleItem);
      _cell = _cell.createElement();
      var _theme = localStorage.getItem('theme');
      if (_theme === 'dark') {
        _cell.classList.add('dark');
      }
    }
  }
}
function createMainHeaderHTML() {
  var activeLevel = document.querySelector('.level.level_active');
  var options = new _levels__WEBPACK_IMPORTED_MODULE_1__.GetLevelOptions(activeLevel.innerText);
  var body = document.querySelector('body');
  var theme = localStor.getItem('theme');
  var main = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('main', body, 'main');
  main = main.createElement();
  var wrapper = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', main, 'wrapper');
  wrapper = wrapper.createElement();
  var game = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', wrapper, 'game');
  game = game.createElement();
  game.style.width = "".concat(options.getGameMaxWidth(), "px");

  /* Game header  */

  var gameHeader = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', game, 'game__header');
  gameHeader = gameHeader.createElement();

  /* Top border */

  var topBorder = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', gameHeader, 'top-border');
  topBorder = topBorder.createElement();
  var cornerLeft = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', topBorder, 'corner', 'left-top-corner');
  cornerLeft = cornerLeft.createElement();
  var borderLine = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', topBorder, 'border-line');
  borderLine = borderLine.createElement();
  borderLine.style.width = "".concat(options.getWidthPixels(), "px");
  var cornerRight = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', topBorder, 'corner', 'right-top-corner');
  cornerRight = cornerRight.createElement();

  /* Left border */
  var leftBorder = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', gameHeader, 'left-border', 'left-border_header');
  leftBorder.createElement();

  /* Header container */

  var gameHeaderContainer = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', gameHeader, 'game__header-container');
  gameHeaderContainer = gameHeaderContainer.createElement();
  gameHeaderContainer.style.width = "".concat(options.getWidthPixels(), "px");
  if (theme === 'dark') {
    gameHeaderContainer.classList.add('dark');
  }

  /*  Mines counter */
  var minesAmount = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', gameHeaderContainer, 'mines-amount');
  minesAmount = minesAmount.createElement();
  var num = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', minesAmount, 'num', 'first-num');
  num = num.createElement();
  num = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', minesAmount, 'num', 'second-num');
  num = num.createElement();
  num = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', minesAmount, 'num', 'third-num');
  num = num.createElement();
  (0,_functions__WEBPACK_IMPORTED_MODULE_2__.setMinesCouner)('restore');

  /*  Smile */

  var smile = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', gameHeaderContainer, 'smile', 'smile_unpressed');
  smile.createElement();

  /* Steps */

  var steps = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', gameHeaderContainer, 'steps');
  steps = steps.createElement();
  num = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', steps, 'num', 'first-num');
  num = num.createElement();
  num = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', steps, 'num', 'second-num');
  num = num.createElement();
  num = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', steps, 'num', 'third-num');
  num.createElement();
  (0,_functions__WEBPACK_IMPORTED_MODULE_2__.changeStepsCouner)('init');

  /* Right border */
  var rightBorder = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', gameHeader, 'right-border', 'right-border_header');
  rightBorder.createElement();

  /*  Middle border */

  var middleBorder = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', gameHeader, 'middle-border');
  middleBorder = middleBorder.createElement();
  cornerLeft = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', middleBorder, 'corner', 'left-middle-corner');
  cornerLeft.createElement();
  borderLine = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', middleBorder, 'border-line');
  borderLine = borderLine.createElement();
  borderLine.style.width = "".concat(options.getWidthPixels(), "px");
  cornerRight = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', middleBorder, 'corner', 'right-middle-corner');
  cornerRight.createElement();
}
function createGameFieldHTML() {
  var activeLevel = document.querySelector('.level.level_active');
  var options = new _levels__WEBPACK_IMPORTED_MODULE_1__.GetLevelOptions(activeLevel.innerText);
  var game = document.querySelector('.game');
  var theme = localStorage.getItem('theme');

  /* Container */
  var gameFieldContainer = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', game, 'game__field-container');
  gameFieldContainer = gameFieldContainer.createElement();
  if (theme === 'dark') {
    gameFieldContainer.classList.add('dark');
  }
  /* Left border */
  var leftBorderField = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', gameFieldContainer, 'left-border', 'left-border_field');
  leftBorderField = leftBorderField.createElement();
  leftBorderField.style.height = options.getHeightPixels();

  /* Game field */

  var gameField = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', gameFieldContainer, 'game__field');
  gameField = gameField.createElement();
  gameField.style.width = "".concat(options.getWidthPixels(), "px");

  /* Cells */

  var width = options.getWidth();
  var height = options.getHeight();
  createCells(gameField, width, height);

  /* Right border */
  var rightBorderField = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', gameFieldContainer, 'right-border', 'right-border_field');
  rightBorderField = rightBorderField.createElement();
  rightBorderField.style.height = options.getHeightPixels();
}
function createGameFooterHTML() {
  var game = document.querySelector('.game');
  var activeLevel = document.querySelector('.level.level_active');
  var options = new _levels__WEBPACK_IMPORTED_MODULE_1__.GetLevelOptions(activeLevel.innerText);
  var theme = localStorage.getItem('theme');

  /* Game footer  */

  var gameFooter = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', game, 'game__footer');
  gameFooter = gameFooter.createElement();

  /*  Middle border */

  var middleBorder = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', gameFooter, 'middle-border');
  middleBorder = middleBorder.createElement();
  var cornerLeft = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', middleBorder, 'corner', 'left-middle-corner');
  cornerLeft.createElement();
  var borderLine = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', middleBorder, 'border-line');
  borderLine = borderLine.createElement();
  borderLine.style.width = "".concat(options.getWidthPixels(), "px");
  var cornerRight = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', middleBorder, 'corner', 'right-middle-corner');
  cornerRight.createElement();

  /* Left footer border */
  var leftBorder = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', gameFooter, 'left-border', 'left-border_footer');
  leftBorder.createElement();

  /* Footer container */

  var gameFooterContainer = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', gameFooter, 'game__footer-container');
  gameFooterContainer = gameFooterContainer.createElement();
  gameFooterContainer.style.width = "".concat(options.getWidthPixels(), "px");
  if (theme === 'dark') {
    gameFooterContainer.classList.add('dark');
  }
  /* Timer */

  var timer = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', gameFooterContainer, 'timer');
  timer = timer.createElement();
  var num = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', timer, 'num', 'first-num');
  num = num.createElement();
  num = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', timer, 'num', 'second-num');
  num = num.createElement();
  num = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', timer, 'num', 'third-num');
  num.createElement();
  (0,_functions__WEBPACK_IMPORTED_MODULE_2__.setTimer)('init');
  localStorage.setItem('timerRestored', 'true');

  /* Right footer border */
  var rightBorder = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', gameFooter, 'right-border', 'right-border_footer');
  rightBorder.createElement();

  /* Bottom border */

  var bottomBorder = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', gameFooter, 'bottom-border');
  bottomBorder = bottomBorder.createElement();
  cornerLeft = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', bottomBorder, 'corner', 'left-bottom-corner');
  cornerLeft.createElement();
  borderLine = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', bottomBorder, 'border-line');
  borderLine = borderLine.createElement();
  borderLine.style.width = "".concat(options.getWidthPixels(), "px");
  cornerRight = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', bottomBorder, 'corner', 'right-bottom-corner');
  cornerRight.createElement();
}
function clearGame() {
  var main = document.querySelector('.main');
  main.remove();
}
function clearHeader() {
  var header = document.querySelector('.header');
  header.remove();
}

/***/ }),

/***/ "./minesweeper/src/modules/mineBuilder.js":
/*!************************************************!*\
  !*** ./minesweeper/src/modules/mineBuilder.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMineField": () => (/* binding */ createMineField)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./minesweeper/src/modules/functions.js");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels */ "./minesweeper/src/modules/levels.js");
/* harmony import */ var _check_cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-cell */ "./minesweeper/src/modules/check-cell.js");
/* Mines field creator */




function createMineField(number) {
  var activeLevel = document.querySelector('.level.level_active');
  var options = new _levels__WEBPACK_IMPORTED_MODULE_1__.GetLevelOptions(activeLevel.innerText);
  var cellsArr = document.querySelectorAll('.cell');
  var cellsAmount = cellsArr.length;
  function getMines() {
    if (!localStorage.getItem("".concat(activeLevel.innerText.toLowerCase(), "-mines"))) {
      return 10;
    } else {
      return Number(localStorage.getItem("".concat(activeLevel.innerText.toLowerCase(), "-mines")));
    }
  }
  var openedCell = number;

  /* Get rundom number */
  function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  }
  var num = randomInteger(0, cellsAmount - 1);
  var minedCells = [];

  /* Create array cells numbers with mines */

  function getMinedCellsArr(numb) {
    if (minedCells.indexOf(numb) === -1 && numb !== openedCell) {
      minedCells.push(numb);
    } else {
      var newNum = randomInteger(0, cellsAmount - 1);
      getMinedCellsArr(newNum);
    }
  }
  while (minedCells.length < getMines()) {
    getMinedCellsArr(num);
  }
  // console.log(minedCells.length, getMines())

  /* Change styles and local storage value of mined cells */

  minedCells.forEach(function (item) {
    var currStyle = cellsArr[item].classList[2];
    var newStyle = currStyle.replace('_closed', '-mined_closed');
    cellsArr[item].classList.replace(currStyle, newStyle);
    var localStor = new _functions__WEBPACK_IMPORTED_MODULE_0__.LocalStorageActions();
    localStor.changeValue("".concat(item), newStyle);
  });
  cellsArr.forEach(function (item) {
    if (item.classList.contains('dark')) {
      item.classList.remove('dark');
    }
  });

  /* Create numbers around mines */
  var cellsCheck = new _check_cell__WEBPACK_IMPORTED_MODULE_2__.CheckCells(options.width, options.height);
  var leftTopCornerCell = cellsCheck.getLeftTopCornerCell();
  cellsCheck.fillMinesAmount(leftTopCornerCell, 'leftTopCornerCell');
  var rightTopCornerCell = cellsCheck.getRightTopCornerCell();
  cellsCheck.fillMinesAmount(rightTopCornerCell, 'rightTopCornerCell');
  var leftBottomCornerCell = cellsCheck.getLeftBottomCornerCell();
  cellsCheck.fillMinesAmount(leftBottomCornerCell, 'leftBottomCornerCell');
  var rightBottomCornerCell = cellsCheck.getRightBottomCornerCell();
  cellsCheck.fillMinesAmount(rightBottomCornerCell, 'rightBottomCornerCell');
  var topRow = cellsCheck.getTopRow();
  cellsCheck.fillMinesAmount(topRow, 'topRow');
  var bottomRow = cellsCheck.getBottomRow();
  cellsCheck.fillMinesAmount(bottomRow, 'bottomRow');
  var leftCol = cellsCheck.getLeftCol();
  cellsCheck.fillMinesAmount(leftCol, 'leftCol');
  var rightCol = cellsCheck.getRightCol();
  cellsCheck.fillMinesAmount(rightCol, 'rightCol');
  var insideCells = cellsCheck.getInsideCells();
  cellsCheck.fillMinesAmount(insideCells, 'insideCells');
  var theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    cellsArr.forEach(function (item) {
      item.classList.add('dark');
    });
  }
}

/***/ }),

/***/ "./minesweeper/src/modules/open-empty-cells.js":
/*!*****************************************************!*\
  !*** ./minesweeper/src/modules/open-empty-cells.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openCellsAround": () => (/* binding */ openCellsAround)
/* harmony export */ });
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels */ "./minesweeper/src/modules/levels.js");
/* harmony import */ var _check_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-cell */ "./minesweeper/src/modules/check-cell.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./minesweeper/src/modules/functions.js");



function openCellsAround() {
  var localStorr = new _functions__WEBPACK_IMPORTED_MODULE_2__.LocalStorageActions();
  var activeLevel = document.querySelector('.level.level_active');
  var options = new _levels__WEBPACK_IMPORTED_MODULE_0__.GetLevelOptions(activeLevel.innerText);
  var width = options.width;
  var height = options.height;
  var cells = document.querySelectorAll('.cell');

  /* Check every empty cell around it */

  function checkCellAround() {
    for (var i = 0; i < cells.length; i += 1) {
      var checkedCells = localStorr.getItem('checked-cells');
      if (!checkedCells) {
        localStorr.setItem('checked-cells', '');
      }
      if (cells[i].classList[2] === 'cell_opened' && !checkedCells.includes(cells[i].classList[1])) {
        // eslint-disable-next-line no-use-before-define
        checkCell(cells[i]);
      }
    }
  }
  checkCellAround();
  function checkCell(cell) {
    var checkCells = new _check_cell__WEBPACK_IMPORTED_MODULE_1__.CheckCells(width, height);
    var leftTopCorner = checkCells.getLeftTopCornerCell();
    var rightTopCorner = checkCells.getRightTopCornerCell();
    var leftBottomCorner = checkCells.getLeftBottomCornerCell();
    var rightBottomCorner = checkCells.getRightBottomCornerCell();
    var topRow = checkCells.getTopRow();
    var bottomRow = checkCells.getBottomRow();
    var leftCol = checkCells.getLeftCol();
    var rightCol = checkCells.getRightCol();
    var insideCells = checkCells.getInsideCells();
    var startIndex = Number(cell.classList[1] - 1);
    var topLeftCell = cells[startIndex - width - 1];
    var topCell = cells[startIndex - width];
    var topRightCell = cells[startIndex - width + 1];
    var nextCell = cells[startIndex + 1];
    var bottomRightCell = cells[startIndex + width + 1];
    var bottomCell = cells[startIndex + width];
    var bottomLeftCell = cells[startIndex + width - 1];
    var prevCell = cells[startIndex - 1];
    function changeStyleToOpened(item) {
      var closedStyle = item.classList[2];
      if (!closedStyle.includes('flaged-right') && !closedStyle.includes('flaged-wrong')) {
        var currStyle = item.classList[2];
        var newStyle = currStyle.replace('closed', 'opened');
        item.classList.replace(currStyle, newStyle);
        var storKey = item.classList[1];
        localStorr.changeValue(storKey, newStyle);
      }
    }
    /* First cell top row */

    if (cell === leftTopCorner) {
      /* next */
      if (nextCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(nextCell);
      }
      /* bottom */
      if (bottomCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomCell);
      }
      /*  bottom right  */
      if (bottomRightCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomRightCell);
      }
    }
    /* Last cell top row */

    if (cell === rightTopCorner) {
      /* prev */
      if (prevCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(prevCell);
      }
      /* bottom */
      if (bottomCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomCell);
      }
      /*  bottom left  */
      if (bottomLeftCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomLeftCell);
      }
    }

    /* First sell bottom row */

    if (cell === leftBottomCorner) {
      /* top */
      if (topCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topCell);
      }
      /* next */
      if (nextCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(nextCell);
      }
      /*  top right  */
      if (topRightCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topRightCell);
      }
    }

    /* Last sell bottom row */

    if (cell === rightBottomCorner) {
      /* top */
      if (topCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topCell);
      }
      /* prev */
      if (prevCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(prevCell);
      }
      /*  top left  */
      if (topLeftCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topLeftCell);
      }
    }

    /* Top row */

    if (topRow.includes(cell)) {
      /* prev */
      if (prevCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(prevCell);
      }

      /*  bottom left  */
      if (bottomLeftCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomLeftCell);
      }

      /* bottom */
      if (bottomCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomCell);
      }
      /*  bottom right  */
      if (bottomRightCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomRightCell);
      }

      /* next */
      if (nextCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(nextCell);
      }
    }

    /* Bottom row */

    if (bottomRow.includes(cell)) {
      /* prev */
      if (prevCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(prevCell);
      }

      /*  top left  */
      if (topLeftCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topLeftCell);
      }

      /* top */
      if (topCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topCell);
      }
      /*  top right  */
      if (topRightCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topRightCell);
      }

      /* next */
      if (nextCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(nextCell);
      }
    }

    /* Left col */

    if (leftCol.includes(cell)) {
      /* top */
      if (topCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topCell);
      }

      /*  top right  */
      if (topRightCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topRightCell);
      }

      /* next */
      if (nextCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(nextCell);
      }
      /*  bottom right  */
      if (bottomRightCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomRightCell);
      }

      /* bottom */
      if (bottomCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomCell);
      }
    }

    /* Right col */

    if (rightCol.includes(cell)) {
      /* top */
      if (topCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topCell);
      }

      /*  top left  */
      if (topLeftCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topLeftCell);
      }
      /* prev */
      if (prevCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(prevCell);
      }
      /*  bottom left  */
      if (bottomLeftCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomLeftCell);
      }

      /* bottom */
      if (bottomCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomCell);
      }
    }

    /* Inside cells */

    if (insideCells.includes(cell)) {
      /*  top left  */
      if (topLeftCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topLeftCell);
      }

      /* top */
      if (topCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topCell);
      }
      /*  top right  */
      if (topRightCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(topRightCell);
      }

      /* next */
      if (nextCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(nextCell);
      }
      /*  bottom right  */
      if (bottomRightCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomRightCell);
      }

      /* bottom */
      if (bottomCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomCell);
      }
      /*  bottom left  */
      if (bottomLeftCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(bottomLeftCell);
      }
      /* prev */
      if (prevCell.classList[2] !== 'cell-mined_closed') {
        changeStyleToOpened(prevCell);
      }
    }
    var checkedCells = localStorr.getItem('checked-cells');
    checkedCells = checkedCells.split(',');
    checkedCells.push(cell.classList[1]);
    localStorr.changeValue('checked-cells', checkedCells);
    checkCellAround();
  }
}

/***/ }),

/***/ "./minesweeper/src/modules/pop-up.js":
/*!*******************************************!*\
  !*** ./minesweeper/src/modules/pop-up.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showMessage": () => (/* binding */ showMessage)
/* harmony export */ });
/* harmony import */ var _elem_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elem-builder */ "./minesweeper/src/modules/elem-builder.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./minesweeper/src/modules/functions.js");


function showMessage(option) {
  /* Create HTML */
  var body = document.querySelector('body');
  var theme = localStorage.getItem('theme');
  var popUpWrapper = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', body, 'pop-up-wrapper');
  popUpWrapper = popUpWrapper.createElement();
  var messageContainer = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', popUpWrapper, 'message-container');
  messageContainer = messageContainer.createElement();
  if (theme === 'dark') {
    messageContainer.classList.add('message-container_dark');
  }
  var message = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', messageContainer, 'message');
  message.createElement();
  var title = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('h1', messageContainer, 'message-title');
  title = title.createElement();

  /* Winner */
  if (option === 'win') {
    var steps = localStorage.getItem('steps-counter');
    title.innerText = "Congratulations, you're a winner!!!";
    var messageText = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('p', messageContainer, 'message-text');
    messageText = messageText.createElement();
    messageText.innerText = "Steps amount: ".concat(steps);
    if (theme === 'dark') {
      messageText.classList.add('dark');
    }
    var timeSpend = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('p', messageContainer, 'message-text');
    timeSpend = timeSpend.createElement();
    var timeMes = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getTime)();
    timeSpend.innerText = "Your time: ".concat(timeMes);
    if (theme === 'dark') {
      timeSpend.classList.add('dark');
    }
    var closeBtn = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('button', messageContainer, 'close-btn');
    closeBtn = closeBtn.createElement();
    closeBtn.innerText = 'Close';
    document.addEventListener('click', function (e) {
      var popUp = document.querySelector('.pop-up-wrapper');
      if (e.target === closeBtn) {
        popUp.remove();
      }
    });
  }

  /* Loser */
  if (option === 'lose') {
    title.innerText = "Oh sorry you are lose!!! \n Let's try again!";
    var _closeBtn = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('button', messageContainer, 'close-btn');
    _closeBtn = _closeBtn.createElement();
    _closeBtn.innerText = 'Close';
    document.addEventListener('click', function (e) {
      var popUp = document.querySelector('.pop-up-wrapper');
      if (e.target === _closeBtn) {
        popUp.remove();
      }
    });
  }

  /* Results */
  if (option === 'results') {
    var activeLevel = document.querySelector('.level_active');
    var level = activeLevel.innerText.toLowerCase();
    title.innerText = "Last 10 results of ".concat(activeLevel.innerText, " level");
    if (localStorage.getItem('results')) {
      var resultsObj = JSON.parse(localStorage.results);
      var targetLevelObj = resultsObj[level];
      if (targetLevelObj) {
        var table = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', messageContainer, 'results-table');
        table = table.createElement();
        if (theme === 'dark') {
          table.classList.add('results-table_dark');
        }
        var tableItemHeader = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', table, 'result-steps', 'result-steps_header');
        tableItemHeader = tableItemHeader.createElement();
        if (theme === 'dark') {
          tableItemHeader.classList.add('result-steps_dark');
        }
        tableItemHeader.innerText = 'Steps';
        tableItemHeader = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', table, 'result-time', 'result-time_header');
        tableItemHeader = tableItemHeader.createElement();
        if (theme === 'dark') {
          tableItemHeader.classList.add('result-time_dark');
        }
        tableItemHeader.innerText = 'Time';
        var resultsLength = Object.keys(targetLevelObj).length;
        for (var i = 1; i < resultsLength + 1; i += 1) {
          var tableItem = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', table, 'result-steps');
          tableItem = tableItem.createElement();
          tableItem.innerText = targetLevelObj[i].steps;
          if (theme === 'dark') {
            tableItem.classList.add('result-steps_dark');
          }
          tableItem = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('div', table, 'result-time');
          tableItem = tableItem.createElement();
          tableItem.innerText = targetLevelObj[i].time;
          if (theme === 'dark') {
            tableItem.classList.add('result-time_dark');
          }
        }
      } else {
        var _messageText = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('p', messageContainer, 'message-text');
        _messageText = _messageText.createElement();
        if (theme === 'dark') {
          _messageText.classList.add('message-text_dark');
        }
        _messageText.innerText = 'There is no results. You can be first! Start game!';
      }
    } else {
      var _messageText2 = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('p', messageContainer, 'message-text');
      _messageText2 = _messageText2.createElement();
      if (theme === 'dark') {
        _messageText2.classList.add('message-text_dark');
      }
      _messageText2.innerText = 'There is no results. You can be first! Start game!';
    }
    var _closeBtn2 = new _elem_builder__WEBPACK_IMPORTED_MODULE_0__.ElementBuilder('button', messageContainer, 'close-btn');
    _closeBtn2 = _closeBtn2.createElement();
    if (theme === 'dark') {
      _closeBtn2.classList.add('close-btn_dark');
    }
    _closeBtn2.innerText = 'Close';
    document.addEventListener('click', function (e) {
      var popUp = document.querySelector('.pop-up-wrapper');
      if (e.target === _closeBtn2) {
        popUp.remove();
      }
    });
  }
}

/***/ }),

/***/ "./minesweeper/src/modules/sounds.js":
/*!*******************************************!*\
  !*** ./minesweeper/src/modules/sounds.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playSound": () => (/* binding */ playSound)
/* harmony export */ });
/* harmony import */ var _sounds_click_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sounds/click.mp3 */ "./minesweeper/src/sounds/click.mp3");
/* harmony import */ var _sounds_flag_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sounds/flag.mp3 */ "./minesweeper/src/sounds/flag.mp3");
/* harmony import */ var _sounds_looser_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sounds/looser.mp3 */ "./minesweeper/src/sounds/looser.mp3");
/* harmony import */ var _sounds_winner_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sounds/winner.mp3 */ "./minesweeper/src/sounds/winner.mp3");




function playSound(option) {
  var soundSetting = localStorage.getItem('sound');
  if (soundSetting === 'on') {
    if (option === 'click') {
      var sound = new Audio(_sounds_click_mp3__WEBPACK_IMPORTED_MODULE_0__);
      sound.play();
    }
    if (option === 'flag') {
      var _sound = new Audio(_sounds_flag_mp3__WEBPACK_IMPORTED_MODULE_1__);
      _sound.play();
    }
    if (option === 'loser') {
      var _sound2 = new Audio(_sounds_looser_mp3__WEBPACK_IMPORTED_MODULE_2__);
      _sound2.play();
    }
    if (option === 'winner') {
      var _sound3 = new Audio(_sounds_winner_mp3__WEBPACK_IMPORTED_MODULE_3__);
      _sound3.play();
    }
  }
}

/***/ }),

/***/ "./minesweeper/src/modules/theme-toggler.js":
/*!**************************************************!*\
  !*** ./minesweeper/src/modules/theme-toggler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "themeAddDark": () => (/* binding */ themeAddDark),
/* harmony export */   "themeToggler": () => (/* binding */ themeToggler),
/* harmony export */   "toggleThemeGameField": () => (/* binding */ toggleThemeGameField)
/* harmony export */ });
function themeToggler() {
  var body = document.querySelector('body');
  body.classList.toggle('body_dark');
  var title = document.querySelector('.main-title');
  title.classList.toggle('main-title_dark');
  var results = document.querySelector('.results');
  results.classList.toggle('results_dark');
  var SwitherName = document.querySelectorAll('.swither-name');
  SwitherName[0].classList.toggle('swither-name_dark');
  SwitherName[1].classList.toggle('swither-name_dark');
  var SwitherSpan = document.querySelector('.swither__span');
  SwitherSpan.classList.toggle('swither__span_dark');
  var level = document.querySelectorAll('.level');
  level.forEach(function (item) {
    item.classList.toggle('level_dark');
  });
  var custom = document.querySelector('.custom-settings');
  if (custom && !custom.classList.contains('hidden')) {
    var settingsItem = document.querySelectorAll('.settings-item');
    settingsItem.forEach(function (item) {
      item.classList.toggle('settings-item_dark');
      if (item.children[0]) {
        item.children[0].classList.toggle('settings-item__name_dark');
      }
    });
  }
}
function toggleThemeGameField() {
  var targetClasses = ['.cell_closed', '.cell-mined_closed', '.cell-one_closed', '.cell-two_closed', '.cell-three_closed', '.cell-four_closed', '.cell-five_closed', '.cell-six_closed', '.cell-seven_closed', '.cell-eight_closed', '.game__header-container', '.game__footer-container', '.smile_unpressed', '.cell_opened', '.cell-one_opened', '.cell-two_opened', '.cell-three_opened', '.cell-four_opened', '.cell-five_opened', '.cell-six_opened', '.cell-seven_opened', '.cell-eight_opened', '.cell-mined_opened-loss', '.cell-mined_opened', '.flaged-right_cell-mined_closed', '.flaged-right_cell-one_closed', '.flaged-right_cell-two_closed', '.flaged-right_cell-three_closed', '.flaged-right_cell-four_closed', '.flaged-right_cell-five_closed', '.flaged-right_cell-six_closed', '.flaged-right_cell-seven_closed', '.flaged-right_cell-eight_closed', '.flaged-right_cell-mined_closed', '.flaged-wrong_cell_closed', '.flaged-wrong_cell-one_closed', '.flaged-wrong_cell-two_closed', '.flaged-wrong_cell-three_closed', '.flaged-wrong_cell-four_closed', '.flaged-wrong_cell-five_closed', '.flaged-wrong_cell-six_closed', '.flaged-wrong_cell-seven_closed', '.flaged-wrong_cell-eight_closed', '.flaged-right_cell_closed', '.update-btn'];
  for (var i = 0; i < targetClasses.length; i += 1) {
    var cellsClosed = document.querySelectorAll(targetClasses[i]);
    cellsClosed.forEach(function (item) {
      item.classList.toggle('dark');
    });
  }
}
function themeAddDark() {
  var body = document.querySelector('body');
  body.classList.add('body_dark');
  var title = document.querySelector('.main-title');
  title.classList.add('main-title_dark');
  var results = document.querySelector('.results');
  results.classList.add('results_dark');
  var SwitherName = document.querySelectorAll('.swither-name');
  SwitherName[0].classList.add('swither-name_dark');
  SwitherName[1].classList.add('swither-name_dark');
  var SwitherSpan = document.querySelector('.swither__span');
  SwitherSpan.classList.add('swither__span_dark');
  var level = document.querySelectorAll('.level');
  level.forEach(function (item) {
    item.classList.add('level_dark');
  });
  var custom = document.querySelector('.custom-settings');
  if (custom && !custom.classList.contains('hidden')) {
    var settingsItem = document.querySelectorAll('.settings-item');
    settingsItem.forEach(function (item) {
      if (!item.classList.contains('settings-item_dark')) {
        item.classList.add('settings-item_dark');
        if (item.children[0]) {
          item.children[0].classList.add('settings-item__name_dark');
        }
      }
    });
  }
  var targetClasses = ['.update-btn', '.game__header-container', '.game__footer-container'];
  for (var i = 0; i < targetClasses.length; i += 1) {
    var cellsClosed = document.querySelectorAll(targetClasses[i]);
    cellsClosed.forEach(function (item) {
      item.classList.add = 'dark';
    });
  }
}

/***/ }),

/***/ "./node_modules/core-js/es6/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/es6/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! ../modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");
__webpack_require__(/*! ../modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
__webpack_require__(/*! ../modules/es6.object.define-properties */ "./node_modules/core-js/modules/es6.object.define-properties.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.object.get-prototype-of */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-names */ "./node_modules/core-js/modules/es6.object.get-own-property-names.js");
__webpack_require__(/*! ../modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");
__webpack_require__(/*! ../modules/es6.object.seal */ "./node_modules/core-js/modules/es6.object.seal.js");
__webpack_require__(/*! ../modules/es6.object.prevent-extensions */ "./node_modules/core-js/modules/es6.object.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.object.is-frozen */ "./node_modules/core-js/modules/es6.object.is-frozen.js");
__webpack_require__(/*! ../modules/es6.object.is-sealed */ "./node_modules/core-js/modules/es6.object.is-sealed.js");
__webpack_require__(/*! ../modules/es6.object.is-extensible */ "./node_modules/core-js/modules/es6.object.is-extensible.js");
__webpack_require__(/*! ../modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
__webpack_require__(/*! ../modules/es6.object.is */ "./node_modules/core-js/modules/es6.object.is.js");
__webpack_require__(/*! ../modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
__webpack_require__(/*! ../modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
__webpack_require__(/*! ../modules/es6.function.has-instance */ "./node_modules/core-js/modules/es6.function.has-instance.js");
__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/core-js/modules/es6.parse-int.js");
__webpack_require__(/*! ../modules/es6.parse-float */ "./node_modules/core-js/modules/es6.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! ../modules/es6.number.to-fixed */ "./node_modules/core-js/modules/es6.number.to-fixed.js");
__webpack_require__(/*! ../modules/es6.number.to-precision */ "./node_modules/core-js/modules/es6.number.to-precision.js");
__webpack_require__(/*! ../modules/es6.number.epsilon */ "./node_modules/core-js/modules/es6.number.epsilon.js");
__webpack_require__(/*! ../modules/es6.number.is-finite */ "./node_modules/core-js/modules/es6.number.is-finite.js");
__webpack_require__(/*! ../modules/es6.number.is-integer */ "./node_modules/core-js/modules/es6.number.is-integer.js");
__webpack_require__(/*! ../modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
__webpack_require__(/*! ../modules/es6.number.is-safe-integer */ "./node_modules/core-js/modules/es6.number.is-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.max-safe-integer */ "./node_modules/core-js/modules/es6.number.max-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.min-safe-integer */ "./node_modules/core-js/modules/es6.number.min-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.parse-float */ "./node_modules/core-js/modules/es6.number.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.parse-int */ "./node_modules/core-js/modules/es6.number.parse-int.js");
__webpack_require__(/*! ../modules/es6.math.acosh */ "./node_modules/core-js/modules/es6.math.acosh.js");
__webpack_require__(/*! ../modules/es6.math.asinh */ "./node_modules/core-js/modules/es6.math.asinh.js");
__webpack_require__(/*! ../modules/es6.math.atanh */ "./node_modules/core-js/modules/es6.math.atanh.js");
__webpack_require__(/*! ../modules/es6.math.cbrt */ "./node_modules/core-js/modules/es6.math.cbrt.js");
__webpack_require__(/*! ../modules/es6.math.clz32 */ "./node_modules/core-js/modules/es6.math.clz32.js");
__webpack_require__(/*! ../modules/es6.math.cosh */ "./node_modules/core-js/modules/es6.math.cosh.js");
__webpack_require__(/*! ../modules/es6.math.expm1 */ "./node_modules/core-js/modules/es6.math.expm1.js");
__webpack_require__(/*! ../modules/es6.math.fround */ "./node_modules/core-js/modules/es6.math.fround.js");
__webpack_require__(/*! ../modules/es6.math.hypot */ "./node_modules/core-js/modules/es6.math.hypot.js");
__webpack_require__(/*! ../modules/es6.math.imul */ "./node_modules/core-js/modules/es6.math.imul.js");
__webpack_require__(/*! ../modules/es6.math.log10 */ "./node_modules/core-js/modules/es6.math.log10.js");
__webpack_require__(/*! ../modules/es6.math.log1p */ "./node_modules/core-js/modules/es6.math.log1p.js");
__webpack_require__(/*! ../modules/es6.math.log2 */ "./node_modules/core-js/modules/es6.math.log2.js");
__webpack_require__(/*! ../modules/es6.math.sign */ "./node_modules/core-js/modules/es6.math.sign.js");
__webpack_require__(/*! ../modules/es6.math.sinh */ "./node_modules/core-js/modules/es6.math.sinh.js");
__webpack_require__(/*! ../modules/es6.math.tanh */ "./node_modules/core-js/modules/es6.math.tanh.js");
__webpack_require__(/*! ../modules/es6.math.trunc */ "./node_modules/core-js/modules/es6.math.trunc.js");
__webpack_require__(/*! ../modules/es6.string.from-code-point */ "./node_modules/core-js/modules/es6.string.from-code-point.js");
__webpack_require__(/*! ../modules/es6.string.raw */ "./node_modules/core-js/modules/es6.string.raw.js");
__webpack_require__(/*! ../modules/es6.string.trim */ "./node_modules/core-js/modules/es6.string.trim.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/es6.string.code-point-at */ "./node_modules/core-js/modules/es6.string.code-point-at.js");
__webpack_require__(/*! ../modules/es6.string.ends-with */ "./node_modules/core-js/modules/es6.string.ends-with.js");
__webpack_require__(/*! ../modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__(/*! ../modules/es6.string.repeat */ "./node_modules/core-js/modules/es6.string.repeat.js");
__webpack_require__(/*! ../modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");
__webpack_require__(/*! ../modules/es6.string.anchor */ "./node_modules/core-js/modules/es6.string.anchor.js");
__webpack_require__(/*! ../modules/es6.string.big */ "./node_modules/core-js/modules/es6.string.big.js");
__webpack_require__(/*! ../modules/es6.string.blink */ "./node_modules/core-js/modules/es6.string.blink.js");
__webpack_require__(/*! ../modules/es6.string.bold */ "./node_modules/core-js/modules/es6.string.bold.js");
__webpack_require__(/*! ../modules/es6.string.fixed */ "./node_modules/core-js/modules/es6.string.fixed.js");
__webpack_require__(/*! ../modules/es6.string.fontcolor */ "./node_modules/core-js/modules/es6.string.fontcolor.js");
__webpack_require__(/*! ../modules/es6.string.fontsize */ "./node_modules/core-js/modules/es6.string.fontsize.js");
__webpack_require__(/*! ../modules/es6.string.italics */ "./node_modules/core-js/modules/es6.string.italics.js");
__webpack_require__(/*! ../modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
__webpack_require__(/*! ../modules/es6.string.small */ "./node_modules/core-js/modules/es6.string.small.js");
__webpack_require__(/*! ../modules/es6.string.strike */ "./node_modules/core-js/modules/es6.string.strike.js");
__webpack_require__(/*! ../modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");
__webpack_require__(/*! ../modules/es6.string.sup */ "./node_modules/core-js/modules/es6.string.sup.js");
__webpack_require__(/*! ../modules/es6.date.now */ "./node_modules/core-js/modules/es6.date.now.js");
__webpack_require__(/*! ../modules/es6.date.to-json */ "./node_modules/core-js/modules/es6.date.to-json.js");
__webpack_require__(/*! ../modules/es6.date.to-iso-string */ "./node_modules/core-js/modules/es6.date.to-iso-string.js");
__webpack_require__(/*! ../modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! ../modules/es6.date.to-primitive */ "./node_modules/core-js/modules/es6.date.to-primitive.js");
__webpack_require__(/*! ../modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
__webpack_require__(/*! ../modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
__webpack_require__(/*! ../modules/es6.array.of */ "./node_modules/core-js/modules/es6.array.of.js");
__webpack_require__(/*! ../modules/es6.array.join */ "./node_modules/core-js/modules/es6.array.join.js");
__webpack_require__(/*! ../modules/es6.array.slice */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! ../modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
__webpack_require__(/*! ../modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
__webpack_require__(/*! ../modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
__webpack_require__(/*! ../modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__(/*! ../modules/es6.array.some */ "./node_modules/core-js/modules/es6.array.some.js");
__webpack_require__(/*! ../modules/es6.array.every */ "./node_modules/core-js/modules/es6.array.every.js");
__webpack_require__(/*! ../modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");
__webpack_require__(/*! ../modules/es6.array.reduce-right */ "./node_modules/core-js/modules/es6.array.reduce-right.js");
__webpack_require__(/*! ../modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
__webpack_require__(/*! ../modules/es6.array.last-index-of */ "./node_modules/core-js/modules/es6.array.last-index-of.js");
__webpack_require__(/*! ../modules/es6.array.copy-within */ "./node_modules/core-js/modules/es6.array.copy-within.js");
__webpack_require__(/*! ../modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
__webpack_require__(/*! ../modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
__webpack_require__(/*! ../modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
__webpack_require__(/*! ../modules/es6.array.species */ "./node_modules/core-js/modules/es6.array.species.js");
__webpack_require__(/*! ../modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! ../modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__(/*! ../modules/es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
__webpack_require__(/*! ../modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__(/*! ../modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
__webpack_require__(/*! ../modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__(/*! ../modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! ../modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
__webpack_require__(/*! ../modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");
__webpack_require__(/*! ../modules/es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js");
__webpack_require__(/*! ../modules/es6.weak-set */ "./node_modules/core-js/modules/es6.weak-set.js");
__webpack_require__(/*! ../modules/es6.typed.array-buffer */ "./node_modules/core-js/modules/es6.typed.array-buffer.js");
__webpack_require__(/*! ../modules/es6.typed.data-view */ "./node_modules/core-js/modules/es6.typed.data-view.js");
__webpack_require__(/*! ../modules/es6.typed.int8-array */ "./node_modules/core-js/modules/es6.typed.int8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-array */ "./node_modules/core-js/modules/es6.typed.uint8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-clamped-array */ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
__webpack_require__(/*! ../modules/es6.typed.int16-array */ "./node_modules/core-js/modules/es6.typed.int16-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint16-array */ "./node_modules/core-js/modules/es6.typed.uint16-array.js");
__webpack_require__(/*! ../modules/es6.typed.int32-array */ "./node_modules/core-js/modules/es6.typed.int32-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint32-array */ "./node_modules/core-js/modules/es6.typed.uint32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float32-array */ "./node_modules/core-js/modules/es6.typed.float32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float64-array */ "./node_modules/core-js/modules/es6.typed.float64-array.js");
__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/core-js/fn/array/flat-map.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/flat-map.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.array.flat-map */ "./node_modules/core-js/modules/es7.array.flat-map.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.flatMap;


/***/ }),

/***/ "./node_modules/core-js/fn/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/includes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.includes;


/***/ }),

/***/ "./node_modules/core-js/fn/object/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/object/entries.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.entries;


/***/ }),

/***/ "./node_modules/core-js/fn/object/get-own-property-descriptors.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "./node_modules/core-js/fn/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/object/values.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/fn/promise/finally.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/promise/finally.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ../../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../../modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Promise["finally"];


/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-end.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-end.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.pad-end */ "./node_modules/core-js/modules/es7.string.pad-end.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padEnd;


/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-start.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-start.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.pad-start */ "./node_modules/core-js/modules/es7.string.pad-start.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padStart;


/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-end.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-end.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.trim-right */ "./node_modules/core-js/modules/es7.string.trim-right.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimRight;


/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-start.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-start.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.trim-left */ "./node_modules/core-js/modules/es7.string.trim-left.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimLeft;


/***/ }),

/***/ "./node_modules/core-js/fn/symbol/async-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/fn/symbol/async-iterator.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
module.exports = (__webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js").f)('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/fn/global.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/library/fn/global.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es7.global */ "./node_modules/core-js/library/modules/es7.global.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").global;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.global.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.global.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.G, { global: __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey);
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak);
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/***/ ((module) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/***/ ((module) => {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = (__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set);
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/***/ ((module) => {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/***/ ((module) => {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/***/ ((module) => {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/***/ ((module) => {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  (__webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild)(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = (__webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat)('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var isEnum = (__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f);
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect);
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseFloat = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseFloat);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseInt = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseInt);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

(__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource) = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f)(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var def = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")) {
  var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
  var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
  var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
  var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
  var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
  var $buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
  var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
  var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
  var propertyDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
  var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
  var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
  var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
  var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
  var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
  var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
  var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
  var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
  var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
  var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
  var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
  var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js");
  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
  var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
  var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
  var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js");
  var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
  var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/***/ ((module) => {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol);
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = (__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod) = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $every = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $some = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Array');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "./node_modules/core-js/modules/_date-to-iso-string.js");

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ "./node_modules/core-js/modules/_date-to-primitive.js"));


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var HAS_INSTANCE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var log1p = __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js");
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var gOPD = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var _isFinite = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").isFinite);

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isInteger = __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js");
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperty: (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return (__webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js").f);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: (__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = ((__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect) || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = ((__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect) || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY);
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f) = gOPNExt.f = $getOwnPropertyNames;
  (__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f) = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var ArrayBuffer = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").ArrayBuffer);
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.G + $export.W + $export.F * !(__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js").ABV), {
  DataView: (__webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js").DataView)
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "./node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('flatMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js");
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/core-js/web/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/web/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! ../modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./minesweeper/src/style.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./minesweeper/src/style.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/field-borders/corner_up_left_2x.png */ "./minesweeper/src/img/field-borders/corner_up_left_2x.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/field-borders/corner_up_right_2x.png */ "./minesweeper/src/img/field-borders/corner_up_right_2x.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/field-borders/t_left_2x.png */ "./minesweeper/src/img/field-borders/t_left_2x.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/field-borders/t_right_2x.png */ "./minesweeper/src/img/field-borders/t_right_2x.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/field-borders/corner_bottom_left_2x.png */ "./minesweeper/src/img/field-borders/corner_bottom_left_2x.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/field-borders/corner_bottom_right_2x.png */ "./minesweeper/src/img/field-borders/corner_bottom_right_2x.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/field-borders/border_hor_2x.png */ "./minesweeper/src/img/field-borders/border_hor_2x.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/field-borders/border_vert_2x.png */ "./minesweeper/src/img/field-borders/border_vert_2x.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/numbers-field/nums_background.svg */ "./minesweeper/src/img/numbers-field/nums_background.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/numbers-field/d0.svg */ "./minesweeper/src/img/numbers-field/d0.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/numbers-field/d1.svg */ "./minesweeper/src/img/numbers-field/d1.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/numbers-field/d2.svg */ "./minesweeper/src/img/numbers-field/d2.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/numbers-field/d3.svg */ "./minesweeper/src/img/numbers-field/d3.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/numbers-field/d4.svg */ "./minesweeper/src/img/numbers-field/d4.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/numbers-field/d5.svg */ "./minesweeper/src/img/numbers-field/d5.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/numbers-field/d6.svg */ "./minesweeper/src/img/numbers-field/d6.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/numbers-field/d7.svg */ "./minesweeper/src/img/numbers-field/d7.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/numbers-field/d8.svg */ "./minesweeper/src/img/numbers-field/d8.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/numbers-field/d9.svg */ "./minesweeper/src/img/numbers-field/d9.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/numbers-field/minus.svg */ "./minesweeper/src/img/numbers-field/minus.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/face_unpressed.svg */ "./minesweeper/src/img/buttons/face_unpressed.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/face_pressed.svg */ "./minesweeper/src/img/buttons/face_pressed.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/face_active.svg */ "./minesweeper/src/img/buttons/face_active.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/face_lose.svg */ "./minesweeper/src/img/buttons/face_lose.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/face_unpressed_dark.svg */ "./minesweeper/src/img/buttons/face_unpressed_dark.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/face_lose_dark.svg */ "./minesweeper/src/img/buttons/face_lose_dark.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/pressed.svg */ "./minesweeper/src/img/buttons/pressed.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/pressed_dark.svg */ "./minesweeper/src/img/buttons/pressed_dark.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/closed.svg */ "./minesweeper/src/img/buttons/closed.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/closed_dark.svg */ "./minesweeper/src/img/buttons/closed_dark.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/flag.svg */ "./minesweeper/src/img/buttons/flag.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/flag_dark.svg */ "./minesweeper/src/img/buttons/flag_dark.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/mine_wrong.svg */ "./minesweeper/src/img/buttons/mine_wrong.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/bombs-number/type1.svg */ "./minesweeper/src/img/buttons/bombs-number/type1.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/bombs-number/type2.svg */ "./minesweeper/src/img/buttons/bombs-number/type2.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/bombs-number/type3.svg */ "./minesweeper/src/img/buttons/bombs-number/type3.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/bombs-number/type4.svg */ "./minesweeper/src/img/buttons/bombs-number/type4.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/bombs-number/type5.svg */ "./minesweeper/src/img/buttons/bombs-number/type5.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_38___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/bombs-number/type6.svg */ "./minesweeper/src/img/buttons/bombs-number/type6.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_39___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/bombs-number/type7.svg */ "./minesweeper/src/img/buttons/bombs-number/type7.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_40___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/bombs-number/type8.svg */ "./minesweeper/src/img/buttons/bombs-number/type8.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_41___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/mine_red.svg */ "./minesweeper/src/img/buttons/mine_red.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_42___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/mine.svg */ "./minesweeper/src/img/buttons/mine.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_43___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/bombs-number/type1_yellow.svg */ "./minesweeper/src/img/buttons/bombs-number/type1_yellow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_44___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/bombs-number/type2_yellow.svg */ "./minesweeper/src/img/buttons/bombs-number/type2_yellow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_45___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/bombs-number/type3_yellow.svg */ "./minesweeper/src/img/buttons/bombs-number/type3_yellow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_46___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/bombs-number/type4_yellow.svg */ "./minesweeper/src/img/buttons/bombs-number/type4_yellow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_47___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/bombs-number/type5_yellow.svg */ "./minesweeper/src/img/buttons/bombs-number/type5_yellow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_48___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/bombs-number/type6_yellow.svg */ "./minesweeper/src/img/buttons/bombs-number/type6_yellow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_49___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/bombs-number/type7_yellow.svg */ "./minesweeper/src/img/buttons/bombs-number/type7_yellow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_50___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/bombs-number/type8_yellow.svg */ "./minesweeper/src/img/buttons/bombs-number/type8_yellow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_51___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/mine_dark.svg */ "./minesweeper/src/img/buttons/mine_dark.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_26___);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_27___);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_28___);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_29___);
var ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_30___);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_31___);
var ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_32___);
var ___CSS_LOADER_URL_REPLACEMENT_33___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_33___);
var ___CSS_LOADER_URL_REPLACEMENT_34___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_34___);
var ___CSS_LOADER_URL_REPLACEMENT_35___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_35___);
var ___CSS_LOADER_URL_REPLACEMENT_36___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_36___);
var ___CSS_LOADER_URL_REPLACEMENT_37___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_37___);
var ___CSS_LOADER_URL_REPLACEMENT_38___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_38___);
var ___CSS_LOADER_URL_REPLACEMENT_39___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_39___);
var ___CSS_LOADER_URL_REPLACEMENT_40___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_40___);
var ___CSS_LOADER_URL_REPLACEMENT_41___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_41___);
var ___CSS_LOADER_URL_REPLACEMENT_42___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_42___);
var ___CSS_LOADER_URL_REPLACEMENT_43___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_43___);
var ___CSS_LOADER_URL_REPLACEMENT_44___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_44___);
var ___CSS_LOADER_URL_REPLACEMENT_45___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_45___);
var ___CSS_LOADER_URL_REPLACEMENT_46___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_46___);
var ___CSS_LOADER_URL_REPLACEMENT_47___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_47___);
var ___CSS_LOADER_URL_REPLACEMENT_48___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_48___);
var ___CSS_LOADER_URL_REPLACEMENT_49___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_49___);
var ___CSS_LOADER_URL_REPLACEMENT_50___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_50___);
var ___CSS_LOADER_URL_REPLACEMENT_51___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_51___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden],\ntemplate {\n  display: none;\n}\n\nhtml {\n  background: #fff;\n  color: #000;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: sans-serif;\n}\n\nbody {\n  margin: 0;\n}\n\na {\n  background: transparent;\n}\na:focus {\n  outline: thin dotted;\n}\na:hover, a:active {\n  outline: 0;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nh2 {\n  font-size: 1.5em;\n  margin: 0.83em 0;\n}\n\nh3 {\n  font-size: 1.17em;\n  margin: 1em 0;\n}\n\nh4 {\n  font-size: 1em;\n  margin: 1.33em 0;\n}\n\nh5 {\n  font-size: 0.83em;\n  margin: 1.67em 0;\n}\n\nh6 {\n  font-size: 0.75em;\n  margin: 2.33em 0;\n}\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\ndfn {\n  font-style: italic;\n}\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, serif;\n  font-size: 1em;\n}\n\npre {\n  white-space: pre;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n\nq {\n  quotes: \"“\" \"”\" \"‘\" \"’\";\n}\n\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nimg {\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 0;\n}\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend {\n  border: 0;\n  padding: 0;\n  white-space: normal;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0;\n  vertical-align: baseline;\n}\n\nbutton,\ninput {\n  line-height: normal;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\nbutton[disabled],\ninput[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput[type=search] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\ninput[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ninput[type=checkbox], input[type=radio] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\n/* Colors  */\n/*  Font-size  */\nhtml {\n  font-size: 10px;\n}\n\n.body_dark {\n  position: relative;\n  background-color: #000000;\n}\n.body_dark::after {\n  z-index: -1;\n  content: \"\";\n  position: fixed;\n  background-color: #000000;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 500%;\n}\n\n.wrapper {\n  box-sizing: border-box;\n  padding: 20px 50px;\n  overflow: auto;\n}\n\n.hidden {\n  display: none;\n}\n\nul {\n  padding: 0; /*reset default settings*/\n}\n\n.wrapper_header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 15px;\n}\n\n.main-title {\n  font-size: 4em;\n  margin: 0;\n  text-align: center;\n}\n.main-title_dark {\n  color: #fff;\n}\n\n.levels,\n.custom-settings,\n.first-row {\n  display: flex;\n  margin: 0;\n  -webkit-column-gap: 20px;\n          column-gap: 20px;\n}\n\n.first-row {\n  align-items: center;\n}\n\n.custom-settings.hidden {\n  display: none;\n}\n\n.level,\n.results,\n.theme-swither-name {\n  list-style-type: none;\n  color: #000000;\n  font-size: 1.6em;\n}\n.level_active,\n.results_active,\n.theme-swither-name_active {\n  font-weight: bold;\n}\n.level:hover,\n.results:hover,\n.theme-swither-name:hover {\n  cursor: pointer;\n  color: #555;\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n}\n.level_dark,\n.results_dark,\n.theme-swither-name_dark {\n  color: #fff;\n}\n\n.results-table {\n  width: 80%;\n  display: flex;\n  flex-wrap: wrap;\n  border-top: solid 1px #000000;\n  border-left: solid 1px #000000;\n  border-right: solid 1px #000000;\n  box-sizing: border-box;\n  margin-bottom: 20px;\n}\n.results-table_dark {\n  border-top: solid 1px #fff;\n  border-left: solid 1px #fff;\n  border-right: solid 1px #fff;\n}\n\n.result-steps {\n  padding: 2px;\n  text-align: center;\n  font-size: 1.6em;\n  box-sizing: border-box;\n  width: 30%;\n  border-right: solid 1px #000000;\n  border-bottom: solid 1px #000000;\n}\n.result-steps_header {\n  font-weight: 600;\n}\n.result-steps_dark {\n  border-right: solid 1px #fff;\n  border-bottom: solid 1px #fff;\n  color: #fff;\n}\n\n.result-time {\n  padding: 2px;\n  text-align: center;\n  font-size: 1.6em;\n  box-sizing: border-box;\n  width: 70%;\n  border-bottom: solid 1px #000000;\n}\n.result-time_header {\n  font-weight: 600;\n}\n.result-time_dark {\n  border-bottom: solid 1px #fff;\n  color: #fff;\n}\n\n.swither-name {\n  list-style-type: none;\n  color: #000000;\n  font-size: 1.6em;\n}\n.swither-name_dark {\n  color: #fff;\n}\n\n.swither {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 27px;\n  font-size: 1.6em;\n  color: #000000;\n}\n\n.swither__input {\n  display: none;\n}\n\n.swither__span {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 34px;\n}\n.swither__span::before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  left: 4px;\n  bottom: 4px;\n  background-color: rgb(77, 75, 75);\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n.swither__input:checked + .swither__span {\n  background-color: red;\n}\n.swither__input:checked + .swither__span::before {\n  left: 25px;\n}\n\n.custom-settings {\n  margin: 0;\n  align-items: center;\n}\n\n.settings-item {\n  list-style-type: none;\n  color: #000000;\n  font-size: 1.6em;\n  font-weight: 600;\n}\n.settings-item_dark {\n  color: #fff;\n}\n\n.update-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 25px;\n  font-weight: 400;\n  letter-spacing: 0.01em;\n  border: solid 1px #000000;\n  border-radius: 15px;\n}\n.update-btn:hover {\n  cursor: pointer;\n  color: #555;\n}\n\n.update-btn.dark {\n  border: solid 1px #fff;\n}\n\n.game {\n  box-sizing: border-box;\n  margin: 0 auto;\n}\n\n.game__header,\n.game__field-container,\n.game__footer {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.game__header-container,\n.game__footer-container {\n  box-sizing: border-box;\n}\n\n.top-border,\n.middle-border,\n.bottom-border {\n  display: flex;\n  margin: 0;\n}\n\n/*  Corner  */\n.corner {\n  width: 18px;\n  height: 16.5px;\n  background-size: 100% 100%;\n}\n\n.left-top-corner {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.right-top-corner {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.left-middle-corner {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.right-middle-corner {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.left-bottom-corner {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n\n.right-bottom-corner {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n\n/* Lines  */\n.border-line {\n  height: 16.5px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n  background-size: contain;\n  background-size: 100% 100%;\n}\n\n.left-border,\n.right-border {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n  background-size: contain;\n  width: 18px;\n}\n\n.left-border_header,\n.right-border_header {\n  height: 48px;\n}\n\n/* header/footer container  */\n.game__header-container,\n.game__footer-container {\n  padding: 4.5px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #c0c0c0;\n}\n\n.game__header-container.dark,\n.game__footer-container.dark {\n  background-color: #5c5c5c;\n}\n\n/*  mines amount, timer, steps  */\n.mines-amount,\n.timer,\n.steps {\n  display: flex;\n  -webkit-column-gap: 3px;\n          column-gap: 3px;\n  padding: 3px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n  background-size: contain;\n}\n\n.num {\n  width: 16.5px;\n  height: 31.5px;\n}\n\n.num0 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n  background-size: contain;\n}\n\n.num1 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n  background-size: contain;\n}\n\n.num2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n  background-size: contain;\n}\n\n.num3 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n  background-size: contain;\n}\n\n.num4 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\n  background-size: contain;\n}\n\n.num5 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\n  background-size: contain;\n}\n\n.num6 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");\n  background-size: contain;\n}\n\n.num7 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ");\n  background-size: contain;\n}\n\n.num8 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ");\n  background-size: contain;\n}\n\n.num9 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ");\n  background-size: contain;\n}\n\n.num-minus {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ");\n  background-size: contain;\n}\n\n/*  smile  */\n.smile {\n  width: 39px;\n  height: 39px;\n  background-size: contain;\n}\n.smile:hover {\n  cursor: pointer;\n}\n.smile_unpressed {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");\n}\n.smile_pressed {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ");\n}\n.smile_active {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ");\n}\n.smile_lose {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");\n}\n\n.smile_unpressed.dark {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ");\n}\n\n.smile_lose.dark {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ");\n}\n\n.game__field {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.cell {\n  width: 24px;\n  height: 24px;\n  background-size: cover;\n}\n.cell:hover {\n  cursor: pointer;\n}\n.cell_opened {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ");\n}\n\n.cell_opened.dark {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ");\n}\n\n.cell_closed,\n.cell-mined_closed,\n.cell-one_closed,\n.cell-two_closed,\n.cell-three_closed,\n.cell-four_closed,\n.cell-five_closed,\n.cell-six_closed,\n.cell-seven_closed,\n.cell-eight_closed {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ");\n}\n\n.cell_closed.dark,\n.cell-mined_closed.dark,\n.cell-one_closed.dark,\n.cell-two_closed.dark,\n.cell-three_closed.dark,\n.cell-four_closed.dark,\n.cell-five_closed.dark,\n.cell-six_closed.dark,\n.cell-seven_closed.dark,\n.cell-eight_closed.dark {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ");\n}\n\n.flaged-right_cell_closed,\n.flaged-right_cell-mined_closed,\n.flaged-right_cell-one_closed,\n.flaged-right_cell-two_closed,\n.flaged-right_cell-three_closed,\n.flaged-right_cell-four_closed,\n.flaged-right_cell-five_closed,\n.flaged-right_cell-six_closed,\n.flaged-right_cell-seven_closed,\n.flaged-right_cell-eight_closed,\n.flaged-right_cell-mined_closed,\n.flaged-wrong_cell_closed,\n.flaged-wrong_cell-one_closed,\n.flaged-wrong_cell-two_closed,\n.flaged-wrong_cell-three_closed,\n.flaged-wrong_cell-four_closed,\n.flaged-wrong_cell-five_closed,\n.flaged-wrong_cell-six_closed,\n.flaged-wrong_cell-seven_closed,\n.flaged-wrong_cell-eight_closed {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_30___ + ");\n}\n\n.flaged-right_cell_closed.dark,\n.flaged-right_cell-mined_closed.dark,\n.flaged-right_cell-one_closed.dark,\n.flaged-right_cell-two_closed.dark,\n.flaged-right_cell-three_closed.dark,\n.flaged-right_cell-four_closed.dark,\n.flaged-right_cell-five_closed.dark,\n.flaged-right_cell-six_closed.dark,\n.flaged-right_cell-seven_closed.dark,\n.flaged-right_cell-eight_closed.dark,\n.flaged-right_cell-mined_closed.dark,\n.flaged-wrong_cell_closed.dark,\n.flaged-wrong_cell-one_closed.dark,\n.flaged-wrong_cell-two_closed.dark,\n.flaged-wrong_cell-three_closed.dark,\n.flaged-wrong_cell-four_closed.dark,\n.flaged-wrong_cell-five_closed.dark,\n.flaged-wrong_cell-six_closed.dark,\n.flaged-wrong_cell-seven_closed.dark,\n.flaged-wrong_cell-eight_closed.dark {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_31___ + ");\n}\n\n.flaged-wrong-red {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_32___ + ");\n}\n\n.cell-one_opened {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_33___ + ");\n}\n\n.cell-two_opened {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_34___ + ");\n}\n\n.cell-three_opened {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_35___ + ");\n}\n\n.cell-four_opened {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_36___ + ");\n}\n\n.cell-five_opened {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_37___ + ");\n}\n\n.cell-six_opened {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_38___ + ");\n}\n\n.cell-seven_opened {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_39___ + ");\n}\n\n.cell-eight_opened {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_40___ + ");\n}\n\n.cell-mined_opened-loss {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_41___ + ");\n}\n\n.cell-mined_opened {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_42___ + ");\n}\n\n.cell-one_opened.dark {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_43___ + ");\n}\n\n.cell-two_opened.dark {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_44___ + ");\n}\n\n.cell-three_opened.dark {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_45___ + ");\n}\n\n.cell-four_opened.dark {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_46___ + ");\n}\n\n.cell-five_opened.dark {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_47___ + ");\n}\n\n.cell-six_opened.dark {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_48___ + ");\n}\n\n.cell-seven_opened.dark {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_49___ + ");\n}\n\n.cell-eight_opened.dark {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_50___ + ");\n}\n\n.cell-mined_opened.dark {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_51___ + ");\n}\n\n.pop-up-wrapper {\n  transition: all 0.4s;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background: rgba(155, 152, 156, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.pop-up-wrapper_hidden {\n  display: none;\n}\n.pop-up-wrapper_dark {\n  background: rgba(155, 152, 156, 0.3);\n}\n\n.message-container {\n  transition: all 0.4s;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n  padding: 30px;\n  width: 500px;\n  background-color: #fff;\n  box-shadow: 5px 5px 5px #ccc;\n}\n.message-container_dark {\n  background-color: #000000;\n}\n\n.message-title {\n  text-align: center;\n  font-weight: 800;\n  color: rgb(135, 9, 9);\n  text-shadow: 5px 5px 5px #ccc;\n}\n.message-title_dark {\n  color: rgb(236, 253, 1);\n}\n\n.message-text {\n  text-align: center;\n  font-size: 1.5em;\n}\n.message-text_dark {\n  color: #fff;\n}\n\n.message-text.dark {\n  color: #fff;\n}\n\n.close-btn {\n  width: 80px;\n  height: 30px;\n  font-size: 1.6em;\n  border-radius: 20px;\n  background-color: #ccc;\n}\n.close-btn:hover {\n  cursor: pointer;\n  opacity: 0.8;\n  color: rgb(135, 9, 9);\n}\n.close-btn_dark {\n  background-color: #fff;\n}", "",{"version":3,"sources":["webpack://./minesweeper/src/style.scss","webpack://./minesweeper/src/style/_normalize.scss","webpack://./minesweeper/src/style/_abstracts.scss","webpack://./minesweeper/src/style/_base.scss","webpack://./minesweeper/src/style/_header.scss","webpack://./minesweeper/src/style/game/_game-container.scss","webpack://./minesweeper/src/style/_pop-up.scss"],"names":[],"mappings":"AAAA,gBAAgB;AC0ChB;;;;;;;;;;;EAWE,cAAA;ADxCF;;AC6CA;;;EAGE,qBAAA;AD1CF;;ACoDA;EACE,aAAA;EACA,SAAA;ADjDF;;ACyDA;;EAEE,aAAA;ADtDF;;ACkEA;EAIE,gBAlEW;EAmEX,WAlEM;EAmEN,8BAAA;EACA,0BAAA;ADlEF;;ACuEA;;;;;EAKE,uBAjGuB;AD6BzB;;ACyEA;EACE,SAAA;ADtEF;;ACkFA;EAGE,uBAAA;ADjFF;ACqFE;EACE,oBAAA;ADnFJ;ACwFE;EAEE,UAAA;ADvFJ;;ACmGE;EACE,cA3IW;EA4IX,gBArIQ;ADqCZ;;ACmGE;EACE,gBA/IW;EAgJX,gBAzIQ;ADyCZ;;ACmGE;EACE,iBAnJW;EAoJX,aA7IQ;AD6CZ;;ACmGE;EACE,cAvJW;EAwJX,gBAjJQ;ADiDZ;;ACmGE;EACE,iBA3JW;EA4JX,gBArJQ;ADqDZ;;ACmGE;EACE,iBA/JW;EAgKX,gBAzJQ;ADyDZ;;ACsGA;EACE,yBAAA;ADnGF;;ACwGA;;EAEE,iBAAA;ADrGF;;ACgHA;EACE,kBAAA;AD7GF;;ACkHA;EACE,gBAAA;EACA,WAAA;AD/GF;;AC6HA;;;;EAIE,6BAAA;EAIA,cAAA;AD7HF;;ACkIA;EACE,gBAAA;EACA,qBAAA;EACA,qBAAA;AD/HF;;ACoIA;EACE,uBAAA;ADjIF;;ACgJE;EAEE,WAAA;EACA,aAAA;AD9IJ;;ACoJA;EACE,cAAA;ADjJF;;ACuJA;;EAEE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;ADpJF;;ACuJA;EACE,WAAA;ADpJF;;ACuJA;EACE,eAAA;ADpJF;;ACuMA;EACE,SAAA;ADpMF;;AC4MA;EACE,gBAAA;ADzMF;;ACkNA;EACE,SAAA;AD/MF;;AC+NA;EACE,yBAAA;EACA,aAAA;EACA,8BAAA;AD5NF;;ACoOA;EACE,SAAA;EACA,UAAA;EACA,mBAAA;ADjOF;;AC4OA;;;;EAIE,oBAAA;EACA,eAAA;EACA,SAAA;EACA,wBAAA;ADzOF;;ACiPA;;EAEE,mBAAA;AD9OF;;ACsPA;;EAEE,oBAAA;ADnPF;;AC8PA;;;;EAIE,0BAAA;EACA,eAAA;AD3PF;;ACmQA;;EAEE,eAAA;ADhQF;;ACwQE;;EACE,SAAA;EACA,UAAA;ADpQJ;;AC2QA;EACE,cAAA;EACA,mBAAA;ADxQF;;ACiRA;EACE,yBAAA;EACA,iBAAA;AD9QF;;ACoRE;EACE,6BAAA;EAGA,uBAAA;ADjRJ;ACqRI;EAEE,wBAAA;ADpRN;AC4RE;EAEE,sBAAA;EACA,UAAA;AD3RJ;;AE5OA,YAAA;AAOA,gBAAA;ACPA;EACE,eDQe;AFyOjB;;AG9OA;EACE,kBAAA;EACA,yBDHgB;AFoPlB;AGhPE;EACE,WAAA;EACA,WAAA;EACA,eAAA;EACA,yBDRc;ECSd,SAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;AHkPJ;;AG/OA;EACE,sBAAA;EACA,kBAAA;EACA,cAAA;AHkPF;;AG/OA;EACE,aAAA;AHkPF;;AG/OA;EACE,UAAA,EAAA,yBAAA;AHkPF;;AI/QA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;AJkRF;;AIhRA;EACE,cAAA;EACA,SAAA;EACA,kBAAA;AJmRF;AIlRE;EACE,WHsBS;AD8Pb;;AIhRA;;;EAGE,aAAA;EACA,SAAA;EACA,wBAAA;UAAA,gBAAA;AJmRF;;AIhRA;EACE,mBAAA;AJmRF;;AIjRA;EACE,aAAA;AJoRF;;AIjRA;;;EAGE,qBAAA;EACA,cF/BgB;EEgChB,gBAAA;AJoRF;AInRE;;;EACE,iBAAA;AJuRJ;AIrRE;;;EACE,eAAA;EACA,WFrCe;EEsCf,kCAAA;EAAA,0BAAA;AJyRJ;AIvRE;;;EACE,WHZS;ADuSb;;AIvRA;EACE,UAAA;EACA,aAAA;EACA,eAAA;EACA,6BAAA;EACA,8BAAA;EACA,+BAAA;EACA,sBAAA;EACA,mBAAA;AJ0RF;AIzRE;EACE,0BAAA;EACA,2BAAA;EACA,4BAAA;AJ2RJ;;AIvRA;EACE,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,UAAA;EACA,+BAAA;EACA,gCAAA;AJ0RF;AIzRE;EACE,gBAAA;AJ2RJ;AIzRE;EACE,4BAAA;EACA,6BAAA;EACA,WH9CS;ADyUb;;AIxRA;EACE,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,UAAA;EACA,gCAAA;AJ2RF;AI1RE;EACE,gBAAA;AJ4RJ;AI1RE;EACE,6BAAA;EACA,WH7DS;ADyVb;;AIxRA;EACE,qBAAA;EACA,cFjGgB;EEkGhB,gBAAA;AJ2RF;AI1RE;EACE,WHtES;ADkWb;;AIxRA;EACE,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,cF9GgB;AFyYlB;;AIxRA;EACE,aAAA;AJ2RF;;AIxRA;EACE,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,sBAAA;EACA,gBAAA;EACA,mBAAA;AJ2RF;AI1RE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,iCAAA;EACA,gBAAA;EACA,kBAAA;AJ4RJ;;AIzRA;EACE,qBAAA;AJ4RF;AI3RE;EACE,UAAA;AJ6RJ;;AIzRA;EACE,SAAA;EACA,mBAAA;AJ4RF;;AI1RA;EACE,qBAAA;EACA,cFxJgB;EEyJhB,gBAAA;EACA,gBAAA;AJ6RF;AI5RE;EACE,WH9HS;AD4Zb;;AI1RA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,mBAAA;AJ6RF;AI5RE;EACE,eAAA;EACA,WF3Ke;AFycnB;;AI3RA;EACE,sBAAA;AJ8RF;;AKjdA;EACE,sBAAA;EACA,cAAA;ALodF;;AKldA;;;EAGE,aAAA;EACA,eAAA;EACA,uBAAA;ALqdF;;AKldA;;EAEE,sBAAA;ALqdF;;AKldA;;;EAGE,aAAA;EACA,SAAA;ALqdF;;AKldA,aAAA;AAEA;EACE,WAAA;EACA,cAAA;EACA,0BAAA;ALodF;;AKjdA;EACE,yDAAA;ALodF;;AKjdA;EACE,yDAAA;ALodF;;AKjdA;EACE,yDAAA;ALodF;;AKjdA;EACE,yDAAA;ALodF;;AKjdA;EACE,yDAAA;ALodF;;AKjdA;EACE,yDAAA;ALodF;;AKjdA,WAAA;AAEA;EACE,cAAA;EACA,yDAAA;EACA,wBAAA;EACA,0BAAA;ALmdF;;AKhdA;;EAEE,yDAAA;EACA,wBAAA;EACA,WAAA;ALmdF;;AKjdA;;EAEE,YAAA;ALodF;;AKjdA,6BAAA;AAEA;;EAEE,cAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,yBHlFW;AFqiBb;;AKjdA;;EAEE,yBAAA;ALodF;;AKldA,iCAAA;AAEA;;;EAGE,aAAA;EACA,uBAAA;UAAA,eAAA;EACA,YAAA;EACA,yDAAA;EACA,wBAAA;ALodF;;AKjdA;EACE,aAAA;EACA,cAAA;ALodF;;AKjdA;EACE,yDAAA;EACA,wBAAA;ALodF;;AKldA;EACE,0DAAA;EACA,wBAAA;ALqdF;;AKndA;EACE,0DAAA;EACA,wBAAA;ALsdF;;AKpdA;EACE,0DAAA;EACA,wBAAA;ALudF;;AKrdA;EACE,0DAAA;EACA,wBAAA;ALwdF;;AKtdA;EACE,0DAAA;EACA,wBAAA;ALydF;;AKvdA;EACE,0DAAA;EACA,wBAAA;AL0dF;;AKxdA;EACE,0DAAA;EACA,wBAAA;AL2dF;;AKzdA;EACE,0DAAA;EACA,wBAAA;AL4dF;;AK1dA;EACE,0DAAA;EACA,wBAAA;AL6dF;;AK3dA;EACE,0DAAA;EACA,wBAAA;AL8dF;;AK3dA,YAAA;AAEA;EACE,WAAA;EACA,YAAA;EACA,wBAAA;AL6dF;AK5dE;EACE,eAAA;AL8dJ;AK5dE;EACE,0DAAA;AL8dJ;AK5dE;EACE,0DAAA;AL8dJ;AK5dE;EACE,0DAAA;AL8dJ;AK5dE;EACE,0DAAA;AL8dJ;;AK3dA;EACE,0DAAA;AL8dF;;AK5dA;EACE,0DAAA;AL+dF;;AK7dA;EACE,aAAA;EACA,eAAA;ALgeF;;AK7dA;EACE,WAAA;EACA,YAAA;EACA,sBAAA;ALgeF;AK9dE;EACE,eAAA;ALgeJ;AK7dE;EACE,0DAAA;AL+dJ;;AK5dA;EACE,0DAAA;AL+dF;;AK5dA;;;;;;;;;;EAUE,0DAAA;AL+dF;;AK5dA;;;;;;;;;;EAUE,0DAAA;AL+dF;;AK5dA;;;;;;;;;;;;;;;;;;;;EAoBE,0DAAA;AL+dF;;AK7dA;;;;;;;;;;;;;;;;;;;;EAoBE,0DAAA;ALgeF;;AK7dA;EACE,0DAAA;ALgeF;;AK7dA;EACE,0DAAA;ALgeF;;AK9dA;EACE,0DAAA;ALieF;;AK/dA;EACE,0DAAA;ALkeF;;AKheA;EACE,0DAAA;ALmeF;;AKjeA;EACE,0DAAA;ALoeF;;AKleA;EACE,0DAAA;ALqeF;;AKneA;EACE,0DAAA;ALseF;;AKpeA;EACE,0DAAA;ALueF;;AKpeA;EACE,0DAAA;ALueF;;AKpeA;EACE,0DAAA;ALueF;;AKpeA;EACE,0DAAA;ALueF;;AKreA;EACE,0DAAA;ALweF;;AKteA;EACE,0DAAA;ALyeF;;AKveA;EACE,0DAAA;AL0eF;;AKxeA;EACE,0DAAA;AL2eF;;AKzeA;EACE,0DAAA;AL4eF;;AK1eA;EACE,0DAAA;AL6eF;;AK3eA;EACE,0DAAA;AL8eF;;AK5eA;EACE,0DAAA;AL+eF;;AM9zBA;EACE,oBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,oCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ANi0BF;AMh0BE;EACE,aAAA;ANk0BJ;AMh0BE;EACE,oCAAA;ANk0BJ;;AM/zBA;EACE,oBAAA;EACA,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,sBAAA;EACA,aAAA;EACA,YAAA;EACA,sBLMW;EKLX,4BAAA;ANk0BF;AMj0BE;EACE,yBJ3Bc;AF81BlB;;AM/zBA;EACE,kBAAA;EACA,gBAAA;EACA,qBAAA;EACA,6BAAA;ANk0BF;AMj0BE;EACE,uBAAA;ANm0BJ;;AM/zBA;EACE,kBAAA;EACA,gBAAA;ANk0BF;AMj0BE;EACE,WLfS;ADk1Bb;;AMh0BA;EACE,WLnBW;ADs1Bb;;AMh0BA;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;EACA,sBJvDa;AF03Bf;AMl0BE;EACE,eAAA;EACA,YAAA;EACA,qBAAA;ANo0BJ;AMl0BE;EACE,sBLlCS;ADs2Bb","sourcesContent":["@charset \"UTF-8\";\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden],\ntemplate {\n  display: none;\n}\n\nhtml {\n  background: #fff;\n  color: #000;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: sans-serif;\n}\n\nbody {\n  margin: 0;\n}\n\na {\n  background: transparent;\n}\na:focus {\n  outline: thin dotted;\n}\na:hover, a:active {\n  outline: 0;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nh2 {\n  font-size: 1.5em;\n  margin: 0.83em 0;\n}\n\nh3 {\n  font-size: 1.17em;\n  margin: 1em 0;\n}\n\nh4 {\n  font-size: 1em;\n  margin: 1.33em 0;\n}\n\nh5 {\n  font-size: 0.83em;\n  margin: 1.67em 0;\n}\n\nh6 {\n  font-size: 0.75em;\n  margin: 2.33em 0;\n}\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\ndfn {\n  font-style: italic;\n}\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, serif;\n  font-size: 1em;\n}\n\npre {\n  white-space: pre;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n\nq {\n  quotes: \"“\" \"”\" \"‘\" \"’\";\n}\n\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nimg {\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 0;\n}\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend {\n  border: 0;\n  padding: 0;\n  white-space: normal;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0;\n  vertical-align: baseline;\n}\n\nbutton,\ninput {\n  line-height: normal;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\nbutton[disabled],\ninput[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput[type=search] {\n  -webkit-appearance: textfield;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n}\ninput[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ninput[type=checkbox], input[type=radio] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\n/* Colors  */\n/*  Font-size  */\nhtml {\n  font-size: 10px;\n}\n\n.body_dark {\n  position: relative;\n  background-color: #000000;\n}\n.body_dark::after {\n  z-index: -1;\n  content: \"\";\n  position: fixed;\n  background-color: #000000;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 500%;\n}\n\n.wrapper {\n  box-sizing: border-box;\n  padding: 20px 50px;\n  overflow: auto;\n}\n\n.hidden {\n  display: none;\n}\n\nul {\n  padding: 0; /*reset default settings*/\n}\n\n.wrapper_header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 15px;\n}\n\n.main-title {\n  font-size: 4em;\n  margin: 0;\n  text-align: center;\n}\n.main-title_dark {\n  color: #fff;\n}\n\n.levels,\n.custom-settings,\n.first-row {\n  display: flex;\n  margin: 0;\n  column-gap: 20px;\n}\n\n.first-row {\n  align-items: center;\n}\n\n.custom-settings.hidden {\n  display: none;\n}\n\n.level,\n.results,\n.theme-swither-name {\n  list-style-type: none;\n  color: #000000;\n  font-size: 1.6em;\n}\n.level_active,\n.results_active,\n.theme-swither-name_active {\n  font-weight: bold;\n}\n.level:hover,\n.results:hover,\n.theme-swither-name:hover {\n  cursor: pointer;\n  color: #555;\n  text-decoration: underline;\n}\n.level_dark,\n.results_dark,\n.theme-swither-name_dark {\n  color: #fff;\n}\n\n.results-table {\n  width: 80%;\n  display: flex;\n  flex-wrap: wrap;\n  border-top: solid 1px #000000;\n  border-left: solid 1px #000000;\n  border-right: solid 1px #000000;\n  box-sizing: border-box;\n  margin-bottom: 20px;\n}\n.results-table_dark {\n  border-top: solid 1px #fff;\n  border-left: solid 1px #fff;\n  border-right: solid 1px #fff;\n}\n\n.result-steps {\n  padding: 2px;\n  text-align: center;\n  font-size: 1.6em;\n  box-sizing: border-box;\n  width: 30%;\n  border-right: solid 1px #000000;\n  border-bottom: solid 1px #000000;\n}\n.result-steps_header {\n  font-weight: 600;\n}\n.result-steps_dark {\n  border-right: solid 1px #fff;\n  border-bottom: solid 1px #fff;\n  color: #fff;\n}\n\n.result-time {\n  padding: 2px;\n  text-align: center;\n  font-size: 1.6em;\n  box-sizing: border-box;\n  width: 70%;\n  border-bottom: solid 1px #000000;\n}\n.result-time_header {\n  font-weight: 600;\n}\n.result-time_dark {\n  border-bottom: solid 1px #fff;\n  color: #fff;\n}\n\n.swither-name {\n  list-style-type: none;\n  color: #000000;\n  font-size: 1.6em;\n}\n.swither-name_dark {\n  color: #fff;\n}\n\n.swither {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 27px;\n  font-size: 1.6em;\n  color: #000000;\n}\n\n.swither__input {\n  display: none;\n}\n\n.swither__span {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 34px;\n}\n.swither__span::before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  left: 4px;\n  bottom: 4px;\n  background-color: rgb(77, 75, 75);\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n.swither__input:checked + .swither__span {\n  background-color: red;\n}\n.swither__input:checked + .swither__span::before {\n  left: 25px;\n}\n\n.custom-settings {\n  margin: 0;\n  align-items: center;\n}\n\n.settings-item {\n  list-style-type: none;\n  color: #000000;\n  font-size: 1.6em;\n  font-weight: 600;\n}\n.settings-item_dark {\n  color: #fff;\n}\n\n.update-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 25px;\n  font-weight: 400;\n  letter-spacing: 0.01em;\n  border: solid 1px #000000;\n  border-radius: 15px;\n}\n.update-btn:hover {\n  cursor: pointer;\n  color: #555;\n}\n\n.update-btn.dark {\n  border: solid 1px #fff;\n}\n\n.game {\n  box-sizing: border-box;\n  margin: 0 auto;\n}\n\n.game__header,\n.game__field-container,\n.game__footer {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.game__header-container,\n.game__footer-container {\n  box-sizing: border-box;\n}\n\n.top-border,\n.middle-border,\n.bottom-border {\n  display: flex;\n  margin: 0;\n}\n\n/*  Corner  */\n.corner {\n  width: 18px;\n  height: 16.5px;\n  background-size: 100% 100%;\n}\n\n.left-top-corner {\n  background-image: url(\"../../img/field-borders/corner_up_left_2x.png\");\n}\n\n.right-top-corner {\n  background-image: url(\"../../img/field-borders/corner_up_right_2x.png\");\n}\n\n.left-middle-corner {\n  background-image: url(\"../../img/field-borders/t_left_2x.png\");\n}\n\n.right-middle-corner {\n  background-image: url(\"../../img/field-borders/t_right_2x.png\");\n}\n\n.left-bottom-corner {\n  background-image: url(\"../../img/field-borders/corner_bottom_left_2x.png\");\n}\n\n.right-bottom-corner {\n  background-image: url(\"../../img/field-borders/corner_bottom_right_2x.png\");\n}\n\n/* Lines  */\n.border-line {\n  height: 16.5px;\n  background-image: url(\"../../img/field-borders/border_hor_2x.png\");\n  background-size: contain;\n  background-size: 100% 100%;\n}\n\n.left-border,\n.right-border {\n  background-image: url(\"../../img/field-borders/border_vert_2x.png\");\n  background-size: contain;\n  width: 18px;\n}\n\n.left-border_header,\n.right-border_header {\n  height: 48px;\n}\n\n/* header/footer container  */\n.game__header-container,\n.game__footer-container {\n  padding: 4.5px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #c0c0c0;\n}\n\n.game__header-container.dark,\n.game__footer-container.dark {\n  background-color: #5c5c5c;\n}\n\n/*  mines amount, timer, steps  */\n.mines-amount,\n.timer,\n.steps {\n  display: flex;\n  column-gap: 3px;\n  padding: 3px;\n  background-image: url(\"../../img/numbers-field/nums_background.svg\");\n  background-size: contain;\n}\n\n.num {\n  width: 16.5px;\n  height: 31.5px;\n}\n\n.num0 {\n  background-image: url(\"../../img/numbers-field/d0.svg\");\n  background-size: contain;\n}\n\n.num1 {\n  background-image: url(\"../../img/numbers-field/d1.svg\");\n  background-size: contain;\n}\n\n.num2 {\n  background-image: url(\"../../img/numbers-field/d2.svg\");\n  background-size: contain;\n}\n\n.num3 {\n  background-image: url(\"../../img/numbers-field/d3.svg\");\n  background-size: contain;\n}\n\n.num4 {\n  background-image: url(\"../../img/numbers-field/d4.svg\");\n  background-size: contain;\n}\n\n.num5 {\n  background-image: url(\"../../img/numbers-field/d5.svg\");\n  background-size: contain;\n}\n\n.num6 {\n  background-image: url(\"../../img/numbers-field/d6.svg\");\n  background-size: contain;\n}\n\n.num7 {\n  background-image: url(\"../../img/numbers-field/d7.svg\");\n  background-size: contain;\n}\n\n.num8 {\n  background-image: url(\"../../img/numbers-field/d8.svg\");\n  background-size: contain;\n}\n\n.num9 {\n  background-image: url(\"../../img/numbers-field/d9.svg\");\n  background-size: contain;\n}\n\n.num-minus {\n  background-image: url(\"../../img/numbers-field/minus.svg\");\n  background-size: contain;\n}\n\n/*  smile  */\n.smile {\n  width: 39px;\n  height: 39px;\n  background-size: contain;\n}\n.smile:hover {\n  cursor: pointer;\n}\n.smile_unpressed {\n  background-image: url(\"../../img/buttons/face_unpressed.svg\");\n}\n.smile_pressed {\n  background-image: url(\"../../img/buttons/face_pressed.svg\");\n}\n.smile_active {\n  background-image: url(\"../../img/buttons/face_active.svg\");\n}\n.smile_lose {\n  background-image: url(\"../../img/buttons/face_lose.svg\");\n}\n\n.smile_unpressed.dark {\n  background-image: url(\"../../img/buttons/face_unpressed_dark.svg\");\n}\n\n.smile_lose.dark {\n  background-image: url(\"../../img/buttons/face_lose_dark.svg\");\n}\n\n.game__field {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.cell {\n  width: 24px;\n  height: 24px;\n  background-size: cover;\n}\n.cell:hover {\n  cursor: pointer;\n}\n.cell_opened {\n  background-image: url(\"../../img/buttons/pressed.svg\");\n}\n\n.cell_opened.dark {\n  background-image: url(\"../../img/buttons/pressed_dark.svg\");\n}\n\n.cell_closed,\n.cell-mined_closed,\n.cell-one_closed,\n.cell-two_closed,\n.cell-three_closed,\n.cell-four_closed,\n.cell-five_closed,\n.cell-six_closed,\n.cell-seven_closed,\n.cell-eight_closed {\n  background-image: url(\"../../img/buttons/closed.svg\");\n}\n\n.cell_closed.dark,\n.cell-mined_closed.dark,\n.cell-one_closed.dark,\n.cell-two_closed.dark,\n.cell-three_closed.dark,\n.cell-four_closed.dark,\n.cell-five_closed.dark,\n.cell-six_closed.dark,\n.cell-seven_closed.dark,\n.cell-eight_closed.dark {\n  background-image: url(\"../../img/buttons/closed_dark.svg\");\n}\n\n.flaged-right_cell_closed,\n.flaged-right_cell-mined_closed,\n.flaged-right_cell-one_closed,\n.flaged-right_cell-two_closed,\n.flaged-right_cell-three_closed,\n.flaged-right_cell-four_closed,\n.flaged-right_cell-five_closed,\n.flaged-right_cell-six_closed,\n.flaged-right_cell-seven_closed,\n.flaged-right_cell-eight_closed,\n.flaged-right_cell-mined_closed,\n.flaged-wrong_cell_closed,\n.flaged-wrong_cell-one_closed,\n.flaged-wrong_cell-two_closed,\n.flaged-wrong_cell-three_closed,\n.flaged-wrong_cell-four_closed,\n.flaged-wrong_cell-five_closed,\n.flaged-wrong_cell-six_closed,\n.flaged-wrong_cell-seven_closed,\n.flaged-wrong_cell-eight_closed {\n  background-image: url(\"../../img/buttons/flag.svg\");\n}\n\n.flaged-right_cell_closed.dark,\n.flaged-right_cell-mined_closed.dark,\n.flaged-right_cell-one_closed.dark,\n.flaged-right_cell-two_closed.dark,\n.flaged-right_cell-three_closed.dark,\n.flaged-right_cell-four_closed.dark,\n.flaged-right_cell-five_closed.dark,\n.flaged-right_cell-six_closed.dark,\n.flaged-right_cell-seven_closed.dark,\n.flaged-right_cell-eight_closed.dark,\n.flaged-right_cell-mined_closed.dark,\n.flaged-wrong_cell_closed.dark,\n.flaged-wrong_cell-one_closed.dark,\n.flaged-wrong_cell-two_closed.dark,\n.flaged-wrong_cell-three_closed.dark,\n.flaged-wrong_cell-four_closed.dark,\n.flaged-wrong_cell-five_closed.dark,\n.flaged-wrong_cell-six_closed.dark,\n.flaged-wrong_cell-seven_closed.dark,\n.flaged-wrong_cell-eight_closed.dark {\n  background-image: url(\"../../img/buttons/flag_dark.svg\");\n}\n\n.flaged-wrong-red {\n  background-image: url(\"../../img/buttons/mine_wrong.svg\");\n}\n\n.cell-one_opened {\n  background-image: url(\"../../img/buttons/bombs-number/type1.svg\");\n}\n\n.cell-two_opened {\n  background-image: url(\"../../img/buttons/bombs-number/type2.svg\");\n}\n\n.cell-three_opened {\n  background-image: url(\"../../img/buttons/bombs-number/type3.svg\");\n}\n\n.cell-four_opened {\n  background-image: url(\"../../img/buttons/bombs-number/type4.svg\");\n}\n\n.cell-five_opened {\n  background-image: url(\"../../img/buttons/bombs-number/type5.svg\");\n}\n\n.cell-six_opened {\n  background-image: url(\"../../img/buttons/bombs-number/type6.svg\");\n}\n\n.cell-seven_opened {\n  background-image: url(\"../../img/buttons/bombs-number/type7.svg\");\n}\n\n.cell-eight_opened {\n  background-image: url(\"../../img/buttons/bombs-number/type8.svg\");\n}\n\n.cell-mined_opened-loss {\n  background-image: url(\"../../img/buttons/mine_red.svg\");\n}\n\n.cell-mined_opened {\n  background-image: url(\"../../img/buttons/mine.svg\");\n}\n\n.cell-one_opened.dark {\n  background-image: url(\"../../img/buttons/bombs-number/type1_yellow.svg\");\n}\n\n.cell-two_opened.dark {\n  background-image: url(\"../../img/buttons/bombs-number/type2_yellow.svg\");\n}\n\n.cell-three_opened.dark {\n  background-image: url(\"../../img/buttons/bombs-number/type3_yellow.svg\");\n}\n\n.cell-four_opened.dark {\n  background-image: url(\"../../img/buttons/bombs-number/type4_yellow.svg\");\n}\n\n.cell-five_opened.dark {\n  background-image: url(\"../../img/buttons/bombs-number/type5_yellow.svg\");\n}\n\n.cell-six_opened.dark {\n  background-image: url(\"../../img/buttons/bombs-number/type6_yellow.svg\");\n}\n\n.cell-seven_opened.dark {\n  background-image: url(\"../../img/buttons/bombs-number/type7_yellow.svg\");\n}\n\n.cell-eight_opened.dark {\n  background-image: url(\"../../img/buttons/bombs-number/type8_yellow.svg\");\n}\n\n.cell-mined_opened.dark {\n  background-image: url(\"../../img/buttons/mine_dark.svg\");\n}\n\n.pop-up-wrapper {\n  transition: all 0.4s;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background: rgba(155, 152, 156, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.pop-up-wrapper_hidden {\n  display: none;\n}\n.pop-up-wrapper_dark {\n  background: rgba(155, 152, 156, 0.3);\n}\n\n.message-container {\n  transition: all 0.4s;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n  padding: 30px;\n  width: 500px;\n  background-color: #fff;\n  box-shadow: 5px 5px 5px #ccc;\n}\n.message-container_dark {\n  background-color: #000000;\n}\n\n.message-title {\n  text-align: center;\n  font-weight: 800;\n  color: rgb(135, 9, 9);\n  text-shadow: 5px 5px 5px #ccc;\n}\n.message-title_dark {\n  color: rgb(236, 253, 1);\n}\n\n.message-text {\n  text-align: center;\n  font-size: 1.5em;\n}\n.message-text_dark {\n  color: #fff;\n}\n\n.message-text.dark {\n  color: #fff;\n}\n\n.close-btn {\n  width: 80px;\n  height: 30px;\n  font-size: 1.6em;\n  border-radius: 20px;\n  background-color: #ccc;\n}\n.close-btn:hover {\n  cursor: pointer;\n  opacity: 0.8;\n  color: rgb(135, 9, 9);\n}\n.close-btn_dark {\n  background-color: #fff;\n}","// =============================================================================\r\n// Normalize.scss based on Nicolas Gallagher and Jonathan Neal's\r\n// normalize.css v2.1.3 | MIT License | git.io/normalize\r\n// =============================================================================\r\n\r\n// =============================================================================\r\n// Normalize.scss settings\r\n// =============================================================================\r\n\r\n// Set to true if you want to add support for IE6 and IE7\r\n// Notice: setting to true might render some elements\r\n// slightly differently than when set to false\r\n$legacy_support_for_ie: false !default; // Used also in Compass\r\n\r\n// Set the default font family here so you don't have to override it later\r\n$normalized_font_family: sans-serif !default;\r\n\r\n$normalize_headings: true !default;\r\n\r\n$h1_font_size: 2em !default;\r\n$h2_font_size: 1.5em !default;\r\n$h3_font_size: 1.17em !default;\r\n$h4_font_size: 1em !default;\r\n$h5_font_size: 0.83em !default;\r\n$h6_font_size: 0.75em !default;\r\n\r\n$h1_margin: 0.67em 0 !default;\r\n$h2_margin: 0.83em 0 !default;\r\n$h3_margin: 1em 0 !default;\r\n$h4_margin: 1.33em 0 !default;\r\n$h5_margin: 1.67em 0 !default;\r\n$h6_margin: 2.33em 0 !default;\r\n\r\n$background: #fff !default;\r\n$color: #000 !default;\r\n\r\n// =============================================================================\r\n// HTML5 display definitions\r\n// =============================================================================\r\n\r\n// Corrects block display not defined in IE6/7/8/9 & FF3\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nnav,\r\nsection,\r\nsummary {\r\n  display: block;\r\n}\r\n\r\n// Corrects inline-block display not defined in IE6/7/8/9 & FF3\r\n\r\naudio,\r\ncanvas,\r\nvideo {\r\n  display: inline-block;\r\n  @if $legacy_support_for_ie {\r\n    *display: inline;\r\n    *zoom: 1;\r\n  }\r\n}\r\n\r\n// 1. Prevents modern browsers from displaying 'audio' without controls\r\n// 2. Remove excess height in iOS5 devices\r\n\r\naudio:not([controls]) {\r\n  display: none; // 1\r\n  height: 0; // 2\r\n}\r\n\r\n//\r\n// Address `[hidden]` styling not present in IE 8/9.\r\n// Hide the `template` element in IE, Safari, and Firefox < 22.\r\n//\r\n\r\n[hidden],\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n// =============================================================================\r\n// Base\r\n// =============================================================================\r\n\r\n// 1. Corrects text resizing oddly in IE6/7 when body font-size is set using em units\r\n//    http://clagnut.com/blog/348/#c790\r\n// 2. Prevents iOS text size adjust after orientation change, without disabling user zoom\r\n//    www.456bereastreet.com/archive/201012/controlling_text_size_in_safari_for_ios_without_disabling_user_zoom/\r\n\r\nhtml {\r\n  @if $legacy_support_for_ie {\r\n    font-size: 100%; // 1\r\n  }\r\n  background: $background;\r\n  color: $color;\r\n  -webkit-text-size-adjust: 100%; // 2\r\n  -ms-text-size-adjust: 100%; // 2\r\n}\r\n\r\n// Addresses font-family inconsistency between 'textarea' and other form elements.\r\n\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n  font-family: $normalized_font_family;\r\n}\r\n\r\n// Addresses margins handled incorrectly in IE6/7\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n// =============================================================================\r\n// Links\r\n// =============================================================================\r\n\r\n// 1. Remove the gray background color from active links in IE 10.\r\n// 2. Addresses outline displayed oddly in Chrome\r\n// 3. Improves readability when focused and also mouse hovered in all browsers\r\n//    people.opera.com/patrickl/experiments/keyboard/test\r\n\r\na {\r\n  // 1\r\n\r\n  background: transparent;\r\n\r\n  // 2\r\n\r\n  &:focus {\r\n    outline: thin dotted;\r\n  }\r\n\r\n  // 3\r\n\r\n  &:hover,\r\n  &:active {\r\n    outline: 0;\r\n  }\r\n}\r\n\r\n// =============================================================================\r\n// Typography\r\n// =============================================================================\r\n\r\n// Addresses font sizes and margins set differently in IE6/7\r\n// Addresses font sizes within 'section' and 'article' in FF4+, Chrome, S5\r\n\r\n@if $normalize_headings == true {\r\n  h1 {\r\n    font-size: $h1_font_size;\r\n    margin: $h1_margin;\r\n  }\r\n\r\n  h2 {\r\n    font-size: $h2_font_size;\r\n    margin: $h2_margin;\r\n  }\r\n\r\n  h3 {\r\n    font-size: $h3_font_size;\r\n    margin: $h3_margin;\r\n  }\r\n\r\n  h4 {\r\n    font-size: $h4_font_size;\r\n    margin: $h4_margin;\r\n  }\r\n\r\n  h5 {\r\n    font-size: $h5_font_size;\r\n    margin: $h5_margin;\r\n  }\r\n\r\n  h6 {\r\n    font-size: $h6_font_size;\r\n    margin: $h6_margin;\r\n  }\r\n}\r\n\r\n// Addresses styling not present in IE 8/9, S5, Chrome\r\n\r\nabbr[title] {\r\n  border-bottom: 1px dotted;\r\n}\r\n\r\n// Addresses style set to 'bolder' in FF3+, S4/5, Chrome\r\n\r\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n\r\n@if $legacy_support_for_ie {\r\n  blockquote {\r\n    margin: 1em 40px;\r\n  }\r\n}\r\n\r\n// Addresses styling not present in S5, Chrome\r\n\r\ndfn {\r\n  font-style: italic;\r\n}\r\n\r\n// Addresses styling not present in IE6/7/8/9\r\n\r\nmark {\r\n  background: #ff0;\r\n  color: #000;\r\n}\r\n\r\n// Addresses margins set differently in IE6/7\r\n@if $legacy_support_for_ie {\r\n  p,\r\n  pre {\r\n    margin: 1em 0;\r\n  }\r\n}\r\n\r\n// Corrects font family set oddly in IE6, S4/5, Chrome\r\n// en.wikipedia.org/wiki/User:Davidgothberg/Test59\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, serif;\r\n  @if $legacy_support_for_ie {\r\n    _font-family: \"courier new\", monospace;\r\n  }\r\n  font-size: 1em;\r\n}\r\n\r\n// Improves readability of pre-formatted text in all browsers\r\n\r\npre {\r\n  white-space: pre;\r\n  white-space: pre-wrap;\r\n  word-wrap: break-word;\r\n}\r\n\r\n// Set consistent quote types.\r\n\r\nq {\r\n  quotes: \"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";\r\n}\r\n\r\n// 1. Addresses CSS quotes not supported in IE6/7\r\n// 2. Addresses quote property not supported in S4\r\n\r\n// 1\r\n@if $legacy_support_for_ie {\r\n  q {\r\n    quotes: none;\r\n  }\r\n}\r\n\r\n// 2\r\nq {\r\n  &:before,\r\n  &:after {\r\n    content: \"\";\r\n    content: none;\r\n  }\r\n}\r\n\r\n// Address inconsistent and variable font size in all browsers.\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n// Prevents sub and sup affecting line-height in all browsers\r\n// gist.github.com/413930\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\n// =============================================================================\r\n// Lists\r\n// =============================================================================\r\n\r\n// Addresses margins set differently in IE6/7\r\n@if $legacy_support_for_ie {\r\n  dl,\r\n  menu,\r\n  ol,\r\n  ul {\r\n    margin: 1em 0;\r\n  }\r\n}\r\n\r\n@if $legacy_support_for_ie {\r\n  dd {\r\n    margin: 0 0 0 40px;\r\n  }\r\n}\r\n\r\n// Addresses paddings set differently in IE6/7\r\n@if $legacy_support_for_ie {\r\n  menu,\r\n  ol,\r\n  ul {\r\n    padding: 0 0 0 40px;\r\n  }\r\n}\r\n\r\n// Corrects list images handled incorrectly in IE7\r\n\r\nnav {\r\n  ul,\r\n  ol {\r\n    @if $legacy_support_for_ie {\r\n      list-style-image: none;\r\n    }\r\n  }\r\n}\r\n\r\n// =============================================================================\r\n// Embedded content\r\n// =============================================================================\r\n\r\n// 1. Removes border when inside 'a' element in IE6/7/8/9, FF3\r\n// 2. Improves image quality when scaled in IE7\r\n//    code.flickr.com/blog/2008/11/12/on-ui-quality-the-little-things-client-side-image-resizing/\r\n\r\nimg {\r\n  border: 0; // 1\r\n  @if $legacy_support_for_ie {\r\n    -ms-interpolation-mode: bicubic; // 2\r\n  }\r\n}\r\n\r\n// Corrects overflow displayed oddly in IE9\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\n// =============================================================================\r\n// Figures\r\n// =============================================================================\r\n\r\n// Addresses margin not present in IE6/7/8/9, S5, O11\r\n\r\nfigure {\r\n  margin: 0;\r\n}\r\n\r\n// =============================================================================\r\n// Forms\r\n// =============================================================================\r\n\r\n// Corrects margin displayed oddly in IE6/7\r\n@if $legacy_support_for_ie {\r\n  form {\r\n    margin: 0;\r\n  }\r\n}\r\n\r\n// Define consistent border, margin, and padding\r\n\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n// 1. Corrects color not being inherited in IE6/7/8/9\r\n// 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n// 3. Corrects text not wrapping in FF3\r\n// 4. Corrects alignment displayed oddly in IE6/7\r\n\r\nlegend {\r\n  border: 0; // 1\r\n  padding: 0; // 2\r\n  white-space: normal; // 3\r\n  @if $legacy_support_for_ie {\r\n    *margin-left: -7px; // 4\r\n  }\r\n}\r\n\r\n// 1. Correct font family not being inherited in all browsers.\r\n// 2. Corrects font size not being inherited in all browsers\r\n// 3. Addresses margins set differently in IE6/7, FF3+, S5, Chrome\r\n// 4. Improves appearance and consistency in all browsers\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; // 1\r\n  font-size: 100%; // 2\r\n  margin: 0; // 3\r\n  vertical-align: baseline; // 4\r\n  @if $legacy_support_for_ie {\r\n    *vertical-align: middle; // 4\r\n  }\r\n}\r\n\r\n// Addresses FF3/4 setting line-height on 'input' using !important in the UA stylesheet\r\n\r\nbutton,\r\ninput {\r\n  line-height: normal;\r\n}\r\n\r\n// Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n// All other form control elements do not inherit `text-transform` values.\r\n// Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\r\n// Correct `select` style inheritance in Firefox 4+ and Opera.\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\n// 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n//    and `video` controls\r\n// 2. Corrects inability to style clickable 'input' types in iOS\r\n// 3. Improves usability and consistency of cursor style between image-type\r\n//    'input' and others\r\n// 4. Removes inner spacing in IE7 without affecting normal text inputs\r\n//    Known issue: inner spacing remains in IE6\r\n\r\nbutton,\r\nhtml input[type=\"button\"], // 1\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n  -webkit-appearance: button; // 2\r\n  cursor: pointer; // 3\r\n  @if $legacy_support_for_ie {\r\n    *overflow: visible; // 4\r\n  }\r\n}\r\n\r\n// Re-set default cursor for disabled elements\r\n\r\nbutton[disabled],\r\ninput[disabled] {\r\n  cursor: default;\r\n}\r\n\r\n// Removes inner padding and border in FF3+\r\n// www.sitepen.com/blog/2008/05/14/the-devils-in-the-details-fixing-dojos-toolbar-buttons/\r\n\r\nbutton,\r\ninput {\r\n  &::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n  }\r\n}\r\n\r\n// 1. Removes default vertical scrollbar in IE6/7/8/9\r\n// 2. Improves readability and alignment in all browsers\r\n\r\ntextarea {\r\n  overflow: auto; // 1\r\n  vertical-align: top; // 2\r\n}\r\n\r\n// =============================================================================\r\n// Tables\r\n// =============================================================================\r\n\r\n// Remove most spacing between table cells\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\ninput {\r\n  // 1. Addresses appearance set to searchfield in S5, Chrome\r\n  // 2. Addresses box-sizing set to border-box in S5, Chrome (include -moz to future-proof)\r\n  &[type=\"search\"] {\r\n    -webkit-appearance: textfield; // 1\r\n    -moz-box-sizing: content-box;\r\n    -webkit-box-sizing: content-box; // 2\r\n    box-sizing: content-box;\r\n\r\n    // Remove inner padding and search cancel button in Safari 5 and Chrome\r\n    // on OS X.\r\n    &::-webkit-search-cancel-button,\r\n    &::-webkit-search-decoration {\r\n      -webkit-appearance: none;\r\n    }\r\n  }\r\n\r\n  // 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n  // 2. Remove excess padding in IE 8/9/10.\r\n  // 3. Removes excess padding in IE7\r\n  //    Known issue: excess padding remains in IE6\r\n  &[type=\"checkbox\"],\r\n  &[type=\"radio\"] {\r\n    box-sizing: border-box; // 1\r\n    padding: 0; // 2\r\n    @if $legacy_support_for_ie {\r\n      *height: 13px; // 3\r\n      *width: 13px; // 3\r\n    }\r\n  }\r\n}\r\n","/* Colors  */\r\n\r\n$main-color: #c0c0c0;\r\n$dark-text-color: #000000;\r\n$light-text-color: #555;\r\n$border-color: #ccc;\r\n\r\n/*  Font-size  */\r\n\r\n$base-font-size: 10px;\r\n","html {\r\n  font-size: $base-font-size;\r\n}\r\n\r\n.body_dark {\r\n  position: relative;\r\n  background-color: $dark-text-color;\r\n  &::after {\r\n    z-index: -1;\r\n    content: \"\";\r\n    position: fixed;\r\n    background-color: $dark-text-color;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 500%;\r\n  }\r\n}\r\n.wrapper {\r\n  box-sizing: border-box;\r\n  padding: 20px 50px;\r\n  overflow: auto;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\nul {\r\n  padding: 0; /*reset default settings*/\r\n}\r\n",".wrapper_header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  row-gap: 15px;\r\n}\r\n.main-title {\r\n  font-size: 4em;\r\n  margin: 0;\r\n  text-align: center;\r\n  &_dark {\r\n    color: $background;\r\n  }\r\n}\r\n\r\n.levels,\r\n.custom-settings,\r\n.first-row {\r\n  display: flex;\r\n  margin: 0;\r\n  column-gap: 20px;\r\n}\r\n\r\n.first-row {\r\n  align-items: center;\r\n}\r\n.custom-settings.hidden {\r\n  display: none;\r\n}\r\n\r\n.level,\r\n.results,\r\n.theme-swither-name {\r\n  list-style-type: none;\r\n  color: $dark-text-color;\r\n  font-size: 1.6em;\r\n  &_active {\r\n    font-weight: bold;\r\n  }\r\n  &:hover {\r\n    cursor: pointer;\r\n    color: $light-text-color;\r\n    text-decoration: underline;\r\n  }\r\n  &_dark {\r\n    color: $background;\r\n  }\r\n}\r\n\r\n.results-table {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  border-top: solid 1px $dark-text-color;\r\n  border-left: solid 1px $dark-text-color;\r\n  border-right: solid 1px $dark-text-color;\r\n  box-sizing: border-box;\r\n  margin-bottom: 20px;\r\n  &_dark {\r\n    border-top: solid 1px $background;\r\n    border-left: solid 1px $background;\r\n    border-right: solid 1px $background;\r\n  }\r\n}\r\n\r\n.result-steps {\r\n  padding: 2px;\r\n  text-align: center;\r\n  font-size: 1.6em;\r\n  box-sizing: border-box;\r\n  width: 30%;\r\n  border-right: solid 1px $dark-text-color;\r\n  border-bottom: solid 1px $dark-text-color;\r\n  &_header {\r\n    font-weight: 600;\r\n  }\r\n  &_dark {\r\n    border-right: solid 1px $background;\r\n    border-bottom: solid 1px $background;\r\n    color: $background;\r\n  }\r\n}\r\n.result-time {\r\n  padding: 2px;\r\n  text-align: center;\r\n  font-size: 1.6em;\r\n  box-sizing: border-box;\r\n  width: 70%;\r\n  border-bottom: solid 1px $dark-text-color;\r\n  &_header {\r\n    font-weight: 600;\r\n  }\r\n  &_dark {\r\n    border-bottom: solid 1px $background;\r\n    color: $background;\r\n  }\r\n}\r\n\r\n.swither-name {\r\n  list-style-type: none;\r\n  color: $dark-text-color;\r\n  font-size: 1.6em;\r\n  &_dark {\r\n    color: $background;\r\n  }\r\n}\r\n\r\n.swither {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 50px;\r\n  height: 27px;\r\n  font-size: 1.6em;\r\n  color: $dark-text-color;\r\n}\r\n\r\n.swither__input {\r\n  display: none;\r\n}\r\n\r\n.swither__span {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  transition: 0.4s;\r\n  border-radius: 34px;\r\n  &::before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 20px;\r\n    width: 20px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: rgb(77, 75, 75);\r\n    transition: 0.4s;\r\n    border-radius: 50%;\r\n  }\r\n}\r\n.swither__input:checked + .swither__span {\r\n  background-color: red;\r\n  &::before {\r\n    left: 25px;\r\n  }\r\n}\r\n\r\n.custom-settings {\r\n  margin: 0;\r\n  align-items: center;\r\n}\r\n.settings-item {\r\n  list-style-type: none;\r\n  color: $dark-text-color;\r\n  font-size: 1.6em;\r\n  font-weight: 600;\r\n  &_dark {\r\n    color: $background;\r\n  }\r\n}\r\n\r\n.update-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 60px;\r\n  height: 25px;\r\n  font-weight: 400;\r\n  letter-spacing: 0.01em;\r\n  border: solid 1px $dark-text-color;\r\n  border-radius: 15px;\r\n  &:hover {\r\n    cursor: pointer;\r\n    color: $light-text-color;\r\n  }\r\n}\r\n.update-btn.dark {\r\n  border: solid 1px $background;\r\n}\r\n",".game {\r\n  box-sizing: border-box;\r\n  margin: 0 auto;\r\n}\r\n.game__header,\r\n.game__field-container,\r\n.game__footer {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.game__header-container,\r\n.game__footer-container {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.top-border,\r\n.middle-border,\r\n.bottom-border {\r\n  display: flex;\r\n  margin: 0;\r\n}\r\n\r\n/*  Corner  */\r\n\r\n.corner {\r\n  width: 18px;\r\n  height: 16.5px;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.left-top-corner {\r\n  background-image: url(\"../../img/field-borders/corner_up_left_2x.png\");\r\n}\r\n\r\n.right-top-corner {\r\n  background-image: url(\"../../img/field-borders/corner_up_right_2x.png\");\r\n}\r\n\r\n.left-middle-corner {\r\n  background-image: url(\"../../img/field-borders/t_left_2x.png\");\r\n}\r\n\r\n.right-middle-corner {\r\n  background-image: url(\"../../img/field-borders/t_right_2x.png\");\r\n}\r\n\r\n.left-bottom-corner {\r\n  background-image: url(\"../../img/field-borders/corner_bottom_left_2x.png\");\r\n}\r\n\r\n.right-bottom-corner {\r\n  background-image: url(\"../../img/field-borders/corner_bottom_right_2x.png\");\r\n}\r\n\r\n/* Lines  */\r\n\r\n.border-line {\r\n  height: 16.5px;\r\n  background-image: url(\"../../img/field-borders/border_hor_2x.png\");\r\n  background-size: contain;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.left-border,\r\n.right-border {\r\n  background-image: url(\"../../img/field-borders/border_vert_2x.png\");\r\n  background-size: contain;\r\n  width: 18px;\r\n}\r\n.left-border_header,\r\n.right-border_header {\r\n  height: 48px;\r\n}\r\n\r\n/* header/footer container  */\r\n\r\n.game__header-container,\r\n.game__footer-container {\r\n  padding: 4.5px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  background-color: $main-color;\r\n}\r\n.game__header-container.dark,\r\n.game__footer-container.dark {\r\n  background-color: #5c5c5c;\r\n}\r\n/*  mines amount, timer, steps  */\r\n\r\n.mines-amount,\r\n.timer,\r\n.steps {\r\n  display: flex;\r\n  column-gap: 3px;\r\n  padding: 3px;\r\n  background-image: url(\"../../img/numbers-field/nums_background.svg\");\r\n  background-size: contain;\r\n}\r\n\r\n.num {\r\n  width: 16.5px;\r\n  height: 31.5px;\r\n}\r\n\r\n.num0 {\r\n  background-image: url(\"../../img/numbers-field/d0.svg\");\r\n  background-size: contain;\r\n}\r\n.num1 {\r\n  background-image: url(\"../../img/numbers-field/d1.svg\");\r\n  background-size: contain;\r\n}\r\n.num2 {\r\n  background-image: url(\"../../img/numbers-field/d2.svg\");\r\n  background-size: contain;\r\n}\r\n.num3 {\r\n  background-image: url(\"../../img/numbers-field/d3.svg\");\r\n  background-size: contain;\r\n}\r\n.num4 {\r\n  background-image: url(\"../../img/numbers-field/d4.svg\");\r\n  background-size: contain;\r\n}\r\n.num5 {\r\n  background-image: url(\"../../img/numbers-field/d5.svg\");\r\n  background-size: contain;\r\n}\r\n.num6 {\r\n  background-image: url(\"../../img/numbers-field/d6.svg\");\r\n  background-size: contain;\r\n}\r\n.num7 {\r\n  background-image: url(\"../../img/numbers-field/d7.svg\");\r\n  background-size: contain;\r\n}\r\n.num8 {\r\n  background-image: url(\"../../img/numbers-field/d8.svg\");\r\n  background-size: contain;\r\n}\r\n.num9 {\r\n  background-image: url(\"../../img/numbers-field/d9.svg\");\r\n  background-size: contain;\r\n}\r\n.num-minus {\r\n  background-image: url(\"../../img/numbers-field/minus.svg\");\r\n  background-size: contain;\r\n}\r\n\r\n/*  smile  */\r\n\r\n.smile {\r\n  width: 39px;\r\n  height: 39px;\r\n  background-size: contain;\r\n  &:hover {\r\n    cursor: pointer;\r\n  }\r\n  &_unpressed {\r\n    background-image: url(\"../../img/buttons/face_unpressed.svg\");\r\n  }\r\n  &_pressed {\r\n    background-image: url(\"../../img/buttons/face_pressed.svg\");\r\n  }\r\n  &_active {\r\n    background-image: url(\"../../img/buttons/face_active.svg\");\r\n  }\r\n  &_lose {\r\n    background-image: url(\"../../img/buttons/face_lose.svg\");\r\n  }\r\n}\r\n.smile_unpressed.dark {\r\n  background-image: url(\"../../img/buttons/face_unpressed_dark.svg\");\r\n}\r\n.smile_lose.dark {\r\n  background-image: url(\"../../img/buttons/face_lose_dark.svg\");\r\n}\r\n.game__field {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.cell {\r\n  width: 24px;\r\n  height: 24px;\r\n  background-size: cover;\r\n\r\n  &:hover {\r\n    cursor: pointer;\r\n  }\r\n\r\n  &_opened {\r\n    background-image: url(\"../../img/buttons/pressed.svg\");\r\n  }\r\n}\r\n.cell_opened.dark {\r\n  background-image: url(\"../../img/buttons/pressed_dark.svg\");\r\n}\r\n\r\n.cell_closed,\r\n.cell-mined_closed,\r\n.cell-one_closed,\r\n.cell-two_closed,\r\n.cell-three_closed,\r\n.cell-four_closed,\r\n.cell-five_closed,\r\n.cell-six_closed,\r\n.cell-seven_closed,\r\n.cell-eight_closed {\r\n  background-image: url(\"../../img/buttons/closed.svg\");\r\n}\r\n\r\n.cell_closed.dark,\r\n.cell-mined_closed.dark,\r\n.cell-one_closed.dark,\r\n.cell-two_closed.dark,\r\n.cell-three_closed.dark,\r\n.cell-four_closed.dark,\r\n.cell-five_closed.dark,\r\n.cell-six_closed.dark,\r\n.cell-seven_closed.dark,\r\n.cell-eight_closed.dark {\r\n  background-image: url(\"../../img/buttons/closed_dark.svg\");\r\n}\r\n\r\n.flaged-right_cell_closed,\r\n.flaged-right_cell-mined_closed,\r\n.flaged-right_cell-one_closed,\r\n.flaged-right_cell-two_closed,\r\n.flaged-right_cell-three_closed,\r\n.flaged-right_cell-four_closed,\r\n.flaged-right_cell-five_closed,\r\n.flaged-right_cell-six_closed,\r\n.flaged-right_cell-seven_closed,\r\n.flaged-right_cell-eight_closed,\r\n.flaged-right_cell-mined_closed,\r\n.flaged-wrong_cell_closed,\r\n.flaged-wrong_cell-one_closed,\r\n.flaged-wrong_cell-two_closed,\r\n.flaged-wrong_cell-three_closed,\r\n.flaged-wrong_cell-four_closed,\r\n.flaged-wrong_cell-five_closed,\r\n.flaged-wrong_cell-six_closed,\r\n.flaged-wrong_cell-seven_closed,\r\n.flaged-wrong_cell-eight_closed {\r\n  background-image: url(\"../../img/buttons/flag.svg\");\r\n}\r\n.flaged-right_cell_closed.dark,\r\n.flaged-right_cell-mined_closed.dark,\r\n.flaged-right_cell-one_closed.dark,\r\n.flaged-right_cell-two_closed.dark,\r\n.flaged-right_cell-three_closed.dark,\r\n.flaged-right_cell-four_closed.dark,\r\n.flaged-right_cell-five_closed.dark,\r\n.flaged-right_cell-six_closed.dark,\r\n.flaged-right_cell-seven_closed.dark,\r\n.flaged-right_cell-eight_closed.dark,\r\n.flaged-right_cell-mined_closed.dark,\r\n.flaged-wrong_cell_closed.dark,\r\n.flaged-wrong_cell-one_closed.dark,\r\n.flaged-wrong_cell-two_closed.dark,\r\n.flaged-wrong_cell-three_closed.dark,\r\n.flaged-wrong_cell-four_closed.dark,\r\n.flaged-wrong_cell-five_closed.dark,\r\n.flaged-wrong_cell-six_closed.dark,\r\n.flaged-wrong_cell-seven_closed.dark,\r\n.flaged-wrong_cell-eight_closed.dark {\r\n  background-image: url(\"../../img/buttons/flag_dark.svg\");\r\n}\r\n\r\n.flaged-wrong-red {\r\n  background-image: url(\"../../img/buttons/mine_wrong.svg\");\r\n}\r\n\r\n.cell-one_opened {\r\n  background-image: url(\"../../img/buttons/bombs-number/type1.svg\");\r\n}\r\n.cell-two_opened {\r\n  background-image: url(\"../../img/buttons/bombs-number/type2.svg\");\r\n}\r\n.cell-three_opened {\r\n  background-image: url(\"../../img/buttons/bombs-number/type3.svg\");\r\n}\r\n.cell-four_opened {\r\n  background-image: url(\"../../img/buttons/bombs-number/type4.svg\");\r\n}\r\n.cell-five_opened {\r\n  background-image: url(\"../../img/buttons/bombs-number/type5.svg\");\r\n}\r\n.cell-six_opened {\r\n  background-image: url(\"../../img/buttons/bombs-number/type6.svg\");\r\n}\r\n.cell-seven_opened {\r\n  background-image: url(\"../../img/buttons/bombs-number/type7.svg\");\r\n}\r\n.cell-eight_opened {\r\n  background-image: url(\"../../img/buttons/bombs-number/type8.svg\");\r\n}\r\n\r\n.cell-mined_opened-loss {\r\n  background-image: url(\"../../img/buttons/mine_red.svg\");\r\n}\r\n\r\n.cell-mined_opened {\r\n  background-image: url(\"../../img/buttons/mine.svg\");\r\n}\r\n\r\n.cell-one_opened.dark {\r\n  background-image: url(\"../../img/buttons/bombs-number/type1_yellow.svg\");\r\n}\r\n.cell-two_opened.dark {\r\n  background-image: url(\"../../img/buttons/bombs-number/type2_yellow.svg\");\r\n}\r\n.cell-three_opened.dark {\r\n  background-image: url(\"../../img/buttons/bombs-number/type3_yellow.svg\");\r\n}\r\n.cell-four_opened.dark {\r\n  background-image: url(\"../../img/buttons/bombs-number/type4_yellow.svg\");\r\n}\r\n.cell-five_opened.dark {\r\n  background-image: url(\"../../img/buttons/bombs-number/type5_yellow.svg\");\r\n}\r\n.cell-six_opened.dark {\r\n  background-image: url(\"../../img/buttons/bombs-number/type6_yellow.svg\");\r\n}\r\n.cell-seven_opened.dark {\r\n  background-image: url(\"../../img/buttons/bombs-number/type7_yellow.svg\");\r\n}\r\n.cell-eight_opened.dark {\r\n  background-image: url(\"../../img/buttons/bombs-number/type8_yellow.svg\");\r\n}\r\n.cell-mined_opened.dark {\r\n  background-image: url(\"../../img/buttons/mine_dark.svg\");\r\n}\r\n",".pop-up-wrapper {\r\n  transition: all 0.4s;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  background: rgba(155, 152, 156, 0.5);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  &_hidden {\r\n    display: none;\r\n  }\r\n  &_dark {\r\n    background: rgba(155, 152, 156, 0.3);\r\n  }\r\n}\r\n.message-container {\r\n  transition: all 0.4s;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  box-sizing: border-box;\r\n  padding: 30px;\r\n  width: 500px;\r\n  background-color: $background;\r\n  box-shadow: 5px 5px 5px $border-color;\r\n  &_dark {\r\n    background-color: $dark-text-color;\r\n  }\r\n}\r\n\r\n.message-title {\r\n  text-align: center;\r\n  font-weight: 800;\r\n  color: rgb(135, 9, 9);\r\n  text-shadow: 5px 5px 5px $border-color;\r\n  &_dark {\r\n    color: rgb(236, 253, 1);\r\n  }\r\n}\r\n\r\n.message-text {\r\n  text-align: center;\r\n  font-size: 1.5em;\r\n  &_dark {\r\n    color: $background;\r\n  }\r\n}\r\n.message-text.dark {\r\n  color: $background;\r\n}\r\n\r\n.close-btn {\r\n  width: 80px;\r\n  height: 30px;\r\n  font-size: 1.6em;\r\n  border-radius: 20px;\r\n  background-color: $border-color;\r\n  &:hover {\r\n    cursor: pointer;\r\n    opacity: 0.8;\r\n    color: rgb(135, 9, 9);\r\n  }\r\n  &_dark {\r\n    background-color: $background;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./minesweeper/src/index.html":
/*!************************************!*\
  !*** ./minesweeper/src/index.html ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Document</title>\r\n</head>\r\n\r\n<body>\r\n\r\n\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);

        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a '" + methodName + "' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./minesweeper/src/style.scss":
/*!************************************!*\
  !*** ./minesweeper/src/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/group-css-media-queries-loader/lib/index.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./minesweeper/src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./minesweeper/src/img/buttons/bombs-number/type1.svg":
/*!************************************************************!*\
  !*** ./minesweeper/src/img/buttons/bombs-number/type1.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/type1.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/bombs-number/type1_yellow.svg":
/*!*******************************************************************!*\
  !*** ./minesweeper/src/img/buttons/bombs-number/type1_yellow.svg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/type1_yellow.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/bombs-number/type2.svg":
/*!************************************************************!*\
  !*** ./minesweeper/src/img/buttons/bombs-number/type2.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/type2.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/bombs-number/type2_yellow.svg":
/*!*******************************************************************!*\
  !*** ./minesweeper/src/img/buttons/bombs-number/type2_yellow.svg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/type2_yellow.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/bombs-number/type3.svg":
/*!************************************************************!*\
  !*** ./minesweeper/src/img/buttons/bombs-number/type3.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/type3.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/bombs-number/type3_yellow.svg":
/*!*******************************************************************!*\
  !*** ./minesweeper/src/img/buttons/bombs-number/type3_yellow.svg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/type3_yellow.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/bombs-number/type4.svg":
/*!************************************************************!*\
  !*** ./minesweeper/src/img/buttons/bombs-number/type4.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/type4.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/bombs-number/type4_yellow.svg":
/*!*******************************************************************!*\
  !*** ./minesweeper/src/img/buttons/bombs-number/type4_yellow.svg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/type4_yellow.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/bombs-number/type5.svg":
/*!************************************************************!*\
  !*** ./minesweeper/src/img/buttons/bombs-number/type5.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/type5.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/bombs-number/type5_yellow.svg":
/*!*******************************************************************!*\
  !*** ./minesweeper/src/img/buttons/bombs-number/type5_yellow.svg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/type5_yellow.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/bombs-number/type6.svg":
/*!************************************************************!*\
  !*** ./minesweeper/src/img/buttons/bombs-number/type6.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/type6.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/bombs-number/type6_yellow.svg":
/*!*******************************************************************!*\
  !*** ./minesweeper/src/img/buttons/bombs-number/type6_yellow.svg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/type6_yellow.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/bombs-number/type7.svg":
/*!************************************************************!*\
  !*** ./minesweeper/src/img/buttons/bombs-number/type7.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/type7.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/bombs-number/type7_yellow.svg":
/*!*******************************************************************!*\
  !*** ./minesweeper/src/img/buttons/bombs-number/type7_yellow.svg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/type7_yellow.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/bombs-number/type8.svg":
/*!************************************************************!*\
  !*** ./minesweeper/src/img/buttons/bombs-number/type8.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/type8.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/bombs-number/type8_yellow.svg":
/*!*******************************************************************!*\
  !*** ./minesweeper/src/img/buttons/bombs-number/type8_yellow.svg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/type8_yellow.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/closed.svg":
/*!************************************************!*\
  !*** ./minesweeper/src/img/buttons/closed.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/closed.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/closed_dark.svg":
/*!*****************************************************!*\
  !*** ./minesweeper/src/img/buttons/closed_dark.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/closed_dark.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/face_active.svg":
/*!*****************************************************!*\
  !*** ./minesweeper/src/img/buttons/face_active.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/face_active.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/face_lose.svg":
/*!***************************************************!*\
  !*** ./minesweeper/src/img/buttons/face_lose.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/face_lose.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/face_lose_dark.svg":
/*!********************************************************!*\
  !*** ./minesweeper/src/img/buttons/face_lose_dark.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/face_lose_dark.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/face_pressed.svg":
/*!******************************************************!*\
  !*** ./minesweeper/src/img/buttons/face_pressed.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/face_pressed.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/face_unpressed.svg":
/*!********************************************************!*\
  !*** ./minesweeper/src/img/buttons/face_unpressed.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/face_unpressed.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/face_unpressed_dark.svg":
/*!*************************************************************!*\
  !*** ./minesweeper/src/img/buttons/face_unpressed_dark.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/face_unpressed_dark.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/flag.svg":
/*!**********************************************!*\
  !*** ./minesweeper/src/img/buttons/flag.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/flag.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/flag_dark.svg":
/*!***************************************************!*\
  !*** ./minesweeper/src/img/buttons/flag_dark.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/flag_dark.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/mine.svg":
/*!**********************************************!*\
  !*** ./minesweeper/src/img/buttons/mine.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/mine.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/mine_dark.svg":
/*!***************************************************!*\
  !*** ./minesweeper/src/img/buttons/mine_dark.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/mine_dark.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/mine_red.svg":
/*!**************************************************!*\
  !*** ./minesweeper/src/img/buttons/mine_red.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/mine_red.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/mine_wrong.svg":
/*!****************************************************!*\
  !*** ./minesweeper/src/img/buttons/mine_wrong.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/mine_wrong.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/pressed.svg":
/*!*************************************************!*\
  !*** ./minesweeper/src/img/buttons/pressed.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/pressed.svg";

/***/ }),

/***/ "./minesweeper/src/img/buttons/pressed_dark.svg":
/*!******************************************************!*\
  !*** ./minesweeper/src/img/buttons/pressed_dark.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/pressed_dark.svg";

/***/ }),

/***/ "./minesweeper/src/img/field-borders/border_hor_2x.png":
/*!*************************************************************!*\
  !*** ./minesweeper/src/img/field-borders/border_hor_2x.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/border_hor_2x.png";

/***/ }),

/***/ "./minesweeper/src/img/field-borders/border_vert_2x.png":
/*!**************************************************************!*\
  !*** ./minesweeper/src/img/field-borders/border_vert_2x.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/border_vert_2x.png";

/***/ }),

/***/ "./minesweeper/src/img/field-borders/corner_bottom_left_2x.png":
/*!*********************************************************************!*\
  !*** ./minesweeper/src/img/field-borders/corner_bottom_left_2x.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/corner_bottom_left_2x.png";

/***/ }),

/***/ "./minesweeper/src/img/field-borders/corner_bottom_right_2x.png":
/*!**********************************************************************!*\
  !*** ./minesweeper/src/img/field-borders/corner_bottom_right_2x.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/corner_bottom_right_2x.png";

/***/ }),

/***/ "./minesweeper/src/img/field-borders/corner_up_left_2x.png":
/*!*****************************************************************!*\
  !*** ./minesweeper/src/img/field-borders/corner_up_left_2x.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/corner_up_left_2x.png";

/***/ }),

/***/ "./minesweeper/src/img/field-borders/corner_up_right_2x.png":
/*!******************************************************************!*\
  !*** ./minesweeper/src/img/field-borders/corner_up_right_2x.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/corner_up_right_2x.png";

/***/ }),

/***/ "./minesweeper/src/img/field-borders/t_left_2x.png":
/*!*********************************************************!*\
  !*** ./minesweeper/src/img/field-borders/t_left_2x.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/t_left_2x.png";

/***/ }),

/***/ "./minesweeper/src/img/field-borders/t_right_2x.png":
/*!**********************************************************!*\
  !*** ./minesweeper/src/img/field-borders/t_right_2x.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/t_right_2x.png";

/***/ }),

/***/ "./minesweeper/src/img/numbers-field/d0.svg":
/*!**************************************************!*\
  !*** ./minesweeper/src/img/numbers-field/d0.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d0.svg";

/***/ }),

/***/ "./minesweeper/src/img/numbers-field/d1.svg":
/*!**************************************************!*\
  !*** ./minesweeper/src/img/numbers-field/d1.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d1.svg";

/***/ }),

/***/ "./minesweeper/src/img/numbers-field/d2.svg":
/*!**************************************************!*\
  !*** ./minesweeper/src/img/numbers-field/d2.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d2.svg";

/***/ }),

/***/ "./minesweeper/src/img/numbers-field/d3.svg":
/*!**************************************************!*\
  !*** ./minesweeper/src/img/numbers-field/d3.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d3.svg";

/***/ }),

/***/ "./minesweeper/src/img/numbers-field/d4.svg":
/*!**************************************************!*\
  !*** ./minesweeper/src/img/numbers-field/d4.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d4.svg";

/***/ }),

/***/ "./minesweeper/src/img/numbers-field/d5.svg":
/*!**************************************************!*\
  !*** ./minesweeper/src/img/numbers-field/d5.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d5.svg";

/***/ }),

/***/ "./minesweeper/src/img/numbers-field/d6.svg":
/*!**************************************************!*\
  !*** ./minesweeper/src/img/numbers-field/d6.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d6.svg";

/***/ }),

/***/ "./minesweeper/src/img/numbers-field/d7.svg":
/*!**************************************************!*\
  !*** ./minesweeper/src/img/numbers-field/d7.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d7.svg";

/***/ }),

/***/ "./minesweeper/src/img/numbers-field/d8.svg":
/*!**************************************************!*\
  !*** ./minesweeper/src/img/numbers-field/d8.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d8.svg";

/***/ }),

/***/ "./minesweeper/src/img/numbers-field/d9.svg":
/*!**************************************************!*\
  !*** ./minesweeper/src/img/numbers-field/d9.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d9.svg";

/***/ }),

/***/ "./minesweeper/src/img/numbers-field/minus.svg":
/*!*****************************************************!*\
  !*** ./minesweeper/src/img/numbers-field/minus.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/minus.svg";

/***/ }),

/***/ "./minesweeper/src/img/numbers-field/nums_background.svg":
/*!***************************************************************!*\
  !*** ./minesweeper/src/img/numbers-field/nums_background.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/nums_background.svg";

/***/ }),

/***/ "./minesweeper/src/sounds/click.mp3":
/*!******************************************!*\
  !*** ./minesweeper/src/sounds/click.mp3 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/click.mp3";

/***/ }),

/***/ "./minesweeper/src/sounds/flag.mp3":
/*!*****************************************!*\
  !*** ./minesweeper/src/sounds/flag.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/flag.mp3";

/***/ }),

/***/ "./minesweeper/src/sounds/looser.mp3":
/*!*******************************************!*\
  !*** ./minesweeper/src/sounds/looser.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/looser.mp3";

/***/ }),

/***/ "./minesweeper/src/sounds/winner.mp3":
/*!*******************************************!*\
  !*** ./minesweeper/src/sounds/winner.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/winner.mp3";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************!*\
  !*** ./minesweeper/src/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill/lib */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill_lib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./minesweeper/src/index.html");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./minesweeper/src/style.scss");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/header */ "./minesweeper/src/modules/header.js");
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/main */ "./minesweeper/src/modules/main.js");
/* harmony import */ var _modules_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/functions */ "./minesweeper/src/modules/functions.js");
/* harmony import */ var _modules_levels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/levels */ "./minesweeper/src/modules/levels.js");
/* harmony import */ var _modules_mineBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/mineBuilder */ "./minesweeper/src/modules/mineBuilder.js");
/* harmony import */ var _modules_open_empty_cells__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/open-empty-cells */ "./minesweeper/src/modules/open-empty-cells.js");
/* harmony import */ var _modules_pop_up__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/pop-up */ "./minesweeper/src/modules/pop-up.js");
/* harmony import */ var _modules_theme_toggler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/theme-toggler */ "./minesweeper/src/modules/theme-toggler.js");
/* harmony import */ var _modules_sounds__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/sounds */ "./minesweeper/src/modules/sounds.js");












function gameInit() {
  (0,_modules_header__WEBPACK_IMPORTED_MODULE_3__.createHeaderHTML)();
  (0,_modules_main__WEBPACK_IMPORTED_MODULE_4__.createMainHeaderHTML)();
  (0,_modules_main__WEBPACK_IMPORTED_MODULE_4__.createGameFieldHTML)();
  (0,_modules_main__WEBPACK_IMPORTED_MODULE_4__.createGameFooterHTML)();
  var theme = localStorage.getItem('theme');
  if (theme && theme === 'dark') {
    var swither = document.querySelector('.theme').previousSibling;
    swither.setAttribute('checked', 'true');
    (0,_modules_theme_toggler__WEBPACK_IMPORTED_MODULE_10__.themeAddDark)();
  }
}
gameInit();
var levels = document.querySelector('.levels');
var savingSettings = ['custom-mines', 'custom-height', 'custom-width', 'results', 'sound', 'theme', 'active-level', 'beginner-mines', 'intermediate-mines', 'expert-mines'];

// eslint-disable-next-line consistent-return
function getMinesValue() {
  var localStor = new _modules_functions__WEBPACK_IMPORTED_MODULE_5__.LocalStorageActions();
  var level = localStor.getItem('active-level');
  var mines = document.getElementById('custom-mines');
  localStor.setItem("".concat(level.toLowerCase(), "-mines"), "".concat(mines.value));
  return Number(mines.value);
}
document.addEventListener('click', function (e) {
  // console.log(e.target);

  /* Changing of the level */

  if (e.target.classList.contains('level') && !e.target.classList.contains('level_active')) {
    for (var i = 0; i < levels.children.length; i += 1) {
      if (levels.children[i].classList.contains('level_active')) {
        levels.children[i].classList.remove('level_active');
      }
    }
    localStorage.setItem('active-level', e.target.innerText);
    localStorage.setItem('first-step', 'true');
    (0,_modules_main__WEBPACK_IMPORTED_MODULE_4__.clearHeader)();
    (0,_modules_main__WEBPACK_IMPORTED_MODULE_4__.clearGame)();
    for (var _i = 0; _i < localStorage.length; _i += 1) {
      var key = localStorage.key(_i);
      if (!savingSettings.includes(key)) {
        localStorage.removeItem(key);
      }
    }
    (0,_modules_header__WEBPACK_IMPORTED_MODULE_3__.createHeaderHTML)();
    (0,_modules_main__WEBPACK_IMPORTED_MODULE_4__.createMainHeaderHTML)();
    (0,_modules_main__WEBPACK_IMPORTED_MODULE_4__.createGameFieldHTML)();
    (0,_modules_main__WEBPACK_IMPORTED_MODULE_4__.createGameFooterHTML)();
    if (localStorage.getItem('theme') === 'dark') {
      var swither = document.querySelector('.theme').previousSibling;
      swither.setAttribute('checked', 'true');
      (0,_modules_theme_toggler__WEBPACK_IMPORTED_MODULE_10__.themeAddDark)();
    }
  }

  /* Update custom settings */

  if (e.target.classList.contains('update-btn')) {
    var localStor = new _modules_functions__WEBPACK_IMPORTED_MODULE_5__.LocalStorageActions();
    var width = document.getElementById('custom-width');
    var height = document.getElementById('custom-height');
    var mines = document.getElementById('custom-mines');
    var minesValue = getMinesValue();
    if (width) {
      var widthValue = Number(width.value);
      if (!width.value) {
        // eslint-disable-next-line no-alert
        alert('Width is empty!');
      }
      if (widthValue > 100) {
        width.value = 100;
      }
      if (widthValue < 10) {
        width.value = 10;
      }
      localStor.changeValue('custom-width', "".concat(width.value));
    }
    if (height) {
      var heightValue = Number(height.value);
      if (!height.value) {
        // eslint-disable-next-line no-alert
        alert('Height is empty!');
      }
      if (heightValue > 100) {
        height.value = 100;
      }
      if (heightValue < 10) {
        height.value = 10;
      }
      localStor.changeValue('custom-height', "".concat(height.value));
    }
    if (!mines.value) {
      // eslint-disable-next-line no-alert
      alert('Mines is empty!');
    }
    if (minesValue < 10) {
      mines.value = 10;
    }
    if (minesValue > 99) {
      mines.value = 99;
    }
    (0,_modules_main__WEBPACK_IMPORTED_MODULE_4__.clearGame)();
    for (var _i2 = 0; _i2 < localStorage.length; _i2 += 1) {
      var _key = localStorage.key(_i2);
      if (!savingSettings.includes(_key)) {
        localStorage.removeItem(_key);
      }
    }
    localStor.setItem('first-step', 'true');
    (0,_modules_main__WEBPACK_IMPORTED_MODULE_4__.createMainHeaderHTML)();
    (0,_modules_main__WEBPACK_IMPORTED_MODULE_4__.createGameFieldHTML)();
    (0,_modules_main__WEBPACK_IMPORTED_MODULE_4__.createGameFooterHTML)();
  }

  /* Game field click */

  if (e.target.classList.contains('cell')) {
    var cells = document.querySelectorAll('.cell');
    var cellsArr = Array.prototype.slice.call(cells);
    var _localStor = new _modules_functions__WEBPACK_IMPORTED_MODULE_5__.LocalStorageActions();
    var isFirstStep = _localStor.getItem('first-step');
    if (isFirstStep === 'true') {
      (0,_modules_functions__WEBPACK_IMPORTED_MODULE_5__.changeStepsCouner)('game');
      (0,_modules_mineBuilder__WEBPACK_IMPORTED_MODULE_7__.createMineField)(Number(e.target.classList[1]) - 1);
      (0,_modules_functions__WEBPACK_IMPORTED_MODULE_5__.setMinesCouner)('init');
      var timer = setInterval(function () {
        localStorage.setItem('timerRestored', 'false');
        (0,_modules_functions__WEBPACK_IMPORTED_MODULE_5__.setTimer)('continue');
        if (_localStor.getItem('game-over') === 'true') {
          clearInterval(timer);
        }
      }, 1000);
      var closedStyle = e.target.classList[2];
      if (closedStyle.includes('closed')) {
        e.target.classList.replace(closedStyle, closedStyle.replace('closed', 'opened'));
      }
      (0,_modules_sounds__WEBPACK_IMPORTED_MODULE_11__.playSound)('click');
      (0,_modules_open_empty_cells__WEBPACK_IMPORTED_MODULE_8__.openCellsAround)();
      _localStor.changeValue('first-step', 'false');
    } else {
      if (localStorage.getItem('timerRestored') === 'true') {
        var _timer = setInterval(function () {
          (0,_modules_functions__WEBPACK_IMPORTED_MODULE_5__.setTimer)('continue');
          if (_localStor.getItem('game-over') === 'true') {
            clearInterval(_timer);
          }
        }, 1000);
      }
      var _closedStyle = e.target.classList[2];
      if (!_closedStyle.includes('flaged-right') && !_closedStyle.includes('flaged-wrong')) {
        (0,_modules_functions__WEBPACK_IMPORTED_MODULE_5__.changeStepsCouner)('game');
        if (_closedStyle.includes('closed')) {
          e.target.classList.replace(_closedStyle, _closedStyle.replace('closed', 'opened'));
          (0,_modules_sounds__WEBPACK_IMPORTED_MODULE_11__.playSound)('click');
          localStorage.setItem("".concat(e.target.classList[1]), e.target.classList[2]);
        }
        if (_closedStyle === 'cell_closed') {
          localStorage.setItem("".concat(e.target.classList[1]), e.target.classList[2]);
          (0,_modules_sounds__WEBPACK_IMPORTED_MODULE_11__.playSound)('click');
          (0,_modules_open_empty_cells__WEBPACK_IMPORTED_MODULE_8__.openCellsAround)();
        }
        /* Game over! */
        if (_closedStyle === 'cell-mined_closed' || _closedStyle === 'cell-flaged-wrong_closed' || _closedStyle === 'cell-flaged-right_closed') {
          e.target.classList.replace(e.target.classList[2], "".concat(e.target.classList[2], "-loss"));
          var restMines = [];
          var _closedMines = document.querySelectorAll('.cell-mined_closed');
          for (var _i3 = 0; _i3 < _closedMines.length; _i3 += 1) {
            restMines.push(_closedMines[_i3]);
          }
          var flagedMines = document.querySelectorAll('.cell-flaged-right_closed');
          for (var _i4 = 0; _i4 < flagedMines.length; _i4 += 1) {
            restMines.push(flagedMines[_i4]);
          }
          restMines.forEach(function (item) {
            item.classList.replace(_closedStyle, _closedStyle.replace('closed', 'opened'));
          });
          var _cells = document.querySelectorAll('.cell');
          for (var _i5 = 0; _i5 < _cells.length; _i5 += 1) {
            _cells[_i5].style.pointerEvents = 'none';
          }
          _cells.forEach(function (cell) {
            if (cell.classList[2].includes('flaged-wrong')) {
              cell.classList.replace(cell.classList[2], 'flaged-wrong-red');
            }
          });
          _localStor.setItem('game-over', 'true');
          var smile = document.querySelector('.smile');
          smile.classList.replace(smile.classList[1], 'smile_lose');
          var theme = localStorage.getItem('theme');
          if (theme === 'dark') {
            smile.classList.add('dark');
          }
          (0,_modules_sounds__WEBPACK_IMPORTED_MODULE_11__.playSound)('loser');
          setTimeout((0,_modules_pop_up__WEBPACK_IMPORTED_MODULE_9__.showMessage)('lose'), 5000);
        }
      }
    }
    /* winner */
    var rightFlagedMines = document.querySelectorAll('.flaged-right_cell-mined_closed');
    var closedMines = document.querySelectorAll('.cell-mined_closed');
    var hiddenMines = rightFlagedMines.length + closedMines.length;
    var activeLevel = document.querySelector('.level.level_active');
    var closedSells = [];
    cellsArr.forEach(function (item) {
      if (!item.classList.contains('cell-mined_closed') && !item.classList.contains('flaged-right_cell-mined_closed')) {
        if (item.classList[2].slice(-6) === 'closed') {
          closedSells.push(item);
        }
      }
    });
    var minesAmount = Number(localStorage.getItem("".concat(activeLevel.innerText.toLowerCase(), "-mines")));
    if (hiddenMines === minesAmount && closedSells.length === 0) {
      var steps = localStorage.getItem('steps-counter');
      var time = (0,_modules_functions__WEBPACK_IMPORTED_MODULE_5__.getTime)();
      (0,_modules_functions__WEBPACK_IMPORTED_MODULE_5__.saveGameResult)(steps, time);
      localStorage.setItem('game-over', 'true');
      (0,_modules_sounds__WEBPACK_IMPORTED_MODULE_11__.playSound)('winner');
      (0,_modules_pop_up__WEBPACK_IMPORTED_MODULE_9__.showMessage)('win');
    }
  }
  if (e.target.classList.contains('smile')) {
    var keys = Object.keys(localStorage);
    // eslint-disable-next-line no-restricted-syntax
    for (var _i6 = 0, _keys = keys; _i6 < _keys.length; _i6++) {
      var _key2 = _keys[_i6];
      if (!savingSettings.includes(_key2)) {
        localStorage.removeItem(_key2);
      }
    }
    (0,_modules_main__WEBPACK_IMPORTED_MODULE_4__.clearGame)();
    (0,_modules_main__WEBPACK_IMPORTED_MODULE_4__.createMainHeaderHTML)();
    (0,_modules_main__WEBPACK_IMPORTED_MODULE_4__.createGameFieldHTML)();
    (0,_modules_main__WEBPACK_IMPORTED_MODULE_4__.createGameFooterHTML)();
  }

  /* Best results */
  if (e.target.classList.contains('results')) {
    (0,_modules_pop_up__WEBPACK_IMPORTED_MODULE_9__.showMessage)('results');
  }

  /* Theme toggler */

  if (e.target.classList.contains('theme')) {
    if (!localStorage.getItem('theme') || localStorage.getItem('theme') === 'light') {
      localStorage.setItem('theme', 'dark');
    } else if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
    }
    (0,_modules_theme_toggler__WEBPACK_IMPORTED_MODULE_10__.themeToggler)();
    (0,_modules_theme_toggler__WEBPACK_IMPORTED_MODULE_10__.toggleThemeGameField)();
  }

  /* Sound toggler */

  if (e.target.classList.contains('sound')) {
    if (localStorage.getItem('sound') === 'off') {
      localStorage.setItem('sound', 'on');
    } else if (localStorage.getItem('sound') === 'on') {
      localStorage.setItem('sound', 'off');
    }
  }
});

/* Mouse right button click */

document.addEventListener('contextmenu', function (e) {
  var cells = document.querySelectorAll('.cell');
  var cellsArr = Array.prototype.slice.call(cells);
  if (cellsArr.indexOf(e.target) !== -1) {
    e.preventDefault();
    (0,_modules_sounds__WEBPACK_IMPORTED_MODULE_11__.playSound)('flag');
    var localStor = new _modules_functions__WEBPACK_IMPORTED_MODULE_5__.LocalStorageActions();
    var isFirstStep = localStor.getItem('first-step');
    if (isFirstStep === 'true') {
      // changeStepsCouner('game');
      localStor.changeValue('first-step', 'false');
      (0,_modules_mineBuilder__WEBPACK_IMPORTED_MODULE_7__.createMineField)(Number(e.target.classList[1]) - 1);
      (0,_modules_functions__WEBPACK_IMPORTED_MODULE_5__.setMinesCouner)('init');
    }
    var closedStyle = e.target.classList[2];
    if (closedStyle.includes('flaged-right')) {
      var unFlagedClass = closedStyle.replace('flaged-right_', '');
      e.target.classList.replace(closedStyle, unFlagedClass);
      (0,_modules_functions__WEBPACK_IMPORTED_MODULE_5__.setMinesCouner)('plusMine');
    } else if (closedStyle.includes('flaged-wrong')) {
      var _unFlagedClass = closedStyle.replace('flaged-wrong_', '');
      e.target.classList.replace(closedStyle, _unFlagedClass);
      (0,_modules_functions__WEBPACK_IMPORTED_MODULE_5__.setMinesCouner)('plusMine');
    } else if (closedStyle === 'cell-mined_closed') {
      var flagedClass = "flaged-right_".concat(closedStyle);
      e.target.classList.replace(closedStyle, flagedClass);
      (0,_modules_functions__WEBPACK_IMPORTED_MODULE_5__.setMinesCouner)('minusMine');
    } else if (!closedStyle.includes('opened') && closedStyle !== 'cell-mined_closed') {
      var _flagedClass = "flaged-wrong_".concat(closedStyle);
      e.target.classList.replace(closedStyle, _flagedClass);
      (0,_modules_functions__WEBPACK_IMPORTED_MODULE_5__.setMinesCouner)('minusMine');
    }
    localStor.setItem(e.target.classList[1], e.target.classList[2]);
  }

  /* winner */
  var rightFlagedMines = document.querySelectorAll('.flaged-right_cell-mined_closed');
  var closedMines = document.querySelectorAll('.cell-mined_closed');
  var hiddenMines = rightFlagedMines.length + closedMines.length;
  var activeLevel = document.querySelector('.level.level_active');
  var closedSells = [];
  cellsArr.forEach(function (item) {
    if (!item.classList.contains('cell-mined_closed') && !item.classList.contains('flaged-right_cell-mined_closed')) {
      if (item.classList[2].slice(-6) === 'closed') {
        closedSells.push(item);
      }
    }
  });
  var minesAmount = Number(localStorage.getItem("".concat(activeLevel.innerText.toLowerCase(), "-mines")));
  if (hiddenMines === minesAmount && closedSells.length === 0) {
    var steps = localStorage.getItem('steps-counter');
    var time = (0,_modules_functions__WEBPACK_IMPORTED_MODULE_5__.getTime)();
    (0,_modules_functions__WEBPACK_IMPORTED_MODULE_5__.saveGameResult)(steps, time);
    localStorage.setItem('game-over', 'true');
    (0,_modules_sounds__WEBPACK_IMPORTED_MODULE_11__.playSound)('winner');
    (0,_modules_pop_up__WEBPACK_IMPORTED_MODULE_9__.showMessage)('win');
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.0e54b86f475aa186b5f3.js.map