import Inteiros from "./Inteiros";

let o1, o2, o3: Inteiros;

o1 = new Inteiros(50, 300, 1);
o2 = new Inteiros(2, 0, 3);
o3 = new Inteiros(3, 6, 9);

console.log(o1, o1.ordena());
console.log(o2, o2.ordena());
console.log(o3, o3.ordena());