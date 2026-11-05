const num = [5,50,80,1,2,3,8,7,11,15,22,27];
const pessoas = [
    { nome:'Robson',idade:45 },
    { nome:'Luis',idade:62 },
    { nome:'Maria',idade:35 },
    { nome:'Eduardo',idade:19 },
    { nome:'Rosana',idade:32 },
    { nome:'Wallace',idade:47 },
];

const total = num.reduce(function(acumulador,valor,indice,array){
    return acumulador + valor;
},0);
const pares = num.reduce(function(acumulador,valor){
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
},[]);

console.log(pares);
console.log(total);

const maisvelha = pessoas.reduce(function(acumulador,valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisvelha);