const nome = 'Robson Ferreira';
const frutas = ['maçã', 'banana', 'laranja', 'uva'];

for(let valor of frutas){
    console.log(valor);
}
console.log('-------------------');
for(let i in frutas){
    console.log(frutas[i]);
}
console.log('-------------------');
for (let i = 0;i < frutas.length; i++){
    console.log(frutas[i]);
}
console.log('-------------------');
frutas.forEach(function(valor1,indice){
    console.log(valor1);
});