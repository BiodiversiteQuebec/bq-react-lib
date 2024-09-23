import React__default, { useRef, useState, useEffect, createElement, useCallback, createContext } from 'react';
import _, { isArray } from 'underscore';
import styled, { ThemeProvider as ThemeProvider$1 } from 'styled-components';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled as styled$1, ThemeProvider, createTheme } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card$1 from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Select as Select$1, ListSubheader, TextField } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import TableChartIcon from '@mui/icons-material/TableChart';
import MapIcon from '@mui/icons-material/Map';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LanguageIcon from '@mui/icons-material/Language';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Tooltip from '@mui/material/Tooltip';
import analyze from 'rgbaster';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import Popper from '@mui/material/Popper';
import { debounce } from 'lodash-es';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Slider from '@mui/material/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faChevronDown, faChevronUp, faBars, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { Container as Container$1 } from 'react-bootstrap';
import 'react-bootstrap/Card';
import InfoIcon from '@mui/icons-material/Info';
import ForestIcon from '@mui/icons-material/Forest';

// see: https://github.com/storybookjs/storybook/issues/9556

/**
 * A custom Thing component. Neat!
 */

var Thing = function Thing(_ref) {
  var children = _ref.children;
  return React__default.createElement("div", {
    className: "mt-10 bg-yellow-100 p-5 rounded-md"
  }, children || "the snozzberries taste like snozzberries");
};

/**
 * create a position object with the provided values
 * @param locationClass
 * @param top
 * @param right
 * @param left
 * @param bottom
 */

