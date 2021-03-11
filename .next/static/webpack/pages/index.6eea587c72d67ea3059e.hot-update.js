webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Ethereum/factory */ "./Ethereum/factory.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "/mnt/d/Protfolio Projects/campaign/pages/index.js",
    _s = $RefreshSig$();






function Campaign() {
  _s();

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
            lineNumber: 15,
            columnNumber: 30
          }, this),
          fluid: true
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
      lineNumber: 28,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
      centered: true,
      items: campaignAddress
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(Campaign, "3+r92Z8P497boOdRoL3zbeeyTr0=");

_c = Campaign;
/* harmony default export */ __webpack_exports__["default"] = (Campaign);

var _c;

$RefreshReg$(_c, "Campaign");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ2FtcGFpZ24iLCJjYW1wYWlnbkFkZHJlc3MiLCJzZXRjYW1wYWlnbkFkZHJlc3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FtcGFpZ25BZGQiLCJmYWN0b3J5IiwibWV0aG9kcyIsImNhbGwiLCJpdGVtIiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiZmx1aWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQ2hCLFFBQU07QUFBQSxPQUFDQyxlQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQXdDQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ1osbUJBQWVDLG9CQUFmLEdBQXNDO0FBQ2xDLFlBQU1DLFdBQVcsR0FBRyxNQUFNQyx5REFBTyxDQUFDQyxPQUFSLENBQWdCSCxvQkFBaEIsR0FBdUNJLElBQXZDLEVBQTFCO0FBQ0EsWUFBTUMsSUFBSSxHQUFHSixXQUFXLENBQUNLLEdBQVosQ0FBZ0JDLE9BQU8sSUFBSTtBQUN0QyxlQUFPO0FBQ0xDLGdCQUFNLEVBQUVELE9BREg7QUFFTEUscUJBQVcsZUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGUjtBQUdMQyxlQUFLLEVBQUU7QUFIRixTQUFQO0FBS0QsT0FOWSxDQUFiO0FBUUFiLHdCQUFrQixDQUFDUSxJQUFELENBQWxCO0FBQ0Q7O0FBRUhMLHdCQUFvQjtBQUN2QixHQWZRLEVBZVAsRUFmTyxDQUFUO0FBaUJBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLGNBQVEsTUFBcEI7QUFBcUIsV0FBSyxFQUFFSjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQU1EOztHQTFCTUQsUTs7S0FBQUEsUTtBQTRCUUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmVlYTU4N2M3MmQ2N2VhMzA1OWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL0V0aGVyZXVtL2ZhY3RvcnknO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xuXG5mdW5jdGlvbiBDYW1wYWlnbigpIHtcbiAgICBjb25zdCBbY2FtcGFpZ25BZGRyZXNzLCBzZXRjYW1wYWlnbkFkZHJlc3NdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKSB7XG4gICAgICAgICAgICBjb25zdCBjYW1wYWlnbkFkZCA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjYW1wYWlnbkFkZC5tYXAoYWRkcmVzcyA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiA8YT5WaWV3IENhbXBhaWduPC9hPixcbiAgICAgICAgICAgICAgICBmbHVpZDogdHJ1ZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNldGNhbXBhaWduQWRkcmVzcyhpdGVtKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKTtcbiAgICB9LFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aDE+Q2FtcGFpZ24gQ29udHJhY3Q8L2gxPlxuICAgICAgICA8Q2FyZC5Hcm91cCBjZW50ZXJlZCBpdGVtcz17Y2FtcGFpZ25BZGRyZXNzfSAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IENhbXBhaWduO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==