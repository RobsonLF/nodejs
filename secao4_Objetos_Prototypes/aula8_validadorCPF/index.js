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



const cpf = new Object()
cpf.cpfString = '705.484.450-52';
cpf.cpfSemCaracteres = function(){
    cpflimpo = this.cpfString.replace(/\D+/g,'');
    return cpflimpo;
};
cpf.validar = function(){
    let arrcpf = Array.from(this.cpfSemCaracteres());
    for (let i = 10; i <= 2; i--) {
        const element = array[index];
        console.log(i);
    }

    return i;//Array.from(cpf.cpfSemCaracteres());
};



console.log(cpf.validar());
 
