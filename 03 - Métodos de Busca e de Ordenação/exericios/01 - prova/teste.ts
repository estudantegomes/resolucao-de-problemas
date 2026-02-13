import Flofs from "./Flofs";


let m = [37, 36, 36, 37, 38];
let m2 = [36, 37, 38, 39, 37];
let m3 = [36, 37, 38, 36, 37, 38];
let m4 = [36, 36, 36, 36, 36]

let f =  new Flofs(m);
let f2 =  new Flofs(m2);
let f3 =  new Flofs(m3);
let f4 =  new Flofs(m4);

console.log(f.getUnpaired());
console.log(f2.getUnpaired());
console.log(f3.getUnpaired());
console.log(f4.getUnpaired());