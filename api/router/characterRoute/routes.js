const express = require("express");
const router = express.Router();

const { getCharacter } = require("../../controllers/characterAction");

router.get("/characters", getCharacter);

module.exports = router;
