//defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar o valor
        configurable: true // configurável
    });
}
const prod = [];
const p1 = new Produto('Camiseta', 20, 3);
const p2 = new Produto('Regata', 50, 4);
prod.push(p1);
prod.push(p2);

console.log(prod);