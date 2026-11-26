import frequencies from "./frequencies.json";

export const decrypt = (text) => {
	const order = Object.keys(frequencies).sort((a, b) => frequencies[a] - frequencies[b]);
	const letters = {};
	text = text.toLowerCase();
	for (var j = 0; j < 26; j++) {
		const letter = String.fromCharCode(97 + j);
		letters[letter] = text.split(letter).length;
	}
	const docOrder = Object.keys(letters).sort((a, b) => letters[a] - letters[b]);
	const substitutions = Object.fromEntries(docOrder.map((letter, index) => [letter, order[index]]));
	return [...text].map(letter => substitutions[letter] ?? letter).join("");
};

export default {decrypt};
