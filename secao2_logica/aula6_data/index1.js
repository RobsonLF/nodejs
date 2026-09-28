function zeroAEsqurda(num){
    return num >= 10 ? num : `0${num}`
}


function formatoData(data){
    const dia = zeroAEsqurda(data.getDate());
    const mes = zeroAEsqurda(data.getMonth() + 1);
    const ano = zeroAEsqurda(data.getFullYear());
    const hora = zeroAEsqurda(data.getHours());
    const min = zeroAEsqurda(data.getMinutes());
    const seg = zeroAEsqurda(data.getSeconds());
    return `${dia}-${mes}-${ano}-${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formatoData(data);
console.log(dataBrasil)