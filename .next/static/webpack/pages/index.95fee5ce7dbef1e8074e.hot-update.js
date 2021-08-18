webpackHotUpdate_N_E("pages/index",{

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


var _logo;

/* harmony default export */ __webpack_exports__["default"] = ({
  // example colors with dark mode
  colors: {
    text: "#343D48",
    // body color and primary color
    text_secondary: "#02073E",
    // secondary body color
    heading: "#0F2137",
    // primary heading color
    heading_secondary: "#0F2137",
    // heading color
    background: "#FFFFFF",
    // body background color
    background_secondary: "#F9FBFD",
    // secondary background color
    border_color: "#E5ECF4",
    // border color
    yellow: "#FFA740",
    // border color
    primary: "#6C368C",
    // primary button and link color
    secondary: "#6C368C",
    third: "#FE8200",
    // secondary color - can be used for hover states
    fourth: "#FFC180",
    fifth: "#D9D9D9",
    muted: "#E4E4E4",
    // muted color
    accent: "#609",
    // a contrast color for emphasizing UI
    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
        secondary: "#09c",
        muted: "#111"
      }
    }
  },
  breakpoints: ["480px", "640px", "768px", "1024px", "1220px", "1366px", "1620px"],
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif"
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: "normal",
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
    heading: "-0.5px"
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ["100%", null, null, "780px", "1020px", "1200px", null, "1310px"],
      px: [4, 6]
    },
    header: {
      color: "#02073E",
      fontWeight: "normal",
      py: 3,
      position: "absolute",
      width: "100%"
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    main: {}
  },
  section: {
    keyFeature: {
      pt: [8, null, 9, null, null, 10],
      pb: ["90px", null, 9, null, null, 10, null, "165px"]
    },
    feature: {
      pb: [8, null, 9, null, null, 10, null, "170px"]
    },
    news: {
      pb: [8, null, 9, null, null, 10, null, "170px"],
      mt: 6
    },
    coreFeature: {
      pb: [8, null, 9, null, null, 10, null, "170px"],
      overflow: "hidden"
    },
    testimonial: {
      pt: [8, null, 8, "70px", null, 8, null, "145px"],
      pb: ["90px", null, 9, null, null, 10, null, "190px"],
      overflow: "hidden"
    },
    services: {
      pb: ["90px", null, 9, null, null, 10, null, "150px"],
      mt: 6
    },
    pricing: {
      pt: [8, null, 9, null, null, 10, null, "180px"],
      pb: ["90px", null, 9, null, null, 10, null, "180px"]
    }
  },
  sectionHeader: {
    width: ["100%", null, "540px"],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: ["-3px", null, -1],
    marginBottom: ["50px", null, "60px", null, null, "65px", null, "80px"],
    mx: "auto",
    title: {
      fontSize: ["24px", null, "28px", null, null, "32px", null, "36px"],
      color: "heading",
      lineHeight: [1.3, null, null, 1.25],
      textAlign: "center",
      fontWeight: "700",
      letterSpacing: "-.5px"
    },
    subTitle: {
      fontSize: [0, "13px", null, "14px"],
      color: "primary",
      textAlign: "center",
      letterSpacing: ["1.5px", null, "2px"],
      textTransform: "uppercase",
      fontWeight: "700",
      mb: 2,
      lineHeight: 1.5
    }
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [4],
      letterSpacing: "-.55px",
      color: "heading"
    },
    heroPrimary: {
      color: "heading",
      fontSize: ["32px", "36px", "42px", "40px", "42px", "52px", "58px", "66px"],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      mb: [4, null, null, null, null, 5]
    },
    heroSecondary: {
      fontSize: [2, null, "17px", null, null, "19px", 4],
      lineHeight: [1.9, null, null, 2],
      fontWeight: "body",
      mb: 5,
      px: [0, null, 5, 6, null, 8, 9],
      color: "heading"
    },
    title: {
      // extends the text.heading styles
      variant: "text.heading",
      fontWeight: "bold",
      fontSize: [3, null, 4],
      lineHeight: 1.25,
      mb: 1
    },
    lead: {
      fontSize: 40,
      fontFamily: "DM Sans",
      fontWeight: "500",
      lineHeight: "60px",
      letterSpacing: "-1.5px",
      color: "#0F2137"
    },
    muted: {
      lineHeight: "26px",
      color: "muted"
    },
    secondary: {
      fontWeight: 500,
      color: "#00A99D",
      lineHeight: "40px"
    }
  },
  links: {
    "default": {
      cursor: "pointer"
    },
    bold: {
      fontWeight: "bold"
    },
    nav: {
      display: ["none", null, "inline-block"],
      px: 25,
      fontWeight: "normal"
    },
    blog: {
      display: "block",
      px: 0,
      color: "inherit",
      textDecoration: "none",
      fontSize: "inherit",
      transition: "color 0.25s",
      "&:hover": {
        color: "primary"
      }
    },
    footer: {
      display: "block",
      px: 0,
      color: "inherit",
      textDecoration: "none"
    },
    logo: (_logo = {
      display: "flex",
      alignItems: "center",
      cursor: "pointer"
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_logo, "display", "inline-flex"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_logo, "png", {
      height: 33,
      width: 200
    }), _logo)
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, "none"]
    },
    // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      borderRadius: "45px",
      fontSize: ["14px", null, null, 2],
      letterSpacings: "-0.15px",
      padding: ["12px 20px", null, "15px 30px"],
      fontFamily: "body",
      cursor: "pointer",
      lineHeight: 1.2,
      transition: "all 0.25s",
      fontWeight: 500,
      "&:focus": {
        outline: 0
      }
    },
    primary: {
      variant: "buttons.defaultBtn",
      border: "2px solid",
      borderColor: "secondary",
      color: "secondary",
      bg: "transparent",
      padding: ["10px 15px", null, "15px 30px"],
      "&:hover": {
        color: "white",
        bg: "secondary"
      }
    },
    whiteButton: {
      variant: "buttons.defaultBtn",
      color: "heading_secondary",
      bg: "white",
      "&:hover": {
        boxShadow: "rgba(0, 0, 0, 0.5) 0px 12px 24px -10px"
      }
    },
    secondary: {
      variant: "buttons.defaultBtn",
      color: "white",
      bg: "primary",
      "&:hover": {
        boxShadow: "rgba(233, 76, 84, 0.57) 0px 9px 20px -5px"
      }
    },
    third: {
      variant: "buttons.defaultBtn",
      border: "2px solid",
      borderColor: "secondary",
      color: "secondary",
      bg: "transparent",
      padding: ["10px 15px", null, "15px 30px"],
      "&:hover": {
        color: "white",
        bg: "secondary"
      }
    },
    textButton: {
      variant: "buttons.defaultBtn",
      backgroundColor: "transparent",
      cursor: "pointer",
      color: "white",
      svg: {
        fontSize: [4, 6],
        mr: 2
      }
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4
    },
    offer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flex: ["1 1 calc(50% - 16px)", "1 1 20%"],
      minHeight: 130,
      m: 2,
      background: "#FFFFFF",
      border: "1px solid #EDEFF6",
      borderRadius: 5
    },
    featureCard: {
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "row",
      p: 3
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold"
    },
    input: {
      borderRadius: 8,
      borderColor: "border_color",
      height: 60,
      "&:focus": {
        borderColor: "primary",
        boxShadow: function boxShadow(t) {
          return "0 0 0 2px ".concat(t.colors.primary);
        },
        outline: "none"
      }
    }
  },
  badges: {
    primary: {
      color: "background",
      bg: "#28A5FF",
      borderRadius: 30,
      p: "3px 11px",
      fontSize: 1,
      letterSpacing: "-0.5px"
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 1px"
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSmoothing: "antialiased",
      // Modal Global Style
      ".modal-video-close-btn": {
        cursor: "pointer"
      },
      ".modal-video-movie-wrap": {
        margin: 6,
        width: "auto"
      }
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "#D9E0E7"
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: "none"
    },
    srOnly: {
      border: "0 !important",
      clip: "rect(1px, 1px, 1px, 1px) !important",
      clipPath: "inset(50%) !important",
      height: "1px !important",
      margin: "-1px !important",
      overflow: "hidden !important",
      padding: "0 !important",
      position: "absolute !important",
      width: "1px !important",
      whiteSpace: "nowrap !important"
    }
  }
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsInRleHQiLCJ0ZXh0X3NlY29uZGFyeSIsImhlYWRpbmciLCJoZWFkaW5nX3NlY29uZGFyeSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kX3NlY29uZGFyeSIsImJvcmRlcl9jb2xvciIsInllbGxvdyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0aGlyZCIsImZvdXJ0aCIsImZpZnRoIiwibXV0ZWQiLCJhY2NlbnQiLCJtb2RlcyIsImRhcmsiLCJicmVha3BvaW50cyIsImZvbnRzIiwiYm9keSIsImZvbnRTaXplcyIsImZvbnRXZWlnaHRzIiwiYm9sZCIsImxpbmVIZWlnaHRzIiwibGV0dGVyU3BhY2luZ3MiLCJjYXBzIiwic3BhY2UiLCJsYXlvdXQiLCJjb250YWluZXIiLCJtYXhXaWR0aCIsInB4IiwiaGVhZGVyIiwiY29sb3IiLCJmb250V2VpZ2h0IiwicHkiLCJwb3NpdGlvbiIsIndpZHRoIiwidG9vbGJhciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtYWluIiwic2VjdGlvbiIsImtleUZlYXR1cmUiLCJwdCIsInBiIiwiZmVhdHVyZSIsIm5ld3MiLCJtdCIsImNvcmVGZWF0dXJlIiwib3ZlcmZsb3ciLCJ0ZXN0aW1vbmlhbCIsInNlcnZpY2VzIiwicHJpY2luZyIsInNlY3Rpb25IZWFkZXIiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luQm90dG9tIiwibXgiLCJ0aXRsZSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInRleHRBbGlnbiIsImxldHRlclNwYWNpbmciLCJzdWJUaXRsZSIsInRleHRUcmFuc2Zvcm0iLCJtYiIsImZvbnRGYW1pbHkiLCJoZXJvUHJpbWFyeSIsImhlcm9TZWNvbmRhcnkiLCJ2YXJpYW50IiwibGVhZCIsImxpbmtzIiwiY3Vyc29yIiwibmF2IiwiYmxvZyIsInRleHREZWNvcmF0aW9uIiwidHJhbnNpdGlvbiIsImZvb3RlciIsImxvZ28iLCJoZWlnaHQiLCJpbWFnZXMiLCJhdmF0YXIiLCJib3JkZXJSYWRpdXMiLCJidXR0b25zIiwibWVudSIsImRlZmF1bHRCdG4iLCJwYWRkaW5nIiwib3V0bGluZSIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiYmciLCJ3aGl0ZUJ1dHRvbiIsImJveFNoYWRvdyIsInRleHRCdXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdmciLCJtciIsImNhcmRzIiwib2ZmZXIiLCJmbGV4IiwibWluSGVpZ2h0IiwibSIsImZlYXR1cmVDYXJkIiwicCIsImZvcm1zIiwibGFiZWwiLCJpbnB1dCIsInQiLCJiYWRnZXMiLCJzdHlsZXMiLCJyb290IiwiZm9udFNtb290aGluZyIsIm1hcmdpbiIsImhyIiwiYm9yZGVyQm90dG9tIiwidWwiLCJsaXN0U3R5bGUiLCJzck9ubHkiLCJjbGlwIiwiY2xpcFBhdGgiLCJ3aGl0ZVNwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDYjtBQUNBQSxRQUFNLEVBQUU7QUFDTkMsUUFBSSxFQUFFLFNBREE7QUFDVztBQUNqQkMsa0JBQWMsRUFBRSxTQUZWO0FBRXFCO0FBQzNCQyxXQUFPLEVBQUUsU0FISDtBQUdjO0FBQ3BCQyxxQkFBaUIsRUFBRSxTQUpiO0FBSXdCO0FBQzlCQyxjQUFVLEVBQUUsU0FMTjtBQUtpQjtBQUN2QkMsd0JBQW9CLEVBQUUsU0FOaEI7QUFNMkI7QUFDakNDLGdCQUFZLEVBQUUsU0FQUjtBQU9tQjtBQUN6QkMsVUFBTSxFQUFFLFNBUkY7QUFRYTtBQUNuQkMsV0FBTyxFQUFFLFNBVEg7QUFTYztBQUNwQkMsYUFBUyxFQUFFLFNBVkw7QUFXTkMsU0FBSyxFQUFFLFNBWEQ7QUFXWTtBQUNsQkMsVUFBTSxFQUFFLFNBWkY7QUFhTkMsU0FBSyxFQUFFLFNBYkQ7QUFjTkMsU0FBSyxFQUFFLFNBZEQ7QUFjWTtBQUNsQkMsVUFBTSxFQUFFLE1BZkY7QUFlVTtBQUVoQjtBQUNBQyxTQUFLLEVBQUU7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QUFFLGFBRkc7QUFHUEUsZUFBUyxFQUFFO0FBSEo7QUFUSCxHQTVXSztBQTRYYmlCLFFBQU0sRUFBRTtBQUNOO0FBQ0FDLFFBQUksRUFBRTtBQUNKNUMsZ0JBQVUsRUFBRSxNQURSO0FBRUpOLGdCQUFVLEVBQUUsTUFGUjtBQUdKM0IsZ0JBQVUsRUFBRSxNQUhSO0FBSUo4RSxtQkFBYSxFQUFFLGFBSlg7QUFLSjtBQUNBLGdDQUEwQjtBQUN4QnZDLGNBQU0sRUFBRTtBQURnQixPQU50QjtBQVNKLGlDQUEyQjtBQUN6QndDLGNBQU0sRUFBRSxDQURpQjtBQUV6QjVFLGFBQUssRUFBRTtBQUZrQjtBQVR2QixLQUZBO0FBZ0JOO0FBQ0E2RSxNQUFFLEVBQUU7QUFDRnpCLFlBQU0sRUFBRSxDQUROO0FBRUYwQixrQkFBWSxFQUFFLFdBRlo7QUFHRnpCLGlCQUFXLEVBQUU7QUFIWCxLQWpCRTtBQXNCTjtBQUNBMEIsTUFBRSxFQUFFO0FBQ0ZDLGVBQVMsRUFBRTtBQURULEtBdkJFO0FBMEJOQyxVQUFNLEVBQUU7QUFDTjdCLFlBQU0sRUFBRSxjQURGO0FBRU44QixVQUFJLEVBQUUscUNBRkE7QUFHTkMsY0FBUSxFQUFFLHVCQUhKO0FBSU54QyxZQUFNLEVBQUUsZ0JBSkY7QUFLTmlDLFlBQU0sRUFBRSxpQkFMRjtBQU1OOUQsY0FBUSxFQUFFLG1CQU5KO0FBT05vQyxhQUFPLEVBQUUsY0FQSDtBQVFObkQsY0FBUSxFQUFFLHFCQVJKO0FBU05DLFdBQUssRUFBRSxnQkFURDtBQVVOb0YsZ0JBQVUsRUFBRTtBQVZOO0FBMUJGO0FBNVhLLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTVmZWU1Y2U3ZGJlZjFlODA3NGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyBleGFtcGxlIGNvbG9ycyB3aXRoIGRhcmsgbW9kZVxyXG4gIGNvbG9yczoge1xyXG4gICAgdGV4dDogXCIjMzQzRDQ4XCIsIC8vIGJvZHkgY29sb3IgYW5kIHByaW1hcnkgY29sb3JcclxuICAgIHRleHRfc2Vjb25kYXJ5OiBcIiMwMjA3M0VcIiwgLy8gc2Vjb25kYXJ5IGJvZHkgY29sb3JcclxuICAgIGhlYWRpbmc6IFwiIzBGMjEzN1wiLCAvLyBwcmltYXJ5IGhlYWRpbmcgY29sb3JcclxuICAgIGhlYWRpbmdfc2Vjb25kYXJ5OiBcIiMwRjIxMzdcIiwgLy8gaGVhZGluZyBjb2xvclxyXG4gICAgYmFja2dyb3VuZDogXCIjRkZGRkZGXCIsIC8vIGJvZHkgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgYmFja2dyb3VuZF9zZWNvbmRhcnk6IFwiI0Y5RkJGRFwiLCAvLyBzZWNvbmRhcnkgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgYm9yZGVyX2NvbG9yOiBcIiNFNUVDRjRcIiwgLy8gYm9yZGVyIGNvbG9yXHJcbiAgICB5ZWxsb3c6IFwiI0ZGQTc0MFwiLCAvLyBib3JkZXIgY29sb3JcclxuICAgIHByaW1hcnk6IFwiIzZDMzY4Q1wiLCAvLyBwcmltYXJ5IGJ1dHRvbiBhbmQgbGluayBjb2xvclxyXG4gICAgc2Vjb25kYXJ5OiBcIiM2QzM2OENcIixcclxuICAgIHRoaXJkOiBcIiNGRTgyMDBcIiwgLy8gc2Vjb25kYXJ5IGNvbG9yIC0gY2FuIGJlIHVzZWQgZm9yIGhvdmVyIHN0YXRlc1xyXG4gICAgZm91cnRoOiBcIiNGRkMxODBcIixcclxuICAgIGZpZnRoOiBcIiNEOUQ5RDlcIixcclxuICAgIG11dGVkOiBcIiNFNEU0RTRcIiwgLy8gbXV0ZWQgY29sb3JcclxuICAgIGFjY2VudDogXCIjNjA5XCIsIC8vIGEgY29udHJhc3QgY29sb3IgZm9yIGVtcGhhc2l6aW5nIFVJXHJcblxyXG4gICAgLy8gaGlnaGxpZ2h0XHRhIGJhY2tncm91bmQgY29sb3IgZm9yIGhpZ2hsaWdodGluZyB0ZXh0XHJcbiAgICBtb2Rlczoge1xyXG4gICAgICBkYXJrOiB7XHJcbiAgICAgICAgdGV4dDogXCIjZmZmXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZDogXCIjMDAwXCIsXHJcbiAgICAgICAgcHJpbWFyeTogXCIjMGNmXCIsXHJcbiAgICAgICAgc2Vjb25kYXJ5OiBcIiMwOWNcIixcclxuICAgICAgICBtdXRlZDogXCIjMTExXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IFtcclxuICAgIFwiNDgwcHhcIixcclxuICAgIFwiNjQwcHhcIixcclxuICAgIFwiNzY4cHhcIixcclxuICAgIFwiMTAyNHB4XCIsXHJcbiAgICBcIjEyMjBweFwiLFxyXG4gICAgXCIxMzY2cHhcIixcclxuICAgIFwiMTYyMHB4XCIsXHJcbiAgXSxcclxuICBmb250czoge1xyXG4gICAgYm9keTogXCInRE0gU2FucycsIHNhbnMtc2VyaWZcIixcclxuICAgIGhlYWRpbmc6IFwiJ0RNIFNhbnMnLCBzYW5zLXNlcmlmXCIsXHJcbiAgfSxcclxuICBmb250U2l6ZXM6IFsxMiwgMTUsIDE2LCAxOCwgMjAsIDIyLCAyNCwgMjgsIDMyLCAzNiwgNDIsIDQ4LCA1MiwgNjRdLFxyXG4gIGZvbnRXZWlnaHRzOiB7XHJcbiAgICBib2R5OiBcIm5vcm1hbFwiLFxyXG4gICAgaGVhZGluZzogNTAwLFxyXG4gICAgYm9sZDogNzAwLFxyXG4gIH0sXHJcbiAgbGluZUhlaWdodHM6IHtcclxuICAgIGJvZHk6IDEuOCxcclxuICAgIGhlYWRpbmc6IDEuNSxcclxuICB9LFxyXG4gIGxldHRlclNwYWNpbmdzOiB7XHJcbiAgICBib2R5OiBcIm5vcm1hbFwiLFxyXG4gICAgY2FwczogXCIwLjJlbVwiLFxyXG4gICAgaGVhZGluZzogXCItMC41cHhcIixcclxuICB9LFxyXG4gIHNwYWNlOiBbMCwgNSwgMTAsIDE1LCAyMCwgMjUsIDMwLCA1MCwgODAsIDEwMCwgMTIwLCAxNTBdLFxyXG4gIC8vIHZhcmlhbnRzIGNhbiB1c2UgY3VzdG9tLCB1c2VyLWRlZmluZWQgbmFtZXNcclxuICBsYXlvdXQ6IHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICBtYXhXaWR0aDogW1xyXG4gICAgICAgIFwiMTAwJVwiLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBcIjc4MHB4XCIsXHJcbiAgICAgICAgXCIxMDIwcHhcIixcclxuICAgICAgICBcIjEyMDBweFwiLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgXCIxMzEwcHhcIixcclxuICAgICAgXSxcclxuICAgICAgcHg6IFs0LCA2XSxcclxuICAgIH0sXHJcbiAgICBoZWFkZXI6IHtcclxuICAgICAgY29sb3I6IFwiIzAyMDczRVwiLFxyXG4gICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxyXG4gICAgICBweTogMyxcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICAgIHRvb2xiYXI6IHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgIH0sXHJcbiAgICBtYWluOiB7fSxcclxuICB9LFxyXG4gIHNlY3Rpb246IHtcclxuICAgIGtleUZlYXR1cmU6IHtcclxuICAgICAgcHQ6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICAgIHBiOiBbXCI5MHB4XCIsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCBcIjE2NXB4XCJdLFxyXG4gICAgfSxcclxuICAgIGZlYXR1cmU6IHtcclxuICAgICAgcGI6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgXCIxNzBweFwiXSxcclxuICAgIH0sXHJcbiAgICBuZXdzOiB7XHJcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsIFwiMTcwcHhcIl0sXHJcbiAgICAgIG10OiA2LFxyXG4gICAgfSxcclxuICAgIGNvcmVGZWF0dXJlOiB7XHJcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsIFwiMTcwcHhcIl0sXHJcbiAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgfSxcclxuICAgIHRlc3RpbW9uaWFsOiB7XHJcbiAgICAgIHB0OiBbOCwgbnVsbCwgOCwgXCI3MHB4XCIsIG51bGwsIDgsIG51bGwsIFwiMTQ1cHhcIl0sXHJcbiAgICAgIHBiOiBbXCI5MHB4XCIsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCBcIjE5MHB4XCJdLFxyXG4gICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgIH0sXHJcbiAgICBzZXJ2aWNlczoge1xyXG4gICAgICBwYjogW1wiOTBweFwiLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgXCIxNTBweFwiXSxcclxuICAgICAgbXQ6IDYsXHJcbiAgICB9LFxyXG4gICAgcHJpY2luZzoge1xyXG4gICAgICBwdDogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCBcIjE4MHB4XCJdLFxyXG4gICAgICBwYjogW1wiOTBweFwiLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgXCIxODBweFwiXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWN0aW9uSGVhZGVyOiB7XHJcbiAgICB3aWR0aDogW1wiMTAwJVwiLCBudWxsLCBcIjU0MHB4XCJdLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIG10OiBbXCItM3B4XCIsIG51bGwsIC0xXSxcclxuICAgIG1hcmdpbkJvdHRvbTogW1wiNTBweFwiLCBudWxsLCBcIjYwcHhcIiwgbnVsbCwgbnVsbCwgXCI2NXB4XCIsIG51bGwsIFwiODBweFwiXSxcclxuICAgIG14OiBcImF1dG9cIixcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbXCIyNHB4XCIsIG51bGwsIFwiMjhweFwiLCBudWxsLCBudWxsLCBcIjMycHhcIiwgbnVsbCwgXCIzNnB4XCJdLFxyXG4gICAgICBjb2xvcjogXCJoZWFkaW5nXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjMsIG51bGwsIG51bGwsIDEuMjVdLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6IFwiLS41cHhcIixcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFswLCBcIjEzcHhcIiwgbnVsbCwgXCIxNHB4XCJdLFxyXG4gICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgbGV0dGVyU3BhY2luZzogW1wiMS41cHhcIiwgbnVsbCwgXCIycHhcIl0sXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXHJcbiAgICAgIG1iOiAyLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgaGVhZGluZzoge1xyXG4gICAgICBmb250RmFtaWx5OiBcImhlYWRpbmdcIixcclxuICAgICAgbGluZUhlaWdodDogXCJoZWFkaW5nXCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiaGVhZGluZ1wiLFxyXG4gICAgICBmb250U2l6ZTogWzRdLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiBcIi0uNTVweFwiLFxyXG4gICAgICBjb2xvcjogXCJoZWFkaW5nXCIsXHJcbiAgICB9LFxyXG4gICAgaGVyb1ByaW1hcnk6IHtcclxuICAgICAgY29sb3I6IFwiaGVhZGluZ1wiLFxyXG4gICAgICBmb250U2l6ZTogW1xyXG4gICAgICAgIFwiMzJweFwiLFxyXG4gICAgICAgIFwiMzZweFwiLFxyXG4gICAgICAgIFwiNDJweFwiLFxyXG4gICAgICAgIFwiNDBweFwiLFxyXG4gICAgICAgIFwiNDJweFwiLFxyXG4gICAgICAgIFwiNTJweFwiLFxyXG4gICAgICAgIFwiNThweFwiLFxyXG4gICAgICAgIFwiNjZweFwiLFxyXG4gICAgICBdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4zLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjJdLFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG1iOiBbNCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICB9LFxyXG4gICAgaGVyb1NlY29uZGFyeToge1xyXG4gICAgICBmb250U2l6ZTogWzIsIG51bGwsIFwiMTdweFwiLCBudWxsLCBudWxsLCBcIjE5cHhcIiwgNF0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjksIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBmb250V2VpZ2h0OiBcImJvZHlcIixcclxuICAgICAgbWI6IDUsXHJcbiAgICAgIHB4OiBbMCwgbnVsbCwgNSwgNiwgbnVsbCwgOCwgOV0sXHJcbiAgICAgIGNvbG9yOiBcImhlYWRpbmdcIixcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAvLyBleHRlbmRzIHRoZSB0ZXh0LmhlYWRpbmcgc3R5bGVzXHJcbiAgICAgIHZhcmlhbnQ6IFwidGV4dC5oZWFkaW5nXCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIDRdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjI1LFxyXG4gICAgICBtYjogMSxcclxuICAgIH0sXHJcbiAgICBsZWFkOiB7XHJcbiAgICAgIGZvbnRTaXplOiA0MCxcclxuICAgICAgZm9udEZhbWlseTogXCJETSBTYW5zXCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiNjBweFwiLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiBcIi0xLjVweFwiLFxyXG4gICAgICBjb2xvcjogXCIjMEYyMTM3XCIsXHJcbiAgICB9LFxyXG4gICAgbXV0ZWQ6IHtcclxuICAgICAgbGluZUhlaWdodDogXCIyNnB4XCIsXHJcbiAgICAgIGNvbG9yOiBcIm11dGVkXCIsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgY29sb3I6IFwiIzAwQTk5RFwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjQwcHhcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaW5rczoge1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgfSxcclxuICAgIGJvbGQ6IHtcclxuICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICB9LFxyXG4gICAgbmF2OiB7XHJcbiAgICAgIGRpc3BsYXk6IFtcIm5vbmVcIiwgbnVsbCwgXCJpbmxpbmUtYmxvY2tcIl0sXHJcbiAgICAgIHB4OiAyNSxcclxuICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcclxuICAgIH0sXHJcbiAgICBibG9nOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgcHg6IDAsXHJcbiAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICBmb250U2l6ZTogXCJpbmhlcml0XCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwiY29sb3IgMC4yNXNcIixcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgcHg6IDAsXHJcbiAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICAgIGxvZ286IHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcclxuICAgICAgcG5nOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMyxcclxuICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlczoge1xyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgIHdpZHRoOiA0OCxcclxuICAgICAgaGVpZ2h0OiA0OCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA5OTk5OSxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyB2YXJpYW50cyBmb3IgYnV0dG9uc1xyXG4gIGJ1dHRvbnM6IHtcclxuICAgIG1lbnU6IHtcclxuICAgICAgZGlzcGxheTogW251bGwsIG51bGwsIFwibm9uZVwiXSxcclxuICAgIH0sIC8vIGRlZmF1bHQgdmFyaWFudCBmb3IgTWVudUJ1dHRvblxyXG4gICAgLy8geW91IGNhbiByZWZlcmVuY2Ugb3RoZXIgdmFsdWVzIGRlZmluZWQgaW4gdGhlIHRoZW1lXHJcbiAgICBkZWZhdWx0QnRuOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogXCI0NXB4XCIsXHJcbiAgICAgIGZvbnRTaXplOiBbXCIxNHB4XCIsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nczogXCItMC4xNXB4XCIsXHJcbiAgICAgIHBhZGRpbmc6IFtcIjEycHggMjBweFwiLCBudWxsLCBcIjE1cHggMzBweFwiXSxcclxuICAgICAgZm9udEZhbWlseTogXCJib2R5XCIsXHJcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4yNXNcIixcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBcIiY6Zm9jdXNcIjoge1xyXG4gICAgICAgIG91dGxpbmU6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICB2YXJpYW50OiBcImJ1dHRvbnMuZGVmYXVsdEJ0blwiLFxyXG4gICAgICBib3JkZXI6IFwiMnB4IHNvbGlkXCIsXHJcbiAgICAgIGJvcmRlckNvbG9yOiBcInNlY29uZGFyeVwiLFxyXG4gICAgICBjb2xvcjogXCJzZWNvbmRhcnlcIixcclxuICAgICAgYmc6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgcGFkZGluZzogW1wiMTBweCAxNXB4XCIsIG51bGwsIFwiMTVweCAzMHB4XCJdLFxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgYmc6IFwic2Vjb25kYXJ5XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgd2hpdGVCdXR0b246IHtcclxuICAgICAgdmFyaWFudDogXCJidXR0b25zLmRlZmF1bHRCdG5cIixcclxuICAgICAgY29sb3I6IFwiaGVhZGluZ19zZWNvbmRhcnlcIixcclxuICAgICAgYmc6IFwid2hpdGVcIixcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICBib3hTaGFkb3c6IFwicmdiYSgwLCAwLCAwLCAwLjUpIDBweCAxMnB4IDI0cHggLTEwcHhcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgdmFyaWFudDogXCJidXR0b25zLmRlZmF1bHRCdG5cIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYmc6IFwicHJpbWFyeVwiLFxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIGJveFNoYWRvdzogXCJyZ2JhKDIzMywgNzYsIDg0LCAwLjU3KSAwcHggOXB4IDIwcHggLTVweFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHRoaXJkOiB7XHJcbiAgICAgIHZhcmlhbnQ6IFwiYnV0dG9ucy5kZWZhdWx0QnRuXCIsXHJcbiAgICAgIGJvcmRlcjogXCIycHggc29saWRcIixcclxuICAgICAgYm9yZGVyQ29sb3I6IFwic2Vjb25kYXJ5XCIsXHJcbiAgICAgIGNvbG9yOiBcInNlY29uZGFyeVwiLFxyXG4gICAgICBiZzogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBwYWRkaW5nOiBbXCIxMHB4IDE1cHhcIiwgbnVsbCwgXCIxNXB4IDMwcHhcIl0sXHJcbiAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICBiZzogXCJzZWNvbmRhcnlcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB0ZXh0QnV0dG9uOiB7XHJcbiAgICAgIHZhcmlhbnQ6IFwiYnV0dG9ucy5kZWZhdWx0QnRuXCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBmb250U2l6ZTogWzQsIDZdLFxyXG4gICAgICAgIG1yOiAyLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNhcmRzOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIHBhZGRpbmc6IDIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgIH0sXHJcbiAgICBvZmZlcjoge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIGZsZXg6IFtcIjEgMSBjYWxjKDUwJSAtIDE2cHgpXCIsIFwiMSAxIDIwJVwiXSxcclxuICAgICAgbWluSGVpZ2h0OiAxMzAsXHJcbiAgICAgIG06IDIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNFREVGRjZcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgfSxcclxuICAgIGZlYXR1cmVDYXJkOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgcDogMyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb3Jtczoge1xyXG4gICAgbGFiZWw6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgfSxcclxuICAgIGlucHV0OiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogOCxcclxuICAgICAgYm9yZGVyQ29sb3I6IFwiYm9yZGVyX2NvbG9yXCIsXHJcbiAgICAgIGhlaWdodDogNjAsXHJcbiAgICAgIFwiJjpmb2N1c1wiOiB7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgIGJveFNoYWRvdzogKHQpID0+IGAwIDAgMCAycHggJHt0LmNvbG9ycy5wcmltYXJ5fWAsXHJcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGJhZGdlczoge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBjb2xvcjogXCJiYWNrZ3JvdW5kXCIsXHJcbiAgICAgIGJnOiBcIiMyOEE1RkZcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiAzMCxcclxuICAgICAgcDogXCIzcHggMTFweFwiLFxyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgbGV0dGVyU3BhY2luZzogXCItMC41cHhcIixcclxuICAgIH0sXHJcbiAgICBvdXRsaW5lOiB7XHJcbiAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcclxuICAgICAgYmc6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAwIDFweFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBzdHlsZXM6IHtcclxuICAgIC8vIFRvIGFkZCBiYXNlLCB0b3AtbGV2ZWwgc3R5bGVzIHRvIHRoZSA8Ym9keT4gZWxlbWVudCwgdXNlIHRoZW1lLnN0eWxlcy5yb290LlxyXG4gICAgcm9vdDoge1xyXG4gICAgICBmb250RmFtaWx5OiBcImJvZHlcIixcclxuICAgICAgbGluZUhlaWdodDogXCJib2R5XCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiYm9keVwiLFxyXG4gICAgICBmb250U21vb3RoaW5nOiBcImFudGlhbGlhc2VkXCIsXHJcbiAgICAgIC8vIE1vZGFsIEdsb2JhbCBTdHlsZVxyXG4gICAgICBcIi5tb2RhbC12aWRlby1jbG9zZS1idG5cIjoge1xyXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiLm1vZGFsLXZpZGVvLW1vdmllLXdyYXBcIjoge1xyXG4gICAgICAgIG1hcmdpbjogNixcclxuICAgICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgLy8gRGl2aWRlciBzdHlsZXNcclxuICAgIGhyOiB7XHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZFwiLFxyXG4gICAgICBib3JkZXJDb2xvcjogXCIjRDlFMEU3XCIsXHJcbiAgICB9LFxyXG4gICAgLy8gYWxzbyB5b3UgY2FuIHVzZSBvdGhlciBIVE1MIGVsZW1lbnRzIHN0eWxlIGhlcmVcclxuICAgIHVsOiB7XHJcbiAgICAgIGxpc3RTdHlsZTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gICAgc3JPbmx5OiB7XHJcbiAgICAgIGJvcmRlcjogXCIwICFpbXBvcnRhbnRcIixcclxuICAgICAgY2xpcDogXCJyZWN0KDFweCwgMXB4LCAxcHgsIDFweCkgIWltcG9ydGFudFwiLFxyXG4gICAgICBjbGlwUGF0aDogXCJpbnNldCg1MCUpICFpbXBvcnRhbnRcIixcclxuICAgICAgaGVpZ2h0OiBcIjFweCAhaW1wb3J0YW50XCIsXHJcbiAgICAgIG1hcmdpbjogXCItMXB4ICFpbXBvcnRhbnRcIixcclxuICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuICFpbXBvcnRhbnRcIixcclxuICAgICAgcGFkZGluZzogXCIwICFpbXBvcnRhbnRcIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGUgIWltcG9ydGFudFwiLFxyXG4gICAgICB3aWR0aDogXCIxcHggIWltcG9ydGFudFwiLFxyXG4gICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcCAhaW1wb3J0YW50XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=