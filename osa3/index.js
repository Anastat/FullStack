const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Person = require('./models/person')

app.use(bodyParser.json())
app.use(cors())



const logger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('       ')
    next()
}

app.use(express.static('build'))

app.use(logger)

const formatPerson = (person) => {
    return {
        name: person.name,
        number: person.number,
        id: person._id
    }
}

app.get('/api/persons', (req, res) => {
    Person 
        .find({})
        .then(persons => {
            res.json(persons.map(formatPerson))
        })
    
  })

app.get('/api/persons/:id', (req, res) => {
    Person
        .findById(req.params.id)
        .then(person => {
            res.json(formatPerson(person))
        })
})

app.post('/api/persons', (req, res) => {
    const body = req.body
    if (body.name == undefined && body.numero == undefined) {
        return res.status(400).json({error: 'name or number missing'})
    }



    const person = new Person ({
        name: body.name,
        number: body.number
    })

    person
        .save()
        .then(savedPerson => {
            res.json(formatPerson(savedPerson))
        })
})
  app.delete('/api/persons/:id', (req, res) => {
      const id = Number(req.params.id)
      persons = persons.filter(person => person.id !== id)

      res.status(204).end()
  })

  const error = (req, res) => {
      res.status(400).send({error: 'unknown endpoint'})
  }

 app.use(error)

const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })