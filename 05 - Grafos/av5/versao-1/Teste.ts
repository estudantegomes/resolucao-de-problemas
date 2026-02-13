import Place from "./Place.ts";
import World from "./World.ts";

console.log("=== INICIANDO TESTES ===\n");

let p1 = new Place("América do Sul"); // continente novo ✅
let p2 = new Place("América do Sul"); // continente duplicado ❌
let p3 = new Place("América do Sul", "Brasil"); // país novo ✅
let p4 = new Place("América do Sul", "Brasil"); // país duplicado ❌
let p5 = new Place("América do Sul", "Brasil", "Curitiba"); // cidade nova ✅
let p6 = new Place("América do Sul", "Brasil", "Curitiba"); // cidade duplicada ❌
let p7 = new Place("América do Norte", "Estados Unidos", "Nova York"); // novo continente e país ✅
let p8 = new Place("América do Norte", "Canadá", "Toronto"); // país novo no mesmo continente ✅
let p9 = new Place("Europa", "França", "Paris"); // novo continente ✅
let p10 = new Place("Ásia", undefined, "Tóquio"); // cidade sem país ❌

let world = new World();

console.log("Adicionando América do Sul:", world.add(p1)); // ✅ true
console.log("Tentando adicionar América do Sul novamente:", world.add(p2)); // ❌ false
console.log("Adicionando Brasil:", world.add(p3)); // ✅ true
console.log("Tentando adicionar Brasil novamente:", world.add(p4)); // ❌ false
console.log("Adicionando Curitiba:", world.add(p5)); // ✅ true
console.log("Tentando adicionar Curitiba duplicada:", world.add(p6)); // ❌ false
console.log("Adicionando Estados Unidos / Nova York:", world.add(p7)); // ✅ true
console.log("Adicionando Canadá / Toronto:", world.add(p8)); // ✅ true
console.log("Adicionando França / Paris:", world.add(p9)); // ✅ true
console.log("Tentando adicionar Tóquio sem país:", world.add(p10)); // ❌ false

console.log("\n=== ESTRUTURA DO MUNDO ===");
console.log(world.toString());
