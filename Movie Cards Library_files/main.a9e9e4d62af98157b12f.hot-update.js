webpackHotUpdate("main",{

/***/ "./src/components/MovieForm.js":
/*!*************************************!*\
  !*** ./src/components/MovieForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/home/rafa/Documentos/Trybe/14\xB0 Project - movie-card-library-crud/src/components/MovieForm.js";




function createTitle(inputsForm, setInputsForm) {
  const {
    title
  } = inputsForm;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-add-movie",
    htmlFor: "input-title",
    "data-testid": "title-input-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    value: title,
    onChange: evt => setInputsForm({ ...inputsForm,
      title: evt.target.value
    }),
    className: "input-add",
    type: "text",
    id: "input-title",
    "data-testid": "title-input",
    name: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }));
}

function createSubtitle(inputsForm, setInputsForm) {
  const {
    subtitle
  } = inputsForm;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-add-movie",
    htmlFor: "input-subtitle",
    "data-testid": "subtitle-input-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "Subtitle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    value: subtitle,
    onChange: evt => setInputsForm({ ...inputsForm,
      subtitle: evt.target.value
    }),
    className: "input-add",
    type: "text",
    id: "input-subtitle",
    "data-testid": "subtitle-input",
    name: "subtitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }));
}

function createImage(inputsForm, setInputsForm) {
  const {
    imagePath
  } = inputsForm;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-add-movie",
    htmlFor: "input-image",
    "data-testid": "image-input-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "Image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    value: imagePath,
    onChange: evt => setInputsForm({ ...inputsForm,
      imagePath: evt.target.value
    }),
    placeholder: "Url image",
    className: "input-add image-add",
    type: "text",
    id: "input-image",
    "data-testid": "image-input",
    name: "imagePath",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }));
}

function createStoryline(inputsForm, setInputsForm) {
  const {
    storyline
  } = inputsForm;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-textArea",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-add-movie",
    htmlFor: "textarea-sinopse",
    "data-testid": "storyline-input-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, "StoryLine"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    value: storyline,
    onChange: evt => setInputsForm({ ...inputsForm,
      storyline: evt.target.value
    }),
    className: "input-add",
    id: "textarea-sinopse",
    "data-testid": "storyline-input",
    cols: "44",
    rows: "5",
    name: "storyline",
    maxLength: "200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }));
}

function createRating(inputsForm, setInputsForm) {
  const {
    rating
  } = inputsForm;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-add-movie",
    htmlFor: "input-rating",
    "data-testid": "rating-input-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, "Rating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    value: rating,
    onChange: evt => setInputsForm({ ...inputsForm,
      rating: evt.target.value
    }),
    className: "input-add ratio-add",
    type: "number",
    id: "input-rating",
    "data-testid": "rating-input",
    name: "rating",
    min: "0",
    max: "5",
    step: "0.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }));
}

function createFavorite(inputsForm, setInputsForm) {
  const {
    bookmarked
  } = inputsForm;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "radioIsFavorite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    checked: bookmarked,
    onClick: evt => setInputsForm(evt.target.checked),
    className: "input-add",
    id: "radioIsFavorite",
    type: "checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }), "IsFavorite"));
}

function createGenre(inputsForm, setInputsForm) {
  const {
    genre
  } = inputsForm;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-add-movie",
    htmlFor: "input-select",
    "data-testid": "genre-input-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }, "Genre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    value: genre,
    onChange: evt => setInputsForm({ ...inputsForm,
      genre: evt.target.value
    }),
    className: "input-add genre-add",
    id: "input-select",
    "data-testid": "genre-input",
    name: "genre",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "action",
    "data-testid": "genre-option",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "comedy",
    "data-testid": "genre-option",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, "Comedy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "thriller",
    "data-testid": "genre-option",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }
  }, "Thriller")));
}

function validationInputs(inputsForm) {
  const {
    title,
    subtitle,
    imagePath
  } = inputsForm;
  if (title && subtitle && imagePath) return true;
  return false;
}

function renderAddButton(inputsForm, setMovie) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => {
      if (validationInputs(inputsForm)) setMovie(inputsForm);else alert('Invalid information');
    },
    className: "btn-form",
    type: "button",
    "data-testid": "send-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, "Add Movie"));
}

function renderEditButton(inputsForm, setMovie) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => setMovie(inputsForm),
    className: "btn-form",
    type: "button",
    "data-testid": "edit-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }
  }, "Edit Movie"));
}

function renderCancelBtton() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn-form",
    type: "button",
    "data-testid": "cancel-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 9
    }
  }, "Cancel")));
}

function MovieForm({
  type,
  movie,
  setMovie
}) {
  const [inputsForm, setInputsForm] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(movie);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-add-movie",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    "data-testid": "add-movie-form",
    className: "container-form-add",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "subtitle-add-movie",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  }, "Information about movie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-inputs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 9
    }
  }, createTitle(inputsForm, setInputsForm), createSubtitle(inputsForm, setInputsForm)), createImage(inputsForm, setInputsForm), createStoryline(inputsForm, setInputsForm), createFavorite(inputsForm, setInputsForm), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-inputs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }
  }, createGenre(inputsForm, setInputsForm), createRating(inputsForm, setInputsForm)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-btn-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 9
    }
  }, type === 'Add' ? renderAddButton(inputsForm, setMovie) : renderEditButton(inputsForm, setMovie), renderCancelBtton())));
}

MovieForm.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MovieForm);

/***/ })

})
//# sourceMappingURL=main.a9e9e4d62af98157b12f.hot-update.js.map