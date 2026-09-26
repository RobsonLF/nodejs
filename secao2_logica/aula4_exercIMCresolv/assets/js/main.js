//capturar o evento de submit do formulario
const form = document.querySelector('#formulario')
form.addEventListener('submit',function(event){
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (!peso){
        setResultado('Peso invalido',false);
        return;
    }
    if(!altura){
        setResultado('Altura invalido',false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const mensagem = `Seu IMC é ${imc} - (${nivelImc}).`;

    setResultado(mensagem, true);

    console.log(imc, nivelImc)
});
function getNivelImc(imc){
    const nivel=['Abaixo do Peso','Peso Normal','Sobrepeso','Obesidade Grau 1','Obesidade Grau 2','Obesidade Grau 3'];
    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9)  return nivel[4];
    if(imc >= 29.9)  return nivel[3];
    if(imc >= 24.9)  return nivel[2];
    if(imc >= 18.5)  return nivel[1];
    if(imc < 18.5)  return nivel[0];
    /*
    if (imc >= 39.9){
        return nivel[5];
    }else if(imc >= 34.9){
        return nivel[4];
    }else if(imc >= 29.9){
        return nivel[3];
    }else if(imc >= 24.9){
        return nivel[2];
    }else if(imc >= 18.5){
        return nivel[1];
    }else if (imc < 18.5){
        return nivel[0];
    }
    */
}


function getImc(peso, altura){
    const imc = peso / (altura **2);
    return imc.toFixed(2);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(mensagem, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = "";

    const p = criaP();

    if (isValid){
        p.classList.add('paragrafo-resultado-verde');
    }else{
        p.classList.add('paragrafo-resultado-vermelho');
    }

    p.innerHTML = mensagem
    resultado.appendChild(p);
};


