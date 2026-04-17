require("dotenv").config();
const mongoose = require("mongoose");
const Problem = require("./models/Problem");

const data = require("./data/problem");

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("DB Connected")
    await Problem.deleteMany()
    console.log("Old data removed")
    await Problem.insertMany(data);

    console.log("Data seeded successfully 🚀");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();