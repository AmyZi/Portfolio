const express = require('express');
const router = express.Router();
// Import models here - Ensure the path matches your model file
const { Intro, About, Project } = require('../models/portfolioModels'); 

router.get('/get-portfolio-data', async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();

    const portfolioData = {
      intros,
      abouts,
      projects
    };

    res.status(200).json(portfolioData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

module.exports = router;