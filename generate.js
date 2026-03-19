import { readFileSync, writeFileSync, existsSync } from 'node:fs'

const formats = {
	wav: { file: 'lena.wav', mime: 'audio/wav' },
	mp3: { file: 'lena.mp3', mime: 'audio/mpeg' },
	ogg: { file: 'lena.ogg', mime: 'audio/ogg' },
	flac: { file: 'lena.flac', mime: 'audio/flac' },
	opus: { file: 'lena.opus', mime: 'audio/opus' },
	aac: { file: 'lena.aac', mime: 'audio/aac' },
	m4a: { file: 'lena.m4a', mime: 'audio/mp4' },
	aiff: { file: 'lena.aiff', mime: 'audio/aiff' },
	webm: { file: 'lena.webm', mime: 'audio/webm' },
	caf: { file: 'lena.caf', mime: 'audio/x-caf' },
	raw: { file: 'lena.raw', mime: 'application/octet-stream' },
}

// Generate lena.raw from existing CJS base64 if binary doesn't exist
if (!existsSync('lena.raw') && existsSync('raw-base64.js')) {
	let src = readFileSync('raw-base64.js', 'utf8')
	let b64 = src.match(/['"]([A-Za-z0-9+/=\s]+)['"]\s*$/)?.[1]
	if (b64) {
		writeFileSync('lena.raw', Buffer.from(b64, 'base64'))
		console.log('Created lena.raw from existing base64')
	}
}

for (let [name, { file, mime }] of Object.entries(formats)) {
	if (!existsSync(file)) { console.warn(`Skipping ${name}: ${file} not found`); continue }

	let base64 = readFileSync(file).toString('base64')

	writeFileSync(`${name}-base64.js`, `export default "${base64}"\n`)

	writeFileSync(`${name}.js`,
		`import base64 from './${name}-base64.js'\n` +
		`import decode from './decode.js'\n` +
		`export default decode(base64)\n`
	)

	writeFileSync(`${name}-datauri.js`,
		`import base64 from './${name}-base64.js'\n` +
		`export default 'data:${mime};base64,' + base64\n`
	)

	console.log(`${name}: ${file} (${(readFileSync(file).length / 1024).toFixed(0)} KB)`)
}
