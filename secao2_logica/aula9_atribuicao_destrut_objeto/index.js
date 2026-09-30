const pessoa={
    nome:'Robson',
    sobrenome: 'Ferreira',
    idade: 45,
    endereco:{
        rua:'Antonio Guerra',
        numero:192,
    } 
};

//Atribuição via desestruturação
const {nome = '', sobrenome, idade} = pessoa;
const {endereco: {rua, numero}} = pessoa;

//Atribuição normal
const nome1 = pessoa.nome;


console.log(nome1);
console.log(nome);
console.log(sobrenome);
console.log(idade);
console.log(rua);
console.log(numero);
