import {UsersActionType} from "../../actions/users/action-creator";
import {updateItem, deleteItem, addItem} from "../../actions/action-helpers";

const initialState = {
  users: [],
};

export default function createState(state = initialState, action) {
  switch (action.type) {
    case UsersActionType.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case UsersActionType.EDIT_USER:
      return {
        ...state,
        users: updateItem(state.users, action.payload),
      };

    case UsersActionType.DELETE_USER:
      return {
        ...state,
        users: deleteItem(state.users, action.payload),
      };

    case UsersActionType.ADD_USER:
      return {
        ...state,
        users: addItem(state.users, action.payload),
      };

    default:
      return state;
  }
}
