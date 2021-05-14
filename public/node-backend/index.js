require('dotenv').config()
require ('./mongo.js')

const express = require('express')
const app = express()
const cors = require('cors')
const Note = require ('./models/Note')
const { response } = require('express')

app.use(express.json())
app.use(cors())

//let notes = []
  
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes=>{
  response.json(notes)
  })
})

app.post('/api/notes',(req, res) => {
  const note = req.body
  if (!note.content) {
    return res.status(400).json({
      error: 'required field content is missing '
    })
  }
  const newNote = new Note({
    content: note.content,
    date: new Date(),
    important: note.important || false
  })
  newNote.save().then(savedNote => {
    res.json(savedNote)
  })
})

app.get ( 'api/notes/:id',(require, response) => {
  const id = request.params.id
  Note.findById(id).then(note => {
    if (note) {
      return response.json(note)
    } else {
      response.status(404).end()
      
    }
  })
})
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})