const AppRoute = {
  MAIN: `/`,
  SIGN_IN: `/login`,
};

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`,
};

const RequestMessage = {
  ERROR_MESSAGE: 'Something error. Repeat later',
  ERROR_LOGIN_MESSAGE: 'You are not login. Please register',
};

const RequestStatus = {
  OK: 200,
  ERROR: 404,
};

export {AppRoute, AuthorizationStatus, RequestMessage, RequestStatus};
