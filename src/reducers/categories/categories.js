import PeopleIcon from '@material-ui/icons/People';
import ListAltIcon from '@material-ui/icons/ListAlt';
import {CategoriesActionType} from "../../actions/categories/action-creator";

const initialState = {
  categories: [
    {
      id: 1,
      category: 'users',
      icon: PeopleIcon,
    },
    {
      id: 2,
      category: 'temperature',
      icon: ListAltIcon,
    },
  ],
  currentCategory: 'temperature',
};

export default function createState(state = initialState, action) {
  switch (action.type) {
    case CategoriesActionType.SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };

    default:
      return state;
  }
}
