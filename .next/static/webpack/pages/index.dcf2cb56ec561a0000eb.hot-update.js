webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/donation-form.js":
/*!*****************************************!*\
  !*** ./src/components/donation-form.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var assets_dot_pattern_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/dot-pattern.png */ "./src/assets/dot-pattern.png");
/* harmony import */ var assets_dot_pattern_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_dot_pattern_png__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "D:\\github-test\\website_path\\src\\components\\donation-form.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/** @jsx jsx */


 //   import googlePay from 'assets/images/icons/google-pay.png';


var presetAmounts = [5, 20, 50, 100];

var DonationForm = function DonationForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    donationType: 'onetime',
    amount: 20,
    joinCommunity: true
  }),
      state = _useState[0],
      setState = _useState[1];

  var handleDonationType = function handleDonationType(e) {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      donationType: e.target.value
    }));
  };

  var handleAmount = function handleAmount(e) {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      amount: Number(e.target.value)
    }));
  };

  var handleCheckbox = function handleCheckbox(e) {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      joinCommunity: e.target.checked
    }));
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.formWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    sx: styles.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Get In Touch With Us"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "form",
    sx: styles.form,
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.radioGroup,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.otherAmount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: "other-amount",
    variant: "styles.srOnly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "Name"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    id: "other-amount",
    placeholder: "Name",
    onChange: handleAmount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.otherAmount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: "other-amount",
    variant: "styles.srOnly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, "Business Email"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    id: "other-amount",
    placeholder: "Business Email",
    onChange: handleAmount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.otherAmount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: "other-amount",
    variant: "styles.srOnly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, "Phone Number"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    id: "other-amount",
    placeholder: "Phone Number",
    onChange: handleAmount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.otherAmount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: "other-amount",
    variant: "styles.srOnly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, "Organization / Company"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    id: "other-amount",
    placeholder: "Organization / Company",
    onChange: handleAmount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.otherAmount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: "other-amount",
    variant: "styles.srOnly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, "Subject"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    id: "other-amount",
    placeholder: "Subject",
    onChange: handleAmount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.message,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: "other-amount",
    variant: "styles.srOnly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, "Message"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    id: "other-amount",
    placeholder: "Message",
    onChange: handleAmount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.checkbox,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
    onChange: handleCheckbox,
    defaultChecked: state.joinCommunity,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "span",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, "Want to know furhter information about us"))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.buttonGroup,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    sx: styles.submit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }, "Submit"))));
};

_s(DonationForm, "6qwQYTeY8J3H0fJYRT99FkZMPX0=");

