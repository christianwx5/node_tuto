const mate = {};
function sumar (x1 , x2) {
    return x1 + x2;
}

console.log(sumar(5,8));

//metodo 2
//exporta objetos, funciones y no se que mas
mate.add = sumar;
module.exports = mate;

//metodo 1
//solo exporta funciones
//exports.sumar = sumar;