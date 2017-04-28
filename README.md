# node-launch
Launch node script(s) with node-launch.
[![downloads](https://img.shields.io/npm/dt/node-launch.svg)](https://www.npmjs.com/package/node-launch)
[![npm](https://img.shields.io/npm/v/node-launch.svg)](https://www.npmjs.com/package/node-launch)

[![npm](https://nodei.co/npm/node-launch.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/node-launch)

# Example
```js
const launch = require('node-launch');

/*
Supported launchtypes:
node
pm2
nodemon
forever
*/

launch('script.js', 'node'); //launch script.js with node
launch('script2.js', 'pm2'); //launch script2.js with pm2
```
