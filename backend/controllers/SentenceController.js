const express = require("express");
const SentenceModel = require("../mongoose/Sentence.Model");
const WordModel = require("../mongoose/Word.Model");
const router = express.Router();

router
  .get("/sentences", async (req, res) => {
    try {
      const sentences = await SentenceModel.find({});

      return res.json({
        status: 200,
        sentences,
      });
    } catch (error) {
      return res.json({
        status: 400,
        error: error.message,
      });
    }
  })
  .post("/sentences", async (req, res) => {
    const { sentence, id } = req.body;
    let isCorrect = false;

    if (sentence.length > 0 || (!sentence && !id)) {
      const word = await WordModel.find({ _id: id });

      if (word[0].correctSentences.includes(sentence)) {
        isCorrect = true;
      }
    }

    try {
      SentenceModel.create({
        correct: isCorrect,
        sentence: sentence,
      });

      res.status = 200;
      return res.json({
        status: 200,
        isAdded: true,
        results: sentence,
      });
    } catch (error) {
      res.status = 400;
      return res.json({
        status: 400,
        error: error,
      });
    }
  });

module.exports = router;
