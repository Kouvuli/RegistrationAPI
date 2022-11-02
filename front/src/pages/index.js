import React, { useState } from "react";
import authHeader from "../utils/auth-header";
import Home from "./Home/Home";
import Login from "./Login/Login";
const App = () => {
  const [users, setUser] = useState(authHeader());
  return <>{users ? <Login /> : <Home />}</>;
};

export default App;
