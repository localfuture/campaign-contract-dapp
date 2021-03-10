module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Ethereum/factory.js":
/*!*****************************!*\
  !*** ./Ethereum/factory.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./Ethereum/web3.js");

const address = '0x6a7803fe6016d9a5270807e65cbfe65cd52bbf76';
const abi = [{
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "uint256"
  }],
  "name": "deployedCampaigns",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "minimum",
    "type": "uint256"
  }],
  "name": "createCampaign",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getDeployedCampaigns",
  "outputs": [{
    "name": "",
    "type": "address[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}];
/* harmony default export */ __webpack_exports__["default"] = (new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(abi, address));

/***/ }),

/***/ "./Ethereum/web3.js":
/*!**************************!*\
  !*** ./Ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

let web3;

if (false) {} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider('https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q');
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ "./node_modules/web3/lib/index.js":
/*!****************************************!*\
  !*** ./node_modules/web3/lib/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @authors:
 *   Fabian Vogelsteller <fabian@ethereum.org>
 *   Gav Wood <gav@parity.io>
 *   Jeffrey Wilcke <jeffrey.wilcke@ethereum.org>
 *   Marek Kotewicz <marek@parity.io>
 *   Marian Oancea <marian@ethereum.org>
 * @date 2017
 */

var version = __webpack_require__(/*! ../package.json */ "./node_modules/web3/package.json").version;
var core = __webpack_require__(/*! web3-core */ "web3-core");
var Eth = __webpack_require__(/*! web3-eth */ "web3-eth");
var Net = __webpack_require__(/*! web3-net */ "web3-net");
var Personal = __webpack_require__(/*! web3-eth-personal */ "web3-eth-personal");
var Shh = __webpack_require__(/*! web3-shh */ "web3-shh");
var Bzz = __webpack_require__(/*! web3-bzz */ "web3-bzz");
var utils = __webpack_require__(/*! web3-utils */ "web3-utils");
var Web3 = function Web3() {
    var _this = this;
    // sets _requestmanager etc
    core.packageInit(this, arguments);
    this.version = version;
    this.utils = utils;
    this.eth = new Eth(this);
    this.shh = new Shh(this);
    this.bzz = new Bzz(this);
    // overwrite package setProvider
    var setProvider = this.setProvider;
    this.setProvider = function (provider, net) {
        /*jshint unused: false */
        setProvider.apply(_this, arguments);
        _this.eth.setRequestManager(_this._requestManager);
        _this.shh.setRequestManager(_this._requestManager);
        _this.bzz.setProvider(provider);
        return true;
    };
};
Web3.version = version;
Web3.utils = utils;
Web3.modules = {
    Eth: Eth,
    Net: Net,
    Personal: Personal,
    Shh: Shh,
    Bzz: Bzz
};
core.addProviders(Web3);
module.exports = Web3;


/***/ }),

