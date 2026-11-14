//logica da validação de cpf

//705.484.450-52====== 070.987.720-03
/*
7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0 = 237
//Primeiro dígito verificador
11 - (237 % 11) = 5

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10 = 284
//Segundo dígito verificador
11 - (284 % 11) = 2

Expressão regular = /\D+/g

*/

const cpf = new Object();
cpf.cpfString = '705.484.450-52';
cpf.cpfSemCaracteresEsp = function(){
    const cpfLimpo = this.cpfString.replace(/\D+/g,'');
    return cpfLimpo;
};
cpf.arraycpf = function(){
    return Array.from(this.cpfSemCaracteresEsp());
};

cpf.primeiroDig = function(){
    const arrcpf = [... this.arraycpf()];
    const etapa1Calc = arrcpf.reduce(function(acumulador, valor, ind){
        if (ind <= 8 ){
            acumulador += (valor * (10 - ind));
        };
        return acumulador;
    },0)

    const etapa2Calc = function (){
        let digit = 11 - (etapa1Calc % 11)
        if (digit >= 10){
            digit = 0;
        };
        return digit;
    };
    return etapa2Calc();
};

console.log(cpf.primeiroDig());



/*
cpf.primeiroDig = function(){
    const arrcpf = Array.from(this.cpfSemCaracteresEsp());
    const etapa1Calc = arrcpf.reduce(function(acumulador, valor, indice){
        if (indice <= 8){
            acumulador += (valor * (10 - indice));
        };  
    },0);
};*/

/*

const cpf = new Object()
cpf.cpfString = '705.484.450-52';
cpf.cpfSemCaracteres = function(){
    cpflimpo = this.cpfString.replace(/\D+/g,'');
    return cpflimpo;
};
cpf.primeiroDig = function(){
    let arrcpf = Array.from(this.cpfSemCaracteres());
    const somaPrimeiroDig = arrcpf.reduce(function(acumulador, valor, indice){
        if (indice <= 8){
           acumulador += (valor * (10-indice));
           let arrSemDigitos = arrSemDigitos.push(valor.toString());

        };
        return 
    },0);

    
    let calcPrimeiroDig = function(){
        let modPrimeiroDig = 11 - (somaPrimeiroDig % 11);
        if (modPrimeiroDig > 10){
            modPrimeiroDig = 0;
        }
        return modPrimeiroDig.toString();
    }
    arrcpf.push(calcPrimeiroDig());
    return arrcpf;
};

console.log(cpf.primeiroDig());
 
    
    let arrcpf = Array.from(this.cpfSemCaracteres());
    arrcpf.forEach(function(valor, indice) {
        if (indice <= 8 ){
            
        }
    });
*/