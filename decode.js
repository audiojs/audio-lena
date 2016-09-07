/**
 * @module audio-lena/decode
 *
 * Convert from base64 to arraybuffer in
 */
'use strict';
var atob = require('atob');

if (!(atob instanceof Function)) atob = window.atob;

module.exports = function decode (str) {
	var binary = atob(str);
	var len = binary.length;
	var bytes = new Uint8Array(len);
	for (var i = 0; i < len; i++)        {
		bytes[i] = binary.charCodeAt(i);
	}
	return bytes.buffer;
}
