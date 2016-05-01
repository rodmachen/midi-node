var midiLaunchpad = require('midi-launchpad');

midiConnector = midiLaunchpad.connect(0);
 
// wait for the connector to be ready 
midiConnector.on("ready",function(launchpad) {
  console.log("Launchpad ready, let's do something");
  // launchpad.displayCharacter("S", launchpad.colors.red.high);
  launchpad.allLight(launchpad.colors.green.low);
});

