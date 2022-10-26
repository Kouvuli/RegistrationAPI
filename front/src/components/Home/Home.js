import React from "react";

const Home = () => {
  const logOutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
  };
  return <button onClick={logOutHandler}>Log out</button>;
};

export default Home;
