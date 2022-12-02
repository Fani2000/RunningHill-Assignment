const mongoose = require('mongoose')

const Sentence = new mongoose.Schema({
    sentence: String,
    correct: Boolean
})

module.exports =  mongoose.model('Sentence', Sentence)