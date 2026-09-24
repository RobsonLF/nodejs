const hora = 8;
if (hora >= 0 && hora < 6){
    console.log('É hora de estar dormingo menino!');
}else if(hora >= 6 && hora < 12){
    console.log('Bom dia!');
}else if(hora >= 12 && hora < 18){
    console.log('Boa Tarde!');
}else if (hora >= 18 && hora < 24){
    console.log('Boa Noite!');
}else if(hora > 24 || hora < 0){
    console.log('Hora Inválida');
}
