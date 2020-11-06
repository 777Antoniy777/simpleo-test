const UserActionType = {
  SET_AUTHORIZATION_STATUS: 'SET_AUTHORIZATION_STATUS',
};

const UserActionCreator = {
  setAuthorizationStatus: (status) => ({
    type: UserActionType.SET_AUTHORIZATION_STATUS,
    payload: status,
  }),
};

export {UserActionType, UserActionCreator};