/***/ "./node_modules/web3/package.json":
/*!****************************************!*\
  !*** ./node_modules/web3/package.json ***!
  \****************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, authors, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, engines, gitHead, homepage, keywords, license, main, name, repository, scripts, types, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"web3\",\"_id\":\"web3@1.3.4\",\"_inBundle\":false,\"_integrity\":\"sha512-D6cMb2EtTMLHgdGbkTPGl/Qi7DAfczR+Lp7iFX3bcu/bsD9V8fZW69hA8v5cRPNGzXUwVQebk3bS17WKR4cD2w==\",\"_location\":\"/web3\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"web3\",\"name\":\"web3\",\"escapedName\":\"web3\",\"rawSpec\":\"\",\"saveSpec\":null,\"fetchSpec\":\"latest\"},\"_requiredBy\":[\"#USER\",\"/\"],\"_resolved\":\"https://registry.npmjs.org/web3/-/web3-1.3.4.tgz\",\"_shasum\":\"31e014873360aa5840eb17f9f171190c967cffb7\",\"_spec\":\"web3\",\"_where\":\"/mnt/d/Protfolio Projects/campaign\",\"author\":{\"name\":\"ethereum.org\"},\"authors\":[{\"name\":\"Fabian Vogelsteller\",\"email\":\"fabian@ethereum.org\",\"homepage\":\"http://frozeman.de\"},{\"name\":\"Marek Kotewicz\",\"email\":\"marek@parity.io\",\"url\":\"https://github.com/debris\"},{\"name\":\"Marian Oancea\",\"url\":\"https://github.com/cubedro\"},{\"name\":\"Gav Wood\",\"email\":\"g@parity.io\",\"homepage\":\"http://gavwood.com\"},{\"name\":\"Jeffery Wilcke\",\"email\":\"jeffrey.wilcke@ethereum.org\",\"url\":\"https://github.com/obscuren\"}],\"bugs\":{\"url\":\"https://github.com/ethereum/web3.js/issues\"},\"bundleDependencies\":false,\"dependencies\":{\"web3-bzz\":\"1.3.4\",\"web3-core\":\"1.3.4\",\"web3-eth\":\"1.3.4\",\"web3-eth-personal\":\"1.3.4\",\"web3-net\":\"1.3.4\",\"web3-shh\":\"1.3.4\",\"web3-utils\":\"1.3.4\"},\"deprecated\":false,\"description\":\"Ethereum JavaScript API\",\"devDependencies\":{\"@types/node\":\"^12.12.6\",\"dtslint\":\"^3.4.1\",\"typescript\":\"^3.9.5\"},\"engines\":{\"node\":\">=8.0.0\"},\"gitHead\":\"f6d60bd5ec70a932d8b7bc2cbb6a577a2fd22919\",\"homepage\":\"https://github.com/ethereum/web3.js#readme\",\"keywords\":[\"Ethereum\",\"JavaScript\",\"API\"],\"license\":\"LGPL-3.0\",\"main\":\"lib/index.js\",\"name\":\"web3\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ethereum/web3.js.git\"},\"scripts\":{\"dtslint\":\"dtslint --localTs ../../node_modules/typescript/lib types\",\"tsc\":\"tsc -b tsconfig.json\"},\"types\":\"types/index.d.ts\",\"version\":\"1.3.4\"}");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Ethereum/factory */ "./Ethereum/factory.js");


var _jsxFileName = "/mnt/d/Protfolio Projects/campaign/pages/index.js";



function Campaign() {
  const {
    0: campaignAddress,
    1: setcampaignAddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function getDeployedCampaigns() {
      const campaignAdd = await _Ethereum_factory__WEBPACK_IMPORTED_MODULE_2__["default"].methods.getDeployedCampaigns().call();
      setcampaignAddress(campaignAdd);
    }

    getDeployedCampaigns();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Campaign Contract"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: campaignAddress
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (Campaign);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "web3-bzz":
/*!***************************!*\
  !*** external "web3-bzz" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3-bzz");

/***/ }),

/***/ "web3-core":
/*!****************************!*\
  !*** external "web3-core" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3-core");

/***/ }),

/***/ "web3-eth":
/*!***************************!*\
  !*** external "web3-eth" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3-eth");

/***/ }),

/***/ "web3-eth-personal":
/*!************************************!*\
  !*** external "web3-eth-personal" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3-eth-personal");

/***/ }),

/***/ "web3-net":
/*!***************************!*\
  !*** external "web3-net" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3-net");

/***/ }),

/***/ "web3-shh":
/*!***************************!*\
  !*** external "web3-shh" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3-shh");

/***/ }),

