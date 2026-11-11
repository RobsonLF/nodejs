function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        //value: estoque, // valor    
        //writable: true, // pode alterar o valor
        configurable: true, // configurável
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Mensagem de erro');
            }
        }
    });

}

const p1 = new Produto('Camiseta', 20, "5516");
p1.estoque = 500;

console.log(p1);