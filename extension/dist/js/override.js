/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"override": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Board_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Board.vue */ \"./src/components/Board.vue\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Board: _components_Board_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  name: \"App\",\n  data: function data() {\n    return {\n      boardId: this.$route.path.split(\"/\")[1]\n    };\n  },\n  methods: {\n    show: function show() {\n      var _this = this;\n\n      var defaulter = document.querySelector(\".lvE3se\");\n      if (defaulter) defaulter.style.transform = \"none\";\n      setTimeout(function () {\n        _this.$modal.show(\"board\");\n      }, 200);\n    },\n    close: function close() {\n      this.$modal.hide(\"board\");\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Board.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_kunaltawatia_work_board_extension_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var _home_kunaltawatia_work_board_extension_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ \"./node_modules/jspdf/dist/jspdf.es.min.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Board\",\n  props: [\"boardId\", \"close\"],\n  data: function data() {\n    return {\n      isConnected: false,\n      drawing: false,\n      current: {\n        color: \"black\",\n        previousDrawTime: 0,\n        strokeWidth: 2\n      },\n      colors: [\"black\", \"red\", \"blue\", \"green\", \"yellow\", \"white\"]\n    };\n  },\n  mounted: function mounted() {\n    this.resize();\n    this.$socket.emit(\"getBoard\", this.boardId);\n  },\n  sockets: {\n    connect: function connect() {\n      this.isConnected = true;\n    },\n    disconnect: function disconnect() {\n      this.isConnected = false;\n    },\n    draw: function draw(data) {\n      var slug = data.slug,\n          action = data.action;\n\n      if (this.boardId == slug) {\n        this.drawAction(action);\n      }\n    },\n    drawBurst: function drawBurst(actions) {\n      var _iterator = Object(_home_kunaltawatia_work_board_extension_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(actions),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var action = _step.value;\n          this.drawAction(action);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    },\n    clear: function clear() {\n      this.clear();\n    }\n  },\n  methods: {\n    decreaseStrokeWidth: function decreaseStrokeWidth() {\n      this.current.strokeWidth = Math.max(2, this.current.strokeWidth - 2);\n    },\n    increaseStrokeWidth: function increaseStrokeWidth() {\n      this.current.strokeWidth = Math.min(32, this.current.strokeWidth + 2);\n    },\n    resize: function resize() {\n      var canvas = this.$refs.wb;\n      canvas.width = canvas.clientWidth;\n      canvas.height = canvas.clientHeight - 4;\n      var context = canvas.getContext(\"2d\");\n      context.fillStyle = \"white\";\n      context.fillRect(0, 0, canvas.width, canvas.height);\n    },\n    drawAction: function drawAction(data) {\n      var x0 = data.x0,\n          y0 = data.y0,\n          x1 = data.x1,\n          y1 = data.y1,\n          color = data.color,\n          strokeWidth = data.strokeWidth;\n      this.drawLine(x0, y0, x1, y1, color, strokeWidth, false);\n    },\n    drawLine: function drawLine(x0, y0, x1, y1, color, strokeWidth) {\n      var emit = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;\n      var canvas = this.$refs.wb;\n      var context = canvas.getContext(\"2d\");\n      var w = canvas.width;\n      var h = canvas.height;\n      context.beginPath();\n      context.moveTo(x0 * w, y0 * h);\n      context.lineTo(x1 * w, y1 * h);\n      context.strokeStyle = color;\n      context.lineWidth = strokeWidth;\n      context.stroke();\n      context.closePath();\n\n      if (emit) {\n        this.$socket.emit(\"draw\", {\n          slug: this.boardId,\n          action: {\n            x0: x0,\n            y0: y0,\n            x1: x1,\n            y1: y1,\n            color: color,\n            strokeWidth: strokeWidth\n          }\n        });\n      }\n    },\n    normalizeMouse: function normalizeMouse(e) {\n      var x = e.clientX,\n          y = e.clientY;\n      var canvas = this.$refs.wb;\n      var rect = canvas.getBoundingClientRect();\n      x -= rect.x;\n      x /= rect.width;\n      y -= rect.y;\n      y /= rect.height;\n      return {\n        x: x,\n        y: y\n      };\n    },\n    addStroke: function addStroke(e) {\n      var location = this.normalizeMouse(e);\n      this.drawLine(this.current.x, this.current.y, location.x, location.y, this.current.color, this.current.strokeWidth, true);\n    },\n    setCurrent: function setCurrent(content) {\n      this.current = Object(_home_kunaltawatia_work_board_extension_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_home_kunaltawatia_work_board_extension_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, this.current), content);\n    },\n    mousedown: function mousedown(e) {\n      this.drawing = true;\n      this.setCurrent(this.normalizeMouse(e));\n    },\n    mouseup: function mouseup(e) {\n      if (!this.drawing) return;\n      this.addStroke(e);\n      this.drawing = false;\n    },\n    mousemove: function mousemove(e) {\n      if (!this.drawing) return;\n      this.addStroke(e);\n      this.setCurrent(this.normalizeMouse(e));\n    },\n    throttle: function throttle(e) {\n      var time = new Date().getTime();\n\n      if (time - this.current.previousDrawTime >= 10) {\n        this.current.previousDrawTime = time;\n        this.mousemove(e);\n      }\n    },\n    clear: function clear() {\n      var emit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      this.resize();\n      if (emit) this.$socket.emit(\"clear\", this.boardId);\n    },\n    changeColor: function changeColor(color) {\n      if (this.current.color === \"white\" && color !== \"white\") {\n        this.current.strokeWidth = 2;\n      } else if (color == \"white\") {\n        this.current.strokeWidth = 32;\n      }\n\n      this.current.color = color;\n    },\n    download: function download() {\n      var canvas = this.$refs.wb;\n      var image = canvas.toDataURL(\"image/jpeg\", 1.0);\n      var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__[\"jsPDF\"]();\n      var width = pdf.internal.pageSize.getWidth();\n      var height = canvas.height * width / canvas.width;\n      pdf.addImage(image, \"JPEG\", 0, 0, width, height);\n      pdf.save(\"Canvas-\".concat(new Date().toLocaleString(), \".pdf\")); // \t.replace(\"image/jpeg\", \"image/octet-stream\");\n      // let a = document.createElement(\"a\");\n      // a.href = image;\n      // a.download = \"image.jpeg\";\n      // a.hidden = true;\n      // document.body.appendChild(a);\n      // a.click();\n      // document.body.removeChild(a);\n    }\n  },\n  computed: {\n    keymap: function keymap() {\n      var _this = this;\n\n      return {\n        \"]\": this.increaseStrokeWidth,\n        \"[\": this.decreaseStrokeWidth,\n        c: this.clear,\n        d: this.download,\n        r: function r() {\n          return _this.changeColor(\"red\");\n        },\n        g: function g() {\n          return _this.changeColor(\"green\");\n        },\n        b: function b() {\n          return _this.changeColor(\"blue\");\n        },\n        y: function y() {\n          return _this.changeColor(\"yellow\");\n        },\n        p: function p() {\n          return _this.changeColor(\"black\");\n        },\n        e: function e() {\n          return _this.changeColor(\"white\");\n        }\n      };\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Board.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a7148ca2-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a7148ca2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\n        \"div\",\n        {\n          staticClass: \"uArJ5e UQuaGc kCyAyd QU4Gid foXzLb IeuGXd\",\n          attrs: {\n            jsshadow: \"\",\n            role: \"button\",\n            jscontroller: \"VXdfxd\",\n            jsaction:\n              \"click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef\",\n            \"aria-label\": \"Whiteboard\",\n            \"aria-disabled\": \"false\",\n            tabindex: \"0\",\n            \"data-tooltip\": \"Whiteboard\",\n            \"aria-expanded\": \"false\",\n            \"data-tab-id\": \"1\",\n            \"data-tooltip-vertical-offset\": \"-12\",\n            \"data-tooltip-horizontal-offset\": \"0\"\n          },\n          on: { click: _vm.show }\n        },\n        [\n          _c(\"div\", {\n            staticClass: \"Fvio9d MbhUzd\",\n            attrs: { jsname: \"ksKsZd\" }\n          }),\n          _c(\"div\", { staticClass: \"e19J0b CeoRYc\" }),\n          _c(\"span\", { staticClass: \"l4V7wb Fxmcue\", attrs: { jsslot: \"\" } }, [\n            _c(\"span\", { staticClass: \"NPEfkd RveJvd snByac\" }, [\n              _c(\"div\", { staticClass: \"ZaI3hb\" }, [\n                _c(\"div\", { staticClass: \"gV3Svc\" }, [\n                  _c(\n                    \"span\",\n                    {\n                      staticClass: \"DPvwYc sm8sCf azXnTb\",\n                      attrs: { \"aria-hidden\": \"true\" }\n                    },\n                    [\n                      _c(\n                        \"svg\",\n                        {\n                          staticClass: \"Hdh4hc cIGbvc NMm5M svg\",\n                          attrs: {\n                            focusable: \"false\",\n                            height: \"28\",\n                            width: \"28\",\n                            viewBox: \"0 0 512 512\"\n                          }\n                        },\n                        [\n                          _c(\"g\", [\n                            _c(\"path\", {\n                              attrs: {\n                                d:\n                                  \"m489.5 422h-467c-12.406 0-22.5-10.093-22.5-22.5v-287c0-12.407 10.094-22.5 22.5-22.5h317c4.143 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5h-317c-4.136 0-7.5 3.364-7.5 7.5v264.5h16.285c-.832-2.347-1.285-4.872-1.285-7.5v-30c0-12.407 10.094-22.5 22.5-22.5h74c12.406 0 22.5 10.093 22.5 22.5v30c0 2.628-.453 5.153-1.285 7.5h166.285c4.143 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5h-299v7.5c0 4.136 3.364 7.5 7.5 7.5h467c4.136 0 7.5-3.364 7.5-7.5v-7.5h-150c-8.691 0-15-9.462-15-22.5s6.309-22.5 15-22.5h120c8.691 0 15 9.462 15 22.5 0 2.667-.264 5.183-.758 7.5h15.758v-264.5c0-4.136-3.364-7.5-7.5-7.5h-120c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h120c12.406 0 22.5 10.093 22.5 22.5v287c0 12.407-10.094 22.5-22.5 22.5zm-92.701-45h68.679c.658-1.192 1.522-3.786 1.522-7.5s-.864-6.308-1.522-7.5h-68.679zm-48.277 0h33.276v-15h-33.276c-.658 1.192-1.522 3.786-1.522 7.5s.864 6.308 1.522 7.5zm-296.022 0h74c4.136 0 7.5-3.364 7.5-7.5v-7.5h-89v7.5c0 4.136 3.364 7.5 7.5 7.5zm414.5-15h.01zm-422-15h89v-7.5c0-4.136-3.364-7.5-7.5-7.5h-74c-4.136 0-7.5 3.364-7.5 7.5z\"\n                              }\n                            })\n                          ])\n                        ]\n                      )\n                    ]\n                  )\n                ])\n              ])\n            ])\n          ])\n        ]\n      ),\n      _c(\n        \"modal\",\n        { attrs: { name: \"board\", width: \"80%\", height: \"80%\" } },\n        [_c(\"board\", { attrs: { boardId: _vm.boardId, close: _vm.close } })],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22a7148ca2-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a7148ca2-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Board.vue?vue&type=template&id=e1ee1034&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a7148ca2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board.vue?vue&type=template&id=e1ee1034& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      directives: [\n        {\n          name: \"hotkey\",\n          rawName: \"v-hotkey\",\n          value: _vm.keymap,\n          expression: \"keymap\"\n        }\n      ],\n      staticClass: \"board\"\n    },\n    [\n      _c(\n        \"div\",\n        { attrs: { id: \"whiteboard-container\" }, on: { resize: _vm.resize } },\n        [\n          _c(\"canvas\", {\n            ref: \"wb\",\n            attrs: { id: \"whiteboard\" },\n            on: {\n              mousedown: _vm.mousedown,\n              mouseup: _vm.mouseup,\n              mouseout: _vm.mouseup,\n              mousemove: _vm.throttle\n            }\n          })\n        ]\n      ),\n      _c(\"div\", { staticClass: \"action-container\" }, [\n        _c(\n          \"div\",\n          [\n            _vm._l(_vm.colors, function(color) {\n              return _c(\"button\", {\n                key: color,\n                staticClass: \"fab\",\n                style: { \"background-color\": color },\n                on: {\n                  click: function() {\n                    return _vm.changeColor(color)\n                  }\n                }\n              })\n            }),\n            _c(\n              \"button\",\n              {\n                staticClass: \"fab\",\n                on: {\n                  click: function() {\n                    return _vm.clear(true)\n                  }\n                }\n              },\n              [\n                _c(\n                  \"svg\",\n                  {\n                    attrs: {\n                      xmlns: \"http://www.w3.org/2000/svg\",\n                      \"xmlns:xlink\": \"http://www.w3.org/1999/xlink\",\n                      width: \"12\",\n                      height: \"12\",\n                      viewBox: \"0 0 21 22\"\n                    }\n                  },\n                  [\n                    _c(\"defs\", [\n                      _c(\"clipPath\", { attrs: { id: \"clip-path\" } }, [\n                        _c(\"rect\", {\n                          attrs: { width: \"21\", height: \"22\", fill: \"none\" }\n                        })\n                      ])\n                    ]),\n                    _c(\n                      \"g\",\n                      { attrs: { id: \"x\", \"clip-path\": \"url(#clip-path)\" } },\n                      [\n                        _c(\"line\", {\n                          attrs: {\n                            id: \"Line_1169\",\n                            \"data-name\": \"Line 1169\",\n                            x1: \"21\",\n                            y2: \"22\",\n                            fill: \"none\",\n                            stroke: \"#707070\",\n                            \"stroke-linecap\": \"round\",\n                            \"stroke-linejoin\": \"round\",\n                            \"stroke-width\": \"2\"\n                          }\n                        }),\n                        _c(\"line\", {\n                          attrs: {\n                            id: \"Line_1170\",\n                            \"data-name\": \"Line 1170\",\n                            x2: \"21\",\n                            y2: \"22\",\n                            fill: \"none\",\n                            stroke: \"#707070\",\n                            \"stroke-linecap\": \"round\",\n                            \"stroke-linejoin\": \"round\",\n                            \"stroke-width\": \"2\"\n                          }\n                        })\n                      ]\n                    )\n                  ]\n                )\n              ]\n            ),\n            _c(\"button\", { staticClass: \"fab\", on: { click: _vm.download } }, [\n              _c(\n                \"svg\",\n                {\n                  attrs: {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    \"xmlns:xlink\": \"http://www.w3.org/1999/xlink\",\n                    width: \"12\",\n                    height: \"12\",\n                    viewBox: \"0 0 24 21\"\n                  }\n                },\n                [\n                  _c(\"defs\", [\n                    _c(\"clipPath\", { attrs: { id: \"clip-path\" } }, [\n                      _c(\"rect\", {\n                        attrs: { width: \"24\", height: \"21\", fill: \"none\" }\n                      })\n                    ])\n                  ]),\n                  _c(\n                    \"g\",\n                    {\n                      attrs: { id: \"download\", \"clip-path\": \"url(#clip-path)\" }\n                    },\n                    [\n                      _c(\"path\", {\n                        attrs: {\n                          id: \"Path_971\",\n                          \"data-name\": \"Path 971\",\n                          d:\n                            \"M27,15v4c0,1.1-1.194,2-2.667,2H5.667C4.194,21,3,20.1,3,19V15\",\n                          transform: \"translate(-3)\",\n                          fill: \"none\",\n                          stroke: \"#707070\",\n                          \"stroke-linecap\": \"round\",\n                          \"stroke-linejoin\": \"round\",\n                          \"stroke-width\": \"2\"\n                        }\n                      }),\n                      _c(\"path\", {\n                        attrs: {\n                          id: \"Path_972\",\n                          \"data-name\": \"Path 972\",\n                          d: \"M7,10l8,5,8-5\",\n                          transform: \"translate(-3 -1.385)\",\n                          fill: \"none\",\n                          stroke: \"#707070\",\n                          \"stroke-linecap\": \"round\",\n                          \"stroke-linejoin\": \"round\",\n                          \"stroke-width\": \"2\"\n                        }\n                      }),\n                      _c(\"line\", {\n                        attrs: {\n                          id: \"Line_980\",\n                          \"data-name\": \"Line 980\",\n                          y1: \"12\",\n                          transform: \"translate(12)\",\n                          fill: \"none\",\n                          stroke: \"#707070\",\n                          \"stroke-linecap\": \"round\",\n                          \"stroke-linejoin\": \"round\",\n                          \"stroke-width\": \"2\"\n                        }\n                      })\n                    ]\n                  )\n                ]\n              )\n            ])\n          ],\n          2\n        ),\n        _c(\"div\", [\n          _c(\n            \"button\",\n            { staticClass: \"fab\", on: { click: _vm.decreaseStrokeWidth } },\n            [\n              _c(\n                \"svg\",\n                {\n                  attrs: {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    \"xmlns:xlink\": \"http://www.w3.org/1999/xlink\",\n                    width: \"12\",\n                    height: \"2\",\n                    viewBox: \"0 0 21 2\"\n                  }\n                },\n                [\n                  _c(\"defs\", [\n                    _c(\"clipPath\", { attrs: { id: \"clip-path\" } }, [\n                      _c(\"rect\", { attrs: { width: \"19\", fill: \"none\" } })\n                    ])\n                  ]),\n                  _c(\n                    \"g\",\n                    {\n                      attrs: {\n                        id: \"minus\",\n                        transform: \"translate(1 1)\",\n                        \"clip-path\": \"url(#clip-path)\"\n                      }\n                    },\n                    [\n                      _c(\"line\", {\n                        attrs: {\n                          id: \"minus-2\",\n                          \"data-name\": \"minus\",\n                          x2: \"19\",\n                          fill: \"none\",\n                          stroke: \"#707070\",\n                          \"stroke-linecap\": \"round\",\n                          \"stroke-linejoin\": \"round\",\n                          \"stroke-width\": \"2\"\n                        }\n                      })\n                    ]\n                  )\n                ]\n              )\n            ]\n          ),\n          _c(\n            \"p\",\n            {\n              staticStyle: {\n                \"font-family\": \"'Roboto', arial, sans-serif\",\n                color: \"#707070\"\n              }\n            },\n            [_vm._v(\" \" + _vm._s(_vm.current.strokeWidth) + \" \")]\n          ),\n          _c(\n            \"button\",\n            { staticClass: \"fab\", on: { click: _vm.increaseStrokeWidth } },\n            [\n              _c(\n                \"svg\",\n                {\n                  attrs: {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    \"xmlns:xlink\": \"http://www.w3.org/1999/xlink\",\n                    width: \"12\",\n                    height: \"12\",\n                    viewBox: \"0 0 25 25\"\n                  }\n                },\n                [\n                  _c(\"defs\", [\n                    _c(\"clipPath\", { attrs: { id: \"clip-path\" } }, [\n                      _c(\"rect\", {\n                        attrs: { width: \"25\", height: \"25\", fill: \"none\" }\n                      })\n                    ])\n                  ]),\n                  _c(\n                    \"g\",\n                    { attrs: { id: \"plus\", \"clip-path\": \"url(#clip-path)\" } },\n                    [\n                      _c(\"line\", {\n                        attrs: {\n                          id: \"Line_1082\",\n                          \"data-name\": \"Line 1082\",\n                          y2: \"25\",\n                          transform: \"translate(13)\",\n                          fill: \"none\",\n                          stroke: \"#707070\",\n                          \"stroke-linecap\": \"round\",\n                          \"stroke-linejoin\": \"round\",\n                          \"stroke-width\": \"2\"\n                        }\n                      }),\n                      _c(\"line\", {\n                        attrs: {\n                          id: \"Line_1083\",\n                          \"data-name\": \"Line 1083\",\n                          x2: \"25\",\n                          transform: \"translate(0 13)\",\n                          fill: \"none\",\n                          stroke: \"#707070\",\n                          \"stroke-linecap\": \"round\",\n                          \"stroke-linejoin\": \"round\",\n                          \"stroke-width\": \"2\"\n                        }\n                      })\n                    ]\n                  )\n                ]\n              )\n            ]\n          )\n        ])\n      ])\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Board.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22a7148ca2-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.svg[data-v-7ba5bd90] {\\n\\tstroke: currentColor;\\n\\tstroke-width: 12;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Board.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.vm--modal {\\n\\tborder-radius: 12px;\\n}\\n.board {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\theight: calc(100% - 24px);\\n\\tpadding: 12px;\\n}\\n#whiteboard-container {\\n\\tborder: 2px dashed #707070;\\n\\tflex-grow: 1;\\n\\tborder-radius: 10px;\\n\\tbox-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\\n}\\n#whiteboard {\\n\\theight: 100%;\\n\\twidth: 100%;\\n}\\n.action-container {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tmargin-top: 8px;\\n\\tjustify-content: space-between;\\n}\\n.action-container > * {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n}\\n.fab {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n\\theight: 28px;\\n\\twidth: 28px;\\n\\tborder-radius: 50%;\\n\\tmargin: 6px;\\n\\tborder: 1px solid #eeeeee;\\n\\tbox-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\\n}\\nbutton {\\n\\toutline: none;\\n\\tborder: none;\\n\\tcursor: pointer;\\n\\tbackground-color: white;\\n\\tpadding: 0;\\n}\\nbutton:focus {\\n\\toutline: none;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Board.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"51ed1074\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Board.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Board.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Board.vue?vue&type=style&index=0&lang=css&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"17d68687\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Board.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90&scoped=true& */ \"./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css& */ \"./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7ba5bd90_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7ba5bd90_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7ba5bd90\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css&":
/*!******************************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--6-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true&":
/*!****************************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a7148ca2_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a7148ca2-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"a7148ca2-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a7148ca2_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a7148ca2_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/components/Board.vue":
/*!**********************************!*\
  !*** ./src/components/Board.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board_vue_vue_type_template_id_e1ee1034___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.vue?vue&type=template&id=e1ee1034& */ \"./src/components/Board.vue?vue&type=template&id=e1ee1034&\");\n/* harmony import */ var _Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board.vue?vue&type=script&lang=js& */ \"./src/components/Board.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Board_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board.vue?vue&type=style&index=0&lang=css& */ \"./src/components/Board.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Board_vue_vue_type_template_id_e1ee1034___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Board_vue_vue_type_template_id_e1ee1034___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Board.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Board.vue?");

