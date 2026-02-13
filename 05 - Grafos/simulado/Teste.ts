import Lugar from "./Lugar.ts";

let l1 = new Lugar("América do Sul", "Brasil", "Guarapuava");

l1.adicionaPais("América do Sul", "Paraguai");
l1.adicionaPais("América do Sul", "Argentina");
l1.adicionaPais("América do Sul", "Chile");

l1.adicionaCidade("Brasil", "São Paulo");
l1.adicionaCidade("Brasil", "Curitiba");
l1.adicionaCidade("Brasil", "Rio de Janeiro");

l1.adicionaContinente("Europa");
l1.adicionaContinente("Ásia");
l1.adicionaContinente("África");

// console.log("🌎 Países da América do Sul:");
// l1.exibePaises("América do Sul");

// console.log("\n🏙️  Cidades do Brasil:");
// l1.exibeCidades("Brasil");

// console.log("\n🗺️  Continentes cadastrados:");
// l1.exibeContinentes();

// l1.adicionaPais("Europa", "Portugal");
// l1.adicionaPais("Europa", "Espanha");
// l1.adicionaPais("Europa", "França");

// l1.adicionaCidade("Portugal", "Lisboa");
// l1.adicionaCidade("Portugal", "Porto");
// l1.adicionaCidade("Portugal", "Coimbra");

// console.log("\n🇪🇺 Países da Europa:");
// l1.exibePaises("Europa");

// console.log("\n🏰 Cidades de Portugal:");
// l1.exibeCidades("Portugal");

console.log(l1.toString());
