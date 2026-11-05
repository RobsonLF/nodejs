
const nomes = ['Robson','Luis', 'Ferreira'];
const nomes1 = new Array('Esther', 'Luisa', 'Annelisa');

const eu = 'Robson Luis David Ferreira';

const cadanome = eu.split(' ');

const juntarnome = cadanome.join(' ');

console.log(juntarnome);


//USANDO SPRED: declarando assim com o ... (rest operator) novo recebe uma cópia do nomes e é totalmente independente de nomes
// pop removo no final do array
//shift remove no início do array
//push add no final do array
//unshift add no começo
/*

const novo = [... nomes];
const removido = novo.pop(); //aqui o valor removido vai para variavél removido
//console.log(removido);
//console.log(novo);
nomes1.push('Robson')
nomes1.unshift('Luis')

const novo1 = nomes1.slice(1,3);

console.log(nomes1);
console.log(novo1);
*/





/*VALORES POR REFERENCIA: Declarando novo dessa maneira tudo que for feito em novo reflete em nomes e tudo que for feito em nomes reflete em novo
const novo = nomes;
novo.pop();
console.log(nomes);
console.log(novo);*/



/*
nomes[2] = 'David'
delete nomes[2];

console.log(nomes1);*/