const a1 = [1,2,3,4,5,6,7,8,9,10];
/*
for (let valor of a1){
    console.log(valor);
}*/

a1.forEach(function(valor, indice){
    console.log(indice, ' - ', valor);
})