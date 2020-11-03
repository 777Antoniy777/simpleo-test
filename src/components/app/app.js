import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {AppRoute} from "../../js/enums";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={AppRoute.MAIN} exact
          render={() => (
            <Main />
          )}
        />

        <Route
          path={AppRoute.SIGN_IN}
          render={() => (
            <SignIn />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
