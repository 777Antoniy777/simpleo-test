const checkAuthorizationStatus = (state) => {
  return state.user.authorizationStatus;
};

export {checkAuthorizationStatus};
