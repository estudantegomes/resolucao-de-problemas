const entrada = require("fs").readFileSync(0, "utf8").trim().split("\n");
let s = entrada[0];
let part = entrada[1];

function ManipularString(s, part) {
  if (
    s.length < 1 ||
    s.length > 1000 ||
    part.length < 1 ||
    part.length > 1000
  ) {
    return "null value";
  }

  let stringAtual = s;
  let indice = stringAtual.indexOf(part);

  while (indice !== -1) {
    const antes = stringAtual.substring(0, indice);
    const depois = stringAtual.substring(indice + part.length);

    stringAtual = antes + depois;

    indice = stringAtual.indexOf(part);
  }

  if (stringAtual.length > 0) {
    return stringAtual;
  } else {
    return "null value";
  }
}

let resultado = ManipularString(s, part);

console.log(resultado);
