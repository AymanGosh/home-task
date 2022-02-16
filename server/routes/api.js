const express = require("express");
const router = express.Router();

const axios = require("axios");

const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 60 * 60 * 24 });

const photosUrl = "https://picsum.photos/v2/list?page=1&limit=5";

router.get("/photos", async (req, res) => {
  try {
    if (myCache.has("photos")) {
      res.send(myCache.get("photos")).status(200);
    } else {
      const photos = await axios.get(photosUrl);
      myCache.set("photos", photos.data);
      res.send(photos.data).status(200);
    }
  } catch (error) {
    res.send(error).status(400);
  }
});

module.exports = router;
