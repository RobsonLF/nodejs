const nome='Robson';
const sobrenome='Ferreira';

const falaNome = function(){
    return nome + ' ' + sobrenome
    
};



exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
//console.log(exports);
/*
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;
*/
