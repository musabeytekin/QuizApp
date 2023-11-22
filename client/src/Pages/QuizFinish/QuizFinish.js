import React from "react";
import { Logo } from "../../Components/Logo/Logo";
import "./quizfinish.css";
import finishImg from "../../img/finishquiz.webp";
import { useSelector, useDispatch } from "react-redux";
import { clearScore } from "../../redux/scoreSlice";
import { Link } from "react-router-dom";

const QuizFinish = () => {
  const score = useSelector((state) => state.score.score);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearScore());
  };
  return (
    <div className="finish-page-root">
      <div className="left">
        <Logo />
        <img src={finishImg} alt="" />
      </div>
      <div className="right">
        <h1>Quiz Finished</h1>
        <p>
          Quiz'i başarıyla tamamladınız. <br />
        </p>
        <div className="answer-check">
          <div className="answer-control">
            <p>Doğru cevap sayısı</p>
            <span>{score / 10}</span>
          </div>
          <div className="answer-control">
            <p>Yanlış cevap sayısı</p>
            <span>{10 - score / 10}</span>
          </div>
        </div>
        <p className="score">
          Toplam Puanınız: <span>{score}</span>
        </p>

        <div className="navigation-buttons">
          <Link to="/">
            <button className="btn btn-success" onClick={handleClick}>
              Anasayfa
            </button>
          </Link>
          <Link to="/quiz">
            {" "}
            <button className="btn btn-warning me-5" onClick={handleClick}>
              Yeniden Başlat
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizFinish;