_c = DonationForm;
/* harmony default export */ __webpack_exports__["default"] = (DonationForm);
var styles = {
  formWrapper: {
    borderRadius: 10,
    backgroundColor: 'white',
    boxShadow: '0px 24px 50px rgba(54, 91, 125, 0.05)',
    p: ['26px', null, null, '35px 40px 50px'],
    position: 'relative',
    '::before, ::after': {
      background: "url(".concat(assets_dot_pattern_png__WEBPACK_IMPORTED_MODULE_4___default.a, ") no-repeat right top"),
      content: [null, null, null, null, null, "''"],
      position: 'absolute',
      width: 302,
      height: 347,
      zIndex: -1
    },
    '::before': {
      left: '-60px',
      bottom: 15
    },
    '::after': {
      right: '-41px',
      top: '-30px'
    }
  },
  title: {
    color: 'textSecondary',
    fontWeight: 'bold',
    fontSize: [6, null, null, 12, 8, 11],
    lineHeight: 1.4,
    letterSpacing: 'heading',
    mb: [4, null, null, 5],
    textAlign: ['center', null, null, null, 'left']
  },
  form: {
    label: {
      alignItems: 'center',
      cursor: 'pointer',
      fontWeight: 400
    }
  },
  radioGroup: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    flexDirection: ['column', null, null, 'row'],
    mb: [5, null, null, 5],
    '> label': {
      alignItems: 'center',
      fontSize: [1, null, null, '15px'],
      width: 'auto',
      '+ label': {
        ml: [null, null, null, 4],
        mt: [2, null, null, 0]
      }
    }
  },
  presetAmounts: {
    display: 'grid',
    alignItems: 'center',
    marginBottom: 15,
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: ['7px', null, null, 2],
    mb: [3],
    label: {
      color: 'textSecondary',
      border: function border(t) {
        return "1px solid ".concat(t.colors.borderColor);
      },
      borderRadius: 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: [1, 2, null, 3],
      lineHeight: 1.11,
      minHeight: [40, null, null, null, 50, 60],
      padding: 0,
      textAlign: 'center',
      transition: '0.3s ease-in-out 0s',
      '> div': {
        position: 'absolute',
        height: 0,
        opacity: 0,
        visibility: 'hidden',
        width: 0
      },
      '&.active': {
        backgroundColor: '#F5F4FF',
        borderColor: 'primary',
        color: '#7B72F0'
      }
    }
  },
  otherAmount: {
    mb: [3, null, null, 4],
    input: {
      minHeight: [45, null, null, 60, 50, 60],
      '::placeholder': {
        color: Object(polished__WEBPACK_IMPORTED_MODULE_3__["rgba"])('#02073E', 0.35)
      }
    }
  },
  message: {
    mb: [3, null, null, 4],
    input: {
      minHeight: [85, null, null, 110, 100, 110],
      '::placeholder': {
        color: Object(polished__WEBPACK_IMPORTED_MODULE_3__["rgba"])('#02073E', 0.35)
      }
    }
  },
  checkbox: {
    display: 'flex',
    justifyContent: 'center',
    label: {
      span: {
        fontSize: [0, 1]
      }
    }
  },
  buttonGroup: {
    mt: [5, null, null, 8],
    span: {
      display: 'flex',
      justifyContent: 'center',
      color: Object(polished__WEBPACK_IMPORTED_MODULE_3__["rgba"])('#000', 0.4),
      fontWeight: 'bold',
      fontSize: 1,
      lineHeight: 2.87
    },
    button: {
      minHeight: [45, null, null, 60, 50, 60],
      width: '100%'
    }
  },
  googlePay: {
    backgroundColor: '#EDF2F7',
    minHeight: 60,
    py: 0,
    fontSize: [1, null, null, 2],
    img: {
      mr: 2,
      maxWidth: [23, 25, null, null, 25, '100%']
    }
  }
};

var _c;