var buildLocation = function buildLocation(locationClass, top, right, left, bottom) {
  if (top === void 0) {
    top = 0;
  }

  if (right === void 0) {
    right = 0;
  }

  if (left === void 0) {
    left = 0;
  }

  if (bottom === void 0) {
    bottom = 0;
  }

  if (locationClass === 'bottom-left') return {
    bottom: bottom + "px",
    left: left + "px"
  };
  if (locationClass === 'bottom-right') return {
    right: right + "px",
    bottom: bottom + "px"
  };
  if (locationClass === 'top-right') return {
    right: right + "px",
    top: top + "px"
  };
  if (locationClass === 'top-left') return {
    left: left + "px",
    top: top + "px"
  };
  return {};
};

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var colors = {
  green: '#538887',
  darkgreen: '#2e483e',
  white: '#fff',
  mediumgray: '#9b9b9b',
  darkgray: '#424242',
  bqdarkgreen: '#2e483e',
  bqorange: '#e0b658',
  bqpalegray: '#afafaf',
  bqdarkorange: '#a6612d',
  bqcyan: '#7bb5b1',
  bqlightgray: '#afafaf',
  bqlightbeige: '#f1dca9',
  bqturquoise: '#7bb58e',
  bqcream: '#f1dca9',
  bqtopaz: '#3e8986',
  bqlightorange: '#efb850',
  bqlightblue: '#81c8c5',
  bqlightgreen: '#58776e'
};
var Container = /*#__PURE__*/styled.div(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  align-items: center;\n  justify-content: center;\n"])));
var AppContainer = /*#__PURE__*/styled.div(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100vw;\n  height: 100vh;\n  padding: 0;\n  position: relative;\n  overflow: hidden;\n\n  ::-webkit-scrollbar {\n    width: 0; /* Remove scrollbar space */\n    background: transparent; /* Optional: just make scrollbar invisible */\n  }\n"])));
var LeftContent = /*#__PURE__*/styled(Container)(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  align-items: center;\n  height: 100%;\n  left: 0;\n  top: 0;\n  padding: 0;\n  background-color: transparent;\n  position: absolute;\n  width: 400px;\n"])));
var RightContent = /*#__PURE__*/styled(LeftContent)(_templateObject4 || (_templateObject4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n\n  & .leaflet-container {\n    height: 100vh;\n  }\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"])));
var BottomNavBarContainer = /*#__PURE__*/styled(Container)(_templateObject5 || (_templateObject5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100%;\n  position: absolute;\n  height: 50px;\n  z-index: 999;\n  bottom: 0;\n  left: 0;\n  display: none;\n\n  @media (max-width: 768px) {\n    display: inline;\n  }\n"])));

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1;
var LegendContainer = /*#__PURE__*/styled.div(_templateObject$1 || (_templateObject$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: inline-block;\n  margin: 2.5em 2em;\n  padding: 1.5em;\n  border-radius: 10px;\n  justify-content: left;\n  line-height: 18px;\n  color: #555;\n  z-index: 1000;\n  font: 12px/1.5 Helvetica Neue, Arial, Helvetica, sans-serif;\n  font-size: 12px;\n  background: ", ";\n"])), colors.darkgray);
var LegendItemContainer = /*#__PURE__*/styled.div(_templateObject2$1 || (_templateObject2$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: left;\n  background: transparent;\n  gap: 0.5em;\n"])));
var LegendItemColorBox = /*#__PURE__*/styled.div(_templateObject3$1 || (_templateObject3$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  min-width: 20px;\n  min-height: 20px;\n"])));
var LegendItemText = /*#__PURE__*/styled.div(_templateObject4$1 || (_templateObject4$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  flex-grow: 1;\n  text-align: center;\n  white-space: nowrap;\n  font-size: 1em;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n"])));

function LegendItem(props) {
  var _props$color = props.color,
      color = _props$color === void 0 ? 'red' : _props$color,
      _props$text = props.text,
      text = _props$text === void 0 ? '' : _props$text;
  return React__default.createElement(LegendItemContainer, null, React__default.createElement(LegendItemColorBox, {
    style: {
      background: color
    }
  }), React__default.createElement(LegendItemText, null, React__default.createElement("span", null, text), ' '));
}

var Legend = function Legend(props) {
  var _props$id2 = props.id,
      id = _props$id2 === void 0 ? 0 : _props$id2,
      _props$items = props.items,
      items = _props$items === void 0 ? [] : _props$items,
      absolute = props.absolute,
      _props$location = props.location,
      location = _props$location === void 0 ? '' : _props$location,
      _props$top = props.top,
      top = _props$top === void 0 ? 0 : _props$top,
      _props$bottom = props.bottom,
      bottom = _props$bottom === void 0 ? 0 : _props$bottom,
      _props$left = props.left,
      left = _props$left === void 0 ? 0 : _props$left,
      _props$right = props.right,
      right = _props$right === void 0 ? 0 : _props$right,
      _props$scale = props.scale,
      scale = _props$scale === void 0 ? '' : _props$scale;
  var myId = useRef(1);
  var scaleRef = useRef(scale);
  var isAnimating = useRef(false);
  var customclass = '';

  if (!isAnimating.current) {
    if (myId.current !== id || scaleRef.current !== scale) {
      isAnimating.current = true;
      myId.current = id;
      scaleRef.current = scale;
      customclass += (absolute ? 'absolute ' : '') + " ";
      customclass += location + " legend-amin ";
      setTimeout(function () {
        isAnimating.current = false;
      }, 1000);
    } else {
      customclass += (absolute ? 'absolute' : '') + " ";
      customclass += location + " ";
    }
  } else {
    customclass += (absolute ? 'absolute ' : '') + " ";
    customclass += location + " legend-amin ";
  }

  var style = buildLocation(location, top, right, left, bottom);
  return React__default.createElement(LegendContainer, {
    className: "" + customclass,
    style: style
  }, items.map(function (item) {
    return React__default.createElement(LegendItem, {
      id: id,
      key: _.uniqueId(JSON.stringify({
        n: Math.random(),
        m: Date.now()
      })),
      color: item.color,
      text: item.text
    });
  }));
};

/**
 *
 * @param props
 * @returns
 */

var BQDrawer = function BQDrawer(props) {
  var tabs = props.tabs,
      drawerContent = props.drawerContent,
      setDrawerOpen = props.setDrawerOpen,
      drawerOpen = props.drawerOpen,
      setSelectedTab = props.setSelectedTab,
      selectedTab = props.selectedTab;
  var drawerWidth = '30vw';
  /**
   *
   */

  var handleDrawerOpenClose = function handleDrawerOpenClose() {
    setDrawerOpen(!drawerOpen);
  };
  /**
   *
   * @param event
   * @param newValue
   */


  var handleChange = function handleChange(event, newValue) {
    if (newValue !== 0) {
      setSelectedTab(newValue);
    }

    if (!drawerOpen) {
      setDrawerOpen(true);
    }
  };

  var BQTab = styled$1(Tab)({
    color: colors.bqlightgray,
    fontSize: '1em',
    textTransform: 'none',
    fontFamily: 'Lato',
    backgroundColor: 'white',
    '&:hover': {
      color: colors.darkgray,
      opacity: 1
    },
    '&.Mui-selected': {
      color: colors.bqdarkgreen
    }
  });
  /**
   *
   */

  var forceDrawerOpen = function forceDrawerOpen() {
    setDrawerOpen(true);
  };

  var allTabs = tabs.map(function (tab, index) {
    return React__default.createElement(BQTab, {
      key: tab.index,
      icon: tab.icon,
      label: tab.title,
      className: tab.title,
      onClick: forceDrawerOpen,
      sx: {
        boxShadow: '0px 3px 5px #aaa6'
      }
    });
  });
  return React__default.createElement("div", null, React__default.createElement(React__default.Fragment, {
    key: "right"
  }, React__default.createElement(Tabs, {
    value: selectedTab,
    onChange: handleChange,
    "aria-label": "icon label tabs example",
    orientation: "vertical",
    sx: _extends({
      position: 'fixed',
      zIndex: 999,
      top: {
        sm: '35vh',
        xs: '50px'
      },
      backgroundColor: 'white',
      height: 'auto',
      width: '100px'
    }, drawerOpen && {
      right: {
        sm: '30vw',
        xs: 'calc(100vw-120px)'
      },
      height: {
        sm: 'auto',
        xs: '100%'
      },
      backgroundColor: {
        sm: 'white',
        xs: 'rgba(0,0,0,0.7)'
      }
    }, !drawerOpen && {
      right: '0vw'
    })
  }, drawerOpen ? React__default.createElement(BQTab, {
    icon: React__default.createElement(ChevronRightIcon, null),
    onClick: handleDrawerOpenClose,
    sx: {
      boxShadow: '0px 3px 5px #aaa6'
    }
  }) : React__default.createElement(BQTab, {
    icon: React__default.createElement(ChevronLeftIcon, null),
    onClick: handleDrawerOpenClose,
    sx: {
      boxShadow: '0px 3px 5px #aaa6'
    }
  }), allTabs), React__default.createElement(Drawer, {
    anchor: "right",
    open: drawerOpen,
    variant: "persistent",
    ModalProps: {
      keepMounted: true
    },
    sx: {
      width: {
        sm: drawerWidth,
        xs: 'calc(100vw - 100px)'
      },
      flexShrink: 200,
      overflow: 'show',
      '& .MuiDrawer-paper': {
        width: {
          sm: drawerWidth,
          xs: 'calc(100vw - 100px)'
        },
        top: '50px',
        zIndex: 800,
        boxShadow: '-2px 3px 4px #dbdbdb'
      }
    }
  }, drawerContent !== null, " ", drawerContent)));
};

function BQBreadcrumbs(props) {
  var hier = props.props.hier; //const StyledLink = styled(Link);

  var _useState = useState([]),
      crumbs = _useState[0],
      setCrumbs = _useState[1];

  useEffect(function () {
    var bc = hier.map(function (h) {
      return React__default.createElement(Link, {
        color: "inherit",
        to: h.href
      }, h.name);
    });
    setCrumbs(bc);
  }, [hier]);
  return React__default.createElement(Breadcrumbs, {
    "aria-label": "breadcrumb"
  }, React__default.createElement(Link, {
    to: "/"
  }, React__default.createElement(HomeIcon, {
    sx: {
      fontSize: '1em'
    }
  })), crumbs);
}

var _templateObject$2;
function BQDrawerMenu(props) {
  var setBQDrawerMenuSelected = props.setBQDrawerMenuSelected,
      BQDrawerMenuSelected = props.BQDrawerMenuSelected,
      BQDrawerMenuOptions = props.BQDrawerMenuOptions;

  var handleChange = function handleChange(event) {
    setBQDrawerMenuSelected(event.target.value);
  };

  var Items = BQDrawerMenuOptions.map(function (opt) {
    return createElement(MenuItem, {
      value: opt.value
    }, opt.label);
  });
  var BQSelect = styled(InputBase)(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n    background: #ececec;\n    padding: 5px 18px;\n    width: 60%;\n    margin: auto;\n    border-radius: 5px;\n    & .MuiInputBase-input {\n      border-radius: 4;\n      color: 'black';\n      position: 'relative';\n      padding: '10px 26px 10px 22px';\n      font-size: 0.8em;\n      font-family: 'Lato';\n    }\n  "])));
  return createElement(FormControl, {
    sx: {
      m: 1,
      minWidth: 120
    },
    size: "small"
  }, createElement(Select, {
    labelId: "select-small",
    id: "select-small",
    value: BQDrawerMenuSelected,
    onChange: handleChange,
    input: createElement(BQSelect, null)
  }, Items));
}

var BQModal = function BQModal(props) {
  var modalContent = props.modalContent,
      modalWidth = props.modalWidth;

  var _useState = useState(React__default.createElement(React__default.Fragment, null));

  var _React$useState = React__default.useState(false),
      open = _React$useState[0],
      setOpen = _React$useState[1];

  var handleClose = function handleClose() {
    return setOpen(false);
  };

  var showModal = function showModal() {
    setOpen(true);
  };

  return React__default.createElement(Typography, {
    style: {
      marginLeft: 'auto',
      padding: '4px'
    }
  }, React__default.createElement(SettingsOverscanIcon, {
    onClick: showModal,
    sx: {
      cursor: 'pointer',
      color: colors.mediumgray
    }
  }), React__default.createElement(Modal, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description",
    sx: {
      width: modalWidth,
      height: '90vh',
      margin: 'auto'
    }
  }, modalContent));
};

function BQNumberCard(props) {
  var iconInCard = props.iconInCard,
      numberInCard = props.numberInCard,
      textInCard = props.textInCard;

  var _useState = useState(0),
      number = _useState[0],
      setNumber = _useState[1];

  var _useState2 = useState(''),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = useState(React__default.createElement(React__default.Fragment, null)),
      icon = _useState3[0],
      setIcon = _useState3[1];

  useEffect(function () {
    setIcon(iconInCard);
    setText(textInCard);
    setNumber(numberInCard);
  }, [iconInCard, numberInCard, textInCard]);
  return React__default.createElement(Card$1, {
    sx: {
      display: 'flex',
      width: '230px',
      margin: '10px'
    }
  }, React__default.createElement(Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React__default.createElement(CardContent, {
    sx: {
      flex: '1 0 auto',
      width: 140,
      paddingBottom: '0px'
    }
  }, React__default.createElement(Typography, {
    component: "div",
    variant: "h5"
  }, number), React__default.createElement(Typography, {
    variant: "subtitle1",
    color: "text.secondary",
    component: "div",
    sx: {
      fontSize: '0.9em'
    }
  }, text))), React__default.createElement(CardMedia, {
    sx: {
      width: 80,
      textAlign: 'center'
    }
  }, icon));
}

function BQPhotoCard(props) {
  var photo = props.photo,
      mainText = props.mainText,
      subText = props.subText;
  /*const [photo, setPhoto] = useState("");
  const [mainText, setMainText] = useState("");
  const [subText, setSubtext] = useState("");
     useEffect(() => {
    setPhoto(photo);
    setMainText(mainText);
    setSubtext(subText);
  }, [photo, mainText, subText]);
  */

  return React__default.createElement(Card$1, {
    elevation: 0,
    sx: {
      display: 'flex',
      width: '220px',
      margin: '10px',
      background: 'transparent'
    }
  }, React__default.createElement(Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React__default.createElement(CardMedia, {
    sx: {
      width: 180,
      height: 180,
      textAlign: 'center',
      borderRadius: 100,
      border: '0px'
    },
    image: photo
  }), React__default.createElement(CardContent, {
    sx: {
      flex: '1 0 auto',
      width: 180,
      paddingBottom: '0px'
    }
  }, React__default.createElement(Typography, {
    component: "div",
    variant: "subtitle1"
  }, mainText), React__default.createElement(Typography, {
    variant: "body1",
    color: "text.secondary",
    component: "div",
    sx: {
      fontSize: '0.9em'
    }
  }, subText))));
}

var _templateObject$3, _templateObject2$2;
var MainContainer = /*#__PURE__*/styled.div(_templateObject$3 || (_templateObject$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 15px;\n"])));
var Title = /*#__PURE__*/styled.div(_templateObject2$2 || (_templateObject2$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100%;\n  padding: 0.5em 1em;\n  font-weight: bold;\n  font-size: 1.3em;\n  font-family: Lato;\n  color: ", ";\n"])), colors.darkgray);

var ColeoAnalysisAll = function ColeoAnalysisAll(props) {
  var graphicTitle = props.graphicTitle,
      graphicUrl = props.graphicUrl,
      pageTitle = props.pageTitle,
      styles = props.styles;
  var _styles$height = styles.height,
      height = _styles$height === void 0 ? 500 : _styles$height,
      _styles$frameBorder = styles.frameBorder,
      frameBorder = _styles$frameBorder === void 0 ? 0 : _styles$frameBorder;
  return React__default.createElement(MainContainer, null, React__default.createElement(Title, null, pageTitle, "."), React__default.createElement("iframe", {
    title: graphicTitle,
    src: graphicUrl,
    height: height,
    frameBorder: frameBorder
  }));
};

var _templateObject2$3, _templateObject3$2;
var CSelect = /*#__PURE__*/styled(Select$1)(_templateObject2$3 || (_templateObject2$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  & .MuiOutlinedInput-root,\n  [class*=\"MuiInputBase-input-MuiOutlinedInput-input\"] {\n    padding: 8px;\n    border-color: red;\n  }\n\n  & legend {\n    display: none;\n  }\n"])));
var CListSubheader = /*#__PURE__*/styled(ListSubheader)(_templateObject3$2 || (_templateObject3$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  &&& {\n    box-sizing: border-box;\n    line-height: 48px;\n    list-style: none;\n    color: rgba(0, 0, 0, 1);\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-weight: 500;\n    font-size: 0.875rem;\n    padding-left: 16px;\n    padding-right: 16px;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    background-color: #fff;\n  }\n"])));

var _templateObject$4, _templateObject2$4, _templateObject3$3;
var TaxaItemContainer = /*#__PURE__*/styled(Container)(_templateObject$4 || (_templateObject$4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n"])));
var TaxaItemSubTitle = /*#__PURE__*/styled(Container)(_templateObject2$4 || (_templateObject2$4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100%;\n  color: ", ";\n  font-size: 8pt;\n  align-items: flex-start;\n"])), colors.darkgreen);
var TaxaItemTitle = /*#__PURE__*/styled(TaxaItemSubTitle)(_templateObject3$3 || (_templateObject3$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100%;\n  font-weight: bold;\n  color: ", ";\n  font-size: 12px;\n"])), colors.darkgreen);

var TaxaMenuItem = function TaxaMenuItem(_ref) {
  var value = _ref.value,
      vernacular_fr = _ref.vernacular_fr;
  return React__default.createElement(TaxaItemContainer, null, React__default.createElement(TaxaItemTitle, null, "" + (vernacular_fr || 'none')), React__default.createElement(TaxaItemSubTitle, null, value));
};

/**
 *
 * @param props
 * @returns
 */

var GroupedSelect = function GroupedSelect(props) {
  var _props$elementList = props.elementList,
      elementList = _props$elementList === void 0 ? [] : _props$elementList,
      onValueChange = props.onValueChange,
      selectorId = props.selectorId;

  var _useState = useState(''),
      value = _useState[0],
      setValue = _useState[1];

  var handleChange = function handleChange(event) {
    setValue(event.target.value);
    onValueChange({
      selectorId: selectorId,
      value: event.target.value
    });
  };

  React__default.useEffect(function () {
    setValue(elementList.length > 0 ? elementList[1].option : '');
  }, [elementList]);
  var group = '';
  return React__default.createElement("div", {
    className: "selector38px",
    style: {
      width: '100%'
    }
  }, React__default.createElement(FormControl, {
    sx: {
      width: '100%'
    }
  }, React__default.createElement(CSelect, {
    displayEmpty: true,
    value: value,
    onChange: handleChange,
    "native": false,
    renderValue: function renderValue(selected) {
      return selected;
    }
  }, elementList.map(function (element) {
    if (element.group_fr !== group) {
      group = element.group_fr;
      return React__default.createElement(CListSubheader, {
        key: _.uniqueId(JSON.stringify(element))
      }, element.group_fr);
    }

    return React__default.createElement(MenuItem, {
      key: _.uniqueId(JSON.stringify(element)),
      value: element.option
    }, React__default.createElement(TaxaMenuItem, Object.assign({}, element)));
  }))));
};

/**
 *
 * @param props
 */

var Selector = function Selector(props) {
  var _props$onValueChange = props.onValueChange,
      onValueChange = _props$onValueChange === void 0 ? function (value) {
    return 0;
  } : _props$onValueChange,
      selectorId = props.selectorId,
      _props$selectorList = props.selectorList,
      selectorList = _props$selectorList === void 0 ? [] : _props$selectorList,
      _props$t = props.t,
      t = _props$t === void 0 ? function (text) {
    return text;
  } : _props$t,
      value = props.value,
      _props$onFocusout = props.onFocusout,
      onFocusout = _props$onFocusout === void 0 ? false : _props$onFocusout;

  var _useState = useState(onFocusout),
      lossFocus = _useState[0],
      setLossFocus = _useState[1];

  var _useState2 = useState([]),
      itemList = _useState2[0],
      setItemList = _useState2[1];
  /**
   *
   * @param event
   */


  var onChange = function onChange(event) {
    selectorList.filter(function (item, index) {
      return item.option === event.target.value;
    });
    onValueChange({
      selectorId: selectorId,
      value: event.target.value
    });
  };

  var onClose = function onClose(event) {
    if (event.target.dataset.value === value && lossFocus) {
      setLossFocus(false);
      onValueChange({
        selectorId: selectorId,
        value: event.target.dataset.value
      });
    }
  };

  useEffect(function () {
    if (selectorList.length > 0) {
      var iL = selectorList.map(function (element) {
        return React__default.createElement(MenuItem, {
          key: _.uniqueId(JSON.stringify(element.key)),
          value: element.value
        }, t(element.option));
      });
      setItemList(iL);
    } else {
      setItemList([]);
    }
  }, [selectorList]);
  useEffect(function () {
    setLossFocus(onFocusout);
  }, [onFocusout]);
  return React__default.createElement("div", {
    className: "selector38px",
    id: selectorId,
    style: {
      width: '100%'
    }
  }, React__default.createElement(FormControl, {
    sx: {
      width: '100%'
    }
  }, React__default.createElement(CSelect, {
    displayEmpty: true,
    value: value,
    onChange: onChange,
    onClose: onClose
  }, itemList)));
};

var SpeedDialBtn = function SpeedDialBtn(props) {
  var _props$location = props.location,
      location = _props$location === void 0 ? '' : _props$location,
      _props$top = props.top,
      top = _props$top === void 0 ? 0 : _props$top,
      _props$bottom = props.bottom,
      bottom = _props$bottom === void 0 ? 0 : _props$bottom,
      _props$left = props.left,
      left = _props$left === void 0 ? 0 : _props$left,
      _props$right = props.right,
      right = _props$right === void 0 ? 0 : _props$right,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'left' : _props$direction,
      _props$onClickSwitch = props.onClickSwitch,
      onClickSwitch = _props$onClickSwitch === void 0 ? function (text) {
    return text;
  } : _props$onClickSwitch,
      _props$t = props.t,
      t = _props$t === void 0 ? function (text) {
    return text;
  } : _props$t,
      language = props.language,
      changeLanguage = props.changeLanguage;
  var actions = [{
    icon: React__default.createElement(MapIcon, null),
    name: t('Carte'),
    key: 'map'
  }, {
    icon: React__default.createElement(TableChartIcon, null),
    name: t('Jeux de données'),
    key: 'table'
  }, {
    icon: React__default.createElement(LanguageIcon, null),
    name: language,
    key: 'language'
  }];
  /**
   *
   * @param locationClass
   * @returns
   */

  var getStyle = function getStyle(locationClass) {
    if (locationClass === 'bottom-left') return {
      position: 'absolute',
      bottom: bottom,
      left: left
    };
    if (locationClass === 'bottom-right') return {
      position: 'absolute',
      right: right,
      bottom: bottom
    };
    if (locationClass === 'top-right') return {
      position: 'absolute',
      right: right,
      top: top
    };
    if (locationClass === 'top-left') return {
      position: 'absolute',
      left: left,
      top: top
    };
    return {};
  };

  return React__default.createElement(SpeedDial, {
    ariaLabel: "SpeedDial playground example",
    icon: React__default.createElement(SpeedDialIcon, null),
    direction: direction,
    sx: getStyle(location)
  }, actions.map(function (action) {
    return React__default.createElement(SpeedDialAction, {
      key: action.key,
      icon: action.icon,
      tooltipTitle: action.name,
      onClick: action.key !== 'language' ? function () {
        onClickSwitch(action.key);
      } : function () {
        changeLanguage(language === 'fr' ? 'en' : 'fr');
      }
    });
  }));
};

var _templateObject$5, _templateObject2$5, _templateObject3$4, _templateObject4$2, _templateObject5$1, _templateObject6, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;

var ImageSlideCardText = /*#__PURE__*/styled.div(_templateObject$5 || (_templateObject$5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-size: 8pt;\n  color: ", ";\n"])), colors.darkgreen); // ImageBox styles

var ImageBoxContainer = /*#__PURE__*/styled.div(_templateObject2$5 || (_templateObject2$5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100%;\n"])));
var NoImageBoxContainer = /*#__PURE__*/styled(ImageBoxContainer)(_templateObject3$4 || (_templateObject3$4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  min-height: 100px;\n  text-align: center;\n  align-items: center;\n  font-family: Brother-1816-Bold;\n  padding: 0.6em;\n  text-transform: uppercase;\n  font-weight: 800;\n  width: ", ";\n  height: ", ";\n"])), function (props) {
  return props.width;
}, function (props) {
  return props.height;
});
var Img = /*#__PURE__*/styled.img(_templateObject4$2 || (_templateObject4$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 8px;\n"]))); // ImageSlideCard styles

var ImageSlideCardContainer = /*#__PURE__*/styled(Card$1)(_templateObject5$1 || (_templateObject5$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 180px;\n"])));
var ImageSlideCardContainerRelative = /*#__PURE__*/styled.div(_templateObject6 || (_templateObject6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: relative;\n"])));
var ImageSlideCardDetailTop = /*#__PURE__*/styled.div(_templateObject8 || (_templateObject8 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  padding: 2px 0.5em;\n  margin-bottom: 5px;\n"])));
var ImageSlideCardDetailTopBottom = /*#__PURE__*/styled(ImageSlideCardDetailTop)(_templateObject9 || (_templateObject9 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  align-items: center;\n  margin-bottom: 0px;\n"])));
var ImageSlideCardTopData = /*#__PURE__*/styled(ImageSlideCardText)(_templateObject10 || (_templateObject10 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-weight: bold;\n  font-size: 10pt;\n"])));
var ImageSlideCardDetailContainer = /*#__PURE__*/styled(ImageSlideCardText)(_templateObject11 || (_templateObject11 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-size: 8pt;\n  border-left: 2px solid rgba(46, 72, 62, 0.4);\n  padding-left: 3px;\n  flex: 1;\n"])));
var ImageSlideCardDetailTopBold = /*#__PURE__*/styled(ImageSlideCardDetailTop)(_templateObject12 || (_templateObject12 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-weight: bold;\n"])));
var ImageSliderContainer = /*#__PURE__*/styled.div(_templateObject13 || (_templateObject13 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: flex;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n"])));
var ImageSlideCardControlLeft = /*#__PURE__*/styled.div(_templateObject14 || (_templateObject14 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: absolute;\n  border-radius: 50%;\n  top: 45%;\n  left: -5px;\n  color: black;\n  display: ", ";\n"])), function (props) {
  return props.hide ? 'none' : 'flex';
});
var ImageSlideCardControlRight = /*#__PURE__*/styled.div(_templateObject15 || (_templateObject15 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: absolute;\n  border-radius: 50%;\n  top: 45%;\n  right: -5px;\n  color: black;\n  display: ", ";\n"])), function (props) {
  return props.hide ? 'none' : 'flex';
});

var ImageBox = function ImageBox(props) {
  var image = props.image,
      width = props.width,
      height = props.height;
  return React__default.createElement(ImageBoxContainer, null, React__default.createElement(Img, {
    src: image.thumburl,
    alt: "speciesimage",
    style: {
      width: width,
      height: height
    }
  }));
};
var NoImageBox = function NoImageBox(props) {
  var text = "Pas d'Image";
  return React__default.createElement(NoImageBoxContainer, Object.assign({}, props), " ", text);
};

/**
 * @param param0.lgn
 * @param param0.vernacular
 * @returns component
 */

var ImageSlideCardDetail = function ImageSlideCardDetail(_ref) {
  var _ref$lgn = _ref.lgn,
      lgn = _ref$lgn === void 0 ? 'fr.' : _ref$lgn,
      _ref$vernacular = _ref.vernacular,
      vernacular = _ref$vernacular === void 0 ? '' : _ref$vernacular;
  return React__default.createElement(ImageSlideCardDetailContainer, null, React__default.createElement(ImageSlideCardDetailTopBold, null, vernacular), React__default.createElement("div", null, lgn));
};
/**
 *
 * @param props properties
 * @returns component
 */


var ImageSlideCard = function ImageSlideCard(props) {
  var image = props.image,
      card = props.card,
      _props$onSearch = props.onSearch,
      onSearch = _props$onSearch === void 0 ? function (scientificName) {
    return scientificName;
  } : _props$onSearch;

  var _useState = useState('rgba(128,128,128,0.3)'),
      color = _useState[0],
      setColor = _useState[1];

  var _useState2 = useState(false),
      open = _useState2[0],
      setOpen = _useState2[1];
  /**
   *@returns void
   */


  var handleOpen = function handleOpen() {
    return setOpen(true);
  };
  /**
   *@returns void
   */


  var handleClose = function handleClose() {
    return setOpen(false);
  };

  var imageData = {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/NorthernSawwhetOwl23.jpg/500px-NorthernSawwhetOwl23.jpg',
    ok: false
  };
  var aspectRatio = 0;
  var styleModel = {
    width: 0,
    height: 0
  };

  if (image) {
    aspectRatio = image.width / image.height;

    if (aspectRatio <= 1) {
      styleModel.width = "auto";
      styleModel.height = '80%';
    } else {
      styleModel.width = '80%';
      styleModel.height = "auto";
    }

    imageData.url = image.thumburl;
    imageData.ok = true;
  }
  /**
   *
   * @param text specie name
   * @returns name
   */


  var t = function t(text) {
    return text;
  };

  analyze(imageData.url, null).then(function (colors) {
    if (colors.length > 0) {
      setColor(colors[0].color);
    }
  });
  return React__default.createElement(ImageSlideCardContainer, null, React__default.createElement(ImageSlideCardContainerRelative, null, React__default.createElement(ImageSlideCardContainerRelative, null, image !== undefined ? React__default.createElement("div", {
    style: {
      backgroundColor: color
    }
  }, React__default.createElement("img", {
    className: "testimage",
    src: image.thumburl,
    alt: image.name
  })) : React__default.createElement(NoImageBox, {
    height: "100px"
  }), React__default.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '5px',
      right: '5px',
      width: '100%',
      height: '100%'
    }
  }, React__default.createElement(IconButton, {
    onClick: handleOpen,
    style: {
      width: '100%',
      height: '100%',
      background: 'transparent'
    }
  }), React__default.createElement(Modal, {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    open: open,
    onClose: handleClose,
    onClick: handleClose,
    closeAfterTransition: true,
    BackdropComponent: Backdrop,
    BackdropProps: {
      timeout: 500
    },
    style: {
      zIndex: 9999999999999
    }
  }, React__default.createElement(Fade, {
    "in": open
  }, React__default.createElement(Box, null, React__default.createElement("img", {
    className: "modal-image",
    src: image ? image.thumburl : '',
    alt: image ? image.name : 'none',
    style: styleModel
  })))))), React__default.createElement(ImageSlideCardDetailTop, null, React__default.createElement("div", {
    className: "card-info",
    style: {
      flex: 1
    }
  }, React__default.createElement(ImageSlideCardTopData, null, card.valid_scientific_name), React__default.createElement(ImageSlideCardText, null, card.obs + " obs.")), React__default.createElement(Tooltip, {
    title: t('Afficher sur la carte')
  }, React__default.createElement(IconButton, {
    sx: {
      width: 15,
      height: 15
    },
    onClick: function onClick() {
      return onSearch(card.scientificName);
    }
  }, React__default.createElement(SearchIcon, {
    sx: {
      fontSize: 15,
      color: ' #2e483e'
    }
  })))), React__default.createElement(ImageSlideCardDetailTopBottom, null, React__default.createElement(ImageSlideCardDetail, {
    lgn: "fr.",
    vernacular: "" + (card.vernacular_fr || 'none')
  }), React__default.createElement(ImageSlideCardDetail, {
    lgn: "en.",
    vernacular: "" + (card.vernacular_en || 'none')
  }))));
};

var missingUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/NorthernSawwhetOwl23.jpg/500px-NorthernSawwhetOwl23.jpg';
/**
 *
 * @param props
 */

var SlideImageView = function SlideImageView(props) {
  var onClick = props.onClick,
      onModalClose = props.onModalClose,
      styleModel = props.styleModel,
      url = props.url,
      alt = props.alt,
      _props$open = props.open,
      open = _props$open === void 0 ? false : _props$open;

  var _useState = useState('rgba(128,128,128,0.3)'),
      color = _useState[0],
      setColor = _useState[1];

  analyze(url != null ? url : missingUrl, null).then(function (colors) {
    if (colors.length > 0) {
      setColor(colors[0].color);
    }
  });
  return React__default.createElement(ImageSlideCardContainerRelative, null, url !== undefined ? React__default.createElement("div", {
    style: {
      backgroundColor: color
    }
  }, React__default.createElement("img", {
    className: "testimage",
    src: url,
    alt: alt
  })) : React__default.createElement(NoImageBox, {
    height: "100px"
  }), React__default.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '5px',
      right: '5px',
      width: '100%',
      height: '100%'
    }
  }, React__default.createElement(IconButton, {
    onClick: onClick,
    style: {
      width: '100%',
      height: '100%',
      background: 'transparent'
    }
  }), React__default.createElement(Modal, {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    open: open,
    onClose: onModalClose,
    onClick: onModalClose,
    closeAfterTransition: true,
    BackdropComponent: Backdrop,
    BackdropProps: {
      timeout: 500
    },
    style: {
      zIndex: 9999999999999
    }
  }, React__default.createElement(Fade, {
    "in": open
  }, React__default.createElement(Box, null, React__default.createElement("img", {
    className: "modal-image",
    src: url != null ? url : '',
    alt: alt != null ? alt : 'none',
    style: styleModel
  }))))));
};

/**
 *
 * @param root0
 * @param root0.subtitle
 * @param root0.title
 */

var ImageSlideCardDetail$1 = function ImageSlideCardDetail(_ref) {
  var _ref$subtitle = _ref.subtitle,
      subtitle = _ref$subtitle === void 0 ? "fr." : _ref$subtitle,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title;
  return React__default.createElement(ImageSlideCardDetailContainer, null, React__default.createElement(ImageSlideCardDetailTopBold, null, title), React__default.createElement("div", null, subtitle));
};

/**
 *
 * @param props
 */

var ImageSlideCardView = function ImageSlideCardView(props) {
  var card = props.card,
      image = props.image,
      searchBtn = props.searchBtn,
      activeModal = props.activeModal;

  var _useState = useState(false),
      open = _useState[0],
      setOpen = _useState[1];
  /**
   *@returns void
   */


  var handleOpen = function handleOpen() {
    return setOpen(true);
  };
  /**
   *@returns void
   */


  var handleClose = function handleClose() {
    return setOpen(false);
  };

  var aspectRatio = 0;
  var styleModel = {
    width: 0,
    height: 0
  };

  if (image) {
    aspectRatio = image.width / image.height;

    if (aspectRatio <= 1) {
      styleModel.width = "auto";
      styleModel.height = '80%';
    } else {
      styleModel.width = '80%';
      styleModel.height = "auto";
    }
  }

  return React__default.createElement(ImageSlideCardContainer, null, React__default.createElement(ImageSlideCardContainerRelative, null, React__default.createElement(ImageSlideCardContainerRelative, null, React__default.createElement(SlideImageView, {
    url: image ? image.thumburl : undefined,
    alt: image ? image.name : '',
    onClick: handleOpen,
    onModalClose: handleClose,
    onModalOpen: handleClose,
    open: open && activeModal,
    styleModel: styleModel
  })), React__default.createElement(ImageSlideCardDetailTop, null, React__default.createElement("div", {
    className: "card-info",
    style: {
      flex: 1
    }
  }, React__default.createElement(ImageSlideCardTopData, null, card == null ? void 0 : card.title), React__default.createElement(ImageSlideCardText, null, card == null ? void 0 : card.subtitle)), searchBtn), React__default.createElement(ImageSlideCardDetailTopBottom, null, React__default.createElement(ImageSlideCardDetail$1, {
    subtitle: "fr.",
    title: "" + ((card == null ? void 0 : card.leftText) || 'none')
  }), React__default.createElement(ImageSlideCardDetail$1, {
    subtitle: "en.",
    title: "" + ((card == null ? void 0 : card.rightText) || 'none')
  }))));
};

/**
 * Next and Before control
 * @param {*} param0
 * @returns
 */

var Control = function Control(props) {
  var hide = props.hide,
      _onClick = props.onClick,
      icon = props.icon,
      _props$sence = props.sence,
      sence = _props$sence === void 0 ? '' : _props$sence;
  return sence === 'before-arrow' ? React__default.createElement(ImageSlideCardControlLeft, {
    hide: hide,
    onClick: function onClick() {
      return _onClick();
    }
  }, icon) : React__default.createElement(ImageSlideCardControlRight, {
    hide: hide,
    onClick: function onClick() {
      return _onClick();
    }
  }, icon);
};
/**
 *
 * @param {*} param0
 * @returns
 */

var ImageFetcherSlider = function ImageFetcherSlider(props) {
  var image = props.image,
      onNext = props.onNext,
      onBack = props.onBack,
      hide = props.hide,
      card = props.card,
      searchBtn = props.searchBtn,
      activeModal = props.activeModal;
  return React__default.createElement(ImageSliderContainer, {
    style: {
      background: 'green'
    }
  }, React__default.createElement("div", {
    style: {
      padding: '5px 25px',
      height: '100%'
    }
  }, React__default.createElement(ImageSlideCardView, {
    image: image,
    card: card,
    searchBtn: searchBtn,
    activeModal: activeModal
  })), React__default.createElement(Control, {
    sence: "next-arrow",
    hide: hide,
    onClick: function onClick() {
      return onNext();
    },
    icon: React__default.createElement(NavigateNextIcon, null)
  }), React__default.createElement(Control, {
    sence: "before-arrow",
    hide: hide,
    onClick: function onClick() {
      return onBack();
    },
    icon: React__default.createElement(NavigateBeforeIcon, null)
  }));
};

var SlideScreen = function SlideScreen(props) {
  var children = props.children,
      _props$animate = props.animate,
      animate = _props$animate === void 0 ? false : _props$animate,
      _props$showMenuFn = props.showMenuFn,
      showMenuFn = _props$showMenuFn === void 0 ? function () {
    return '';
  } : _props$showMenuFn,
      _props$visibility = props.visibility,
      visibility = _props$visibility === void 0 ? true : _props$visibility,
      _props$enableAnimatio = props.enableAnimation,
      enableAnimation = _props$enableAnimatio === void 0 ? false : _props$enableAnimatio;

  var clicked = function clicked(event) {
    event.stopPropagation();
    if (enableAnimation) showMenuFn();
  };

  return React__default.createElement("div", {
    className: "sidebar-container-dashboard " + (visibility ? '' : 'display-none'),
    onClick: clicked
  }, React__default.createElement("div", {
    className: "sidebar-container-w " + (animate ? 'animate-sidebar' : 'close-menu')
  }, children));
};

var _templateObject$6, _templateObject2$6, _templateObject3$5, _templateObject4$3, _templateObject5$2, _templateObject6$1, _templateObject7, _templateObject8$1;
var CardContainer = /*#__PURE__*/styled(Paper)(_templateObject$6 || (_templateObject$6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100%;\n  padding: 10px 0;\n"])));
var TextSmall = /*#__PURE__*/styled.div(_templateObject2$6 || (_templateObject2$6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-size: 8pt;\n  color: ", ";\n"])), colors.darkgreen);
var TextMedium = /*#__PURE__*/styled(TextSmall)(_templateObject3$5 || (_templateObject3$5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-size: 14pt;\n"])));
var BigMedium = /*#__PURE__*/styled(TextSmall)(_templateObject4$3 || (_templateObject4$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-size: 16pt;\n"])));
var CardTop = /*#__PURE__*/styled(BigMedium)(_templateObject5$2 || (_templateObject5$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: flex;\n  padding: 2px 0.3em;\n"])));
var CardBottom = /*#__PURE__*/styled.div(_templateObject6$1 || (_templateObject6$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  padding: 0.5em;\n"])));
var CardDetail = /*#__PURE__*/styled.div(_templateObject7 || (_templateObject7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  border-left: 2px solid rgba(46, 72, 62, 0.4);\n  padding-left: 3px;\n  flex: 1;\n"])));
var CardDetailTop = /*#__PURE__*/styled(TextMedium)(_templateObject8$1 || (_templateObject8$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-weight: bold;\n"])));

var Detail = function Detail(_ref) {
  var _ref$bigText = _ref.bigText,
      bigText = _ref$bigText === void 0 ? 'fr.' : _ref$bigText,
      _ref$smallText = _ref.smallText,
      smallText = _ref$smallText === void 0 ? '' : _ref$smallText;
  return React__default.createElement(CardDetail, null, React__default.createElement(CardDetailTop, null, bigText), React__default.createElement(TextSmall, null, smallText));
};

var Summary = function Summary(props) {
  var data = props.data,
      translator = props.translator;
  var _data$group = data.group,
      group = _data$group === void 0 ? 'Toutes les espèces' : _data$group,
      _data$currentgroupobs = data.currentgroupobstotal,
      currentgroupobstotal = _data$currentgroupobs === void 0 ? 0 : _data$currentgroupobs,
      _data$currentgroupspe = data.currentgroupspeciestotal,
      currentgroupspeciestotal = _data$currentgroupspe === void 0 ? 0 : _data$currentgroupspe;
  return React__default.createElement(CardContainer, {
    elevation: 3
  }, React__default.createElement(CardTop, null, " ", translator(group)), React__default.createElement(CardBottom, null, React__default.createElement(Detail, {
    bigText: currentgroupobstotal,
    smallText: translator('Observations')
  }), React__default.createElement(Detail, {
    bigText: currentgroupspeciestotal,
    smallText: translator('Espèces')
  })));
};

var _templateObject$7;
var CTextField = /*#__PURE__*/styled(TextField)(_templateObject$7 || (_templateObject$7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  & .MuiOutlinedInput-input {\n    padding: 10px 14px;\n  }\n  & legend {\n    display: none;\n  }\n"])));

var CustomePopper = function CustomePopper(props) {
  return React__default.createElement(Popper, Object.assign({}, props, {
    style: {
      zIndex: 9999999,
      width: '234px'
    },
    placement: "bottom"
  }));
};

var initOptions = [];
var Asynchronous = function Asynchronous(props) {
  // eslint-disable-next-line react/destructuring-assignment
  var dataSource = props.dataProvider;
  var _onChange = props.onChange,
      _props$id = props.id,
      id = _props$id === void 0 ? 'asynchronous-demo' : _props$id;

  var _useState = useState(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = useState(initOptions),
      options = _useState2[0],
      setOptions = _useState2[1];

  var _useState3 = useState(open && options.length === 0),
      loading = _useState3[0],
      setLoading = _useState3[1];

  useEffect(function () {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  var deboundingFn = useCallback(debounce(function (newValue) {
    setLoading(true);
    dataSource.getData(newValue).then(function (data) {
      setOptions(data);
      setLoading(false);
    });
  }, 300), []);
  /**
   * @param event event
   * @param newInputValue new value
   */

  var onInputChange = function onInputChange(event, newInputValue) {
    deboundingFn(newInputValue);
  };

  return React__default.createElement(Autocomplete, {
    className: id,
    "data-testid": "autocomplete-search-custom",
    PopperComponent: CustomePopper,
    sx: {
      width: '100%'
    },
    open: open,
    onOpen: function onOpen() {
      setOpen(true);
    },
    onClose: function onClose() {
      setOpen(false);
    },
    onInputChange: onInputChange,
    onChange: function onChange(event, newValue) {
      _onChange(newValue == null ? void 0 : newValue.title);
    },
    getOptionLabel: function getOptionLabel(option) {
      return option.title;
    },
    options: options,
    loading: loading,
    renderInput: function renderInput(params) {
      return React__default.createElement(CTextField, Object.assign({}, params, {
        InputProps: _extends({}, params.InputProps, {
          endAdornment: React__default.createElement(React__default.Fragment, null, loading ? React__default.createElement(CircularProgress, {
            color: "inherit",
            size: 20
          }) : null, params.InputProps.endAdornment)
        })
      }));
    }
  });
};

/* eslint-disable @typescript-eslint/no-empty-function */
var theme = /*#__PURE__*/createTheme({
  components: {
    // Name of the component
    MuiAccordion: {},
    MuiAccordionDetails: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: 'transparent',
          padding: '0px 16px 8px '
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: 'transparent',
          padding: '0px 16px 0px',
          maxHeight: '42px',
          minHeight: '0px'
        }
      }
    }
  }
});
var CustomAccordion = function CustomAccordion(props) {
  var _props$handleChange = props.handleChange,
      handleChange = _props$handleChange === void 0 ? function () {} : _props$handleChange,
      _props$accordionSumma = props.accordionSummary,
      accordionSummary = _props$accordionSumma === void 0 ? '' : _props$accordionSumma,
      _props$expanded = props.expanded,
      expanded = _props$expanded === void 0 ? false : _props$expanded,
      expandIcon = props.expandIcon,
      _props$id = props.id,
      id = _props$id === void 0 ? '' : _props$id,
      children = props.children,
      hide = props.hide;

  var upChange = function upChange(panel) {
    handleChange(panel);
  };

  return React__default.createElement(ThemeProvider, {
    theme: theme
  }, React__default.createElement(Accordion, {
    disableGutters: true,
    expanded: expanded,
    onClick: function onClick() {
      return upChange(id);
    },
    style: {
      width: '100%',
      display: hide ? 'none' : ''
    }
  }, React__default.createElement(AccordionSummary, {
    "aria-controls": "panel1bh-content",
    expandIcon: expandIcon || ''
  }, React__default.createElement("label", {
    htmlFor: "group-select",
    style: {
      textAlign: 'center',
      width: '100%',
      color: colors.darkgreen
    },
    className: "text-primary-dark-green select-label"
  }, accordionSummary)), React__default.createElement(AccordionDetails, null, React__default.createElement("div", {
    className: "siderbar-dropdown text-primary-dark-green"
  }, children))));
};

/**
 *
 * @param props properties
 * @returns component
 */

var BottomNavBar = function BottomNavBar(props) {
  var _props$onValueChange = props.onValueChange,
      onValueChange = _props$onValueChange === void 0 ? function (newValue) {
    return 0;
  } : _props$onValueChange,
      _props$items = props.items,
      items = _props$items === void 0 ? [] : _props$items,
      _props$t = props.t,
      t = _props$t === void 0 ? function (text) {
    return text;
  } : _props$t;

  var _React$useState = React__default.useState(1),
      value = _React$useState[0],
      setValue = _React$useState[1];

  return React__default.createElement("div", {
    style: {
      width: '100%',
      zIndex: 0
    }
  }, React__default.createElement(BottomNavigation, {
    showLabels: true,
    value: value,
    onChange: function onChange(event, newValue) {
      setValue(newValue);
      onValueChange(newValue);
    }
  }, items.map(function (item) {
    return React__default.createElement(BottomNavigationAction, {
      label: t(item.label),
      icon: item.icon,
      key: _.uniqueId()
    });
  })));
};

var useBbox = function useBbox() {
  var ref = useRef();

  var _useState = useState({}),
      bbox = _useState[0],
      setBbox = _useState[1];

  var set = function set() {
    var bBox = {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0
    };

    if (ref && ref.current) {
      bBox = ref.current.getBoundingClientRect();
    }

    setBbox(bBox);
  };

  useEffect(function () {
    if (window) {
      set();
      window.addEventListener('resize', set);
      return function () {
        return window.removeEventListener('resize', set);
      };
    }

    return;
  }, []);
  useEffect(function () {
    set();
  }, [ref.current]);
  return [bbox, ref];
};

var valuetext = function valuetext(value) {
  return "" + value;
};
/**
 *
 * @param props
 */


var RangeSlider = function RangeSlider(props) {
  var _props$intervals = props.intervals,
      intervals = _props$intervals === void 0 ? [0, 10] : _props$intervals,
      _props$histogramNotif = props.histogramNotifier,
      histogramNotifier = _props$histogramNotif === void 0 ? function (val) {
    return val;
  } : _props$histogramNotif,
      _props$slideValue = props.slideValue,
      slideValue = _props$slideValue === void 0 ? function (val) {
    return val;
  } : _props$slideValue;

  var _useState = useState([0, 10]),
      value = _useState[0],
      setValue = _useState[1];

  var min = intervals[0];
  var max = intervals[1];
  useEffect(function () {
    setValue(intervals);
  }, []);

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
    slideValue(newValue);
  };

  var notifyChange = function notifyChange(event, newValue) {
    histogramNotifier(newValue);
  };

  return React__default.createElement(Box, {
    sx: {
      width: '100%',
      valueLabel: 'blue'
    }
  }, React__default.createElement(Slider, {
    getAriaLabel: function getAriaLabel() {
      return '';
    },
    value: value,
    onChangeCommitted: notifyChange,
    onChange: handleChange,
    getAriaValueText: valuetext,
    max: max,
    min: min,
    step: 1,
    valueLabelDisplay: "on"
  }));
};
/**
 * Notice:
 * - sliderValueChanged: all external components wanting to be notified after a interval value changes need to be passed in
  this list
 * @param {*} props
 * @returns
 */


var Histogram = function Histogram(props) {
  var absolute = props.absolute,
      _props$location = props.location,
      location = _props$location === void 0 ? '' : _props$location,
      _props$intervals2 = props.intervals,
      intervals = _props$intervals2 === void 0 ? [0, 0] : _props$intervals2,
      _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      _props$height = props.height,
      height = _props$height === void 0 ? 80 : _props$height,
      _props$top = props.top,
      top = _props$top === void 0 ? 0 : _props$top,
      _props$bottom = props.bottom,
      bottom = _props$bottom === void 0 ? 0 : _props$bottom,
      _props$left = props.left,
      left = _props$left === void 0 ? 0 : _props$left,
      _props$right = props.right,
      right = _props$right === void 0 ? 0 : _props$right,
      _props$sliderValueCha = props.sliderValueChanged,
      sliderValueChanged = _props$sliderValueCha === void 0 ? [] : _props$sliderValueCha,
      scaleOp = props.scaleOp;

  var _useBbox = useBbox(),
      bbox = _useBbox[0],
      histogramSliderRef = _useBbox[1];

  var totalBins = data.length % 40 === 0 ? 40 : Math.floor(data.length / (Math.floor(data.length / 40) + 1));

  var _useState2 = useState(''),
      customClass = _useState2[0],
      setCustomClass = _useState2[1];

  var _useState3 = useState(false),
      showBar = _useState3[0],
      setShowBar = _useState3[1];

  var spaceBetween = 2;
  var histogramHeight = Math.max(height, 40);
  var histogram = new Array(totalBins + 1).fill(0);

  var _useState4 = useState([]),
      bars = _useState4[0],
      setBars = _useState4[1];

  var _useState5 = useState([0, histogram.length]),
      filledBars = _useState5[0],
      setFilledBars = _useState5[1];

  var dataLength = useRef(data.length);
  var scale_op = useRef(scaleOp);
  useEffect(function () {
    if (data.length !== dataLength.current) {
      dataLength.current = data.length;
      createHistogram().then(function (result) {
        if (result.length > 0) {
          var max = Math.max.apply(Math, result);
          result = result.map(function (value) {
            return value / (max !== 0 ? max : 1);
          });
          setBars(result);
          setShowBar(true);
        }
      });
    }
  });
  /**
   *
   * @returns computer histogram bar width
   */

  function computeBarNumber() {
    return totalBins + 1;
  }

  useEffect(function () {
    var customclass = '';
    customclass += (absolute ? 'absolute' : '') + " ";
    customclass += location + " ";
    setCustomClass(customclass);
  }, []);

  var createHistogram = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var binSize, maximum;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(intervals && intervals.length === 2)) {
                _context.next = 4;
                break;
              }

              binSize = (intervals[1] - intervals[0]) / computeBarNumber();

              if (data.length > 0) {
                data.map(function (item) {
                  var dateCounter = 0;
                  if (item.year >= intervals[0] && item.year <= intervals[1]) dateCounter = item.year - intervals[0];
                  if (item.year < intervals[0]) dateCounter = 0;
                  if (item.year > intervals[1]) dateCounter = histogram.length - 1;
                  var position = Math.floor(dateCounter / binSize) === histogram.length ? Math.floor(dateCounter / binSize) - 1 : Math.floor(dateCounter / binSize);
                  histogram[position] += scale_op.current === "Nombre d'observations" ? item.count_obs : item.count_species;
                  return item;
                });
                maximum = Math.max.apply(Math, histogram);
                histogram = histogram.map(function (element) {
                  return element / (maximum !== 0 ? maximum : 1);
                });
              } else {
                histogram.fill(0);
              }

              return _context.abrupt("return", histogram);

            case 4:
              return _context.abrupt("return", []);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function createHistogram() {
      return _ref.apply(this, arguments);
    };
  }();

  useEffect(function () {
    createHistogram().then(function (result) {
      if (result.length > 0) {
        var max = Math.max.apply(Math, result);
        result = result.map(function (value) {
          return value / (max !== 0 ? max : 1);
        });
        setBars(result);
        setShowBar(true);
      }
    });
    scale_op.current = scaleOp;
  }, [data, scaleOp]);
  /**
   * Function used only to change the value of the intervals and draw the bars correctly (opacity)
   * @param {*} newValue
   */

  var onSliderValueChange = function onSliderValueChange(newValue) {
    var binSize = (intervals[1] - intervals[0]) / Math.floor(computeBarNumber());
    var from = Math.floor((newValue[0] - intervals[0]) / binSize);
    var to = Math.floor((newValue[1] - intervals[0]) / binSize);
    setFilledBars([from, to]);
  };
  /**
   * Function used to notify external components of new interval values. It has been separeted from onSliderValueChange
   * to send a notification only when the mouseup event of the slider has been trigger. This wait on avoid multiple calls
   * in case that callbacks are time consuming functions
   * @param {*} newValue
   */


  var onSliderNotifyChange = function onSliderNotifyChange(newValue) {
    sliderValueChanged.map(function (fn) {
      fn([newValue[0], newValue[1]]);
      return fn;
    });
  };

  var style = buildLocation(location, top, right, left, bottom);
  var subtitleInterval = Math.floor((intervals[1] - intervals[0]) / 4);
  var barWidth = bbox.width > 0 ? bbox.width - 4 : (100 - spaceBetween * totalBins) / totalBins;
  var histgrameBarContainerStyle = {
    background: 'transparent',
    height: histogramHeight + "px",
    marginBottom: '-12px'
  };
  return showBar ? React__default.createElement("div", {
    className: "" + customClass,
    style: _extends({}, style, {
      width: 'max(30%,200px)',
      maxWidth: '290px'
    })
  }, React__default.createElement("div", {
    className: "histogram"
  }, React__default.createElement("div", {
    style: histgrameBarContainerStyle
  }, React__default.createElement("div", {
    id: "histogramUl",
    ref: histogramSliderRef,
    className: "histogram-ul"
  }, bars.map(function (bar, index) {
    return React__default.createElement("div", {
      key: _.uniqueId(JSON.stringify({
        n: Math.random(),
        m: Date.now()
      })),
      style: {
        height: bar * 100 + "%",
        width: barWidth + "px",
        background: '#1976d2',
        borderRadius: '5px',
        opacity: index >= filledBars[0] && index <= filledBars[1] ? '1' : '0.3'
      }
    });
  }))), React__default.createElement("div", {
    className: "histogram-slider"
  }, React__default.createElement(RangeSlider, {
    intervals: intervals,
    slideValue: onSliderValueChange,
    histogramNotifier: onSliderNotifyChange
  })), React__default.createElement("div", {
    className: "histogram-subtitle"
  }, React__default.createElement("div", {
    className: "histogram-subtitle-item"
  }), React__default.createElement("div", {
    className: "histogram-subtitle-item"
  }, intervals[0] + 1 * subtitleInterval), React__default.createElement("div", {
    className: "histogram-subtitle-item"
  }, intervals[0] + 2 * subtitleInterval), React__default.createElement("div", {
    className: "histogram-subtitle-item"
  }, intervals[0] + 3 * subtitleInterval)))) : React__default.createElement("div", null);
};

/**
 *
 * @param props
 */

var SearchBtn = function SearchBtn(props) {
  var _props$onClick = props.onClick,
      onClick = _props$onClick === void 0 ? function () {
    return 0;
  } : _props$onClick,
      _props$tooltip = props.tooltip,
      tooltip = _props$tooltip === void 0 ? '' : _props$tooltip;
  return React__default.createElement(Tooltip, {
    title: tooltip
  }, React__default.createElement(IconButton, {
    sx: {
      width: 15,
      height: 15
    },
    onClick: onClick
  }, React__default.createElement(SearchIcon, {
    sx: {
      fontSize: 15,
      color: ' #2e483e'
    }
  })));
};

var initialState = {
  card: {
    title: 'none',
    subtitle: "0 obs",
    leftText: 'none',
    rightText: 'none'
  },
  image: undefined
};
/**
 *
 * @param props
 */

var ImageFetcher = function ImageFetcher(props) {
  var _props$items = props.items,
      items = _props$items === void 0 ? [] : _props$items,
      height = props.height,
      _props$searchFn = props.searchFn,
      searchFn = _props$searchFn === void 0 ? function (value) {
    return value;
  } : _props$searchFn;
  var _props$dataProvider = props.dataProvider,
      dataProvider = _props$dataProvider === void 0 ? function (params) {
    return params;
  } : _props$dataProvider;

  var _useState = useState(initialState),
      state = _useState[0],
      setState = _useState[1];

  var index = useRef(0);
  /**
   *
   */

  var nextImage = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var newdata;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              index.current = index.current === items.length - 1 ? 0 : index.current + 1;
              _context.next = 3;
              return dataProvider(items[index.current]);

            case 3:
              newdata = _context.sent;
              setState(function (old) {
                return _extends({}, old, newdata);
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function nextImage() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   *
   */


  var previousImage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var newdata;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              index.current = index.current === 0 ? items.length - 1 : index.current - 1;
              _context2.next = 3;
              return dataProvider(items[index.current]);

            case 3:
              newdata = _context2.sent;
              setState(function (old) {
                return _extends({}, old, newdata);
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function previousImage() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   *
   */


  var onSearch = function onSearch() {
    if (items.length > 0) {
      searchFn(items[index.current]);
      index.current = 0;
    }
  };

  useEffect(function () {
    if (items.length > 0 && index.current < items.length) {
      dataProvider(items[index.current]).then(function (image) {
        setState(function (old) {
          return _extends({}, old, image);
        });
      });
    }

    return function () {
      index.current = 0;
    };
  }, [items]);
  return React__default.createElement(ImageFetcherSlider, {
    height: height,
    image: state.image,
    onNext: nextImage,
    onBack: previousImage,
    hideArrows: items.length === 1,
    card: state.card,
    searchBtn: React__default.createElement(SearchBtn, {
      tooltip: 'Afficher sur la carte',
      onClick: function onClick() {
        return onSearch();
      }
    })
  });
};

var _templateObject$8;
var CustomFontAwesomeIcon = /*#__PURE__*/styled(FontAwesomeIcon)(_templateObject$8 || (_templateObject$8 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  padding-top: 1.3px;\n  color: ", ";\n  line-height: ", ";\n  letter-spacing: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  font-style: ", ";\n\n  &:hover {\n    cursor: pointer;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.components.text.menu.color;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.components.text.basic.lineHeight + "rem";
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.components.text.basic.letterSpacing + "px";
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.components.text.basic.font;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.components.text.basic.fontWeight;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.fontSize.small + "rem";
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.components.text.basic.fontStyle;
});

var _templateObject$9, _templateObject2$7, _templateObject3$6, _templateObject4$4, _templateObject5$3, _templateObject6$2, _templateObject7$1, _templateObject8$2, _templateObject9$1, _templateObject10$1, _templateObject11$1, _templateObject12$1;
var Text = /*#__PURE__*/styled.span(_templateObject$9 || (_templateObject$9 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  color: ", ";\n  line-height: ", ";\n  letter-spacing: ", ";\n  font-family: ", "; // \"Lato\", sans-serif;\n  font-weight: ", ";\n  font-size: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.components.text.basic.menu.color;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.components.text.basic.lineHeight + "rem";
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.components.text.basic.letterSpacing + "px";
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.components.text.basic.font;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.components.text.basic.fontWeight;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.components.text.basic.fontSize + "rem";
});
var TextItalic = /*#__PURE__*/styled(Text)(_templateObject2$7 || (_templateObject2$7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-style: italic;\n"])));
var TitleText = /*#__PURE__*/styled(Text)(_templateObject3$6 || (_templateObject3$6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  color: ", ";\n  line-height: ", ";\n  letter-spacing: ", ";\n  font-family: ", "; // \"Lato\", sans-serif;\n  font-weight: ", ";\n  font-size: ", ";\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.components.text.title.menu.color;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.components.text.title.lineHeight + "rem";
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.components.text.title.letterSpacing + "px";
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.components.text.title.font;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.components.text.title.fontWeight;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.components.text.title.fontSize + "rem";
});
var TitleExtraLarge = /*#__PURE__*/styled(TitleText)(_templateObject4$4 || (_templateObject4$4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-size: 64px;\n  font-family: ", ";\n  font-weight: 700;\n"])), function (_ref13) {
  var theme = _ref13.theme;
  return theme.fonts.roboto;
});
var Titletalic = /*#__PURE__*/styled(TitleText)(_templateObject5$3 || (_templateObject5$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-style: italic;\n"])));
var SubTitleText = /*#__PURE__*/styled(Text)(_templateObject6$2 || (_templateObject6$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  line-height: ", ";\n  letter-spacing: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n"])), function (_ref14) {
  var theme = _ref14.theme;
  return theme.components.text.subtitle.lineHeight + "rem";
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.components.text.subtitle.letterSpacing + "px";
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.components.text.subtitle.font;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.components.text.subtitle.fontWeight;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.components.text.subtitle.fontSize + "rem";
});
var TextGray = /*#__PURE__*/styled(Text)(_templateObject7$1 || (_templateObject7$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  color: ", ";\n"])), function (_ref19) {
  var theme = _ref19.theme;
  return theme.components.text.title.menu.fontColor;
});
var MenuText = /*#__PURE__*/styled(TextGray)(_templateObject8$2 || (_templateObject8$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-size: ", "; ;\n"])), function (_ref20) {
  var theme = _ref20.theme;
  return theme.fontSize.normal + "rem";
});
var TitleExtraLargeWhiteTheme = /*#__PURE__*/styled(TitleExtraLarge)(_templateObject9$1 || (_templateObject9$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  color: ", ";\n"])), function (_ref21) {
  var theme = _ref21.theme;
  return theme.colors.black;
});
var TitleTextWhiteTheme = /*#__PURE__*/styled(TitleText)(_templateObject10$1 || (_templateObject10$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  color: ", ";\n"])), function (_ref22) {
  var theme = _ref22.theme;
  return theme.colors.black;
});
var SubTitleTextWhiteTheme = /*#__PURE__*/styled(SubTitleText)(_templateObject11$1 || (_templateObject11$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  color: ", ";\n"])), function (_ref23) {
  var theme = _ref23.theme;
  return theme.colors.black;
});
var TextWhiteTheme = /*#__PURE__*/styled(Text)(_templateObject12$1 || (_templateObject12$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  color: ", ";\n"])), function (_ref24) {
  var theme = _ref24.theme;
  return theme.colors.black;
});

var _templateObject$a, _templateObject2$8, _templateObject3$7, _templateObject4$5, _templateObject5$4, _templateObject6$3, _templateObject7$2;
var CarouselArrow = /*#__PURE__*/styled(CustomFontAwesomeIcon)(_templateObject$a || (_templateObject$a = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-size: 30px;\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 50%;\n  padding: 0.2em;\n\n  &:hover {\n    font-size: 40px;\n  }\n"])));
var Card = /*#__PURE__*/styled.div(_templateObject2$8 || (_templateObject2$8 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: grid;\n  grid-template-rows: min-content;\n\n  background: rgba(255, 255, 255, 1);\n\n  border: '1px solid red';\n  width: 100%;\n  height: 100%;\n  color: black;\n  border-radius: 8px;\n  gap: 5px;\n  & > img {\n    width: 100%;\n    aspect-ratio: 16/9;\n    object-fit: cover;\n    border-radius: 8px 8px 0px 0px;\n  }\n\n  & .card-title {\n    padding: 2rem;\n\n    @media ", " {\n      padding: 1rem;\n    }\n\n    @media ", " {\n      padding: 0.6rem;\n    }\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.devices.laptopL;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.devices.mobileL;
});
var CardTitleText = /*#__PURE__*/styled(Text)(_templateObject3$7 || (_templateObject3$7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-weight: 800;\n  font-size: 20px;\n\n  @media ", " {\n    font-size: 16px;\n  }\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.darkv2;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.devices.laptopL;
}); //version flexBox

var FbContainer = /*#__PURE__*/styled.div(_templateObject4$5 || (_templateObject4$5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  --slider-padding: 5rem;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 0.5rem 0;\n  overflow: hidden;\n  min-height: 300px;\n"])));
var FbSlider = /*#__PURE__*/styled.div(_templateObject5$4 || (_templateObject5$4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  --slider-index: 0;\n  --items-per-screen: 3;\n  display: flex;\n  width: calc(100% - 2 * var(--slider-padding));\n  transform: translateX(calc(var(--slider-index) * -100%));\n  transition: transform 250ms ease-in-out;\n  & .slider-card {\n    flex: 0 0 calc(100% / var(--items-per-screen));\n    max-width: calc(100% / var(--items-per-screen));\n    padding: 0.25rem;\n  }\n\n  @media ", " {\n    --items-per-screen: 5;\n  }\n\n  @media ", " {\n    --items-per-screen: 3;\n  }\n\n  @media ", " {\n    --items-per-screen: 1;\n  }\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.devices.desktop;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.devices.laptopL;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.devices.mobileL;
});
var Handler = /*#__PURE__*/styled.div(_templateObject6$3 || (_templateObject6$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: var(--slider-padding);\n  z-index: 10;\n  margin: 0.25rem 0;\n  border: none;\n"])));
var CardWrapper = /*#__PURE__*/styled.div(_templateObject7$2 || (_templateObject7$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  height: 100%;\n  border: 10px solid transparent;\n  padding: 15px;\n"])));

var Carousel = function Carousel(props) {
  var _onClick = props.onClick;
  var cards = props.cards || [];

  var getSlider = function getSlider(e) {
    var _handle$closest;

    var handle = e.target;
    return (_handle$closest = handle.closest('.slider-container')) == null ? void 0 : _handle$closest.querySelector('.slider');
  };

  var computeNUmberOfSlides = function computeNUmberOfSlides(e) {
    var slider = getSlider(e);

    if (slider) {
      var itemCount = slider.children.length;
      var itemsPerScreen = parseInt(getComputedStyle(slider).getPropertyValue('--items-per-screen'));
      return Math.ceil(itemCount / itemsPerScreen);
    }

    return -1;
  };

  var next = function next(e) {
    var slider = getSlider(e);
    var totalSlides = computeNUmberOfSlides(e);

    if (slider && totalSlides !== -1) {
      var sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'));
      if (sliderIndex < totalSlides - 1) slider.style.setProperty('--slider-index', sliderIndex + 1);
    }
  };

  var previous = function previous(e) {
    var slider = getSlider(e);

    if (slider) {
      var sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'));
      if (sliderIndex > 0) slider.style.setProperty('--slider-index', sliderIndex - 1);
    }
  };

  return React__default.createElement(FbContainer, {
    className: "slider-container"
  }, React__default.createElement(Handler, null, React__default.createElement(CarouselArrow, {
    onClick: previous,
    icon: faChevronLeft,
    className: "fa-regular fa-2x",
    style: {
      color: '#fff'
    }
  })), React__default.createElement(FbSlider, {
    className: "slider"
  }, cards.map(function (item, index) {
    return React__default.createElement(CardWrapper, {
      className: "slider-card",
      key: JSON.stringify(item)
    }, React__default.createElement(Card, {
      className: "shadow",
      onClick: function onClick() {
        if (_onClick) _onClick();
      }
    }, React__default.createElement("img", {
      src: item.img,
      alt: 'img'
    }), React__default.createElement("div", {
      className: "card-title"
    }, React__default.createElement(CardTitleText, null, item.title))));
  })), React__default.createElement(Handler, null, React__default.createElement(CarouselArrow, {
    onClick: next,
    icon: faChevronRight,
    className: "fa-regular fa-2x"
  })));
};

var _templateObject5$5, _templateObject6$4, _templateObject7$3, _templateObject14$1;
var Grid = /*#__PURE__*/styled.div(_templateObject5$5 || (_templateObject5$5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: grid;\n  gap: 10px;\n  align-items: center;\n  grid-auto-rows: auto;\n  padding: 0px 0px;\n\n  @media (min-width: 913px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media ", " {\n    border-radius: 8px;\n    width: 96%;\n  }\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return theme.devices.tabletM;
});
var GridItem = /*#__PURE__*/styled.div(_templateObject6$4 || (_templateObject6$4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var GridItem1 = /*#__PURE__*/styled(GridItem)(_templateObject7$3 || (_templateObject7$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: fit-content;\n  margin-bottom: 30px;\n  justify-content: flex-start;\n  padding-left: ", ";\n\n  @media ", " {\n    justify-content: center;\n    padding: 0px 20px;\n  }\n"])), function (_ref9) {
  var theme = _ref9.theme;
  return theme.paddings.body.left + "px";
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.devices.tabletM;
}); // for video player
var PaddingContainerwithBg = /*#__PURE__*/styled.div(_templateObject14$1 || (_templateObject14$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: relative;\n  background: ", ";\n  box-shadow: 0px 2px 2px 2px rgba(9, 9, 9, 0.23);\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n"])), function (_ref27) {
  var theme = _ref27.theme;
  return theme.components.header.background;
});

/**
 *
 * @param props text for error
 * @returns Error Text component
 */

var CustomPathLink = function CustomPathLink(props) {
  return React__default.createElement("a", {
    href: "" + props.href,
    className: props.className
  }, props.children);
};

var _templateObject$b, _templateObject2$9;
var InfoContentContainer = /*#__PURE__*/styled.div(_templateObject$b || (_templateObject$b = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100%;\n  width: fit-content;\n\n  color: ", ";\n  line-height: ", ";\n  letter-spacing: ", ";\n  font-family: ", "; // \"Lato\", sans-serif;\n  font-weight: ", ";\n  font-size: ", ";\n  font-style: ", ";\n\n  & ul {\n    list-style-type: none;\n    margin: 1em 0;\n    padding: 0;\n\n    & li {\n      margin: 5px;\n    }\n\n    & a {\n      text-decoration: none;\n      color: ", ";\n    }\n  }\n  @media ", " {\n    padding: 0;\n\n    justify-content: center;\n    align-items: flex-start;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.components.text.basic.menu.color;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.components.text.basic.lineHeight + "rem";
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.components.text.basic.letterSpacing + "px";
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.components.text.basic.font;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.components.text.basic.fontWeight;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.fontSize.small + "rem";
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.components.text.basic.fontStyle;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.components.text.menu.color;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.devices.mobileL;
});
var Icons = /*#__PURE__*/styled.img(_templateObject2$9 || (_templateObject2$9 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 20px;\n  height: 20px;\n"])));

var _templateObject$c;
var SocialNetworkBoxContainer = /*#__PURE__*/styled.div(_templateObject$c || (_templateObject$c = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: space-between;\n  gap: 0.4em;\n  margin-top: 20px;\n"])));

var SocialNetworkBox = function SocialNetworkBox(props) {
  var theme = props.theme;
  return React__default.createElement(SocialNetworkBoxContainer, {
    theme: theme
  }, React__default.createElement(CustomPathLink, {
    href: "/#"
  }, React__default.createElement(Icons, {
    className: "my-icon",
    alt: "facebook",
    src: '/images/facebook-brands.svg'
  })), React__default.createElement(CustomPathLink, {
    href: "/#"
  }, React__default.createElement(Icons, {
    alt: "instagram",
    src: '/images/instagram-brands.svg'
  })), React__default.createElement(CustomPathLink, {
    href: "/#"
  }, React__default.createElement(Icons, {
    alt: "twitter",
    src: '/images/twitter-brands.svg'
  })), React__default.createElement(CustomPathLink, {
    href: "/#"
  }, React__default.createElement(Icons, {
    alt: "mail",
    src: '/images/envelope-regular.svg'
  })));
};

var InfoContent = function InfoContent(props) {
  var theme = props.theme,
      _props$t = props.t,
      t = _props$t === void 0 ? function (text) {
    return text;
  } : _props$t;
  return React__default.createElement(InfoContentContainer, {
    theme: theme
  }, React__default.createElement(SubTitleText, null, t('Organisations')), React__default.createElement("ul", null, React__default.createElement("li", null, React__default.createElement(CustomPathLink, {
    href: "https://biodiversite-quebec.ca/team"
  }, t('Équipe'))), React__default.createElement("li", null, React__default.createElement(CustomPathLink, {
    href: "https://biodiversite-quebec.ca/partners"
  }, t('Partenaires'))), React__default.createElement("li", null, React__default.createElement(CustomPathLink, {
    href: "https://biodiversite-quebec.ca/about"
  }, t('À propos'))), React__default.createElement("li", null, React__default.createElement(CustomPathLink, {
    href: "https://biodiversite-quebec.ca/contactus"
  }, t('Contactez nous')))), React__default.createElement(SocialNetworkBox, null));
};

var _templateObject$d, _templateObject2$a;
var FooterLeftContentContainer = /*#__PURE__*/styled.div(_templateObject$d || (_templateObject$d = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  position: relative;\n  justify-content: flex-end;\n  align-items: center;\n  height: 200px;\n\n  & .block {\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    width: fit-content;\n    height: 100%;\n  }\n\n  @media ", " {\n    justify-content: flex-start;\n    max-height: 200px;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.devices.tablet;
});
var FooterImg = /*#__PURE__*/styled.img(_templateObject2$a || (_templateObject2$a = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  min-width: 300px;\n  max-width: 400px;\n  max-height: 400px;\n  width: 100%;\n\n  @media ", " {\n    height: fit-content;\n    max-width: 400px;\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.devices.mobileL;
});
/* export const FooterImgDiv = styled.div<Props>`
  background: url(${({ theme }) =>
      theme.mode === "dark"
        ? "/images/logofooter-dark-mode-fr.png"
        : "/images/logofooter-light-mode-fr.png"})
    no-repeat;

  background-size: 155%;
  background-position: center;
  min-width: 300px;
  max-width: 400px;
  max-height: 400px;
  height: 100%;

  @media ${({ theme }) => theme.devices.tablet} {
    width: 250px;
    min-width: 0px;
    height: 150px;
  }
`;


interface Props {
  theme?: any;
} */

var FooterLeftContent = function FooterLeftContent(props) {
  var theme = props.theme;
  var finalMode = theme ? theme.mode : 'dark';
  return React__default.createElement(FooterLeftContentContainer, {
    theme: theme
  }, React__default.createElement(FooterImg, {
    src: "/images/logofooter-" + finalMode + "-mode-fr.png",
    alt: "footer-image"
  }));
};

var FooterLinksContent = function FooterLinksContent(props) {
  var theme = props.theme,
      _props$t = props.t,
      t = _props$t === void 0 ? function (text) {
    return text;
  } : _props$t;
  return React__default.createElement(InfoContentContainer, {
    theme: theme
  }, React__default.createElement(SubTitleText, null, t('Contenu')), React__default.createElement("ul", null, React__default.createElement("li", null, React__default.createElement("a", {
    href: "https://biodiversite-quebec.ca/inventaires/"
  }, t('Inventaire Terrain'))), React__default.createElement("li", null, React__default.createElement("a", {
    href: "https://coleo.biodiversite-quebec.ca/apps/tableau-atlas-react/"
  }, t('Explorateur'))), React__default.createElement("li", null, React__default.createElement("a", {
    href: "https://coleo.biodiversite-quebec.ca/apps/tableaulpi/"
  }, t('Indicateur'))), React__default.createElement("li", null, React__default.createElement(CustomPathLink, {
    href: "https://biodiversite-quebec.ca/histories"
  }, t('Articles')))));
};

var _templateObject$e, _templateObject2$b, _templateObject3$8, _templateObject4$6;
var FooterContainer = /*#__PURE__*/styled.div(_templateObject$e || (_templateObject$e = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100%;\n  background: ", ";\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.components.header.background;
});
var FooterGrid = /*#__PURE__*/styled(Grid)(_templateObject2$b || (_templateObject2$b = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  @media (min-width: 768px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media ", " {\n    max-height: 1000px;\n  }\n\n  @media ", " {\n    max-width: 2500px;\n    padding: 20px 0;\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.devices.tabletM;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.devices.gttv;
});
var GridItemFooterLeft = /*#__PURE__*/styled(GridItem1)(_templateObject3$8 || (_templateObject3$8 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  justify-content: center;\n  @media ", " {\n    grid-template-columns: repeat(2, 1fr);\n    grid-column: 1 / span 2;\n    justify-content: center;\n  }\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.devices.tablet;
});
var GridItemFooterRight = /*#__PURE__*/styled(GridItem1)(_templateObject4$6 || (_templateObject4$6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  align-self: start;\n  margin-bottom: 0;\n  margin: 0;\n  padding-top: 30px;\n  padding-bottom: 0;\n\n  @media ", " {\n    justify-content: center;\n  }\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.devices.tablet;
});

var colors$1 = {
  white: '#ffffff',
  black: '#000000',
  darkv1: '#353535',
  darkv2: '#3A3A3A',
  bluev1: '#7A93B5',
  greenv1: '#7AB5B0',
  yellowv1: '#E0B658',
  orangev1: '#E08558',
  gray: '#C3C3C3'
}; //devices

var size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  tabletM: '912px',
  laptop: '1024px',
  laptopL: '1440px',
  desktopM: '1700px',
  desktop: '2560px',
  tv: '4000px'
};
var devices = {
  mobileS: "(max-width: " + size.mobileS + ")",
  mobileM: "(max-width: " + size.mobileM + ")",
  mobileL: "(max-width: " + size.mobileL + ")",
  tablet: "(max-width: " + size.tablet + ")",
  tabletM: "(max-width: " + size.tabletM + ")",
  tabletgtM: "(min-width: " + size.tabletM + ")",
  laptop: "(max-width: " + size.laptop + ")",
  laptopL: "(max-width: " + size.laptopL + ")",
  desktop: "(max-width: " + size.desktop + ")",
  desktopL: "(max-width: " + size.desktop + ")",
  gtlaptopL: "(min-width: " + size.laptopL + ")",
  gttv: "(min-width: " + size.tv + ")",
  ltlaptopL: "(min-width: " + size.laptopL + ")"
}; //styles

var fonts = {
  roboto: '"Roboto", sans-serif;',
  lato: '"Lato", sans-serif;'
};
var fontStyle = {
  italic: 'italic',
  normal: 'normal'
};
var fontWeight = {
  extralight: '100',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  heavy: '900'
};
var fontSize = {
  small: 0.75,
  normal: 1,
  medium: 1.25,
  large: 2.25,
  extralarge: 3.5
};
var lineHeight = {
  basic: 1,
  medium: 1.0625,
  customText: 1.051,
  large: 2.3,
  extralarge: 3.55
};
var letterSpacing = {
  basic: 0.350347
};
var textStyle = {
  menu: {
    color: colors$1.white,
    fontColor: colors$1.gray
  },
  color: colors$1.white,
  lineHeight: lineHeight.basic,
  letterSpacing: letterSpacing.basic,
  font: fonts.lato,
  fontSize: fontSize.normal,
  fontWeight: fontWeight.bold,
  fontStyle: fontStyle.normal
};
var paddings = {
  body: {
    left: 100,
    right: 100,
    top: 0,
    bottom: 0
  }
};
var basicMode = {
  font: fonts.lato,
  fonts: fonts,
  colors: colors$1,
  textStyle: textStyle,
  letterSpacing: letterSpacing,
  lineHeight: lineHeight,
  fontWeight: fontWeight,
  fontStyle: fontStyle,
  fontSize: fontSize,
  devices: devices,
  mode: 'dark',
  paddings: paddings
};
var appTheme = {
  lightMode: /*#__PURE__*/_extends({}, basicMode, {
    mode: 'light',
    components: {
      header: {
        background: colors$1.white,
        fontColor: colors$1.darkv1,
        tabContentBackground: colors$1.white
      },
      body: {
        background: colors$1.white
      },
      hero: {
        background: colors$1.white,
        fontColor: colors$1.darkv1,
        title: colors$1.white
      },
      text: /*#__PURE__*/_extends({
        basic: /*#__PURE__*/_extends({}, textStyle, {
          menu: {
            color: colors$1.darkv1
          },
          color: colors$1.darkv1
        }),
        title: /*#__PURE__*/_extends({}, textStyle, {
          fontSize: fontSize.large,
          fontWeight: fontWeight.extrabold,
          lineHeight: lineHeight.large,
          menu: {
            color: colors$1.darkv1
          },
          color: colors$1.darkv1
        }),
        subtitle: /*#__PURE__*/_extends({}, textStyle, {
          font: fonts.roboto,
          fontSize: fontSize.medium,
          fontWeight: fontWeight.medium,
          menu: {
            color: colors$1.darkv1
          },
          color: colors$1.darkv1
        })
      }, /*#__PURE__*/_extends({}, textStyle, {
        menu: {
          color: colors$1.darkv1
        },
        color: colors$1.darkv1
      })),
      errorMessage: {
        errorRed: 'red'
      }
    }
  }),
  darkMode: /*#__PURE__*/_extends({}, basicMode, {
    mode: 'dark',
    components: {
      header: {
        background: colors$1.darkv1,
        fontColor: colors$1.white,
        tabContentBackground: colors$1.darkv2
      },
      body: {
        background: colors$1.darkv2
      },
      hero: {
        background: colors$1.darkv2,
        fontColor: colors$1.white,
        title: colors$1.darkv2
      },
      text: /*#__PURE__*/_extends({
        basic: /*#__PURE__*/_extends({}, textStyle),
        title: /*#__PURE__*/_extends({}, textStyle, {
          fontSize: fontSize.large,
          fontWeight: fontWeight.extrabold,
          lineHeight: lineHeight.large
        }),
        subtitle: /*#__PURE__*/_extends({}, textStyle, {
          font: fonts.roboto,
          fontSize: fontSize.medium,
          fontWeight: fontWeight.medium
        })
      }, textStyle),
      errorMessage: {
        errorRed: 'red'
      }
    }
  }),
  orangeMode: /*#__PURE__*/_extends({}, basicMode, {
    mode: 'orange',
    components: {
      header: {
        background: colors.bqlightorange,
        fontColor: colors$1.white,
        tabContentBackground: colors.bqlightorange
      },
      body: {
        background: colors$1.white
      },
      hero: {
        background: colors$1.darkv2,
        fontColor: colors$1.white,
        title: colors$1.darkv2
      },
      text: /*#__PURE__*/_extends({
        basic: /*#__PURE__*/_extends({}, textStyle),
        title: /*#__PURE__*/_extends({}, textStyle, {
          fontSize: fontSize.large,
          fontWeight: fontWeight.extrabold,
          lineHeight: lineHeight.large
        }),
        subtitle: /*#__PURE__*/_extends({}, textStyle, {
          font: fonts.roboto,
          fontSize: fontSize.medium,
          fontWeight: fontWeight.medium
        })
      }, textStyle),
      errorMessage: {
        errorRed: 'red'
      }
    }
  })
};

var ModeContext = /*#__PURE__*/createContext({
  mode: 'dark',
  themes: {},
  currentTheme: {}
});
var AppModeProvider = function AppModeProvider(props) {
  var _props$mode = props.mode,
      mode = _props$mode === void 0 ? 'dark' : _props$mode,
      _props$themes = props.themes,
      themes = _props$themes === void 0 ? appTheme : _props$themes,
      children = props.children;
  return React__default.createElement(ModeContext.Provider, {
    value: {
      mode: mode,
      themes: themes,
      currentTheme: mode === 'dark' ? appTheme.darkMode : appTheme.lightMode
    }
  }, React__default.createElement(ThemeProvider$1, {
    theme: mode === 'dark' ? appTheme.darkMode : appTheme.lightMode
  }, children));
};

var TranslationContext = /*#__PURE__*/createContext({
  t: function t(text) {
    return text;
  },
  lang: ''
});

var useTranslation = function useTranslation(text) {
  return {
    t: function t(text) {
      return text;
    },
    lang: 'en'
  };
};

var TranslateWrapper = function TranslateWrapper(props) {
  var _useTranslation = useTranslation(),
      t = _useTranslation.t,
      lang = _useTranslation.lang;

  return React__default.createElement(TranslationContext.Provider, {
    value: {
      t: t,
      lang: lang
    }
  }, props.children);
};

var Footer = function Footer(props) {
  var theme = props.theme,
      t = props.t;
  return React__default.createElement(PaddingContainerwithBg, null, React__default.createElement(FooterContainer, {
    theme: theme
  }, React__default.createElement(FooterGrid, null, React__default.createElement(GridItemFooterLeft, null, React__default.createElement(FooterLeftContent, {
    theme: theme
  })), React__default.createElement(GridItemFooterRight, null, React__default.createElement(FooterLinksContent, {
    theme: theme,
    t: t
  })), React__default.createElement(GridItemFooterRight, null, React__default.createElement(InfoContent, {
    theme: theme,
    t: t
  })))));
};
/**
 * component that wraps the theme and translation context and makes it available to all children elements
 * @param props
 * @returns
 */

var FooterWrapper = function FooterWrapper(props) {
  return React__default.createElement(AppModeProvider, null, React__default.createElement(TranslateWrapper, null, props.children));
};

var BQFooter = function BQFooter(props) {
  var themes = props.themes;
  return React__default.createElement(FooterWrapper, null, React__default.createElement(Footer, {
    theme: themes == null ? void 0 : themes.darkMode
  }));
};

var _templateObject$f, _templateObject2$c, _templateObject3$9;
var CollapseMenuItemContainer = /*#__PURE__*/styled(Container$1)(_templateObject$f || (_templateObject$f = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  gap: 0.5em;\n"])));
var CollapseMenuItemFontAwesomeIcon = /*#__PURE__*/styled(FontAwesomeIcon)(_templateObject2$c || (_templateObject2$c = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  padding-top: 1.3px;\n  line-height: ", ";\n  letter-spacing: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  font-style: ", ";\n  font-weight: 600;\n\n  &:hover {\n    cursor: pointer;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.components.text.basic.lineHeight + "rem";
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.components.text.basic.letterSpacing + "px";
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.components.text.basic.font;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.components.text.basic.fontWeight;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.fontSize.small + "rem";
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.components.text.basic.fontStyle;
});
var CollapseMenuText = /*#__PURE__*/styled(MenuText)(_templateObject3$9 || (_templateObject3$9 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-weight: 600;\n\n  /*  border-bottom: 1px solid\n    ", "; */\n  color: ", ";\n  opacity: ", ";\n  border-bottom: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n  padding-bottom: ", ";\n  cursor: 'pointer';\n  :hover {\n    border-bottom: ", ";\n    margin-top: 6px;\n    margin-bottom: -12px;\n    padding-bottom: 10px;\n    opacity: 1;\n  }\n"])), function (_ref7) {
  var theme = _ref7.theme,
      opacity = _ref7.opacity;
  return opacity === 1 ? theme.components.text.menu.color : 'transparent';
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.components.text.menu.color;
}, function (_ref9) {
  var opacity = _ref9.opacity;
  return opacity;
}, function (_ref10) {
  var theme = _ref10.theme,
      active = _ref10.active,
      color = _ref10.color;
  return active ? '7px solid ' + color : '0px solid ' + theme.components.text.menu.color;
}, function (_ref11) {
  var active = _ref11.active;
  return active ? '6px' : '0px';
}, function (_ref12) {
  var active = _ref12.active;
  return active ? '-12px' : '0px';
}, function (_ref13) {
  var active = _ref13.active;
  return active ? '10px' : '0px';
}, function (_ref14) {
  var color = _ref14.color;
  return ' 7px solid ' + color;
});

var CollapseMenuItem = function CollapseMenuItem(props) {
  var _props$text = props.text,
      text = _props$text === void 0 ? '' : _props$text,
      _props$collapse = props.collapse,
      collapse = _props$collapse === void 0 ? true : _props$collapse,
      _props$notifyEvent = props.notifyEvent,
      notifyEvent = _props$notifyEvent === void 0 ? function (obj) {
    return obj;
  } : _props$notifyEvent,
      _props$hidearrow = props.hidearrow,
      hidearrow = _props$hidearrow === void 0 ? false : _props$hidearrow,
      _props$opacity = props.opacity,
      opacity = _props$opacity === void 0 ? 0.7 : _props$opacity,
      active = props.active,
      color = props.color; //const [active, setActive] = useState(false);

  var toggle = function toggle(e) {
    notifyEvent(text); //setActive(true);
  };

  return React__default.createElement(CollapseMenuItemContainer, {
    onClick: toggle
  }, React__default.createElement(CollapseMenuText, {
    opacity: opacity,
    active: active,
    color: color
  }, text), !hidearrow && (collapse ? React__default.createElement(CollapseMenuItemFontAwesomeIcon, {
    icon: faChevronDown,
    className: "fa-regular fa-1x"
  }) : React__default.createElement(CollapseMenuItemFontAwesomeIcon, {
    icon: faChevronUp,
    className: "fa-regular fa-1x"
  })));
};

var _templateObject$g, _templateObject2$d;
var HeaderContainerV1 = /*#__PURE__*/styled.nav(_templateObject$g || (_templateObject$g = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  //box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);\n  background: ", ";\n  color: ", ";\n  padding: 0.25rem 1rem;\n  height: 45px;\n\n  & ul {\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    list-style: none;\n    gap: 3em;\n    z-index: 10;\n\n    @media ", " {\n      display: none;\n    }\n  }\n\n  & li.active {\n    border-bottom: 3px solid ", ";\n  }\n\n  & a {\n    text-decoration: none;\n    color: inherit;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    padding: 0.25rem;\n  }\n\n  & .home-icon {\n    width: 150px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 10;\n  }\n\n  & .tab_content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    position: absolute;\n    left: 0;\n    background-color: rgba(9, 9, 9, 0.23);\n  }\n\n  & .right-side {\n    display: flex;\n    flex: 1;\n    justify-content: flex-end;\n    height: 90%;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.components.header.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.components.text.menu.color;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.devices.tabletM;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.components.text.menu.color;
});
var Logo = /*#__PURE__*/styled.img(_templateObject2$d || (_templateObject2$d = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 185px;\n  object-fit: cover;\n  height: 50px;\n  padding-top: 0.3rem;\n"])));

var _templateObject$h, _templateObject2$e, _templateObject3$a;
var BarMenuContainer = /*#__PURE__*/styled.div(_templateObject$h || (_templateObject$h = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: relative;\n\n  & .bar-menu-hide {\n    @media ", " {\n      display: none;\n    }\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.devices.tabletgtM;
});
var BarMenuBody = /*#__PURE__*/styled.div(_templateObject2$e || (_templateObject2$e = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: absolute;\n  width: 248px;\n  top: 30px;\n  left: -200px;\n  background: ", ";\n  padding: 30px 20px;\n  z-index: 1000;\n  box-shadow: 0px 0.5px 5px rgba(0, 0, 0, 0.25);\n\n  a {\n    text-decoration: none;\n  }\n\n  div {\n    color: ", ";\n    line-height: ", ";\n    letter-spacing: ", ";\n    font-family: ", "; // \"Lato\", sans-serif;\n    font-weight: ", ";\n    font-size: ", ";\n    font-style: ", ";\n\n    opacity: 0.7;\n    margin: 20px 10px;\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.components.header.background;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.components.text.basic.menu.color;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.components.text.basic.lineHeight + "rem";
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.components.text.basic.letterSpacing + "px";
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.components.text.basic.font;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.components.text.basic.fontWeight;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.fontSize.small + "rem";
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.components.text.basic.fontStyle;
});
var HamberguerFontAwesomeIcon = /*#__PURE__*/styled(FontAwesomeIcon)(_templateObject3$a || (_templateObject3$a = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  /*  */\n  @media ", " {\n    line-height: ", ";\n    font-size: ", ";\n  }\n"])), function (_ref10) {
  var theme = _ref10.theme;
  return theme.devices.gttv;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.lineHeight.ml + "rem";
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.fontSize.ml + "rem";
});

var BarMenu = function BarMenu(props) {
  var _useState = useState(true),
      collapse = _useState[0],
      setCollapse = _useState[1];

  var onBlur = props.onBlur,
      _props$switchLocale = props.switchLocale,
      switchLocale = _props$switchLocale === void 0 ? function (text) {
    return text;
  } : _props$switchLocale,
      items = props.items,
      defaultLocale = props.defaultLocale;

  var _useState2 = useState(defaultLocale),
      locale = _useState2[0],
      setLocale = _useState2[1];

  var focusOut = function focusOut(e) {
    if (onBlur) onBlur();
  };

  var toggleCollapse = function toggleCollapse() {
    setCollapse(!collapse);
  };

  var changeLanguage = function changeLanguage(text) {
    var oldValue = switchLocale(text);
    setLocale(oldValue);
    toggleCollapse();
  };

  return React__default.createElement(BarMenuContainer, {
    tabIndex: 0,
    onBlur: focusOut
  }, React__default.createElement(HamberguerFontAwesomeIcon, {
    icon: faBars,
    className: "fa-regular fa-1x",
    style: {
      opacity: 0.7
    },
    onClick: toggleCollapse
  }), !collapse && React__default.createElement(BarMenuBody, {
    tabIndex: 0
  }, items == null ? void 0 : items.map(function (item) {
    var _item$href;

    return item.type && item.type === 'lang' ? React__default.createElement("div", {
      className: "language-item",
      key: item.text,
      onClick: function onClick() {
        return changeLanguage(locale);
      }
    }, React__default.createElement("a", null, "" + locale.substring(0, 2).toUpperCase())) : React__default.createElement("div", {
      key: item.href,
      className: item.canHide ? 'bar-menu-hide' : '',
      onClick: toggleCollapse
    }, React__default.createElement(CustomPathLink, {
      href: (_item$href = item.href) != null ? _item$href : '/#'
    }, item.text));
  })));
};

var HeaderNavItem = function HeaderNavItem(props) {
  return props.children;
};
var Header = function Header(_ref) {
  var children = _ref.children,
      activeItem = _ref.activeItem,
      _onBlur = _ref.onBlur,
      logo = _ref.logo,
      rightSideComponents = _ref.rightSideComponents;

  var _useBbox = useBbox(),
      bbox = _useBbox[0],
      targetRef = _useBbox[1];

  var height = bbox.height;
  var items = [];
  if (children && !isArray(children)) items = [children];else items = children;
  var keys = items.map(function (item) {
    return item.key;
  });
  return React__default.createElement(HeaderContainerV1, {
    ref: targetRef,
    tabIndex: -1,
    className: "bq-nav",
    onBlur: function onBlur() {
      if (_onBlur) _onBlur();
    }
  }, React__default.createElement("div", null, logo ? logo : null), React__default.createElement("ul", {
    className: "custom-nav"
  }, items.map(function (item, index) {
    var _item$props$title;

    return React__default.createElement("li", {
      key: _.uniqueId((_item$props$title = item.props.title) != null ? _item$props$title : '')
    }, React__default.createElement("div", {
      style: {
        zIndex: 50
      }
    }, item.props ? item.props.title : ''), keys[index] === activeItem && height ? React__default.createElement("div", {
      className: "tab_content",
      style: {
        top: height + "px",
        zIndex: 1
      }
    }, item.props ? item.props.children : '') : '');
  })), React__default.createElement("div", {
    className: "right-side"
  }, rightSideComponents ? rightSideComponents : null));
};
var CustomHeader = function CustomHeader(_ref2) {
  var _ref2$items = _ref2.items,
      items = _ref2$items === void 0 ? [] : _ref2$items,
      logoUrl = _ref2.logoUrl,
      rightSideComponents = _ref2.rightSideComponents,
      activePage = _ref2.activePage;

  var _useState = useState(''),
      settedKey = _useState[0],
      setSettedKey = _useState[1];

  var _useState2 = useState('accueil'),
      tabClicked = _useState2[0],
      setTabClicked = _useState2[1];

  var selectedTab = function selectedTab(tabKey) {
    setSettedKey(tabKey === settedKey ? '' : tabKey);
    setTabClicked(tabKey);
  };

  var logo = React__default.createElement(CustomPathLink, {
    href: "/#"
  }, React__default.createElement(Logo, {
    src: logoUrl,
    alt: "logo"
  }));
  return React__default.createElement(PaddingContainerwithBg, null, React__default.createElement(Header, {
    activeItem: settedKey,
    onBlur: function onBlur() {
      setSettedKey('');
    },
    logo: logo,
    rightSideComponents: rightSideComponents
  }, items.map(function (item) {
    var key = item.key,
        text = item.text,
        href = item.href;
    return React__default.createElement(HeaderNavItem, {
      key: key,
      disbaleCollapse: true,
      "class": "bq-nav-item",
      title: React__default.createElement("a", {
        href: href,
        className: "no-decoration"
      }, React__default.createElement(CollapseMenuItem, {
        text: text,
        collapse: settedKey === key ? false : true,
        highlight: tabClicked === key || activePage === key,
        notifyEvent: function notifyEvent(param) {
          return selectedTab(key);
        },
        hidearrow: true,
        className: activePage === key ? 'active' : ''
      }))
    });
  })));
};
var BQHeaderWithoutProvider = function BQHeaderWithoutProvider(props) {
  var _props$locale = props.locale,
      locale = _props$locale === void 0 ? 'fr' : _props$locale,
      _props$t = props.t,
      t = _props$t === void 0 ? function (text) {
    return text;
  } : _props$t,
      switchFn = props.switchFn,
      activePage = props.activePage,
      _props$logoMode = props.logoMode,
      logoMode = _props$logoMode === void 0 ? 'dark' : _props$logoMode;
  var logoUrl = "/images/logo-dark-mode-fr.svg";

  if (logoMode == 'darkColor') {
    logoUrl = "/images/logofooter-dark-mode-fr.png";
  }

  logoUrl = "/images/logofooter-dark-mode-" + logoMode + "-fr.png";

  var _useState3 = useState(''),
      settedKey = _useState3[0],
      setSettedKey = _useState3[1];

  var barMenuItems = [{
    href: 'https://biodiversite-quebec.ca/inventaires/',
    text: t('inventaire terrain'),
    canHide: true
  }, {
    href: 'https://biodiversite-quebec.ca/indicateurs/',
    text: t('indicateur'),
    canHide: true
  }, {
    href: 'https://biodiversite-quebec.ca/atlas/',
    text: t('atlas'),
    canHide: true
  }, {
    href: 'https://biodiversite-quebec.ca/decouverte',
    text: t('decouverte'),
    canHide: true
  },, {
    href: 'https://biodiversite-quebec.ca/equipe/',
    text: t('Équipe')
  }, {
    href: 'https://biodiversite-quebec.ca/a_propos/',
    text: t('À propos')
  }, {
    href: 'https://biodiversite-quebec.ca/contactez_nous/',
    text: t('Contactez-nous')
  }
  /* ,
  {
  text: locale === 'fr' ? 'en' : 'fr',
  type: 'lang',
  }, */
  ];
  var rightSideComponents = React__default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      cursor: 'pointer'
    }
  }, React__default.createElement(BarMenu, {
    items: barMenuItems,
    onBlur: function onBlur() {
      return setSettedKey('');
    },
    switchLocale: switchFn,
    defaultLocale: locale === 'fr' ? 'en' : 'fr'
  }));
  var items = [{
    href: 'https://biodiversite-quebec.ca/',
    text: 'Accueil',
    key: 'accueil',
    "default": true
  }, {
    href: 'https://biodiversite-quebec.ca/inventaires/',
    text: 'Inventaires terrain',
    key: 'inventaire_terrain',
    "default": false
  }, {
    href: 'https://biodiversite-quebec.ca/indicateurs/',
    text: 'Indicateurs',
    key: 'indicateurs',
    "default": false
  }, {
    href: 'https://biodiversite-quebec.ca/atlas/',
    text: 'Atlas',
    key: 'atlas',
    "default": false
  }, {
    href: 'https://biodiversite-quebec.ca/decouverte',
    text: 'Découverte',
    key: 'decouverte',
    "default": false
  }];
  return React__default.createElement(CustomHeader, {
    logoUrl: logoUrl,
    items: items,
    t: t,
    settedKey: settedKey,
    rightSideComponents: rightSideComponents,
    activePage: activePage
  });
};

var _templateObject$i, _templateObject2$f, _templateObject3$b;
var SearchBarWrapper = /*#__PURE__*/styled.div(_templateObject$i || (_templateObject$i = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: relative;\n"])));
var SearchBarIcon = /*#__PURE__*/styled.div(_templateObject2$f || (_templateObject2$f = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  height: 1.5rem;\n  width: 1.5rem;\n  padding: 4px;\n  position: absolute;\n  box-sizing: border-box;\n  top: 50%;\n  left: 20px;\n  transform: translateY(-50%);\n"])));
var SearchBarInput = /*#__PURE__*/styled.input(_templateObject3$b || (_templateObject3$b = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 400px;\n  height: 2rem;\n  box-sizing: border-box;\n  padding-left: 3em;\n  background: ", ";\n  border-radius: 3px;\n  border: none;\n  &:focus {\n    border: none;\n    outline: none !important;\n    border-color: #719ece;\n    box-shadow: 0 0 10px #719ece;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
});

var _templateObject$j, _templateObject2$g;
var ResultMenuContainer = /*#__PURE__*/styled.div(_templateObject$j || (_templateObject$j = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: absolute;\n  width: 400px;\n  background: ", ";\n  padding: 1em;\n  margin-top: 10px;\n  z-index: 1000;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.components.header.background;
});
var ResultMenuSplitter = /*#__PURE__*/styled.div(_templateObject2$g || (_templateObject2$g = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 1px;\n  background: ", ";\n  opacity: 0.7;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white;
});

var ResultMenu = function ResultMenu(props) {
  return React__default.createElement(ResultMenuContainer, null, React__default.createElement("div", null, "dskdsds"), React__default.createElement("div", null, "dskdsds"), React__default.createElement("div", null, "dskdsds"), React__default.createElement(ResultMenuSplitter, null), React__default.createElement("div", null, "dskdsds"), React__default.createElement("div", null, "dskdsds"), React__default.createElement("div", null, "dskdsds"));
};

var SearchBar = function SearchBar(props) {
  var _props$t = props.t,
      t = _props$t === void 0 ? function (text) {
    return text;
  } : _props$t;
  var onBlur = props.onBlur;

  var _useState = useState(true),
      collapse = _useState[0],
      setCollapse = _useState[1];

  var focusOut = function focusOut(e) {
    if (onBlur) onBlur();
    setCollapse(true);
  };

  var onkeydown = function onkeydown(e) {
    setCollapse(e.target.value.trim().length > 0 ? false : true);
  };

  return React__default.createElement(SearchBarWrapper, {
    onBlur: focusOut
  }, React__default.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React__default.createElement(SearchBarInput, {
    placeholder: t('recherche'),
    onChange: onkeydown
  }), React__default.createElement(SearchBarIcon, null, React__default.createElement(FontAwesomeIcon, {
    icon: faMagnifyingGlass,
    className: "fa-regular fa-1x",
    style: {
      opacity: 1,
      color: 'gray'
    }
  }))), !collapse && React__default.createElement(ResultMenu, null));
};

var _templateObject$k, _templateObject2$h, _templateObject3$c;
var BarMenuContainer$1 = /*#__PURE__*/styled.div(_templateObject$k || (_templateObject$k = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: relative;\n  & .hamberguer-button {\n    &:hover {\n      cursor: pointer;\n    }\n  }\n\n  & .bar-menu-hide {\n    @media ", " {\n      display: none;\n    }\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.devices.tabletgtM;
});
var BarMenuBody$1 = /*#__PURE__*/styled.div(_templateObject2$h || (_templateObject2$h = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: absolute;\n  width: 248px;\n  top: 30px;\n  left: -200px;\n  background: ", ";\n  padding: 30px 20px;\n  z-index: 1000;\n\n  a {\n    text-decoration: none;\n  }\n\n  .language-item {\n    cursor: pointer;\n  }\n\n  div {\n    color: ", ";\n    line-height: ", ";\n    letter-spacing: ", ";\n    font-family: ", "; // \"Lato\", sans-serif;\n    font-weight: ", ";\n    font-size: ", ";\n    font-style: ", ";\n    opacity: 0.7;\n    margin: 20px 10px;\n\n    @media ", " {\n      padding-top: 4.5px;\n      line-height: ", ";\n      font-size: ", ";\n    }\n  }\n\n  /*  */\n  @media ", " {\n    top: 70px;\n    width: 300px;\n    left: -250px;\n    line-height: ", ";\n    font-size: ", ";\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.components.header.background;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.components.text.basic.menu.color;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.components.text.basic.lineHeight + "rem";
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.components.text.basic.letterSpacing + "px";
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.components.text.basic.font;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.components.text.basic.fontWeight;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.fontSize.small + "rem";
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.components.text.basic.fontStyle;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.devices.gttv;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.lineHeight.medium + 0.3 + "rem";
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.fontSize.medium + 0.3 + "rem";
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.devices.gttv;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.lineHeight.medium + "rem";
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.fontSize.medium + "rem";
});
var HamberguerFontAwesomeIcon$1 = /*#__PURE__*/styled(FontAwesomeIcon)(_templateObject3$c || (_templateObject3$c = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  /*  */\n  @media ", " {\n    line-height: ", ";\n    font-size: ", ";\n  }\n"])), function (_ref16) {
  var theme = _ref16.theme;
  return theme.devices.gttv;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.lineHeight.ml + "rem";
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.fontSize.ml + "rem";
});

var BQBarMenu = function BQBarMenu(props) {
  //const { t } = useContext(TranslationContext);
  //const [collapse, setCollapse] = useState(true);
  var items = props.items,
      mainMenuItems = props.mainMenuItems,
      defaultLocale = props.defaultLocale,
      activePage = props.activePage,
      _props$forceCollapse = props.forceCollapse,
      forceCollapse = _props$forceCollapse === void 0 ? true : _props$forceCollapse,
      _props$notifyChange = props.notifyChange,
      notifyChange = _props$notifyChange === void 0 ? function () {
    return 0;
  } : _props$notifyChange;

  var _useState = useState('fr'),
      locale = _useState[0],
      setLocale = _useState[1];

  var toggleCollapse = function toggleCollapse() {
    notifyChange();
  };

  var changeLanguage = function changeLanguage(lang) {
    var newLang = lang === 'fr' ? 'en' : 'fr'; //switchLocale(lang === 'fr' ? 'en' : 'fr');
    //setLocale(lang === 'fr' ? 'en' : 'fr');
    //toggleCollapse();

    var redirect = false;
    mainMenuItems.forEach(function (i) {
      if (i.key === activePage) {
        redirect = true;
        window.location.href = "/" + newLang + i.href;
      }
    });

    if (!redirect) {
      window.location.href = "/" + newLang + "/";
    }
  };

  useEffect(function () {
    var menuItems = null;

    var switchLanguage = function switchLanguage() {
      changeLanguage(locale);
    };

    if (window) {
      menuItems = document.querySelectorAll('.bar-menu-body > div');
      menuItems.forEach(function (item) {
        if (item.className === 'language-item') item.addEventListener('mousedown', switchLanguage); //else item.addEventListener("mousedown", mousedown);
      });
    }

    return function () {
      if (menuItems) {
        menuItems.forEach(function (item) {
          if (item.className === 'language-item') item.removeEventListener('mousedown', switchLanguage); //else item.removeEventListener("mousedown", mousedown);
        });
      }
    };
  }, [items]);
  useEffect(function () {
    setLocale(defaultLocale);
  }, [defaultLocale]);
  var localeLabel = locale === 'fr' ? 'English' : 'Français';
  return React__default.createElement(BarMenuContainer$1, {
    className: "bar-menu-container",
    tabIndex: 0
  }, React__default.createElement(HamberguerFontAwesomeIcon$1, {
    icon: faBars,
    className: "fa-regular fa-1x hamberguer-button",
    style: {
      opacity: 0.7
    },
    onClick: toggleCollapse
  }), !forceCollapse && React__default.createElement(BarMenuBody$1, {
    className: "bar-menu-body",
    tabIndex: 0
  }, items == null ? void 0 : items.map(function (item) {
    var _item$href;

    return item.type && item.type === 'lang' ? React__default.createElement("div", {
      className: "language-item",
      key: item.text === 'fr' ? 'English' : 'Français',
      onClick: function onClick() {
        return changeLanguage(locale);
      }
    }, React__default.createElement("a", null, localeLabel.toUpperCase())) : React__default.createElement("div", {
      className: item.canHide ? 'bar-menu-hide' : '',
      key: item.href,
      onClick: toggleCollapse
    }, React__default.createElement(CustomPathLink, {
      href: (_item$href = item.href) != null ? _item$href : '/#'
    }, item.text));
  })));
};

var _templateObject$l, _templateObject2$i;
var BQHeaderUl = /*#__PURE__*/styled.ul(_templateObject$l || (_templateObject$l = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n  gap: 3.5em;\n  z-index: 10;\n  padding: 0;\n  height: 100%;\n\n  @media ", " {\n    display: none;\n  }\n\n  & li.active {\n    //console border-bottom: 3px solid\n    border-bottom: 4px solid #efb850;\n    :hover {\n    }\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.devices.tabletM;
});
var BQHeaderUlDiv = /*#__PURE__*/styled.div(_templateObject2$i || (_templateObject2$i = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"])));

var BQHeaderItems = function BQHeaderItems(props) {
  var _props$items = props.items,
      items = _props$items === void 0 ? [] : _props$items,
      activeItem = props.activeItem,
      settedKey = props.settedKey,
      tabClicked = props.tabClicked,
      locale = props.locale,
      _props$selectedTab = props.selectedTab,
      selectedTab = _props$selectedTab === void 0 ? function (key) {
    return key;
  } : _props$selectedTab;

  var _useBbox = useBbox(),
      bbox = _useBbox[0],
      targetRef = _useBbox[1];

  var height = bbox.height;
  return React__default.createElement(BQHeaderUlDiv, null, React__default.createElement(BQHeaderUl, {
    ref: targetRef
  }, items.map(function (item, index) {
    var _item$text, _ref;

    return React__default.createElement("li", {
      key: _.uniqueId((_item$text = item.text) != null ? _item$text : ''),
      onClick: function onClick(e) {
        var _item$key;

        selectedTab((_item$key = item.key) != null ? _item$key : '');
      }
    }, React__default.createElement("div", {
      style: {
        zIndex: 50
      }
    }, React__default.createElement(CustomPathLink, {
      href: (_ref = "/" + locale + item.href) != null ? _ref : "/" + locale + "/#",
      className: "no-decoration"
    }, React__default.createElement(CollapseMenuItem, {
      text: item.text,
      collapse: settedKey === item.key ? false : true,
      opacity: tabClicked !== item.key ? 0.7 : 1,
      active: settedKey === item.key,
      color: item.color,
      notifyEvent: function notifyEvent(param) {
        var _item$key2;

        return selectedTab((_item$key2 = item.key) != null ? _item$key2 : '');
      },
      hidearrow: true
    }))), !item.disbaleCollapse && item.key === activeItem && height ? React__default.createElement("div", {
      className: "tab_content",
      style: {
        top: height + "px",
        zIndex: 1
      }
    }) : null);
  })));
};

var _templateObject$m, _templateObject2$j;
var LogoImage = /*#__PURE__*/styled.img(_templateObject$m || (_templateObject$m = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 185px;\n  object-fit: cover;\n  margin-top: 5px;\n\n  @media ", " {\n    width: 300px;\n    object-fit: cover;\n    max-height: 95px;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.devices.gttv;
});
var LogoDiv = /*#__PURE__*/styled.div(_templateObject2$j || (_templateObject2$j = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 200px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n"])));

var img = "data:image/png;base64,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AAAgI8IgAAAAgIwIgwAAAAAyIgwCAAAAyIgwCAAAACAjwiAAAACAjAiDAAAAADIiDAIAAADIiDAIAAAAICPCIAAAAICMCIMAAAAAMiIMAgAAAMiIMAgAAAAgI8IgAAAAgIwIgwAAAAAyIgwCAAAAyIgwCAAAACAjwiAAAACAjAiDAAAAADIiDAIAAADIiDAIAAAAICPCIAAAAICMCIMAAAAAMiIMAgAAAMiIMAgAAAAgI8IgAAAAgIwIgwAAAAAyIgwCAAAAyIgwCAAAACAjwiAAAACAjAiDAAAAADIiDAIAAADIiDAIAAAAICPCIAAAAICMCIMAAAAAMiIMAgAAAMiIMAgAAAAgI8IgAAAAgIwIgwAAAAAyIgwCAAAAyIgwCAAAACAjwiAAAACAjAiDAAAAADIiDAIAAADIiDAIAAAAICPCIAAAAICMCIMAAAAAMiIMAgAAAMiIMAgAAAAgI8IgAAAAgIwIgwAAAAAyIgwCAAAAyIgwCAAAACAjwiAAAACAjAiDAAAAADIiDAIAAADIiDAIAAAAICPCIAAAAICMCIMAAAAAMiIMAgAAAMiIMAgAAAAgI8IgAAAAgIwIgwAAAAAyIgwCAAAAyIgwCAAAACAjwiAAAACAjAiDAAAAADIiDAIAAADIiDAIAAAAICPCIAAA4P9vxw4EAAAAGAbdn/ogK4wACJFBAAAAACEyCAAAACBEBgEAAACEyCAAAACAEBkEAAAAECKDAAAAAEJkEAAAAECIDAIAAAAIkUEAAAAAITIIAAAAIEQGAQAAAITIIAAAAIAQGQQAAAAQIoMAAAAAQmQQAAAAQIgMAgAAAAiRQQAAAAAhMggAAAAgRAYBAAAAhMggAAAAgBAZBAAAABAigwAAAABCZBAAAABAiAwCAAAACJFBAAAAACEyCAAAACBEBgEAAACEyCAAAACAEBkEAAAAECKDAAAAAEJkEAAAAECIDAIAAAAIkUEAAAAAITIIAAAAIEQGAQAAAITIIAAAAIAQGQQAAAAQIoMAAAAAQmQQAAAAQIgMAgAAAAiRQQAAAAAhMggAAAAgRAYBAAAAhMggAAAAgBAZBAAAABAigwAAAABCZBAAAABAiAwCAAAACJFBAAAAACEyCAAAACBEBgEAAACEyCAAAACAEBkEAAAAECKDAAAAAEJkEAAAAECIDAIAAAAIkUEAAAAAITIIAAAAIEQGAQAAAITIIAAAAIAQGQQAAAAQIoMAAAAAQmQQAAAAQIgMAgAAAAiRQQAAAAAhMggAAAAgRAYBAAAAhMggAAAAgBAZBAAAABAigwAAAABCZBAAAABAiAwCAAAACJFBAAAAACEyCAAAACBEBgEAAACEyCAAAACAEBkEAAAAECKDAAAAAEJkEAAAAECIDAIAAAAIkUEAAAAAITIIAAAAIEQGAQAAAITIIAAAAIAQGQQAAAAQIoMAAAAAQmQQAAAAQIgMAgAAAAiRQQAAAAAhMggAAAAgRAYBAAAAhMggAAAAgBAZBAAAABAigwAAAABCZBAAAABAiAwCAAAACJFBAAAAACEyCAAAACBEBgEAAACEyCAAAACAEBkEAAAAECKDAAAAAEJkEAAAAECIDAIAAAAIkUEAAAAAITIIAAAAIEQGAQAAAITIIAAAAIAQGQQAAAAQIoMAAAAAQmQQAAAAQIgMAgAAAAiRQQAAAAAhMggAAAAgRAYBAAAAhMggAAAAgBAZBAAAABAigwAAAABCZBAAAABAiAwCAAAACJFBAAAAACEyCAAAACBEBgEAAACEyCAAAACAEBkEAAAAECKDAAAAAEJkEAAAAECIDAIAAAAIkUEAAAAAITIIAAAAIEQGAQAAAITIIAAAAIAQGQQAAAAQIoMAAAAAQmQQAAAAQIgMAgAAAAiRQQAAAAAhMggAAAAgRAYBAAAAhMggAAAAgBAZBAAAABAigwAAAABCZBAAAABAxbYDionpEah29KoAAAAASUVORK5CYII=";

var img$1 = "data:image/png;base64,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acKfL+0cBgAAlEgDaaA0O1VV3bA0DAAAKJUwCAAAAKAglokBAAAAFEQYBAAAAFAQYRAAAABAQYRBAAAAAAURBgEAAAAURBgEAAAAUBBhEAAAAEBBhEEAAAAABREGAQAAABREGAQAAABQEGEQAAAAQEGEQQAAAAAFEQYBAAAAFEQYBAAAAFAQYRAAAABAQYRBAAAAAAURBgEAAAAURBgEAAAAUBBhEAAAAEBBhEEAAAAABREGAQAAABREGAQAAABQEGEQAAAAQEGEQQAAAAAFEQYBAAAAFEQYBAAAAFAQYRAAAABAQYRBAAAAAAURBgEAAAAURBgEAAAAUBBhEAAAAEBBFwoE2QAABatJREFUhEEAAAAABREGAQAAABREGAQAAABQEGEQAAAAQEGEQQAAAAAFEQYBAAAAFEQYBAAAAFAQYRAAAABAQYRBAAAAAAURBgEAAAAURBgEAAAAUBBhEAAAAEBBhEEAAAAABREGAQAAABREGAQAAABQEGEQAAAAQEGEQQAAAAAFEQYBAAAAFEQYBAAAAFAQYRAAAABAQYRBAAAAAAURBgEAAAAURBgEAAAAUBBhEAAAAEBBhEEAAAAABREGAQAAABREGAQAAABQEGEQAAAAQEGEQQAAAAAFEQYBAAAAFEQYBAAAAFAQYRAAAABAQYRBAAAAAAURBgEAAAAURBgEAAAAUBBhEAAAAEBBhEEAAAAABREGAQAAABREGAQAAABQEGEQAAAAQEGEQQAAAAAFEQYBAAAAFEQYBAAAAFAQYRAAAABAQYRBAAAAAAURBgEAAAAURBgEAAAAUBBhEAAAAEBBhEEAAAAABREGAQAAABREGAQAAABQEGEQAAAAQEGEQQAAAAAFEQYBAAAAFEQYBAAAAFAQYRAAAABAQYRBAAAAAAURBgEAAAAURBgEAAAAUBBhEAAAAEBBhEEAAAAABREGAQAAABREGAQAAABQEGEQAAAAQEGEQQAAAAAFEQYBAAAAFEQYBAAAAFAQYRAAAABAQYRBAAAAAAURBgEAAAAURBgEAAAAUBBhEAAAAEBBhEEAAAAABREGAQAAABREGAQAAABQEGEQAAAAQEGEQQAAAAAFEQYBAAAAFEQYBAAAAFAQYRAAAABAQYRBAAAAAAURBgEAAAAURBgEAAAAUBBhEAAAAEBBhEEAAAAABREGAQAAABREGAQAAABQEGEQAAAAQEGEQQAAAAAFEQYBAAAAFEQYBAAAAFAQYRAAAABAQYRBAAAAAAURBgEAAAAURBgEAAAAUBBhEAAAAEBBhEEAAAAABREGAQAAABREGAQAAABQEGEQAAAAQEGEQQAAAAAFEQYBAAAAFEQYBAAAAFAQYRAAAABAQYRBAAAAAAURBgEAAAAURBgEAAAAUBBhEAAAAEBBhEEAAAAABREGAQAAABREGAQAAABQEGEQAAAAQEGEQQAAAAAFEQYBAAAAFEQYBAAAAFAQYRAAAABAQYRBAAAAAAURBgEAAAAURBgEAAAAUBBhEAAAAEBBhEEAAAAABREGAQAAABREGAQAAABQEGEQAAAAQEGEQQAAAAAFEQYBAAAAFEQYBAAAAFAQYRAAAABAQYRBAAAAAAURBgEAAAAURBgEAAAAUBBhEAAAAEBBhEEAAAAABREGAQAAABREGAQAAABQEGEQAAAAQEGEQQAAAAAFEQYBAAAAFEQYBAAAAFAQYRAAAABAQYRBAAAAAAURBgEAAAAURBgEAAAAUBBhEAAAAEBBhEEAAAAABREGAQAAABREGAQAAABQEGEQAAAAQEGEQQAAAAAFEQYBAAAAFEQYBAAAAFAQYRAAAABAQYRBAAAAAAURBgEAAAAURBgEAAAAUBBhEADA/7ZjBwIAAAAMg+5PfZAVRgAAITIIAAAAIEQGAQAAAITIIAAAAIAQGQQAAAAQIoMAAAAAQmQQAAAAQIgMAgAAAAiRQQAAAAAhMggAAAAgRAYBAAAAhMggAAAAgBAZBAAAABAigwAAAABCZBAAAABAiAwCAAAACJFBAAAAACEyCAAAACBEBgEAAACEyCAAAACAEBkEAAAAECKDAAAAAEJkEAAAAECIDAIAAAAIkUEAAAAAITIIAAAAIEQGAQAAAITIIAAAAIAQGQQAAAAQIoMAAAAAQmQQAAAAQIgMAgAAAAiRQQAAAAAhMggAAAAgRAYBAAAAhMggAAAAgBAZBAAAABAigwAAAABCZBAAAABAiAwCAAAACJFBAAAAACEyCAAAACBEBgEAAACEyCAAAACAEBkEAAAAECKDAAAAACq2HWjuFKw2Nng9AAAAAElFTkSuQmCC";

var get_Logo = function get_Logo(logoMode) {
  switch (logoMode) {
    case 'non-color-dark':
      return img$1;

    case 'color-dark':
      return img;

    default:
      return img$1;
  }
};

var BQLogo = function BQLogo(props) {
  var logoMode = props.logoMode;
  var logo = get_Logo(logoMode);
  return logoMode ? React__default.createElement(CustomPathLink, {
    href: "/#"
  }, React__default.createElement(LogoDiv, null, React__default.createElement(LogoImage, {
    className: "logo",
    src: logo,
    alt: "logo"
  }))) : null;
};

var BQUser = function BQUser(props) {
  var user = props.user;

  var _useState = useState(true),
      collapse = _useState[0],
      setCollapse = _useState[1];

  useEffect(function () {
    if (user) {
      var bqheader = document.querySelector('.bq-user');

      var mouseleave = function mouseleave(event) {
        console.log('***** mouseleave ****');
        setCollapse(function (oldValue) {
          return true;
        });
      };

      var mouseenter = function mouseenter(event) {
        //console.log('***** mouseenter ****');
        setCollapse(function (oldValue) {
          return false;
        });
      };

      if (bqheader) {
        bqheader.addEventListener('mouseleave', mouseleave);
        bqheader.addEventListener('mouseenter', mouseenter); //bqheader.addEventListener('click', click);
      }

      return function () {
        if (bqheader) {
          bqheader.removeEventListener('mouseleave', mouseleave);
          bqheader.removeEventListener('mouseenter', mouseenter); //bqheader.removeEventListener('click', click);
        }
      };
    }

    return function () {};
  }, [user]);
  if (!user) return null;
  var name = user.name,
      lastname = user.lastname,
      role = user.role;
  return React__default.createElement("div", {
    style: {
      padding: '8px',
      width: 'fit-content',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'visible'
    },
    className: "bq-user bar-menu-container",
    tabIndex: 0
  }, React__default.createElement(FontAwesomeIcon, {
    icon: faUser,
    className: "fa-regular fa-1x hamberguer-button",
    style: {
      opacity: 0.7
    }
  }), !collapse && React__default.createElement("div", {
    style: {
      background: '#353535',
      whiteSpace: 'nowrap',
      position: 'absolute',
      top: '40px',
      right: '-10px',
      width: 'fit-content',
      zIndex: 999999,
      borderRadius: '6px',
      padding: '8px',
      display: 'flex',
      flexDirection: 'column'
    },
    className: "hover:cursor-pointer"
  }, React__default.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, name, " ", lastname), React__default.createElement("span", {
    style: {
      fontStyle: 'italic',
      fontSize: '14px',
      lineHeight: '20px'
    }
  }, role)));
};

var _templateObject$n;
var BQHeaderContainer = /*#__PURE__*/styled.nav(_templateObject$n || (_templateObject$n = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  background: ", ";\n  color: ", ";\n  height: 50px;\n  @media (max-width: 1500px) {\n    margin-left: 10px;\n  }\n\n  & a {\n    text-decoration: none;\n    color: inherit;\n    height: 100%;\n    display: flex;\n    align-items: center;\n\n    padding: 0 0.25rem;\n    @media ", " {\n      padding: 1rem 0.25rem;\n    }\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.components.header.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.components.text.menu.color;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.devices.gttv;
});

var locales = {
  en: {
    Atlas: 'Atlas',
    Indicateurs: 'Indicators',
    Découverte: 'Discovery',
    'Inventaire terrain': 'Field surveys',
    Accueil: 'Home',
    'À propos': 'About us',
    Équipe: 'Team',
    Documentation: 'Documentation',
    'Contactez-nous': 'Contact us',
    submit: 'Login',
    signout: 'Logout',
    biodiveristy_stories: 'Biodiveristy Stories',
    biobalado: 'Bio-Balados',
    nouvelles: 'News',
    opportunites: 'Opportunities'
  },
  fr: {
    Indicateurs: 'Indicateurs',
    Découverte: 'Découverte',
    'Inventaire terrain': 'Inventaires terrain',
    Accueil: 'Accueil',
    'À propos': 'À propos',
    Équipe: 'Équipe',
    Documentation: 'Documentation',
    'Contactez-nous': 'Contactez-nous',
    Atlas: 'Atlas',
    submit: 'Se connecter',
    signout: 'Se déconnecter',
    biodiveristy_stories: 'Histoires de biodiversité',
    biobalado: 'Bio-Balados',
    nouvelles: 'Nouvelles',
    opportunites: 'Opportunités'
  }
};
var BQHeader = function BQHeader(props) {
  //const logoUrl = props.logoUrl ?? `/images/logo-dark-mode-fr.png`;
  var _props$locale = props.locale,
      locale = _props$locale === void 0 ? 'fr' : _props$locale,
      switchLocaleFn = props.switchLocaleFn,
      activePage = props.activePage,
      setActivePage = props.setActivePage,
      _props$logoMode = props.logoMode,
      logoMode = _props$logoMode === void 0 ? 'non-color-dark' : _props$logoMode,
      _props$headerWidth = props.headerWidth,
      headerWidth = _props$headerWidth === void 0 ? '1400px' : _props$headerWidth,
      user = props.user;

  var _useState = useState(true),
      collapse = _useState[0],
      setCollapse = _useState[1];

  var items = [{
    href: "/",
    text: locales[locale]['Accueil'],
    key: 'accueil',
    color: '#efb850'
  }, {
    href: "/atlas/",
    text: locales[locale]['Atlas'],
    key: 'atlas',
    "default": true,
    color: '#d88219'
  }, {
    href: "/inventaires/",
    text: locales[locale]['Inventaire terrain'],
    key: 'inventaire_terrain',
    color: '#57776e'
  }, {
    href: "/indicateurs/",
    text: locales[locale]['Indicateurs'],
    key: 'indicateur',
    "default": true,
    color: '#a75822'
  }, {
    href: "/decouverte/",
    text: locales[locale]['Découverte'],
    key: 'decouverte',
    "default": true,
    color: '#7ab5b0'
  }];
  var barMenuItems = [{
    href: "https://biodiversite-quebec.ca/" + locale + "/",
    text: locales[locale]['Accueil'],
    canHide: true
  }, {
    href: "https://biodiversite-quebec.ca/" + locale + "/atlas/",
    text: locales[locale]['Atlas'],
    canHide: true
  }, {
    href: "https://biodiversite-quebec.ca/" + locale + "/inventaires/",
    text: locales[locale]['Inventaire terrain'],
    canHide: true
  }, {
    href: "https://biodiversite-quebec.ca/" + locale + "/indicateurs/",
    text: locales[locale]['Indicateurs'],
    canHide: true
  }, {
    href: "https://biodiversite-quebec.ca/" + locale + "/decouverte/",
    text: locales[locale]['Découverte'],
    canHide: true
  }, {
    href: "https://biodiversite-quebec.ca/" + locale + "/histoires/",
    text: locales[locale]['biodiveristy_stories'],
    canHide: true
  }, {
    href: "https://biodiversite-quebec.ca/" + locale + "/balados/",
    text: locales[locale]['biobalado'],
    canHide: true
  }, {
    href: "https://biodiversite-quebec.ca/" + locale + "/nouvelles/",
    text: locales[locale]['nouvelles']
  }, {
    href: "https://biodiversite-quebec.ca/" + locale + "/opportunites/",
    text: locales[locale]['opportunites']
  }, {
    href: "https://biodiversite-quebec.ca/" + locale + "/documentation/",
    text: locales[locale]['Documentation']
  }, {
    href: "https://biodiversite-quebec.ca/" + locale + "/a_propos/",
    text: locales[locale]['À propos']
  }, {
    href: "https://biodiversite-quebec.ca/" + locale + "/equipe/",
    text: locales[locale]['Équipe']
  }, {
    href: "https://biodiversite-quebec.ca/" + locale + "/contactez_nous/",
    text: locales[locale]['Contactez-nous']
  }, {
    text: locale === 'fr' ? 'EN-English' : 'FR-Français',
    type: 'lang'
  }, {
    href: user ? "/" + locale + "/logout" : "/" + locale + "/login",
    text: user ? locales[locale]['signout'] : locales[locale]['submit']
  }];

  var selectedTab = function selectedTab(tabKey) {
    if (setActivePage) setActivePage(tabKey);
    setCollapse(function (oldValue) {
      return true;
    });
  };

  useEffect(function () {
    var bqheader = document.querySelector('.bq-header');

    var mouseleave = function mouseleave(event) {
      setCollapse(function (oldValue) {
        return true;
      });
    };

    if (bqheader) {
      bqheader.addEventListener('mouseleave', mouseleave);
      bqheader.addEventListener('click', mouseleave);
    }

    return function () {
      if (bqheader) {
        bqheader.removeEventListener('mouseleave', mouseleave);
        bqheader.removeEventListener('click', mouseleave);
      }
    };
  }, []);
  return React__default.createElement(Header$1, {
    onFocus: function onFocus() {
      setCollapse(function (oldValue) {
        return true;
      });
    },
    headerWidth: headerWidth
  }, React__default.createElement(BQLogo, {
    logoMode: logoMode
  }), React__default.createElement(BQHeaderItems, {
    items: items,
    settedKey: activePage,
    selectedTab: selectedTab,
    locale: locale,
    tabClicked: activePage
  }), React__default.createElement("div", {
    className: "flex justify-center items-center",
    style: {
      display: 'flex',
      justifyContent: 'right',
      gap: '20px',
      width: '200px',
      marginRight: '30px'
    }
  }, React__default.createElement(BQUser, {
    user: user
  }), React__default.createElement(BQBarMenu, {
    items: barMenuItems,
    mainMenuItems: items,
    activePage: activePage,
    switchLocale: switchLocaleFn,
    defaultLocale: locale,
    forceCollapse: collapse,
    notifyChange: function notifyChange() {
      setCollapse(!collapse);
    }
  })));
};

var Header$1 = function Header(props) {
  var children = props.children,
      headerWidth = props.headerWidth;
  return React__default.createElement(AppModeProvider, null, React__default.createElement(PaddingContainerwithBg, null, React__default.createElement(BQHeaderContainer, {
    className: "bq-header",
    tabIndex: -1,
    style: {
      width: headerWidth
    }
  }, children)));
};

var img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAvcAAAEtCAYAAACMMk9vAAAXjnpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjarZppciS5coT/4xQ6AvblOAgsZrqBjq/PUWSru6fn2ZM0w2lWkazKREZ4+IIsd/7rP6/7D/4rNWSXS+t11Or5L4884uRJ95//5vsefH7f33+3+fj1219+7+L+ehp5TDymzx96/TyG799/veH7MUyelZ8O1NfXH+zXP4z8eYz9twN9nShpRVrb/jrQ+DpQip8/hK8DzM9l+Tp6+/kS7Hwev97/KQP/nL718daig33+9tvPuVG9XThPivGkkDzfY8qf1yT9Cy5Nngy+h9R4YeBLzwvfc2pfK6Egf6qT/2lV7veu/Hj2W1dq+frrb01J9fMKxy9+LWb98fjH34fy5+K7V+KfzpzWDzj88vu5vtvwa5H1797d3b3nc3UzV0pavy7q+xLfM15olDy9t1W+Gv8Kz9v7Gnx1B3p1ru2XN75WGCHSlhty2GGGG857XGGxxBxPpCUxxkWj9LtOi0ZcyTs6lPUVbmx0b6dOMxftTfw2/lhLeOcd73QrdE68A6+MgYMF3hGdvv0TX397oHsF+RBUzFperVhXFERZhjqn77yKFoT7jaPyCvz99ft/6muig+WVuXOB09vnEFbCF7aEo/QanXhh4fHT5ND21wEoEecuLAbU5+ArsA81+BZjC4E6dvozOVBnaKLRglBK3Kwy5pQqzelR5+Y9LbzXxhI/v4azaERJNTVaw3jRKxEb+Gm5g6FZUsmllFpa6WWUWVPNtdRaWxX5zZZabqXV1lpvo82eeu6l1956d330OeJIkGMZdbTRxxhzctLJkSfvnrxgTouWLFuxas26DZsL+Ky8yqqrre7WWHPHnTY8setuu++x5wkHKJ18yqmnnX7GmReo3XTzLbfedvsdd/7oWnCftv7l69/vWvjuWnyd0gvbj67x1ta+DxFEJ0U9o2MxBzre1AEAHdUz30PO0al16pkfkakokVUWNWcHdYwO5hNiueFH7/6nc7/0zeX8/+pb/O6cU+v+ic45te5vOvfXvv2ha1tqs3xyr0MaQxXVpystvTN2/ocW//JoYVKwWnvylUUBcZtjRZsOZsq9nzYvtV11+7YtjbnHlDjqCP/eo+v/yzf88dHWdelEbMTVJR3orqdr8ebVELax1hi1hXWBYLM760m7t3rsjLLL7SDg9rZSYRCczZ0P0tMX14zEjmuH4p5+1+WAu3HoXi3vAZTvPDSIOqGhY3j6vpe1uywP52+kLL5NvoGfMueqI4c1s394yDGZpWRab92Fl8VwC+sACeEmv2qLYC24nTlkmbeM28s9yRJnnX0HKyArTdzKGP3keu+oXPludDzQ+MK7ygLvZ4OQ7U7MyFC/2AwDH1pP3ydPVms4BbsrMHfh5sRZCgJC/dK01MK4ZfPnvqedYG4PRmSmm9IZwgkdSG2eTBMAFWevE/nbdlps64yxDqtYiMPxLZVp5czQewmOk9xuCQRxYNYSjcJ6y3Njagw4nRn96TGPVFFCChHG6oFXp3k5W7ydvqTtGmx0WX0vq1hhttDdhQiaWTgGocPcl+JMPw6zPesOhX72bgvDyWAeWH3u6oZVFiMZp8CQRBulXsbMh9TnRq65CLoFvdMmjmylWhmz9ZVsxc2UUr+TvZt+Gof9Cas2UP56O7oN2GyCKcCxEvjJcEBfdgqIGBGUrjVt1XT34UB57w5YO21vCwTEAY/6A/rgnsrVZk4UD+c249gn805E79i4m2kdKJwPy/HL2UO3XEIu8qJ/eWxp4xsvIrnB+IUFbRukU84FXqPnWsGFu2uikfQWR3w2DajztFt3LMbbYMqpR5qV4bOQFhQcRs1ALNcES0HnC8BHN9E3mA4eZCpzDnPsPlqqO1WOW3ar4wT4EZKbfqdbKrO5b2ZUOGMJNhtOZ5tbFXzuu0VogIAVdcxvocfQMnIjXgj+9jHXKRvCBiT0r1isyereNfYN3Q534DBwVvfZO43DiQAQHRh7fdFN/a5X67Spduh4HmaTdXhAxOtCuclVXgIBbwPmt8C1rCBHELYfPjguQ9cs0StqekcH1XQfUqFtEYcIH0zG0MXMoI9DSzIvizOO1cRbGyayMUtuwt6prVQ/U8MxMqeoSSsXm1in4VIWS3Tb1xx7mWldkSFo5mC2TNJSsbo2w75RclWhk3bJE+hcSNKolCF7ZNggDIitkibm1iVZbKcUxptr1s8L+MJ5q8hR1QXHJSrCcG5sISTAhfKvyJMVR9VCQzzROSiqJrhroaGn5QUrNBZ+ulVIIDMkdIZHT4n25TXKUAmk0urh0sPPClJnAGSzLmSQaYANbpTb71y0T5tFqvL0bQuwyNuq9G3ChhFP4gpE5iXFcPnBv/JqXkNvQCDEVulIaOOKn2a+1mgDtEZhYuSUFWex9wDirnUGSQKT12ho9sZ4AFze3iFxSrknswaNbcup3kDBsEfJt7Im0AZcB9uB9UtL3avQRATGwUOIefM7Yt2E2aHyilGhHCfNAvZ599it6cp8UlUvTL1WwB/dGg4EAPcRjG6jXNYAWQT+CAwQzafXRVgZiSpQT0M5MIdZlHsuLMzys/Pn0Gno2XeoSCaHCU6lWdvMZ1wHioblpvJbixCIl71iCBL0cDzYnqiREUUxKR0FhdY9la0B3MPfrBj2XdBFBxDQBVGor8IYYR+R3Kv0lYlOcG9PxQ/HsAoeDF4fKBDO0Dp0ChPRAg5ZUWT8QGO6JBHA4jBgliPVwbilYAQDiuEwjJuXXSMljNuoMaxa0YvQpBS1Ib6cCtOEZjeD/TNDFhlc5mzJZTGVkIXbk4sKvAGaCAsAHM9KmhQLKGXIuyK5mFmKy5TxL6Dgp8aA5esbXYPAG6524kMD3oAGgyBMQEeAsKSAkTr0TuiYuUf4CubHMvIDzoVznrdjQFIUieTmKCDxUhBKFJEZjdWY8ISPZV04aJxEHIQjw6POYmEcIIdBLmczcpM3geFYnRzAHRwSIMHQgxJF7A0jmWk/TITrCFzKVHV501ytS0GpJHEUWg0JLr+EYzJYLsq61P/S7EvTsS1hSpjXvseYxufoGDMUD6U7nRJiSD2XfeEz1lFdsINg+MT3MLAW2cs+YcIwv10nOXcOsIu9grJLkpBAwO1VoWEyYFPrFZ8dPVM80AX5eOLA0OnDpPUFb7I21kBMDxJH7RH5Lph64kPC9j28L9TOo7QAGLEDLRdM7usRGCNSVTQDM7kKSscTis+YMdMQJnNM9YL8E3zcxC3ZcGwe+4RVQ/gzpFwGR2LpUFC1hcGqFADuwLAOy52Aq4xL8Kea6C5N3lA/DFkJGxQdjfNYRw4DYNIk7tBOFDedNQhWBJ0OajV6HIcFguEm35ORTvB6t8v0hKH1izVtaLTX41e/6LFoH5TdCFvgYTgG/oX1QolrXMUyq4nwgSAQQFyMuDrebAETiVWDf0jmLBIDx2Aj0JRCckW/fUp5AP9HbwwJAi+Lhnym7CjFzljIVuH9M8UAGwsSJAoQDw5lsiJIaHhtcIGOIX+EyTd4xMs6Md7TXN6y4YStbLWEjv32mARtGB15+e57C1t2cmCtCQ4RzqkQ8cBkMv5ZPOqZQYdoYF4wyT4NKPSuBr2Fd31Xs1oXBgCCBhMbdie1oTJ4bXJUUPI4GNTuS3OYLIy5XJthLq4hs5wS+gqPBWORJpKUY9wZ7dQMz4nfQzjIFjBg4uW4ELfwPqCH5NICtLhhHMBB5GbwuIxsEeVGXXlzMECpBEH7WR5ukPDA1ZDcSUewneg/IYWE4UBNRxFgPAN8iQDCNzW3gyvD7SkPEREwQRAcVoFh9ETVZA6YT9DIFUz4L0CAZzaskIh6ZoqUO+aXYxl5i5SwQei1TWn5Ey0SozBc1EjbYJm4vzYOqbKkmjM6ANNwHpM2Q1LUERdAcPID5Eb0ACZkuc9holo3g2y8KK5VpaXmFFHm1cY4JUqxCWTYLFlKeIikHxUDFZD643Jy36CXXFqCU85hEUeSEUEU15VYA1Mr2eb8ZDh8IEDTVdBZghXAJ1BgoRd0CZ9fLs2AdME8jkiyxIGTZUNntBrDNOS5iAAEfvQCKgjKesQhZrVlMgnURqEILEi20koiheZgVxEPgvEbkJWEB2Tspy66eFYVz2bwYUzmzFqHrBcnQw91LqLoZSkDa7d5XNqLCbUqbXi53qE4pqTII0SNrtCcBUUGODPKC0qbDaNFs++FV7BZKAUeAPNhIiiwjUoR2TE35Cs80e1oGScEgG0MhhRLACpTIm5NR+KJ8fn7PSr6jegdukOIHnirdNuLzsTser18szSmwskY5tVY3MpktDinK7dpNqO2/GrBGMd3UHwiJ71oWiZdI5hx8UeKu1g7L6dljMxh+MpLwdH1C6QGTEOVIZKskejaw4oJbbvK+nFxPAtcydZU76i20kT4c2hruSp3uB3waG0uQjA0OHGKSAnXXieHEqoxV/3SF4gEh8SgwXEllw2tYboKxlpDmRxvZxE4H3wS4wag65Y7YTpF5V7bZRuPA9XATdSnJ4aB5Q9iBANPC55qunBl9kHkzHAfCQfy2Tq4PNpQUWKw9AaUw5U5jEmj8qjiYO54NcKSbnRxKwSYcVbZOgqHz/E8ozL8yuQ68DspTzLeFDpZhWkLhzBALNTWhnbUXOk3HBz95pX4/kB50HqsuDEV55WOw2dlntPP8iT/rARKMbFQ5404ZEGmzd28vI9fSFUwSKTKuEH+QcA7gLegLJUfGWFmnsnnTERgicXiuMQrYlabFA6rDFMwsFQO+NGONp79QzxoKXqNOrbqn4vDXShGGbGY4Qlcw4WhHUwmjjUJdyG0N23bod6JypHy5IrBHnKA6pTBK9APnqLpAJPUlrVvF7B+k9nElcFzECam6gTZX3DPyIYCweGz8UKGTGOcmeI9G7GsquePOydUMaS0niQRxbBJPjHniEWESYhdGccnO0i2gcHJAgAK7GACu6gnaFMLecEU33actgoLq++YeHJfl/eAUyAi3WwJGNkRyyBuh8QkYxSqDUX8zvXgpKXnymnTUfPk06JmVG8xXv1gGQCn9uv4YWg/FUetuJpyDiQ5ckgm+3EVwAy+vgZDOzwOIMYGEjTRGYq8jvYTB9evYDXua4JcIFYI0wISZRY4GVLBNFE++jRdAA5R941gVhMmULsFGXCVykjyUFuaiEJepsuC9QEjYGFXpxOBi4DLy3LwO880hVZIl1c7H614bR/sjVsgnbMMXKieJiy5XELVJpdC68FLlCbL47STGbXRgR/XnhinJEISHEhAJrXsxffAvHoyE9GQAuF0Tbt6SFuJHtEhDsPZHjx0BTVctDaz4eQK4nBrU0UAxour0RRkDoL1ppCco5EB8WqMJyQHNzqoHeor6ljTxk4OxFBy/JhAIDQaB0thLng7+NPGgFJWnZvB0nYIkoQu2XQJ6wlMWR0DA7PA3/A2wAYOvE+RNOhuGhPD/6Fq+q7c7TRlZHQAFzYw7AOmhrea7hoooXASSB4TTT+QP1CVZpvC79ml0QnQN8iJ1wAFUYMf6F5N7mul2sc3/u2O5+c1ZGRGw45sdtKSbyZbQbQZadfOZt2MMySNQ3/GyOE39RqABbyZXeuHkMUUxs3lAIbjcyFT+Ib33lOzop1K7TKR26GqLQuNYYcPWtKuP81B/qBzqDbppgNOr7+Nrrg1hyVqW4vgPPVy7V+wAq5e25eszVFZRT/cCYVEKkIlrohDnmqxlpMJNDhe4A7m0fWt1MHlKQ2zgA2jTm+O9ma6n78Ai/OjOZXTRDlJJoPFIGFt4FqmNBuQ3kgi8YN8xHU81mzdEYSlQnjKoB0aeixyhixwhmPJhinMtIo4PhcAIDG9xGVY/FQOk+RM14UhMWoMNNFfLjRCvFpTqwGejQXSQ8JADtoA/jk0XoASqDHU1XZqJQL7gImgyD2SFkLYoeOwoOlL7oUgEWhMA00DTchmLrn5sugOJmqQ34ocFWEGPHMgekkMNd4JZUE8a2oXbeyehlQFPsNHP4wTqAh5mqFKBuOIlVoQhF6VXMbynkOHyYMxUC4x+5HNIp8qBwXtlw0NxFYJETHgf41JGqmDDQyf9lXdPLwTYCVo56I/hK/VIT6EtkClOZK2UQrF4VHrlB3B2AGFlj7ZhRRL8mVoI/xlkH48Uk5SK4ZEhxGziFUJLK2IHtF2XGHkhw3iGSasl/YUeurWG5L9cMAVgWGDsuDkxTUBi6BNUAgMr4Mu0VyIifCpzeqCDB1C4vUVZ9mz725IcsF9rkCf1quO2sGmboaR41nXAiOkZkdisEvVLToQMQS9HjZTcryDecArIlF20hYk8tcuXq8vSowQDczLIT8rl2j7HFJBjyZuG27EGU+koul+P6SEhcLraqT7wBjSQgZNexKx0NN0DyGjBd3Z0daOmrdBd9lnIr9BG6J+HVe19SBSH010nZI0AIFdnBr8fm8a6l6WkfRab9pm0a4xbJNTomZyfN1hUXbXx0noS9Y23qjaEeKwupuBizqUUxuHQHbgVAqGEFR6Ih+mByOOdNHZ5fLb0mGhjJOekaVfmjXGnOMuBlg1hjPmuzVUZNAm8ni1EUIG95hiZstpuL0/HQZUeMGhMIxvgwgHoVDENUFyGCZCKG8FarHbOqgjEIITesxhr4wc6ZbEXNrwS9De0CdHNtl7kijxAFvNxmZSU2YnkEYIm9gHgJYyc04ncoamHRIAEBWKdJuDaPikWJv5AgX9CRNPF+tz/Jg1+U1oLjEG2AtMIzZprEHKJhESh6IgRsbtxAbtWfpae60Ycd1h0b4QoEG2GFVMXdatR5zsHgyV3DpW1iFmAK5545ITTSvaeSQTIlBkeoYMnulH5Jt1ff7oCDhdyQ6iTtEQ6KYIoZuDbTMzL9AxTYYJIdhixnR3vCz5W/yDNrGOwjVZt+KWpnIXFrAgU4ivq50xjgniwUZRp60PJCGglL8f9Oa+2zQJCSfFBakfI2e3Dm0WIYoGdhqR1JHRM1getFDbJjvs50KIIBePBNS8Nhfu22OX45qPIAeqwGDQG05QPB6EGl2MNXZVe5jelC7ejQzGoHXTKSAdk2dMvWEn0XekC8YvKCRwnVl3C9Mm0747n5+7Ery9ROR8TIUkqFdGV66A4/mJBuhe/NX29kbk2tTW+HjuI7swdU+QvAY1hjaYBByb1DIufMTbDYCqecETAh9gGRRdGwlMSaeG8BYHvA4v3bPcOBOOMKBHuglJrsbK4MO5uKCiwbfaBJNbhwEG8oggAXrtKygME0WtenCfGCF9ygblyr1qixx0pkwIW2Lsz60Rma6O+M/a9ekLcRzCqv3UcPCQAjaj8HYc/AHV7x5sJIJ27XHOuFrlPZiYBgAyippxP9QvYQ4yYwh1be+oDE4PbaS0mJLr92mfu7ktpLJ6w02m3JGXLKJjFItujyleUPNCTiSkM1EO6j/a5mG4Ie08iNIG16/Rce+6dxW1vYejXNoW0c0VMEnqluovKAFtKyq3gwJSXlcZOwKdfext/eFHuMyinQz5VNaK9ZS8oWj6AMEwiB3JAOoR8uzmUFJMuTJXuMzQkgJfHEPsdJlZr9jvz03IFNfffyhiuPFuNzOJsBfxmima+kjYXviyKn97idb2cSpcFgyJMqKDPkx4QK2VSIohsai4EF+145cyc7HO1SRzEdU/hswpj9v1sZ2tLSN5vyGdOfCvFW2mify98vXnjqFpwyQEGWLGcRWOQX9QuOsH0APU+G7d411yuIRSO2JLSpLoGt5jeeUj3r/efWvJOWo5J7mJoYcrPIJGVNQHdOrmAs67I8tV614SkleRHsfsaKunMgARts+6qXO0g4NCk/2o+NFda33wAHuicT0I+Y8PJALXpLv20ZGCgFLVRwuQSn7aXCHkp49nZKUiQkdS1/DAPz5is0ynT8wKCyNXIAVuDnExuoDnWx6UBiMhIfT8Qbedh25qgjp9EoDYl+fbh0Q0xS4di6NNToKyw4wDG+IEdu5wNYgoRNRqkWmN5oGyxuW+uzImF89MHJKBQiceTWXAqV3HaeP7RMW78Z38339i6F8/uv/rG//pA2FB9nD/DQAzzdvdXE7vAAANGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAtRXhpdjIiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDo5ZjNkNGJjYi1iNjI5LTRiNWYtOGI2OS01YWY4ODcwZTBkZjgiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTU3ZDFjZDYtYTkxYS00MTQ1LTg2YWItYzczMzVmOGVlYzgzIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZmZiYzQ5MmItMzFiMy00ZGFmLTkxMjgtNTU0YjQ2NWY1MTQ3IgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iTGludXgiCiAgIEdJTVA6VGltZVN0YW1wPSIxNjMxODkxNzQ5MjYzMzQzIgogICBHSU1QOlZlcnNpb249IjIuMTAuMjQiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOkJhZz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjRhNWZkZGMtYjQ1Zi00ZjhlLWI3YjItM2M3NzE5MmU1ODU5IgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKExpbnV4KSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMS0wOS0xN1QxMToxNTo0OS0wNDowMCIvPgogICAgPC9yZGY6QmFnPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz79a/BsAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+2SlUqRawg4pChOlkQFXHUKhShQqgVWnUwufQPmjQkKS6OgmvBwZ/FqoOLs64OroIg+APi5uak6CIlfpcUWsR4x3EP733vy913gL9eZqrZMQ6ommWkEnEhk10Vgq/oRh/CNAckZupzopiE5/i6h4/vdzGe5V335+hVciYDfALxLNMNi3iDeHrT0jnvE0dYUVKIz4nHDLog8SPXZZffOBcc9vPMiJFOzRNHiIVCG8ttzIqGSjxFHFVUjfL9GZcVzluc1XKVNe/JXxjKaSvLXKc1jAQWsQQRAmRUUUIZFmK0a6SYSNF53MM/5PhFcsnkKoGRYwEVqJAcP/gf/O6tmZ+ccJNCcaDzxbY/RoDgLtCo2fb3sW03ToDAM3CltfyVOjDzSXqtpUWPgPA2cHHd0uQ94HIHGHzSJUNypAAtfz4PvJ/RN2WB/lugZ83tW/Mcpw9AmnqVvAEODoHRAmWve7y7q71v/9Y0+/cDLUdyix/3Sn0AAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQflCREPDzGy8inS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";

var ImgTester = function ImgTester() {
  return React__default.createElement("div", {
    style: {
      width: '100%',
      height: '50vh',
      backgroundColor: 'blue'
    }
  }, React__default.createElement("img", {
    src: img$2,
    style: {
      display: 'block',
      width: '500px',
      height: '200px'
    }
  }));
};

/**
 *
 * @param root0
 * @param root0.color
 * @param root0.width
 * @param root0.height
 */

var SpecieSvg = function SpecieSvg(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#24463B" : _ref$color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? "100%" : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? "100%" : _ref$height;
  return React__default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: width,
      height: height
    }
  }, React__default.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 19 29",
    fill: "" + color,
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M15.7126 11.3809C16.0637 9.90724 15.8857 8.35705 15.2096 7.00138C14.5335 5.6457 13.4025 4.57081 12.0141 3.96464C12.5047 3.57681 12.9012 3.08296 13.1737 2.5201C13.4463 1.95724 13.5879 1.33998 13.5879 0.7146H11.1741C11.1741 1.17539 10.9911 1.6173 10.6652 1.94312C10.3394 2.26895 9.89751 2.45199 9.43672 2.45199C8.97594 2.45199 8.53402 2.26895 8.2082 1.94312C7.88237 1.6173 7.69933 1.17539 7.69933 0.7146H5.28554C5.28532 1.34025 5.42681 1.95782 5.69938 2.52098C5.97194 3.08414 6.36851 3.57825 6.85933 3.96625C5.4578 4.57836 4.31892 5.66792 3.6454 7.04099C2.97188 8.41407 2.8074 9.98159 3.18125 11.4646C1.32799 13.2819 0.166687 15.8856 0.166687 18.773C0.166687 24.2502 4.35059 28.706 9.49143 28.706C14.6323 28.706 18.8162 24.2502 18.8162 18.773C18.8151 15.841 17.6163 13.2003 15.7126 11.3809ZM9.43672 5.84042C10.4924 5.84156 11.5058 6.25567 12.2602 6.99422C13.0146 7.73277 13.4501 8.73714 13.4737 9.79261C12.2212 9.15653 10.8346 8.82949 9.42994 8.83883C8.02523 8.84816 6.64317 9.19359 5.39925 9.84625C5.40872 8.78129 5.83814 7.7631 6.59416 7.013C7.35019 6.2629 8.37172 5.84151 9.43672 5.84042ZM2.58048 18.773C2.58048 15.0954 5.01948 12.0262 8.22929 11.3787V26.1667C5.01841 25.5193 2.58048 22.45 2.58048 18.773ZM10.642 26.1876V11.3578C13.9065 11.9559 16.4013 15.0536 16.4013 18.773C16.4013 22.4924 13.9065 25.5895 10.642 26.1876Z",
    fill: "" + color
  })));
};
/**
 *
 * @param root0
 * @param root0.color
 */

var HexagonsSvg = function HexagonsSvg(_ref2) {
  var _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? "#24463B" : _ref2$color,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? "100%" : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? "100%" : _ref2$height;
  return React__default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: width,
      height: height
    }
  }, React__default.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 21 18",
    fill: "" + color,
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M8.43362 0.5L12.3752 2.75074V7.25221L8.43362 9.50295L4.49203 7.25221V2.75074L8.43362 0.5ZM5.83964 3.52025V6.4827L8.43362 7.96391L11.0276 6.4827V3.52025L8.43362 2.03903L5.83964 3.52025Z",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M5.83964 6.4827V3.52025L8.43362 2.03903L11.0276 3.52025V6.4827L8.43362 7.96391L5.83964 6.4827Z",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M17.0584 0.5L21 2.75074V7.25221L17.0584 9.50295L13.1168 7.25221V2.75074L17.0584 0.5ZM14.4644 3.52025V6.4827L17.0584 7.96391L19.6524 6.4827V3.52025L17.0584 2.03903L14.4644 3.52025Z",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M12.746 8.49705L16.6876 10.7478V15.2493L12.746 17.5L8.80443 15.2493V10.7478L12.746 8.49705ZM10.152 11.5173V14.4797L12.746 15.961L15.34 14.4797V11.5173L12.746 10.0361L10.152 11.5173Z",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M3.94159 8.49705L7.88317 10.7478V15.2493L3.94159 17.5L0 15.2493V10.7478L3.94159 8.49705ZM1.34761 11.5173V14.4797L3.94159 15.961L6.53556 14.4797V11.5173L3.94159 10.0361L1.34761 11.5173Z",
    fill: "" + color
  })));
};
/**
 *
 * @param root0
 * @param root0.color
 */

var PinSvg = function PinSvg(_ref3) {
  var _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? "#24463B" : _ref3$color,
      _ref3$width = _ref3.width,
      width = _ref3$width === void 0 ? "100%" : _ref3$width,
      _ref3$height = _ref3.height,
      height = _ref3$height === void 0 ? "100%" : _ref3$height;
  return React__default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: width,
      height: height
    }
  }, React__default.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 19 25",
    fill: "" + color,
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M9.50002 0.833374C7.02467 0.833374 4.6507 1.8167 2.90036 3.56704C1.15002 5.31738 0.166687 7.69135 0.166687 10.1667C0.166687 16.4667 8.39169 23.5834 8.74169 23.8867C8.95301 24.0675 9.22194 24.1668 9.50002 24.1668C9.7781 24.1668 10.047 24.0675 10.2584 23.8867C10.6667 23.5834 18.8334 16.4667 18.8334 10.1667C18.8334 7.69135 17.85 5.31738 16.0997 3.56704C14.3493 1.8167 11.9754 0.833374 9.50002 0.833374ZM9.50002 21.425C7.01502 19.0917 2.50002 14.0634 2.50002 10.1667C2.50002 8.31019 3.23752 6.52971 4.55027 5.21696C5.86303 3.90421 7.64351 3.16671 9.50002 3.16671C11.3565 3.16671 13.137 3.90421 14.4498 5.21696C15.7625 6.52971 16.5 8.31019 16.5 10.1667C16.5 14.0634 11.985 19.1034 9.50002 21.425ZM9.50002 5.50004C8.57704 5.50004 7.67479 5.77374 6.90736 6.28652C6.13993 6.7993 5.54179 7.52813 5.18858 8.38085C4.83537 9.23357 4.74296 10.1719 4.92302 11.0771C5.10309 11.9824 5.54754 12.8139 6.20019 13.4665C6.85283 14.1192 7.68435 14.5636 8.5896 14.7437C9.49484 14.9238 10.4332 14.8314 11.2859 14.4781C12.1386 14.1249 12.8674 13.5268 13.3802 12.7594C13.893 11.9919 14.1667 11.0897 14.1667 10.1667C14.1667 8.92903 13.675 7.74204 12.7999 6.86688C11.9247 5.99171 10.7377 5.50004 9.50002 5.50004ZM9.50002 12.5C9.03853 12.5 8.58741 12.3632 8.20369 12.1068C7.81998 11.8504 7.52091 11.486 7.3443 11.0596C7.1677 10.6333 7.12149 10.1641 7.21152 9.7115C7.30155 9.25887 7.52378 8.84311 7.85011 8.51679C8.17643 8.19047 8.59219 7.96824 9.04481 7.87821C9.49743 7.78818 9.96659 7.83438 10.3929 8.01099C10.8193 8.18759 11.1837 8.48666 11.4401 8.87038C11.6965 9.25409 11.8334 9.70522 11.8334 10.1667C11.8334 10.7855 11.5875 11.379 11.1499 11.8166C10.7124 12.2542 10.1189 12.5 9.50002 12.5Z",
    fill: "" + color
  })));
};
/**
 *
 * @param root0
 * @param root0.color
 */

var CalendarSvg = function CalendarSvg(_ref4) {
  var _ref4$color = _ref4.color,
      color = _ref4$color === void 0 ? "#24463B" : _ref4$color,
      _ref4$width = _ref4.width,
      width = _ref4$width === void 0 ? "100%" : _ref4$width,
      _ref4$height = _ref4.height,
      height = _ref4$height === void 0 ? "100%" : _ref4$height;
  return React__default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: width,
      height: height
    }
  }, React__default.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 25 25",
    fill: "" + color,
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M20.6666 3.16671H18.3333V2.00004C18.3333 1.69062 18.2104 1.39388 17.9916 1.17508C17.7728 0.95629 17.4761 0.833374 17.1666 0.833374C16.8572 0.833374 16.5605 0.95629 16.3417 1.17508C16.1229 1.39388 16 1.69062 16 2.00004V3.16671H8.99998V2.00004C8.99998 1.69062 8.87706 1.39388 8.65827 1.17508C8.43948 0.95629 8.14273 0.833374 7.83331 0.833374C7.52389 0.833374 7.22715 0.95629 7.00836 1.17508C6.78956 1.39388 6.66665 1.69062 6.66665 2.00004V3.16671H4.33331C3.40506 3.16671 2.51482 3.53546 1.85844 4.19183C1.20206 4.84821 0.833313 5.73845 0.833313 6.66671V20.6667C0.833313 21.595 1.20206 22.4852 1.85844 23.1416C2.51482 23.798 3.40506 24.1667 4.33331 24.1667H20.6666C21.5949 24.1667 22.4851 23.798 23.1415 23.1416C23.7979 22.4852 24.1666 21.595 24.1666 20.6667V6.66671C24.1666 5.73845 23.7979 4.84821 23.1415 4.19183C22.4851 3.53546 21.5949 3.16671 20.6666 3.16671ZM21.8333 20.6667C21.8333 20.9761 21.7104 21.2729 21.4916 21.4917C21.2728 21.7105 20.9761 21.8334 20.6666 21.8334H4.33331C4.02389 21.8334 3.72715 21.7105 3.50836 21.4917C3.28956 21.2729 3.16665 20.9761 3.16665 20.6667V12.5H21.8333V20.6667ZM21.8333 10.1667H3.16665V6.66671C3.16665 6.35729 3.28956 6.06054 3.50836 5.84175C3.72715 5.62296 4.02389 5.50004 4.33331 5.50004H6.66665V6.66671C6.66665 6.97613 6.78956 7.27287 7.00836 7.49166C7.22715 7.71046 7.52389 7.83337 7.83331 7.83337C8.14273 7.83337 8.43948 7.71046 8.65827 7.49166C8.87706 7.27287 8.99998 6.97613 8.99998 6.66671V5.50004H16V6.66671C16 6.97613 16.1229 7.27287 16.3417 7.49166C16.5605 7.71046 16.8572 7.83337 17.1666 7.83337C17.4761 7.83337 17.7728 7.71046 17.9916 7.49166C18.2104 7.27287 18.3333 6.97613 18.3333 6.66671V5.50004H20.6666C20.9761 5.50004 21.2728 5.62296 21.4916 5.84175C21.7104 6.06054 21.8333 6.35729 21.8333 6.66671V10.1667Z",
    fill: "" + color
  })));
};
var LayerSvg = function LayerSvg(_ref5) {
  var _ref5$color = _ref5.color,
      color = _ref5$color === void 0 ? "#24463B" : _ref5$color,
      _ref5$width = _ref5.width,
      width = _ref5$width === void 0 ? "100%" : _ref5$width,
      _ref5$height = _ref5.height,
      height = _ref5$height === void 0 ? "100%" : _ref5$height;
  return React__default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: width,
      height: height
    }
  }, React__default.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 26 26",
    fill: "" + color,
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M1.12504 9.07504L12.375 15.575C12.5651 15.6847 12.7806 15.7425 13 15.7425C13.2195 15.7425 13.435 15.6847 13.625 15.575L24.875 9.07504C25.064 8.96597 25.2211 8.80936 25.3307 8.62077C25.4403 8.43218 25.4987 8.21818 25.5 8.00004C25.5009 7.77977 25.4436 7.56319 25.3338 7.37222C25.2241 7.18125 25.0658 7.02267 24.875 6.91254L13.625 0.425037C13.435 0.315326 13.2195 0.257568 13 0.257568C12.7806 0.257568 12.5651 0.315326 12.375 0.425037L1.12504 6.91254C0.934283 7.02267 0.776015 7.18125 0.666261 7.37222C0.556507 7.56319 0.499164 7.77977 0.500038 8.00004C0.501355 8.21818 0.559737 8.43218 0.669381 8.62077C0.779026 8.80936 0.936116 8.96597 1.12504 9.07504ZM13 3.00004L21.75 8.00004L13 13L4.25004 8.00004L13 3.00004ZM23.625 11.9625L13 18L2.37504 11.9125C2.23237 11.8299 2.07476 11.7763 1.91129 11.7548C1.74782 11.7333 1.58171 11.7444 1.42253 11.7874C1.26336 11.8304 1.11426 11.9044 0.983827 12.0053C0.853393 12.1061 0.744201 12.2318 0.662538 12.375C0.499573 12.6621 0.45674 13.0019 0.543386 13.3204C0.630032 13.6388 0.839124 13.9101 1.12504 14.075L12.375 20.575C12.5651 20.6847 12.7806 20.7425 13 20.7425C13.2195 20.7425 13.435 20.6847 13.625 20.575L24.875 14.075C25.161 13.9101 25.37 13.6388 25.4567 13.3204C25.5433 13.0019 25.5005 12.6621 25.3375 12.375C25.2559 12.2318 25.1467 12.1061 25.0162 12.0053C24.8858 11.9044 24.7367 11.8304 24.5775 11.7874C24.4184 11.7444 24.2523 11.7333 24.0888 11.7548C23.9253 11.7763 23.7677 11.8299 23.625 11.9125V11.9625ZM23.625 16.9625L13 23L2.37504 16.9125C2.23237 16.8299 2.07476 16.7763 1.91129 16.7548C1.74782 16.7333 1.58171 16.7444 1.42253 16.7874C1.26336 16.8304 1.11426 16.9044 0.983827 17.0053C0.853393 17.1061 0.744201 17.2318 0.662538 17.375C0.499573 17.6621 0.45674 18.0019 0.543386 18.3204C0.630032 18.6388 0.839124 18.9101 1.12504 19.075L12.375 25.575C12.5651 25.6847 12.7806 25.7425 13 25.7425C13.2195 25.7425 13.435 25.6847 13.625 25.575L24.875 19.075C25.161 18.9101 25.37 18.6388 25.4567 18.3204C25.5433 18.0019 25.5005 17.6621 25.3375 17.375C25.2559 17.2318 25.1467 17.1061 25.0162 17.0053C24.8858 16.9044 24.7367 16.8304 24.5775 16.7874C24.4184 16.7444 24.2523 16.7333 24.0888 16.7548C23.9253 16.7763 23.7677 16.8299 23.625 16.9125V16.9625Z",
    fill: "" + color
  })));
};
var BDSvg = function BDSvg(_ref6) {
  var _ref6$color = _ref6.color,
      color = _ref6$color === void 0 ? "#24463B" : _ref6$color,
      _ref6$width = _ref6.width,
      width = _ref6$width === void 0 ? "100%" : _ref6$width,
      _ref6$height = _ref6.height,
      height = _ref6$height === void 0 ? "100%" : _ref6$height;
  return React__default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: width,
      height: height
    }
  }, React__default.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 21 27",
    fill: "" + color,
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M20.0479 4.40169C20.0479 4.38239 20.0479 4.36308 20.0479 4.34378C20.0479 3.10553 18.9241 2.17189 16.7072 1.56805C15.0266 1.11008 12.8124 0.858032 10.4732 0.858032C8.13392 0.858032 5.91966 1.11008 4.23913 1.56805C2.02487 2.17189 0.898438 3.10553 0.898438 4.34378C0.898438 4.36308 0.898438 4.38239 0.898438 4.40169V23.1132C0.898438 24.3514 2.02487 25.2851 4.23913 25.8889C5.91966 26.3469 8.13392 26.5989 10.4732 26.5989C12.8124 26.5989 15.0266 26.3469 16.7072 25.8889C18.9241 25.2851 20.0479 24.3514 20.0479 23.1132V4.40169ZM5.45031 3.75388C6.85353 3.44231 8.63706 3.27124 10.4732 3.27124C12.3092 3.27124 14.0928 3.44285 15.496 3.75388C16.3934 3.95337 16.9668 4.17217 17.3063 4.34378C16.9668 4.51485 16.3945 4.73364 15.496 4.93367C14.0928 5.24524 12.3092 5.41631 10.4732 5.41631C8.63706 5.41631 6.85246 5.24471 5.45031 4.93367C4.55292 4.73418 3.97951 4.51538 3.63997 4.34378C3.97951 4.17271 4.55292 3.95391 5.45031 3.75388ZM17.6341 22.9137C17.4238 23.0794 16.8048 23.4113 15.4949 23.7025C14.0917 24.0141 12.3082 24.1852 10.4721 24.1852C8.63599 24.1852 6.85246 24.0136 5.44924 23.7025C4.13936 23.4113 3.51821 23.0794 3.31009 22.9137V19.5352C3.59616 19.6424 3.90549 19.7409 4.23805 19.8307C5.91966 20.287 8.13392 20.5391 10.4732 20.5391C12.8124 20.5391 15.0266 20.287 16.7072 19.8291C17.0412 19.7379 17.3505 19.6394 17.6351 19.5336L17.6341 22.9137ZM17.6341 16.8538C17.4238 17.0196 16.8048 17.3515 15.4949 17.6427C14.0917 17.9543 12.3082 18.1253 10.4721 18.1253C8.63599 18.1253 6.85246 17.9537 5.44924 17.6427C4.13936 17.3515 3.51821 17.0196 3.31009 16.8538V13.2608C3.72176 13.4108 4.14153 13.5376 4.5674 13.6405C6.20127 14.0427 8.30074 14.2647 10.4732 14.2647C12.6456 14.2647 14.745 14.0427 16.3778 13.64C16.8033 13.537 17.2227 13.4102 17.6341 13.2603V16.8538ZM17.6341 10.5795C17.4238 10.7452 16.8048 11.0772 15.4944 11.3684C14.0917 11.6799 12.3076 11.851 10.4721 11.851C8.63652 11.851 6.85246 11.6794 5.44978 11.3684C4.13936 11.0772 3.51874 10.7452 3.31009 10.5795V6.82563C3.59616 6.93288 3.90549 7.03137 4.23805 7.12111C5.91966 7.57747 8.13392 7.82952 10.4732 7.82952C12.8124 7.82952 15.0266 7.57748 16.7072 7.1195C17.0412 7.02834 17.3505 6.92984 17.6351 6.82402L17.6341 10.5795Z",
    fill: "" + color
  })));
};
var BarSvg = function BarSvg(_ref7) {
  var _ref7$color = _ref7.color,
      color = _ref7$color === void 0 ? "#24463B" : _ref7$color,
      _ref7$width = _ref7.width,
      width = _ref7$width === void 0 ? "100%" : _ref7$width,
      _ref7$height = _ref7.height,
      height = _ref7$height === void 0 ? "100%" : _ref7$height;
  return React__default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: width,
      height: height
    }
  }, React__default.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 17 18",
    fill: "" + color,
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M0.333374 5.73337H3.83337V17.1667H0.333374V5.73337ZM6.86671 0.833374H10.1334V17.1667H6.86671V0.833374ZM13.4 10.1667H16.6667V17.1667H13.4V10.1667Z",
    fill: "" + color
  })));
};
var LapinSvg = function LapinSvg(_ref8) {
  var _ref8$color = _ref8.color,
      color = _ref8$color === void 0 ? "#24463B" : _ref8$color,
      _ref8$width = _ref8.width,
      width = _ref8$width === void 0 ? "100%" : _ref8$width,
      _ref8$height = _ref8.height,
      height = _ref8$height === void 0 ? "100%" : _ref8$height;
  return React__default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: width,
      height: height
    }
  }, React__default.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 25 28",
    fill: "" + color,
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M18.9324 16.4961H21.7625L16.6442 9.98313H19.8089L12.0751 0.143677L4.34079 9.98313H7.50554L2.38615 16.4961H5.2178L0.134888 22.9619H8.62071V27.8232H15.4866V22.9619H24.0153L18.9324 16.4961ZM12.0751 4.0756L14.8107 7.55437H9.33948L12.0751 4.0756ZM10.5963 9.98313H13.5556L16.7665 14.0673H7.38699L10.5963 9.98313ZM13.0556 25.3939H11.0479V22.9619H13.0556V25.3939ZM5.13412 20.5326L8.30692 16.4961H15.8428L19.0156 20.5326H5.13412Z",
    fill: "" + color
  })));
};
var CompassSvg = function CompassSvg(_ref9) {
  var _ref9$color = _ref9.color,
      color = _ref9$color === void 0 ? "#24463B" : _ref9$color,
      _ref9$width = _ref9.width,
      width = _ref9$width === void 0 ? "100%" : _ref9$width,
      _ref9$height = _ref9.height,
      height = _ref9$height === void 0 ? "100%" : _ref9$height;
  return React__default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: width,
      height: height
    }
  }, React__default.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 25 24",
    fill: "" + color,
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M12.4999 0.332764C6.05992 0.332764 0.833252 5.55816 0.833252 11.9966C0.833252 18.435 6.05992 23.6604 12.4999 23.6604C18.9399 23.6604 24.1666 18.435 24.1666 11.9966C24.1666 5.55816 18.9399 0.332764 12.4999 0.332764ZM12.4999 21.3277C7.35492 21.3277 3.16659 17.1404 3.16659 11.9966C3.16659 6.85285 7.35492 2.66553 12.4999 2.66553C17.6449 2.66553 21.8333 6.85285 21.8333 11.9966C21.8333 17.1404 17.6449 21.3277 12.4999 21.3277ZM6.08325 18.4117L14.8449 14.341L18.9166 5.58149L10.1549 9.65217L6.08325 18.4117ZM12.4999 10.7136C13.2116 10.7136 13.7833 11.2851 13.7833 11.9966C13.7833 12.7081 13.2116 13.2796 12.4999 13.2796C11.7883 13.2796 11.2166 12.7081 11.2166 11.9966C11.2166 11.2851 11.7883 10.7136 12.4999 10.7136Z",
    fill: "" + color
  })));
};
var FilterSvg = function FilterSvg(_ref10) {
  var _ref10$color = _ref10.color,
      color = _ref10$color === void 0 ? "#24463B" : _ref10$color,
      _ref10$width = _ref10.width,
      width = _ref10$width === void 0 ? "100%" : _ref10$width,
      _ref10$height = _ref10.height,
      height = _ref10$height === void 0 ? "100%" : _ref10$height;
  return React__default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: width,
      height: height
    }
  }, React__default.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 14 14",
    fill: "" + color,
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M11.6666 0.333252H2.33331C1.80288 0.333252 1.29417 0.543966 0.9191 0.919038C0.544027 1.29411 0.333313 1.80282 0.333313 2.33325V3.11325C0.333218 3.38855 0.389957 3.6609 0.49998 3.91325V3.95325C0.594166 4.16723 0.727575 4.36169 0.893313 4.52659L4.99998 8.60659V12.9999C4.99975 13.1132 5.0284 13.2247 5.08323 13.3238C5.13805 13.423 5.21724 13.5065 5.31331 13.5666C5.41941 13.6323 5.54183 13.667 5.66665 13.6666C5.77101 13.666 5.87376 13.6408 5.96665 13.5933L8.63331 12.2599C8.74326 12.2045 8.83571 12.1198 8.90043 12.015C8.96515 11.9103 8.99961 11.7897 8.99998 11.6666V8.60659L13.08 4.52659C13.2457 4.36169 13.3791 4.16723 13.4733 3.95325V3.91325C13.5925 3.66287 13.6584 3.39044 13.6666 3.11325V2.33325C13.6666 1.80282 13.4559 1.29411 13.0809 0.919038C12.7058 0.543966 12.1971 0.333252 11.6666 0.333252ZM7.85998 7.85992C7.79819 7.92221 7.74931 7.99609 7.71613 8.07731C7.68296 8.15854 7.66614 8.24551 7.66665 8.33325V11.2533L6.33331 11.9199V8.33325C6.33382 8.24551 6.317 8.15854 6.28383 8.07731C6.25065 7.99609 6.20177 7.92221 6.13998 7.85992L2.60665 4.33325H11.3933L7.85998 7.85992ZM12.3333 2.99992H1.66665V2.33325C1.66665 2.15644 1.73688 1.98687 1.86191 1.86185C1.98693 1.73682 2.1565 1.66659 2.33331 1.66659H11.6666C11.8435 1.66659 12.013 1.73682 12.1381 1.86185C12.2631 1.98687 12.3333 2.15644 12.3333 2.33325V2.99992Z",
    fill: "" + color
  })));
};
var LentillesSvg = function LentillesSvg(_ref11) {
  var _ref11$color = _ref11.color,
      color = _ref11$color === void 0 ? "#24463B" : _ref11$color,
      _ref11$width = _ref11.width,
      width = _ref11$width === void 0 ? "100%" : _ref11$width,
      _ref11$height = _ref11.height,
      height = _ref11$height === void 0 ? "100%" : _ref11$height;
  return React__default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: width,
      height: height
    }
  }, React__default.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 21 15",
    fill: "" + color,
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M11.8393 5.22848C12.1644 7.33899 12.2596 9.5006 12.7524 11.5789L11.8393 5.22848Z",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M11.6929 5.26916C11.945 6.9158 12.0587 8.58079 12.3296 10.2249C12.4065 10.6928 12.4968 11.1581 12.6055 11.619C12.6507 11.8096 12.9434 11.7287 12.8988 11.5387C12.5157 9.91437 12.3738 8.24987 12.1753 6.59729C12.1192 6.12646 12.0577 5.65465 11.9862 5.18829C11.9733 5.10643 11.8716 5.06327 11.7991 5.08212C11.7608 5.09368 11.7284 5.11955 11.7086 5.15438C11.6888 5.18921 11.6832 5.23032 11.6929 5.26916Z",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M12.3911 3.87456C12.3098 3.14972 12.2919 1.64746 13.5052 1.24263C14.7184 0.83779 15.5159 1.62167 15.8339 2.86247",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M12.3911 3.87456C12.3098 3.14972 12.2919 1.64746 13.5052 1.24263C14.7184 0.83779 15.5159 1.62167 15.8339 2.86247",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M12.543 3.87456C12.469 3.20827 12.4785 2.42687 12.8903 1.86278C13.3608 1.21782 14.3998 1.08684 14.9958 1.62365C15.3645 1.95556 15.565 2.43183 15.688 2.90266C15.7377 3.09168 16.0299 3.01131 15.9808 2.82179C15.7471 1.9243 15.1606 0.986131 14.1274 0.983154C13.6525 0.983154 13.1513 1.15332 12.8114 1.49118C12.5102 1.78886 12.3435 2.20064 12.2686 2.61292C12.1977 3.02984 12.188 3.45485 12.2398 3.87456C12.2418 3.91382 12.2584 3.95091 12.2864 3.97848C12.3145 4.00605 12.3518 4.02208 12.3911 4.0234C12.4666 4.0234 12.5524 3.95295 12.543 3.87158V3.87456Z",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M5.23954 2.93441C6.0608 -0.120224 9.71053 1.16821 8.44218 4.07549L5.23954 2.93441Z",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M5.38593 2.97459C5.51247 2.51171 5.72535 2.06321 6.08511 1.73428C6.34471 1.4945 6.67915 1.35168 7.03191 1.32994C7.72662 1.29968 8.32904 1.77645 8.50172 2.45962C8.63074 2.97211 8.51711 3.51934 8.31117 3.9976C8.29222 4.03263 8.28732 4.07356 8.29746 4.11208C8.30759 4.1506 8.33202 4.18381 8.36576 4.20498C8.42928 4.24318 8.54093 4.22582 8.57368 4.1509C8.79202 3.64436 8.91607 3.09912 8.82874 2.54793C8.76542 2.13119 8.56059 1.74894 8.24865 1.46539C7.94411 1.20019 7.55759 1.0478 7.15398 1.0338C6.75036 1.0198 6.35421 1.14503 6.03201 1.38849C5.54274 1.75562 5.25145 2.31227 5.09316 2.89273C5.04353 3.08176 5.33432 3.16213 5.38593 2.9736V2.97459Z",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M8.70269 7.40398C9.54181 6.48318 11.1342 6.62457 12.0418 7.26556L11.8656 5.49837C11.0742 4.95611 9.63262 4.97645 8.82824 5.49837L8.70269 7.40398Z",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M8.81038 7.51164C9.60731 6.65285 11.0662 6.76845 11.9654 7.39704C12.0552 7.46004 12.205 7.37769 12.1936 7.26606L12.0234 5.55543C12.0145 5.46861 12.0011 5.40659 11.9197 5.35251C11.7728 5.2566 11.6144 5.17943 11.4483 5.12281C10.7566 4.87475 9.92787 4.88516 9.23763 5.13372C9.07527 5.18852 8.91989 5.26211 8.77465 5.35301C8.69426 5.4056 8.67838 5.46662 8.6754 5.55146L8.63471 6.10712L8.54936 7.40448C8.53646 7.59995 8.84065 7.59896 8.85305 7.40448L8.9786 5.49887L8.90367 5.62985C9.32992 5.35797 9.84997 5.25378 10.3507 5.2518C10.8513 5.24981 11.3689 5.34805 11.7897 5.62985L11.7143 5.49887L11.8904 7.26606L12.1192 7.13508C11.3252 6.57992 10.1839 6.41967 9.28774 6.80814C9.02542 6.9214 8.78965 7.08819 8.59551 7.29781C8.46302 7.4402 8.67739 7.65552 8.81038 7.51164Z",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M8.84164 5.37484C8.57864 7.27698 8.78408 11.8741 7.1778 12.9397C4.5354 15.0011 0.95514 13.4403 0.478764 10.1947C0.285733 7.49577 2.91027 5.46067 4.29374 3.36653C5.8365 2.54297 8.93245 3.28715 8.84164 5.37484ZM7.25372 8.09062C6.91827 7.40349 6.37193 6.77887 5.60774 6.80814V6.78879C1.72875 6.12597 -0.42238 10.8367 3.33454 12.7368C6.01217 13.8705 8.54688 10.5226 7.25322 8.09161L7.25372 8.09062Z",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M4.15976 3.28963C3.48142 4.31264 2.62742 5.20516 1.88358 6.17905C1.15313 7.13558 0.494146 8.20274 0.345279 9.41924C0.302357 9.71919 0.302357 10.0237 0.345279 10.3237C0.39102 10.6001 0.461775 10.8717 0.556671 11.1353C0.737662 11.6381 1.00649 12.1047 1.35063 12.5136C2.00312 13.2882 2.91109 13.8041 3.91065 13.9682C4.96701 14.1284 6.04522 13.8906 6.93614 13.3009C7.29838 13.0628 7.61845 12.8048 7.84969 12.4352C8.08093 12.0656 8.23376 11.6364 8.34889 11.2132C8.62578 10.1962 8.71858 9.1295 8.79251 8.08318C8.82824 7.57961 8.85504 7.07505 8.88729 6.57099C8.90119 6.3522 8.91607 6.13341 8.93691 5.91462C8.95329 5.72808 8.98654 5.52119 8.99646 5.35152C9.04608 4.40889 8.36824 3.64982 7.55741 3.27177C6.7178 2.88083 5.7055 2.76969 4.80684 3.00833C4.60255 3.06204 4.40496 3.13859 4.21782 3.23655C4.04464 3.32783 4.19797 3.59028 4.37115 3.499C5.12194 3.1021 6.07717 3.11748 6.87709 3.34222C7.65368 3.56052 8.45111 4.05763 8.6501 4.89161C8.74091 5.27313 8.65506 5.65862 8.62429 6.04312C8.58807 6.49757 8.56375 6.95251 8.53646 7.40746C8.47443 8.42252 8.40744 9.44156 8.21689 10.4432C8.13694 10.8978 8.01313 11.3436 7.84721 11.7743C7.71223 12.1092 7.52962 12.4396 7.26216 12.6857C6.90062 13.0047 6.48595 13.258 6.03698 13.4339C5.57726 13.6187 5.08697 13.7158 4.59147 13.7201C3.64297 13.7213 2.7262 13.3787 2.01111 12.7557C1.64031 12.4331 1.33068 12.0464 1.09706 11.6141C0.976459 11.3889 0.876796 11.153 0.799325 10.9096C0.717944 10.6576 0.638548 10.3837 0.62515 10.1183C0.565106 8.9509 1.07175 7.87778 1.71287 6.93465C2.38724 5.94538 3.21048 5.07022 3.93844 4.12213C4.10716 3.90185 4.27042 3.67562 4.42425 3.44541C4.53044 3.27921 4.26794 3.1274 4.15976 3.28963Z",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M3.41294 12.6063C2.81052 12.2997 2.25971 11.8711 1.90938 11.2842C1.62653 10.8123 1.49702 10.2644 1.5387 9.71592C1.62405 8.59617 2.4056 7.6322 3.41096 7.17973C4.08235 6.8766 4.84554 6.81409 5.56705 6.93515L5.45887 6.78879V6.80814C5.45926 6.84828 5.47539 6.88667 5.50378 6.91506C5.53217 6.94344 5.57057 6.95956 5.61072 6.95995C6.3754 6.94011 6.84185 7.60491 7.15199 8.21713C7.42065 8.75851 7.51413 9.37006 7.41946 9.96696C7.24181 11.1115 6.46174 12.2139 5.36161 12.6351C4.72048 12.8785 4.00971 12.8625 3.38019 12.5905C3.30377 12.5582 3.21395 12.6247 3.19311 12.6961C3.1683 12.7834 3.22388 12.8514 3.2993 12.8832C3.92026 13.1466 4.61381 13.1847 5.25989 12.9908C5.87502 12.7933 6.42127 12.4249 6.83491 11.9286C7.69734 10.9131 8.0318 9.46091 7.48595 8.21614C7.14604 7.44913 6.53171 6.63202 5.60774 6.65633L5.75959 6.80814V6.78879C5.76004 6.75513 5.74933 6.72227 5.72913 6.69535C5.70893 6.66842 5.68038 6.64894 5.64794 6.63995C4.93734 6.52088 4.19995 6.55512 3.52012 6.80715C2.92485 7.02373 2.3973 7.39356 1.99076 7.87927C1.21566 8.8219 0.986898 10.1287 1.5382 11.238C1.89846 11.9634 2.54604 12.5031 3.25812 12.8658C3.43329 12.9561 3.58712 12.6946 3.41294 12.6063Z",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M20.5158 9.93421C20.6151 13.934 14.1641 15.2269 12.7961 11.4648L11.885 5.29C11.619 3.60318 14.5259 2.64864 15.8339 2.859C16.8373 3.00089 17.5668 3.99214 18.063 4.78346C19.1611 6.54321 20.7426 7.85893 20.5158 9.93421ZM16.3475 6.80417L16.4418 6.82749C15.1616 7.0046 13.4024 7.75226 13.4148 9.26941C13.1772 11.5491 15.2543 12.9546 17.3569 12.7646C21.1798 12.2362 19.8494 6.38594 16.3465 6.80417H16.3475Z",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M18.1925 4.70706C17.7955 4.06954 17.3296 3.4211 16.6795 3.02024C16.155 2.69478 15.5556 2.63872 14.9551 2.71214C14.3592 2.78426 13.7791 2.95318 13.2377 3.21224C12.7365 3.45286 12.2398 3.79419 11.9475 4.27841C11.7406 4.62023 11.689 4.99034 11.7465 5.3803L12.6214 11.3209C12.6298 11.3799 12.6343 11.4419 12.6477 11.5C12.6938 11.6984 12.8095 11.9008 12.9092 12.076C13.162 12.5186 13.5118 12.8982 13.9324 13.1863C14.7497 13.7489 15.7913 13.9354 16.7673 13.8313C17.7737 13.7231 18.7612 13.3247 19.51 12.6346C19.8738 12.3037 20.1658 11.9016 20.3679 11.4533C20.4738 11.2164 20.5524 10.9683 20.6022 10.7136C20.628 10.5777 20.6463 10.4403 20.6567 10.3023C20.6677 10.1634 20.6567 10.0225 20.6716 9.8841C20.7451 9.1037 20.5486 8.34315 20.1928 7.65155C19.837 6.95995 19.3442 6.33831 18.8822 5.71022C18.6421 5.38327 18.4074 5.05285 18.1915 4.70904C18.0878 4.54383 17.8248 4.69614 17.9295 4.86234C18.3483 5.53062 18.844 6.14532 19.2986 6.78929C19.7184 7.38463 20.1104 8.01868 20.2861 8.7331C20.3764 9.10359 20.4046 9.48652 20.3694 9.86624C20.3466 10.1232 20.358 10.3768 20.3094 10.6323C20.2202 11.0966 20.0292 11.5355 19.7501 11.9172C19.1974 12.6748 18.3314 13.1714 17.4343 13.4026C16.5371 13.6338 15.5422 13.6145 14.6807 13.2483C14.2539 13.0682 13.8714 12.7973 13.5597 12.4545C13.3972 12.2735 13.2571 12.0736 13.1424 11.8592C13.067 11.7198 12.9772 11.5615 12.9439 11.4062C12.9022 11.2177 12.8869 11.0187 12.8586 10.8282L12.0944 5.64969C12.0726 5.50085 12.0448 5.34904 12.0294 5.19772C11.9237 4.09434 13.2302 3.46129 14.1041 3.19537C14.6003 3.04653 15.1283 2.94731 15.6469 2.986C16.3351 3.03562 16.8939 3.48213 17.3315 4.00504C17.5516 4.27474 17.7528 4.55918 17.934 4.85639C18.0337 5.02557 18.2967 4.87326 18.1925 4.70706Z",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M17.3564 12.6128C16.0622 12.7249 14.639 12.2248 13.9433 11.0748C13.7778 10.7993 13.6614 10.4971 13.5994 10.1818C13.531 9.83449 13.5473 9.48175 13.5707 9.13C13.6109 8.51629 14.0143 8.01918 14.508 7.68727C15.0921 7.29484 15.7888 7.07406 16.4815 6.97682C16.6343 6.95499 16.6175 6.71784 16.4815 6.68361L16.3872 6.66029L16.3465 6.95797C16.9427 6.8809 17.5473 7.01142 18.0585 7.32758C18.5314 7.62525 18.8981 8.07177 19.1472 8.56789C19.6281 9.53086 19.6931 10.7856 19.04 11.6806C18.6381 12.2323 17.9866 12.524 17.3162 12.6192C17.2343 12.6306 17.1911 12.7343 17.21 12.8063C17.2328 12.8936 17.3157 12.9234 17.3966 12.9119C18.055 12.8187 18.6957 12.5403 19.1418 12.0348C19.5422 11.5813 19.7551 11.0024 19.8072 10.404C19.9129 9.19251 19.3671 7.90656 18.384 7.18172C17.7962 6.75412 17.0682 6.56514 16.3465 6.65285C16.1882 6.67121 16.1267 6.90637 16.3063 6.95053L16.4006 6.97434V6.68113C15.7402 6.7744 15.0782 6.98228 14.505 7.32609C13.9398 7.66544 13.4411 8.17744 13.3047 8.84274C13.2757 9.02102 13.2583 9.201 13.2526 9.38153C13.2387 9.5726 13.2417 9.76451 13.2615 9.95505C13.2983 10.3158 13.3979 10.6674 13.5558 10.9939C13.858 11.6171 14.382 12.1186 14.9894 12.4441C15.7164 12.826 16.5384 12.9897 17.3564 12.9154C17.5494 12.9 17.5514 12.5959 17.3564 12.6128Z",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M2.33961 9.41874C2.20711 9.8459 2.28998 10.3286 2.45324 10.7359C2.62146 11.1636 2.88595 11.5794 3.2735 11.8378C3.46678 11.9721 3.69769 12.0416 3.93298 12.0363C4.128 12.0288 4.12899 11.7252 3.93298 11.7327C3.45065 11.7515 3.0894 11.3139 2.87702 10.9299C2.64826 10.5132 2.48649 9.96844 2.63238 9.49862C2.69044 9.31108 2.39717 9.23121 2.33961 9.41775V9.41874Z",
    fill: "" + color
  }), React__default.createElement("path", {
    d: "M14.4276 9.37656C14.31 10.5936 15.3531 11.7083 16.5118 11.9108C16.7028 11.9445 16.7852 11.6518 16.5927 11.6181C15.5546 11.4355 14.6246 10.4705 14.7308 9.37656C14.7497 9.18208 14.4455 9.18357 14.4266 9.37656H14.4276Z",
    fill: "" + color
  })));
};
var ThermometerSvg = function ThermometerSvg(_ref12) {
  var _ref12$color = _ref12.color,
      color = _ref12$color === void 0 ? "#24463B" : _ref12$color,
      _ref12$width = _ref12.width,
      width = _ref12$width === void 0 ? "100%" : _ref12$width,
      _ref12$height = _ref12.height,
      height = _ref12$height === void 0 ? "100%" : _ref12$height;
  return React__default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: width,
      height: height
    }
  }, React__default.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 14 21",
    fill: "" + color,
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M13.125 8.87471H10.3741V7.72413H11.9914C12.1781 7.72413 12.3572 7.64996 12.4892 7.51793C12.6212 7.3859 12.6954 7.20683 12.6954 7.02011C12.6954 6.83339 12.6212 6.65432 12.4892 6.52229C12.3572 6.39026 12.1781 6.31608 11.9914 6.31608H10.3741V5.16551H13.125C13.3054 5.16551 13.4783 5.09388 13.6058 4.96638C13.7333 4.83887 13.8049 4.66594 13.8049 4.48562C13.8049 4.30531 13.7333 4.13238 13.6058 4.00487C13.4783 3.87737 13.3054 3.80574 13.125 3.80574H10.3733C10.3529 2.78805 9.93221 1.81941 9.20239 1.10985C8.47257 0.400293 7.49248 0.0070061 6.47462 0.0152642C5.45675 0.0235223 4.48317 0.43266 3.76496 1.15397C3.04675 1.87527 2.6418 2.85061 2.63792 3.8685V11.2442C2.06763 11.773 1.61304 12.4142 1.30278 13.1274C0.992527 13.8405 0.833329 14.6102 0.835222 15.3879C0.835222 18.5086 3.37373 21.0471 6.49396 21.0471C9.61419 21.0471 12.1527 18.5057 12.1527 15.3859C12.154 14.6142 11.9967 13.8505 11.6908 13.142C11.3849 12.4335 10.9367 11.7954 10.3741 11.2672V10.2345H13.125C13.3054 10.2345 13.4783 10.1628 13.6058 10.0353C13.7333 9.90784 13.8049 9.73491 13.8049 9.55459C13.8049 9.37427 13.7333 9.20134 13.6058 9.07384C13.4783 8.94634 13.3054 8.87471 13.125 8.87471ZM10.488 15.3859C10.488 16.0612 10.3168 16.7254 9.99047 17.3165C9.66412 17.9076 9.19324 18.4064 8.62184 18.7662C8.05043 19.1259 7.39714 19.335 6.72302 19.3738C6.0489 19.4126 5.37595 19.2798 4.76704 18.988C4.15814 18.6961 3.63316 18.2547 3.24116 17.7049C2.84916 17.1551 2.60294 16.5149 2.52549 15.8441C2.44804 15.1733 2.54191 14.4938 2.79831 13.8692C3.05471 13.2445 3.46528 12.6951 3.99166 12.2721L4.30183 12.0223V3.8685C4.30966 3.28912 4.54531 2.73612 4.95779 2.32918C5.37027 1.92224 5.92639 1.69408 6.50582 1.69408C7.08526 1.69408 7.64138 1.92224 8.05386 2.32918C8.46634 2.73612 8.70199 3.28912 8.70982 3.8685V12.0392L9.01597 12.2886C9.47654 12.6626 9.84773 13.1348 10.1024 13.6707C10.3571 14.2066 10.4888 14.7926 10.488 15.3859Z",
    fill: "" + color
  })));
};
var MapSvg = function MapSvg(_ref13) {
  var _ref13$color = _ref13.color,
      color = _ref13$color === void 0 ? "#24463B" : _ref13$color,
      _ref13$width = _ref13.width,
      width = _ref13$width === void 0 ? "100%" : _ref13$width,
      _ref13$height = _ref13.height,
      height = _ref13$height === void 0 ? "100%" : _ref13$height;
  return React__default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: width,
      height: height
    }
  }, React__default.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 19 17",
    fill: "" + color,
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M17.655 2.41877L12.405 0.668767H12.3438C12.303 0.664674 12.262 0.664674 12.2213 0.668767H12.02H11.9063H11.845L6.875 2.37502L1.905 0.668767C1.77342 0.625377 1.63341 0.613857 1.4965 0.635154C1.35959 0.656451 1.22969 0.709957 1.1175 0.791267C1.00442 0.871782 0.91211 0.978048 0.848208 1.10129C0.784307 1.22452 0.750645 1.3612 0.750003 1.50002V13.75C0.749529 13.9335 0.806719 14.1124 0.91349 14.2616C1.02026 14.4107 1.17121 14.5226 1.345 14.5813L6.595 16.3313C6.77127 16.3887 6.96124 16.3887 7.1375 16.3313L12.125 14.6688L17.095 16.375C17.1879 16.3876 17.2821 16.3876 17.375 16.375C17.558 16.3776 17.7365 16.3191 17.8825 16.2088C17.9956 16.1283 18.0879 16.022 18.1518 15.8987C18.2157 15.7755 18.2494 15.6388 18.25 15.5V3.25002C18.2505 3.06658 18.1933 2.88763 18.0865 2.73847C17.9797 2.5893 17.8288 2.47747 17.655 2.41877ZM6 14.2838L2.5 13.12V2.71627L6 3.88002V14.2838ZM11.25 13.12L7.75 14.2838V3.88002L11.25 2.71627V13.12ZM16.5 14.2838L13 13.12V2.71627L16.5 3.88002V14.2838Z",
    fill: "" + color
  })));
};
var TrafficLightSvg = function TrafficLightSvg(_ref14) {
  var _ref14$color = _ref14.color,
      color = _ref14$color === void 0 ? "#24463B" : _ref14$color,
      _ref14$width = _ref14.width,
      width = _ref14$width === void 0 ? "100%" : _ref14$width,
      _ref14$height = _ref14.height,
      height = _ref14$height === void 0 ? "100%" : _ref14$height;
  return React__default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: width,
      height: height
    }
  }, React__default.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 21 19",
    fill: "" + color,
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M10.5 3.8125C10.2404 3.8125 9.98665 3.88948 9.77081 4.0337C9.55497 4.17792 9.38675 4.3829 9.28741 4.62273C9.18807 4.86256 9.16208 5.12646 9.21272 5.38106C9.26336 5.63566 9.38837 5.86952 9.57192 6.05308C9.75548 6.23663 9.98934 6.36164 10.2439 6.41228C10.4985 6.46292 10.7624 6.43693 11.0023 6.33759C11.2421 6.23825 11.4471 6.07003 11.5913 5.85419C11.7355 5.63835 11.8125 5.38459 11.8125 5.125C11.8125 4.7769 11.6742 4.44306 11.4281 4.19692C11.1819 3.95078 10.8481 3.8125 10.5 3.8125ZM19.25 6.4375H18.7775C19.6423 5.47653 20.1221 4.23028 20.125 2.9375C20.125 2.70544 20.0328 2.48288 19.8687 2.31878C19.7046 2.15469 19.4821 2.0625 19.25 2.0625H15.5925C15.412 1.55189 15.0779 1.10962 14.6362 0.796321C14.1944 0.483019 13.6666 0.314022 13.125 0.3125H7.875C7.33342 0.314022 6.80557 0.483019 6.36382 0.796321C5.92206 1.10962 5.58802 1.55189 5.4075 2.0625H1.75C1.51794 2.0625 1.29538 2.15469 1.13128 2.31878C0.967187 2.48288 0.875 2.70544 0.875 2.9375C0.877918 4.23028 1.35773 5.47653 2.2225 6.4375H1.75C1.51794 6.4375 1.29538 6.52969 1.13128 6.69378C0.967187 6.85788 0.875 7.08044 0.875 7.3125C0.877918 8.60528 1.35773 9.85153 2.2225 10.8125H1.75C1.51794 10.8125 1.29538 10.9047 1.13128 11.0688C0.967187 11.2329 0.875 11.4554 0.875 11.6875C0.877297 12.9509 1.33512 14.1711 2.16446 15.1242C2.9938 16.0773 4.13903 16.6994 5.39 16.8763C5.56113 17.4011 5.89339 17.8587 6.33952 18.1838C6.78565 18.509 7.32295 18.6853 7.875 18.6875H13.125C13.6771 18.6853 14.2143 18.509 14.6605 18.1838C15.1066 17.8587 15.4389 17.4011 15.61 16.8763C16.861 16.6994 18.0062 16.0773 18.8355 15.1242C19.6649 14.1711 20.1227 12.9509 20.125 11.6875C20.125 11.4554 20.0328 11.2329 19.8687 11.0688C19.7046 10.9047 19.4821 10.8125 19.25 10.8125H18.7775C19.6423 9.85153 20.1221 8.60528 20.125 7.3125C20.125 7.08044 20.0328 6.85788 19.8687 6.69378C19.7046 6.52969 19.4821 6.4375 19.25 6.4375ZM5.25 15.0738C4.64545 14.9173 4.09377 14.6019 3.6522 14.1603C3.21063 13.7187 2.89524 13.1671 2.73875 12.5625H5.25V15.0738ZM5.25 10.6987C4.64545 10.5423 4.09377 10.2269 3.6522 9.7853C3.21063 9.34373 2.89524 8.79205 2.73875 8.1875H5.25V10.6987ZM5.25 6.32375C4.64961 6.17534 4.09793 5.87388 3.64875 5.44875C3.22362 4.99957 2.92216 4.44789 2.77375 3.8475H5.25V6.32375ZM14 16.0625C14 16.2946 13.9078 16.5171 13.7437 16.6812C13.5796 16.8453 13.3571 16.9375 13.125 16.9375H7.875C7.64294 16.9375 7.42038 16.8453 7.25628 16.6812C7.09219 16.5171 7 16.2946 7 16.0625V2.9375C7 2.70544 7.09219 2.48288 7.25628 2.31878C7.42038 2.15469 7.64294 2.0625 7.875 2.0625H13.125C13.3571 2.0625 13.5796 2.15469 13.7437 2.31878C13.9078 2.48288 14 2.70544 14 2.9375V16.0625ZM17.3512 14.1637C16.9021 14.5889 16.3504 14.8903 15.75 15.0387V12.5625H18.2613C18.1028 13.1665 17.7891 13.7185 17.3512 14.1637ZM17.3512 9.78875C16.9021 10.2139 16.3504 10.5153 15.75 10.6637V8.1875H18.2613C18.1028 8.7915 17.7891 9.34353 17.3512 9.78875ZM17.3512 5.41375C16.9021 5.83888 16.3504 6.14034 15.75 6.28875V3.8125H18.2613C18.1028 4.4165 17.7891 4.96853 17.3512 5.41375ZM10.5 12.5625C10.2404 12.5625 9.98665 12.6395 9.77081 12.7837C9.55497 12.9279 9.38675 13.1329 9.28741 13.3727C9.18807 13.6126 9.16208 13.8765 9.21272 14.1311C9.26336 14.3857 9.38837 14.6195 9.57192 14.8031C9.75548 14.9866 9.98934 15.1116 10.2439 15.1623C10.4985 15.2129 10.7624 15.1869 11.0023 15.0876C11.2421 14.9883 11.4471 14.82 11.5913 14.6042C11.7355 14.3883 11.8125 14.1346 11.8125 13.875C11.8125 13.5269 11.6742 13.1931 11.4281 12.9469C11.1819 12.7008 10.8481 12.5625 10.5 12.5625ZM10.5 8.1875C10.2404 8.1875 9.98665 8.26448 9.77081 8.4087C9.55497 8.55292 9.38675 8.7579 9.28741 8.99773C9.18807 9.23756 9.16208 9.50146 9.21272 9.75606C9.26336 10.0107 9.38837 10.2445 9.57192 10.4281C9.75548 10.6116 9.98934 10.7366 10.2439 10.7873C10.4985 10.8379 10.7624 10.8119 11.0023 10.7126C11.2421 10.6133 11.4471 10.445 11.5913 10.2292C11.7355 10.0133 11.8125 9.75959 11.8125 9.5C11.8125 9.1519 11.6742 8.81806 11.4281 8.57192C11.1819 8.32578 10.8481 8.1875 10.5 8.1875Z",
    fill: "" + color
  })));
};

var BQButtonMenu = function BQButtonMenu(_ref) {
  var activeBtn = _ref.activeBtn,
      notifyChange = _ref.notifyChange,
      mapBtnClick = _ref.mapBtnClick;
  return React__default.createElement("div", {
    className: "relative flex gap-4 w-full justify-center items-center"
  }, React__default.createElement("div", {
    onClick: function onClick() {
      if (mapBtnClick) {
        mapBtnClick();
      }
    },
    className: "flex justify-center items-center w-[50px] h-[50px] " + (activeBtn === 3 ? 'bg-white' : 'bg-darkgreen') + " rounded-full shadow-lg"
  }, React__default.createElement(CompassSvg, {
    color: "" + (activeBtn === 3 ? '#2e483e' : 'white'),
    width: "25px",
    height: "24px"
  })), React__default.createElement("div", {
    onClick: function onClick() {
      if (notifyChange) {
        notifyChange(1);
      }
    },
    className: "flex justify-center items-center w-[50px] h-[50px] " + (activeBtn === 1 ? 'bg-white' : 'bg-darkgreen') + " rounded-full shadow-lg"
  }, React__default.createElement(ForestIcon, {
    sx: {
      color: "" + (activeBtn === 1 ? '#2e483e' : 'white')
    }
  })), React__default.createElement("div", {
    className: "flex justify-center items-center w-[50px] h-[50px] " + (activeBtn === 2 ? 'bg-white' : 'bg-darkgreen') + " rounded-full shadow-lg",
    onClick: function onClick() {
      if (notifyChange) {
        notifyChange(2);
      }
    }
  }, React__default.createElement(InfoIcon, {
    sx: {
      color: "" + (activeBtn === 2 ? '#2e483e' : 'white')
    }
  })));
};

export { AppContainer, AppModeProvider, Asynchronous, BDSvg, BQBreadcrumbs, BQButtonMenu, BQDrawer, BQDrawerMenu, BQFooter, BQHeader, BQHeaderWithoutProvider, BQModal, BQNumberCard, BQPhotoCard, BarSvg, BottomNavBar, BottomNavBarContainer, CalendarSvg, Carousel, ColeoAnalysisAll, CompassSvg, Container, Control, CustomAccordion, CustomHeader, FilterSvg, Footer, GroupedSelect, Header, HeaderNavItem, HexagonsSvg, Histogram, ImageBox, ImageFetcher, ImageFetcherSlider, ImageSlideCard, ImgTester, LapinSvg, LayerSvg, LeftContent, Legend, LentillesSvg, MapSvg, MenuText, NoImageBox, PinSvg, RightContent, SearchBar, Selector, SlideScreen, SocialNetworkBoxContainer, SpecieSvg, SpeedDialBtn, SubTitleText, SubTitleTextWhiteTheme, Summary, TaxaMenuItem, Text, TextGray, TextItalic, TextWhiteTheme, ThermometerSvg, Thing, TitleExtraLarge, TitleExtraLargeWhiteTheme, TitleText, TitleTextWhiteTheme, Titletalic, TrafficLightSvg, colors, useBbox };
//# sourceMappingURL=bq-react-lib.esm.js.map
