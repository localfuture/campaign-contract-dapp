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
            lineNumber: 16,
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      fluid: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        as: "h2",
        children: "Dogs Roles with Humans"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Campaign Contract"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
      items: campaignAddress
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ2FtcGFpZ24iLCJjYW1wYWlnbkFkZHJlc3MiLCJzZXRjYW1wYWlnbkFkZHJlc3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FtcGFpZ25BZGQiLCJmYWN0b3J5IiwibWV0aG9kcyIsImNhbGwiLCJpdGVtIiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiZmx1aWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFDaEIsUUFBTTtBQUFBLE9BQUNDLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NDLHNEQUFRLENBQUMsRUFBRCxDQUF0RDtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDWixtQkFBZUMsb0JBQWYsR0FBc0M7QUFDbEMsWUFBTUMsV0FBVyxHQUFHLE1BQU1DLHlEQUFPLENBQUNDLE9BQVIsQ0FBZ0JILG9CQUFoQixHQUF1Q0ksSUFBdkMsRUFBMUI7QUFDQSxZQUFNQyxJQUFJLEdBQUdKLFdBQVcsQ0FBQ0ssR0FBWixDQUFnQkMsT0FBTyxJQUFJO0FBQ3RDLGVBQU87QUFDTEMsZ0JBQU0sRUFBRUQsT0FESDtBQUVMRSxxQkFBVyxlQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZSO0FBR0xDLGVBQUssRUFBRTtBQUhGLFNBQVA7QUFLRCxPQU5ZLENBQWI7QUFRQWIsd0JBQWtCLENBQUNRLElBQUQsQ0FBbEI7QUFDRDs7QUFFSEwsd0JBQW9CO0FBQ3ZCLEdBZlEsRUFlUCxFQWZPLENBQVQ7QUFpQkEsc0JBQ0U7QUFBQSw0QkFDQSxxRUFBQywyREFBRDtBQUFXLFdBQUssTUFBaEI7QUFBQSw2QkFDRSxxRUFBQyx3REFBRDtBQUFRLFVBQUUsRUFBQyxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFLHFFQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLFdBQUssRUFBRUo7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUEsa0JBREY7QUFTRDs7R0E3Qk1ELFE7O0tBQUFBLFE7QUErQlFBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNlMmVmNzFmOTlmYTY3MzA1MGI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9FdGhlcmV1bS9mYWN0b3J5JztcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XG5cbmZ1bmN0aW9uIENhbXBhaWduKCkge1xuICAgIGNvbnN0IFtjYW1wYWlnbkFkZHJlc3MsIHNldGNhbXBhaWduQWRkcmVzc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXREZXBsb3llZENhbXBhaWducygpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbXBhaWduQWRkID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGNhbXBhaWduQWRkLm1hcChhZGRyZXNzID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IDxhPlZpZXcgQ2FtcGFpZ248L2E+LFxuICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2V0Y2FtcGFpZ25BZGRyZXNzKGl0ZW0pO1xuICAgICAgICAgIH1cblxuICAgICAgICBnZXREZXBsb3llZENhbXBhaWducygpO1xuICAgIH0sW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICA8SGVhZGVyIGFzPSdoMic+RG9ncyBSb2xlcyB3aXRoIEh1bWFuczwvSGVhZGVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxoMT5DYW1wYWlnbiBDb250cmFjdDwvaDE+XG4gICAgICAgIDxDYXJkLkdyb3VwIGl0ZW1zPXtjYW1wYWlnbkFkZHJlc3N9IC8+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ247XG4iXSwic291cmNlUm9vdCI6IiJ9