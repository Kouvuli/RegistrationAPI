import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import useProvideAuth from "../hooks/useProvideAuth";
import { createContext } from "react";
import { AUTH_ROUTES, ROUTES } from "../routes";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

export const AuthPageTemplate = ({ Component, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={(propsComponent) =>
        auth.user ? <Component {...propsComponent} /> : <Redirect to="/login" />
      }
    />
  );
};
export const PagesTemplate = ({ Component, ...props }) => {
  let auth = useAuth();
  return (
    <Route
      {...props}
      render={(propsComponent) =>
        !auth.user ? <Component {...propsComponent} /> : <Redirect to="/" />
      }
    />
  );
};
export const authContext = createContext();
function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
const App = () => {
  const showPages = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <PagesTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  const showAuthPage = (authRoutes) => {
    if (authRoutes && authRoutes.length > 0) {
      return authRoutes.map((item, index) => {
        return (
          <AuthPageTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  return (
    <ProvideAuth>
      <BrowserRouter>
        <Switch>
          {showPages(ROUTES)}
          {showAuthPage(AUTH_ROUTES)}
          <Route path="" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </ProvideAuth>
  );
};

export default App;
