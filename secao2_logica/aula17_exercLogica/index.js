function random(limite1, limite2){
    const numero1 = Math.random() * (limite2 - limite1) + limite1;
    const numero2 = Math.random() * (limite2 - limite1) + limite1;
    const array = [numero1, numero2];
    return array;
}

const limite1 = 1;
const limite2 = 10;

let rand = random(limite1, limite2);

function maiorNumero(numero1, numero2) {
    const maior = Math.max(Math.floor(numero1), Math.floor(numero2));
    return maior;
}

const maior = maiorNumero(rand[0], rand[1]);

console.log(`O maior número entre ${Math.floor(rand[0])} e ${Math.floor(rand[1])} é: ${maior}`);




