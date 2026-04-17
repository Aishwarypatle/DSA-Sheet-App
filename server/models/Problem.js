const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  title: String,
  topic: String,
  difficulty: String,
  youtubeLink: String,
  leetcodeLink: String,
  articleLink: String,
});

module.exports = mongoose.model("Problem", problemSchema);