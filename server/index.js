require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 7070
const MONGO_URI = process.env.MONGO_URI

app.use(cors({
  origin: "*",
}));
app.use(express.json());

app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
})

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/problems", require("./routes/problemRoutes"));
app.use("/api/progress", require("./routes/progressRoutes"));

mongoose.connect(MONGO_URI).then(() => {
  console.log("DB Connected")
  app.listen(PORT, () => console.log("Server running", PORT));
})