import React from "react";
import {connect} from "react-redux";
import {getUserRequestData} from "../../selectors/user/selectors";
import {UserAsyncActionCreator} from "../../actions/user/async-action-creator";
import {FormWrapper, SiteWrapper, Title, Form, ErrorMessage} from "./styles";
import Error from "../error/error";

class SignIn extends React.PureComponent {
  state = {
    nameValues: {
      value: '',
      message: '',
    },
    passwordValues: {
      value: '',
      message: '',
    },
  }

  handleFormSubmit = (evt) => {
    evt.preventDefault();
  }

  handleLoginInputChange = (evt) => {
    const target = evt.target;
    const value = target.value.trim();

    this.setState({
      nameValues: {
        value,
        message: '',
      },
    });
  }

  handlePasswordInputChange = (evt) => {
    const target = evt.target;
    const value = target.value.trim();

    this.setState({
      passwordValues: {
        value,
        message: '',
      },
    });
  }

  handleLoginButtonClick = (evt) => {
    evt.preventDefault();
    const {login} = this.props;
    const {nameValues, passwordValues} = this.state;

    this.sendFormData(nameValues, passwordValues, login);
  }

  handleRegisterButtonClick = (evt) => {
    evt.preventDefault();
    const {register} = this.props;
    const {nameValues, passwordValues} = this.state;

    this.sendFormData(nameValues, passwordValues, register);
  }

  sendFormData = (nameValues, passwordValues, func) => {
    const {value: nameValue} = nameValues;
    const {value: passwordValue} = passwordValues;

    if (!nameValue.length) {
      this.setState({
        nameValues: {
          ...nameValues,
          message: 'Login should not be empty',
        },
      });
    }

    if (!passwordValue.length) {
      this.setState({
        passwordValues: {
          ...passwordValues,
          message: 'Password should not be empty',
        },
      });
    }

    if (nameValue.length && passwordValue.length) {
      func(nameValue, passwordValue, this.onUpdateFormState);
    }
  }

  onUpdateFormState = () => {
    const {nameValues, passwordValues} = this.state;

    this.setState({
      nameValues: {
        ...nameValues,
        value: '',
      },
      passwordValues: {
        ...passwordValues,
        value: '',
      },
    });
  }

  render() {
    const {userRequestData} = this.props;
    const {nameValues, passwordValues} = this.state;
    const {value: nameValue, message: nameMessage} = nameValues;
    const {value: passwordValue, message: passwordMessage} = passwordValues;

    return (
      <FormWrapper>
        <SiteWrapper>
          <Title as="h2">Login form</Title>

          <Form action="#" method="POST" onSubmit={this.handleFormSubmit}>
            <div className="input-wrapper">
              <label htmlFor="login">Login</label>
              <input error={nameMessage} id="login" type="text" value={nameValue} name="login" onChange={this.handleLoginInputChange} />

              { nameMessage &&
                <ErrorMessage>{nameMessage}</ErrorMessage>
              }
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input error={passwordMessage} id="password" type="password" value={passwordValue} name="password" onChange={this.handlePasswordInputChange} />

              { passwordMessage &&
                <ErrorMessage>{passwordMessage}</ErrorMessage>
              }
            </div>

            <div className="buttons-wrapper">
              <button type="submit" onClick={this.handleLoginButtonClick}>Login</button>
              <button type="submit" onClick={this.handleRegisterButtonClick}>Registration</button>
            </div>

            {/* Error message */}
            <Error
              // properies
              requestData={[userRequestData]}
            />
          </Form>
        </SiteWrapper>
      </FormWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  userRequestData: getUserRequestData(state),
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
