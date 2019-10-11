webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/Interior/Navbar/index.js":
/*!*********************************************!*\
  !*** ./containers/Interior/Navbar/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redq/reuse-modal */ "../../node_modules/@redq/reuse-modal/es/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit */ "../../node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit/ionicons/androidClose */ "../../node_modules/react-icons-kit/ionicons/androidClose.js");
/* harmony import */ var react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Navbar */ "../../node_modules/reusecore/src/elements/Navbar/index.js");
/* harmony import */ var reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Drawer */ "../../node_modules/reusecore/src/elements/Drawer/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/UI/Logo */ "../../node_modules/reusecore/src/elements/UI/Logo/index.js");
/* harmony import */ var common_src_components_HamburgMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/src/components/HamburgMenu */ "../../node_modules/common/src/components/HamburgMenu/index.js");
/* harmony import */ var common_src_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/components/ScrollSpyMenu */ "../../node_modules/common/src/components/ScrollSpyMenu/index.js");
/* harmony import */ var common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/src/contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar.style */ "./containers/Interior/Navbar/navbar.style.js");
/* harmony import */ var _SearchPanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../SearchPanel */ "./containers/Interior/SearchPanel/index.js");
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../LoginModal */ "./containers/Interior/LoginModal/index.js");
/* harmony import */ var common_src_data_Interior__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! common/src/data/Interior */ "../../node_modules/common/src/data/Interior/index.js");
/* harmony import */ var common_src_assets_image_interior_logo_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! common/src/assets/image/interior/logo.svg */ "../../node_modules/common/src/assets/image/interior/logo.svg");
/* harmony import */ var common_src_assets_image_interior_logo_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_interior_logo_svg__WEBPACK_IMPORTED_MODULE_17__);

var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/containers/Interior/Navbar/index.js";














 // import Copyright from '../Copyright';




var CloseModalButton = function CloseModalButton() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "modalCloseBtn",
    variant: "fab",
    onClick: function onClick() {
      return Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["closeModal"])();
    },
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "flaticon-plus-symbol",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  });
};

var CloseModalButtonAlt = function CloseModalButtonAlt() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "modalCloseBtn alt",
    variant: "fab",
    onClick: function onClick() {
      return Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["closeModal"])();
    },
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "flaticon-plus-symbol",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  });
};

var Navbar = function Navbar(_ref) {
  var navbarStyle = _ref.navbarStyle,
      logoStyle = _ref.logoStyle;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_12__["DrawerContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var handleSearchModal = function handleSearchModal() {
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["openModal"])({
      config: {
        className: 'search-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: {
          transform: 'translateY(100px)'
        },
        animationTo: {
          transform: 'translateY(0)'
        },
        //
        transition: {
          mass: 1,
          tension: 180,
          friction: 26
        }
      },
      component: _SearchPanel__WEBPACK_IMPORTED_MODULE_14__["default"],
      componentProps: {},
      closeComponent: CloseModalButtonAlt,
      closeOnClickOutside: false
    });
  };

  var handleLoginModal = function handleLoginModal() {
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["openModal"])({
      config: {
        className: 'login-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: {
          transform: 'translateY(100px)'
        },
        animationTo: {
          transform: 'translateY(0)'
        },
        transition: {
          mass: 1,
          tension: 180,
          friction: 26
        }
      },
      component: _LoginModal__WEBPACK_IMPORTED_MODULE_15__["default"],
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false
    });
  };

  var toggleHandler = function toggleHandler() {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, navbarStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_navbar_style__WEBPACK_IMPORTED_MODULE_13__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "textButton",
    onClick: handleSearchModal,
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "flaticon-magnifying-glass",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }),
    "aria-label": "search button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "textButton",
    onClick: handleLoginModal,
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "flaticon-user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }),
    "aria-label": "registration button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "420px",
    placement: "right",
    drawerHandler: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_HamburgMenu__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: state.isOpen ? 'active' : '',
    onClick: toggleHandler,
    "aria-label": "drawer toggle button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    icon: react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_5__["androidClose"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    menuItems: common_src_data_Interior__WEBPACK_IMPORTED_MODULE_16__["menuData"],
    drawerClose: true,
    offset: -100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  })))));
};

Navbar.propTypes = {
  navbarStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px'
  },
  logoStyle: {
    width: '128px',
    height: 'auto'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.de71a10fbaa12e341534.hot-update.js.map