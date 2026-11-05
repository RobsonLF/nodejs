const tijolo = new Object();
const arrayTijolos = [];

tijolo.espessura = 343;
tijolo.altura = 152;
tijolo.cordaInterna = 76;
tijolo.cordaExterna = 70;



function addTijoloArray(tijolo){
    arrayTijolos.push(tijolo);
}

addTijoloArray(tijolo);

console.log(arrayTijolos);

/*

function criarTijolo(espessura, altura, cordaInterna, cordaExterna){
    this.espessura = espessura;
    this.altura = altura;
    this.cordaInterna = cordaInterna;
    this.cordaExterna = cordaExterna;
 
}

function addTijoloArray(){
    arrayTijolos.push(this);
};



const tijolo1 = new criarTijolo(343, 152,76,70);
addTijoloArray.call(tijolo1);
const tijolo2 = new criarTijolo(343, 152,76,63);
addTijoloArray.call(tijolo2);

console.log(arrayTijolos);



tijolo.cordaExterna




function criarTijolo(cordaExterna, cordaInterna, altura, espessura){


}*/