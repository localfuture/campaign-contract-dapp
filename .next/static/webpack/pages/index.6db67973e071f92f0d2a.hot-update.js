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
    async function getDeployedCampaigns() {
      const campaignAdd = await _Ethereum_factory__WEBPACK_IMPORTED_MODULE_2__["default"].methods.getDeployedCampaigns().call();
      campaignAddress;
      setcampaignAddress(item);
    }

    getDeployedCampaigns();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Campaign Contract"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: campaignAddress
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
      centered: true,
      items: campaignAddress
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ2FtcGFpZ24iLCJjYW1wYWlnbkFkZHJlc3MiLCJzZXRjYW1wYWlnbkFkZHJlc3MiLCJ1c2VTdGF0ZSIsIml0ZW1zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwidXNlRWZmZWN0IiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYW1wYWlnbkFkZCIsImZhY3RvcnkiLCJtZXRob2RzIiwiY2FsbCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFDaEIsUUFBTTtBQUFBLE9BQUNDLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NDLHNEQUFRLENBQUMsRUFBRCxDQUF0RDtBQUNBLFFBQU1DLEtBQUssR0FBRyxDQUNaO0FBQ0VDLFVBQU0sRUFBRSx3QkFEVjtBQUVFQyxlQUFXLEVBQ1Qsa0ZBSEo7QUFJRUMsUUFBSSxFQUFFO0FBSlIsR0FEWSxFQU9aO0FBQ0VGLFVBQU0sRUFBRSxzQkFEVjtBQUVFQyxlQUFXLEVBQ1QsZ0ZBSEo7QUFJRUMsUUFBSSxFQUFFO0FBSlIsR0FQWSxFQWFaO0FBQ0VGLFVBQU0sRUFBRSx1QkFEVjtBQUVFQyxlQUFXLEVBQ1QsMkZBSEo7QUFJRUMsUUFBSSxFQUFFO0FBSlIsR0FiWSxDQUFkO0FBcUJBQyx5REFBUyxDQUFDLE1BQU07QUFDWixtQkFBZUMsb0JBQWYsR0FBc0M7QUFDbEMsWUFBTUMsV0FBVyxHQUFHLE1BQU1DLHlEQUFPLENBQUNDLE9BQVIsQ0FBZ0JILG9CQUFoQixHQUF1Q0ksSUFBdkMsRUFBMUI7QUFDQVoscUJBQWU7QUFDZkMsd0JBQWtCLENBQUNZLElBQUQsQ0FBbEI7QUFDRDs7QUFFSEwsd0JBQW9CO0FBQ3ZCLEdBUlEsRUFRUCxFQVJPLENBQVQ7QUFVQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUFJUjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLHFFQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLGNBQVEsTUFBcEI7QUFBcUIsV0FBSyxFQUFFQTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQSxrQkFERjtBQU9EOztHQXhDTUQsUTs7S0FBQUEsUTtBQTBDUUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmRiNjc5NzNlMDcxZjkyZjBkMmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL0V0aGVyZXVtL2ZhY3RvcnknO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuZnVuY3Rpb24gQ2FtcGFpZ24oKSB7XG4gICAgY29uc3QgW2NhbXBhaWduQWRkcmVzcywgc2V0Y2FtcGFpZ25BZGRyZXNzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiAnUHJvamVjdCBSZXBvcnQgLSBBcHJpbCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdMZXZlcmFnZSBhZ2lsZSBmcmFtZXdvcmtzIHRvIHByb3ZpZGUgYSByb2J1c3Qgc3lub3BzaXMgZm9yIGhpZ2ggbGV2ZWwgb3ZlcnZpZXdzLicsXG4gICAgICAgIG1ldGE6ICdST0k6IDMwJScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6ICdQcm9qZWN0IFJlcG9ydCAtIE1heScsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdCcmluZyB0byB0aGUgdGFibGUgd2luLXdpbiBzdXJ2aXZhbCBzdHJhdGVnaWVzIHRvIGVuc3VyZSBwcm9hY3RpdmUgZG9taW5hdGlvbi4nLFxuICAgICAgICBtZXRhOiAnUk9JOiAzNCUnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiAnUHJvamVjdCBSZXBvcnQgLSBKdW5lJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0NhcGl0YWxpc2Ugb24gbG93IGhhbmdpbmcgZnJ1aXQgdG8gaWRlbnRpZnkgYSBiYWxscGFyayB2YWx1ZSBhZGRlZCBhY3Rpdml0eSB0byBiZXRhIHRlc3QuJyxcbiAgICAgICAgbWV0YTogJ1JPSTogMjclJyxcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldERlcGxveWVkQ2FtcGFpZ25zKCkge1xuICAgICAgICAgICAgY29uc3QgY2FtcGFpZ25BZGQgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XG4gICAgICAgICAgICBjYW1wYWlnbkFkZHJlc3NcbiAgICAgICAgICAgIHNldGNhbXBhaWduQWRkcmVzcyhpdGVtKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKTtcbiAgICB9LFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aDE+Q2FtcGFpZ24gQ29udHJhY3Q8L2gxPlxuICAgICAgICA8cD57Y2FtcGFpZ25BZGRyZXNzfTwvcD5cbiAgICAgICAgPENhcmQuR3JvdXAgY2VudGVyZWQgaXRlbXM9e2NhbXBhaWduQWRkcmVzc30gLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBDYW1wYWlnbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=