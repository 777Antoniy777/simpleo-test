import {combineReducers} from "redux";
import temperature from "./temperature/temperature";
import users from "./users/users";
import categories from "./categories/categories";
import user from "./user/user";

export default combineReducers({
  temperature,
  users,
  categories,
  user,
});
