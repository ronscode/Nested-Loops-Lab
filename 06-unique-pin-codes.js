/* Unique PIN Codes

Write a function to ​generate PIN codes ​following certain rules
  ● Receives​ 3 digits: max1, max2, max3​ (each is an upper limit)
    ○ Generates unique​ 3-digit PIN codes,​ matching the following:
    ○ Each digit is ​within its range​: [1..max1], [1..max2], [1..max3]
    ○ The ​first ​and the ​third digit ​must be ​even
    ○ The​ second digit ​must be a ​prime number​ in the range​ [2...7]
  ● Prints the PIN codes in increasing order 
  */

function pinCodes(max1, max2, max3) {
	for (let d1 = 2; d1 <= max1; d1 += 2)
		for (let d2 = 2; d2 <= max2; d2++)
			for (let d3 = 2; d3 <= max3; d3 += 2) {
				// TODO: Check if d2 is 2, 3, 5 or 7 and; // print the 3 digits one after another
				if (d2 === 2 || d2 === 3 || d2 === 5 || d2 === 7) {
					console.log(`${d1}${d2}${d3}`);
				}
			}
}

pinCodes(3, 5, 5);
