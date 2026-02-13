// 1. length
// Retorna o número de caracteres da string.
let texto = "Olá, Mundo!";
console.log(texto.length);  // 12


// 2. toUpperCase() e toLowerCase()
// Convertem a string para maiúsculas ou minúsculas, respectivamente.
let texto1 = "Olá, Mundo!";
console.log(texto1.toUpperCase());  // "OLÁ, MUNDO!"
console.log(texto1.toLowerCase());  // "olá, mundo!"


// 3. charAt()
// Retorna o caractere na posição especificada.
let texto2 = "Olá, Mundo!";
console.log(texto2.charAt(0));  // "O"


// 4. indexOf()
// Retorna o índice da primeira ocorrência de uma substring.
let texto3 = "Olá, Mundo!";
console.log(texto3.indexOf("Mundo"));  // 5
console.log(texto3.indexOf("mundo"));  // -1 (case-sensitive)


// 5. substring() e slice()
// substring() e slice() retornam uma parte da string com base em índices.
// A diferença é que slice() pode aceitar índices negativos, que contam a partir do final.
let texto4 = "Olá, Mundo!";
console.log(texto4.substring(0, 3));  // "Olá"
console.log(texto4.slice(-6));        // "Mundo!"


// 6. replace()
// Substitui a primeira ocorrência de uma substring ou utiliza expressão regular.
let texto5 = "Olá, Mundo!";
console.log(texto5.replace("Mundo", "Amigo"));  // "Olá, Amigo!"
console.log(texto5.replace(/o/g, "0"));        // "0lá, Mund0!"


// 7. split()
// Divide a string em um array de substrings com base em um delimitador.
let texto6 = "Olá, Mundo!";
let partes = texto6.split(", ");
console.log(partes);  // ["Olá", "Mundo!"]


// 8. trim()
// Remove espaços em branco do início e do fim da string.
let texto7 = "   Olá, Mundo!   ";
console.log(texto7.trim());  // "Olá, Mundo!"


// 9. startsWith() e endsWith()
// Verifica se a string começa ou termina com uma substring especificada.
let texto8 = "Olá, Mundo!";
console.log(texto8.startsWith("Olá"));  // true
console.log(texto8.endsWith("Mundo!")); // true


// 10. includes()
// Verifica se uma substring existe na string.
let texto9 = "Olá, Mundo!";
console.log(texto9.includes("Mundo"));  // true
console.log(texto9.includes("Olá"));   // true
console.log(texto9.includes("Amigo")); // false


// 11. repeat()
// Repete a string um número especificado de vezes.
let texto10 = "Olá ";
console.log(texto10.repeat(3));  // "Olá Olá Olá "


// 12. localeCompare()
// Compara duas strings de acordo com a ordem lexicográfica local.
let texto11 = "Apple";
let texto12 = "Banana";
console.log(texto11.localeCompare(texto12)); // -1 (Apple vem antes de Banana)


// 13. padStart() e padEnd()
// Preenche a string com outro valor até que ela atinja o comprimento especificado.
// padStart preenche no início, padEnd preenche no final.
let texto13 = "5";
console.log(texto13.padStart(3, "0"));  // "005"
console.log(texto13.padEnd(3, "0"));    // "50 "


// 14. match()
// Retorna uma correspondência de uma expressão regular na string.
let texto14 = "O número é 12345";
console.log(texto14.match(/\d+/));  // ["12345"]


// 15. search()
// Encontra a posição da primeira correspondência de uma expressão regular.
let texto15 = "O número é 12345";
console.log(texto15.search(/\d+/));  // 12
