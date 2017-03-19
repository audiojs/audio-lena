/**
 * Return arraybuffer with lena.wav
 *
 * @module  audio-lena
 */
'use strict';

const AudioBuffer = require('audio-buffer');


//build script
// var request = new XMLHttpRequest();

// request.open( 'GET', './lena.mp3', true );
// request.responseType = 'arraybuffer';

// document.body.style.wordBreak = 'break-all';

// request.onload = function() {
//     let buf = request.response;
//     let bytes = new Uint8Array(buf);

//     let binary = '';
//     let len = bytes.byteLength;
//     for (var i = 0; i < len; i++) {
//         binary += String.fromCharCode( bytes[ i ] );
//     }

//     document.body.innerHTML = window.btoa( binary );
// }

// request.send();


//test sound
// let lena = require('./');

// context.decodeAudioData(lena, (buffer) => {
// 	source = context.createBufferSource();
// 	source.buffer = buffer;
// 	source.connect(context.destination);
// 	source.loop = true;

// 	source.start();
// });

if (typeof document !== 'undefined') {
	const context = new AudioContext();

	let lenaBuf = require('./buffer');
	let buffer = AudioBuffer(1, lenaBuf);

	let source = context.createBufferSource();
	source.buffer = buffer;
	source.connect(context.destination);
	source.loop = false;

	source.start();
}
