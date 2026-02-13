import MatrizInteira from "./Matriz";

let n1, n2, n3: MatrizInteira;

let m1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let m2 = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
let m3 = [4, 5, 6, 1, 2, 3, 7, 8, 9, 10];

n1 = new MatrizInteira(m1);
console.log(n1,'\n\nOrdenada:', n1.selectionSort());
console.log(n1,'\n\nOrdenada:', n1.bubleSort());
console.log(n1, '\n\nOrdenada:', n1.insertionSort());

n2 = new MatrizInteira(m2);
console.log(n2,'\n\nOrdenada:', n2.selectionSort());
console.log(n2,'\n\nOrdenada:', n2.bubleSort());
console.log(n2, '\n\nOrdenada:', n2.insertionSort());

n3 = new MatrizInteira(m3);
console.log(n3,'\n\nOrdenada:', n3.selectionSort());
console.log(n3,'\n\nOrdenada:', n3.bubleSort());
console.log(n3, '\n\nOrdenada:', n3.insertionSort())

