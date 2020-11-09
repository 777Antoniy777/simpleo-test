const getAuthorizationStatus = (state) => {
  return state.user.authorizationStatus;
};

const getUserRequestData = (state) => {
  return state.user.requestData;
};

export {getAuthorizationStatus, getUserRequestData};
