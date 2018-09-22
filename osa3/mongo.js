const mongoose = require('mongoose')

const url = 'mongodb://anastat:anastat1@ds263740.mlab.com:63740/hy_fullstack'

mongoose.connect(url, { useNewUrlParser: true })

const Person = mongoose.model('Person', {
    name: String,
    number: String
})

const person = new Person({
    name: "Pekka Mikkola",
    number: "040-1234556"
})

person
    .save()
    .then(response => {
        console.log('person saved')
        mongoose.connection.close()
    })