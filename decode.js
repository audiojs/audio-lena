export default function decode(str) {
	let binary = atob(str), i = 0, bytes = new Uint8Array(binary.length)
	for (; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
	return bytes.buffer
}
