(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["ReactPeity"] = factory(require("react"), require("lodash"));
	else
		root["ReactPeity"] = factory(root["React"], root["_"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Bar = exports.Line = undefined;

	var _Line = __webpack_require__(4);

	var _Line2 = _interopRequireDefault(_Line);

	var _Bar = __webpack_require__(3);

	var _Bar2 = _interopRequireDefault(_Bar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  Line: _Line2.default, Bar: _Bar2.default
	};
	exports.Line = _Line2.default;
	exports.Bar = _Bar2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Bar = function (_React$Component) {
	  _inherits(Bar, _React$Component);

	  function Bar() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Bar);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Bar)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.values = function () {
	      return typeof _this.props.values === 'string' ? _lodash2.default.split(_this.props.values, _this.props.delimiter).map(function (v) {
	        return Number(v);
	      }) : _lodash2.default.flatten([_this.props.values]);
	    }, _this.fill = function (i) {
	      return _this.props.fill[i % _this.props.fill.length];
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Bar, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var values = this.values();
	      var max = _lodash2.default.max([_lodash2.default.max(values), Number(this.props.max)]);
	      var min = _lodash2.default.min(values);
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var padding = _props.padding;

	      var diff = max - min;

	      var xScale = function xScale(input) {
	        return input * (width / values.length);
	      };

	      var yScale = function yScale(input) {
	        return height - (diff ? (input - min) / diff * height : 1);
	      };

	      return _react2.default.createElement(
	        'svg',
	        { className: 'peity peity-bar', height: this.props.height, width: this.props.width },
	        Object.keys(values).map(function (i) {
	          var x = xScale(Number(i) + padding);
	          var w = xScale(Number(i) + 1 - padding) - x;
	          var value = values[i];
	          var valueY = yScale(value);
	          var y1 = valueY;
	          var y2 = valueY;
	          var h = 0;

	          if (!diff) {
	            h = 1;
	          } else if (value < 0) {
	            y1 = yScale(Math.min(max, 0));
	          } else {
	            y2 = yScale(Math.max(min, 0));
	          }

	          h = y2 - y1;

	          if (h === 0) {
	            h = 1;
	            if (max > 0 && diff) y1--;
	          }

	          return _react2.default.createElement('rect', { key: i, fill: _this2.fill(i), x: x, y: y1, width: w, height: h });
	        })
	      );
	    }
	  }]);

	  return Bar;
	}(_react2.default.Component);

	Bar.propTypes = {
	  values: _react2.default.PropTypes.any.isRequired,
	  delimiter: _react2.default.PropTypes.string,
	  fill: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
	  height: _react2.default.PropTypes.number,
	  min: _react2.default.PropTypes.number,
	  max: _react2.default.PropTypes.number,
	  padding: _react2.default.PropTypes.number,
	  width: _react2.default.PropTypes.number
	};
	Bar.defaultProps = {
	  delimiter: ",",
	  fill: ["#4D89F9"],
	  height: 16,
	  min: 0,
	  max: -Infinity,
	  padding: 0.1,
	  width: 32
	};
	exports.default = Bar;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Line = function (_React$Component) {
	  _inherits(Line, _React$Component);

	  function Line() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Line);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Line)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.values = function () {
	      return typeof _this.props.values === 'string' ? _lodash2.default.split(_this.props.values, _this.props.delimiter).map(function (v) {
	        return Number(v);
	      }) : _lodash2.default.flatten([_this.props.values]);
	    }, _this.renderFill = function (coords) {
	      if (!_this.props.fill) return null;
	      return _react2.default.createElement('polygon', { fill: _this.props.fill, points: _lodash2.default.join(coords, ' ') });
	    }, _this.renderStroke = function (coords) {
	      if (!_this.props.stroke || _this.props.strokeWidth === 0) return null;
	      return _react2.default.createElement('polyline', { fill: 'none', points: _lodash2.default.join(_lodash2.default.slice(coords, 1, coords.length - 1), ' '), stroke: _this.props.stroke, strokeWidth: _this.props.strokeWidth, strokeLinecap: 'square' });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Line, [{
	    key: 'render',
	    value: function render() {
	      var values = this.values();
	      var max = _lodash2.default.max([_lodash2.default.max(values), Number(this.props.max)]);
	      var min = _lodash2.default.min(values);
	      var _props = this.props;
	      var strokeWidth = _props.strokeWidth;
	      var width = _props.width;

	      var height = this.props.height - strokeWidth;
	      var diff = max - min;

	      var xScale = function xScale(input) {
	        return input * (width / (values.length - 1));
	      };

	      var yScale = function yScale(input) {
	        var y = height;

	        if (diff) {
	          y -= (input - min) / diff * height;
	        }

	        return y + strokeWidth / 2;
	      };

	      var zero = yScale(Math.max(min, 0));
	      var coords = _lodash2.default.concat([[0, zero]], Object.keys(values).map(function (i) {
	        return [xScale(i), yScale(values[i])];
	      }), [[width, zero]]);

	      return _react2.default.createElement(
	        'svg',
	        { className: 'peity peity-line', height: this.props.height, width: this.props.width },
	        this.renderFill(coords),
	        this.renderStroke(coords)
	      );
	    }
	  }]);

	  return Line;
	}(_react2.default.Component);

	Line.propTypes = {
	  values: _react2.default.PropTypes.any.isRequired,
	  delimiter: _react2.default.PropTypes.string,
	  fill: _react2.default.PropTypes.string,
	  height: _react2.default.PropTypes.number,
	  min: _react2.default.PropTypes.number,
	  max: _react2.default.PropTypes.number,
	  stroke: _react2.default.PropTypes.string,
	  strokeWidth: _react2.default.PropTypes.number,
	  width: _react2.default.PropTypes.number
	};
	Line.defaultProps = {
	  delimiter: ",",
	  fill: "#c6d9fd",
	  height: 16,
	  min: 0,
	  max: -Infinity,
	  stroke: "#4d89f9",
	  strokeWidth: 1,
	  width: 32
	};
	exports.default = Line;

/***/ }
/******/ ])
});
;