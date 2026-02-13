import Inteiros from "../ex2/Inteiros";

let i1, i2, i3: Inteiros;

i1 = new Inteiros(50, 20, 30);
i2 = new Inteiros(10, 1000, 11);
i3 = new Inteiros(2, 1, 300);

console.log(i1, i1.maior());
console.log(i2, i2.maior());
console.log(i3, i3.maior());