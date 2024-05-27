const db = require("../dabatase");

const getAllCharacters = async () => {
  return await db.query("SELECT * FROM rick_and_morty_character");
}

module.exports = { getAllCharacters };