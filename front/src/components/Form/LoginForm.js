import React, { useState } from "react";
import { useForm } from "react-hook-form";
import registrationApi from "../../apis/registrationApi";
const LoginForm = ({ isSignUpOpen, signUpOpenHandler }) => {
  const [loginData, setLoginData] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const loginHandler = (e) => {
    e.preventDefault();
    if (!loginData || !loginData.username || !loginData.password) {
      return;
    }
    registrationApi.authenticateUser(loginData);
  };
  return (
    <form
      onSubmit={handleSubmit(loginHandler)}
      className={`login ${isSignUpOpen ? "slide-up" : ""}`}
    >
      <div className="center">
        <h2 className="form-title" id="login">
          <div onClick={signUpOpenHandler}>
            <span>or</span>Log in
          </div>
        </h2>
        <div className="form-holder">
          <input
            type="text"
            className="input"
            placeholder="Username"
            onChange={(e) => {
              setLoginData((prev) => {
                return { ...prev, username: e.target.value };
              });
            }}
            required
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            onChange={(e) => {
              console.log(loginData);
              setLoginData((prev) => {
                return { ...prev, password: e.target.value };
              });
            }}
            required
          />
        </div>
        <button className="submit-btn">Log in</button>
      </div>
    </form>
  );
};

export default LoginForm;
