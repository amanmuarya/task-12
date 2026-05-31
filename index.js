
// Principle amount
let P = 100000;
//  Annual interest rate
let r = 0.1; 

let n = 1; 
// Number of times compounded per year
let t = 3; 
// Time in years

// Formula:      A = P(1 + r/n)^(nt)

let A = P * Math.pow((1 + r / n), (n * t));
let compoundInterest = A - P;

console.log("The compound interest after " + t + " years is: " + compoundInterest.toFixed(2));
//  using for console.log