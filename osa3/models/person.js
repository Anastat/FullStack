const mongoose = require('mongoose')

const url = 'mongodb://admin:admin@ds263740.mlab.com:63740/hy_fullstack'

mongoose.connect(url, { useNewUrlParser: true })
mongoose.Promise = global.Promise

const Person = mongoose.model('Person', {
    name: String,
    number: String
})

module.exports = Person