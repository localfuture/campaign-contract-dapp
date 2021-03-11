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

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/mnt/d/Protfolio Projects/campaign/pages/index.js";






function Campaign() {
  const {
    0: campaignAddress,
    1: setcampaignAddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function getDeployedCampaigns() {
      const campaignAdd = await _Ethereum_factory__WEBPACK_IMPORTED_MODULE_2__["default"].methods.getDeployedCampaigns().call();
      const item = campaignAdd.map(address => {
        return {
          header: address,
          description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "View Campaign"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 24
          }, this),
          fluid: true,
          raised: true,
          color: 'red'
        };
      });
      setcampaignAddress(item);
    }

    getDeployedCampaigns();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Campaign Contract"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "Open Campaigns"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      icon: true,
      floated: "right",
      color: "red",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "add"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), "Create Campaign"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
      centered: true,
      items: campaignAddress
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
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

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRXRoZXJldW0vZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9FdGhlcmV1bS93ZWIzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93ZWIzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2ViMy1ienpcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzLWNvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzLWV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjMtZXRoLXBlcnNvbmFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2ViMy1uZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzLXNoaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjMtdXRpbHNcIiJdLCJuYW1lcyI6WyJhZGRyZXNzIiwiYWJpIiwid2ViMyIsImV0aCIsIkNvbnRyYWN0IiwicHJvdmlkZXIiLCJXZWIzIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwiQ2FtcGFpZ24iLCJjYW1wYWlnbkFkZHJlc3MiLCJzZXRjYW1wYWlnbkFkZHJlc3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FtcGFpZ25BZGQiLCJmYWN0b3J5IiwibWV0aG9kcyIsImNhbGwiLCJpdGVtIiwibWFwIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJhaXNlZCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLE9BQU8sR0FBRyw0Q0FBaEI7QUFFQSxNQUFNQyxHQUFHLEdBQUcsQ0FDVjtBQUNFLGNBQVksSUFEZDtBQUVFLFlBQVUsQ0FDUjtBQUNFLFlBQVEsRUFEVjtBQUVFLFlBQVE7QUFGVixHQURRLENBRlo7QUFRRSxVQUFRLG1CQVJWO0FBU0UsYUFBVyxDQUNUO0FBQ0UsWUFBUSxFQURWO0FBRUUsWUFBUTtBQUZWLEdBRFMsQ0FUYjtBQWVFLGFBQVcsS0FmYjtBQWdCRSxxQkFBbUIsTUFoQnJCO0FBaUJFLFVBQVE7QUFqQlYsQ0FEVSxFQW9CVjtBQUNFLGNBQVksS0FEZDtBQUVFLFlBQVUsQ0FDUjtBQUNFLFlBQVEsU0FEVjtBQUVFLFlBQVE7QUFGVixHQURRLENBRlo7QUFRRSxVQUFRLGdCQVJWO0FBU0UsYUFBVyxFQVRiO0FBVUUsYUFBVyxLQVZiO0FBV0UscUJBQW1CLFlBWHJCO0FBWUUsVUFBUTtBQVpWLENBcEJVLEVBa0NWO0FBQ0UsY0FBWSxJQURkO0FBRUUsWUFBVSxFQUZaO0FBR0UsVUFBUSxzQkFIVjtBQUlFLGFBQVcsQ0FDVDtBQUNFLFlBQVEsRUFEVjtBQUVFLFlBQVE7QUFGVixHQURTLENBSmI7QUFVRSxhQUFXLEtBVmI7QUFXRSxxQkFBbUIsTUFYckI7QUFZRSxVQUFRO0FBWlYsQ0FsQ1UsQ0FBWjtBQWtEZSxtRUFBSUMsNkNBQUksQ0FBQ0MsR0FBTCxDQUFTQyxRQUFiLENBQXNCSCxHQUF0QixFQUEyQkQsT0FBM0IsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUN0REE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFJRSxJQUFKOztBQUVBLElBQUksS0FBSixFQUF5RSxFQUF6RSxNQUdPO0FBQ0w7QUFDQSxRQUFNRyxRQUFRLEdBQUcsSUFBSUMsMkNBQUksQ0FBQ0MsU0FBTCxDQUFlQyxZQUFuQixDQUNmLGdEQURlLENBQWpCO0FBR0FOLE1BQUksR0FBRyxJQUFJSSwyQ0FBSixDQUFTRCxRQUFULENBQVA7QUFDRDs7QUFFY0gsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiLGNBQWMsbUJBQU8sQ0FBQyx5REFBaUI7QUFDdkMsV0FBVyxtQkFBTyxDQUFDLDRCQUFXO0FBQzlCLFVBQVUsbUJBQU8sQ0FBQywwQkFBVTtBQUM1QixVQUFVLG1CQUFPLENBQUMsMEJBQVU7QUFDNUIsZUFBZSxtQkFBTyxDQUFDLDRDQUFtQjtBQUMxQyxVQUFVLG1CQUFPLENBQUMsMEJBQVU7QUFDNUIsVUFBVSxtQkFBTyxDQUFDLDBCQUFVO0FBQzVCLFlBQVksbUJBQU8sQ0FBQyw4QkFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNPLFFBQVQsR0FBb0I7QUFDbEIsUUFBTTtBQUFBLE9BQUNDLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NDLHNEQUFRLENBQUMsRUFBRCxDQUF0RDtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxtQkFBZUMsb0JBQWYsR0FBc0M7QUFDcEMsWUFBTUMsV0FBVyxHQUFHLE1BQU1DLHlEQUFPLENBQUNDLE9BQVIsQ0FBZ0JILG9CQUFoQixHQUF1Q0ksSUFBdkMsRUFBMUI7QUFDQSxZQUFNQyxJQUFJLEdBQUdKLFdBQVcsQ0FBQ0ssR0FBWixDQUFnQnBCLE9BQU8sSUFBSTtBQUN0QyxlQUFPO0FBQ0xxQixnQkFBTSxFQUFFckIsT0FESDtBQUVMc0IscUJBQVcsZUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGUjtBQUdMQyxlQUFLLEVBQUUsSUFIRjtBQUlMQyxnQkFBTSxFQUFFLElBSkg7QUFLTEMsZUFBSyxFQUFFO0FBTEYsU0FBUDtBQU9ELE9BUlksQ0FBYjtBQVVBZCx3QkFBa0IsQ0FBQ1EsSUFBRCxDQUFsQjtBQUNEOztBQUVETCx3QkFBb0I7QUFDckIsR0FqQlEsRUFpQk4sRUFqQk0sQ0FBVDtBQW1CQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UscUVBQUMsd0RBQUQ7QUFBUSxVQUFJLE1BQVo7QUFBYSxhQUFPLEVBQUMsT0FBckI7QUFBNkIsV0FBSyxFQUFDLEtBQW5DO0FBQUEsOEJBQ0UscUVBQUMsc0RBQUQ7QUFBTSxZQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFPRSxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxjQUFRLE1BQXBCO0FBQXFCLFdBQUssRUFBRUo7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUEsa0JBREY7QUFXRDs7QUFFY0QsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUN6Q0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHdlYjMgZnJvbSAnLi93ZWIzJztcblxuY29uc3QgYWRkcmVzcyA9ICcweDZhNzgwM2ZlNjAxNmQ5YTUyNzA4MDdlNjVjYmZlNjVjZDUyYmJmNzYnO1xuXG5jb25zdCBhYmkgPSBbXG4gIHtcbiAgICBcImNvbnN0YW50XCI6IHRydWUsXG4gICAgXCJpbnB1dHNcIjogW1xuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwidWludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hbWVcIjogXCJkZXBsb3llZENhbXBhaWduc1wiLFxuICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwicGF5YWJsZVwiOiBmYWxzZSxcbiAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcbiAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBcImNvbnN0YW50XCI6IGZhbHNlLFxuICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwibWluaW11bVwiLFxuICAgICAgICBcInR5cGVcIjogXCJ1aW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcImNyZWF0ZUNhbXBhaWduXCIsXG4gICAgXCJvdXRwdXRzXCI6IFtdLFxuICAgIFwicGF5YWJsZVwiOiBmYWxzZSxcbiAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcbiAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBcImNvbnN0YW50XCI6IHRydWUsXG4gICAgXCJpbnB1dHNcIjogW10sXG4gICAgXCJuYW1lXCI6IFwiZ2V0RGVwbG95ZWRDYW1wYWlnbnNcIixcbiAgICBcIm91dHB1dHNcIjogW1xuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1tdXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwicGF5YWJsZVwiOiBmYWxzZSxcbiAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcbiAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyB3ZWIzLmV0aC5Db250cmFjdChhYmksIGFkZHJlc3MpO1xuIiwiaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5cbmxldCB3ZWIzO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy53ZWIzICE9PSAndW5kZWZpbmVkJykge1xuICAvLyBXZSBhcmUgaW4gdGhlIGJyb3dzZXIgYW5kIG1ldGFtYXNrIGlzIHJ1bm5pbmcuXG4gIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xufSBlbHNlIHtcbiAgLy8gV2UgYXJlIG9uIHRoZSBzZXJ2ZXIgKk9SKiB0aGUgdXNlciBpcyBub3QgcnVubmluZyBtZXRhbWFza1xuICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXG4gICAgJ2h0dHBzOi8vcmlua2VieS5pbmZ1cmEuaW8vb3JESW1nS1J6d05yVkNEckFrNVEnXG4gICk7XG4gIHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlYjM7XG4iLCIvKlxuICAgIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHdlYjMuanMuXG5cbiAgICB3ZWIzLmpzIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAgICBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAgICB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICAgIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiAgICB3ZWIzLmpzIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gICAgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAgICBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gICAgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG5cbiAgICBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAgICBhbG9uZyB3aXRoIHdlYjMuanMuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4qL1xuLyoqXG4gKiBAZmlsZSBpbmRleC5qc1xuICogQGF1dGhvcnM6XG4gKiAgIEZhYmlhbiBWb2dlbHN0ZWxsZXIgPGZhYmlhbkBldGhlcmV1bS5vcmc+XG4gKiAgIEdhdiBXb29kIDxnYXZAcGFyaXR5LmlvPlxuICogICBKZWZmcmV5IFdpbGNrZSA8amVmZnJleS53aWxja2VAZXRoZXJldW0ub3JnPlxuICogICBNYXJlayBLb3Rld2ljeiA8bWFyZWtAcGFyaXR5LmlvPlxuICogICBNYXJpYW4gT2FuY2VhIDxtYXJpYW5AZXRoZXJldW0ub3JnPlxuICogQGRhdGUgMjAxN1xuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciB2ZXJzaW9uID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcbnZhciBjb3JlID0gcmVxdWlyZSgnd2ViMy1jb3JlJyk7XG52YXIgRXRoID0gcmVxdWlyZSgnd2ViMy1ldGgnKTtcbnZhciBOZXQgPSByZXF1aXJlKCd3ZWIzLW5ldCcpO1xudmFyIFBlcnNvbmFsID0gcmVxdWlyZSgnd2ViMy1ldGgtcGVyc29uYWwnKTtcbnZhciBTaGggPSByZXF1aXJlKCd3ZWIzLXNoaCcpO1xudmFyIEJ6eiA9IHJlcXVpcmUoJ3dlYjMtYnp6Jyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCd3ZWIzLXV0aWxzJyk7XG52YXIgV2ViMyA9IGZ1bmN0aW9uIFdlYjMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAvLyBzZXRzIF9yZXF1ZXN0bWFuYWdlciBldGNcbiAgICBjb3JlLnBhY2thZ2VJbml0KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICB0aGlzLnV0aWxzID0gdXRpbHM7XG4gICAgdGhpcy5ldGggPSBuZXcgRXRoKHRoaXMpO1xuICAgIHRoaXMuc2hoID0gbmV3IFNoaCh0aGlzKTtcbiAgICB0aGlzLmJ6eiA9IG5ldyBCenoodGhpcyk7XG4gICAgLy8gb3ZlcndyaXRlIHBhY2thZ2Ugc2V0UHJvdmlkZXJcbiAgICB2YXIgc2V0UHJvdmlkZXIgPSB0aGlzLnNldFByb3ZpZGVyO1xuICAgIHRoaXMuc2V0UHJvdmlkZXIgPSBmdW5jdGlvbiAocHJvdmlkZXIsIG5ldCkge1xuICAgICAgICAvKmpzaGludCB1bnVzZWQ6IGZhbHNlICovXG4gICAgICAgIHNldFByb3ZpZGVyLmFwcGx5KF90aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBfdGhpcy5ldGguc2V0UmVxdWVzdE1hbmFnZXIoX3RoaXMuX3JlcXVlc3RNYW5hZ2VyKTtcbiAgICAgICAgX3RoaXMuc2hoLnNldFJlcXVlc3RNYW5hZ2VyKF90aGlzLl9yZXF1ZXN0TWFuYWdlcik7XG4gICAgICAgIF90aGlzLmJ6ei5zZXRQcm92aWRlcihwcm92aWRlcik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG59O1xuV2ViMy52ZXJzaW9uID0gdmVyc2lvbjtcbldlYjMudXRpbHMgPSB1dGlscztcbldlYjMubW9kdWxlcyA9IHtcbiAgICBFdGg6IEV0aCxcbiAgICBOZXQ6IE5ldCxcbiAgICBQZXJzb25hbDogUGVyc29uYWwsXG4gICAgU2hoOiBTaGgsXG4gICAgQnp6OiBCenpcbn07XG5jb3JlLmFkZFByb3ZpZGVycyhXZWIzKTtcbm1vZHVsZS5leHBvcnRzID0gV2ViMztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vRXRoZXJldW0vZmFjdG9yeSc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcblxuZnVuY3Rpb24gQ2FtcGFpZ24oKSB7XG4gIGNvbnN0IFtjYW1wYWlnbkFkZHJlc3MsIHNldGNhbXBhaWduQWRkcmVzc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREZXBsb3llZENhbXBhaWducygpIHtcbiAgICAgIGNvbnN0IGNhbXBhaWduQWRkID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuICAgICAgY29uc3QgaXRlbSA9IGNhbXBhaWduQWRkLm1hcChhZGRyZXNzID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXG4gICAgICAgICAgZGVzY3JpcHRpb246IDxhPlZpZXcgQ2FtcGFpZ248L2E+LFxuICAgICAgICAgIGZsdWlkOiB0cnVlLFxuICAgICAgICAgIHJhaXNlZDogdHJ1ZSxcbiAgICAgICAgICBjb2xvcjogJ3JlZCdcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBzZXRjYW1wYWlnbkFkZHJlc3MoaXRlbSk7XG4gICAgfVxuXG4gICAgZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5DYW1wYWlnbiBDb250cmFjdDwvaDE+XG4gICAgICA8aDM+T3BlbiBDYW1wYWlnbnM8L2gzPlxuICAgICAgPEJ1dHRvbiBpY29uIGZsb2F0ZWQ9J3JpZ2h0JyBjb2xvcj0ncmVkJz5cbiAgICAgICAgPEljb24gbmFtZT0nYWRkJyAvPlxuICAgICAgICAgQ3JlYXRlIENhbXBhaWduXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxDYXJkLkdyb3VwIGNlbnRlcmVkIGl0ZW1zPXtjYW1wYWlnbkFkZHJlc3N9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjMtYnp6XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjMtY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzLWV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzLWV0aC1wZXJzb25hbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzLW5ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzLXNoaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzLXV0aWxzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=