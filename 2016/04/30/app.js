// Launchpad MK2

var MidiStream = require('midi-stream')
 
var duplex = MidiStream('Launchpad MK2', 0)

// write buttons pressed to console 
duplex.on('data', function(data){
  console.log(data)
})

// squares:
// top: [ 144, 81-88, 127 ]
// bottom : [ 144, 11-18, 127 ]
//
// round:
// top: [ 176, 104-111, 127 ]
// right: [ 144, 19-89 (by 10s), 127 ]

// duplex.write([ 144, 21, 0 ])

function play(note, velocity, delay) {
	setTimeout(() => duplex.write([144, note, velocity]), delay);
}

for (var velocity = 0; velocity < 128; velocity++) {
	for (var key = 11; key < 90 ; key++) {
		play(key, 0, 0)
		// play(key, velocity, (velocity * 80) + (key * 10))
	}
}
// var faceCoords = [
//   [1,1], [2,1], [5,1], [6,1],
//   [1,2], [2,2], [5,2], [6,2],
//   [2,4], [5,4],
//   [2,5], [3,5], [4,5], [5,5],
//   [3,6], [4,6]
// ]

// setTimeout(function(){
//   faceCoords.forEach(function(xy){
//     var id = '' + xy[1] + xy[0] 
//     // var id = xy[1] * 16 + xy[0] // convert coords to midi note
//     duplex.write([144, id, 00])
//   })
// }, 1000)

// setTimeout(function(){
//   duplex.end()
// }, 5000)

