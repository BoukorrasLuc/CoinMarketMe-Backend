const rp = require("request-promise");
const express = require("express");
const router = express.Router();

const dataGlobalMetrics = require("../Data-CoinMarketCap/globalMetrics.json");

router.get("/globalMetrics", async (req, res) => {
  try {
    // const requestOptions = {
    //   method: "GET",
    //   uri: "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest",
    //   qs: {},
    //   headers: {
    //     "X-CMC_PRO_API_KEY": process.env.API_KEY_CoinMarketCap,
    //   },
    //   json: true,
    //   gzip: true,
    // };
    // rp(requestOptions)
    //   .then((response) => {
    //     res.json(response);
    //   })
    //   .catch((err) => {
    //     console.log("API call error:", err.message);
    //   });
    res.json(dataGlobalMetrics);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
