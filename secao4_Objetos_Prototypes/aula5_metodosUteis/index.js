const produto = {nome: 'Caneta', preco: 1.99, desconto: 0.15};
const produto2 = { ... produto };
const produto3 = Object.assign({}, produto);

console.log(produto);
console.log(produto2);
console.log(produto3);
console.log(Object.keys(produto));