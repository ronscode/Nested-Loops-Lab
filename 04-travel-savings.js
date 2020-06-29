/*  Problem: Travel Savings

  •Calculate the money collection for multiple travel destinations:
  • Read destination and needed budget for destination
  • Read many times amounts of collected money, until they are enough for the destination (start from 0)
  • Print "Collected: {sum}" or "Going to {destination}"
  • Read another destination and budget and collect money
  again
  • A destination "End" ends the program 
  
  */

function travelSavings(input) {
  let destination;
  while ((destination = input.shift()) != "End") {
    let neededSum = Number(input.shift());
    let collectedSum = 0;
    while (collectedSum < neededSum) {
      collectedSum += Number(input.shift());
      console.log(`Collected: ${collectedSum}`);
    }
    console.log(`Going to ${destination}!`);
  }
}

travelSavings(["Bali", 3500, 800, 1800, 1000, "Brazil", 4600, 5000, "End"]);
