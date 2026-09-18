/*
Primitivos são imutáveis - string, number, boolean, undefined
null (bigint, symbol) - Valores copiados

array, object, function - Passados por referencia
*/

const a = {
    nome:'Robson',
    sobrenome:'Ferreira'
};
const b = a; //O objeto b aponta para o mesmo lugar na memória que o objeto a, então se alterar algum valor de a, b será afetado.

const c = {...a}; // spreat - o spreat faz uma cópia do valor de a para o objeto c.
b.nome = 'Luis';
console.log(a);
console.log(b);
console.log(c);