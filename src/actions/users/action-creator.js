const UsersActionType = {
  GET_USERS: 'GET_USERS',
  EDIT_USER: 'EDIT_USER',
  DELETE_USER: 'DELETE_USER',
  ADD_USER: 'ADD_USER',
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
};

export {UsersActionType, UsersActionCreator};
