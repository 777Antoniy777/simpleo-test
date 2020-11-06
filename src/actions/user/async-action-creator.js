import {AuthorizationStatus} from "../../js/enums";
import {UserActionCreator} from "./action-creator";
import {UsersActionCreator} from "../users/action-creator";

const UserAsyncActionCreator = {
  login: (login, password, onUpdateFormState) => (dispatch, getState, api) => {
    return api.get(`/users?data=${login}&password=${password}`)
      .then((response) => {
        if (response.data.length > 0) {
          onUpdateFormState();

          dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
        } else {
          dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
        }
      })
      .catch((error) => {
        dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));

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
      })
      .catch((error) => {
        dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));

        throw error;
      });
  },
};

export {UserAsyncActionCreator};
