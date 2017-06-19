# audio-lena [![stable](https://img.shields.io/badge/stability-stable-brightgreen.svg)](http://github.com/badges/stability-badges) [![Build Status](https://img.shields.io/travis/audiojs/audio-lena.svg)](https://travis-ci.org/audiojs/audio-lena)

The [Lena](https://www.freesound.org/people/heshamwhite/sounds/246148/) test audio. Returns _ArrayBuffer_ with mp3 or wav of the record.

Appropriate for testing size (1Mb), length (~12s), noisy background, visible spectral peaks with harmonics, pitch variation, mono (not default number of channels). Good for sound recovery, sfx, filtering, decoding, encoding etc.

| Parameter | Value |
|---|---|
| `samplesCount` | `541184` |
| `duration` | `12.27s` |
| `numberOfChannels` | `1` |
| `sampleRate` | `44100` |
| `wav size` | `1.03 Mb` |
| `mp3 size` | `192.8 Kb` |
| `bitRate` | `705kbps` |
| `artist` | `Lena Stolze` |
| `track title` | `Oh lad le` |
| `album title` | `Das schreckliche Mädchen` |
| `year` | `2014` |

## Usage

[![npm install audio-lena](https://nodei.co/npm/audio-lena.png?mini=true)](https://npmjs.org/package/audio-lena/)

```js
// MP3 arrayBuffer
const lenaBuffer = require('audio-lena/mp3');
const context = require('audio-context')();

context.decodeAudioData(lenaBuffer, (buffer) => {
	source = context.createBufferSource();
	source.buffer = buffer;
	source.connect(context.destination);
	source.loop = true;

	source.start();
})
```

```js
// Decoded arrayBuffer with float32 samples data
const buf = require('audio-lena/raw');

let lenaSamples = new Float32Array(lenaBuf)
let buffer = context.createBuffer(1, lenaSamples.length, 44100)
buffer.getChannelData(0).set(lenaSamples)

let source = context.createBufferSource();
source.buffer = buffer;
source.connect(context.destination);
source.loop = false;

source.start();
```

```js
// Data-uri
const ogg = require('audio-lena/ogg-datauri')

let audio = new Audio()
audio.addEventListener('canplay', () => {
	audio.play()
})
audio.src = ogg
```

## API

### let lena = require('audio-lena')

| Entry | Meaning |
|---|---|
| `audio-lena` | Lena record constructor below. |
| `audio-lena/raw` | _ArrayBuffer_ with float32 samples. |
| `audio-lena/mp3` | _ArrayBuffer_ with encoded mp3 data. |
| `audio-lena/wav` | _ArrayBuffer_ with encoded wav data. |
| `audio-lena/ogg` | _ArrayBuffer_ with encoded ogg data. |
| `audio-lena/flac` | _ArrayBuffer_ with encoded flac data. |
| `audio-lena/raw-base64` | Base64 string with encoded float32 samples. |
| `audio-lena/mp3-base64` | Base64 string with encoded mp3 data. |
| `audio-lena/wav-base64` | Base64 string with encoded wav data. |
| `audio-lena/ogg-base64` | Base64 string with encoded ogg data. |
| `audio-lena/flac-base64` | Base64 string with encoded flac data. |
| `audio-lena/raw-datauri` | Data-URI string with encoded float32 samples. |
| `audio-lena/mp3-datauri` | Data-URI string with encoded mp3 data. |
| `audio-lena/wav-datauri` | Data-URI string with encoded wav data. |
| `audio-lena/ogg-datauri` | Data-URI string with encoded ogg data. |
| `audio-lena/flac-datauri` | Data-URI string with encoded flac data. |

### let result = lena({format: 'mp3', type: 'float'}?)

Get lena record with defined `format` and `type`.

| Format | Meaning |
|---|---|
| `'mp3'` | MP3-encoded data. |
| `'wav'` | WAV-encoded data. |
| `'raw'` | Raw float32 samples. |
| `'ogg'` | OGG-encoded samples. |
| `'flac'` | FLAC-encoded samples. |

| Type | Meaning |
|---|---|
| `'buffer'` | _ArrayBuffer_ with data. |
| `'base64'` | Base64-encoded string. |
| `'data-uri'` | Data-uri string. |


## Reference

* [Lenna](https://en.wikipedia.org/wiki/Lenna) in wiki.
* [Lena.mp3](https://www.freesound.org/people/heshamwhite/sounds/246148/) original.
* [Lena](https://github.com/mikolalysenko/lena) test image.

## Related

* [slient-mp3-datauri](https://github.com/Jam3/silent-mp3-datauri)
