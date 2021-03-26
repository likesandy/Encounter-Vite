import { sum } from './Module/foo.js';
import _ from 'lodash-es';
import "./css/base.css";
import "./css/style.less";
import { ts } from './ts/app.ts';

console.log('Hello Vite');
console.log(sum(10,20));
console.log(_.join(['cba','nba']));
console.log(ts(123));