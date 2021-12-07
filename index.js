const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();

const cryptocurrencyInfo = require("./routes/cryptocurrencyInfo");
app.use(cryptocurrencyInfo);
const cryptocurrencyListingsLatest = require("./routes/cryptocurrencyListingsLatest");
app.use(cryptocurrencyListingsLatest);
const globalMetrics = require("./routes/globalMetrics");
app.use(globalMetrics);

app.get("/", (req, res) => {
  res.json({ message: "Backend-Crypto" });
});

app.all("*", function (req, res) {
  res.status(404).json({ message: "Page not found" });
});

app.listen(3000, () => {
  console.log("Server has started");
});
