
const colors = require('colors');
const express = require('express');

const server = express();

server.get('/', function(req,res){
    res.send('hola mi gente con express y node'.bgCyan);
    res.end();
});

server.listen(3000,function (){
    console.log('mensaje en server'.bgCyan);
});