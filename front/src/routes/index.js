import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const PATHS = {
  LOGIN: "/login",
};

const ROUTES = [
  {
    exact: true,
    path: PATHS.LOGIN,
    component: Login,
  },
];

const AUTH_ROUTES = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
];

export { AUTH_ROUTES, ROUTES, PATHS };
