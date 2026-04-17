const router = require("express").Router();
const { getProblems } = require("../controllers/problemController");

router.get("/", getProblems)

module.exports = router