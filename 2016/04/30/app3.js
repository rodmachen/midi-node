var LaunchpadMK2 = require('launchpad-mk2'); // require the module 

var launchpad = new LaunchpadMK2.connect({
  in: 0,
  out: 0, 
  type: LaunchpadMK2.types.MK2 // PRO/MK2 (PRO only works now) 
});
