import React from "react";
import {FormWrapper, SiteWrapper, Title, Form} from "./styles";

const SignIn = () => {
  return (
    <FormWrapper>
      <SiteWrapper>
        <Title as="h2">Login form</Title>

        <Form action="#" method="POST">
          <div className="input-wrapper">
            <label htmlFor="login">Login</label>
            <input id="login" type="text" name="login" />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" />
          </div>

          <div className="buttons-wrapper">
            <button type="submit">Login</button>
            <button type="submit">Registration</button>
          </div>
        </Form>
      </SiteWrapper>
    </FormWrapper>
  );
};

export default SignIn;
