const lena = {
	duration: 12.27,
	samplesCount: 541184,
	channels: 1,
	numberOfChannels: 1,
	sampleRate: 44100,
	formats: ['wav', 'mp3', 'ogg', 'flac', 'opus', 'aac', 'm4a', 'aiff', 'webm', 'caf', 'raw'],
	url: (fmt) => new URL(`./lena.${fmt}`, import.meta.url)
}

export default lena
