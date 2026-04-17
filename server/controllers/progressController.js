const Progress = require("../models/Progress");
const User = require("../models/User");


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

    // 🔥 STREAK LOGIC
    const user = await User.findById(req.user.id);

    const today = new Date().toISOString().split("T")[0];

    if (!user.lastActiveDate) {
      user.streak = 1;
    } else {
      const lastDate = new Date(user.lastActiveDate);
      const currentDate = new Date(today);

      const diff =
        (currentDate - lastDate) / (1000 * 60 * 60 * 24);

      if (diff === 1) {
        user.streak += 1; // continue streak
      } else if (diff > 1) {
        user.streak = 1; // reset streak
      }
    }

    user.lastActiveDate = today;
    await user.save();
  }

  res.json({ success: true });
}