import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserLogin from "./Pages/UserLogin/UserLogin";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import Quiz from "./Pages/Quiz/Quiz";
import QuizFinish from "./Pages/QuizFinish/QuizFinish";
import Questions from "./Pages/AdminPanel/Questions";
import QuestionDetail from "./Pages/AdminPanel/QuestionDetail";
import AddQuestion from "./Pages/AdminPanel/AddQuestion";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
