const Question = require("../models/Question");

const addQuestion = async (req, res, next) => {
  console.log(req.body);
  const { question, options, correctAnswer } = req.body;
  const newQuestion = await Question.create({
    question,
    options,
    correctAnswer
  });
  res.status(201).json({
    success: true,
    data: newQuestion
  });
};

const getQuestions = async (req, res, next) => {
  const questions = await Question.find();
  res.status(200).json({
    success: true,
    data: questions
  });
};

const getQuestion = async (req, res, next) => {
  const question = await Question.findById(req.params.id);
  res.status(200).json({
    success: true,
    data: question
  });
};

const updateQuestion = async (req, res, next) => {
  const id = req.params.id;
  const { question, options, correctAnswer} = req.body;

  const newQuestion = await Question.findByIdAndUpdate(
    id,
    { question, options, correctAnswer },
    { new: true, runValidators: true }
  );
  res.status(200).json({
    success: true,
    data: newQuestion
  });
};

const deleteQuestion = async (req, res, next) => {
  const id = req.params.id;
  await Question.findByIdAndDelete(id);

  return res.status(200).json({
    success: true,
    message: "Question deleted"
  });
};

module.exports = {
  addQuestion,
  getQuestions,
  getQuestion,
  updateQuestion,
  deleteQuestion
};
