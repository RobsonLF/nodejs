const numero = Number(prompt("Digite um número: "));
const numtitulo = document.getElementById('numero');
const texto = document.getElementById('texto');
let raiznumero = 0;

numtitulo.innerHTML = numero;
raiznumero = numero ** 0.5;




texto.innerHTML = `<p>Seu número é ${numero}</p>
                   <p>Raiz quadrada: ${raiznumero}</p>
                   <p>É inteiro: ${Number.isInteger(numero)}</p>
                   <p>É NaN: ${Number.isNaN(numero)}</p>   
                   <p>Arredondando para baixo: ${Math.floor(numero)}</p>                
                   <p>Arredondando para cima: ${Math.ceil(numero)}</p>`;