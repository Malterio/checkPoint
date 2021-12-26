let autos = require("./autos");

const concesionaria = {
   condicion : function (patente){
       for( let n=0 ; n< autos.length ; n++){
       if(patente==autos[n].patente){
           return autos[n].vendido=true
       }
    }
   }
   ,
   autos: autos,
   
};

concesionaria.condicion("jjK116");
console.log(concesionaria.autos);