$RefreshReg$(_c, "DonationForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZG9uYXRpb24tZm9ybS5qcyJdLCJuYW1lcyI6WyJwcmVzZXRBbW91bnRzIiwiRG9uYXRpb25Gb3JtIiwidXNlU3RhdGUiLCJkb25hdGlvblR5cGUiLCJhbW91bnQiLCJqb2luQ29tbXVuaXR5Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZURvbmF0aW9uVHlwZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUFtb3VudCIsIk51bWJlciIsImhhbmRsZUNoZWNrYm94IiwiY2hlY2tlZCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImZvcm1XcmFwcGVyIiwidGl0bGUiLCJmb3JtIiwicmFkaW9Hcm91cCIsIm90aGVyQW1vdW50IiwibWVzc2FnZSIsImNoZWNrYm94IiwiYnV0dG9uR3JvdXAiLCJzdWJtaXQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJwIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kIiwiZG90UGF0dGVybiIsImNvbnRlbnQiLCJ3aWR0aCIsImhlaWdodCIsInpJbmRleCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsInRvcCIsImNvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJtYiIsInRleHRBbGlnbiIsImxhYmVsIiwiYWxpZ25JdGVtcyIsImN1cnNvciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWwiLCJtdCIsIm1hcmdpbkJvdHRvbSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJnYXAiLCJib3JkZXIiLCJ0IiwiY29sb3JzIiwiYm9yZGVyQ29sb3IiLCJqdXN0aWZ5Q29udGVudCIsIm1pbkhlaWdodCIsInBhZGRpbmciLCJ0cmFuc2l0aW9uIiwib3BhY2l0eSIsInZpc2liaWxpdHkiLCJpbnB1dCIsInJnYmEi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O0FBbUlic0MsV0FBUyxFQUFFO0FBQ1Q3QyxtQkFBZSxFQUFFLFNBRFI7QUFFVG9DLGFBQVMsRUFBRSxFQUZGO0FBR1RVLE1BQUUsRUFBRSxDQUhLO0FBSVQ5QixZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsQ0FKRDtBQUtUK0IsT0FBRyxFQUFFO0FBQ0hDLFFBQUUsRUFBRSxDQUREO0FBRUhDLGNBQVEsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsRUFBckIsRUFBeUIsTUFBekI7QUFGUDtBQUxJO0FBbklFLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGNmMmNiNTZlYzU2MWEwMDAwZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQge1xyXG4gICAganN4LFxyXG4gICAgQm94LFxyXG4gICAgVGV4dCxcclxuICAgIFJhZGlvLFxyXG4gICAgSW1hZ2UsXHJcbiAgICBMYWJlbCxcclxuICAgIElucHV0LFxyXG4gICAgQnV0dG9uLFxyXG4gICAgSGVhZGluZyxcclxuICAgIENoZWNrYm94LFxyXG4gIH0gZnJvbSAndGhlbWUtdWknO1xyXG4gIGltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XHJcbiAgaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbiAgXHJcbi8vICAgaW1wb3J0IGdvb2dsZVBheSBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2dvb2dsZS1wYXkucG5nJztcclxuICBpbXBvcnQgZG90UGF0dGVybiBmcm9tICdhc3NldHMvZG90LXBhdHRlcm4ucG5nJztcclxuICBcclxuICBjb25zdCBwcmVzZXRBbW91bnRzID0gWzUsIDIwLCA1MCwgMTAwXTtcclxuICBcclxuICBjb25zdCBEb25hdGlvbkZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgZG9uYXRpb25UeXBlOiAnb25ldGltZScsXHJcbiAgICAgIGFtb3VudDogMjAsXHJcbiAgICAgIGpvaW5Db21tdW5pdHk6IHRydWUsXHJcbiAgICB9KTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZURvbmF0aW9uVHlwZSA9IChlKSA9PiB7XHJcbiAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkb25hdGlvblR5cGU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVBbW91bnQgPSAoZSkgPT4ge1xyXG4gICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYW1vdW50OiBOdW1iZXIoZS50YXJnZXQudmFsdWUpLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVDaGVja2JveCA9IChlKSA9PiB7XHJcbiAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBqb2luQ29tbXVuaXR5OiBlLnRhcmdldC5jaGVja2VkLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuZm9ybVdyYXBwZXJ9PlxyXG4gICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMudGl0bGV9PkdldCBJbiBUb3VjaCBXaXRoIFVzPC9IZWFkaW5nPlxyXG4gICAgICAgIDxCb3ggYXM9XCJmb3JtXCIgc3g9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5yYWRpb0dyb3VwfT5cclxuICAgICAgICAgICAgey8qIDxMYWJlbD5cclxuICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgIHZhbHVlPVwib25ldGltZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZG9uYXRpb24tdHlwZVwiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17c3RhdGUuZG9uYXRpb25UeXBlID09PSAnb25ldGltZSd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRG9uYXRpb25UeXBlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgRG9uYXRlIG9uZXRpbWVcclxuICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgPExhYmVsPlxyXG4gICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJtb250aGx5XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJkb25hdGlvbi10eXBlXCJcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtzdGF0ZS5kb25hdGlvblR5cGUgPT09ICdtb250aGx5J31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEb25hdGlvblR5cGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICBFdmVyeSBNb250aFxyXG4gICAgICAgICAgICA8L0xhYmVsPiAqL31cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgey8qIDxCb3ggc3g9e3N0eWxlcy5wcmVzZXRBbW91bnRzfT5cclxuICAgICAgICAgICAge3ByZXNldEFtb3VudHMubWFwKChhbW91bnQsIGkpID0+IChcclxuICAgICAgICAgICAgICA8TGFiZWwga2V5PXtpfSBjbGFzc05hbWU9e3N0YXRlLmFtb3VudCA9PT0gYW1vdW50ID8gJ2FjdGl2ZScgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtzdGF0ZS5hbW91bnQgPT09IGFtb3VudH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAke2Ftb3VudH1cclxuICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQm94PiAqL31cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5vdGhlckFtb3VudH0+XHJcbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwib3RoZXItYW1vdW50XCIgdmFyaWFudD1cInN0eWxlcy5zck9ubHlcIj5cclxuICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwib3RoZXItYW1vdW50XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBbW91bnR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5vdGhlckFtb3VudH0+XHJcbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwib3RoZXItYW1vdW50XCIgdmFyaWFudD1cInN0eWxlcy5zck9ubHlcIj5cclxuICAgICAgICAgICAgICBCdXNpbmVzcyBFbWFpbFxyXG4gICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBpZD1cIm90aGVyLWFtb3VudFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCdXNpbmVzcyBFbWFpbFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFtb3VudH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLm90aGVyQW1vdW50fT5cclxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJvdGhlci1hbW91bnRcIiB2YXJpYW50PVwic3R5bGVzLnNyT25seVwiPlxyXG4gICAgICAgICAgICAgIFBob25lIE51bWJlclxyXG4gICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBpZD1cIm90aGVyLWFtb3VudFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBbW91bnR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5vdGhlckFtb3VudH0+XHJcbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwib3RoZXItYW1vdW50XCIgdmFyaWFudD1cInN0eWxlcy5zck9ubHlcIj5cclxuICAgICAgICAgICAgICBPcmdhbml6YXRpb24gLyBDb21wYW55XHJcbiAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwib3RoZXItYW1vdW50XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9yZ2FuaXphdGlvbiAvIENvbXBhbnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBbW91bnR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5vdGhlckFtb3VudH0+XHJcbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwib3RoZXItYW1vdW50XCIgdmFyaWFudD1cInN0eWxlcy5zck9ubHlcIj5cclxuICAgICAgICAgICAgICBTdWJqZWN0XHJcbiAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwib3RoZXItYW1vdW50XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBbW91bnR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZXNzYWdlfT5cclxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJvdGhlci1hbW91bnRcIiB2YXJpYW50PVwic3R5bGVzLnNyT25seVwiPlxyXG4gICAgICAgICAgICAgIE1lc3NhZ2VcclxuICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgaWQ9XCJvdGhlci1hbW91bnRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFtb3VudH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNoZWNrYm94fT5cclxuICAgICAgICAgICAgPExhYmVsPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoZWNrYm94fVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3N0YXRlLmpvaW5Db21tdW5pdHl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dCBhcz1cInNwYW5cIj5XYW50IHRvIGtub3cgZnVyaHRlciBpbmZvcm1hdGlvbiBhYm91dCB1czwvVGV4dD5cclxuICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHN4PXtzdHlsZXMuc3VibWl0fT5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIHsvKiA8VGV4dCBhcz1cInNwYW5cIj5vcjwvVGV4dD4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8QnV0dG9uIHZhcmlhbnQ9XCJtdXRlZFwiIHN4PXtzdHlsZXMuZ29vZ2xlUGF5fT5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9XCI0MVwiIGhlaWdodD1cIjQwXCIgc3JjPXtnb29nbGVQYXl9IGFsdD1cImdvb2dsZVBheVwiIC8+XHJcbiAgICAgICAgICAgICAgRG9uYXRlIHdpdGggR29vZ2xlIFBheVxyXG4gICAgICAgICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRG9uYXRpb25Gb3JtO1xyXG4gIFxyXG4gIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGZvcm1XcmFwcGVyOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgYm94U2hhZG93OiAnMHB4IDI0cHggNTBweCByZ2JhKDU0LCA5MSwgMTI1LCAwLjA1KScsXHJcbiAgICAgIHA6IFsnMjZweCcsIG51bGwsIG51bGwsICczNXB4IDQwcHggNTBweCddLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgJzo6YmVmb3JlLCA6OmFmdGVyJzoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtkb3RQYXR0ZXJufSkgbm8tcmVwZWF0IHJpZ2h0IHRvcGAsXHJcbiAgICAgICAgY29udGVudDogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIGAnJ2BdLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHdpZHRoOiAzMDIsXHJcbiAgICAgICAgaGVpZ2h0OiAzNDcsXHJcbiAgICAgICAgekluZGV4OiAtMSxcclxuICAgICAgfSxcclxuICAgICAgJzo6YmVmb3JlJzoge1xyXG4gICAgICAgIGxlZnQ6ICctNjBweCcsXHJcbiAgICAgICAgYm90dG9tOiAxNSxcclxuICAgICAgfSxcclxuICAgICAgJzo6YWZ0ZXInOiB7XHJcbiAgICAgICAgcmlnaHQ6ICctNDFweCcsXHJcbiAgICAgICAgdG9wOiAnLTMwcHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGNvbG9yOiAndGV4dFNlY29uZGFyeScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgZm9udFNpemU6IFs2LCBudWxsLCBudWxsLCAxMiwgOCwgMTFdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgICAgbWI6IFs0LCBudWxsLCBudWxsLCA1XSxcclxuICAgICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsIG51bGwsICdsZWZ0J10sXHJcbiAgICB9LFxyXG4gICAgZm9ybToge1xyXG4gICAgICBsYWJlbDoge1xyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICByYWRpb0dyb3VwOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogWydmbGV4LXN0YXJ0JywgbnVsbCwgbnVsbCwgJ2NlbnRlciddLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsIG51bGwsICdyb3cnXSxcclxuICAgICAgbWI6IFs1LCBudWxsLCBudWxsLCA1XSxcclxuICAgICAgJz4gbGFiZWwnOiB7XHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAnMTVweCddLFxyXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgJysgbGFiZWwnOiB7XHJcbiAgICAgICAgICBtbDogW251bGwsIG51bGwsIG51bGwsIDRdLFxyXG4gICAgICAgICAgbXQ6IFsyLCBudWxsLCBudWxsLCAwXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHByZXNldEFtb3VudHM6IHtcclxuICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luQm90dG9tOiAxNSxcclxuICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCg0LCAxZnIpJyxcclxuICAgICAgZ2FwOiBbJzdweCcsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBtYjogWzNdLFxyXG4gICAgICBsYWJlbDoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dFNlY29uZGFyeScsXHJcbiAgICAgICAgYm9yZGVyOiAodCkgPT4gYDFweCBzb2xpZCAke3QuY29sb3JzLmJvcmRlckNvbG9yfWAsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgZm9udFNpemU6IFsxLCAyLCBudWxsLCAzXSxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAxLjExLFxyXG4gICAgICAgIG1pbkhlaWdodDogWzQwLCBudWxsLCBudWxsLCBudWxsLCA1MCwgNjBdLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnMC4zcyBlYXNlLWluLW91dCAwcycsXHJcbiAgICAgICAgJz4gZGl2Jzoge1xyXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXHJcbiAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmLmFjdGl2ZSc6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGNUY0RkYnLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICAgIGNvbG9yOiAnIzdCNzJGMCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBvdGhlckFtb3VudDoge1xyXG4gICAgICBtYjogWzMsIG51bGwsIG51bGwsIDRdLFxyXG4gICAgICBpbnB1dDoge1xyXG4gICAgICAgIG1pbkhlaWdodDogWzQ1LCBudWxsLCBudWxsLCA2MCwgNTAsIDYwXSxcclxuICAgICAgICAnOjpwbGFjZWhvbGRlcic6IHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKCcjMDIwNzNFJywgMC4zNSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlOiB7XHJcbiAgICAgICAgbWI6IFszLCBudWxsLCBudWxsLCA0XSxcclxuICAgICAgaW5wdXQ6IHtcclxuICAgICAgICBtaW5IZWlnaHQ6IFs4NSwgbnVsbCwgbnVsbCwgMTEwLCAxMDAsIDExMF0sXHJcbiAgICAgICAgJzo6cGxhY2Vob2xkZXInOiB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgnIzAyMDczRScsIDAuMzUpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY2hlY2tib3g6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgc3Bhbjoge1xyXG4gICAgICAgICAgZm9udFNpemU6IFswLCAxXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbkdyb3VwOiB7XHJcbiAgICAgIG10OiBbNSwgbnVsbCwgbnVsbCwgOF0sXHJcbiAgICAgIHNwYW46IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbG9yOiByZ2JhKCcjMDAwJywgMC40KSxcclxuICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgICAgbGluZUhlaWdodDogMi44NyxcclxuICAgICAgfSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgbWluSGVpZ2h0OiBbNDUsIG51bGwsIG51bGwsIDYwLCA1MCwgNjBdLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZ29vZ2xlUGF5OiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFREYyRjcnLFxyXG4gICAgICBtaW5IZWlnaHQ6IDYwLFxyXG4gICAgICBweTogMCxcclxuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgaW1nOiB7XHJcbiAgICAgICAgbXI6IDIsXHJcbiAgICAgICAgbWF4V2lkdGg6IFsyMywgMjUsIG51bGwsIG51bGwsIDI1LCAnMTAwJSddLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG4gICJdLCJzb3VyY2VSb290IjoiIn0=