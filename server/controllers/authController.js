const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    // console.log("REGISTER HIT", req.body);
    const { name, email, password } = req.body

  const hashed = await bcrypt.hash(password, 10)

  const user = await User.create({
    name,
    email,
    password: hashed,
  })

  const token = jwt.sign({ id: user._id }, "SECRET")

  res.json({ token, message: "User Created Successfully", success: true})
}

exports.login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ msg: "User not found" })

  const match = await bcrypt.compare(password, user.password)
  if (!match) return res.status(400).json({ msg: "Wrong password" })

  const token = jwt.sign({ id: user._id }, "SECRET")

  res.json({ token, message: "User Logged In Successfully", success: true })
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