/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0; }\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit; }\\n\\nhtml {\\n  box-sizing: border-box;\\n  font-size: 62.5%; }\\n  @media only screen and (max-width: 68.75em) {\\n    html {\\n      font-size: 50%; } }\\n\\nbody {\\n  font-family: 'Nunito Sans', sans-serif;\\n  font-weight: 400;\\n  line-height: 1.6;\\n  color: #655A56;\\n  background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  min-height: calc(100vh - 2 * 4vw); }\\n\\n.container {\\n  max-width: 120rem;\\n  margin: 4vw auto;\\n  background-color: #fff;\\n  border-radius: 6px;\\n  overflow: hidden;\\n  box-shadow: 0 2rem 6rem 0.5rem rgba(101, 90, 86, 0.2);\\n  display: grid;\\n  grid-template-rows: 10rem minmax(100rem, auto);\\n  grid-template-columns: 1.1fr 2fr 1.1fr;\\n  grid-template-areas: \\\"head head head\\\" \\\"list recipe shopping\\\"; }\\n  @media only screen and (max-width: 68.75em) {\\n    .container {\\n      width: 100%;\\n      margin: 0;\\n      border-radius: 0; } }\\n\\n.btn, .btn-small, .btn-small:link, .btn-small:visited {\\n  background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\\n  border-radius: 10rem;\\n  border: none;\\n  text-transform: uppercase;\\n  color: #fff;\\n  cursor: pointer;\\n  display: flex;\\n  align-items: center;\\n  transition: all .2s; }\\n  .btn:hover, .btn-small:hover {\\n    transform: scale(1.05); }\\n  .btn:focus, .btn-small:focus {\\n    outline: none; }\\n  .btn > *:first-child, .btn-small > *:first-child {\\n    margin-right: 1rem; }\\n\\n.btn {\\n  padding: 1.3rem 3rem;\\n  font-size: 1.4rem; }\\n  .btn svg {\\n    height: 2.25rem;\\n    width: 2.25rem;\\n    fill: currentColor; }\\n\\n.btn-small, .btn-small:link, .btn-small:visited {\\n  font-size: 1.3rem;\\n  padding: 1rem 1.75rem;\\n  text-decoration: none; }\\n  .btn-small svg, .btn-small:link svg, .btn-small:visited svg {\\n    height: 1.5rem;\\n    width: 1.5rem;\\n    fill: currentColor; }\\n\\n.btn-inline {\\n  color: #F59A83;\\n  font-size: 1.2rem;\\n  border: none;\\n  background-color: #F9F5F3;\\n  padding: .8rem 1.2rem;\\n  border-radius: 10rem;\\n  cursor: pointer;\\n  display: flex;\\n  align-items: center;\\n  transition: all .2s; }\\n  .btn-inline svg {\\n    height: 1.5rem;\\n    width: 1.5rem;\\n    fill: currentColor;\\n    margin: 0 .2rem; }\\n  .btn-inline span {\\n    margin: 0 .4rem; }\\n  .btn-inline:hover {\\n    color: #F48982;\\n    background-color: #F2EFEE; }\\n  .btn-inline:focus {\\n    outline: none; }\\n\\n.btn-tiny {\\n  height: 1.75rem;\\n  width: 1.75rem;\\n  border: none;\\n  background: none;\\n  cursor: pointer; }\\n  .btn-tiny svg {\\n    height: 100%;\\n    width: 100%;\\n    fill: #F59A83;\\n    transition: all .3s; }\\n  .btn-tiny:focus {\\n    outline: none; }\\n  .btn-tiny:hover svg {\\n    fill: #F48982;\\n    transform: translateY(-1px); }\\n  .btn-tiny:active svg {\\n    fill: #F48982;\\n    transform: translateY(0); }\\n  .btn-tiny:not(:last-child) {\\n    margin-right: .3rem; }\\n\\n.heading-2 {\\n  font-size: 1.8rem;\\n  font-weight: 600;\\n  color: #F59A83;\\n  text-transform: uppercase;\\n  margin-bottom: 2.5rem;\\n  text-align: center;\\n  transform: skewY(-3deg); }\\n\\n.copyright {\\n  color: #968B87;\\n  font-size: 1.2rem;\\n  margin-top: auto; }\\n\\n.link:link,\\n.link:visited {\\n  color: #968B87; }\\n\\n.loader {\\n  margin: 5rem auto;\\n  text-align: center; }\\n  .loader svg {\\n    height: 5.5rem;\\n    width: 5.5rem;\\n    fill: #F59A83;\\n    transform-origin: 44% 50%;\\n    animation: rotate 1.5s infinite linear; }\\n\\n@keyframes rotate {\\n  0% {\\n    transform: rotate(0); }\\n  100% {\\n    transform: rotate(360deg); } }\\n\\n.header {\\n  grid-area: head;\\n  background-color: #F9F5F3;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between; }\\n  .header__logo {\\n    margin-left: 4rem;\\n    height: 4.5rem;\\n    display: block; }\\n\\n.search {\\n  background-color: #fff;\\n  border-radius: 10rem;\\n  display: flex;\\n  align-items: center;\\n  padding-left: 3rem;\\n  transition: all .3s; }\\n  .search:focus-within {\\n    transform: translateY(-2px);\\n    box-shadow: 0 0.7rem 3rem rgba(101, 90, 86, 0.08); }\\n  .search__field {\\n    border: none;\\n    background: none;\\n    font-family: inherit;\\n    color: inherit;\\n    font-size: 1.7rem;\\n    width: 30rem; }\\n    .search__field:focus {\\n      outline: none; }\\n    .search__field::placeholder {\\n      color: #DAD0CC; }\\n\\n.likes {\\n  position: relative;\\n  align-self: stretch;\\n  padding: 0 !important; }\\n  .likes__field {\\n    cursor: pointer;\\n    padding: 0 4rem;\\n    display: flex;\\n    align-items: center;\\n    height: 100%;\\n    transition: all .3s; }\\n    .likes__field:hover {\\n      background-color: #F2EFEE; }\\n  .likes__panel:hover,\\n  .likes__field:hover + .likes__panel {\\n    visibility: visible;\\n    opacity: 1; }\\n  .likes__icon {\\n    fill: #F59A83;\\n    height: 3.75rem;\\n    width: 3.75rem; }\\n  .likes__panel {\\n    position: absolute;\\n    right: 0;\\n    top: 10rem;\\n    z-index: 10;\\n    padding: 2rem 0;\\n    width: 34rem;\\n    background-color: #fff;\\n    box-shadow: 0 0.8rem 5rem 2rem rgba(101, 90, 86, 0.1);\\n    visibility: hidden;\\n    opacity: 0;\\n    transition: all .5s .2s; }\\n\\n.results,\\n.likes {\\n  padding: 3rem 0; }\\n  .results__list,\\n  .likes__list {\\n    list-style: none; }\\n  .results__link:link, .results__link:visited,\\n  .likes__link:link,\\n  .likes__link:visited {\\n    display: flex;\\n    align-items: center;\\n    padding: 1.5rem 3rem;\\n    transition: all .3s;\\n    border-right: 1px solid #fff;\\n    text-decoration: none; }\\n  .results__link:hover,\\n  .likes__link:hover {\\n    background-color: #F9F5F3;\\n    transform: translateY(-2px); }\\n  .results__link--active,\\n  .likes__link--active {\\n    background-color: #F9F5F3; }\\n  .results__fig,\\n  .likes__fig {\\n    flex: 0 0 5.5rem;\\n    border-radius: 50%;\\n    overflow: hidden;\\n    height: 5.5rem;\\n    margin-right: 2rem;\\n    position: relative;\\n    backface-visibility: hidden; }\\n    .results__fig::before,\\n    .likes__fig::before {\\n      content: '';\\n      display: block;\\n      height: 100%;\\n      width: 100%;\\n      position: absolute;\\n      top: 0;\\n      left: 0;\\n      background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\\n      opacity: .4; }\\n    .results__fig img,\\n    .likes__fig img {\\n      display: block;\\n      width: 100%;\\n      height: 100%;\\n      object-fit: cover;\\n      transition: all .3s; }\\n  .results__name,\\n  .likes__name {\\n    font-size: 1.3rem;\\n    color: #F59A83;\\n    text-transform: uppercase;\\n    font-weight: 600;\\n    margin-bottom: .3rem; }\\n  .results__author,\\n  .likes__author {\\n    font-size: 1.1rem;\\n    color: #968B87;\\n    text-transform: uppercase;\\n    font-weight: 600; }\\n  .results__pages,\\n  .likes__pages {\\n    margin-top: 3rem;\\n    padding: 0 3rem; }\\n    .results__pages::after,\\n    .likes__pages::after {\\n      content: \\\"\\\";\\n      display: table;\\n      clear: both; }\\n  .results__btn--prev,\\n  .likes__btn--prev {\\n    float: left;\\n    flex-direction: row-reverse; }\\n  .results__btn--next,\\n  .likes__btn--next {\\n    float: right; }\\n\\n.recipe {\\n  background-color: #F9F5F3;\\n  border-top: 1px solid #fff; }\\n  .recipe__fig {\\n    height: 30rem;\\n    position: relative;\\n    transform: scale(1.04) translateY(-1px);\\n    transform-origin: top; }\\n    .recipe__fig::before {\\n      content: '';\\n      display: block;\\n      height: 100%;\\n      width: 100%;\\n      position: absolute;\\n      top: 0;\\n      left: 0;\\n      background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\\n      opacity: .6; }\\n  .recipe__img {\\n    width: 100%;\\n    display: block;\\n    height: 100%;\\n    object-fit: cover; }\\n  .recipe__title {\\n    position: absolute;\\n    bottom: 0;\\n    left: 50%;\\n    transform: translate(-50%, 20%) skewY(-6deg);\\n    color: #fff;\\n    font-weight: 700;\\n    font-size: 2.75rem;\\n    text-transform: uppercase;\\n    width: 70%;\\n    line-height: 1.95;\\n    text-align: center; }\\n    .recipe__title span {\\n      -webkit-box-decoration-break: clone;\\n      box-decoration-break: clone;\\n      padding: 1.3rem 2rem;\\n      background-image: linear-gradient(to right bottom, #FBDB89, #F48982); }\\n  .recipe__details {\\n    display: flex;\\n    align-items: center;\\n    padding: 8rem 3rem 3rem 3rem; }\\n  .recipe__info {\\n    font-size: 1.5rem;\\n    text-transform: uppercase;\\n    display: flex;\\n    align-items: center; }\\n    .recipe__info:not(:last-child) {\\n      margin-right: 4rem; }\\n  .recipe__info-icon {\\n    height: 2rem;\\n    width: 2rem;\\n    fill: #F59A83;\\n    margin-right: 1rem; }\\n  .recipe__info-data {\\n    margin-right: .4rem;\\n    font-weight: 600; }\\n  .recipe__info-buttons {\\n    display: flex;\\n    margin-left: 1.5rem;\\n    visibility: hidden;\\n    opacity: 0;\\n    transform: translateY(5px);\\n    transition: all .4s; }\\n  .recipe:hover .recipe__info-buttons {\\n    visibility: visible;\\n    opacity: 1;\\n    transform: translateY(0); }\\n  .recipe__love {\\n    background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\\n    border-radius: 50%;\\n    border: none;\\n    cursor: pointer;\\n    height: 4.5rem;\\n    width: 4.5rem;\\n    margin-left: auto;\\n    transition: all .2s;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center; }\\n    .recipe__love:hover {\\n      transform: scale(1.07); }\\n    .recipe__love:focus {\\n      outline: none; }\\n    .recipe__love svg {\\n      height: 2.75rem;\\n      width: 2.75rem;\\n      fill: #fff; }\\n  .recipe__ingredients {\\n    padding: 4rem 5rem;\\n    font-size: 1.5rem;\\n    line-height: 1.4;\\n    background-color: #F2EFEE;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center; }\\n  .recipe__ingredient-list {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-column-gap: 1.5rem;\\n    grid-row-gap: 2.5rem;\\n    list-style: none;\\n    margin-bottom: 3rem; }\\n  .recipe__item {\\n    display: flex; }\\n  .recipe__icon {\\n    height: 1.8rem;\\n    width: 1.8rem;\\n    fill: #F59A83;\\n    border: 1px solid #F59A83;\\n    border-radius: 50%;\\n    padding: 2px;\\n    margin-right: 1rem;\\n    flex: 0 0 auto;\\n    margin-top: .1rem; }\\n  .recipe__count {\\n    margin-right: .5rem;\\n    flex: 0 0 auto; }\\n  .recipe__directions {\\n    padding: 4rem;\\n    padding-bottom: 5rem;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center; }\\n  .recipe__directions-text {\\n    font-size: 1.5rem;\\n    text-align: center;\\n    width: 90%;\\n    margin-bottom: 3rem;\\n    color: #968B87; }\\n  .recipe__by {\\n    font-weight: 700; }\\n\\n.shopping {\\n  padding: 3rem 4rem;\\n  display: flex;\\n  flex-direction: column; }\\n  .shopping__list {\\n    list-style: none;\\n    max-height: 77rem;\\n    overflow: scroll; }\\n  .shopping__item {\\n    display: flex;\\n    align-items: flex-start;\\n    padding: 1.3rem 0;\\n    border-bottom: 1px solid #F2EFEE;\\n    position: relative; }\\n  .shopping__count {\\n    flex: 0 0 7.5rem;\\n    padding: .4rem .5rem;\\n    border: 1px solid #F2EFEE;\\n    border-radius: 3px;\\n    margin-right: 2rem;\\n    cursor: pointer;\\n    display: flex;\\n    justify-content: space-between; }\\n    .shopping__count input {\\n      color: inherit;\\n      font-family: inherit;\\n      font-size: 1.2rem;\\n      text-align: center;\\n      border: none;\\n      width: 3.7rem;\\n      border-radius: 3px; }\\n      .shopping__count input:focus {\\n        outline: none;\\n        background-color: #F2EFEE; }\\n    .shopping__count p {\\n      font-size: 1.2rem; }\\n  .shopping__description {\\n    flex: 1;\\n    font-size: 1.3rem;\\n    margin-top: .4rem;\\n    margin-right: 1.5rem; }\\n  .shopping__delete {\\n    margin-top: .5rem;\\n    position: absolute;\\n    right: 0;\\n    background-image: linear-gradient(to right, transparent 0%, #fff 40%, #fff 100%);\\n    width: 3.75rem;\\n    padding-left: 2rem;\\n    visibility: hidden;\\n    opacity: 0;\\n    transition: all .5s; }\\n  .shopping__item:hover .shopping__delete {\\n    opacity: 1;\\n    visibility: visible; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js?");

/***/ })

/******/ });