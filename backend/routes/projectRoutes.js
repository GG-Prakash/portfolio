const express = require("express");
const Project = require("../models/Project");

const router = express.Router();

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Add a new project
router.post("/", async (req, res) => {
  try {
    const { title, description, technologies, githubLink, liveDemo } = req.body;
    const newProject = new Project({
      title,
      description,
      technologies,
      githubLink,
      liveDemo,
    });

    await newProject.save();
    res.json(newProject);
  } catch (error) {
    res.status(500).json({ error: "Error adding project" });
  }
});

module.exports = router;
