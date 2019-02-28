const rl = require('readline').createInterface(process.stdin, process.stdout); // Load the readline library, to allow us to receive a command line input

function calc(required) { // Find the closest gain possible to the required value
	const resistors = [1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2, 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82, 100, 1000000000]; // Create an array of resistor valies, in kohm
	var result = {gain: 10, P1: 0, P2: 0}; // Create an initial result, with values that can be compared against
	var P1, P2, gain; // Create variables to hold our calculated values
	for (R1 = 0; R1 < resistors.length - 1; R1++) { // For each resistor value for R1, except for the open circuit
		for (R2 = R1; R2 < resistors.length; R2++) { // For each resistor value for R2 that is the same or larger than R1
			for (R3 = 0; R3 < resistors.length - 1; R3++) { // For each resistor value for R3, except for the open circuit
				for (R4 = R3; R4 < resistors.length; R4++) { // For each resistor value for R4 that is the same or larger than R3
					P1 = (resistors[R1] * resistors[R2]) / (resistors[R1] + resistors[R2]); // Calculate P1
					P2 = (resistors[R3] * resistors[R4]) / (resistors[R3] + resistors[R4]); // Calculate P2
					gain = P2 / (P1 + P2); // Calculate the gain
					if (Math.abs(required - gain) < Math.abs(required - result.gain) || (Math.abs(required - gain) == Math.abs(required - result.gain)) && P1 + P2 > result.P1 + result.P2) { // If the calculated gain is closer to the required gain than our existing best result, or if it's the same result with a higher combined resistance
						result = {gain: gain, R1: resistors[R1], R2: resistors[R2], R3: resistors[R3], R4: resistors[R4], P1: P1, P2: P2}; // Save our newly calculated gain and other values to our result
					}
				}
			}
		}
	}
	return result; // Return our result
}

function result(gain, answer) {
	console.log("Required gain = " + gain.toFixed(6)); // Print the gain we wanted
	console.log("Actual gain = " + answer.gain.toFixed(6)); // Print the best gain we can do
	["R1", "R2", "R3", "R4"].forEach(res => { // For each resistor
		console.log(res + " = " + answer[res].toFixed(1) + " kohm"); // Print our resistor value
	});
	["P1", "P2"].forEach(res => { // For each P
		console.log(res + " = " + answer[res].toFixed(4) + " kohm"); // Print our resistance value
	});
}

function warn() {
	console.log("Gain must be greater than zero and less than one!"); // Explain the lower and upper limits for the gain
	console.log("Enter zero if you want to exit the program."); // Explain how to exit the program
}

console.log("VOLTAGE DIVIDER"); // Print a title

rl.setPrompt('Enter the voltage divider gain (0 to 1, 0 to exit): '); // Set our readline prompt to ask for the gain
rl.prompt(); // Show our prompt, asking for the gain

rl.on('line', gain => { // When a gain has been entered
	if (!isNaN(gain)) { // If the gain is a valid number
		if (gain == 0) { // If the gain is 0
			rl.close(); // Close our readline
		} else if (gain > 0 && gain < 1) { // If the gain is larger than 0 and smaller than 1
			gain = Number.parseFloat(gain); // Convert our gain to a float
			var answer = calc(gain); // Get the closest gain we can get to our desired gain, along with the resistor and P1/P2 values
			result(gain, answer);
			rl.close(); // Close our readline
		} else { // If the gain is less than 0, or 1 or more
			warn(); // Give invalid value warning
			rl.prompt(); // Ask for a gain again
		}	
	} else {
		console.log("Enter a number!"); // Explain that a number is needed for the gain
		warn(); // Give invalid value warning
		rl.prompt(); // Ask for a gain again
	}
});

rl.on('close', () => { // If the program is closed
	console.log("END OF PROGRAM"); // Print our end of program message
});
