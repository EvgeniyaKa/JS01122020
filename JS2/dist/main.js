/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pablic/style/normalize.css":
/*!****************************************!*\
  !*** ./src/pablic/style/normalize.css ***!
  \****************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://js2/./src/pablic/style/normalize.css?");

/***/ }),

/***/ "./src/pablic/style/style.css":
/*!************************************!*\
  !*** ./src/pablic/style/style.css ***!
  \************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://js2/./src/pablic/style/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pablic_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pablic/style/style.css */ \"./src/pablic/style/style.css\");\n/* harmony import */ var _pablic_style_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pablic/style/normalize.css */ \"./src/pablic/style/normalize.css\");\n/* harmony import */ var _pablic_js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pablic/js/main.js */ \"./src/pablic/js/main.js\");\n/* harmony import */ var _pablic_js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pablic_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n;\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://js2/./src/index.js?");

/***/ }),

/***/ "./src/pablic/js/main.js":
/*!*******************************!*\
  !*** ./src/pablic/js/main.js ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("// let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard']\r\n// let PRICES = [100, 120, 1000, 15, 18]\r\n// let IDS = [0, 1, 2, 3, 4]  \r\n\r\n// let products = []\r\n\r\n\r\nfunction createProduct (product) {\r\n    return {\r\n        product_name: product.product_name,\r\n        price: product.price,\r\n        id_product: product.id_product,\r\n        img: 'https://placehold.it/200x150',\r\n        createTemplate () {\r\n            return `\r\n                <div class=\"product-item\" data-id=\"${this.id_product}\">\r\n                <img src=\"${this.img}\" alt=\"${this.product_name}\">\r\n                <div class=\"desc\">\r\n                    <h3>${this.product_name}</h3>\r\n                    <p> ${this.price} </p>\r\n                    <button class=\"buy-btn\"\r\n                        name=\"buy-btn\"\r\n                        data-id=\"${this.id_product}\"\r\n                        data-name=\"${this.product_name}\"\r\n                        data-price=\"${this.price}\">\r\n                        Купить\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            `\r\n        }\r\n    }\r\n}\r\n\r\nlet catalog = {\r\n    items: [],\r\n    conteiner: '.products',\r\n    cart:null,\r\n    catalogUrl: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',\r\n\r\n    init () {\r\n        this.items = [],\r\n        this.cart = cart\r\n        this.getDate (this.catalogUrl)\r\n            .finally(() => {\r\n                this._fetchItems ()\r\n                this._render ()\r\n            })\r\n        document.querySelector(this.conteiner).addEventListener ('click', evt => {\r\n            if (evt.target.name === 'buy-btn') {\r\n                this.cart.addProduct(evt.target.dataset)\r\n            }\r\n        })    \r\n    },\r\n    getData (url) {\r\n        return fetch(url)\r\n                .then(data => data.json())\r\n                .then((data2) => {this.items = data2})\r\n    },\r\n    _fetchItems () {\r\n        let arr = []\r\n\r\n        this.items.forEach (item => {\r\n            arr.push (createProduct (item))\r\n        })\r\n        console.log(arr)\r\n        this.items = arr\r\n    },\r\n    _render () {\r\n        let conteiner = document.querySelector(this.conteiner)\r\n        let domString = ''\r\n\r\n        this.items.forEach (item => {\r\n            domString += item.createTemplate ()\r\n        })\r\n        conteiner.innerHTML = domString\r\n    }\r\n}\r\n\r\nlet cart = {\r\n    items: [],\r\n    shown: false,\r\n    sum: 0,\r\n    qua: 0,\r\n    container: '.cart-block',\r\n    itemsContainer: '.cart-items',\r\n\r\n    init() {\r\n        document.querySelector('#toggle-cart').addEventListener('click', () => {\r\n            cart.shown = !cart.shown\r\n            cart.render ()\r\n            document.querySelector('.cart-block').classList.toggle('invisible')\r\n        })\r\n\r\n        document.querySelector(this.container).addEventListener('click', (evt) => {\r\n            if(evt.target.name === 'del-btn') {\r\n                this.removeProduct(evt.target.dataset.id)\r\n            }\r\n        })\r\n    },\r\n    render () {\r\n        let container = document.querySelector(this.itemsContainer)\r\n        let domString = ''\r\n\r\n        this.items.forEach (item => {\r\n            domString += item.createTemplate ()\r\n        })\r\n        container.innerHTML = domString\r\n\r\n        document.querySelector ('#tot-sum').innerHTML = this.sum\r\n        document.querySelector ('#tot-qua').innerHTML = this.qua\r\n    },\r\n\r\n    addProduct (product) {\r\n        let find = this.items.find (item => item.id_product === product.id)\r\n        if (!find) {\r\n            this.items. push (createCartItem (product.id, product.name, product.price))\r\n        } else {\r\n            find.quantity++\r\n        }\r\n        this.checkTotal ()\r\n        this.render ()\r\n    },\r\n\r\n    removeProduct (id) {\r\n        let find = this.items.find (item => item.id_product === id)\r\n        if  (find.quantity === 1) {\r\n            this.items.splice(this.items.indexOf(find), 1)\r\n        } else {\r\n            find.quantity--\r\n        }\r\n        this.checkTotal ()\r\n        this.render ()\r\n    },\r\n    checkTotal () {\r\n        let s = 0\r\n        let q = 0\r\n\r\n        this.items.forEach (item => {\r\n            q += item.quantity\r\n            s += item.quantity * item.price\r\n        })\r\n\r\n        this.sum = s\r\n        this.qua = q\r\n        }\r\n    }\r\n    init ();\r\n\n\n//# sourceURL=webpack://js2/./src/pablic/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;