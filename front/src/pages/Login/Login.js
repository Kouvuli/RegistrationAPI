import React, { useEffect, useState } from "react";
import registrationApi from "../../apis/registrationApi";
import LoginForm from "../../components/Form/LoginForm";
import SignUpForm from "../../components/Form/SignUpForm";

const Login = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [loginData, setLoginData] = useState({});
  useEffect(() => {}, []);
  const loginHandler = (e) => {
    e.preventDefault();
    if (!loginData || !loginData.username || !loginData.password) {
      return;
    }
    registrationApi.authenticateUser(loginData);
  };

  const signUpOpenHandler = (e) => {
    e.preventDefault();
    setIsSignUpOpen((prev) => !prev);
  };
  return (
    <div className="form-structor">
      {/* <form
        onSubmit={signupHandler}
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
            className="input"
            placeholder="Username"
            onChange={(e) => {
              setSignUpData((prev) => {
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
              setSignUpData((prev) => {
                return { ...prev, password: e.target.value };
              });
            }}
            required
          />
          <input
            type="text"
            className="input"
            placeholder="Full name"
            onChange={(e) => {
              setSignUpData((prev) => {
                return { ...prev, fullname: e.target.value };
              });
            }}
          />

          <input
            type="text"
            className="input"
            placeholder="Birthday"
            onChange={(e) => {
              setSignUpData((prev) => {
                return { ...prev, birthday: e.target.value };
              });
            }}
          />
        </div>
        <button className="submit-btn">Sign up</button>
      </form> */}
      <SignUpForm
        isSignUpOpen={isSignUpOpen}
        signUpOpenHandler={signUpOpenHandler}
      />
      <LoginForm
        isSignUpOpen={isSignUpOpen}
        signUpOpenHandler={signUpOpenHandler}
      />
      {/* <form
        onSubmit={loginHandler}
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
      </form> */}
    </div>
  );
};

export default Login;
