/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom/Components/styles/Modal.css":
/*!*********************************************!*\
  !*** ./src/dom/Components/styles/Modal.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/dom/Components/styles/ShipPickerBoard.css":
/*!*******************************************************!*\
  !*** ./src/dom/Components/styles/ShipPickerBoard.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/CONSTANTS.js":
/*!**************************!*\
  !*** ./src/CONSTANTS.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SHIP_LENGTHS": () => (/* binding */ SHIP_LENGTHS),
/* harmony export */   "AI_DELAY": () => (/* binding */ AI_DELAY),
/* harmony export */   "EDGE_SIZE": () => (/* binding */ EDGE_SIZE)
/* harmony export */ });
// Game will be played with ships of these lengths
const SHIP_LENGTHS = [5, 4, 3, 3, 2];

// AI move delay in milliseconds
const AI_DELAY = 250;

// the size of the gameboard
const EDGE_SIZE = 10;


/***/ }),

/***/ "./src/dom/Components/Board.js":
/*!*************************************!*\
  !*** ./src/dom/Components/Board.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ "./src/dom/Components/Cell.js");


function Board(boardData, handleCellClick, handleCellHover) {
  const boardWrapper = document.createElement('div');
  boardWrapper.classList.add('board-wrap');
  const board = document.createElement('div');
  board.classList.add('board');
  const boardHeading = document.createElement('h2');
  boardHeading.textContent = `${boardData.name}'s fleet`;

  const changeHeadingName = (name) => {
    boardHeading.textContent = `${name}'s fleet`;
  };

  const setName = (name) => changeHeadingName(name);

  const clean = () => {
    board.textContent = '';
  };

  const render = (array) => {
    array.forEach((rowData, y) => {
      rowData.forEach((cellData, x) => {
        const currentCell = (0,_Cell__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, cellData, boardData, handleCellClick, handleCellHover);
        board.appendChild(currentCell);
      });
    });
  };

  boardWrapper.append(boardHeading, board);

  const getBoardDiv = () => boardWrapper;

  return { getBoardDiv, render, clean, setName };
}


/***/ }),

/***/ "./src/dom/Components/Cell.js":
/*!************************************!*\
  !*** ./src/dom/Components/Cell.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cell)
/* harmony export */ });
function cell(x, y, cellData, boardData, handleCellClick, handleCellHover) {
  const cellEl = document.createElement('div');
  cellEl.classList.add('cell');
  cellEl.dataset.x = x;
  cellEl.dataset.y = y;

  if (handleCellClick) {
    cellEl.addEventListener('click', () => handleCellClick({ x: cellEl.dataset.x, y: cellEl.dataset.y }));
  }

  if (handleCellHover) {
    cellEl.addEventListener('mouseenter', () => handleCellHover({ x: cellEl.dataset.x, y: cellEl.dataset.y }));
  }

  if (cellData.isShip !== false && boardData.type === 'player') {
    cellEl.classList.add('ship');
  }

  if (cellData.isPreview === true) {
    cellEl.classList.add('preview');
  }

  if (cellData.isShip === false && cellData.isHit === true) {
    cellEl.textContent = '⬤';
  }
  if (cellData.isShip !== false && cellData.isHit === true) {
    cellEl.textContent = '⬤';
    cellEl.classList.add('hit');

    if (cellData.isShip.isSunk()) {
      cellEl.classList.add('sunk');
    }
  }

  return cellEl;
}


/***/ }),

/***/ "./src/dom/Components/CloseIcon.js":
/*!*****************************************!*\
  !*** ./src/dom/Components/CloseIcon.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeIcon);


/***/ }),

/***/ "./src/dom/Components/DestroyedShips.js":
/*!**********************************************!*\
  !*** ./src/dom/Components/DestroyedShips.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DestroyedShips)
/* harmony export */ });
class DestroyedShips {
  constructor() {
    this.wrapper = document.createElement('div');
    this.title = document.createElement('h2');
    this.initialize();
  }

  initialize() {
    this.title.textContent = 'Destroyed ships';
    this.wrapper.classList.add('destroyed-ships-wrapper');
    this.wrapper.appendChild(this.title);
  }

  appendShip(ship) {
    const shipElement = document.createElement('div');
    shipElement.classList.add('destroyed-ship');

    for (let i = 0; i < ship.getLength(); i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      shipElement.appendChild(cell);
    }
    this.wrapper.appendChild(shipElement);
  }

  getElement() {
    return this.wrapper;
  }
}


/***/ }),

/***/ "./src/dom/Components/Modal.js":
/*!*************************************!*\
  !*** ./src/dom/Components/Modal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CloseIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CloseIcon */ "./src/dom/Components/CloseIcon.js");
/* harmony import */ var _styles_Modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Modal.css */ "./src/dom/Components/styles/Modal.css");



class Modal {
  constructor() {
    this.modal = document.querySelector('.modal');
    this.content = document.createElement('div');

    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('modal-box');
    this.wrapper.addEventListener('click', (e) => e.stopPropagation());

    this.wrapper.appendChild(this.content);

    this.modal.appendChild(this.wrapper);
  }

  addCloseIcon() {
    this.closeIcon = document.createElement('div');
    this.closeIcon.classList.add('modal-close');
    this.closeIcon.innerHTML += _CloseIcon__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.wrapper.appendChild(this.closeIcon);
  }

  showOwnPromise(element) {
    this.content.appendChild(element);
    this.modal.classList.add('visible');
  }

  show(element) {
    return new Promise((resolve) => {
      this.addCloseIcon();
      this.content.appendChild(element);
      this.modal.classList.add('visible');
      this.closeIcon.addEventListener('click', () => {
        resolve();
        this.cleanModal();
      });
    });
  }

  cleanModal() {
    this.modal.classList.remove('visible');
    this.content.innerText = '';
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Modal());


/***/ }),

/***/ "./src/dom/Components/NameInput.js":
/*!*****************************************!*\
  !*** ./src/dom/Components/NameInput.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./src/dom/Components/Modal.js");


class EnterName {
  constructor() {
    this.modal = _Modal__WEBPACK_IMPORTED_MODULE_0__["default"];
  }

  async show() {
    return new Promise((resolve) => {
      let name;
      const wrapper = document.createElement('div');
      wrapper.classList.add('name-input-wrapper');
      const title = document.createElement('h2');
      title.textContent = 'Enter your name';
      const input = document.createElement('input');
      input.setAttribute('autofocus', '');
      const label = document.createElement('span');
      label.textContent = 'Please use a name between 2 and 15 characters';

      const handleSubmit = (event) => {
        event.preventDefault();
        if (input.checkValidity()) {
          label.style.display = 'none';
          input.classList.remove('invalid-input');
          this.modal.cleanModal();
          resolve(name);
        } else {
          input.classList.add('invalid-input');
          label.style.display = 'block';
        }
      };

      input.placeholder = 'Your name';
      input.type = 'text';
      input.maxLength = 15;
      input.minLength = 2;
      input.addEventListener('input', (event) => {
        name = event.target.value;
      });
      input.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          handleSubmit(event);
        }
      });

      const button = document.createElement('button');
      button.textContent = 'Submit';
      button.addEventListener('click', (event) => {
        handleSubmit(event);
      });

      const inputButtonWrapper = document.createElement('div');
      inputButtonWrapper.append(input, button);
      wrapper.append(title, inputButtonWrapper, label);
      this.modal.showOwnPromise(wrapper);
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new EnterName());


/***/ }),

/***/ "./src/dom/Components/ShipPickerBoard.js":
/*!***********************************************!*\
  !*** ./src/dom/Components/ShipPickerBoard.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShipPickerBoard)
/* harmony export */ });
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../CONSTANTS */ "./src/CONSTANTS.js");
/* harmony import */ var _styles_ShipPickerBoard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/ShipPickerBoard.css */ "./src/dom/Components/styles/ShipPickerBoard.css");



function ShipPickerBoard(rotateHandler, getCurrentShipID) {
  let isVertical = false;

  const boardWrap = document.createElement('div');
  boardWrap.id = 'ship-picker';
  boardWrap.classList.add('board-wrap');

  const shipPicker = document.createElement('div');
  shipPicker.classList.add('shippicker');

  const arrowLeft = document.createElement('div');
  arrowLeft.classList.add('arrow-left');

  const title = document.createElement('h2');
  title.textContent = 'Place your fleet';

  const currentShipWrap = document.createElement('div');
  currentShipWrap.classList.add('current-ship-wrap');

  const button = document.createElement('button');
  button.textContent = 'Rotate ship';
  button.addEventListener('click', () => {
    isVertical = !isVertical;
    render();
    rotateHandler();
  });

  const getCurrentShipDOM = () => {
    const currentShipLength = _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__.SHIP_LENGTHS[getCurrentShipID()];
    const shipElement = document.createElement('div');
    if (isVertical) {
      shipElement.classList.add('is-vertical');
    }
    shipElement.classList.add('destroyed-ship', 'current-ship');

    for (let i = 0; i < currentShipLength; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      shipElement.appendChild(cell);
    }
    return shipElement;
  };

  const clean = () => {
    currentShipWrap.textContent = '';
    boardWrap.textContent = '';
    shipPicker.textContent = '';
  };
  const render = () => {
    clean();
    const currentShip = getCurrentShipDOM();
    currentShipWrap.appendChild(currentShip);
    shipPicker.append(arrowLeft, title, button, currentShipWrap);
    boardWrap.append(shipPicker);
  };

  const getBoardWrap = () => boardWrap;

  return { getBoardWrap, displayCurrentShip: getCurrentShipDOM, render };
}


/***/ }),

/***/ "./src/dom/Components/WinnerAnouncement.js":
/*!*************************************************!*\
  !*** ./src/dom/Components/WinnerAnouncement.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./src/dom/Components/Modal.js");


class WinnerAnouncement {
  constructor() {
    this.modal = _Modal__WEBPACK_IMPORTED_MODULE_0__["default"];
  }

  async announceWinner(name) {
    const announcement = document.createElement('h2');
    announcement.textContent = `${name} has won the game!`;
    await this.modal.show(announcement);
  }
}

const WinnerModal = new WinnerAnouncement();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WinnerModal);


/***/ }),

