const express = require("express");
const WordModel = require("../mongoose/Word.Model");

const Router = express.Router();

Router.get("/words", async (req, res) => {
  try {
    const Words = await WordModel.find({});
    res.status = 200
    if (Words.length > 0) res.json({ status: 200, words: Words });
    else res.json({ status: 200, words: [] });
  } catch (error) {
    res.status = 400
    res.json({status: 400, error: error.message ?? error ?? "Failed to get the Words!"})
  }
});

module.exports = Router;
