//Abstração - Produto - aumento, descont
//Camisa = cor , caneca = material,lapis

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
};


Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100));
};

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;
    Object.defineProperty(this, 'estoque',{
        enumerable:true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number')return;
            estoque = valor;
        }
    });
};
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
Caneca.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100));
};
Caneca.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual/100));
};
const caneca = new Caneca('Caneca Simpsons', 90, 'Plástico', 15);
const caneca1 = new Caneca('Caneca CS2', 150, 'Cerâmica',20);
const caneca2 = new Caneca('Caneca Dev', 200, 'Porcelana',10);

const camiseta = new Camiseta('Regata', 75.9, 'Preta');
camiseta.aumento(100);
caneca.desconto(10);
console.log(camiseta);
console.log(caneca);
console.log(caneca1);
console.log(caneca2);