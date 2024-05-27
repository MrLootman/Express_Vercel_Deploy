const { getAllCharacters } = require("../models/characterModel");

const getCharacter = async (req, res) => {
  getAllCharacters()
    .then(([result]) => {
      if (result.length) {
        res.status(200).send(result);
      } else {
        res.status(404).json({ error: "No characters found" })
      }
    })
};

module.exports = { getCharacter };