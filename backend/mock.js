const { connectDB } = require("./db.helper");
const WordModel = require("./mongoose/Word.Model");
const env = require('dotenv')


env.config()
const db = connectDB()

const words = [
  {
    words: [
      { _type: "Noun", word: "banana" },
      { _type: "Verb", word: "ate" },
      { _type: "Verb", word: "create" },
      { _type: "Pronoun", word: "his" },
      { _type: "adverb", word: "sadly" },
      { _type: "Noun", word: "Joe" },
    ],
    correctSentences: ["Joe ate his banana."],
  },
  {
    words: [
      { _type: "Noun", word: "home" },
      { _type: "Pronoun", word: "all" },
      { _type: "Noun", word: "heal" },
      { _type: "Pronoun", word: "the" },
      { _type: "Verb", word: "run" },
      { _type: "Adverb", word: "way" },
      { _type: "Pronoun", word: "They" },
    ],
    correctSentences: ["They ran all the way home."],
  },
  {
    words: [
      { _type: "Article", word: "The" },
      { _type: "Verb", word: "opened" },
      { _type: "Noun", word: "He" },
      { _type: "Verb", word: "create" },
      { _type: "Pronoun", word: "his" },
      { _type: "adverb", word: "door" },
      { _type: "Adverb", word: "quietly" },
    ],
    correctSentences: ["He quietly opened the door."],
  },
  {
    words: [
      { _type: "Preposition", word: "from" },
      { _type: "Verb", word: "made" },
      { _type: "Verb", word: "created" },
      { _type: "Subject", word: "Paper" },
      { _type: "Verb", word: "is" },
      { _type: "Noun", word: "Wood" },
    ],
    correctSentences: [
      "Paper is made from wood.",
      "Paper is created from wood.",
    ],
  },
];


WordModel.insertMany(words, (err, docs) => {
    if(!err) console.log(docs)
    else console.log(err)
})