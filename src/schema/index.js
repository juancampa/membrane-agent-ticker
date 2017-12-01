module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.manifest = exports.sheet = exports.currencies = exports.root = undefined;

var _boilerplateBase = __webpack_require__(2);

class _Root extends _boilerplateBase._Queryable_ {
    constructor(ref, name, args) {
        super(ref, name, args);
    }
}

let root = exports.root = new _Root(":", "");

class Currency_coinmarketcap extends _boilerplateBase._Queryable_ {
    constructor(ref, name, args) {
        super(ref, name, args);
    }

    get id() {
        return new _boilerplateBase._String_(this.ref, "id");
    }

    get name() {
        return new _boilerplateBase._String_(this.ref, "name");
    }

    get symbol() {
        return new _boilerplateBase._String_(this.ref, "symbol");
    }

    get rank() {
        return new _boilerplateBase._Int_(this.ref, "rank");
    }

    self(args) {
        return new Currency_coinmarketcap(this.ref, "self", args);
    }

    priceUsd(args) {
        return new _boilerplateBase._Float_(this.ref, "priceUsd", args);
    }

    priceBtc(args) {
        return new _boilerplateBase._Float_(this.ref, "priceBtc", args);
    }

    volumeUsd24h(args) {
        return new _boilerplateBase._Float_(this.ref, "volumeUsd24h", args);
    }

    marketCapUsd(args) {
        return new _boilerplateBase._Float_(this.ref, "marketCapUsd", args);
    }

    availableSupply(args) {
        return new _boilerplateBase._Float_(this.ref, "availableSupply", args);
    }

    totalSupply(args) {
        return new _boilerplateBase._Float_(this.ref, "totalSupply", args);
    }

    maxSupply(args) {
        return new _boilerplateBase._Float_(this.ref, "maxSupply", args);
    }

    percentChange1h(args) {
        return new _boilerplateBase._Float_(this.ref, "percentChange1h", args);
    }

    percentChange24h(args) {
        return new _boilerplateBase._Float_(this.ref, "percentChange24h", args);
    }

    percentChange7d(args) {
        return new _boilerplateBase._Float_(this.ref, "percentChange7d", args);
    }

    lastUpdated(args) {
        return new _boilerplateBase._Int_(this.ref, "lastUpdated", args);
    }
}

class CurrencyCollection_coinmarketcap extends _boilerplateBase._Queryable_ {
    constructor(ref, name, args) {
        super(ref, name, args);
    }

    one(args) {
        return new Currency_coinmarketcap(this.ref, "one", args);
    }

    items(args) {
        return new _boilerplateBase._List_(this.ref, "items", args);
    }
}

let currencies = exports.currencies = new CurrencyCollection_coinmarketcap("currencies:", "");

class Sheet_googlesheets extends _boilerplateBase._Queryable_ {
    constructor(ref, name, args) {
        super(ref, name, args);
    }

    setCell(args) {
        return global.invoke(this.ref, "setCell", args);
    }

    setCells(args) {
        return global.invoke(this.ref, "setCells", args);
    }

    self(args) {
        return new Sheet_googlesheets(this.ref, "self", args);
    }

    cell(args) {
        return new _boilerplateBase._String_(this.ref, "cell", args);
    }
}

let sheet = exports.sheet = new Sheet_googlesheets("sheet:", "");

let manifest = exports.manifest = {
    "<self>": {
        "Root": {
            "<self>": _Root
        }
    },

    "5c694c06-89f3-452c-8783-1d480b0bee47": {
        "Currency": {
            "<self>": Currency_coinmarketcap
        },

        "CurrencyCollection": {
            "<self>": CurrencyCollection_coinmarketcap
        }
    },

    "b09fbe92-7d80-45c4-9d80-2f9fae7bfb02": {
        "Sheet": {
            "<self>": Sheet_googlesheets
        }
    }
};;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
class _Queryable_ {
  constructor(ref, name, args) {
    this.ref = $$(ref);
    if (name) {
      if (args) {
        const keys = Object.keys(args);
        const unwrappedArgs = {};
        for (let key of keys) {
          if (args[key] instanceof _Queryable_) {
            unwrappedArgs[key] = args[key].ref;
          } else {
            unwrappedArgs[key] = args[key];
          }
        }
        this.ref = this.ref.push(name, unwrappedArgs);
      } else {
        this.ref = this.ref.push(name);
      }
    }
  }
  $query(queryName, variables) {
    return global.query(this.ref, queryName, variables);
  }
  // Define a $ref property so that Queryables can be used by $$
  get $ref() {
    return this.ref.toString();
  }
  query(queryName, variables) {
    return global.query(this.ref, queryName, variables);
  }
  // TODO: this should only be available until we cross into computed-land
  set(value) {
    return global.updateGraph(this.ref, value);
  }
  match(pattern) {
    return global.getArgsAt(this, pattern);
  }
  toJSON() {
    return this.ref.toJSON();
  }
  toString() {
    return this.ref.toString();
  }
}

exports._Queryable_ = _Queryable_;
class _ScalarBase_ extends _Queryable_ {
  get() {
    return global.query(this.ref);
  }
  query() {
    return global.query(this.ref);
  }
  $query() {
    return global.query(this.ref);
  }
}

exports._ScalarBase_ = _ScalarBase_;
class _String_ extends _ScalarBase_ {}
exports._String_ = _String_;
class _Int_ extends _ScalarBase_ {}
exports._Int_ = _Int_;
class _Float_ extends _ScalarBase_ {}
exports._Float_ = _Float_;
class _Boolean_ extends _ScalarBase_ {}
exports._Boolean_ = _Boolean_;
class _Ref_ extends _ScalarBase_ {}

exports._Ref_ = _Ref_; // Having refs to elements of a list is not (yet?) allowed so this type does not
// expose any functionality other than querying

class _List_ extends _Queryable_ {
  constructor(ref, name, args) {
    super(ref, name, args);
  }
  // TODO: this should only be valid for lists of scalars (including refs)
  get() {
    return global.query(this.ref);
  }
  // TODO: these also belong in collections. We have to detect collections while
  // building the schema helper classes and add these to those types
  forEachItem(...args) {
    return global.iterateOverPages(false, this, ...args);
  }
  forEachPage(...args) {
    return global.iterateOverPages(true, this, ...args);
  }
}

exports._List_ = _List_; // TODO: should we separate this class into OwnEvent and Event. Seems like
// non-owned events shouldn't have dispatch

class _Event_ {
  constructor(ref, name) {
    this.ref = ref;
    this.name = name;
  }
  subscribe(handlerName) {
    return global.subscribe(this.ref, this.name, handlerName);
  }
  unsubscribe() {
    throw new Error('unsubscribe is unimplemented');
    // TODO:
  }
  dispatch(eventObj) {
    return global.dispatch(this.ref, this.name, eventObj);
  }
  getSubscriptionCount() {
    return global.getSubscriptionCount(this.ref, this.name);
  }
}
exports._Event_ = _Event_;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);