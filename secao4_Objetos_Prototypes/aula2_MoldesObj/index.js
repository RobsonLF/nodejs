
//factory function - função fábrica
function criaPessoa(nome, sobrenome){
    return{
        nome, 
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
// constructor function - função construtora
const p1 = criaPessoa('Robson', 'Ferreira');
console.log(p1.nomeCompleto); //acessando a chave nomeCompleto do objeto p1


function pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const p2 = new pessoa('Robson', 'Ferreira');
console.log(p2.nome);