/***/ }),

/***/ "./src/components/Board.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/Board.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Board.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Board.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Board.vue?");

/***/ }),

/***/ "./src/components/Board.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************!*\
  !*** ./src/components/Board.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Board.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Board.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/Board.vue?");

/***/ }),

/***/ "./src/components/Board.vue?vue&type=template&id=e1ee1034&":
/*!*****************************************************************!*\
  !*** ./src/components/Board.vue?vue&type=template&id=e1ee1034& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a7148ca2_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_template_id_e1ee1034___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a7148ca2-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Board.vue?vue&type=template&id=e1ee1034& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"a7148ca2-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Board.vue?vue&type=template&id=e1ee1034&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a7148ca2_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_template_id_e1ee1034___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a7148ca2_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_template_id_e1ee1034___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Board.vue?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_kunaltawatia_work_board_extension_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var _home_kunaltawatia_work_board_extension_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_kunaltawatia_work_board_extension_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_kunaltawatia_work_board_extension_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var _home_kunaltawatia_work_board_extension_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_kunaltawatia_work_board_extension_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_kunaltawatia_work_board_extension_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var _home_kunaltawatia_work_board_extension_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_kunaltawatia_work_board_extension_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_kunaltawatia_work_board_extension_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var _home_kunaltawatia_work_board_extension_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_kunaltawatia_work_board_extension_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var v_hotkey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! v-hotkey */ \"./node_modules/v-hotkey/dist/v-hotkey.common.js\");\n/* harmony import */ var v_hotkey__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(v_hotkey__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var vue_js_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-js-modal */ \"./node_modules/vue-js-modal/dist/index.js\");\n/* harmony import */ var vue_js_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_js_modal__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var vue_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-socket.io */ \"./node_modules/vue-socket.io/dist/vue-socketio.js\");\n/* harmony import */ var vue_socket_io__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_socket_io__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar socket = socket_io_client__WEBPACK_IMPORTED_MODULE_7___default()(\"http://localhost:3000\");\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].config.productionTip = false;\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use(v_hotkey__WEBPACK_IMPORTED_MODULE_5___default.a);\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use(new vue_socket_io__WEBPACK_IMPORTED_MODULE_8___default.a({\n  debug: true,\n  connection: socket\n}));\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use(vue_js_modal__WEBPACK_IMPORTED_MODULE_6___default.a);\n\nfunction mount() {\n  console.log(\"Checking to Mount...\");\n  var buttonBar = document.querySelector(window.history.state ? \".NzPR9b\" : \"body\");\n\n  if (buttonBar) {\n    var element = document.createElement(\"div\", {\n      id: \"vue-extension\"\n    });\n    buttonBar.innerHTML = '<div class=\"qO3Z3c\"></div>' + buttonBar.innerHTML; // add divider\n\n    buttonBar.prepend(element);\n    new vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n      router: _router_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n      render: function render(h) {\n        return h(_App_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n      }\n    }).$mount(element);\n    console.log(\"Mounted!\");\n  } else {\n    setTimeout(mount, 1000);\n  }\n\n  return;\n}\n\nmount();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  mode: \"history\"\n}));\n\n//# sourceURL=webpack:///./src/router.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/kunaltawatia/work/board/extension/src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });