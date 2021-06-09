// src/app.js
// import { sum } from "./js/foo.js";
import { sum } from "./js/foo";
// 不能在原生模块化中这样导入，以前可以是因为webpack会帮我们解析包
import _ from 'lodash-es';
// import _ from "../node_modules/lodash-es/lodash.default.js";

console.log("Hello Vite");
console.log(sum(10, 20));
console.log(_.join(["cba", "nba"]));