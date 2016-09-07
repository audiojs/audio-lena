# audio-lena [![Build Status](https://travis-ci.org/audiojs/audio-lena.svg?branch=master)](https://travis-ci.org/audiojs/audio-lena) [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

The [Lena](https://www.freesound.org/people/heshamwhite/sounds/246148/) test audio. Returns _ArrayBuffer_ with mp3 or wav of the record.

## Usage

[![npm install audio-lena](https://nodei.co/npm/audio-lena.png?mini=true)](https://npmjs.org/package/audio-lena/)

```js
//wav file
const lena = require('audio-lena/wav');
const context = require('audio-context');

context.decodeAudioData(lena, (buffer) => {
	source = context.createBufferSource();
	source.buffer = buffer;
	source.connect(context.destination);
	source.loop = true;

	source.start();
});

//array buffer
const buf = require('audio-lena/buffer');
const AudioBuffer = require('audio-buffer');

//note mono channel indicator    ↓
let lenaBuffer = new AudioBuffer(1, buf);


//also available mp3
const mp3 = require('audio-lena/mp3');
```

## Why

Perfect size (1Mb), length (12s), noisy background, visible spectral peaks with harmonics, pitch variation, mono (not default number of channels). Good for sound recovery, sfx, filtering, decoding, encoding etc.

## Credits

Thanks to **[@mikolalysenko](https://github.com/mikolalysenko)** for API insight and [freesound.org](https://www.freesound.org) for awesome collection of opensource sounds.

## Reference

* [Lenna](https://en.wikipedia.org/wiki/Lenna) in wiki.
* [Lena.mp3](https://www.freesound.org/people/heshamwhite/sounds/246148/) original.
* [Lena](https://github.com/mikolalysenko/lena) test image.
