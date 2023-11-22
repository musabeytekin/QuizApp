const express = require("express");
const router = express.Router();
const {
  addQuestion,
  getQuestions,
  getQuestion,
  updateQuestion,
  deleteQuestion
} = require("../controllers/question");

router.get("/", getQuestions);
router.post("/", addQuestion);
router.get("/:id", getQuestion);
router.put("/:id", updateQuestion);
router.delete("/:id", deleteQuestion);

module.exports = router;
