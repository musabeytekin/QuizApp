import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserLogin from "./Pages/UserLogin/UserLogin";
import { useSelector } from "react-redux";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import Quiz from "./Pages/Quiz/Quiz";
import QuizFinish from "./Pages/QuizFinish/QuizFinish";
import Questions from "./Pages/AdminPanel/Questions";
import QuestionDetail from "./Pages/AdminPanel/QuestionDetail";
import AddQuestion from "./Pages/AdminPanel/AddQuestion";
import Panel from "./Pages/AdminPanel/Panel";
const App = () => {
  const admin = useSelector((state) => state.auth.admin);
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin" element={<Panel />}>
            <Route
              path="questions"
              element={
                admin === true ? <Questions /> : <Navigate to={"/admin"} />
              }
            />
            <Route path="questions/add" element={<AddQuestion />} />
            <Route
              path="edit"
              element={
                admin === true ? <QuestionDetail /> : <Navigate to={"/admin"} />
              }
            />
          </Route>

          <Route
            path="/quiz"
            element={user === true ? <Quiz /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/quizfinish"
            element={
              user === true ? <QuizFinish /> : <Navigate to={"/login"} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
