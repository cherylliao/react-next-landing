webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/Interior/Banner/index.js":
/*!*********************************************!*\
  !*** ./containers/Interior/Banner/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "../../node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit */ "../../node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_kit_ionicons_iosEmailOutline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons-kit/ionicons/iosEmailOutline */ "../../node_modules/react-icons-kit/ionicons/iosEmailOutline.js");
/* harmony import */ var react_icons_kit_ionicons_iosEmailOutline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_iosEmailOutline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var common_src_components_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/components/Input */ "../../node_modules/common/src/components/Input/index.js");
/* harmony import */ var common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/src/components/GlideCarousel */ "../../node_modules/common/src/components/GlideCarousel/index.js");
/* harmony import */ var common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! common/src/components/GlideCarousel/glideSlide */ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js");
/* harmony import */ var _interior_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../interior.style */ "./containers/Interior/interior.style.js");
/* harmony import */ var _banner_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./banner.style */ "./containers/Interior/Banner/banner.style.js");
/* harmony import */ var common_src_data_Interior__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! common/src/data/Interior */ "../../node_modules/common/src/data/Interior/index.js");


var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/containers/Interior/Banner/index.js";
















var Banner = function Banner() {
  var discount = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_16__["bannerData"].discount,
      discountLabel = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_16__["bannerData"].discountLabel,
      title = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_16__["bannerData"].title,
      text = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_16__["bannerData"].text,
      carousel = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_16__["bannerData"].carousel;
  var glideOptions = {
    type: 'carousel',
    perView: 3,
    gap: 20,
    breakpoints: {
      1200: {
        perView: 2
      },
      667: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setLoading(true);
  }, []);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    email: '',
    valid: ''
  }),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      state = _useState4[0],
      setState = _useState4[1];

  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  var handleOnChange = function handleOnChange(e) {
    var value = '';

    if (e.target.value.match(emailRegex)) {
      if (e.target.value.length > 0) {
        value = e.target.value;
        setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          email: value,
          valid: 'valid'
        }));
      }
    } else {
      if (e.target.value.length > 0) {
        setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          valid: 'invalid'
        }));
      } else {
        setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          valid: ''
        }));
      }
    }
  };

  var handleSubscriptionForm = function handleSubscriptionForm(e) {
    e.preventDefault();

    if (state.email.match(emailRegex)) {
      console.log(state.email);
      setState({
        email: '',
        valid: ''
      });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_15__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_15__["ContentArea"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    delay: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_15__["HighlightedText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, discount), " ", discountLabel), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], {
    as: "h1",
    content: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_8__["default"], {
    content: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_15__["FormWrapper"], {
    onSubmit: handleSubscriptionForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(common_src_components_Input__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: state.valid,
    type: "email",
    placeholder: "\u8F38\u5165\u96FB\u5B50\u90F5\u4EF6",
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
      icon: react_icons_kit_ionicons_iosEmailOutline__WEBPACK_IMPORTED_MODULE_6__["iosEmailOutline"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }),
    iconPosition: "left",
    required: true,
    onChange: handleOnChange,
    "aria-label": "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_15__["ButtonGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "submit",
    colors: "primaryWithBg",
    title: "\u514D\u8CBB\u8AEE\u8A62",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "\u63A2\u7D22",
    variant: "textButton",
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "flaticon-next",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_15__["CarouselArea"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, loading ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_12__["default"], {
    carouselSelector: "interior_carousel",
    options: glideOptions,
    nextButton: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "next_arrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }),
    prevButton: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "prev_arrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, carousel.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_13__["default"], {
      key: "carousel_key".concat(item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: item.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "item_wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_9__["default"], {
      src: item.thumb_url,
      alt: item.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], {
      as: "h4",
      content: item.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }))));
  }))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_interior_style__WEBPACK_IMPORTED_MODULE_14__["CircleLoader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ })

})
//# sourceMappingURL=index.js.996c68dc446aab04b084.hot-update.js.map