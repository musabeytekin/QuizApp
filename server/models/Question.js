const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: {
    type: String
  },
  options: [
    {
      content: {
        type: String
      }
    }
  ],
  correctAnswer: {
    type: String
  },
});

module.exports = mongoose.model("Question", QuestionSchema);
