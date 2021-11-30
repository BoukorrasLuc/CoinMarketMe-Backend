const rp = require("request-promise");
const express = require("express");
const router = express.Router();

router.get("/cryptocurrencyListingsLatest", async (req, res) => {
  try {
    const requestOptions = {
      method: "GET",
      uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      qs: {
        start: "1",
        limit: "150",
        convert: "USD",
      },
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY_CoinMarketCap,
      },
      json: true,
      gzip: true,
    };

    rp(requestOptions)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        console.log("API call error:", err.message);
      });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
