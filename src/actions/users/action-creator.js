const UsersActionType = {
  EDIT_USER: 'EDIT_USER',
  DELETE_USER: 'DELETE_USER',
};

const UsersActionCreator = {
  editUser: (data) => ({
    type: UsersActionType.EDIT_USER,
    payload: data,
  }),

  deleteUser: (data) => ({
    type: UsersActionType.DELETE_USER,
    payload: data,
  }),
};

export {UsersActionType, UsersActionCreator};
