/**
 * Return arraybuffer with lena.wav
 *
 * @module  audio-lena
 */
'use strict';


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

	//open raw samples data
	let lenaBuf = require('./raw');
	let lenaSamples = new Float32Array(lenaBuf)
	let buffer = context.createBuffer(1, lenaSamples.length, 44100)
	buffer.getChannelData(0).set(lenaSamples)
	let source = context.createBufferSource();
	source.buffer = buffer;
	source.connect(context.destination);
	source.loop = false;

	source.start();
	setTimeout(() => source.stop(), 500)


	//ogg-datauri
	var ogg = require('./')({format: 'ogg', type: 'data-uri'})

	var audio = new Audio()
	audio.addEventListener('canplay', () => {
		console.log("Can play!")
		audio.play()
		setTimeout(() => audio.pause(), 500)
	})
	audio.src = ogg
}
