exports.rot = (message, rotation) => {
	var rot = "";
	for (i = 0; i < message.length; i++) {
		if (64 < message.charCodeAt(i) && message.charCodeAt(i) < 91) {
			rot += String.fromCharCode(((message.charCodeAt(i) - 65 + rotation) % 26) + 65);
		} else if (96 < message.charCodeAt(i) && message.charCodeAt(i) < 123) {
			rot += String.fromCharCode(((message.charCodeAt(i) - 97 + rotation) % 26) + 97);
		} else {
			rot += message.charAt(i);
		}
	}
	return rot;
};

exports.decrypt = (text) => {
	var letters = {};
	for (var j = 0; j < 26; j++) {
		letters[String.fromCharCode(97 + j)] = 0;
	}
	const frequencies = require("./frequencies.json");
	var deviations = [];
	for (var i = 0; i < 26; i++) {
		var freq = Object.assign({}, letters);
		exports.rot(text, i)
			.split("")
			.forEach(function(s) {
				if (s.toLowerCase() in freq) {
					freq[s.toLowerCase()]++;
				}
			});
		var total = 0;
		for (var letter in freq) {
			total += freq[letter];
		}
		var deviation = 0;
		for (letter in freq) {
			deviation += Math.abs(freq[letter] / total - frequencies[letter]);
		}
		deviations.push(deviation);
	}
	return 26 - deviations.indexOf(Math.min(...deviations));
};
