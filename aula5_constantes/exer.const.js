const nome = 'Robson';
const sobrenome = 'Ferreira';
const idade = 45;
const peso = 93;
const altura = 1.75;
let alturaEmM = altura * 100;

let imc = peso / (altura * altura);


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg e mede ${altura} m e tem imc ${imc.toFixed(2)} (${alturaEmM} cm)`);

