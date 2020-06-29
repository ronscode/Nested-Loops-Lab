/* Problem: Stupid Passwords
  •Write a program, which generates all possible passwords, consisting of the following 3 parts:

  •The first part is an even number in the range [2...n] 
  
  •The second digit is an odd number in the range
  [1...n]

  •The third is the product of the first two

  */

function stupidPasswords(n) {
  let result = "";
  for (let even = 2; even <= n; even += 2) {
    for (let odd = 1; odd <= n; odd += 2) {
      result += `${even}${odd}${even * odd} - `;
    }
  }
  console.log(result);
}

stupidPasswords(11);
