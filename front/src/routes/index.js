import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const PATHS = {
  LOGIN: "/login",

  LOGOUT: "/logout",
};

const routeHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },

  {
    exact: true,
    path: PATHS.LOGIN,
    component: Login,
  },
];

export { routeHome, PATHS };
