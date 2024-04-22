const express = require('express');
const router = express.Router();
const Intro = require('../models/portfolioModels');

router.get('/get-portfolio-data', async (req, res) => {
  try {
    // Fetch data from the database using the Intro model
    const intros = await Intro.find();

    // Send the intros data as a JSON response
    res.status(200).json({ intros: intros });
  } catch (error) {
    // Log the error to the console for debugging
    console.error("Error fetching data:", error);

    // Send an error response to the client
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

module.exports = router;
