import axios from "axios";

const saveQuestion = async (question) => {
  const res = await axios.post(
    `http://localhost:5001/api/question/${question._id}`,
    question
  );
  return res.data;
};

module.exports = {
  saveQuestion
};
