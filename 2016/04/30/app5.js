var plaunchpad = require('phi-launchpad');

var midiInt = require('../../../node_modules/phi-launchpad/lib/node_midi_interface.js').midi;
var m = new midiInt('Launchpad MK2');

var lpadIn = new plaunchpad.input();
lpadIn.init(m);

lpadOut = new plaunchpad.output();
lpadOut.init(m);

lpadIn.on('press', function(row, col) {
  console.log(row, col);
});

lpadIn.on('release', function(row, col) {
  console.log(row, col);
});

 
lpadOut.setLed(9, 5, [0, 3]);
// lpadOut.setLed(4, 2, [2, 2]);
// lpadOut.setLed(0, 0, [2, 0]);
// lpadOut.setLed(8, 8, [3, 3]);