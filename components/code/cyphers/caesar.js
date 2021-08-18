exports.rotate = (message, rotation) => !message ? '' : [...message].map((letter) => {
	const char = letter.charCodeAt(0);
	if (64 < char && char < 91) return String.fromCharCode(((char - 65 + rotation) % 26) + 65);
	if (96 < char && char < 123) return String.fromCharCode(((char - 97 + rotation) % 26) + 97);
	return letter;
}).join('');

exports.rotation = (text) => {
	let letters = {};
	for (let j = 0; j < 26; j++) {
		letters[String.fromCharCode(97 + j)] = 0;
	}
	const frequencies = require("./frequencies.json");
	let deviations = [];
	for (let i = 0; i < 26; i++) {
		let freq = Object.assign({}, letters);
		exports.rotate(text, i).split("").forEach((s) => {
			if (s.toLowerCase() in freq) freq[s.toLowerCase()]++;
		});
		let total = 0;
		for (let letter in freq) {
			total += freq[letter];
		}
		let deviation = 0;
		for (let letter in freq) {
			deviation += Math.abs(freq[letter] / total - frequencies[letter]);
		}
		deviations.push(deviation);
	}
	return 26 - deviations.indexOf(Math.min(...deviations));
};

exports.reverse = (text) => !text ? '' : [...text].map((letter) => {
	const char = letter.charCodeAt(0);
	if (64 < char && char < 91) return String.fromCharCode(((27 - (char - 65)) % 26) + 65);
	if (96 < char && char < 123) return String.fromCharCode(((27 - (char - 97)) % 26) + 97);
	return letter;
}).join('');
