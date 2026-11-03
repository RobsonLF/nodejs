
const pessoas = [
    { nome:'Robson',idade:45 },
    { nome:'Luis',idade:62 },
    { nome:'Maria',idade:35 },
    { nome:'Eduardo',idade:19 },
    { nome:'Rosana',idade:32 },
    { nome:'Wallace',idade:47 },
];
const num = [5,50,80,1,2,3,8,7,11,15,22,27];

const numerosPares = num.filter(function(valor){
    return valor % 2 === 0;
}).map(function(valor){
    return valor * 2;
}).reduce(function(ac, valor){
    return ac + valor;
});
console.log(numerosPares);
