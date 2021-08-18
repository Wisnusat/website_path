webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/header.data-2.js":
/*!************************************************!*\
  !*** ./src/components/header/header.data-2.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ([{
  path: "home",
  label: "Home"
}, {
  path: "services",
  label: "Services"
}, {
  path: "products",
  label: "Products"
}, {
  path: "joinUs",
  label: "Join Us"
}, {
  path: "contact",
  label: "Contact Us"
}]);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/header/mobile-drawer.js":
/*!************************************************!*\
  !*** ./src/components/header/mobile-drawer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/drawer */ "./src/components/drawer.js");
/* harmony import */ var _contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/drawer/drawer.context */ "./src/contexts/drawer/drawer.context.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _header_data_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header.data-2 */ "./src/components/header/header.data-2.js");
var _jsxFileName = "D:\\github-test\\website_path\\src\\components\\header\\mobile-drawer.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var social = [{
  path: "/",
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaFacebookF"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  })
}, {
  path: "/",
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaTwitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })
}, {
  path: "/",
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaGithubAlt"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  })
}, {
  path: "/",
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaDribbble"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  })
}];

var MobileDrawer = function MobileDrawer() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_4__["DrawerContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch; // Toggle drawer


  var toggleHandler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function () {
    dispatch({
      type: "TOGGLE"
    });
  }, [dispatch]);
  return __jsx(components_drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "320px",
    drawerHandler: __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.handler,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoMdMenu"], {
      size: "26px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    })),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    closeButton: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoMdClose"], {
      size: "24px",
      color: "#000000",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 20
      }
    }),
    drawerStyle: styles.drawer,
    closeBtnStyle: styles.close,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__["Scrollbars"], {
    autoHide: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, _header_data_2__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (_ref, i) {
    var path = _ref.path,
        label = _ref.label;
    return __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      activeClass: "active",
      to: path,
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }, label);
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menuFooter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.social,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, social.map(function (_ref2, i) {
    var path = _ref2.path,
        icon = _ref2.icon;
    return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      as: "span",
      key: i,
      sx: styles.social.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      to: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 19
      }
    }, icon));
  }))))));
};

_s(MobileDrawer, "OqcrJSEs/Z0UdNNMJwJDY0ChobM=");

