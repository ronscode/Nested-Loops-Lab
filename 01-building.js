/* Problem: Building
  •Write a function to print a table, representing a building:
  • Odd floors hold apartments (type A), e.g. A10, A11, A12, ...
  • Even floors hold offices (type O), e.g. O20, O21, O22, ...
  • The last floor holds large apartments (type L), e.g. L60, L61, L62
  • Identifiers consist of: {type}{floor}{number}, e.g. L65, A12, O24 
*/

function building(floors, rooms) {
  for (let f = floors; f >= 1; f--) {
    let currentFloor = "";
    for (let r = 0; r < rooms; r++) {
      if (f === floors) {
        // Print the last floor
        currentFloor += `L${f}${r} `;
      } else if (f % 2 === 0) {
        currentFloor += `O${f}${r} `;
      } else {
        currentFloor += `A${f}${r} `;
      }
    }
    console.log(currentFloor);
  }
}

building(6, 4);
// building(5, 3);
