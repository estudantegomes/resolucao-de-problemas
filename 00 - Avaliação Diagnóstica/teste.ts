import Avalicao from "./avaliacao";

let an = new Avalicao();


console.log("--- Múltiplo ---");
console.log(an.ex1(5, 13));     
console.log(an.ex1(25, 67));    
console.log(an.ex1(7, 0));   
console.log(an.ex1(1, 10));     
console.log(an.ex1(1000, 1000));    

// --- ex1 ---
// 15
// 75
// 7
// 11
// 2000

console.log("--- Validade ---");
console.log(an.ex2(1, 1, 2023)); 
console.log(an.ex2(1, 11, 2023));  
console.log(an.ex2(25, 2, 2025));   
console.log(an.ex2(1, 11, 2025));  
console.log(an.ex2(1, 3, 2026));  

// --- ex2 ---
// Vencido.
// Vencido.
// Vencido.
// Dentro da validade.
// Dentro da validade.

console.log("--- Primo ---");
console.log(an.ex3(4));      
console.log(an.ex3(11));     
console.log(an.ex3(121));      
console.log(an.ex3(999));     
console.log(an.ex3(997));  

// --- ex3 ---
// false
// true
// false
// false
// true
