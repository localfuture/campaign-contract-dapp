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



var _jsxFileName = "/mnt/d/Protfolio Projects/campaign/pages/index.js",
    _s = $RefreshSig$();





function Campaign() {
  _s();

  const {
    0: campaignAddress,
    1: setcampaignAddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const items = [{
    header: 'Project Report - April',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%'
  }, {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%'
  }, {
    header: 'Project Report - June',
    description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%'
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    var item = [];

    async function getDeployedCampaigns() {
      const campaignAdd = await _Ethereum_factory__WEBPACK_IMPORTED_MODULE_2__["default"].methods.getDeployedCampaigns().call();
      const item = campaignAdd.map(address => {
        return {
          header: address,
          description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "View Campaign"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 30
          }, this)
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
      lineNumber: 46,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: campaignAddress
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
      centered: true,
      items: campaignAddress
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ2FtcGFpZ24iLCJjYW1wYWlnbkFkZHJlc3MiLCJzZXRjYW1wYWlnbkFkZHJlc3MiLCJ1c2VTdGF0ZSIsIml0ZW1zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwidXNlRWZmZWN0IiwiaXRlbSIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FtcGFpZ25BZGQiLCJmYWN0b3J5IiwibWV0aG9kcyIsImNhbGwiLCJtYXAiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQ2hCLFFBQU07QUFBQSxPQUFDQyxlQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQXdDQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFDQSxRQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxVQUFNLEVBQUUsd0JBRFY7QUFFRUMsZUFBVyxFQUNULGtGQUhKO0FBSUVDLFFBQUksRUFBRTtBQUpSLEdBRFksRUFPWjtBQUNFRixVQUFNLEVBQUUsc0JBRFY7QUFFRUMsZUFBVyxFQUNULGdGQUhKO0FBSUVDLFFBQUksRUFBRTtBQUpSLEdBUFksRUFhWjtBQUNFRixVQUFNLEVBQUUsdUJBRFY7QUFFRUMsZUFBVyxFQUNULDJGQUhKO0FBSUVDLFFBQUksRUFBRTtBQUpSLEdBYlksQ0FBZDtBQXFCQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBQ0UsbUJBQWVDLG9CQUFmLEdBQXNDO0FBQ2xDLFlBQU1DLFdBQVcsR0FBRyxNQUFNQyx5REFBTyxDQUFDQyxPQUFSLENBQWdCSCxvQkFBaEIsR0FBdUNJLElBQXZDLEVBQTFCO0FBQ0EsWUFBTUwsSUFBSSxHQUFHRSxXQUFXLENBQUNJLEdBQVosQ0FBZ0JDLE9BQU8sSUFBSTtBQUN0QyxlQUFPO0FBQ0xYLGdCQUFNLEVBQUVXLE9BREg7QUFFTFYscUJBQVcsZUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZSLFNBQVA7QUFJRCxPQUxZLENBQWI7QUFNQUosd0JBQWtCLENBQUNPLElBQUQsQ0FBbEI7QUFDRDs7QUFFSEMsd0JBQW9CO0FBQ3ZCLEdBZFEsRUFjUCxFQWRPLENBQVQ7QUFnQkEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBSVQ7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRSxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxjQUFRLE1BQXBCO0FBQXFCLFdBQUssRUFBRUE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUEsa0JBREY7QUFPRDs7R0E5Q01ELFE7O0tBQUFBLFE7QUFnRFFBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg0MmVmOWU3NWVhYjhiZGMxYjJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9FdGhlcmV1bS9mYWN0b3J5JztcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmZ1bmN0aW9uIENhbXBhaWduKCkge1xuICAgIGNvbnN0IFtjYW1wYWlnbkFkZHJlc3MsIHNldGNhbXBhaWduQWRkcmVzc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogJ1Byb2plY3QgUmVwb3J0IC0gQXByaWwnLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnTGV2ZXJhZ2UgYWdpbGUgZnJhbWV3b3JrcyB0byBwcm92aWRlIGEgcm9idXN0IHN5bm9wc2lzIGZvciBoaWdoIGxldmVsIG92ZXJ2aWV3cy4nLFxuICAgICAgICBtZXRhOiAnUk9JOiAzMCUnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiAnUHJvamVjdCBSZXBvcnQgLSBNYXknLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnQnJpbmcgdG8gdGhlIHRhYmxlIHdpbi13aW4gc3Vydml2YWwgc3RyYXRlZ2llcyB0byBlbnN1cmUgcHJvYWN0aXZlIGRvbWluYXRpb24uJyxcbiAgICAgICAgbWV0YTogJ1JPSTogMzQlJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogJ1Byb2plY3QgUmVwb3J0IC0gSnVuZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdDYXBpdGFsaXNlIG9uIGxvdyBoYW5naW5nIGZydWl0IHRvIGlkZW50aWZ5IGEgYmFsbHBhcmsgdmFsdWUgYWRkZWQgYWN0aXZpdHkgdG8gYmV0YSB0ZXN0LicsXG4gICAgICAgIG1ldGE6ICdST0k6IDI3JScsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgdmFyIGl0ZW0gPSBbXTtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKSB7XG4gICAgICAgICAgICBjb25zdCBjYW1wYWlnbkFkZCA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjYW1wYWlnbkFkZC5tYXAoYWRkcmVzcyA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiA8YT5WaWV3IENhbXBhaWduPC9hPlxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldGNhbXBhaWduQWRkcmVzcyhpdGVtKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKTtcbiAgICB9LFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aDE+Q2FtcGFpZ24gQ29udHJhY3Q8L2gxPlxuICAgICAgICA8cD57Y2FtcGFpZ25BZGRyZXNzfTwvcD5cbiAgICAgICAgPENhcmQuR3JvdXAgY2VudGVyZWQgaXRlbXM9e2NhbXBhaWduQWRkcmVzc30gLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBDYW1wYWlnbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=