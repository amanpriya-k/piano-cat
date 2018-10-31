/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascript/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/entry.js":
/*!*****************************!*\
  !*** ./javascript/entry.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./javascript/main.js");


document.addEventListener("DOMContentLoaded", () => {
  console.log('webpack is working!');

  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d'); 
  const main = new _main__WEBPACK_IMPORTED_MODULE_0__["default"]();
  main.draw(ctx);

  document.addEventListener('keydown', 
      (e) => main.onKeyDown(e, ctx))
});


/***/ }),

/***/ "./javascript/key.js":
/*!***************************!*\
  !*** ./javascript/key.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Key {

  constructor(xpos, ypos, note, color) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.note = note;
    this.color = color;

    this.audio = new Audio();
    this.audio.src = `./assets/sounds/${this.note}.wav`;

    this.onKeyDown = this.onKeyDown.bind(this);
    this.draw = this.draw.bind(this);
  };


  onKeyDown(ctx) {
    const keyImg = new Image();
    keyImg.src = "./assets/images/spritesheet.png";

    this.audio.play();

    keyImg.onload = () => {
      if (this.color === "white") {
        ctx.drawImage(keyImg, 100, 0, 70, 300, this.xpos, this.ypos, 50, 200);
      }
      else {
        ctx.drawImage(keyImg, 440, 0, 50, 300, this.xpos, this.ypos, 35, 200);
      }
    }
    window.setTimeout( () => this.draw(ctx), 400 );
  }




  draw(ctx) {
    const keyImg = new Image();
    keyImg.src = "./assets/images/spritesheet.png";

    keyImg.onload = () => {
      if (this.color === "white") {
        ctx.clearRect(this.xpos, this.ypos, 50, 200);
        ctx.drawImage(keyImg, 0, 0, 70, 300, this.xpos, this.ypos, 50, 200);
      } 
      else {
        ctx.clearRect(this.xpos, this.ypos, 23, 200);
        ctx.drawImage(keyImg, 380, 0, 50, 300, this.xpos, this.ypos, 35, 200);
      }
    }
  };

}

/* harmony default export */ __webpack_exports__["default"] = (Key);

/***/ }),

/***/ "./javascript/main.js":
/*!****************************!*\
  !*** ./javascript/main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ "./javascript/key.js");


class Main {

  constructor() {
    this.keys = {};
    this.addKeys();
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e, ctx) {
    switch(e.key) {
      case "s":
        this.keys.c.onKeyDown(ctx);
        break;
      case "e":
        this.keys.cS.onKeyDown(ctx);
        break;
      case "f":
        this.keys.d.onKeyDown(ctx);
        break;
      case "t":
        this.keys.dS.onKeyDown(ctx);
        break;
      case "g":
        this.keys.e.onKeyDown(ctx);
        break;
      case "h":
        this.keys.f.onKeyDown(ctx);
        break;
      case "u":
        this.keys.fS.onKeyDown(ctx);
        break;
      case "j":
        this.keys.g.onKeyDown(ctx);
        break;
      case "i":
        this.keys.gS.onKeyDown(ctx);
        break;
      case "k":
        this.keys.a.onKeyDown(ctx);
        break;
      case "o":
        this.keys.aS.onKeyDown(ctx);
        break;
      case "l":
        this.keys.b.onKeyDown(ctx);
        break;
    }
  }

  addKeys() {
    this.keys.c = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, "c", "white");
    this.keys.cS = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](50, 0, "csharp", "black")
    this.keys.d = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](73, 0, "d", "white")
    this.keys.dS = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](123, 0, "dsharp", "black")
    this.keys.e = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](146, 0, "e", "white")
    this.keys.f = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](196, 0, "f", "white")
    this.keys.fS = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](246, 0, "fsharp", "black")
    this.keys.g = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](269, 0, "g", "white")
    this.keys.gS = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](319, 0, "gsharp", "black")
    this.keys.a = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](342, 0, "a", "white")
    this.keys.aS = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](392, 0, "asharp", "black")
    this.keys.b = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](415, 0, "b", "white")
  }

  draw(ctx) {
    // ctx.fillStyle = "yellow";
    // ctx.fillRect(0, 0, 800, 400);

    Object.values(this.keys).forEach((key) => {
      key.draw(ctx);
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map