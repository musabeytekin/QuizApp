import React from "react";
import "./userlogin.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Logo } from "../../Components/Logo/Logo";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/authSlice";

const UserLogin = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const validationSchema = Yup.object({
    username: Yup.string().required("Zorunlu alan"),
    password: Yup.string().required("Zorunlu alan")
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema,
    onSubmit: (values) => {
      if (values.username === "user" && values.password === "user") {
        dispatch(setUser());
        navigation("/quiz");
      } else {
        alert("Kullanıcı adı veya şifre hatalı");
      }
    }
  });

  return (
    <div className="user-login-root">
      <div className="form-login">
        <div className="form-header">
          <Logo />
        </div>

        <div className="form-description">PLEASE LOGIN TO AYSQUIZ</div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="User Name"
            onChange={handleChange}
            values={values.username}
          />
          <span>{errors.username ? errors.username : null}</span>
          <input
            type="password"
            name="password"
            className="form-control mt-3"
            placeholder="Password"
            onChange={handleChange}
            values={values.password}
          />
          <span>{errors.password ? errors.password : null}</span>

          <button type="submit" className="btn btn-success mt-3">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
