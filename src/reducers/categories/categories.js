import {CategoriesActionType} from "../../actions/categories/action-creator";

const initialState = {
  categories: [],
  currentCategory: null,
};

export default function createState(state = initialState, action) {
  switch (action.type) {
    case CategoriesActionType.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case CategoriesActionType.SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };

    default:
      return state;
  }
}
