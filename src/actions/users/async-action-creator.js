import {UsersActionCreator} from "./action-creator";

const UsersAsyncActionCreator = {
  getUsers: () => (dispatch, getState, api) => {
    return api.get('/users')
      .then((response) => {
        dispatch(UsersActionCreator.getUsers(response.data));
      })
      .catch((error) => {
        throw error;
      });
  },

  editUser: (data) => (dispatch, getState, api) => {
    const {item} = data;

    return api.put(`/users/${item.id}`, item)
      .then((response) => {
        dispatch(UsersActionCreator.editUser(data));
      })
      .catch((error) => {
        throw error;
      });
  },

  deleteUser: (data) => (dispatch, getState, api) => {
    const {item} = data;

    return api.delete(`/users/${item.id}`)
      .then((response) => {
        dispatch(UsersActionCreator.deleteUser(data));
      })
      .catch((error) => {
        throw error;
      });
  },
};

export {UsersAsyncActionCreator};
