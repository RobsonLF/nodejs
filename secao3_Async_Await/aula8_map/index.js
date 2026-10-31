
const pessoas = [
    { nome:'Robson',idade:45 },
    { nome:'Luis',idade:62 },
    { nome:'Maria',idade:35 },
    { nome:'Eduardo',idade:19 },
    { nome:'Rosana',idade:32 },
    { nome:'Wallace',idade:47 },
];
const num = [5,50,80,1,2,3,8,7,11,15,22,27];

const dobro = num.map(valor => valor*2);

//console.log(num, dobro)

const nomes = pessoas.map(Obj => Obj.nome);
console.log(nomes);
const idades = pessoas.map(Obj => ({ idade: Obj.idade}));
console.log(idades);

const nomesComIds = pessoas.map(function(obj, indice){
    const newObj = {...obj};
    newObj.id = (indice + 1);
    return newObj;
});
console.log(nomesComIds);
