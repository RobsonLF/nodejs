const numeros = [[1, 2, 3], [4, 5 ,6], [7, 8, 9]];

const [lista1, lista2, lista3] = numeros;

const [, [,,seis]] = numeros;

console.log(seis);
console.log(lista2[2]);
console.log(numeros[1][2]);


/*
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, dois, tres] = numeros;

console.log(um, dois, tres);
*/



/*

let a = 'A';
let b = 'B';
let c = 'B';

const numeros = [1,2,3];

[a, b, c] = numeros;

console.log(a, b, c);

//desestruturação
//[a, b, c] = [1,2,3];
*/