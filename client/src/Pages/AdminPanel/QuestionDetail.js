import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AdminMenu from "../../Components/AdminMenu/AdminMenu";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const QuestionDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const question = location.state.question;
  const [answer, setAnswer] = useState(question.correctAnswer);

  const validationSchema = Yup.object({
    question: Yup.string().required("Zorunlu alan"),
    answer1: Yup.string().required("Zorunlu alan"),
    answer2: Yup.string().required("Zorunlu alan"),
    answer3: Yup.string().required("Zorunlu alan"),
    answer4: Yup.string().required("Zorunlu alan"),
    correctAnswer: Yup.string().required("Zorunlu alan")
  });

  const handleAnswer = (answer) => {
    setAnswer(answer);
  };
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      question: question.question,
      answer1: question.options[0].content,
      answer2: question.options[1].content,
      answer3: question.options[2].content,
      answer4: question.options[3].content,
      correctAnswer: question.correctAnswer
    },
    validationSchema,
    onSubmit: (values) => {
      const newQuestion = {
        question: values.question,
        options: [
          {
            content: values.answer1
          },
          {
            content: values.answer2
          },
          {
            content: values.answer3
          },
          {
            content: values.answer4
          }
        ],
        correctAnswer: answer
      };
      axios
        .put(`http://localhost:5001/api/question/${question._id}`, newQuestion)
        .then((res) => {
          navigate("/admin/questions");
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  });
  return (
    <div className="question-edit">
      <h2 className="header">SORU ID: {question._id}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Soru:</label>
          <textarea
            type="text"
            name="question"
            className="form-control"
            onChange={handleChange}
            value={values.question}
            values={values.question}
          />
          <span>{errors.question ? errors.question : null}</span>
        </div>
        <div>
          <label>Seçenek 1:</label>
          <input
            type="text"
            name="answer1"
            className="form-control mt-3"
            onChange={handleChange}
            value={values.answer1}
            values={values.answer1}
          />
          <span>{errors.answer1 ? errors.answer1 : null}</span>
        </div>
        <div>
          <label>Seçenek 2:</label>
          <input
            type="text"
            name="answer2"
            className="form-control mt-3"
            onChange={handleChange}
            value={values.answer2}
            values={values.answer2}
          />
          <span>{errors.answer2 ? errors.answer2 : null}</span>
        </div>
        <div>
          <label>Seçenek 3:</label>
          <input
            type="text"
            name="answer3"
            className="form-control mt-3"
            onChange={handleChange}
            value={values.answer3}
            values={values.answer3}
          />
          <span>{errors.answer3 ? errors.answer3 : null}</span>
        </div>
        <div>
          <label>Seçenek 4:</label>
          <input
            type="text"
            name="answer4"
            className="form-control mt-3"
            onChange={handleChange}
            value={values.answer4}
            values={values.answer4}
          />
          <span>{errors.answer4 ? errors.answer4 : null}</span>
        </div>
        <div>
          <label>Doğru Cevap:</label>
          <span>{errors.correctAnswer ? errors.correctAnswer : null}</span>
        </div>
        <div className="operations">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              type="button"
              aria-expanded="false"
            >
              {answer}
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleAnswer(values.answer1)}
                >
                  {values.answer1}
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleAnswer(values.answer2)}
                >
                  {values.answer2}
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleAnswer(values.answer3)}
                >
                  {values.answer3}
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleAnswer(values.answer4)}
                >
                  {values.answer4}
                </button>
              </li>
            </ul>
          </div>
          <button type="submit" className="btn-save mt-4">
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionDetail;
