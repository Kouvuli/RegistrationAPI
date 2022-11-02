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
  const loginHandler = async (data) => {
    if (!data || !data.username || !data.password) {
      return;
    }
    await registrationApi.authenticateUser(data);
    window.location.reload();
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
            {...register("username")}
            required
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            {...register("password")}
            required
          />
        </div>
        <button className="submit-btn">Log in</button>
      </div>
    </form>
  );
};

export default LoginForm;
