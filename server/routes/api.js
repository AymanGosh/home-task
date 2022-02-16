const express = require("express");
const router = express.Router();

const axios = require("axios");

const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 60 * 60 * 24 });

const photosUrl = "https://picsum.photos/v2/list?page=1&limit=100";

router.get("/photos", async (req, res) => {
  try {
    if (myCache.has("photos")) {
      res
        .send(
          myCache
            .get("photos")
            .slice(myCache.get("page"), myCache.get("page") + 5)
        )
        .status(200);

      myCache.set("page", myCache.get("page") + 5);
      if (myCache.get("page") >= 95) myCache.set("page", 0);
    } else {
      const photos = await axios.get(photosUrl);
      myCache.set("photos", photos.data);
      myCache.set("page", 0);
      res.send(photos.data.slice(0, 5)).status(200);
      myCache.set("page", myCache.get("page") + 5);
    }
  } catch (error) {
    res.send(error).status(400);
  }
});

module.exports = router;
