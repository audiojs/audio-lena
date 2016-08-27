# audio-lena [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

The [Lena](https://www.freesound.org/people/heshamwhite/sounds/246148/) test audio. Returns _ArrayBuffer_ with mp3 or wav of the record.

## Usage

[![npm install audio-lena](https://nodei.co/npm/audio-lena.png?mini=true)](https://npmjs.org/package/audio-lena/)

```js
const lena = require('audio-lena/wav');
const context = require('audio-context');

context.decodeAudioData(lena, (buffer) => {
	source = context.createBufferSource();
	source.buffer = buffer;
	source.connect(context.destination);
	source.loop = true;

	source.start();
});
```

## Why

Perfect size (1Mb), length (12s), noisy background, visible spectral peaks with harmonics, pitch variation. Good for sound recovery, filtering, decoding, encoding etc.

## Credits

Thanks to **[@mikolalysenko](https://github.com/mikolalysenko)** for API insight and [freesound.org](https://www.freesound.org) for awesome collection of opensource sounds.

## Reference

* [Lenna](https://en.wikipedia.org/wiki/Lenna) in wiki.
* [Lena.mp3](https://www.freesound.org/people/heshamwhite/sounds/246148/) original.
* [Lena](https://github.com/mikolalysenko/lena) test image.
