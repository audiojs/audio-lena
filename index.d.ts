declare const lena: {
	duration: number
	samplesCount: number
	channels: number
	numberOfChannels: number
	sampleRate: number
	formats: string[]
	url(format: string): URL
}

export default lena

declare module 'audio-lena/wav' { const buf: ArrayBuffer; export default buf }
declare module 'audio-lena/mp3' { const buf: ArrayBuffer; export default buf }
declare module 'audio-lena/ogg' { const buf: ArrayBuffer; export default buf }
declare module 'audio-lena/flac' { const buf: ArrayBuffer; export default buf }
declare module 'audio-lena/opus' { const buf: ArrayBuffer; export default buf }
declare module 'audio-lena/aac' { const buf: ArrayBuffer; export default buf }
declare module 'audio-lena/m4a' { const buf: ArrayBuffer; export default buf }
declare module 'audio-lena/aiff' { const buf: ArrayBuffer; export default buf }
declare module 'audio-lena/webm' { const buf: ArrayBuffer; export default buf }
declare module 'audio-lena/caf' { const buf: ArrayBuffer; export default buf }
declare module 'audio-lena/raw' { const buf: ArrayBuffer; export default buf }

declare module 'audio-lena/wav-base64' { const b64: string; export default b64 }
declare module 'audio-lena/mp3-base64' { const b64: string; export default b64 }
declare module 'audio-lena/ogg-base64' { const b64: string; export default b64 }
declare module 'audio-lena/flac-base64' { const b64: string; export default b64 }
declare module 'audio-lena/opus-base64' { const b64: string; export default b64 }
declare module 'audio-lena/aac-base64' { const b64: string; export default b64 }
declare module 'audio-lena/m4a-base64' { const b64: string; export default b64 }
declare module 'audio-lena/aiff-base64' { const b64: string; export default b64 }
declare module 'audio-lena/webm-base64' { const b64: string; export default b64 }
declare module 'audio-lena/caf-base64' { const b64: string; export default b64 }
declare module 'audio-lena/raw-base64' { const b64: string; export default b64 }

declare module 'audio-lena/wav-datauri' { const uri: string; export default uri }
declare module 'audio-lena/mp3-datauri' { const uri: string; export default uri }
declare module 'audio-lena/ogg-datauri' { const uri: string; export default uri }
declare module 'audio-lena/flac-datauri' { const uri: string; export default uri }
declare module 'audio-lena/opus-datauri' { const uri: string; export default uri }
declare module 'audio-lena/aac-datauri' { const uri: string; export default uri }
declare module 'audio-lena/m4a-datauri' { const uri: string; export default uri }
declare module 'audio-lena/aiff-datauri' { const uri: string; export default uri }
declare module 'audio-lena/webm-datauri' { const uri: string; export default uri }
declare module 'audio-lena/caf-datauri' { const uri: string; export default uri }
declare module 'audio-lena/raw-datauri' { const uri: string; export default uri }

declare module 'audio-lena/decode' {
	export default function decode(base64: string): ArrayBuffer
}
