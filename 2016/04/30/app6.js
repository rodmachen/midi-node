var launchpadder = require("launchpadder").Launchpad;
var launchpadColor = require("launchpadder").Color;

// The 0 represents the MIDI port to connect with
// The 1 represents the MIDI output-port to connect with
// Both arguments are optional and default to 0
var pad = new launchpadder();

pad.on("press", function(button) {
    button.light(launchpadColor.GREEN);
    // button.startBlinking();
    console.log(button + " was pressed");
    console.log(button.getState());
    // button.dark();
});

pad.on("release", function(button) {
    button.dark();
    console.log(button + " was released");
});
