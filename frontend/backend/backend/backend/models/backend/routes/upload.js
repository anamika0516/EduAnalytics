const express = require("express");
const router = express.Router();
const Data = require("../models/dataModel");

// Save data
router.post("/", async (req, res) => {
  try {
    await Data.insertMany(req.body);
    res.send("Data Saved Successfully");
  } catch (err) {
    res.status(500).send(err);
  }
});

// Fetch data
router.get("/", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
