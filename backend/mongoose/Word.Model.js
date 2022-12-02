const mongoose = require("mongoose");

const Word = new mongoose.Schema({
  words: [{ _type: String, word: String }],
  correctSentences: [String],
});

module.exports = mongoose.model("Word", Word);
