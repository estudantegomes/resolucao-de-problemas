/**
 * Resumo de Métodos e Funções Matemáticas em TypeScript
 * -----------------------------------------------------
 * O TypeScript utiliza os mesmos métodos de manipulação matemática do JavaScript,
 * todos acessados pelo objeto `Math`. Abaixo estão os mais usados, com exemplos comentados.
 */

// ----------------------
// 1. Arredondamentos
// ----------------------

let num1: number = 4.7;
let num2: number = 4.3;

console.log(Math.round(num1)); // 5 -> Arredonda para o inteiro mais próximo
console.log(Math.round(num2)); // 4

console.log(Math.floor(num1)); // 4 -> Arredonda sempre "para baixo"
console.log(Math.ceil(num2));  // 5 -> Arredonda sempre "para cima"

// ----------------------
// 2. Valores absolutos
// ----------------------
let negativo: number = -15;
console.log(Math.abs(negativo)); // 15 -> Torna o número positivo

// ----------------------
// 3. Potência e Raiz
// ----------------------
console.log(Math.pow(2, 3)); // 8 -> 2³
console.log(2 ** 3);         // 8 -> Operador equivalente mais moderno
console.log(Math.sqrt(16));  // 4 -> Raiz quadrada
console.log(Math.cbrt(27));  // 3 -> Raiz cúbica

// ----------------------
// 4. Máximo e Mínimo
// ----------------------
console.log(Math.max(10, 20, 5, 40)); // 40 -> Maior valor da lista
console.log(Math.min(10, 20, 5, 40)); // 5  -> Menor valor da lista

// ----------------------
// 5. Números aleatórios
// ----------------------
console.log(Math.random()); 
// -> Gera número entre 0 (inclusivo) e 1 (exclusivo)

let aleatorioEntre1e10 = Math.floor(Math.random() * 10) + 1;
console.log(aleatorioEntre1e10);
// -> Número inteiro aleatório entre 1 e 10

// ----------------------
// 6. Trigonometria
// ----------------------
console.log(Math.sin(Math.PI / 2)); // 1  -> seno de 90°
console.log(Math.cos(0));           // 1  -> cosseno de 0°
console.log(Math.tan(Math.PI / 4)); // 1  -> tangente de 45°

// ----------------------
// 7. Constantes matemáticas
// ----------------------
console.log(Math.PI);  // 3.141592653589793
console.log(Math.E);   // 2.718281828459045 -> número de Euler

// ----------------------
// 8. Logaritmos e Exponenciais
// ----------------------
console.log(Math.log(10));   // Logaritmo natural (base e)
console.log(Math.log10(100)); // Logaritmo base 10 -> resultado: 2
console.log(Math.exp(2));    // e² -> exponencial

// ----------------------
// 9. Outras funções úteis
// ----------------------
console.log(Math.trunc(4.9)); // 4 -> Remove a parte decimal sem arredondar
console.log(Math.sign(-10));  // -1 -> Indica o sinal do número (negativo)
console.log(Math.sign(0));    // 0
console.log(Math.sign(25));   // 1
