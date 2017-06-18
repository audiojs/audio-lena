/**
 * @module  audio-lena
 *
 */
'use strict';

module.exports = lena

function lena (options) {
	let type = options && options.type || 'buffer'
	let format = options && options.format || 'wav'
	type = type.replace('-', '')

	if (type === 'buffer') type = ''

	return require(format + '-' + type.toLowerCase())
}


lena.wav = require('./wav')
lena.mp3 = require('./mp3')
lena.raw = require('./raw')

lena.wavDatauri = require('./wav-datauri')
lena.mp3Datauri = require('./mp3-datauri')
lena.rawDatauri = require('./raw-datauri')

lena.wavBase64 = require('./wav-base64')
lena.mp3Base64 = require('./mp3-base64')
lena.rawBase64 = require('./raw-base64')
