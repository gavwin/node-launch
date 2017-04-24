# node-launch
Launch node script(s) with node-launch.

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