/***/ "./src/dom/DOMmanager.js":
/*!*******************************!*\
  !*** ./src/dom/DOMmanager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMmanager)
/* harmony export */ });
/* harmony import */ var _Components_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/Board */ "./src/dom/Components/Board.js");
/* harmony import */ var _Components_DestroyedShips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/DestroyedShips */ "./src/dom/Components/DestroyedShips.js");
/* harmony import */ var _Components_NameInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/NameInput */ "./src/dom/Components/NameInput.js");
/* harmony import */ var _Components_ShipPickerBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/ShipPickerBoard */ "./src/dom/Components/ShipPickerBoard.js");
/* harmony import */ var _Components_WinnerAnouncement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/WinnerAnouncement */ "./src/dom/Components/WinnerAnouncement.js");






function DOMmanager(
  playerBoard,
  enemyBoard,
  handleEnemyCellClick,
  handlePlayerCellClick,
  handlePlayerCellHover,
  rotateHandler,
  getCurrentShipID,
) {
  let showingModal = false;
  const gamearea = document.querySelector('.gamearea');
  gamearea.textContent = '';
  const playerDestroyedShipsDOM = new _Components_DestroyedShips__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const enemyDestroyedShipsDOM = new _Components_DestroyedShips__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const shipPickerBoard = (0,_Components_ShipPickerBoard__WEBPACK_IMPORTED_MODULE_3__["default"])(rotateHandler, getCurrentShipID);
  const boardsWrapper = document.createElement('div');
  boardsWrapper.classList.add('boards-wrapper');
  const playerBoardDOM = (0,_Components_Board__WEBPACK_IMPORTED_MODULE_0__["default"])(
    {
      name: 'Player',
      type: 'player',
    },
    handlePlayerCellClick,
    handlePlayerCellHover,
  );
  const enemyBoardDOM = (0,_Components_Board__WEBPACK_IMPORTED_MODULE_0__["default"])(
    {
      name: 'Enemy',
      type: 'enemy',
    },
    handleEnemyCellClick,
  );

  const setPlayerName = (name) => playerBoardDOM.setName(name);

  const initialize = () => {
    const playerDestroyedShips = (playerDestroyedShipsDOM.getElement());
    const enemyDestroyedShips = (enemyDestroyedShipsDOM.getElement());

    boardsWrapper.appendChild(playerBoardDOM.getBoardDiv());
    boardsWrapper.appendChild(shipPickerBoard.getBoardWrap());
    gamearea.append(playerDestroyedShips, boardsWrapper, enemyDestroyedShips);
    shipPickerBoard.displayCurrentShip();
  };
  initialize();

  const switchToEnemyBoard = () => {
    const shipPicker = document.getElementById('ship-picker');
    shipPicker.remove();
    boardsWrapper.appendChild(enemyBoardDOM.getBoardDiv());
  };

  const showWinModal = async (name) => {
    if (!showingModal) {
      showingModal = true;
      await _Components_WinnerAnouncement__WEBPACK_IMPORTED_MODULE_4__["default"].announceWinner(name);
      showingModal = false;
    }
  };

  const showNameModal = async () => {
    let name;
    if (!showingModal) {
      showingModal = true;
      name = await _Components_NameInput__WEBPACK_IMPORTED_MODULE_2__["default"].show();
      showingModal = false;
    }
    return name || 'Player';
  };

  const cleanBoards = () => {
    playerBoardDOM.clean();
    enemyBoardDOM.clean();
  };

  const renderBoards = () => {
    cleanBoards();
    playerBoardDOM.render(playerBoard.getArray());
    enemyBoardDOM.render(enemyBoard.getArray());

    shipPickerBoard.render();
  };

  const appendDestroyedShip = (ship, player) => {
    // eslint-disable-next-line default-case
    switch (player) {
      case 'player':
        playerDestroyedShipsDOM.appendShip(ship);
        break;
      case 'enemy':
        enemyDestroyedShipsDOM.appendShip(ship);
        break;
    }
  };

  return {
    renderBoards,
    appendDestroyedShip,
    handleWin: showWinModal,
    showNameModal,
    switchToEnemyBoard,
    setPlayerName,
  };
}


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop),
/* harmony export */   "default": () => (/* binding */ play)
/* harmony export */ });
/* harmony import */ var _dom_DOMmanager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/DOMmanager */ "./src/dom/DOMmanager.js");
/* harmony import */ var _modules_Player_PlayerFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Player/PlayerFactory */ "./src/modules/Player/PlayerFactory.js");
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CONSTANTS */ "./src/CONSTANTS.js");
/* eslint-disable no-use-before-define */




async function gameLoop(lastUsedName) {
  return new Promise((resolve) => {
    let currentShipID = 0;
    const player = (0,_modules_Player_PlayerFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('placeholder');
    const enemy = (0,_modules_Player_PlayerFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('Computer');
    const playerBoard = player.getBoard();
    const enemyBoard = enemy.getBoard();
    const displayManager = (0,_dom_DOMmanager__WEBPACK_IMPORTED_MODULE_0__["default"])(
      playerBoard,
      enemyBoard,
      handleEnemyCellClick,
      handlePlayerCellClick,
      handlePlayerCellHover,
      rotateHandler,
      getCurrentShipID,
    );

    let listenForClicksEnemyBoard = false;
    let nextPlayer = 'player';
    let placingShips = true;
    let isShipVertical = false;

    async function playerNameModal() {
      const playerName = await getPlayerName();
      player.setName(playerName);
      displayManager.setPlayerName(playerName);
    }

    if (!lastUsedName) {
      playerNameModal();
    } else {
      player.setName(lastUsedName);
      displayManager.setPlayerName(lastUsedName);
    }

    function rotateHandler() {
      isShipVertical = !isShipVertical;
    }

    function getCurrentShipID() {
      return currentShipID;
    }

    async function getPlayerName() {
      const name = await displayManager.showNameModal();
      return name;
    }

    async function checkWinner() {
      if (playerBoard.areAllShipsSunk() === true) {
        await displayManager.handleWin(enemy.getName());
        resolve(player.getName());
      }
      if (enemyBoard.areAllShipsSunk() === true) {
        await displayManager.handleWin(player.getName());
        resolve(player.getName());
      }
    }

    const playerTurn = async (data) => {
      const attackData = await player.attack(data.x, data.y, enemy);
      checkWinner();
      displayManager.renderBoards();
      if (attackData?.isSunk === true) {
        displayManager.appendDestroyedShip(attackData.isShip, 'enemy');
      }
      if (attackData?.isShip !== false) {
        return 'player';
      }
      return 'computer';
    };

    const computerTurn = async () => {
      const enemyAttackData = await enemy.delayedRandomAttack(_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__.AI_DELAY, player);
      checkWinner();
      displayManager.renderBoards();

      if (enemyAttackData?.isSunk === true) {
        displayManager.appendDestroyedShip(enemyAttackData.isShip, 'player');
      }

      if (enemyAttackData?.isShip !== false) {
        return 'computer';
      }
      return 'player';
    };

    const oneGameTurn = async (data) => {
      try {
        if (listenForClicksEnemyBoard && (nextPlayer === 'player')) {
          nextPlayer = await playerTurn(data);
        }
        if (nextPlayer === 'computer') {
          listenForClicksEnemyBoard = false;
          nextPlayer = await computerTurn();
          if (nextPlayer === 'computer') {
            oneGameTurn('');
          }
          listenForClicksEnemyBoard = true;
        }
      } catch (error) {
        // ignore error
      }
    };

    let prevData;
    function handlePlayerCellHover(data) {
      if (placingShips) {
        if (prevData?.x !== data.x || prevData?.y !== data.y) {
          try {
            playerBoard.previewShipPlacement(
              Number(data.x),
              Number(data.y),
              isShipVertical,
              _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__.SHIP_LENGTHS[currentShipID],
            );
            displayManager.renderBoards();
            prevData = { ...data };
          } catch (error) {
            // ignore
          }
        }
      }
    }

    async function handlePlayerCellClick(data) {
      if (placingShips) {
        if (currentShipID < _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__.SHIP_LENGTHS.length) {
          try {
            playerBoard.placeShip(
              Number(data.x),
              Number(data.y),
              isShipVertical,
              _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__.SHIP_LENGTHS[currentShipID],
            );
            currentShipID += 1;
          } catch (error) {
            if (error.name === 'OutOfBoundsError' || error.name === 'OverlapError') {
              // do nothing, ignore those errors
            }
          }
        }
        if (currentShipID === _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__.SHIP_LENGTHS.length) {
          placingShips = false;
          currentShipID = 0;
          listenForClicksEnemyBoard = true;
          await playerBoard.cleanPreviousShipPreview();
          displayManager.switchToEnemyBoard();
          displayManager.renderBoards();
        }
      }
    }

    function handleEnemyCellClick(data) {
      if (listenForClicksEnemyBoard) {
        oneGameTurn(data);
      }
    }

    enemyBoard.autoPlaceShips(_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__.SHIP_LENGTHS);
    displayManager.renderBoards();
  });
}

async function play() {
  let lastUsedName;
  while (true) {
    // endless gameplay
    // eslint-disable-next-line no-await-in-loop
    lastUsedName = await gameLoop(lastUsedName);
  }
}


/***/ }),

/***/ "./src/modules/Gameboard/CustomErrors.js":
/*!***********************************************!*\
  !*** ./src/modules/Gameboard/CustomErrors.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverlapError": () => (/* binding */ OverlapError),
/* harmony export */   "OutOfBoundsError": () => (/* binding */ OutOfBoundsError)
/* harmony export */ });
/* eslint-disable max-classes-per-file */
class OverlapError extends Error {
  constructor(message) {
    super(message);
    this.name = 'OverlapError';
  }
}

class OutOfBoundsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'OutOfBoundsError';
  }
}


/***/ }),

/***/ "./src/modules/Gameboard/GameboardFactory.js":
/*!***************************************************!*\
  !*** ./src/modules/Gameboard/GameboardFactory.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoardFactory)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers_Array2d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Helpers/Array2d */ "./src/modules/Helpers/Array2d.js");
/* harmony import */ var _Ship_ShipFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Ship/ShipFactory */ "./src/modules/Ship/ShipFactory.js");
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../CONSTANTS */ "./src/CONSTANTS.js");
/* harmony import */ var _CustomErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomErrors */ "./src/modules/Gameboard/CustomErrors.js");






