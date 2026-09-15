let num1 = 1500;
let num2 = 2.554651351356;

//console.log(num1.toString() + num2.toString());
// Representação binária
console.log(num1.toString(2));
//Representação octal
//console.log(num1.toString(8));
//Representação hexadecimal
//console.log(num1.toString(16));

// Arredondamento
console.log(num2.toFixed(2));
console.log(num2.toFixed(5));

console.log(Number.isInteger(num1));

//Padrão de precisão de casas decimais
//IEEE 754-2008

let num3 = 0.7;
let num4 = 0.1;

num3 += num4; //num3 = num3 + num4
console.log(num3);
num3 += num4;
console.log(num3);
num3 += num4;
console.log(num3);

num3 = Number(num3.toFixed(2));

console.log(num3); // 1.0
console.log(Number.isInteger(num3));



