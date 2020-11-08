const UserActionType = {
  SET_AUTHORIZATION_STATUS: 'SET_AUTHORIZATION_STATUS',
  SET_USER_REQUEST_DATA: 'SET_USER_REQUEST_DATA',
};

const UserActionCreator = {
  setAuthorizationStatus: (status) => ({
    type: UserActionType.SET_AUTHORIZATION_STATUS,
    payload: status,
  }),

  setRequestData: (data) => ({
    type: UserActionType.SET_USER_REQUEST_DATA,
    payload: data,
  }),
};

export {UserActionType, UserActionCreator};
