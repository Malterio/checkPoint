const autos=require("./autos")

let concesionaria = {
    autos: autos,
    buscarAuto: function(patente){
        for( let n=0 ; n< autos.length ; n++){
            if(patente==autos[n].patente){
                return autos[n]
            } 
       } return null
    } 
 };

console.log(autos[1].patente)

console.log(concesionaria.buscarAuto("jjK16"));