_c = MobileDrawer;
var styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",
    "@media screen and (min-width: 1024px)": {
      display: "none"
    }
  },
  drawer: {
    width: "100%",
    height: "100%",
    backgroundColor: "dark"
  },
  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "25px",
    right: "30px",
    zIndex: "1",
    cursor: "pointer"
  },
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    pt: "100px",
    pb: "40px",
    px: "30px"
  },
  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    a: {
      fontSize: "16px",
      fontWeight: "500",
      color: "text_white",
      py: "15px",
      cursor: "pointer",
      borderBottom: "1px solid #e8e5e5",
      transition: "all 0.25s",
      "&:hover": {
        color: "secondary"
      },
      "&.active": {
        color: "secondary"
      }
    }
  },
  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "auto"
  },
  social: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "text",
      fontSize: 14,
      mr: "15px",
      transition: "all 0.25s",
      cursor: "pointer",
      ":last-child": {
        mr: "0"
      },
      "&:hover": {
        color: "secondary"
      }
    }
  },
  button: {
    color: "white",
    fontSize: "14px",
    fw: "700",
    height: "45px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (MobileDrawer);

var _c;

$RefreshReg$(_c, "MobileDrawer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5kYXRhLTIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb2JpbGUtZHJhd2VyLmpzIl0sIm5hbWVzIjpbInBhdGgiLCJsYWJlbCIsInNvY2lhbCIsImljb24iLCJNb2JpbGVEcmF3ZXIiLCJ1c2VDb250ZXh0IiwiRHJhd2VyQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ0b2dnbGVIYW5kbGVyIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJzdHlsZXMiLCJoYW5kbGVyIiwiaXNPcGVuIiwiZHJhd2VyIiwiY2xvc2UiLCJjb250ZW50IiwibWVudSIsIm1lbnVJdGVtcyIsIm1hcCIsImkiLCJtZW51Rm9vdGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhTaHJpbmsiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJ6SW5kZXgiLCJjdXJzb3IiLCJmbGV4RGlyZWN0aW9uIiwicHQiLCJwYiIsInB4IiwiYSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwicHkiLCJib3JkZXJCb3R0b20iLCJ0cmFuc2l0aW9uIiwibXQiLCJtciIsImJ1dHRvbiIsImZ3IiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQSw4Q0FBZSxnRUFDYjtBQUNFQSxNQUFJLEVBQUUsTUFEUjtBQUVFQyxPQUFLLEVBQUU7QUFGVCxDQURhLEVBS2I7QUFDRUQsTUFBSSxFQUFFLFVBRFI7QUFFRUMsT0FBSyxFQUFFO0FBRlQsQ0FMYSxFQVNiO0FBQ0VELE1BQUksRUFBRSxVQURSO0FBRUVDLE9BQUssRUFBRTtBQUZULENBVGEsRUFhYjtBQUNFRCxNQUFJLEVBQUUsUUFEUjtBQUVFQyxPQUFLLEVBQUU7QUFGVCxD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UUFKRjtBQUtWc0IsTUFBRSxFQUFFO0FBTE0sR0E3REM7QUFxRWI3QyxRQUFNLEVBQUU7QUFDTjBCLFNBQUssRUFBRSxNQUREO0FBRU5KLFdBQU8sRUFBRSxNQUZIO0FBR05DLGNBQVUsRUFBRSxRQUhOO0FBSU5DLGtCQUFjLEVBQUUsUUFKVjtBQU1OdkIsUUFBSSxFQUFFO0FBQ0pxQixhQUFPLEVBQUUsTUFETDtBQUVKQyxnQkFBVSxFQUFFLFFBRlI7QUFHSkMsb0JBQWMsRUFBRSxRQUhaO0FBSUppQixXQUFLLEVBQUUsTUFKSDtBQUtKRixjQUFRLEVBQUUsRUFMTjtBQU1KTyxRQUFFLEVBQUUsTUFOQTtBQU9KRixnQkFBVSxFQUFFLFdBUFI7QUFRSlgsWUFBTSxFQUFFLFNBUko7QUFTSixxQkFBZTtBQUNiYSxVQUFFLEVBQUU7QUFEUyxPQVRYO0FBWUosaUJBQVc7QUFDVEwsYUFBSyxFQUFFO0FBREU7QUFaUDtBQU5BLEdBckVLO0FBNkZiTSxRQUFNLEVBQUU7QUFDTk4sU0FBSyxFQUFFLE9BREQ7QUFFTkYsWUFBUSxFQUFFLE1BRko7QUFHTlMsTUFBRSxFQUFFLEtBSEU7QUFJTnJCLFVBQU0sRUFBRSxNQUpGO0FBS05zQixnQkFBWSxFQUFFLEtBTFI7QUFNTmhCLFVBQU0sRUFBRSxTQU5GO0FBT05QLFNBQUssRUFBRSxNQVBEO0FBUU5KLFdBQU8sRUFBRSxNQVJIO0FBU05DLGNBQVUsRUFBRSxRQVROO0FBVU5DLGtCQUFjLEVBQUUsUUFWVjtBQVdOa0IsTUFBRSxFQUFFO0FBWEU7QUE3RkssQ0FBZjtBQTRHZXhDLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA3NjQ4OTdjNmI5ZGMwNDNmZTUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgcGF0aDogXCJob21lXCIsXHJcbiAgICBsYWJlbDogXCJIb21lXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcInNlcnZpY2VzXCIsXHJcbiAgICBsYWJlbDogXCJTZXJ2aWNlc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCJwcm9kdWN0c1wiLFxyXG4gICAgbGFiZWw6IFwiUHJvZHVjdHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiam9pblVzXCIsXHJcbiAgICBsYWJlbDogXCJKb2luIFVzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcImNvbnRhY3RcIixcclxuICAgIGxhYmVsOiBcIkNvbnRhY3QgVXNcIixcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gXCJjb21wb25lbnRzL2RyYXdlclwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2RyYXdlci9kcmF3ZXIuY29udGV4dFwiO1xyXG5pbXBvcnQgeyBJb01kQ2xvc2UsIElvTWRNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7XHJcbiAgRmFGYWNlYm9va0YsXHJcbiAgRmFUd2l0dGVyLFxyXG4gIEZhR2l0aHViQWx0LFxyXG4gIEZhRHJpYmJibGUsXHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSBcIi4vaGVhZGVyLmRhdGEtMlwiO1xyXG5cclxuY29uc3Qgc29jaWFsID0gW1xyXG4gIHtcclxuICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvXCIsXHJcbiAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvXCIsXHJcbiAgICBpY29uOiA8RmFHaXRodWJBbHQgLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9cIixcclxuICAgIGljb246IDxGYURyaWJiYmxlIC8+LFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBNb2JpbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRHJhd2VyQ29udGV4dCk7XHJcblxyXG4gIC8vIFRvZ2dsZSBkcmF3ZXJcclxuICBjb25zdCB0b2dnbGVIYW5kbGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIlRPR0dMRVwiLFxyXG4gICAgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyXHJcbiAgICAgIHdpZHRoPVwiMzIwcHhcIlxyXG4gICAgICBkcmF3ZXJIYW5kbGVyPXtcclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaGFuZGxlcn0+XHJcbiAgICAgICAgICA8SW9NZE1lbnUgc2l6ZT1cIjI2cHhcIiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICB9XHJcbiAgICAgIG9wZW49e3N0YXRlLmlzT3Blbn1cclxuICAgICAgdG9nZ2xlSGFuZGxlcj17dG9nZ2xlSGFuZGxlcn1cclxuICAgICAgY2xvc2VCdXR0b249ezxJb01kQ2xvc2Ugc2l6ZT1cIjI0cHhcIiBjb2xvcj1cIiMwMDAwMDBcIiAvPn1cclxuICAgICAgZHJhd2VyU3R5bGU9e3N0eWxlcy5kcmF3ZXJ9XHJcbiAgICAgIGNsb3NlQnRuU3R5bGU9e3N0eWxlcy5jbG9zZX1cclxuICAgID5cclxuICAgICAgPFNjcm9sbGJhcnMgYXV0b0hpZGU+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLm1lbnV9PlxyXG4gICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIHRvPXtwYXRofVxyXG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLm1lbnVGb290ZXJ9PlxyXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuc29jaWFsfT5cclxuICAgICAgICAgICAgICB7c29jaWFsLm1hcCgoeyBwYXRoLCBpY29uIH0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIga2V5PXtpfSBzeD17c3R5bGVzLnNvY2lhbC5pY29ufT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89e3BhdGh9PntpY29ufTwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L1Njcm9sbGJhcnM+XHJcbiAgICA8L0RyYXdlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGhhbmRsZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgZmxleFNocmluazogXCIwXCIsXHJcbiAgICB3aWR0aDogXCIyNnB4XCIsXHJcblxyXG4gICAgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpXCI6IHtcclxuICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGRyYXdlcjoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJkYXJrXCIsXHJcbiAgfSxcclxuXHJcbiAgY2xvc2U6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHRvcDogXCIyNXB4XCIsXHJcbiAgICByaWdodDogXCIzMHB4XCIsXHJcbiAgICB6SW5kZXg6IFwiMVwiLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICB9LFxyXG5cclxuICBjb250ZW50OiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgcHQ6IFwiMTAwcHhcIixcclxuICAgIHBiOiBcIjQwcHhcIixcclxuICAgIHB4OiBcIjMwcHhcIixcclxuICB9LFxyXG5cclxuICBtZW51OiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcclxuICAgICAgY29sb3I6IFwidGV4dF93aGl0ZVwiLFxyXG4gICAgICBweTogXCIxNXB4XCIsXHJcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2U4ZTVlNVwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjI1c1wiLFxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIGNvbG9yOiBcInNlY29uZGFyeVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBcIiYuYWN0aXZlXCI6IHtcclxuICAgICAgICBjb2xvcjogXCJzZWNvbmRhcnlcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgbWVudUZvb3Rlcjoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIG10OiBcImF1dG9cIixcclxuICB9LFxyXG5cclxuICBzb2NpYWw6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG5cclxuICAgIGljb246IHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBjb2xvcjogXCJ0ZXh0XCIsXHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgbXI6IFwiMTVweFwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjI1c1wiLFxyXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICBcIjpsYXN0LWNoaWxkXCI6IHtcclxuICAgICAgICBtcjogXCIwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgY29sb3I6IFwic2Vjb25kYXJ5XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGJ1dHRvbjoge1xyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcclxuICAgIGZ3OiBcIjcwMFwiLFxyXG4gICAgaGVpZ2h0OiBcIjQ1cHhcIixcclxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIHB5OiBcIjBcIixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlRHJhd2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9