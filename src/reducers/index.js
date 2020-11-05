import {combineReducers} from "redux";
import temperature from "./temperature/temperature";
import users from "./users/users";
import categories from "./categories/categories";

export default combineReducers({
  temperature,
  users,
  categories,
});
