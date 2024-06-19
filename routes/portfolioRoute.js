const express = require('express');
const router = express.Router();
// Import models here - Ensure the path matches your model file
const { Intro, About, Project } = require('../models/portfolioModels');

router.get('/get-portfolio-data', async (req, res) => {
  try {
    // Fetch intros and abouts concurrently (optional for potential performance optimization)
    const [intros, abouts] = await Promise.all([Intro.find(), About.find()]);

    // Fetch projects separately (optional for potential modularity)
    const projects = await Project.find();

    // Assemble the final response with desired order
    const portfolioData = {
      intros: intros, // Access the full array of intro data
      abouts: abouts, // Access the full array of about data
      projects: projects,
    };

    res.status(200).json(portfolioData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

module.exports = router;
