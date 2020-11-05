import {UsersActionType} from "../../actions/users/action-creator";
import {updateItem, deleteItem} from "../../actions/action-helpers";

const initialState = {
  users: [
    {
      id: 1,
      data: 'User Petr',
    },
    {
      id: 2,
      data: "User Alexey",
    },
    {
      id: 3,
      data: "User Ivan",
    },
  ],
};

export default function createState(state = initialState, action) {
  switch (action.type) {
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

    default:
      return state;
  }
}
