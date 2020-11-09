import {RequestMessage, RequestStatus} from "../../js/enums";
import {UsersActionCreator} from "./action-creator";

const UsersAsyncActionCreator = {
  getUsers: () => (dispatch, getState, api) => {
    return api.get('/users')
      .then((response) => {
        dispatch(UsersActionCreator.getUsers(response.data));
        dispatch(UsersActionCreator.setRequestData({
          status: RequestStatus.OK,
          message: '',
        }));
      })
      .catch((error) => {
        dispatch(UsersActionCreator.setRequestData({
          status: RequestStatus.ERROR,
          message: RequestMessage.ERROR_MESSAGE,
        }));

        throw error;
      });
  },

  editUser: (data) => (dispatch, getState, api) => {
    const {item} = data;

    return api.put(`/users/${item.id}`, item)
      .then((response) => {
        dispatch(UsersActionCreator.editUser(data));
        dispatch(UsersActionCreator.setRequestData({
          status: RequestStatus.OK,
          message: '',
        }));
      })
      .catch((error) => {
        dispatch(UsersActionCreator.setRequestData({
          status: RequestStatus.ERROR,
          message: RequestMessage.ERROR_MESSAGE,
        }));

        throw error;
      });
  },

  deleteUser: (data) => (dispatch, getState, api) => {
    const {item} = data;

    return api.delete(`/users/${item.id}`)
      .then((response) => {
        dispatch(UsersActionCreator.deleteUser(data));
        dispatch(UsersActionCreator.setRequestData({
          status: RequestStatus.OK,
          message: '',
        }));
      })
      .catch((error) => {
        dispatch(UsersActionCreator.setRequestData({
          status: RequestStatus.ERROR,
          message: RequestMessage.ERROR_MESSAGE,
        }));

        throw error;
      });
  },
};

export {UsersAsyncActionCreator};
