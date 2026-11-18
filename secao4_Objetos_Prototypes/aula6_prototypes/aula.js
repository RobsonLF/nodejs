//Função construtora -> molde (classe)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

//instanciação
const pessoa1 = new Pessoa('Robson', 'Luis');
const pessoa2 = new Pessoa('Annelisa', 'Braga');

console.dir(pessoa1);
console.dir(pessoa2);


