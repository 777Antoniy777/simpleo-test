const UsersActionType = {
  GET_USERS: 'GET_USERS',
  EDIT_USER: 'EDIT_USER',
  DELETE_USER: 'DELETE_USER',
  ADD_USER: 'ADD_USER',
  SET_USERS_REQUEST_DATA: 'SET_USERS_REQUEST_DATA',
};

const UsersActionCreator = {
  getUsers: (data) => ({
    type: UsersActionType.GET_USERS,
    payload: data,
  }),

  editUser: (data) => ({
    type: UsersActionType.EDIT_USER,
    payload: data,
  }),

  deleteUser: (data) => ({
    type: UsersActionType.DELETE_USER,
    payload: data,
  }),

  addUser: (data) => ({
    type: UsersActionType.ADD_USER,
    payload: data,
  }),

  setRequestData: (data) => ({
    type: UsersActionType.SET_USERS_REQUEST_DATA,
    payload: data,
  }),
};

export {UsersActionType, UsersActionCreator};
