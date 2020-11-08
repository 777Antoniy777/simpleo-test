import {AuthorizationStatus, RequestMessage, RequestStatus} from "../../js/enums";
import {UserActionCreator} from "./action-creator";
import {UsersActionCreator} from "../users/action-creator";

const UserAsyncActionCreator = {
  login: (login, password, onUpdateFormState) => (dispatch, getState, api) => {
    return api.get(`/users?data=${login}&password=${password}`)
      .then((response) => {
        if (response.data.length > 0) {
          onUpdateFormState();

          dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
          dispatch(UserActionCreator.setRequestData({
            status: RequestStatus.OK,
            message: '',
          }));
        } else {
          dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
          dispatch(UserActionCreator.setRequestData({
            status: RequestStatus.ERROR,
            message: RequestMessage.ERROR_LOGIN_MESSAGE,
          }));
        }
      })
      .catch((error) => {
        dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
        dispatch(UserActionCreator.setRequestData({
          status: RequestStatus.ERROR,
          message: RequestMessage.ERROR_MESSAGE,
        }));

        throw error;
      });
  },

  register: (login, password, onUpdateFormState) => (dispatch, getState, api) => {
    const formData = {
      data: login,
      password,
    };

    return api.post(`/users`, formData)
      .then((response) => {
        onUpdateFormState();

        dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
        dispatch(UsersActionCreator.addUser(response.data));
        dispatch(UserActionCreator.setRequestData({
          status: RequestStatus.OK,
          message: '',
        }));
      })
      .catch((error) => {
        dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
        dispatch(UserActionCreator.setRequestData({
          status: RequestStatus.ERROR,
          message: RequestMessage.ERROR_MESSAGE,
        }));

        throw error;
      });
  },
};

export {UserAsyncActionCreator};