/***/ "web3-utils":
/*!*****************************!*\
  !*** external "web3-utils" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3-utils");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRXRoZXJldW0vZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9FdGhlcmV1bS93ZWIzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93ZWIzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjMtYnp6XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2ViMy1jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2ViMy1ldGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzLWV0aC1wZXJzb25hbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjMtbmV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2ViMy1zaGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzLXV0aWxzXCIiXSwibmFtZXMiOlsiYWRkcmVzcyIsImFiaSIsIndlYjMiLCJldGgiLCJDb250cmFjdCIsInByb3ZpZGVyIiwiV2ViMyIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciIsIkNhbXBhaWduIiwiY2FtcGFpZ25BZGRyZXNzIiwic2V0Y2FtcGFpZ25BZGRyZXNzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbXBhaWduQWRkIiwiZmFjdG9yeSIsIm1ldGhvZHMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUNBOztBQUVBLFNBQVNPLFFBQVQsR0FBb0I7QUFDaEIsUUFBTTtBQUFBLE9BQUNDLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NDLHNEQUFRLENBQUMsRUFBRCxDQUF0RDtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDWixtQkFBZUMsb0JBQWYsR0FBc0M7QUFDbEMsWUFBTUMsV0FBVyxHQUFHLE1BQU1DLHlEQUFPLENBQUNDLE9BQVIsQ0FBZ0JILG9CQUFoQixHQUF1Q0ksSUFBdkMsRUFBMUI7QUFDQVAsd0JBQWtCLENBQUNJLFdBQUQsQ0FBbEI7QUFDRDs7QUFFSEQsd0JBQW9CO0FBQ3ZCLEdBUFEsRUFPUCxFQVBPLENBQVQ7QUFTQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUFJSjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBTUQ7O0FBRWNELHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDdkJGLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB3ZWIzIGZyb20gJy4vd2ViMyc7XG5cbmNvbnN0IGFkZHJlc3MgPSAnMHg2YTc4MDNmZTYwMTZkOWE1MjcwODA3ZTY1Y2JmZTY1Y2Q1MmJiZjc2JztcblxuY29uc3QgYWJpID0gW1xuICB7XG4gICAgXCJjb25zdGFudFwiOiB0cnVlLFxuICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiZGVwbG95ZWRDYW1wYWlnbnNcIixcbiAgICBcIm91dHB1dHNcIjogW1xuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBcInBheWFibGVcIjogZmFsc2UsXG4gICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXG4gICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgXCJjb25zdGFudFwiOiBmYWxzZSxcbiAgICBcImlucHV0c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIm1pbmltdW1cIixcbiAgICAgICAgXCJ0eXBlXCI6IFwidWludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hbWVcIjogXCJjcmVhdGVDYW1wYWlnblwiLFxuICAgIFwib3V0cHV0c1wiOiBbXSxcbiAgICBcInBheWFibGVcIjogZmFsc2UsXG4gICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJub25wYXlhYmxlXCIsXG4gICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgXCJjb25zdGFudFwiOiB0cnVlLFxuICAgIFwiaW5wdXRzXCI6IFtdLFxuICAgIFwibmFtZVwiOiBcImdldERlcGxveWVkQ2FtcGFpZ25zXCIsXG4gICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NbXVwiXG4gICAgICB9XG4gICAgXSxcbiAgICBcInBheWFibGVcIjogZmFsc2UsXG4gICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXG4gICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgd2ViMy5ldGguQ29udHJhY3QoYWJpLCBhZGRyZXNzKTtcbiIsImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuXG5sZXQgd2ViMztcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgLy8gV2UgYXJlIGluIHRoZSBicm93c2VyIGFuZCBtZXRhbWFzayBpcyBydW5uaW5nLlxuICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcbn0gZWxzZSB7XG4gIC8vIFdlIGFyZSBvbiB0aGUgc2VydmVyICpPUiogdGhlIHVzZXIgaXMgbm90IHJ1bm5pbmcgbWV0YW1hc2tcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKFxuICAgICdodHRwczovL3JpbmtlYnkuaW5mdXJhLmlvL29yREltZ0tSendOclZDRHJBazVRJ1xuICApO1xuICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWIzO1xuIiwiLypcbiAgICBUaGlzIGZpbGUgaXMgcGFydCBvZiB3ZWIzLmpzLlxuXG4gICAgd2ViMy5qcyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gICAgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gICAgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAgICAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG4gICAgd2ViMy5qcyBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICAgIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gICAgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICAgIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuXG4gICAgWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gICAgYWxvbmcgd2l0aCB3ZWIzLmpzLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuKi9cbi8qKlxuICogQGZpbGUgaW5kZXguanNcbiAqIEBhdXRob3JzOlxuICogICBGYWJpYW4gVm9nZWxzdGVsbGVyIDxmYWJpYW5AZXRoZXJldW0ub3JnPlxuICogICBHYXYgV29vZCA8Z2F2QHBhcml0eS5pbz5cbiAqICAgSmVmZnJleSBXaWxja2UgPGplZmZyZXkud2lsY2tlQGV0aGVyZXVtLm9yZz5cbiAqICAgTWFyZWsgS290ZXdpY3ogPG1hcmVrQHBhcml0eS5pbz5cbiAqICAgTWFyaWFuIE9hbmNlYSA8bWFyaWFuQGV0aGVyZXVtLm9yZz5cbiAqIEBkYXRlIDIwMTdcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdmVyc2lvbiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb247XG52YXIgY29yZSA9IHJlcXVpcmUoJ3dlYjMtY29yZScpO1xudmFyIEV0aCA9IHJlcXVpcmUoJ3dlYjMtZXRoJyk7XG52YXIgTmV0ID0gcmVxdWlyZSgnd2ViMy1uZXQnKTtcbnZhciBQZXJzb25hbCA9IHJlcXVpcmUoJ3dlYjMtZXRoLXBlcnNvbmFsJyk7XG52YXIgU2hoID0gcmVxdWlyZSgnd2ViMy1zaGgnKTtcbnZhciBCenogPSByZXF1aXJlKCd3ZWIzLWJ6eicpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnd2ViMy11dGlscycpO1xudmFyIFdlYjMgPSBmdW5jdGlvbiBXZWIzKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgLy8gc2V0cyBfcmVxdWVzdG1hbmFnZXIgZXRjXG4gICAgY29yZS5wYWNrYWdlSW5pdCh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgdGhpcy51dGlscyA9IHV0aWxzO1xuICAgIHRoaXMuZXRoID0gbmV3IEV0aCh0aGlzKTtcbiAgICB0aGlzLnNoaCA9IG5ldyBTaGgodGhpcyk7XG4gICAgdGhpcy5ienogPSBuZXcgQnp6KHRoaXMpO1xuICAgIC8vIG92ZXJ3cml0ZSBwYWNrYWdlIHNldFByb3ZpZGVyXG4gICAgdmFyIHNldFByb3ZpZGVyID0gdGhpcy5zZXRQcm92aWRlcjtcbiAgICB0aGlzLnNldFByb3ZpZGVyID0gZnVuY3Rpb24gKHByb3ZpZGVyLCBuZXQpIHtcbiAgICAgICAgLypqc2hpbnQgdW51c2VkOiBmYWxzZSAqL1xuICAgICAgICBzZXRQcm92aWRlci5hcHBseShfdGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgX3RoaXMuZXRoLnNldFJlcXVlc3RNYW5hZ2VyKF90aGlzLl9yZXF1ZXN0TWFuYWdlcik7XG4gICAgICAgIF90aGlzLnNoaC5zZXRSZXF1ZXN0TWFuYWdlcihfdGhpcy5fcmVxdWVzdE1hbmFnZXIpO1xuICAgICAgICBfdGhpcy5ienouc2V0UHJvdmlkZXIocHJvdmlkZXIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xufTtcbldlYjMudmVyc2lvbiA9IHZlcnNpb247XG5XZWIzLnV0aWxzID0gdXRpbHM7XG5XZWIzLm1vZHVsZXMgPSB7XG4gICAgRXRoOiBFdGgsXG4gICAgTmV0OiBOZXQsXG4gICAgUGVyc29uYWw6IFBlcnNvbmFsLFxuICAgIFNoaDogU2hoLFxuICAgIEJ6ejogQnp6XG59O1xuY29yZS5hZGRQcm92aWRlcnMoV2ViMyk7XG5tb2R1bGUuZXhwb3J0cyA9IFdlYjM7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9FdGhlcmV1bS9mYWN0b3J5JztcblxuZnVuY3Rpb24gQ2FtcGFpZ24oKSB7XG4gICAgY29uc3QgW2NhbXBhaWduQWRkcmVzcywgc2V0Y2FtcGFpZ25BZGRyZXNzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXREZXBsb3llZENhbXBhaWducygpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbXBhaWduQWRkID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuICAgICAgICAgICAgc2V0Y2FtcGFpZ25BZGRyZXNzKGNhbXBhaWduQWRkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKTtcbiAgICB9LFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aDE+Q2FtcGFpZ24gQ29udHJhY3Q8L2gxPlxuICAgICAgICA8cD57Y2FtcGFpZ25BZGRyZXNzfTwvcD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBDYW1wYWlnbjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzLWJ6elwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzLWNvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViMy1ldGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViMy1ldGgtcGVyc29uYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViMy1uZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViMy1zaGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViMy11dGlsc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9