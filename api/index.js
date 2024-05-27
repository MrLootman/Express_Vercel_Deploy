const express = require("express");
const app = express();

require('dotenv').config();

const port = process.env.PORT;

const characterRouter = require("./router/characterRoute/routes");

app.use("/api", characterRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})