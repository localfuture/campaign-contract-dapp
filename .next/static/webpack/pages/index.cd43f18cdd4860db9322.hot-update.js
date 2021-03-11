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
      const item = campaignAdd.map(address => {
        return {
          header: address,
          description: 'View Contract'
        };
      });
      console.log(item);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ2FtcGFpZ24iLCJjYW1wYWlnbkFkZHJlc3MiLCJzZXRjYW1wYWlnbkFkZHJlc3MiLCJ1c2VTdGF0ZSIsIml0ZW1zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwidXNlRWZmZWN0IiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYW1wYWlnbkFkZCIsImZhY3RvcnkiLCJtZXRob2RzIiwiY2FsbCIsIml0ZW0iLCJtYXAiLCJhZGRyZXNzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUNoQixRQUFNO0FBQUEsT0FBQ0MsZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUF3Q0Msc0RBQVEsQ0FBQyxFQUFELENBQXREO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRUMsVUFBTSxFQUFFLHdCQURWO0FBRUVDLGVBQVcsRUFDVCxrRkFISjtBQUlFQyxRQUFJLEVBQUU7QUFKUixHQURZLEVBT1o7QUFDRUYsVUFBTSxFQUFFLHNCQURWO0FBRUVDLGVBQVcsRUFDVCxnRkFISjtBQUlFQyxRQUFJLEVBQUU7QUFKUixHQVBZLEVBYVo7QUFDRUYsVUFBTSxFQUFFLHVCQURWO0FBRUVDLGVBQVcsRUFDVCwyRkFISjtBQUlFQyxRQUFJLEVBQUU7QUFKUixHQWJZLENBQWQ7QUFxQkFDLHlEQUFTLENBQUMsTUFBTTtBQUNaLG1CQUFlQyxvQkFBZixHQUFzQztBQUNsQyxZQUFNQyxXQUFXLEdBQUcsTUFBTUMseURBQU8sQ0FBQ0MsT0FBUixDQUFnQkgsb0JBQWhCLEdBQXVDSSxJQUF2QyxFQUExQjtBQUNBLFlBQU1DLElBQUksR0FBR0osV0FBVyxDQUFDSyxHQUFaLENBQWdCQyxPQUFPLElBQUk7QUFDdEMsZUFBTztBQUNMWCxnQkFBTSxFQUFFVyxPQURIO0FBRUxWLHFCQUFXLEVBQUU7QUFGUixTQUFQO0FBSUQsT0FMWSxDQUFiO0FBTUFXLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBQ0FaLHdCQUFrQixDQUFDWSxJQUFELENBQWxCO0FBQ0Q7O0FBRUhMLHdCQUFvQjtBQUN2QixHQWRRLEVBY1AsRUFkTyxDQUFUO0FBZ0JBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsZ0JBQUlSO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UscUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksY0FBUSxNQUFwQjtBQUFxQixXQUFLLEVBQUVBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBLGtCQURGO0FBT0Q7O0dBOUNNRCxROztLQUFBQSxRO0FBZ0RRQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jZDQzZjE4Y2RkNDg2MGRiOTMyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vRXRoZXJldW0vZmFjdG9yeSc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5mdW5jdGlvbiBDYW1wYWlnbigpIHtcbiAgICBjb25zdCBbY2FtcGFpZ25BZGRyZXNzLCBzZXRjYW1wYWlnbkFkZHJlc3NdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAge1xuICAgICAgICBoZWFkZXI6ICdQcm9qZWN0IFJlcG9ydCAtIEFwcmlsJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0xldmVyYWdlIGFnaWxlIGZyYW1ld29ya3MgdG8gcHJvdmlkZSBhIHJvYnVzdCBzeW5vcHNpcyBmb3IgaGlnaCBsZXZlbCBvdmVydmlld3MuJyxcbiAgICAgICAgbWV0YTogJ1JPSTogMzAlJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogJ1Byb2plY3QgUmVwb3J0IC0gTWF5JyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0JyaW5nIHRvIHRoZSB0YWJsZSB3aW4td2luIHN1cnZpdmFsIHN0cmF0ZWdpZXMgdG8gZW5zdXJlIHByb2FjdGl2ZSBkb21pbmF0aW9uLicsXG4gICAgICAgIG1ldGE6ICdST0k6IDM0JScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6ICdQcm9qZWN0IFJlcG9ydCAtIEp1bmUnLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnQ2FwaXRhbGlzZSBvbiBsb3cgaGFuZ2luZyBmcnVpdCB0byBpZGVudGlmeSBhIGJhbGxwYXJrIHZhbHVlIGFkZGVkIGFjdGl2aXR5IHRvIGJldGEgdGVzdC4nLFxuICAgICAgICBtZXRhOiAnUk9JOiAyNyUnLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKSB7XG4gICAgICAgICAgICBjb25zdCBjYW1wYWlnbkFkZCA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjYW1wYWlnbkFkZC5tYXAoYWRkcmVzcyA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVmlldyBDb250cmFjdCdcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgICAgICBzZXRjYW1wYWlnbkFkZHJlc3MoaXRlbSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGdldERlcGxveWVkQ2FtcGFpZ25zKCk7XG4gICAgfSxbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGgxPkNhbXBhaWduIENvbnRyYWN0PC9oMT5cbiAgICAgICAgPHA+e2NhbXBhaWduQWRkcmVzc308L3A+XG4gICAgICAgIDxDYXJkLkdyb3VwIGNlbnRlcmVkIGl0ZW1zPXtjYW1wYWlnbkFkZHJlc3N9IC8+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ247XG4iXSwic291cmNlUm9vdCI6IiJ9