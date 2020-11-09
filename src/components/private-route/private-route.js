import React from "react";
import PropTypes from 'prop-types';
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({authorizationStatus, condRedirect, linkRedirect, render, path, exact}) => {
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

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string,
  condRedirect: PropTypes.string,
  linkRedirect: PropTypes.string,
  render: PropTypes.element,
  path: PropTypes.string,
  exact: PropTypes.bool,
};

export default PrivateRoute;
