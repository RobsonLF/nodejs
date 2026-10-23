const nome = 'Robson';

function falaNome(){
    console.log(nome);
}
function usarFalaNome(){
    const nome = 'Ferreira';
    falaNome();
}
usarFalaNome();