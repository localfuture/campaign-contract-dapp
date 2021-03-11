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
      children: "Open Campaigns"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        animated: true,
        floated: "",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"].Content, {
          visible: true,
          children: "Create New Campaign"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"].Content, {
          hidden: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
            name: "arrow right"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
      centered: true,
      items: campaignAddress
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ2FtcGFpZ24iLCJjYW1wYWlnbkFkZHJlc3MiLCJzZXRjYW1wYWlnbkFkZHJlc3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FtcGFpZ25BZGQiLCJmYWN0b3J5IiwibWV0aG9kcyIsImNhbGwiLCJpdGVtIiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyYWlzZWQiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUNsQixRQUFNO0FBQUEsT0FBQ0MsZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUF3Q0Msc0RBQVEsQ0FBQyxFQUFELENBQXREO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkLG1CQUFlQyxvQkFBZixHQUFzQztBQUNwQyxZQUFNQyxXQUFXLEdBQUcsTUFBTUMseURBQU8sQ0FBQ0MsT0FBUixDQUFnQkgsb0JBQWhCLEdBQXVDSSxJQUF2QyxFQUExQjtBQUNBLFlBQU1DLElBQUksR0FBR0osV0FBVyxDQUFDSyxHQUFaLENBQWdCQyxPQUFPLElBQUk7QUFDdEMsZUFBTztBQUNMQyxnQkFBTSxFQUFFRCxPQURIO0FBRUxFLHFCQUFXLGVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRlI7QUFHTEMsZUFBSyxFQUFFLElBSEY7QUFJTEMsZ0JBQU0sRUFBRSxJQUpIO0FBS0xDLGVBQUssRUFBRTtBQUxGLFNBQVA7QUFPRCxPQVJZLENBQWI7QUFVQWYsd0JBQWtCLENBQUNRLElBQUQsQ0FBbEI7QUFDRDs7QUFFREwsd0JBQW9CO0FBQ3JCLEdBakJRLEVBaUJOLEVBakJNLENBQVQ7QUFtQkEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSw2QkFDRSxxRUFBQyx3REFBRDtBQUFRLGdCQUFRLE1BQWhCO0FBQWlCLGVBQU8sRUFBQyxFQUF6QjtBQUFBLGdDQUNFLHFFQUFDLHdEQUFELENBQVEsT0FBUjtBQUFnQixpQkFBTyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLHdEQUFELENBQVEsT0FBUjtBQUFnQixnQkFBTSxNQUF0QjtBQUFBLGlDQUNFLHFFQUFDLHNEQUFEO0FBQU0sZ0JBQUksRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQVVFLHFFQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLGNBQVEsTUFBcEI7QUFBcUIsV0FBSyxFQUFFSjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQSxrQkFERjtBQWNEOztHQXBDUUQsUTs7S0FBQUEsUTtBQXNDTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmI4ODZlMTkzZGJlMDRjN2JmY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vRXRoZXJldW0vZmFjdG9yeSc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcblxuZnVuY3Rpb24gQ2FtcGFpZ24oKSB7XG4gIGNvbnN0IFtjYW1wYWlnbkFkZHJlc3MsIHNldGNhbXBhaWduQWRkcmVzc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREZXBsb3llZENhbXBhaWducygpIHtcbiAgICAgIGNvbnN0IGNhbXBhaWduQWRkID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuICAgICAgY29uc3QgaXRlbSA9IGNhbXBhaWduQWRkLm1hcChhZGRyZXNzID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXG4gICAgICAgICAgZGVzY3JpcHRpb246IDxhPlZpZXcgQ2FtcGFpZ248L2E+LFxuICAgICAgICAgIGZsdWlkOiB0cnVlLFxuICAgICAgICAgIHJhaXNlZDogdHJ1ZSxcbiAgICAgICAgICBjb2xvcjogJ3JlZCdcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBzZXRjYW1wYWlnbkFkZHJlc3MoaXRlbSk7XG4gICAgfVxuXG4gICAgZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5PcGVuIENhbXBhaWduczwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICA8QnV0dG9uIGFuaW1hdGVkIGZsb2F0ZWQ9XCJcIj5cbiAgICAgICAgICA8QnV0dG9uLkNvbnRlbnQgdmlzaWJsZT5DcmVhdGUgTmV3IENhbXBhaWduPC9CdXR0b24uQ29udGVudD5cbiAgICAgICAgICA8QnV0dG9uLkNvbnRlbnQgaGlkZGVuPlxuICAgICAgICAgICAgPEljb24gbmFtZT0nYXJyb3cgcmlnaHQnIC8+XG4gICAgICAgICAgPC9CdXR0b24uQ29udGVudD5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDYXJkLkdyb3VwIGNlbnRlcmVkIGl0ZW1zPXtjYW1wYWlnbkFkZHJlc3N9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==