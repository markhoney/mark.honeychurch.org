#include "pch.h"
#include <iostream>
#include "math.h"
#include <iomanip>
#include <cstddef>
using namespace std;

float Input() {
	float gain;
	bool error;
	do {
		error = false;
		cout << "Enter the voltage divider gain(0 to 1, 0 to exit): ";
		cin >> gain; // Save the user input to our gain
		if (cin.fail()) { // If our unput isn't a float
			cin.clear(); // Clear the error
			cin.ignore(); // Ignore the error
			error = true; // Set our error boolean to true, to loop back and ask for our gain again
			cout << "Enter a number!" << endl; // Explain that a number is needed for the gain
		}
		else if (gain < 0 || gain >= 1) { // If the gain is less than 0, or 1 or more
			error = true; // Set our error boolean to true, to loop back and ask for our gain again
		}
		if (error) { // If there was an error with the input
			cout << "Gain must be greater than zero and less than one!" << endl; // Explain the lower and upper limits for the gain
			cout << "Enter zero if you want to exit the program." << endl; // Explain how to exit the program
		}
	} while (error);
	return gain;
}

float Calculate(float reqGain, float stdR[26], float& R1, float& R2, float& R3, float& R4, float& P1, float& P2) {
	float calcGain, calcP1, calcP2;
	float aclGain = 10; // Set an initial gain to compare against. This needs to be larger than 2, or smaller than -1, so that it is always replaced when doing our first comparison
	for (int i1 = 0; i1 < 25; i1++) { // For each resistor value for r1, except for the open circuit
		for (int i2 = i1; i2 < 26; i2++) { // For each resistor value for r2 that is the same or larger than r1
			for (int i3 = 0; i3 < 25; i3++) { // For each resistor value for r3, except for the open circuit
				for (int i4 = i3; i4 < 26; i4++) { // For each resistor value for r4 that is the same or larger than r3
					calcP1 = (stdR[i1] * stdR[i2]) / (stdR[i1] + stdR[i2]); // Calculate p1
					calcP2 = (stdR[i3] * stdR[i4]) / (stdR[i3] + stdR[i4]); // Calculate p2
					calcGain = calcP2 / (calcP1 + calcP2); // Calculate the gain
					if (fabs(reqGain - calcGain) < fabs(reqGain - aclGain) || ((fabs(reqGain - calcGain) == fabs(reqGain - aclGain)) && calcP1 + calcP1 > P1 + P2)) { // If the calculated gain is closer to the required gain than our existing best result, or if it's the same result with a higher combined resistance
						aclGain = calcGain; // Save our newly calculated gain
						P1 = calcP1; // Save our newly calculated P1
						P2 = calcP2;// Save our newly calculated P2
						R1 = stdR[i1];// Save our newly calculated R1
						R2 = stdR[i2];// Save our newly calculated R2
						R3 = stdR[i3];// Save our newly calculated R3
						R4 = stdR[i4];// Save our newly calculated R4
					}
				}
			}
		}
	}
	return aclGain; // Return our result
}

void Output(float reqGain, float aclGain, float R1, float R2, float R3, float R4, float P1, float P2) {
	cout << "Required gain = " << fixed << setprecision(6) << reqGain << endl; // Print the gain we wanted
	cout << "Actual gain = " << fixed << setprecision(6) << aclGain << endl; // Print the best gain we can do
	cout << "R1 = " << fixed << setprecision(1) << R1 << " kohm" << endl; // Print our R1 resistor value
	cout << "R2 = " << fixed << setprecision(1) << R2 << " kohm" << endl; // Print our R2 resistor value
	cout << "R3 = " << fixed << setprecision(1) << R3 << " kohm" << endl; // Print our R3 resistor value
	cout << "R4 = " << fixed << setprecision(1) << R4 << " kohm" << endl; // Print our R4 resistor value
	cout << "P1 = " << fixed << setprecision(2) << P1 << " kohm" << endl; // Print our P1 resistance value
	cout << "P2 = " << fixed << setprecision(2) << P2 << " kohm" << endl; // Print our P2 resistance value
}

int main() {
	float stdR[26] = { 1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2, 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82, 100, 1000000000 }; // Create an array of resistor values, in kohm
	float R1, R2, R3, R4, P1, P2;
	cout << "VOLTAGE DIVIDER" << endl; // Print a title
	float reqGain = Input(); // Get our gain from the command prompt
	if (reqGain != 0) { // If we're not exiting the program
		float aclGain = Calculate(reqGain, stdR, R1, R2, R3, R4, P1, P2); // Get the closest gain we can get to our desired gain, along with the resistor and p1/p2 values
		Output(reqGain, aclGain, R1, R2, R3, R4, P1, P2); // Print out our values
	}
	cout << "END OF PROGRAM";
}
