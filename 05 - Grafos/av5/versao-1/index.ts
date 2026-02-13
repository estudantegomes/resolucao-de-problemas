import Place from "./Place.ts";
import World from "./World.ts";

let novaIorque =
  new Place ("América do Norte", "Estados Unidos", "Nova Iorque");
let novaJersei = 
  new Place ("América do Norte", "Estados Unidos", "Nova Jérsei");
let colombia =
  new Place ("América do Sul", "Colômbia");
let curitiba =
  new Place ("América do Sul", "Brasil", "Curitiba");
let argentina =
  new Place ("América do Sul", "Argentina");
let londres =
  new Place ("Europa", "Inglaterra", "Londres");
let florianopolis =
  new Place ("América do Sul", "Brasil", "Florianópolis");
let roma =
  new Place ("Europa", "Itália", "Roma");
let lancaster =
  new Place ("Europa", "Inglaterra", "Lancaster");
let asia =
  new Place ("Ásia");
let americaDoSul =
  new Place ("América do Sul");
let brasil =
  new Place ("América do Sul", "Brasil");

let world = new World();

console.log("Teste 1");
console.log("América do Norte \\ Estados Unidos \\ Nova Iorque");
console.log("- - -");
world.add(novaIorque);
console.log(world.toString() + "\n");

console.log("Teste 2");
console.log("América do Norte \\ Estados Unidos \\ Nova Jérsei");
console.log("- - -");
world.add(novaJersei);
console.log(world.toString() + "\n");

console.log("Teste 3");
console.log("América do Sul \\ Colômbia");
console.log("- - -");
world.add(colombia);
console.log(world.toString() + "\n");

console.log("Teste 4");
console.log("América do Sul \\ Brasil \\ Curitiba");
console.log("- - -");
world.add(curitiba);
console.log(world.toString() + "\n");

console.log("Teste 5");
console.log("América do Sul \\ Argentina");
console.log("- - -");
world.add(argentina);
console.log(world.toString() + "\n");

console.log("Teste 6");
console.log("Europa \\ Inglaterra \\ Londres");
console.log("- - -");
world.add(londres);
console.log(world.toString() + "\n");

console.log("Teste 7");
console.log("América do Sul \\ Brasil \\ Florianópolis");
console.log("- - -");
world.add(florianopolis);
console.log(world.toString() + "\n");

console.log("Teste 8");
console.log("Europa \\ Itália \\ Roma");
console.log("- - -");
world.add(roma);
console.log(world.toString() + "\n");

console.log("Teste 9");
console.log("Europa \\ Inglaterra \\ Lancaster");
console.log("- - -");
world.add(lancaster);
console.log(world.toString() + "\n");

console.log("Teste 10");
console.log("Ásia");
console.log("- - -");
world.add(asia);
console.log(world.toString() + "\n");

console.log("Teste 11 (novamente)");
console.log("América do Sul");
console.log("- - -");
world.add(americaDoSul);
console.log(world.toString() + "\n");

console.log("Teste 12 (novamente)");
console.log("Brasil");
console.log("- - -");
world.add(brasil);
console.log(world.toString() + "\n");

console.log("Teste 13 (novamente)");
console.log("Curitiba");
console.log("- - -");
world.add(curitiba);
console.log(world.toString() + "\n");