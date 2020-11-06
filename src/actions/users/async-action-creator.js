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
};

export {UsersAsyncActionCreator};
