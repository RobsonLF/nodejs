
/*
const array = [1,2,3];
array.push(4);
console.log(array);

const pessoa01 = {
    nome:'Robson',
    sobrenome: 'ferreira',
    idade: 32
};

console.log(pessoa01);
console.log(perssoa01.nome);
console.log(perssoa01.sobrenome);
console.log(perssoa01.idade);
*/
/*
function criarPessoa(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criarPessoa('Robson', 'Ferreira', 45);
const pessoa2 = criarPessoa('Annelisa', 'Ferreira', 41);
const pessoa3 = criarPessoa('Esther', 'Ferreira', 6);
const pessoa4 = criarPessoa('Luísa', 'Ferreira', 2);

console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome);
*/

const pessoa5 = {
    nome:'Robson',
    sobrenome:'Ferreira',
    idade:40,
    //método da função
    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },
    falaridade(){
        console.log(`Minha idade é ${this.idade}`);
    },
    //método da função
    incrementoIdade(){
        this.idade++;
    }
}

pessoa5.fala()
pessoa5.falaridade();
pessoa5.incrementoIdade();
pessoa5.falaridade();
pessoa5.incrementoIdade();
pessoa5.falaridade();
pessoa5.incrementoIdade();
pessoa5.falaridade();
pessoa5.incrementoIdade();
pessoa5.falaridade();