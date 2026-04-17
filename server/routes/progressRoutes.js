const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  getProgress,
  toggleProgress,
} = require("../controllers/progressController");

router.get("/", auth, getProgress);
router.post("/toggle", auth, toggleProgress);

module.exports = router;