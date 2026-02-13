import Josephus from "./Josephus";
import Pessoa from "./Pessoa";

let p1, p2, p3, p4, p5: Pessoa;

p1 = new Pessoa("A", 1);
p2 = new Pessoa("B", 2);
p3 = new Pessoa("C", 3);
p4 = new Pessoa("D", 4);
p5 = new Pessoa("E", 5);

let j = new Josephus([p1, p2, p3, p4, p5]);
console.log(j.ultimaPessoa());
