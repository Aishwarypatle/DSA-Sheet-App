const Problem = require("../models/Problem")

exports.getProblems = async (req, res) => {
  const problems = await Problem.find()
  res.json(problems)
}