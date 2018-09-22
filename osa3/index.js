const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let persons = [
        { 
          name: 'Arto Hellas',
          number: '040-123456',
          id: 1
        },
        {
            name: 'Martti Tienari',
            number: '040-123456',
            id: 2
        },
        {
            name: 'Arto Järvinen',
            number: '040-123456',
            id: 3
        },
        {
            name: 'Lea Kutvonen',
            number: '040-123456',
            id: 4
        }
      ]
const generateId = () => {
    const maxId = persons.length > 0 ? persons.map(person => person.id).sort().reverse()[0]:1
    return maxId + 1
}

app.get('/api/persons', (req, res) => {
    res.json(persons)
  })

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.get('/info', (req, res) => {
      const info = `puhelinluettelossa ${persons.length} henkilön tiedot`
    
      res.send (info + '</br>' + new Date())
    
  })

  app.delete('/api/persons/:id', (req, res) => {
      const id = Number(req.params.id)
      persons = persons.filter(person => person.id !== id)

      res.status(204).end()
  })

  app.post('/api/persons', (req, res) => {
      const body = req.body
      if (body.name == undefined && body.numero == undefined) {
          return res.status(400).json({error: 'name or number missing'})
      }

      if (persons.find(person => person.name === body.name)) {
        return res.status(400).json({error: 'name must be unique'})
      }

      const person = {
          name: body.name,
          number: body.number,
          id: generateId()
      }

      persons = persons.concat(person)
      res.json(person)
  })

const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })