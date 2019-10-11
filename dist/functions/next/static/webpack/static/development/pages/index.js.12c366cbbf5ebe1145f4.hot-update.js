webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/Interior/Team/index.js":
/*!*******************************************!*\
  !*** ./containers/Interior/Team/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "../../node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/components/GlideCarousel */ "../../node_modules/common/src/components/GlideCarousel/index.js");
/* harmony import */ var common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/components/GlideCarousel/glideSlide */ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js");
/* harmony import */ var _interior_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../interior.style */ "./containers/Interior/interior.style.js");
/* harmony import */ var _team_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./team.style */ "./containers/Interior/Team/team.style.js");
/* harmony import */ var common_src_data_Interior__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/src/data/Interior */ "../../node_modules/common/src/data/Interior/index.js");

var _jsxFileName = "/Users/cheryl/react-next-landing/packages/landing/containers/Interior/Team/index.js";













var Team = function Team() {
  var title = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_12__["teamData"].title,
      slogan = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_12__["teamData"].slogan,
      members = common_src_data_Interior__WEBPACK_IMPORTED_MODULE_12__["teamData"].members;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var glideOptions = {
    type: 'carousel',
    perView: 3,
    gap: 50,
    breakpoints: {
      1200: {
        perView: 3,
        gap: 30
      },
      767: {
        perView: 2,
        gap: 30
      },
      480: {
        perView: 1
      }
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(true);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_team_style__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "1360px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    bottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_interior_style__WEBPACK_IMPORTED_MODULE_10__["SectionHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    as: "h5",
    content: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: slogan,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    bottom: true,
    delay: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_team_style__WEBPACK_IMPORTED_MODULE_11__["CarouselWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    carouselSelector: "team_carousel",
    options: glideOptions,
    nextButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "next_arrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }),
    prevButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "prev_arrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, members.map(function (member) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(common_src_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: "project_key".concat(member.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_team_style__WEBPACK_IMPORTED_MODULE_11__["TeamCard"], {
      className: "team_card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_team_style__WEBPACK_IMPORTED_MODULE_11__["ImageWrapper"], {
      className: "image_wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
      src: member.avatar,
      alt: member.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_team_style__WEBPACK_IMPORTED_MODULE_11__["TextWrapper"], {
      className: "text_wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "name_plate",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], {
      as: "h3",
      content: member.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
      content: member.designation,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    })))));
  }))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_interior_style__WEBPACK_IMPORTED_MODULE_10__["CircleLoader"], {
    className: "alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ })

})
//# sourceMappingURL=index.js.12c366cbbf5ebe1145f4.hot-update.js.map