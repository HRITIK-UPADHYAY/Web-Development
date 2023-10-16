// older version of import and export.
// const {x, y} = require('./a.js');

// newer version of import and export(only one value).
// import x from './a.js';

// newer version of import and export(multiple value).
// import {x, y} from './a.js';

// console.log(x, y);


// import sayHii from "./c.js";
// import './c.js';   //run the file c.js.
// import name from './c.js';
// console.log(name);

import {sayHii} from './c.js';
import sayHello from './c.js';

sayHii();
sayHello();