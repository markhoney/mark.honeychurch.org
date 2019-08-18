exports.decrypt = (text) => {
	const frequencies = require("./frequencies.json");
	const order = Object.keys(frequencies).sort((a, b) => frequencies[a] - frequencies[b]);
	let letters = {};
	text = text.toLowerCase();
	for (var j = 0; j < 26; j++) {
		const letter = String.fromCharCode(97 + j);
		letters[letter] = text.split(letter).length;
	}
	const docOrder = Object.keys(letters).sort((a, b) => letters[a] - letters[b]);
	
};
