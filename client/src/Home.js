import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Components/Logo/Logo";
import "./Home.css";
import img from "./img/hero.png";
export const Home = () => {
  const user = localStorage.getItem("user");
  const admin = localStorage.getItem("admin");
  return (
    <div className="home-root d-flex">
      <div className="home-left p-2 d-flex flex-column">
        <Logo />
        <div className="d-flex flex-column justify-content-center ">
          <h3 className="hero-text">What is your Score?</h3>
          <p className="hero-slogan">
            Take this quick 10-question quiz to find out!
          </p>
          <div className="d-flex align-items-center">
            <Link to={"/quiz"}>
            {console.log(user)}
              <button className="btn-start">Start</button>
            </Link>
            <i className="ps-2">Takes only 10 minute...</i>
          </div>
        </div>
        <div className="d-flex flex-column mt-auto mb-5">
          <div className="hero-buttom-text">Are you an Administrator?</div>
          <div id="fallow-me">
            <Link to={admin === "true" ? "/admin/questions" : "/adminlogin"}>Fallow me..</Link>
          </div>
        </div>
      </div>
      <div className="home-right">
        <img src={img} alt="" />
      </div>
    </div>
  );
};
