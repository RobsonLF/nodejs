//filter / map / reduce

// Filter -> retorna sempre um array com a mesma quantidade de elementos ou menos


const pessoas = [
    { nome:'Robson',idade:45 },
    { nome:'Luis',idade:62 },
    { nome:'Maria',idade:35 },
    { nome:'Eduardo',idade:19 },
    { nome:'Rosana',idade:32 },
    { nome:'Wallace',idade:47 },
];

const nomesGrandes = pessoas.filter(obj => obj.nome.length >= 5);
console.log(nomesGrandes);

const maisVelhos = pessoas.filter(obj => obj.idade > 50);
console.log(maisVelhos);

const nomesTerminadosA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomesTerminadosA);

/*
const num = [5,50,80,1,2,3,8,7,11,15,22,27];

function callbackFilter(valor){
    return valor > 10;
}

const num2 = num.filter(callbackFilter);
console.log(num2);

const num2 = num.filter(valor => valor > 10);
console.log(num2);

*/