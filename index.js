"use strict";
const cp = require('child_process');

module.exports = function(script, launchtype) {
  if (launchtype === "pm2" || launchtype === "forever") launchtype = launchtype + " start";
  cp.exec(launchtype + ' ' + script, {},
      (err, stdout, stderr) => {
          console.log(`[node-launch] Launching ${script} via ${launchtype}...`);
          if (err) return console.error(`[node-launch] Failed to launch ${script}`, err);
          console.log(`[node-launch] Successfully launched ${script}.`);
      });
};
