import { sum } from './Module/foo.js';
import _ from 'lodash-es';
import "./css/base.css";
import "./css/style.less";
import { ts } from './ts/app.ts';
import sandy from './images/Sandy.jpg';
console.log('Hello Vite');
console.log(sum(10, 20));
console.log(_.join(['cba', 'nba']));
console.log(ts(123));

const imgEl = document.createElement('img');
imgEl.src = sandy;
document.body.appendChild(imgEl);

import Vue from 'vue';
import VueApp from './vue/App.vue';

new Vue({
  render: h => h(VueApp)
}).$mount('#app');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactApp from './react/App.jsx';

ReactDOM.render(<ReactApp />, document.getElementById('root'));

