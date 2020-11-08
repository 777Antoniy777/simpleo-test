import {AuthorizationStatus} from "../../js/enums";
import {UserActionType} from "../../actions/user/action-creator";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
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
