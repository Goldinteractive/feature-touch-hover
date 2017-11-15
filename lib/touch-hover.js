(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("touch-hover", [], factory);
	else if(typeof exports === 'object')
		exports["touch-hover"] = factory();
	else
		root["touch-hover"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ATTR_FORCE_PRIMARY_CLICK = 'data-force';

  var POINTER_TOUCH = 'touch';
  var POINTER_PEN = 'pen';

  var IE10_POINTER_TOUCH = 2;
  var IE10_POINTER_PEN = 3;

  var current = null;
  var instances = [];
  var touchUsed = false;
  var keyboardUsed = false;
  var clicked = false;

  document.addEventListener('touchend', function (e) {
    touchUsed = true;
  });

  document.addEventListener('pointerdown', function (e) {
    touchUsed = e.pointerType === POINTER_TOUCH || e.pointerType === POINTER_PEN;
  });

  document.addEventListener('MSPointerDown', function (e) {
    touchUsed = e.pointerType === IE10_POINTER_TOUCH || e.pointerType === IE10_POINTER_PEN;
  });

  document.addEventListener('keydown', function (e) {
    keyboardUsed = true;
  });

  document.addEventListener('click', function (e) {
    if (!clicked) {
      instances.forEach(function (instance) {
        instance._blur(e);
      });
    }

    // reset flags
    touchUsed = false;
    keyboardUsed = false;
    clicked = false;
  });

  /**
   * Touch hover feature class.
   */

  var TouchHover = function (_base$features$Featur) {
    _inherits(TouchHover, _base$features$Featur);

    function TouchHover() {
      _classCallCheck(this, TouchHover);

      return _possibleConstructorReturn(this, (TouchHover.__proto__ || Object.getPrototypeOf(TouchHover)).apply(this, arguments));
    }

    _createClass(TouchHover, [{
      key: 'init',
      value: function init() {
        instances.push(this);

        this.openedByTouch = false;
        this.openedByMouseenter = false;

        this.initialActive = this.node.classList.contains(this.options.classActive);

        this.addEventListener(this.node, 'mouseenter', this._mouseenterListener());
        this.addEventListener(this.node, 'mouseleave', this._mouseleaveListener());
        this.addEventListener(this.node, 'click', this._clickListener());
      }
    }, {
      key: '_blur',
      value: function _blur(e) {
        var event = document.createEvent('CustomEvent');
        event.initCustomEvent('touch:blur', true, true, {
          originalEvent: e
        });

        if (!this.node.dispatchEvent(event)) {
          return false;
        }

        this.openedByTouch = false;
        this.openedByMouseenter = false;

        if (base.utils.check.isFunction(this.options.resetOpen) && this.options.resetOpenOnMouseBlur && (e.type === 'mouseleave' || e.type === 'mouseenter' || e.type === 'click' && e.currentTarget !== document && this.options.resetOpenOnClickBlur || e.type === 'click' && e.currentTarget === document && this.options.resetOpenOnOuterClickBlur)) {
          this.options.resetOpen.call(this);
        }

        if (this.options.resetActiveOnMouseBlur && (e.type === 'mouseleave' || e.type === 'mouseenter') || e.type === 'click' && e.currentTarget !== document && this.options.resetActiveOnClickBlur || e.type === 'click' && e.currentTarget === document && this.options.resetActiveOnOuterClickBlur) {
          this.initialActive = false;
          this.node.classList.remove(this.options.classActive);
        }

        this.node.classList.remove(this.options.classClicked);
      }
    }, {
      key: '_hover',
      value: function _hover(e) {
        var _this2 = this;

        var event = document.createEvent('CustomEvent');
        event.initCustomEvent('touch:hover', true, true, {
          originalEvent: e
        });

        if (!this.node.dispatchEvent(event)) {
          return false;
        }

        current = this;

        instances.forEach(function (instance) {
          if (_this2 !== instance) {
            instance._blur(e);
          }
        });

        this.node.classList.remove(this.options.classClicked);
        this.node.classList.add(this.options.classActive);
      }
    }, {
      key: '_primaryClick',
      value: function _primaryClick(e) {
        var event = document.createEvent('CustomEvent');
        event.initCustomEvent('touch:click', true, true, {
          originalEvent: e
        });

        if (!this.node.dispatchEvent(event)) {
          return false;
        }

        this.initialActive = false;
        this.openedByTouch = false;
        this.openedByMouseenter = false;

        if (base.utils.check.isFunction(this.options.resetOpen)) {
          this.options.resetOpen.call(this);
        }

        this.node.classList.remove(this.options.classActive);
        this.node.classList.add(this.options.classClicked);
      }
    }, {
      key: '_mouseenterListener',
      value: function _mouseenterListener() {
        var _this3 = this;

        return function (e) {
          if (!touchUsed) {
            _this3.openedByMouseenter = true;
            _this3._hover(e);
          }
        };
      }
    }, {
      key: '_mouseleaveListener',
      value: function _mouseleaveListener() {
        var _this4 = this;

        return function (e) {
          if (_this4.openedByMouseenter) {
            _this4._blur(e);
          }
        };
      }
    }, {
      key: '_clickListener',
      value: function _clickListener() {
        var _this5 = this;

        return function (e) {
          clicked = true;

          var isOpen = base.utils.check.isFunction(_this5.options.openCheck) && _this5.options.openCheck.call(_this5);

          if (_this5.node.getAttribute(ATTR_FORCE_PRIMARY_CLICK) !== null || (base.utils.check.isFunction(_this5.options.forcePrimaryClick) ? _this5.options.forcePrimaryClick.call(_this5) : _this5.options.forcePrimaryClick) || (_this5.node.classList.contains(_this5.options.classActive) || isOpen) && (!touchUsed || touchUsed && _this5.openedByTouch || _this5.initialActive || isOpen && !_this5.openedByTouch && !_this5.openedByMouseenter)) {
            _this5._primaryClick(e);
          } else {
            e.preventDefault();

            if (!_this5.openedByMouseenter) {
              // not already opened by mouseenter
              _this5._hover(e);
            }

            if (touchUsed) {
              _this5.openedByTouch = true;
              _this5.openedByMouseenter = false;
            }
          }
        };
      }
    }]);

    return TouchHover;
  }(base.features.Feature);

  /**
   * Default feature options.
   */
  TouchHover.defaultOptions = {
    classActive: '-active',
    classClicked: '-clicked',
    forcePrimaryClick: null,
    openCheck: null,
    resetOpen: null,
    resetOpenOnMouseBlur: true,
    resetOpenOnClickBlur: true,
    resetOpenOnOuterClickBlur: false,
    resetActiveOnMouseBlur: true,
    resetActiveOnClickBlur: true,
    resetActiveOnOuterClickBlur: true
  };

  exports.default = TouchHover;
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=touch-hover.js.map