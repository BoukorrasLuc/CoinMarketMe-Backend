const rp = require("request-promise");
const express = require("express");
const router = express.Router();

router.get("/cryptoInfo", async (req, res) => {
  try {
    const requestOptions = {
      method: "GET",
      uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info",
      qs: {
        // start: "1",
        // limit: "100",
        // convert: "USD",
        // slug: "polkadot,binance-coin,synthetix-network-token",
        id: "1,52,825,1027,1839,2010,2586,2610,5426,6636,9265,11374",
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
