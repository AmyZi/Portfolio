const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  introImage: {
    type: String,
    required: true,
  },
  welcomeText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema({
  aboutImage: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});

const projectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
});

const Intro = mongoose.model("intros", introSchema);
const About = mongoose.model("abouts", aboutSchema);
const Project = mongoose.model("projects", projectsSchema);

module.exports = {
  Intro,
  About,
  Project,
};
