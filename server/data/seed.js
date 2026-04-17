const mongoose = require("mongoose");
const Problem = require("../models/Problem");
// console.log("MONGO_URI", process.env.MONGO_URI);

mongoose.connect("mongodb+srv://Aish:LGPUHiQmjjS46xO8@cluster0.edzinqu.mongodb.net/?appName=Cluster0");

const data = [
  {
    title: "Two Sum",
    topic: "Array",
    difficulty: "easy",
    youtubeLink: "https://youtube.com",
    leetcodeLink: "https://leetcode.com",
    articleLink: "https://google.com",
  },
  {
    title: "Kadane's Algorithm",
    topic: "Array",
    difficulty: "medium",
    youtubeLink: "https://youtube.com",
    leetcodeLink: "https://leetcode.com",
    articleLink: "https://google.com",
  },
];

(async () => {
  await Problem.deleteMany();
  await Problem.insertMany(data);
  console.log("Seeded");
  process.exit();
})();