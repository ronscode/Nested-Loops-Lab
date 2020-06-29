/* Problem: Letters Combinations
• Write a function to generate all 3-letter combinations under certain conditions:
• Receives a start letter s, end letter e and excluded letter x
• Prints all combinations of 3 letters in the range [s...e], excluding x, and their count 
*/

function lettersCombinations(start, end, x) {
  let counter = 0;
  let startChar = start.charCodeAt(0);
  let endChar = end.charCodeAt(0);
  let allLetterCombos = [];
  for (let l1 = startChar; l1 <= endChar; l1++) {
    for (let l2 = startChar; l2 <= endChar; l2++) {
      for (let l3 = startChar; l3 <= endChar; l3++) {
        if (l1 !== x && l2 !== x && l3 !== x) {
          let letter1 = String.fromCharCode(l1);
          let letter2 = String.fromCharCode(l2);
          let letter3 = String.fromCharCode(l3);

          allLetterCombos.push(`${letter1}${letter2}${letter3}`);
          counter++;
        }
      }
    }
  }

  console.log(`${allLetterCombos.join(" ")} ${allLetterCombos.length}`);
}

lettersCombinations("a", "b", "c");
