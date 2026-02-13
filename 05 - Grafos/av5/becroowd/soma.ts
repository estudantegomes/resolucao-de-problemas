let input = require('fs').readFileSync(0, 'utf8').trim().split('\n');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

let sum = a + b;

console.log("X = "+sum);