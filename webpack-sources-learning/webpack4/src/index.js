// import "./async";
// import data from "./sync";
// console.log(data);

// import(/* webpackChunkName:"async" */ "./async").then((_) => {
import("./async").then(() => {
  console.log(1);
});

// import(/* webpackChunkName:"sync" */ "./sync").then((_) => {
import("./sync").then((_) => {
  console.log("异步获取1：", _);
});

// import(/* webpackChunkName:"sync2" */ "./sync2").then((_) => {
import("./sync2").then((_) => {
  console.log("异步获取2：", _);
});

console.log("webpack 4");
