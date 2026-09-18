//Tipos primitivos não são passados por referência, são passados por valor. Como ocorreu com o array
// String, number, boolean, undefined, null e symbol são tipos primitivos.
const nome = 'Robson';//string
const nome2 = "Ferreira";//string
const nome3 = `Ferreira`;//string
const num1 = 10;//number
const num2 = 10.52;//number
let nomeAluno;//undefined --> não aponta para nenhum local na memória
const sobrenomeAluno = null;//null --> não aponta para nenhum local na memória
const aprovado = true;//boolean --> true ou false (logico)

const a = [1, 2, 3];
const b = a;

console.log(a, b);
b.push(4);
console.log(a, b);