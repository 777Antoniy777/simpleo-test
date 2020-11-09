import {AuthorizationStatus} from "../../js/enums";
import {setAuthorizationStatus} from "../../js/setAuthorizationStatus";
import {UserActionType} from "../../actions/user/action-creator";

let authorizationStatus = window.sessionStorage.getItem('authorizationStatus');

if (!authorizationStatus) {
  authorizationStatus = setAuthorizationStatus(AuthorizationStatus.NO_AUTH);
}

const initialState = {
  authorizationStatus: authorizationStatus,
  requestData: {
    status: null,
    message: '',
  },
};

export default function createState(state = initialState, action) {
  switch (action.type) {
    case UserActionType.SET_AUTHORIZATION_STATUS:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case UserActionType.SET_USER_REQUEST_DATA:
      return {
        ...state,
        requestData: action.payload,
      };

    default:
      return state;
  }
}