function GameBoardFactory() {
  const placedShips = [];
  const matrice = (0,_Helpers_Array2d__WEBPACK_IMPORTED_MODULE_1__["default"])(
    _CONSTANTS__WEBPACK_IMPORTED_MODULE_3__.EDGE_SIZE,
    {
      isShip: false,
      isHit: false,
      isPreview: false,
    },
  );
  let previousPreviewedCoords = [];

  /**
  * Prepares ship coordinates by checking for bounds and intersects
  * Throws error on bound or intersect violation
  * @return {Array} Array of objects containing (x,y) coordinates.
  */
  const prepareShipCoordinates = (x, y, isVertical, length) => {
    const preparedCoords = [];
    for (let i = 0; i < length; i += 1) {
      let yAxis;
      let xAxis;

      // calculate correct x and y values based on if the ship is vertical or horizontal
      if (isVertical) {
        yAxis = y + i;
        xAxis = x;
      } else {
        yAxis = y;
        xAxis = x + i;
      }

      if (yAxis >= _CONSTANTS__WEBPACK_IMPORTED_MODULE_3__.EDGE_SIZE || xAxis >= _CONSTANTS__WEBPACK_IMPORTED_MODULE_3__.EDGE_SIZE) {
        throw new _CustomErrors__WEBPACK_IMPORTED_MODULE_4__.OutOfBoundsError("Ship doesn't fit the gameboard");
      }

      const currentDataOnCoordinates = matrice.getSingleValue(xAxis, yAxis);

      if (currentDataOnCoordinates.isShip !== false) {
        throw new _CustomErrors__WEBPACK_IMPORTED_MODULE_4__.OverlapError('Ship overlaps already existing ship');
      }

      preparedCoords.push({ xAxis, yAxis });
    }
    return preparedCoords;
  };

  const cleanPreviousShipPreview = async () => {
    await previousPreviewedCoords.forEach((coords) => {
      matrice.writeSingleCellKeyPair(
        coords.xAxis,
        coords.yAxis,
        'isPreview',
        false,
      );
    });
  };

  const previewShipPlacement = (x, y, isVertical, length) => {
    cleanPreviousShipPreview();
    const preparedCoords = prepareShipCoordinates(x, y, isVertical, length);
    previousPreviewedCoords = preparedCoords;

    preparedCoords.forEach((coords) => {
      matrice.writeSingleCellKeyPair(
        coords.xAxis,
        coords.yAxis,
        'isPreview',
        true,
      );
    });
  };

  const placeShip = (x, y, isVertical, length) => {
    const ship = (0,_Ship_ShipFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(length);
    const preparedCoords = prepareShipCoordinates(x, y, isVertical, length);

    preparedCoords.forEach((coords) => {
      matrice.setSingleCellObject(
        coords.xAxis,
        coords.yAxis,
        {
          isShip: ship,
          isHit: false,
        },
      );
    });

    placedShips.push(ship);
    return ship;
  };

  const getRandomCoords = (isVertical, shipLength) => {
    let x;
    let y;
    if (isVertical) {
      y = Math.floor(Math.random() * (_CONSTANTS__WEBPACK_IMPORTED_MODULE_3__.EDGE_SIZE - shipLength));
      x = Math.floor(Math.random() * _CONSTANTS__WEBPACK_IMPORTED_MODULE_3__.EDGE_SIZE);
    } else {
      x = Math.floor(Math.random() * (_CONSTANTS__WEBPACK_IMPORTED_MODULE_3__.EDGE_SIZE - shipLength));
      y = Math.floor(Math.random() * _CONSTANTS__WEBPACK_IMPORTED_MODULE_3__.EDGE_SIZE);
    }
    return { x, y };
  };

  const autoPlaceShips = (shipLengths) => {
    shipLengths.forEach((shipLength) => {
      const prepareCoordsAndPlace = () => {
        const isVertical = Math.random() < 0.5;
        const { x, y } = getRandomCoords(isVertical, shipLength);
        try {
          placeShip(x, y, isVertical, shipLength);
        } catch (error) {
          return 'error';
        }
      };

      let status;
      let maxRetries = 100;
      do {
        status = prepareCoordsAndPlace();
        maxRetries -= 1;
        if (maxRetries <= 0) {
          throw new Error("Couldn't autoplace your ships (max retries exceeded)");
        }
      } while (status === 'error');
    });
    return true;
  };

  const receiveAttack = (x, y) => {
    const cell = matrice.getSingleValue(x, y);
    let data = {};

    // throw error if the cell was already hit
    if (cell.isHit === true) {
      throw new Error('Cannot hit the same place twice');
    }

    // register a ship hit if there's a ship on the coords and is not hit
    if (cell.isShip !== false && cell.isHit === false) {
      cell.isShip.hit();
      data = {
        isShip: cell.isShip,
        isHit: true,
        isSunk: cell.isShip.isSunk(),
      };
    }

    // register a missed hit
    if (cell.isShip === false && cell.isHit === false) {
      data = {
        isShip: false,
        isHit: true,
      };
    }

    matrice.setSingleCellObject(x, y, data);
    return data;
  };

  const areAllShipsSunk = () => placedShips.every((ship) => ship.isSunk());

  const getSunkShips = () => placedShips.filter((ship) => ship.isSunk());

  const getArray = () => matrice.getArray();

  return {
    placeShip,
    receiveAttack,
    areAllShipsSunk,
    getArray,
    autoPlaceShips,
    getSunkShips,
    previewShipPlacement,
    cleanPreviousShipPreview,
  };
}


/***/ }),

/***/ "./src/modules/Helpers/Array2d.js":
/*!****************************************!*\
  !*** ./src/modules/Helpers/Array2d.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Array2D)
/* harmony export */ });
function Array2D(size, defaultValue) {
  const matrice = [];

  const initialize = () => {
    for (let i = 0; i < size; i += 1) {
      matrice.push(new Array(size).fill(defaultValue));
    }
  };

  initialize();

  const setSingleCellObject = (x, y, state) => {
    if (x < size && y < size) {
      matrice[y][x] = state;
      return true;
    }
    throw new Error('Coordinates out of bounds');
  };

  const getArray = () => matrice;

  const writeSingleCellObjectValue = (x, y, key, value) => {
    if (x < size && y < size) {
      const obj = matrice[y][x];
      const newObj = { ...obj };
      newObj[key] = value;
      matrice[y][x] = newObj;
    }
  };

  const getSingleValue = (x, y) => {
    if (x < size && y < size) {
      return matrice[y][x];
    }
    throw new Error('Coordinates out of bounds');
  };

  return {
    setSingleCellObject,
    getArray,
    getSingleValue,
    writeSingleCellKeyPair: writeSingleCellObjectValue,
  };
}


/***/ }),

/***/ "./src/modules/Player/PlayerFactory.js":
/*!*********************************************!*\
  !*** ./src/modules/Player/PlayerFactory.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerFactory)
/* harmony export */ });
/* harmony import */ var _Gameboard_GameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Gameboard/GameboardFactory */ "./src/modules/Gameboard/GameboardFactory.js");


function PlayerFactory(name) {
  let playerName = name;
  const board = (0,_Gameboard_GameboardFactory__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const arrayOfHits = [];

  const getName = () => playerName;
  const setName = (newName) => {
    playerName = newName;
  };
  const getBoard = () => board;

  const attack = (x, y, enemyPlayer) => {
    const enemyBoard = enemyPlayer.getBoard();
    arrayOfHits.push({ x, y });
    return enemyBoard.receiveAttack(x, y);
  };

  /**
  * Returns an object with x and y coords that have not been hit before.
  * @param {object} coords Object with x and y keys (coordinates).
  */
  const wasAlreadyHit = (coords) => {
    const result = arrayOfHits.some((el) => {
      if (el.x === coords.x && el.y === coords.y) {
        return true;
      }
      return false;
    });
    return result;
  };

  const attackRandomPosition = (enemyPlayer) => {
    if (arrayOfHits >= 100) {
      return;
    }
    const randomSingleCoord = () => Math.floor(Math.random() * 10);

    const randomCoords = () => ({
      x: randomSingleCoord(),
      y: randomSingleCoord(),
    });

    /**
   * Returns an object with x and y coords that have not been hit before.
   */
    const getUniqueCoords = () => {
      let coords = randomCoords();
      if ((wasAlreadyHit(coords))) {
        coords = getUniqueCoords();
      }
      return coords;
    };

    const uniqueCoords = getUniqueCoords();

    const attackData = attack(uniqueCoords.x, uniqueCoords.y, enemyPlayer);
    // eslint-disable-next-line consistent-return
    return attackData;
  };

  let previousHit;
  const smartAttack = (enemyPlayer) => {
    if (previousHit) {
      const { x, y } = previousHit;

      attack(x + 1, y, enemyPlayer);
    } else {
      previousHit = attackRandomPosition();
    }
  };

  const delayedRandomAttack = async (delay, player) => {
    const timer = (ms) => new Promise((res) => setTimeout(res, ms));
    await timer(delay);
    return attackRandomPosition(player);
  };
  return ({
    getName,
    setName,
    getBoard,
    attack,
    attackRandomPosition,
    delayedRandomAttack,
  });
}


/***/ }),

