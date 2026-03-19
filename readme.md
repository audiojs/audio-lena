# audio-lena [![stable](https://img.shields.io/badge/stability-stable-brightgreen.svg)](http://github.com/badges/stability-badges)

[Lena](https://www.freesound.org/people/heshamwhite/sounds/246148/) test audio fixture for audio decoders/encoders. The audio equivalent of the [Lena test image](https://en.wikipedia.org/wiki/Lenna).

Mono, 44100 Hz, ~12s. Noisy background, visible spectral peaks with harmonics, pitch variation. Good for codec testing, decoding, encoding, DSP, filtering.

| Parameter | Value |
|---|---|
| `samplesCount` | `541184` |
| `duration` | `12.27s` |
| `numberOfChannels` | `1` |
| `sampleRate` | `44100` |
| `artist` | `Lena Stolze` |
| `track` | `Oh lad le` |
| `album` | `Das schreckliche Mädchen` |
| `year` | `2014` |

### Formats

| Format | Size | MIME |
|---|---|---|
| wav | 1057 KB | `audio/wav` |
| mp3 | 193 KB | `audio/mpeg` |
| ogg | 109 KB | `audio/ogg` |
| flac | 473 KB | `audio/flac` |
| opus | 111 KB | `audio/opus` |
| aac | 108 KB | `audio/aac` |
| m4a | 243 KB | `audio/mp4` |
| aiff | 1059 KB | `audio/aiff` |
| webm | 161 KB | `audio/webm` |
| caf | 1058 KB | `audio/x-caf` |
| raw | 2114 KB | float32 samples |

## Usage

```
npm i audio-lena
```

```js
// ArrayBuffer with encoded audio
import wav from 'audio-lena/wav'
import mp3 from 'audio-lena/mp3'
import flac from 'audio-lena/flac'

// Base64 string
import mp3Base64 from 'audio-lena/mp3-base64'

// Data URI
import oggDatauri from 'audio-lena/ogg-datauri'
let audio = new Audio(oggDatauri)

// Raw float32 samples
import raw from 'audio-lena/raw'
let samples = new Float32Array(raw)

// File URL (works in Node and browser)
import lena from 'audio-lena'
let url = lena.url('flac')

// Node: file path
import { fileURLToPath } from 'node:url'
let path = fileURLToPath(lena.url('flac'))
```

## API

### `import lena from 'audio-lena'`

Metadata and helpers.

| Property | Value |
|---|---|
| `lena.duration` | `12.27` |
| `lena.samplesCount` | `541184` |
| `lena.channels` | `1` |
| `lena.numberOfChannels` | `1` |
| `lena.sampleRate` | `44100` |
| `lena.formats` | `['wav', 'mp3', 'ogg', ...]` |
| `lena.url(format)` | `URL` to fixture file |

### `import buf from 'audio-lena/<format>'`

Returns `ArrayBuffer` with encoded audio data.

Formats: `wav`, `mp3`, `ogg`, `flac`, `opus`, `aac`, `m4a`, `aiff`, `webm`, `caf`, `raw`.

### `import b64 from 'audio-lena/<format>-base64'`

Returns base64-encoded string.

### `import uri from 'audio-lena/<format>-datauri'`

Returns data-URI string (`data:<mime>;base64,...`).

## Extra fixtures

Additional encoding variants are included for decoder compatibility testing. No JS modules — access via file path.

**Root variants** (encoded with ffmpeg/sox):

| File | Encoding |
|---|---|
| `lena-24.aiff` | AIFF 24-bit PCM |
| `lena-32.aiff` | AIFF 32-bit PCM |
| `lena-ulaw.aiff` | AIFF µ-law |
| `lena-alaw.aiff` | AIFF A-law |
| `lena-alaw.caf` | CAF A-law |
| `lena-f32.caf` | CAF 32-bit float |
| `lena-vorbis.webm` | WebM Vorbis |

**`audacity/`** (exported from Audacity):

| File | Encoding |
|---|---|
| `lena-24.aiff` | AIFF 24-bit PCM |
| `lena-24-dwvw.aiff` | AIFF 24-bit DWVW compressed |
| `lena-32.wav` | WAV 32-bit float |
| `lena-64.aiff` | AIFF 64-bit float |
| `lena-u.aiff` | AIFF µ-law |
| `lena-a.aiff` | AIFF A-law |
| `lena-gsm.aiff` | AIFF GSM 6.10 compressed |
| `lena-ima-adpcm.aiff` | AIFF IMA-ADPCM |

**`logic/`** (exported from Logic Pro):

| File | Encoding |
|---|---|
| `lena-24.aif` | AIFF 24-bit PCM |
| `lena-24.wav` | WAV 24-bit PCM |
| `lena-32.aif` | AIFF 32-bit float |

Same audio encoded by different tools — useful for testing decoder tolerance across encoder implementations.

## Generating

To regenerate modules from binary fixtures:

```
node generate.js
```

To add a format, drop `lena.<ext>` into the root, add an entry to `generate.js`, and run it.

## Reference

* [Lenna](https://en.wikipedia.org/wiki/Lenna) in wiki.
* [Lena.mp3](https://www.freesound.org/people/heshamwhite/sounds/246148/) original.
* [Lena](https://github.com/mikolalysenko/lena) test image.

## Related

* [silent-mp3-datauri](https://github.com/Jam3/silent-mp3-datauri)
