const pessoa1 = new Object(); //criando um objeto pessoa1
pessoa1.nome = 'Robson'; //adicionando a chave nome ao objeto pessoa1
pessoa1.sobrenome = 'Ferreira'; //adicionando a chave sobrenome ao objeto pessoa1
pessoa1.idade = 42; //adicionando a chave idade ao objeto pessoa1
pessoa1.falarNome = function(){
    console.log(`${this.nome} está falando seu nome.`); //adicionando a função falarNome ao objeto pessoa1
};

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade; //adicionando a função getDataNascimento ao objeto pessoa1
}

console.log(pessoa1.getDataNascimento());
pessoa1.falarNome();


for (let chave in pessoa1){
    console.log(pessoa1[chave]); //imprimindo as chaves do objeto pessoa1
}
//console.log(pessoa1)

/*
const pessoa = {
    //corpo do objeto
    nome: 'Robson', //nome é uma chave
    sobrenome: 'Ferreira', //sobrenome é uma chave
};

console.log(pessoa.nome); //acessando a chave nome do objeto pessoa
console.log(pessoa['nome']); //acessando a chave nome do objeto pessoa
console.log(pessoa.sobrenome); //acessando a chave sobrenome do objeto pessoa

*/