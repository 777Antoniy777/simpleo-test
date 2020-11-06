import React from "react";
import {connect} from "react-redux";
// import {checkAuthorizationStatus} from "../../selectors/user/selectors";
import {UserAsyncActionCreator} from "../../actions/user/async-action-creator";
import {FormWrapper, SiteWrapper, Title, Form} from "./styles";

class SignIn extends React.PureComponent {
  state = {
    name: '',
    password: '',
  }

  handleFormSubmit = (evt) => {
    evt.preventDefault();
  }

  handleLoginInputChange = (evt) => {
    const target = evt.target;
    const value = target.value;

    this.setState({
      name: value,
    });
  }

  handlePasswordInputChange = (evt) => {
    const target = evt.target;
    const value = target.value;

    this.setState({
      password: value,
    });
  }

  handleLoginButtonClick = (evt) => {
    evt.preventDefault();
    const {login} = this.props;
    const {name, password} = this.state;

    login(name, password, this.onUpdateFormState);
  }

  handleRegisterButtonClick = (evt) => {
    evt.preventDefault();
    const {register} = this.props;
    const {name, password} = this.state;

    register(name, password, this.onUpdateFormState);
  }

  onUpdateFormState = () => {
    this.setState({
      name: '',
      password: '',
    });
  }

  render() {
    const {name, password} = this.state;

    return (
      <FormWrapper>
        <SiteWrapper>
          <Title as="h2">Login form</Title>

          <Form action="#" method="POST" onSubmit={this.handleFormSubmit}>
            <div className="input-wrapper">
              <label htmlFor="login">Login</label>
              <input id="login" type="text" value={name} name="login" onChange={this.handleLoginInputChange} />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" value={password} name="password" onChange={this.handlePasswordInputChange} />
            </div>

            <div className="buttons-wrapper">
              <button type="submit" onClick={this.handleLoginButtonClick}>Login</button>
              <button type="submit" onClick={this.handleRegisterButtonClick}>Registration</button>
            </div>
          </Form>
        </SiteWrapper>
      </FormWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  // authorizationStatus: checkAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login: (name, password, cb) => {
    dispatch(UserAsyncActionCreator.login(name, password, cb));
  },
  register: (name, password, cb) => {
    dispatch(UserAsyncActionCreator.register(name, password, cb));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
