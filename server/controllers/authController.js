const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }


    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    const hashed = await bcrypt.hash(password, 10)
    const user = await User.create({
      name,
      email,
      password: hashed,
    })

    const token = jwt.sign({ id: user._id }, "SECRET")
    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      token,
    })

  } catch (error) {

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    console.error("Register Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ success: false, message: "User not found" })

  const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(400).json({ success: false, message: "Wrong password" })

  const token = jwt.sign({ id: user._id }, "SECRET")

  res.json({ token, message: "User Logged In Successfully", success: true, user })
}


exports.googleAuth = async (req, res) => {
  const { email, name } = req.body

  let user = await User.findOne({ email })

  if (!user) {
    user = await User.create({ email, name })
  }

  const token = jwt.sign({ id: user._id }, "SECRET")

  res.json({ token })
}