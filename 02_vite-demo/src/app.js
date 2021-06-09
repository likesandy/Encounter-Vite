// src/app.js

import { sum } from "./js/foo";
import _ from 'lodash-es';
import "./css/style.css";
import "./css/title.less";
import mult from "./ts/mult";
import { createApp } from "vue";
import App from "./vue/app.vue";


console.log("Hello Vite");
console.log(sum(10, 20));
console.log(_.join(["cba", "nba"]));

const titleEl = document.createElement("div");
titleEl.className = "title";
titleEl.innerHTML = "Hello World";
document.body.appendChild(titleEl);

console.log(mult(20, 30));
createApp(App).mount("#app");

