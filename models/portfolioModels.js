const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  paragraph: String,
  image: String,
  changeButton: String
});

const Intro = mongoose.model('Intro', portfolioSchema);

module.exports = Intro;