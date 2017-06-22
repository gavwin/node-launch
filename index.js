const { exec } = require('child_process');

module.exports = (script, launchtype) => {
  if (launchtype === 'pm2' || launchtype === 'forever') launchtype += ' start';
  exec(launchtype + ' ' + script, {}, (err, stdout, stderr) => {
    console.log(`[node-launch] Launching ${script} via ${launchtype}...`);
    if (err) {
      console.error(`[node-launch] Failed to launch ${script}`);
      throw new Error(err);
    } else {
      console.log(`[node-launch] Successfully launched ${script}.`);
    }
  });
};
