//em funçções construtoras é por convenção iniciar o nome da função com letra maiuscula
//Função construtora retorna objetos

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function(){
        console.log(this.nome + ': sou um método.')
    }
}

const p1 = new Pessoa('Robson', 'Ferreira');
const p2 = new Pessoa('Annelisa', 'Ferreira');

console.log(p1.nome);
console.log(p2.nome);
p1.metodo();
p2.metodo();