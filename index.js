const express = require("express");
const { resolve } = require("path");
const port = process.env.PORT || 8080;
const connectDB = require("./database.js");

const app = express();

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

app.listen(port, () => {
  connectDB();
  console.log(`Example app listening at http://localhost:${port}`);
});
