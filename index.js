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

	return require('./' + format + '-' + type.toLowerCase())
}

lena.duration = 12.27
lena.samplesCount = 541184
lena.channels = lena.numberOfChannels = 1
lena.sampleRate = 44100

lena.wav = require('./wav')
lena.mp3 = require('./mp3')
lena.raw = require('./raw')
lena.ogg = require('./ogg')
lena.flac = require('./flac')

lena.wavDatauri = require('./wav-datauri')
lena.mp3Datauri = require('./mp3-datauri')
lena.rawDatauri = require('./raw-datauri')
lena.oggDatauri = require('./ogg-datauri')
lena.flacDatauri = require('./flac-datauri')

lena.wavBase64 = require('./wav-base64')
lena.mp3Base64 = require('./mp3-base64')
lena.rawBase64 = require('./raw-base64')
lena.oggBase64 = require('./ogg-base64')
lena.flacBase64 = require('./flac-base64')
