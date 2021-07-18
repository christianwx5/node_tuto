console.log('hola gente');
const express = require('express');
const app = express();
const http = require('http');
let notes = [{"id" : 1, "text":"yolo lolo"},{"id" : 2, "text":"loyo yomolo"}]

const app = http.createServer(function (req,res) {
    res.writeHead(200, {'Content-type': 'application/json'});
    //res.write();
    res.end(JSON.stringify(notes));
});

app.get('/', (req, res) =>{
    res.send('<h1>Hola mundo</h1>');
});

app.get('/api/notes', (req, res) =>{
    res.json('<h1>Hola mundo</h1>');
});

const port = 3002;
app.listen(port);
console.log('Server running on port numero '+port);