import React from "react";

const Home = () => {
  const logOutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div className="layout-center">
      <div>Home Page</div>
      <br />
      <button onClick={logOutHandler}>Log out</button>
    </div>
  );
};

export default Home;
