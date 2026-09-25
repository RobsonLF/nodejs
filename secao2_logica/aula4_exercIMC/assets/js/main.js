function main(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const dados=[];

    function coletandoDados(evento){
        evento.preventDefault();
        const peso = Number(form.querySelector('.input-peso').value.replace(',', '.'));
        const altura = Number(form.querySelector('.input-altura').value.replace(',', '.'));
        let categoria="";
        
        const imc = peso / (altura ** 2);


       
        if (imc <= 18.5){
            categoria = '(Abaixo do peso)'
        }else if(imc > 18.5 && imc < 25){
            categoria = '(Peso Normal)'
        }else if(imc >= 25 && imc < 30){
            categoria = '(Sobrepeso)'
        }else if(imc >= 30 && imc < 35){
            categoria = '(Obesidade grau 1)'
        }else if(imc >= 35 && imc < 40){
            categoria = '(Obesidade grau 2)'
        }else if(imc >= 40){
            categoria = '(Obesidade grau 3)'
        }
        resultado.innerHTML = `<p>Seu IMC é de ${imc.toFixed(2)} - ${categoria}</p>`;
    };
    form.addEventListener('submit',coletandoDados);
};

main();
/*
    function calculandoIMC(info){
        //Calculo IMC = peso / (altura²)
        const peso = Number(info.peso);
        const altura = Number(info.altura);
        const imc = Number(peso / (altura**2)).toFixed(2);
        let categoria="";

        if (imc <= 18.5){
            categoria = '(Abaixo do peso)'
        }else if(imc > 18.5 && imc < 25){
            categoria = '(Peso Normal)'
        }else if(imc >= 25 && imc < 30){
            categoria = '(Sobrepeso)'
        }else if(imc >= 30 && imc < 35){
            categoria = '(Obesidade grau 1)'
        }else if(imc >= 35 && imc < 40){
            categoria = '(Obesidade grau 2)'
        }else if(imc >= 40){
            categoria = '(Obesidade grau 3)'
        }
        resultado.innerHTML = `<p>Seu IMC é de ${imc} - ${categoria}</p>`;
    };
    */