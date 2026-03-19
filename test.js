import { strict as assert } from 'node:assert'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import lena from './index.js'

// metadata
assert.equal(lena.sampleRate, 44100)
assert.equal(lena.channels, 1)
assert.equal(lena.numberOfChannels, 1)
assert.equal(lena.samplesCount, 541184)
assert.equal(lena.duration, 12.27)

// url helper — all fixture files exist
for (let fmt of lena.formats) {
	let url = lena.url(fmt)
	assert(url instanceof URL, `${fmt}: url() should return URL`)
	assert(existsSync(fileURLToPath(url)), `${fmt}: fixture file missing`)
}

// expected sizes (bytes) for binary fixtures
const sizes = {
	wav: 1082576, mp3: 197478, ogg: 111117, flac: 484385, opus: 113518,
	aac: 110476, m4a: 248803, aiff: 1084342, webm: 164805, caf: 1082616,
	raw: 541184 * 4
}

// format modules
for (let fmt of lena.formats) {
	let { default: buf } = await import(`./${fmt}.js`)
	assert(buf instanceof ArrayBuffer, `${fmt}: should export ArrayBuffer`)
	assert.equal(buf.byteLength, sizes[fmt], `${fmt}: size mismatch (${buf.byteLength} !== ${sizes[fmt]})`)

	let { default: b64 } = await import(`./${fmt}-base64.js`)
	assert.equal(typeof b64, 'string', `${fmt}-base64: should export string`)
	assert(b64.length > 0, `${fmt}-base64: should not be empty`)

	let { default: uri } = await import(`./${fmt}-datauri.js`)
	assert(uri.startsWith('data:'), `${fmt}-datauri: should start with data:`)
}

// raw samples sanity: float32 values in [-1, 1] range
let { default: rawBuf } = await import('./raw.js')
let samples = new Float32Array(rawBuf)
assert.equal(samples.length, 541184)
let maxAbs = 0
for (let i = 0; i < samples.length; i++) maxAbs = Math.max(maxAbs, Math.abs(samples[i]))
assert(maxAbs > 0.01, 'raw: samples should have audio content')
assert(maxAbs <= 1.0, 'raw: samples should be normalized')

console.log(`All tests passed (${lena.formats.length} formats)`)
