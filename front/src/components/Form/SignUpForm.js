import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Tippy from "@tippyjs/react";
import registrationApi from "../../apis/registrationApi";
const SignUpForm = ({ isSignUpOpen, signUpOpenHandler }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const signup = async () => {
    await registrationApi.registerUser({
      username: "ldtam2",
      birthday: "11/02/2001",
      fullname: "LED TAM",
      password: "123",
    });
    console.log("success");
  };
  const signupHandler = async (data) => {
    if (!data || !data.username || !data.password) {
      return;
    }
    try {
      await signup();
    } catch (err) {
      console.log(err);
    }
    // registrationApi.registerUser(data);
  };
  return (
    <form
      onSubmit={handleSubmit(signupHandler)}
      className={`signup ${!isSignUpOpen ? "slide-up" : ""}`}
    >
      <h2 className={`form-title`} id="signup">
        <div onClick={signUpOpenHandler}>
          <span>or</span>Sign up
        </div>
      </h2>
      <div className="form-holder">
        <input
          type="text"
          {...register("username")}
          className="input"
          placeholder="Username"
          required
        />

        <input
          type="password"
          className="input"
          {...register("password")}
          placeholder="Password"
          required
        />
        <input
          type="text"
          className="input"
          {...register("fullname")}
          placeholder="Full name"
          required
        />

        <input
          type="text"
          className="input"
          {...register("birthday")}
          placeholder="Birthday"
          required
        />
      </div>
      <button className="submit-btn" type="submit">
        Sign up
      </button>
    </form>
  );
};

export default SignUpForm;
