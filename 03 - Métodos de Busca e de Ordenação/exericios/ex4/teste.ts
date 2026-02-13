import MatrizInteira from "./Matriz";

let m = [1, 2, 3];
let n = [3, 2, 1];

let o1 = new MatrizInteira(m);
let o2 = new MatrizInteira(n);

console.log(o1, o1.verificaCrescente());
console.log(o2, o2.verificaCrescente());