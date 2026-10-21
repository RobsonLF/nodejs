function conta(operador, acumulador, ...numeros){
    
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
        
        console.log(acumulador);
    }
    
    //console.log(operador, acumulador,numeros);

}

conta('*',10,20,30,40,50);









/*
function funcao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

funcao({nome:'Robson',sobrenome:'Ferreira',idade:45});


function funcao(a, b = 2, c = 4){
    console.log(a+b+c);
}
funcao(2,10,20);
*/