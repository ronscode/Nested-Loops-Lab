/* Problem: Prime Numbers
• Write a function to print all prime numbers in given range

A prime number is a number greater than 1 that cannot be formed by multiplying two smaller natural numbers. 
  */

function primeNumbers(start, end) {
  for (let num = start; num <= end; num++) {
    let prime = true,
      divider = 2;
    let maxDivider = Math.floor(Math.sqrt(num));
    while (divider <= maxDivider) {
      if (num % divider == 0) {
        prime = false;
        break;
      }
      divider++;
    }
    if (prime) {
      console.log(num);
    }
  }
}

primeNumbers(5, 50);
