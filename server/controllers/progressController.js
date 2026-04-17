const Progress = require("../models/Progress");

exports.getProgress = async (req, res) => {
  const progress = await Progress.find({ userId: req.user.id });
  res.json(progress);
};

exports.toggleProgress = async (req, res) => {
  const { problemId } = req.body;

  const existing = await Progress.findOne({
    userId: req.user.id,
    problemId,
  });

  if (existing) {
    await existing.deleteOne();
  } else {
    await Progress.create({
      userId: req.user.id,
      problemId,
    });
  }

  res.json({ success: true });
}