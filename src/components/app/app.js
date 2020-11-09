import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {BrowserRouter, Switch} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "../../js/enums";
import {getAuthorizationStatus} from "../../selectors/user/selectors";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import PrivateRoute from "../private-route/private-route";

const App = ({authorizationStatus}) => {
  if (!authorizationStatus) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          // properties
          path={AppRoute.MAIN} exact
          condRedirect={AuthorizationStatus.AUTH}
          linkRedirect={AppRoute.SIGN_IN}
          authorizationStatus={authorizationStatus}
          render={(props) => (
            <Main
              // properties
              {...props}
            />
          )}
        />

        <PrivateRoute
          // properties
          path={AppRoute.SIGN_IN}
          condRedirect={AuthorizationStatus.NO_AUTH}
          linkRedirect={AppRoute.MAIN}
          authorizationStatus={authorizationStatus}
          render={(props) => (
            <SignIn
              // properties
              {...props}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(
    mapStateToProps,
    null
)(App);
