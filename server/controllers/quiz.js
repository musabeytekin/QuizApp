const Question = require("../models/Question");

const getQuiz = async (req, res, next) => {
  const allQuestions = await Question.find();

  const shuffled = allQuestions.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 10);

  return res.status(200).json({
    success: true,
    data: selected
  });
};

module.exports = getQuiz;
