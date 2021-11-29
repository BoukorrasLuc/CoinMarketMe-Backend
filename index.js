const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();

const cryptoInfo = require("./routes/cryptoInfo");
app.use(cryptoInfo);
const cryptoPrice = require("./routes/cryptoPrice");
app.use(cryptoPrice);

app.get("/", (req, res) => {
  res.json({ message: "Backend-Crypto" });
});

app.all("*", function (req, res) {
  res.status(404).json({ message: "Page not found" });
});

app.listen(3000, () => {
  console.log("Server has started");
});
