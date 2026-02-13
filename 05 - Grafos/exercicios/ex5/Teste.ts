import Grafo from "./Grafo.ts";

let sudeste = new Grafo(
  ["sao paulo", "rio de janeiro", "espirito santo", "minas gerais"],
  [
    ["sao paulo", "minas gerais"],
    ["sao paulo", "rio de janeiro"],
    ["rio de janeiro", "minas gerais"],
    ["rio de janeiro", "espirito santo"],
    ["espirito santo", "minas gerais"],
  ]
);

// console.log("\n", sudeste.exibirVertices());
// console.log("\n", sudeste.exibirArestas());
console.log("\n", sudeste.exibirVizinhos("sao paulo"));

sudeste.removeAresta('sao paulo', 'minas gerais');

console.log(sudeste.exibirVizinhos('sao paulo'));
