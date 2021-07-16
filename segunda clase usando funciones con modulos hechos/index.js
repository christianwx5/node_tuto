//https://nodejs.org/docs/latest-v14.x/api
//en la pagina de node sale la documentacion de funciones prefabricadas que puedes reutilizar
// es teste caso me fui por os, que son funciones que nos dan informacion del sistema operativo

const os = require('os');

// con esto me dice que window  tengo.
console.log(os.platform());

const filesistem  = require('fs');

filesistem.writeFile('./texto.txt', 'linea uno',function(err){
    if (err){
        console.log(err);
    }
    console.log('Archvo creado');    
}); 

console.log('Ultima linea de codigo');

