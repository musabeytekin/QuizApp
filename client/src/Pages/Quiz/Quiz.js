import React, { useEffect } from "react";
import "./quiz.css";
import { Logo } from "../../Components/Logo/Logo";
import QuestionImg from "../../img/question4.webp";
import { useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { increaseScore } from "../../redux/scoreSlice";
import axios, { Axios } from "axios";
import { useSelector, useDispatch } from "react-redux";
// import Question from "../../Components/Question/Question";
const Quiz = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [loading, setLoading] = useState(true);

  const score = useSelector((state) => state.score.score);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("http://localhost:5001/api/quiz").then((res) => {
      setQuestions(res.data.data);
      setLoading(false);
    });
  }, []);

  // console.log(questions);

  const getCorrectAnswer = (question) => {
    return question.correctAnswer;
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(questions[number]);
    console.log("number: " + number);

    const correctAnswer = getCorrectAnswer(questions[number]);

    if (selectedAnswer === correctAnswer) {
      dispatch(increaseScore());
      console.log(score);
    }

    if (number + 1 === 10) {
      navigate("/quizfinish");
    }
    setNumber(number + 1);
  };

  const selectAnswer = (e) => {
    setSelectedAnswer(e.target.innerText);
    console.log(e.target.innerText);
  };

  return loading ? (
    <div>Veri Yükleniyor</div>
  ) : (
    <div className="question-page-root">
      <div className="left">
        <Logo />
        <img src={QuestionImg} alt="" />
      </div>
      <div className="right">
        <span>{`${number + 1}`}/10</span>
        <p>{questions[number].question}</p>
        <div className="options">
          {questions[number].options.map((option, index) => (
            <button key={index} onClick={selectAnswer}>
              {option.content}
            </button>
          ))}
          <div className="question-buttons">
            {number === 9 ? (
              <button className="btn btn-success" onClick={handleClick}>
                Finish
              </button>
            ) : (
              <>
                <button className="btn btn-primary" onClick={handleClick}>
                  Finish
                </button>

                <button className="btn btn-success" onClick={handleClick}>
                  Next
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
