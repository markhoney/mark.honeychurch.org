function Input() {
}

function Calculate(reqGain, stdR, R) { // Find the closest gain possible to the required value
	var P1, P2, gain; // Create variables to hold our calculated values
	var aclGain = 10;
	for (R1 = 0; R1 < stdR.length - 1; R1++) { // For each resistor value for R1, except for the open circuit
		for (R2 = R1; R2 < stdR.length; R2++) { // For each resistor value for R2 that is the same or larger than R1
			for (R3 = 0; R3 < stdR.length - 1; R3++) { // For each resistor value for R3, except for the open circuit
				for (R4 = R3; R4 < stdR.length; R4++) { // For each resistor value for R4 that is the same or larger than R3
					P1 = (stdR[R1] * stdR[R2]) / (stdR[R1] + stdR[R2]); // Calculate P1
					P2 = (stdR[R3] * stdR[R4]) / (stdR[R3] + stdR[R4]); // Calculate P2
					gain = P2 / (P1 + P2); // Calculate the gain
					if (Math.abs(reqGain - gain) < Math.abs(reqGain - aclGain) || (Math.abs(reqGain - gain) == Math.abs(reqGain - aclGain)) && P1 + P2 > R.P1 + R.P2) { // If the calculated gain is closer to the required gain than our existing best result, or if it's the same result with a higher combined resistance
						aclGain = gain; // Save our newly calculated gain
						["R1", "R2", "R3", "R4"].forEach(res => {
							R[res] = stdR[eval(res)];
						});
						["P1", "P2"].forEach(res => {
							R[res] = eval(res);
						});
					}
				}
			}
		}
	}
	return aclGain; // Return our result
}

function Output(reqGain, aclGain, R) {
	console.log("Required gain = " + reqGain.toFixed(6)); // Print the gain we wanted
	console.log("Actual gain = " + aclGain.toFixed(6)); // Print the best gain we can do
	["R1", "R2", "R3", "R4"].forEach(res => {
		console.log(res + " = " + R[res].toFixed(1) + " kohm"); // Print our resistor value
	});
	["P1", "P2"].forEach(res => {
		console.log(res + " = " + R[res].toFixed(4) + " kohm"); // Print our resistance value
	});
}

function main() {
	const rl = require('readline').createInterface(process.stdin, process.stdout); // Load the readline library, to allow us to receive a command line input
	rl.setPrompt('Enter the voltage divider gain (0 to 1, 0 to exit): '); // Set our readline prompt to ask for the gain
	rl.on('close', function() { // If the program is closed
		console.log("END OF PROGRAM"); // Print our end of program message
	});	
	const stdR = [1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2, 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82, 100, 1000000000]; // Create an array of resistor values, in kohm
	console.log("VOLTAGE DIVIDER"); // Print a title
	rl.prompt(); // Show our prompt, asking for the gain
	rl.on('line', function(gain) { // When a gain has been entered
		var error = false;
		if (!isNaN(gain)) { // If the gain is a valid number
			if (gain > 0 && gain < 1) { // If the gain is larger than 0 and smaller than 1
				var R = {R1: 0, R2: 0, R3: 0, R4: 0, P1: 0, P2: 0}; // Create an initial result, with values that can be compared against
				var reqGain = Number.parseFloat(gain); // Convert our gain to a float
				var aclGain = Calculate(reqGain, stdR, R); // Get the closest gain we can get to our desired gain, along with the resistor and P1/P2 values
				Output(reqGain, aclGain, R);
			} else if (gain != 0) { // If the gain is 0
				error = true;
			}
		} else {
			console.log("Enter a number!"); // Explain that a number is needed for the gain
			error = true;
		}
		if (error) {
			console.log("Gain must be greater than zero and less than one!"); // Explain the lower and upper limits for the gain
			console.log("Enter zero if you want to exit the program."); // Explain how to exit the program
			rl.prompt(); // Ask for a gain again
		} else {
			rl.close(); // Close our readline
		}
	});
}

main();
