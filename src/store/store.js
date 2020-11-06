import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import axiosInstance from "./api";
import rootReducer from "../reducers/index";
import {TemperatureAsyncActionCreator} from "../actions/temperature/async-action-creator";
import {UsersAsyncActionCreator} from "../actions/users/async-action-creator";
import {CategoriesAsyncActionCreator} from "../actions/categories/async-action-creator";

const api = axiosInstance;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(TemperatureAsyncActionCreator.getTemperature());
store.dispatch(UsersAsyncActionCreator.getUsers());
store.dispatch(CategoriesAsyncActionCreator.getCategories());

export default store;
