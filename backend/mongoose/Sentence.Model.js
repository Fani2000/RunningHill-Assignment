const mongoose = require('mongoose')

const Sentence = new mongoose.Schema({
    sentence: String,
})

module.exports =  mongoose.model('Sentence', Sentence)