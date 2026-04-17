const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  problemId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Progress", progressSchema);