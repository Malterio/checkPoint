const autos=require("./autos")

let concesionaria = {
    autos: autos,
  
    buscarAuto: function(patente){
        for( var n=0 ; n< autos.length ; n++){
            if(patente==autos[n].patente){
                return autos[n].vendido=true
            } 
       }
    } ,
 
    venderAuto:function(callback , patente){
        return  callback(patente)
    }
}


console.log(concesionaria.venderAuto(concesionaria.buscarAuto , "jjK16"));
console.log(concesionaria.buscarAuto("jjK116"));
console.log(autos)