(function (modules) {
  // 模块缓存
  var installedModules = {};

  // The require function
  function __webpack_require__(moduleId) {
    // 判断注入口有没有缓存id
    if (installedModules[moduleId]) {
      // 直接返回缓存结果
      return installedModules[moduleId].exports;
    }

    // 没有缓存时
    // 构建commonjs的模块标准
    // 构建了 module.exports = {}； 对moduleId模块进行缓存
    /*
        installedModules = {
          "./src/index.js" : {
              i: "./src/index.js",
              l: false,
              exports: {}
          }
        }
    */
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
    });

    // 把设定好的module和module.exports 传入函数的两个参数中
    /*
        function (module, exports) {
            eval('console.log("webpack 4");');
        },
    */
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );

    // 最终返回
    return module.exports;
  }
  // 执行入口函数
  return __webpack_require__("./src/index.js");
})({
  "./src/index.js": function (module, exports) {
    console.log("webpack 4");
  },
});
