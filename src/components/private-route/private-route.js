import React from "react";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({authorizationStatus, condRedirect, linkRedirect, render, path, exact}) => {
  console.log(authorizationStatus, condRedirect, linkRedirect)
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => (
        authorizationStatus === condRedirect
          ? render({...props})
          : <Redirect to={linkRedirect} />
      )}
    />
  );
};

export default PrivateRoute;
