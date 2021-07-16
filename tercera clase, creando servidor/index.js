//manera sin simplificar

// const { Http2ServerRequest } = require("http2");
// const http = require('http');
// http.createServer(function (req,res) {
//     res.writeHead(404, {'Content-type': 'text/plain'});
//     res.write('Hola soy el servidor de node');
//     res.end();
// }).listen(3000);

//Manera simplificando

function mensaje (req,res) {
    res.writeHead(404, {'Content-type': 'text/plain'});
    res.write('Hola soy el servidor de node 2');
    res.end();
}

function otromensaje () {
    console.log('servidor en puerto 3000');
}

const http = require('http');
const server = http.createServer(mensaje);
server.listen(3000, otromensaje);
