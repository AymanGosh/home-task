const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/photos", async (req, res) => {
  try {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=1&limit=20"
    );

    res.send(response.data).status(200);
  } catch (error) {
    res.send(error).status(400);
  }
});

module.exports = router;
