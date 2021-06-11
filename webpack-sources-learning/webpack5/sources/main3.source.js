(() => {
  var __webpack_modules__ = {
    "./src/async.js": (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      Promise.resolve(/*! import() */)
        .then(__webpack_require__.bind(__webpack_require__, "./src/sync.js"))
        .then((data) => {
          console.log(data);
        });
      console.log("async");
    },
    "./src/index.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */
      var _async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./async */ "./src/async.js"
      );
      /* harmony import */
      var _async__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _async__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */
      var _sync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./sync */ "./src/sync.js"
      );
      console.log(_sync__WEBPACK_IMPORTED_MODULE_1__.default);
      console.log("webpack 5");
    },
    "./src/sync.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        default: () => __WEBPACK_DEFAULT_EXPORT__,
      });
      const data = "同步文件";
      const __WEBPACK_DEFAULT_EXPORT__ = data;
    },
  }; // The module cache
  /************************************************************************/
  var __webpack_module_cache__ = {}; // The require function
  
    function __webpack_require__(moduleId) {
     // Check if module is in cache
     if (__webpack_module_cache__[moduleId]) {
       return __webpack_module_cache__[moduleId].exports;
      
    } // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
       // no module.id needed
       // no module.loaded needed
       exports: {},
      
    }); // Execute the module function
    
      __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    ); // Return the exports of the module
    
      return module.exports;
    
  } /* webpack/runtime/compat get default export */
  
  /************************************************************************/
    (() => {
     // getDefaultExport function for compatibility with non-harmony modules
     __webpack_require__.n = (module) => {
       var getter =
        module && module.__esModule
          ?  () => module["default"]
          :  () => module;
       __webpack_require__.d(getter, { a: getter });
       return getter;
      
    };
    
  })(); /* webpack/runtime/define property getters */
  
    (() => {
     // define getter functions for harmony exports
     __webpack_require__.d = (exports, definition) => {
       for (var key in definition) {
         if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
           Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          
        }
        
      }
      
    };
    
  })(); /* webpack/runtime/hasOwnProperty shorthand */
  
    (() => {
     __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    
  })(); /* webpack/runtime/make namespace object */
  
    (() => {
     // define __esModule on exports
     __webpack_require__.r = (exports) => {
       if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
         Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        
      }
       Object.defineProperty(exports, "__esModule", { value: true });
      
    };
    
  })(); // startup // Load entry module
  
  /************************************************************************/
     __webpack_require__("./src/index.js");
   // This entry module used 'exports' so it can't be inlined
  
})();
