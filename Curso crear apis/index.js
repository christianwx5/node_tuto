console.log('hola gente')
const express = require('express')
const app = express()

app.use(express.json())
const http = require('http')
let notes = [{"id" : 1, "text":"yolo lolo"},{"id" : 2, "text":"loyo yomolo"}]

// const app = http.createServer(function (req,res) {
//     res.writeHead(200, {'Content-type': 'application/json'});
//     //res.write();
//     res.end(JSON.stringify(notes));
// });

app.get('/', (req, res) =>{
    res.send('<h1>Hola mundo!</h1>')
})

app.get('/api/notes/', (req, res) =>{
    const id = req.params.id //si no llega a arrojar bien los datos, intentar convertir este datos de string a numerico
    const note = notes.find(note => note.id == id)
    
    res.json(notes)
    
    
})

app.get('/api/notes/:id', (req, res) =>{
    const id = req.params.id //si no llega a arrojar bien los datos, intentar convertir este datos de string a numerico
    const note = notes.find(note => note.id == id)
    if (note){
        res.json(note)
    }else {
        res.status(404).end()
    }
    
})

app.delete('/api/notes/:id', (req, res) =>{
    const id = req.params.id //si no llega a arrojar bien los datos, intentar convertir este datos de string a numerico
    notes = notes.filter(note => note.id != id)
    
    res.status(204).end()  
})

app.post('/api/notes', (req, res) =>{
    const note = req.body //si no llega a arrojar bien los datos, intentar convertir este datos de string a numerico
    
    const ids = notes.map(note => note.id)
    const maxId = Math.max(...ids)

    const newNote = {
        id: maxId + 1,
        content: note.content,
        important: typeof note.important != 'undefined' ? note.important : false,
        date: new Date().toDateString()
    }
    
    notes = [... notes, newNote]
    
    
    res.json(newNote)
    //res.status(204).end()  
})

// app.get
// app.post
// app.delete
// app.put

const port = 3002
app.listen(port, () => {
    console.log('Server running on port numero '+port)
})