/***/ "./src/modules/Ship/ShipFactory.js":
/*!*****************************************!*\
  !*** ./src/modules/Ship/ShipFactory.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShipFactory)
/* harmony export */ });
function ShipFactory(length) {
  let numberOfHits = 0;

  const hit = () => {
    numberOfHits += 1;
    return true;
  };

  const isSunk = () => (numberOfHits === length);

  const getLength = () => length;

  return { hit, isSunk, getLength };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");



(0,_game__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLE1BQU07QUFDTixlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RmU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxXQUFXO0FBQ1g7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDSzs7QUFFMUIsaURBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS9Db21wb25lbnRzL3N0eWxlcy9Nb2RhbC5jc3M/ZTA0MiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS9Db21wb25lbnRzL3N0eWxlcy9TaGlwUGlja2VyQm9hcmQuY3NzP2IzOWMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0NPTlNUQU5UUy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS9Db21wb25lbnRzL0JvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tL0NvbXBvbmVudHMvQ2VsbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS9Db21wb25lbnRzL0Nsb3NlSWNvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS9Db21wb25lbnRzL0Rlc3Ryb3llZFNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tL0NvbXBvbmVudHMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vQ29tcG9uZW50cy9OYW1lSW5wdXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vQ29tcG9uZW50cy9TaGlwUGlja2VyQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vQ29tcG9uZW50cy9XaW5uZXJBbm91bmNlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS9ET01tYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZWJvYXJkL0N1c3RvbUVycm9ycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZWJvYXJkL0dhbWVib2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0hlbHBlcnMvQXJyYXkyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvUGxheWVyL1BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1NoaXAvU2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCIvLyBHYW1lIHdpbGwgYmUgcGxheWVkIHdpdGggc2hpcHMgb2YgdGhlc2UgbGVuZ3Roc1xuZXhwb3J0IGNvbnN0IFNISVBfTEVOR1RIUyA9IFs1LCA0LCAzLCAzLCAyXTtcblxuLy8gQUkgbW92ZSBkZWxheSBpbiBtaWxsaXNlY29uZHNcbmV4cG9ydCBjb25zdCBBSV9ERUxBWSA9IDI1MDtcblxuLy8gdGhlIHNpemUgb2YgdGhlIGdhbWVib2FyZFxuZXhwb3J0IGNvbnN0IEVER0VfU0laRSA9IDEwO1xuIiwiaW1wb3J0IENlbGwgZnJvbSAnLi9DZWxsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmQoYm9hcmREYXRhLCBoYW5kbGVDZWxsQ2xpY2ssIGhhbmRsZUNlbGxIb3Zlcikge1xuICBjb25zdCBib2FyZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9hcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLXdyYXAnKTtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgY29uc3QgYm9hcmRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgYm9hcmRIZWFkaW5nLnRleHRDb250ZW50ID0gYCR7Ym9hcmREYXRhLm5hbWV9J3MgZmxlZXRgO1xuXG4gIGNvbnN0IGNoYW5nZUhlYWRpbmdOYW1lID0gKG5hbWUpID0+IHtcbiAgICBib2FyZEhlYWRpbmcudGV4dENvbnRlbnQgPSBgJHtuYW1lfSdzIGZsZWV0YDtcbiAgfTtcblxuICBjb25zdCBzZXROYW1lID0gKG5hbWUpID0+IGNoYW5nZUhlYWRpbmdOYW1lKG5hbWUpO1xuXG4gIGNvbnN0IGNsZWFuID0gKCkgPT4ge1xuICAgIGJvYXJkLnRleHRDb250ZW50ID0gJyc7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyID0gKGFycmF5KSA9PiB7XG4gICAgYXJyYXkuZm9yRWFjaCgocm93RGF0YSwgeSkgPT4ge1xuICAgICAgcm93RGF0YS5mb3JFYWNoKChjZWxsRGF0YSwgeCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50Q2VsbCA9IENlbGwoeCwgeSwgY2VsbERhdGEsIGJvYXJkRGF0YSwgaGFuZGxlQ2VsbENsaWNrLCBoYW5kbGVDZWxsSG92ZXIpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChjdXJyZW50Q2VsbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBib2FyZFdyYXBwZXIuYXBwZW5kKGJvYXJkSGVhZGluZywgYm9hcmQpO1xuXG4gIGNvbnN0IGdldEJvYXJkRGl2ID0gKCkgPT4gYm9hcmRXcmFwcGVyO1xuXG4gIHJldHVybiB7IGdldEJvYXJkRGl2LCByZW5kZXIsIGNsZWFuLCBzZXROYW1lIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjZWxsKHgsIHksIGNlbGxEYXRhLCBib2FyZERhdGEsIGhhbmRsZUNlbGxDbGljaywgaGFuZGxlQ2VsbEhvdmVyKSB7XG4gIGNvbnN0IGNlbGxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjZWxsRWwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICBjZWxsRWwuZGF0YXNldC54ID0geDtcbiAgY2VsbEVsLmRhdGFzZXQueSA9IHk7XG5cbiAgaWYgKGhhbmRsZUNlbGxDbGljaykge1xuICAgIGNlbGxFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZUNlbGxDbGljayh7IHg6IGNlbGxFbC5kYXRhc2V0LngsIHk6IGNlbGxFbC5kYXRhc2V0LnkgfSkpO1xuICB9XG5cbiAgaWYgKGhhbmRsZUNlbGxIb3Zlcikge1xuICAgIGNlbGxFbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gaGFuZGxlQ2VsbEhvdmVyKHsgeDogY2VsbEVsLmRhdGFzZXQueCwgeTogY2VsbEVsLmRhdGFzZXQueSB9KSk7XG4gIH1cblxuICBpZiAoY2VsbERhdGEuaXNTaGlwICE9PSBmYWxzZSAmJiBib2FyZERhdGEudHlwZSA9PT0gJ3BsYXllcicpIHtcbiAgICBjZWxsRWwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICB9XG5cbiAgaWYgKGNlbGxEYXRhLmlzUHJldmlldyA9PT0gdHJ1ZSkge1xuICAgIGNlbGxFbC5jbGFzc0xpc3QuYWRkKCdwcmV2aWV3Jyk7XG4gIH1cblxuICBpZiAoY2VsbERhdGEuaXNTaGlwID09PSBmYWxzZSAmJiBjZWxsRGF0YS5pc0hpdCA9PT0gdHJ1ZSkge1xuICAgIGNlbGxFbC50ZXh0Q29udGVudCA9ICfirKQnO1xuICB9XG4gIGlmIChjZWxsRGF0YS5pc1NoaXAgIT09IGZhbHNlICYmIGNlbGxEYXRhLmlzSGl0ID09PSB0cnVlKSB7XG4gICAgY2VsbEVsLnRleHRDb250ZW50ID0gJ+KspCc7XG4gICAgY2VsbEVsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuXG4gICAgaWYgKGNlbGxEYXRhLmlzU2hpcC5pc1N1bmsoKSkge1xuICAgICAgY2VsbEVsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2VsbEVsO1xufVxuIiwiY29uc3QgY2xvc2VJY29uID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaW9uaWNvblwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5DbG9zZTwvdGl0bGU+PHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIzMlwiIGQ9XCJNMzY4IDM2OEwxNDQgMTQ0TTM2OCAxNDRMMTQ0IDM2OFwiLz48L3N2Zz4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbG9zZUljb247XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEZXN0cm95ZWRTaGlwcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMudGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLnRpdGxlLnRleHRDb250ZW50ID0gJ0Rlc3Ryb3llZCBzaGlwcyc7XG4gICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Rlc3Ryb3llZC1zaGlwcy13cmFwcGVyJyk7XG4gICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMudGl0bGUpO1xuICB9XG5cbiAgYXBwZW5kU2hpcChzaGlwKSB7XG4gICAgY29uc3Qgc2hpcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkZXN0cm95ZWQtc2hpcCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgc2hpcEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZChzaGlwRWxlbWVudCk7XG4gIH1cblxuICBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLndyYXBwZXI7XG4gIH1cbn1cbiIsImltcG9ydCBjbG9zZUljb24gZnJvbSAnLi9DbG9zZUljb24nO1xuaW1wb3J0ICcuL3N0eWxlcy9Nb2RhbC5jc3MnO1xuXG5jbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1ib3gnKTtcbiAgICB0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSk7XG5cbiAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50KTtcblxuICAgIHRoaXMubW9kYWwuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcbiAgfVxuXG4gIGFkZENsb3NlSWNvbigpIHtcbiAgICB0aGlzLmNsb3NlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY2xvc2VJY29uLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNsb3NlJyk7XG4gICAgdGhpcy5jbG9zZUljb24uaW5uZXJIVE1MICs9IGNsb3NlSWNvbjtcbiAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jbG9zZUljb24pO1xuICB9XG5cbiAgc2hvd093blByb21pc2UoZWxlbWVudCkge1xuICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgfVxuXG4gIHNob3coZWxlbWVudCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5hZGRDbG9zZUljb24oKTtcbiAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgdGhpcy5jbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgdGhpcy5jbGVhbk1vZGFsKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFuTW9kYWwoKSB7XG4gICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgdGhpcy5jb250ZW50LmlubmVyVGV4dCA9ICcnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBNb2RhbCgpO1xuIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnO1xuXG5jbGFzcyBFbnRlck5hbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1vZGFsID0gTW9kYWw7XG4gIH1cblxuICBhc3luYyBzaG93KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IG5hbWU7XG4gICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ25hbWUtaW5wdXQtd3JhcHBlcicpO1xuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnRW50ZXIgeW91ciBuYW1lJztcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2ZvY3VzJywgJycpO1xuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdQbGVhc2UgdXNlIGEgbmFtZSBiZXR3ZWVuIDIgYW5kIDE1IGNoYXJhY3RlcnMnO1xuXG4gICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgIGxhYmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1pbnB1dCcpO1xuICAgICAgICAgIHRoaXMubW9kYWwuY2xlYW5Nb2RhbCgpO1xuICAgICAgICAgIHJlc29sdmUobmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1pbnB1dCcpO1xuICAgICAgICAgIGxhYmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICdZb3VyIG5hbWUnO1xuICAgICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgIGlucHV0Lm1heExlbmd0aCA9IDE1O1xuICAgICAgaW5wdXQubWluTGVuZ3RoID0gMjtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIG5hbWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICB9KTtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICBoYW5kbGVTdWJtaXQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBoYW5kbGVTdWJtaXQoZXZlbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGlucHV0QnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaW5wdXRCdXR0b25XcmFwcGVyLmFwcGVuZChpbnB1dCwgYnV0dG9uKTtcbiAgICAgIHdyYXBwZXIuYXBwZW5kKHRpdGxlLCBpbnB1dEJ1dHRvbldyYXBwZXIsIGxhYmVsKTtcbiAgICAgIHRoaXMubW9kYWwuc2hvd093blByb21pc2Uod3JhcHBlcik7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudGVyTmFtZSgpO1xuIiwiaW1wb3J0IHsgU0hJUF9MRU5HVEhTIH0gZnJvbSAnLi4vLi4vQ09OU1RBTlRTJztcbmltcG9ydCAnLi9zdHlsZXMvU2hpcFBpY2tlckJvYXJkLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXBQaWNrZXJCb2FyZChyb3RhdGVIYW5kbGVyLCBnZXRDdXJyZW50U2hpcElEKSB7XG4gIGxldCBpc1ZlcnRpY2FsID0gZmFsc2U7XG5cbiAgY29uc3QgYm9hcmRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkV3JhcC5pZCA9ICdzaGlwLXBpY2tlcic7XG4gIGJvYXJkV3JhcC5jbGFzc0xpc3QuYWRkKCdib2FyZC13cmFwJyk7XG5cbiAgY29uc3Qgc2hpcFBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaGlwUGlja2VyLmNsYXNzTGlzdC5hZGQoJ3NoaXBwaWNrZXInKTtcblxuICBjb25zdCBhcnJvd0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYXJyb3dMZWZ0LmNsYXNzTGlzdC5hZGQoJ2Fycm93LWxlZnQnKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgZmxlZXQnO1xuXG4gIGNvbnN0IGN1cnJlbnRTaGlwV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjdXJyZW50U2hpcFdyYXAuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1zaGlwLXdyYXAnKTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1JvdGF0ZSBzaGlwJztcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlzVmVydGljYWwgPSAhaXNWZXJ0aWNhbDtcbiAgICByZW5kZXIoKTtcbiAgICByb3RhdGVIYW5kbGVyKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGdldEN1cnJlbnRTaGlwRE9NID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTaGlwTGVuZ3RoID0gU0hJUF9MRU5HVEhTW2dldEN1cnJlbnRTaGlwSUQoKV07XG4gICAgY29uc3Qgc2hpcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtdmVydGljYWwnKTtcbiAgICB9XG4gICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGVzdHJveWVkLXNoaXAnLCAnY3VycmVudC1zaGlwJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgc2hpcEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICAgIHJldHVybiBzaGlwRWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBjbGVhbiA9ICgpID0+IHtcbiAgICBjdXJyZW50U2hpcFdyYXAudGV4dENvbnRlbnQgPSAnJztcbiAgICBib2FyZFdyYXAudGV4dENvbnRlbnQgPSAnJztcbiAgICBzaGlwUGlja2VyLnRleHRDb250ZW50ID0gJyc7XG4gIH07XG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICBjbGVhbigpO1xuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gZ2V0Q3VycmVudFNoaXBET00oKTtcbiAgICBjdXJyZW50U2hpcFdyYXAuYXBwZW5kQ2hpbGQoY3VycmVudFNoaXApO1xuICAgIHNoaXBQaWNrZXIuYXBwZW5kKGFycm93TGVmdCwgdGl0bGUsIGJ1dHRvbiwgY3VycmVudFNoaXBXcmFwKTtcbiAgICBib2FyZFdyYXAuYXBwZW5kKHNoaXBQaWNrZXIpO1xuICB9O1xuXG4gIGNvbnN0IGdldEJvYXJkV3JhcCA9ICgpID0+IGJvYXJkV3JhcDtcblxuICByZXR1cm4geyBnZXRCb2FyZFdyYXAsIGRpc3BsYXlDdXJyZW50U2hpcDogZ2V0Q3VycmVudFNoaXBET00sIHJlbmRlciB9O1xufVxuIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnO1xuXG5jbGFzcyBXaW5uZXJBbm91bmNlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubW9kYWwgPSBNb2RhbDtcbiAgfVxuXG4gIGFzeW5jIGFubm91bmNlV2lubmVyKG5hbWUpIHtcbiAgICBjb25zdCBhbm5vdW5jZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGFubm91bmNlbWVudC50ZXh0Q29udGVudCA9IGAke25hbWV9IGhhcyB3b24gdGhlIGdhbWUhYDtcbiAgICBhd2FpdCB0aGlzLm1vZGFsLnNob3coYW5ub3VuY2VtZW50KTtcbiAgfVxufVxuXG5jb25zdCBXaW5uZXJNb2RhbCA9IG5ldyBXaW5uZXJBbm91bmNlbWVudCgpO1xuZXhwb3J0IGRlZmF1bHQgV2lubmVyTW9kYWw7XG4iLCJpbXBvcnQgQm9hcmQgZnJvbSAnLi9Db21wb25lbnRzL0JvYXJkJztcbmltcG9ydCBEZXN0cm95ZWRTaGlwcyBmcm9tICcuL0NvbXBvbmVudHMvRGVzdHJveWVkU2hpcHMnO1xuaW1wb3J0IEVudGVyTmFtZSBmcm9tICcuL0NvbXBvbmVudHMvTmFtZUlucHV0JztcbmltcG9ydCBTaGlwUGlja2VyQm9hcmQgZnJvbSAnLi9Db21wb25lbnRzL1NoaXBQaWNrZXJCb2FyZCc7XG5pbXBvcnQgV2lubmVyTW9kYWwgZnJvbSAnLi9Db21wb25lbnRzL1dpbm5lckFub3VuY2VtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRE9NbWFuYWdlcihcbiAgcGxheWVyQm9hcmQsXG4gIGVuZW15Qm9hcmQsXG4gIGhhbmRsZUVuZW15Q2VsbENsaWNrLFxuICBoYW5kbGVQbGF5ZXJDZWxsQ2xpY2ssXG4gIGhhbmRsZVBsYXllckNlbGxIb3ZlcixcbiAgcm90YXRlSGFuZGxlcixcbiAgZ2V0Q3VycmVudFNoaXBJRCxcbikge1xuICBsZXQgc2hvd2luZ01vZGFsID0gZmFsc2U7XG4gIGNvbnN0IGdhbWVhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVhcmVhJyk7XG4gIGdhbWVhcmVhLnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IHBsYXllckRlc3Ryb3llZFNoaXBzRE9NID0gbmV3IERlc3Ryb3llZFNoaXBzKCk7XG4gIGNvbnN0IGVuZW15RGVzdHJveWVkU2hpcHNET00gPSBuZXcgRGVzdHJveWVkU2hpcHMoKTtcbiAgY29uc3Qgc2hpcFBpY2tlckJvYXJkID0gU2hpcFBpY2tlckJvYXJkKHJvdGF0ZUhhbmRsZXIsIGdldEN1cnJlbnRTaGlwSUQpO1xuICBjb25zdCBib2FyZHNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkc1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYm9hcmRzLXdyYXBwZXInKTtcbiAgY29uc3QgcGxheWVyQm9hcmRET00gPSBCb2FyZChcbiAgICB7XG4gICAgICBuYW1lOiAnUGxheWVyJyxcbiAgICAgIHR5cGU6ICdwbGF5ZXInLFxuICAgIH0sXG4gICAgaGFuZGxlUGxheWVyQ2VsbENsaWNrLFxuICAgIGhhbmRsZVBsYXllckNlbGxIb3ZlcixcbiAgKTtcbiAgY29uc3QgZW5lbXlCb2FyZERPTSA9IEJvYXJkKFxuICAgIHtcbiAgICAgIG5hbWU6ICdFbmVteScsXG4gICAgICB0eXBlOiAnZW5lbXknLFxuICAgIH0sXG4gICAgaGFuZGxlRW5lbXlDZWxsQ2xpY2ssXG4gICk7XG5cbiAgY29uc3Qgc2V0UGxheWVyTmFtZSA9IChuYW1lKSA9PiBwbGF5ZXJCb2FyZERPTS5zZXROYW1lKG5hbWUpO1xuXG4gIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyRGVzdHJveWVkU2hpcHMgPSAocGxheWVyRGVzdHJveWVkU2hpcHNET00uZ2V0RWxlbWVudCgpKTtcbiAgICBjb25zdCBlbmVteURlc3Ryb3llZFNoaXBzID0gKGVuZW15RGVzdHJveWVkU2hpcHNET00uZ2V0RWxlbWVudCgpKTtcblxuICAgIGJvYXJkc1dyYXBwZXIuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmRET00uZ2V0Qm9hcmREaXYoKSk7XG4gICAgYm9hcmRzV3JhcHBlci5hcHBlbmRDaGlsZChzaGlwUGlja2VyQm9hcmQuZ2V0Qm9hcmRXcmFwKCkpO1xuICAgIGdhbWVhcmVhLmFwcGVuZChwbGF5ZXJEZXN0cm95ZWRTaGlwcywgYm9hcmRzV3JhcHBlciwgZW5lbXlEZXN0cm95ZWRTaGlwcyk7XG4gICAgc2hpcFBpY2tlckJvYXJkLmRpc3BsYXlDdXJyZW50U2hpcCgpO1xuICB9O1xuICBpbml0aWFsaXplKCk7XG5cbiAgY29uc3Qgc3dpdGNoVG9FbmVteUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1waWNrZXInKTtcbiAgICBzaGlwUGlja2VyLnJlbW92ZSgpO1xuICAgIGJvYXJkc1dyYXBwZXIuYXBwZW5kQ2hpbGQoZW5lbXlCb2FyZERPTS5nZXRCb2FyZERpdigpKTtcbiAgfTtcblxuICBjb25zdCBzaG93V2luTW9kYWwgPSBhc3luYyAobmFtZSkgPT4ge1xuICAgIGlmICghc2hvd2luZ01vZGFsKSB7XG4gICAgICBzaG93aW5nTW9kYWwgPSB0cnVlO1xuICAgICAgYXdhaXQgV2lubmVyTW9kYWwuYW5ub3VuY2VXaW5uZXIobmFtZSk7XG4gICAgICBzaG93aW5nTW9kYWwgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2hvd05hbWVNb2RhbCA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgbmFtZTtcbiAgICBpZiAoIXNob3dpbmdNb2RhbCkge1xuICAgICAgc2hvd2luZ01vZGFsID0gdHJ1ZTtcbiAgICAgIG5hbWUgPSBhd2FpdCBFbnRlck5hbWUuc2hvdygpO1xuICAgICAgc2hvd2luZ01vZGFsID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBuYW1lIHx8ICdQbGF5ZXInO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFuQm9hcmRzID0gKCkgPT4ge1xuICAgIHBsYXllckJvYXJkRE9NLmNsZWFuKCk7XG4gICAgZW5lbXlCb2FyZERPTS5jbGVhbigpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckJvYXJkcyA9ICgpID0+IHtcbiAgICBjbGVhbkJvYXJkcygpO1xuICAgIHBsYXllckJvYXJkRE9NLnJlbmRlcihwbGF5ZXJCb2FyZC5nZXRBcnJheSgpKTtcbiAgICBlbmVteUJvYXJkRE9NLnJlbmRlcihlbmVteUJvYXJkLmdldEFycmF5KCkpO1xuXG4gICAgc2hpcFBpY2tlckJvYXJkLnJlbmRlcigpO1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZERlc3Ryb3llZFNoaXAgPSAoc2hpcCwgcGxheWVyKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuICAgIHN3aXRjaCAocGxheWVyKSB7XG4gICAgICBjYXNlICdwbGF5ZXInOlxuICAgICAgICBwbGF5ZXJEZXN0cm95ZWRTaGlwc0RPTS5hcHBlbmRTaGlwKHNoaXApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VuZW15JzpcbiAgICAgICAgZW5lbXlEZXN0cm95ZWRTaGlwc0RPTS5hcHBlbmRTaGlwKHNoaXApO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXJCb2FyZHMsXG4gICAgYXBwZW5kRGVzdHJveWVkU2hpcCxcbiAgICBoYW5kbGVXaW46IHNob3dXaW5Nb2RhbCxcbiAgICBzaG93TmFtZU1vZGFsLFxuICAgIHN3aXRjaFRvRW5lbXlCb2FyZCxcbiAgICBzZXRQbGF5ZXJOYW1lLFxuICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCBET01tYW5hZ2VyIGZyb20gJy4vZG9tL0RPTW1hbmFnZXInO1xuaW1wb3J0IFBsYXllckZhY3RvcnkgZnJvbSAnLi9tb2R1bGVzL1BsYXllci9QbGF5ZXJGYWN0b3J5JztcbmltcG9ydCB7IEFJX0RFTEFZLCBTSElQX0xFTkdUSFMgfSBmcm9tICcuL0NPTlNUQU5UUyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnYW1lTG9vcChsYXN0VXNlZE5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRTaGlwSUQgPSAwO1xuICAgIGNvbnN0IHBsYXllciA9IFBsYXllckZhY3RvcnkoJ3BsYWNlaG9sZGVyJyk7XG4gICAgY29uc3QgZW5lbXkgPSBQbGF5ZXJGYWN0b3J5KCdDb21wdXRlcicpO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gcGxheWVyLmdldEJvYXJkKCk7XG4gICAgY29uc3QgZW5lbXlCb2FyZCA9IGVuZW15LmdldEJvYXJkKCk7XG4gICAgY29uc3QgZGlzcGxheU1hbmFnZXIgPSBET01tYW5hZ2VyKFxuICAgICAgcGxheWVyQm9hcmQsXG4gICAgICBlbmVteUJvYXJkLFxuICAgICAgaGFuZGxlRW5lbXlDZWxsQ2xpY2ssXG4gICAgICBoYW5kbGVQbGF5ZXJDZWxsQ2xpY2ssXG4gICAgICBoYW5kbGVQbGF5ZXJDZWxsSG92ZXIsXG4gICAgICByb3RhdGVIYW5kbGVyLFxuICAgICAgZ2V0Q3VycmVudFNoaXBJRCxcbiAgICApO1xuXG4gICAgbGV0IGxpc3RlbkZvckNsaWNrc0VuZW15Qm9hcmQgPSBmYWxzZTtcbiAgICBsZXQgbmV4dFBsYXllciA9ICdwbGF5ZXInO1xuICAgIGxldCBwbGFjaW5nU2hpcHMgPSB0cnVlO1xuICAgIGxldCBpc1NoaXBWZXJ0aWNhbCA9IGZhbHNlO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gcGxheWVyTmFtZU1vZGFsKCkge1xuICAgICAgY29uc3QgcGxheWVyTmFtZSA9IGF3YWl0IGdldFBsYXllck5hbWUoKTtcbiAgICAgIHBsYXllci5zZXROYW1lKHBsYXllck5hbWUpO1xuICAgICAgZGlzcGxheU1hbmFnZXIuc2V0UGxheWVyTmFtZShwbGF5ZXJOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoIWxhc3RVc2VkTmFtZSkge1xuICAgICAgcGxheWVyTmFtZU1vZGFsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllci5zZXROYW1lKGxhc3RVc2VkTmFtZSk7XG4gICAgICBkaXNwbGF5TWFuYWdlci5zZXRQbGF5ZXJOYW1lKGxhc3RVc2VkTmFtZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcm90YXRlSGFuZGxlcigpIHtcbiAgICAgIGlzU2hpcFZlcnRpY2FsID0gIWlzU2hpcFZlcnRpY2FsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTaGlwSUQoKSB7XG4gICAgICByZXR1cm4gY3VycmVudFNoaXBJRDtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQbGF5ZXJOYW1lKCkge1xuICAgICAgY29uc3QgbmFtZSA9IGF3YWl0IGRpc3BsYXlNYW5hZ2VyLnNob3dOYW1lTW9kYWwoKTtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNoZWNrV2lubmVyKCkge1xuICAgICAgaWYgKHBsYXllckJvYXJkLmFyZUFsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgIGF3YWl0IGRpc3BsYXlNYW5hZ2VyLmhhbmRsZVdpbihlbmVteS5nZXROYW1lKCkpO1xuICAgICAgICByZXNvbHZlKHBsYXllci5nZXROYW1lKCkpO1xuICAgICAgfVxuICAgICAgaWYgKGVuZW15Qm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgYXdhaXQgZGlzcGxheU1hbmFnZXIuaGFuZGxlV2luKHBsYXllci5nZXROYW1lKCkpO1xuICAgICAgICByZXNvbHZlKHBsYXllci5nZXROYW1lKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBsYXllclR1cm4gPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgYXR0YWNrRGF0YSA9IGF3YWl0IHBsYXllci5hdHRhY2soZGF0YS54LCBkYXRhLnksIGVuZW15KTtcbiAgICAgIGNoZWNrV2lubmVyKCk7XG4gICAgICBkaXNwbGF5TWFuYWdlci5yZW5kZXJCb2FyZHMoKTtcbiAgICAgIGlmIChhdHRhY2tEYXRhPy5pc1N1bmsgPT09IHRydWUpIHtcbiAgICAgICAgZGlzcGxheU1hbmFnZXIuYXBwZW5kRGVzdHJveWVkU2hpcChhdHRhY2tEYXRhLmlzU2hpcCwgJ2VuZW15Jyk7XG4gICAgICB9XG4gICAgICBpZiAoYXR0YWNrRGF0YT8uaXNTaGlwICE9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gJ3BsYXllcic7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ2NvbXB1dGVyJztcbiAgICB9O1xuXG4gICAgY29uc3QgY29tcHV0ZXJUdXJuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZW5lbXlBdHRhY2tEYXRhID0gYXdhaXQgZW5lbXkuZGVsYXllZFJhbmRvbUF0dGFjayhBSV9ERUxBWSwgcGxheWVyKTtcbiAgICAgIGNoZWNrV2lubmVyKCk7XG4gICAgICBkaXNwbGF5TWFuYWdlci5yZW5kZXJCb2FyZHMoKTtcblxuICAgICAgaWYgKGVuZW15QXR0YWNrRGF0YT8uaXNTdW5rID09PSB0cnVlKSB7XG4gICAgICAgIGRpc3BsYXlNYW5hZ2VyLmFwcGVuZERlc3Ryb3llZFNoaXAoZW5lbXlBdHRhY2tEYXRhLmlzU2hpcCwgJ3BsYXllcicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5lbXlBdHRhY2tEYXRhPy5pc1NoaXAgIT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAnY29tcHV0ZXInO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdwbGF5ZXInO1xuICAgIH07XG5cbiAgICBjb25zdCBvbmVHYW1lVHVybiA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAobGlzdGVuRm9yQ2xpY2tzRW5lbXlCb2FyZCAmJiAobmV4dFBsYXllciA9PT0gJ3BsYXllcicpKSB7XG4gICAgICAgICAgbmV4dFBsYXllciA9IGF3YWl0IHBsYXllclR1cm4oZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5leHRQbGF5ZXIgPT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgICBsaXN0ZW5Gb3JDbGlja3NFbmVteUJvYXJkID0gZmFsc2U7XG4gICAgICAgICAgbmV4dFBsYXllciA9IGF3YWl0IGNvbXB1dGVyVHVybigpO1xuICAgICAgICAgIGlmIChuZXh0UGxheWVyID09PSAnY29tcHV0ZXInKSB7XG4gICAgICAgICAgICBvbmVHYW1lVHVybignJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpc3RlbkZvckNsaWNrc0VuZW15Qm9hcmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBpZ25vcmUgZXJyb3JcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IHByZXZEYXRhO1xuICAgIGZ1bmN0aW9uIGhhbmRsZVBsYXllckNlbGxIb3ZlcihkYXRhKSB7XG4gICAgICBpZiAocGxhY2luZ1NoaXBzKSB7XG4gICAgICAgIGlmIChwcmV2RGF0YT8ueCAhPT0gZGF0YS54IHx8IHByZXZEYXRhPy55ICE9PSBkYXRhLnkpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGxheWVyQm9hcmQucHJldmlld1NoaXBQbGFjZW1lbnQoXG4gICAgICAgICAgICAgIE51bWJlcihkYXRhLngpLFxuICAgICAgICAgICAgICBOdW1iZXIoZGF0YS55KSxcbiAgICAgICAgICAgICAgaXNTaGlwVmVydGljYWwsXG4gICAgICAgICAgICAgIFNISVBfTEVOR1RIU1tjdXJyZW50U2hpcElEXSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkaXNwbGF5TWFuYWdlci5yZW5kZXJCb2FyZHMoKTtcbiAgICAgICAgICAgIHByZXZEYXRhID0geyAuLi5kYXRhIH07XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVBsYXllckNlbGxDbGljayhkYXRhKSB7XG4gICAgICBpZiAocGxhY2luZ1NoaXBzKSB7XG4gICAgICAgIGlmIChjdXJyZW50U2hpcElEIDwgU0hJUF9MRU5HVEhTLmxlbmd0aCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICAgIE51bWJlcihkYXRhLngpLFxuICAgICAgICAgICAgICBOdW1iZXIoZGF0YS55KSxcbiAgICAgICAgICAgICAgaXNTaGlwVmVydGljYWwsXG4gICAgICAgICAgICAgIFNISVBfTEVOR1RIU1tjdXJyZW50U2hpcElEXSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdXJyZW50U2hpcElEICs9IDE7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvci5uYW1lID09PSAnT3V0T2ZCb3VuZHNFcnJvcicgfHwgZXJyb3IubmFtZSA9PT0gJ092ZXJsYXBFcnJvcicpIHtcbiAgICAgICAgICAgICAgLy8gZG8gbm90aGluZywgaWdub3JlIHRob3NlIGVycm9yc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudFNoaXBJRCA9PT0gU0hJUF9MRU5HVEhTLmxlbmd0aCkge1xuICAgICAgICAgIHBsYWNpbmdTaGlwcyA9IGZhbHNlO1xuICAgICAgICAgIGN1cnJlbnRTaGlwSUQgPSAwO1xuICAgICAgICAgIGxpc3RlbkZvckNsaWNrc0VuZW15Qm9hcmQgPSB0cnVlO1xuICAgICAgICAgIGF3YWl0IHBsYXllckJvYXJkLmNsZWFuUHJldmlvdXNTaGlwUHJldmlldygpO1xuICAgICAgICAgIGRpc3BsYXlNYW5hZ2VyLnN3aXRjaFRvRW5lbXlCb2FyZCgpO1xuICAgICAgICAgIGRpc3BsYXlNYW5hZ2VyLnJlbmRlckJvYXJkcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRW5lbXlDZWxsQ2xpY2soZGF0YSkge1xuICAgICAgaWYgKGxpc3RlbkZvckNsaWNrc0VuZW15Qm9hcmQpIHtcbiAgICAgICAgb25lR2FtZVR1cm4oZGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZW5lbXlCb2FyZC5hdXRvUGxhY2VTaGlwcyhTSElQX0xFTkdUSFMpO1xuICAgIGRpc3BsYXlNYW5hZ2VyLnJlbmRlckJvYXJkcygpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcGxheSgpIHtcbiAgbGV0IGxhc3RVc2VkTmFtZTtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICAvLyBlbmRsZXNzIGdhbWVwbGF5XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICBsYXN0VXNlZE5hbWUgPSBhd2FpdCBnYW1lTG9vcChsYXN0VXNlZE5hbWUpO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xuZXhwb3J0IGNsYXNzIE92ZXJsYXBFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9ICdPdmVybGFwRXJyb3InO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPdXRPZkJvdW5kc0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gJ091dE9mQm91bmRzRXJyb3InO1xuICB9XG59XG4iLCJpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5pbXBvcnQgQXJyYXkyRCBmcm9tICcuLi9IZWxwZXJzL0FycmF5MmQnO1xuaW1wb3J0IFNoaXBGYWN0b3J5IGZyb20gJy4uL1NoaXAvU2hpcEZhY3RvcnknO1xuaW1wb3J0IHsgRURHRV9TSVpFIH0gZnJvbSAnLi4vLi4vQ09OU1RBTlRTJztcbmltcG9ydCB7IE91dE9mQm91bmRzRXJyb3IsIE92ZXJsYXBFcnJvciB9IGZyb20gJy4vQ3VzdG9tRXJyb3JzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZUJvYXJkRmFjdG9yeSgpIHtcbiAgY29uc3QgcGxhY2VkU2hpcHMgPSBbXTtcbiAgY29uc3QgbWF0cmljZSA9IEFycmF5MkQoXG4gICAgRURHRV9TSVpFLFxuICAgIHtcbiAgICAgIGlzU2hpcDogZmFsc2UsXG4gICAgICBpc0hpdDogZmFsc2UsXG4gICAgICBpc1ByZXZpZXc6IGZhbHNlLFxuICAgIH0sXG4gICk7XG4gIGxldCBwcmV2aW91c1ByZXZpZXdlZENvb3JkcyA9IFtdO1xuXG4gIC8qKlxuICAqIFByZXBhcmVzIHNoaXAgY29vcmRpbmF0ZXMgYnkgY2hlY2tpbmcgZm9yIGJvdW5kcyBhbmQgaW50ZXJzZWN0c1xuICAqIFRocm93cyBlcnJvciBvbiBib3VuZCBvciBpbnRlcnNlY3QgdmlvbGF0aW9uXG4gICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIG9iamVjdHMgY29udGFpbmluZyAoeCx5KSBjb29yZGluYXRlcy5cbiAgKi9cbiAgY29uc3QgcHJlcGFyZVNoaXBDb29yZGluYXRlcyA9ICh4LCB5LCBpc1ZlcnRpY2FsLCBsZW5ndGgpID0+IHtcbiAgICBjb25zdCBwcmVwYXJlZENvb3JkcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGxldCB5QXhpcztcbiAgICAgIGxldCB4QXhpcztcblxuICAgICAgLy8gY2FsY3VsYXRlIGNvcnJlY3QgeCBhbmQgeSB2YWx1ZXMgYmFzZWQgb24gaWYgdGhlIHNoaXAgaXMgdmVydGljYWwgb3IgaG9yaXpvbnRhbFxuICAgICAgaWYgKGlzVmVydGljYWwpIHtcbiAgICAgICAgeUF4aXMgPSB5ICsgaTtcbiAgICAgICAgeEF4aXMgPSB4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeUF4aXMgPSB5O1xuICAgICAgICB4QXhpcyA9IHggKyBpO1xuICAgICAgfVxuXG4gICAgICBpZiAoeUF4aXMgPj0gRURHRV9TSVpFIHx8IHhBeGlzID49IEVER0VfU0laRSkge1xuICAgICAgICB0aHJvdyBuZXcgT3V0T2ZCb3VuZHNFcnJvcihcIlNoaXAgZG9lc24ndCBmaXQgdGhlIGdhbWVib2FyZFwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VycmVudERhdGFPbkNvb3JkaW5hdGVzID0gbWF0cmljZS5nZXRTaW5nbGVWYWx1ZSh4QXhpcywgeUF4aXMpO1xuXG4gICAgICBpZiAoY3VycmVudERhdGFPbkNvb3JkaW5hdGVzLmlzU2hpcCAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IE92ZXJsYXBFcnJvcignU2hpcCBvdmVybGFwcyBhbHJlYWR5IGV4aXN0aW5nIHNoaXAnKTtcbiAgICAgIH1cblxuICAgICAgcHJlcGFyZWRDb29yZHMucHVzaCh7IHhBeGlzLCB5QXhpcyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHByZXBhcmVkQ29vcmRzO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFuUHJldmlvdXNTaGlwUHJldmlldyA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBwcmV2aW91c1ByZXZpZXdlZENvb3Jkcy5mb3JFYWNoKChjb29yZHMpID0+IHtcbiAgICAgIG1hdHJpY2Uud3JpdGVTaW5nbGVDZWxsS2V5UGFpcihcbiAgICAgICAgY29vcmRzLnhBeGlzLFxuICAgICAgICBjb29yZHMueUF4aXMsXG4gICAgICAgICdpc1ByZXZpZXcnLFxuICAgICAgICBmYWxzZSxcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcHJldmlld1NoaXBQbGFjZW1lbnQgPSAoeCwgeSwgaXNWZXJ0aWNhbCwgbGVuZ3RoKSA9PiB7XG4gICAgY2xlYW5QcmV2aW91c1NoaXBQcmV2aWV3KCk7XG4gICAgY29uc3QgcHJlcGFyZWRDb29yZHMgPSBwcmVwYXJlU2hpcENvb3JkaW5hdGVzKHgsIHksIGlzVmVydGljYWwsIGxlbmd0aCk7XG4gICAgcHJldmlvdXNQcmV2aWV3ZWRDb29yZHMgPSBwcmVwYXJlZENvb3JkcztcblxuICAgIHByZXBhcmVkQ29vcmRzLmZvckVhY2goKGNvb3JkcykgPT4ge1xuICAgICAgbWF0cmljZS53cml0ZVNpbmdsZUNlbGxLZXlQYWlyKFxuICAgICAgICBjb29yZHMueEF4aXMsXG4gICAgICAgIGNvb3Jkcy55QXhpcyxcbiAgICAgICAgJ2lzUHJldmlldycsXG4gICAgICAgIHRydWUsXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9ICh4LCB5LCBpc1ZlcnRpY2FsLCBsZW5ndGgpID0+IHtcbiAgICBjb25zdCBzaGlwID0gU2hpcEZhY3RvcnkobGVuZ3RoKTtcbiAgICBjb25zdCBwcmVwYXJlZENvb3JkcyA9IHByZXBhcmVTaGlwQ29vcmRpbmF0ZXMoeCwgeSwgaXNWZXJ0aWNhbCwgbGVuZ3RoKTtcblxuICAgIHByZXBhcmVkQ29vcmRzLmZvckVhY2goKGNvb3JkcykgPT4ge1xuICAgICAgbWF0cmljZS5zZXRTaW5nbGVDZWxsT2JqZWN0KFxuICAgICAgICBjb29yZHMueEF4aXMsXG4gICAgICAgIGNvb3Jkcy55QXhpcyxcbiAgICAgICAge1xuICAgICAgICAgIGlzU2hpcDogc2hpcCxcbiAgICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcGxhY2VkU2hpcHMucHVzaChzaGlwKTtcbiAgICByZXR1cm4gc2hpcDtcbiAgfTtcblxuICBjb25zdCBnZXRSYW5kb21Db29yZHMgPSAoaXNWZXJ0aWNhbCwgc2hpcExlbmd0aCkgPT4ge1xuICAgIGxldCB4O1xuICAgIGxldCB5O1xuICAgIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKEVER0VfU0laRSAtIHNoaXBMZW5ndGgpKTtcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBFREdFX1NJWkUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKEVER0VfU0laRSAtIHNoaXBMZW5ndGgpKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBFREdFX1NJWkUpO1xuICAgIH1cbiAgICByZXR1cm4geyB4LCB5IH07XG4gIH07XG5cbiAgY29uc3QgYXV0b1BsYWNlU2hpcHMgPSAoc2hpcExlbmd0aHMpID0+IHtcbiAgICBzaGlwTGVuZ3Rocy5mb3JFYWNoKChzaGlwTGVuZ3RoKSA9PiB7XG4gICAgICBjb25zdCBwcmVwYXJlQ29vcmRzQW5kUGxhY2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzVmVydGljYWwgPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGdldFJhbmRvbUNvb3Jkcyhpc1ZlcnRpY2FsLCBzaGlwTGVuZ3RoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBwbGFjZVNoaXAoeCwgeSwgaXNWZXJ0aWNhbCwgc2hpcExlbmd0aCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuICdlcnJvcic7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGxldCBzdGF0dXM7XG4gICAgICBsZXQgbWF4UmV0cmllcyA9IDEwMDtcbiAgICAgIGRvIHtcbiAgICAgICAgc3RhdHVzID0gcHJlcGFyZUNvb3Jkc0FuZFBsYWNlKCk7XG4gICAgICAgIG1heFJldHJpZXMgLT0gMTtcbiAgICAgICAgaWYgKG1heFJldHJpZXMgPD0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGF1dG9wbGFjZSB5b3VyIHNoaXBzIChtYXggcmV0cmllcyBleGNlZWRlZClcIik7XG4gICAgICAgIH1cbiAgICAgIH0gd2hpbGUgKHN0YXR1cyA9PT0gJ2Vycm9yJyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgY29uc3QgY2VsbCA9IG1hdHJpY2UuZ2V0U2luZ2xlVmFsdWUoeCwgeSk7XG4gICAgbGV0IGRhdGEgPSB7fTtcblxuICAgIC8vIHRocm93IGVycm9yIGlmIHRoZSBjZWxsIHdhcyBhbHJlYWR5IGhpdFxuICAgIGlmIChjZWxsLmlzSGl0ID09PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBoaXQgdGhlIHNhbWUgcGxhY2UgdHdpY2UnKTtcbiAgICB9XG5cbiAgICAvLyByZWdpc3RlciBhIHNoaXAgaGl0IGlmIHRoZXJlJ3MgYSBzaGlwIG9uIHRoZSBjb29yZHMgYW5kIGlzIG5vdCBoaXRcbiAgICBpZiAoY2VsbC5pc1NoaXAgIT09IGZhbHNlICYmIGNlbGwuaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICBjZWxsLmlzU2hpcC5oaXQoKTtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIGlzU2hpcDogY2VsbC5pc1NoaXAsXG4gICAgICAgIGlzSGl0OiB0cnVlLFxuICAgICAgICBpc1N1bms6IGNlbGwuaXNTaGlwLmlzU3VuaygpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyByZWdpc3RlciBhIG1pc3NlZCBoaXRcbiAgICBpZiAoY2VsbC5pc1NoaXAgPT09IGZhbHNlICYmIGNlbGwuaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICBpc1NoaXA6IGZhbHNlLFxuICAgICAgICBpc0hpdDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbWF0cmljZS5zZXRTaW5nbGVDZWxsT2JqZWN0KHgsIHksIGRhdGEpO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIGNvbnN0IGFyZUFsbFNoaXBzU3VuayA9ICgpID0+IHBsYWNlZFNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcblxuICBjb25zdCBnZXRTdW5rU2hpcHMgPSAoKSA9PiBwbGFjZWRTaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuXG4gIGNvbnN0IGdldEFycmF5ID0gKCkgPT4gbWF0cmljZS5nZXRBcnJheSgpO1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYXJlQWxsU2hpcHNTdW5rLFxuICAgIGdldEFycmF5LFxuICAgIGF1dG9QbGFjZVNoaXBzLFxuICAgIGdldFN1bmtTaGlwcyxcbiAgICBwcmV2aWV3U2hpcFBsYWNlbWVudCxcbiAgICBjbGVhblByZXZpb3VzU2hpcFByZXZpZXcsXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnJheTJEKHNpemUsIGRlZmF1bHRWYWx1ZSkge1xuICBjb25zdCBtYXRyaWNlID0gW107XG5cbiAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgICAgbWF0cmljZS5wdXNoKG5ldyBBcnJheShzaXplKS5maWxsKGRlZmF1bHRWYWx1ZSkpO1xuICAgIH1cbiAgfTtcblxuICBpbml0aWFsaXplKCk7XG5cbiAgY29uc3Qgc2V0U2luZ2xlQ2VsbE9iamVjdCA9ICh4LCB5LCBzdGF0ZSkgPT4ge1xuICAgIGlmICh4IDwgc2l6ZSAmJiB5IDwgc2l6ZSkge1xuICAgICAgbWF0cmljZVt5XVt4XSA9IHN0YXRlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignQ29vcmRpbmF0ZXMgb3V0IG9mIGJvdW5kcycpO1xuICB9O1xuXG4gIGNvbnN0IGdldEFycmF5ID0gKCkgPT4gbWF0cmljZTtcblxuICBjb25zdCB3cml0ZVNpbmdsZUNlbGxPYmplY3RWYWx1ZSA9ICh4LCB5LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgaWYgKHggPCBzaXplICYmIHkgPCBzaXplKSB7XG4gICAgICBjb25zdCBvYmogPSBtYXRyaWNlW3ldW3hdO1xuICAgICAgY29uc3QgbmV3T2JqID0geyAuLi5vYmogfTtcbiAgICAgIG5ld09ialtrZXldID0gdmFsdWU7XG4gICAgICBtYXRyaWNlW3ldW3hdID0gbmV3T2JqO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRTaW5nbGVWYWx1ZSA9ICh4LCB5KSA9PiB7XG4gICAgaWYgKHggPCBzaXplICYmIHkgPCBzaXplKSB7XG4gICAgICByZXR1cm4gbWF0cmljZVt5XVt4XTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb29yZGluYXRlcyBvdXQgb2YgYm91bmRzJyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRTaW5nbGVDZWxsT2JqZWN0LFxuICAgIGdldEFycmF5LFxuICAgIGdldFNpbmdsZVZhbHVlLFxuICAgIHdyaXRlU2luZ2xlQ2VsbEtleVBhaXI6IHdyaXRlU2luZ2xlQ2VsbE9iamVjdFZhbHVlLFxuICB9O1xufVxuIiwiaW1wb3J0IEdhbWVCb2FyZEZhY3RvcnkgZnJvbSAnLi4vR2FtZWJvYXJkL0dhbWVib2FyZEZhY3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXJGYWN0b3J5KG5hbWUpIHtcbiAgbGV0IHBsYXllck5hbWUgPSBuYW1lO1xuICBjb25zdCBib2FyZCA9IEdhbWVCb2FyZEZhY3RvcnkoKTtcbiAgY29uc3QgYXJyYXlPZkhpdHMgPSBbXTtcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gcGxheWVyTmFtZTtcbiAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiB7XG4gICAgcGxheWVyTmFtZSA9IG5ld05hbWU7XG4gIH07XG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmQ7XG5cbiAgY29uc3QgYXR0YWNrID0gKHgsIHksIGVuZW15UGxheWVyKSA9PiB7XG4gICAgY29uc3QgZW5lbXlCb2FyZCA9IGVuZW15UGxheWVyLmdldEJvYXJkKCk7XG4gICAgYXJyYXlPZkhpdHMucHVzaCh7IHgsIHkgfSk7XG4gICAgcmV0dXJuIGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfTtcblxuICAvKipcbiAgKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHggYW5kIHkgY29vcmRzIHRoYXQgaGF2ZSBub3QgYmVlbiBoaXQgYmVmb3JlLlxuICAqIEBwYXJhbSB7b2JqZWN0fSBjb29yZHMgT2JqZWN0IHdpdGggeCBhbmQgeSBrZXlzIChjb29yZGluYXRlcykuXG4gICovXG4gIGNvbnN0IHdhc0FscmVhZHlIaXQgPSAoY29vcmRzKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXJyYXlPZkhpdHMuc29tZSgoZWwpID0+IHtcbiAgICAgIGlmIChlbC54ID09PSBjb29yZHMueCAmJiBlbC55ID09PSBjb29yZHMueSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1JhbmRvbVBvc2l0aW9uID0gKGVuZW15UGxheWVyKSA9PiB7XG4gICAgaWYgKGFycmF5T2ZIaXRzID49IDEwMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYW5kb21TaW5nbGVDb29yZCA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgIGNvbnN0IHJhbmRvbUNvb3JkcyA9ICgpID0+ICh7XG4gICAgICB4OiByYW5kb21TaW5nbGVDb29yZCgpLFxuICAgICAgeTogcmFuZG9tU2luZ2xlQ29vcmQoKSxcbiAgICB9KTtcblxuICAgIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHggYW5kIHkgY29vcmRzIHRoYXQgaGF2ZSBub3QgYmVlbiBoaXQgYmVmb3JlLlxuICAgKi9cbiAgICBjb25zdCBnZXRVbmlxdWVDb29yZHMgPSAoKSA9PiB7XG4gICAgICBsZXQgY29vcmRzID0gcmFuZG9tQ29vcmRzKCk7XG4gICAgICBpZiAoKHdhc0FscmVhZHlIaXQoY29vcmRzKSkpIHtcbiAgICAgICAgY29vcmRzID0gZ2V0VW5pcXVlQ29vcmRzKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29vcmRzO1xuICAgIH07XG5cbiAgICBjb25zdCB1bmlxdWVDb29yZHMgPSBnZXRVbmlxdWVDb29yZHMoKTtcblxuICAgIGNvbnN0IGF0dGFja0RhdGEgPSBhdHRhY2sodW5pcXVlQ29vcmRzLngsIHVuaXF1ZUNvb3Jkcy55LCBlbmVteVBsYXllcik7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gICAgcmV0dXJuIGF0dGFja0RhdGE7XG4gIH07XG5cbiAgbGV0IHByZXZpb3VzSGl0O1xuICBjb25zdCBzbWFydEF0dGFjayA9IChlbmVteVBsYXllcikgPT4ge1xuICAgIGlmIChwcmV2aW91c0hpdCkge1xuICAgICAgY29uc3QgeyB4LCB5IH0gPSBwcmV2aW91c0hpdDtcblxuICAgICAgYXR0YWNrKHggKyAxLCB5LCBlbmVteVBsYXllcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZXZpb3VzSGl0ID0gYXR0YWNrUmFuZG9tUG9zaXRpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVsYXllZFJhbmRvbUF0dGFjayA9IGFzeW5jIChkZWxheSwgcGxheWVyKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQocmVzLCBtcykpO1xuICAgIGF3YWl0IHRpbWVyKGRlbGF5KTtcbiAgICByZXR1cm4gYXR0YWNrUmFuZG9tUG9zaXRpb24ocGxheWVyKTtcbiAgfTtcbiAgcmV0dXJuICh7XG4gICAgZ2V0TmFtZSxcbiAgICBzZXROYW1lLFxuICAgIGdldEJvYXJkLFxuICAgIGF0dGFjayxcbiAgICBhdHRhY2tSYW5kb21Qb3NpdGlvbixcbiAgICBkZWxheWVkUmFuZG9tQXR0YWNrLFxuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXBGYWN0b3J5KGxlbmd0aCkge1xuICBsZXQgbnVtYmVyT2ZIaXRzID0gMDtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgbnVtYmVyT2ZIaXRzICs9IDE7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gKG51bWJlck9mSGl0cyA9PT0gbGVuZ3RoKTtcblxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG5cbiAgcmV0dXJuIHsgaGl0LCBpc1N1bmssIGdldExlbmd0aCB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHBsYXkgZnJvbSAnLi9nYW1lJztcblxucGxheSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9