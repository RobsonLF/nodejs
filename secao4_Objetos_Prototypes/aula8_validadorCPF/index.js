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

cpf.cpfString = '055.064.246-36';
//Retorna uma string com cpf sem os caracteres especiais
cpf.cpfSemCaracteresEsp = function(){
    const cpfLimpo = this.cpfString.replace(/\D+/g,'');
    return cpfLimpo;
};
//Retorna um array com as strings de cada numero do cpf sem os dois digitos verificadores
cpf.arrayDeComparacao = function(){
    let arr = Array.from(this.cpfSemCaracteresEsp());
    arr = arr.slice(0,-2);
    return  arr;
};
//Retorna o array com o primeiro digito verificador
cpf.arrComPrimeiroDigito = function(){
    const arrSemDig = [... this.arrayDeComparacao()];
    const etapa1Calc = arrSemDig.reduce(function(acumulador, valor, indice){
        if (indice <= 8){
            acumulador += (valor * (10 - indice));
        };
        return acumulador;
    },0);
    const etapa2Calc = function(){
        let digit = 11 - (etapa1Calc % 11);
        if (digit >= 10){
            return 0;
        }
        return digit;
    };
    let digito = etapa2Calc().toString();
    arrSemDig.push(digito);
    return arrSemDig;
};

cpf.arrComSegundoDigito = function(){
    const arrComPrimeiroDig = [... this.arrComPrimeiroDigito()];
    const etapa3Calc = arrComPrimeiroDig.reduce(function(acumulador, valor, indice){
        if (indice <= 9){
            acumulador += (valor * (11 - indice));
        };
        return acumulador
    },0);
    const etapa4Calc = function(){
        let digit = 11 - (etapa3Calc % 11);
        if (digit >= 10){
            return 0;
        }
        return digit;
    };
    let segDigito = etapa4Calc().toString();
    arrComPrimeiroDig.push(segDigito);
    return arrComPrimeiroDig
};

cpf.cpfFornecidoString = function(){
    const arrCpfString = [... this.cpfSemCaracteresEsp()];
    const cpfString = arrCpfString.join("");
    return cpfString;
};

cpf.cpfCalculadoString = function(){
    const arrCpfString = [... this.arrComSegundoDigito()];
    const cpfString = arrCpfString.join("");
    return cpfString;
};

cpf.checagem = function(){
    if (this.cpfFornecidoString() === this.cpfCalculadoString()){
        return "CPF Válido!!!";
    }else{
        return "CPF Inválido!!!"
    }
};

console.log(cpf.checagem());



/*

cpfString ------------> uma Variável para cpf informado
cpfSemCaracteresEsp --> uma array do cpfString sem caracteres especiais
cpfArrayDeComparacao ---> array sem os dois digitos para que possa acrescentar os digitos calculados


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
const cpf = new Object();
cpf.cpfString = '705.484.450-52';
cpf.cpfSemCaracteresEsp = function(){
    const cpfLimpo = this.cpfString.replace(/\D+/g,'');
    return cpfLimpo;
};

cpf.arraycpf = function(){
    return Array.from(this.cpfSemCaracteresEsp());
};

cpf.arraycpfACompletar = function(){
    const arraySemDigitos = [... arraycpf.pop()]
    return
}



console.log(cpf.primeiroDig());



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