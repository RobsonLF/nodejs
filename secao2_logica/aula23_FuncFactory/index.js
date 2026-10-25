function criaPessoa(nome, sobrenome, a, p){
    return{
        nome,
        sobrenome,
        fala(assunto){
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
    };
}
const p1 = criaPessoa('Robson','Ferreira', 1.8, 80);
const p2 = criaPessoa('Maria','Joaquina', 1.6,42);
console.log(p2.fala('falando sobre JS'));
