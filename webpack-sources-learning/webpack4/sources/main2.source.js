(function (modules) {
  // The module cache
  var installedModules = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    // Create a new module (and put it into the cache)
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
    });

    // 把__webpack_require__也传入了
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );

    // Return the exports of the module
    return module.exports;
  }

  // Load entry module and return exports
  return __webpack_require__((__webpack_require__.s = "./src/index.js"));
})({
  "./src/index.js": function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    // 加载同步文件
    var _sync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      "./src/sync.js"
    );
    console.log(_sync__WEBPACK_IMPORTED_MODULE_0__["default"]);
    console.log("webpack 4");
  },

  "./src/sync.js": function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    const data = "同步文件";
    __webpack_exports__["default"] = data;
  },
});
