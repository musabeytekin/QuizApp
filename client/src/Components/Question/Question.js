import React from "react";
// import { Link } from "react-router-dom";
const Question = ({ number, question }) => {
  return (
    <div className="right">
      <span>{`${number}`}/10</span>
      <p>{question.question}</p>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index}>{option.content}</button>
        ))}
        {/* <div className="next-cover">
          {number === 10 ? (
            <Link to={"#"} id="next">
              Finish
            </Link>
          ) : (
            <Link to={"#"} id="next">
              Next
            </Link>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Question;
