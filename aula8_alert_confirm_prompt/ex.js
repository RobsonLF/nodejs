let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A


[varA, varB, varC] = [varB, varC, varA];


/*
const auxA = varA;
const auxB = varB;
const auxC = varC;

varA = auxB;
varB = auxC;
varC = auxA;
*/
console.log(varA, varB, varC);
