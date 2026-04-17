const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String, required: true },

  streak: { type: Number, default: 0 },
  lastActiveDate: { type: String, default: null },
})

module.exports = mongoose.model("User", userSchema);