'use strict';
const Launchpad = require( 'launchpad-mini' ),
      pad = new Launchpad();

pad.connect().then( () => {     // Auto-detect Launchpad
    console.log('connected, then')
    pad.reset();             // Make Launchpad glow yellow
    pad.on( 'key', k => {
        pad.col( pad.red, k );  // Turn on buttons on press
    } );
} );