import PeopleIcon from '@material-ui/icons/People';
import ListAltIcon from '@material-ui/icons/ListAlt';
import {CategoriesActionCreator} from "./action-creator";

const CategoriesAsyncActionCreator = {
  getCategories: () => (dispatch, getState, api) => {
    return api.get('/categories')
      .then((response) => {
        let {data} = response;
        const icons = [PeopleIcon, ListAltIcon];

        data = data.map((elem, i) => {
          elem.icon = icons[i];

          return elem;
        });

        dispatch(CategoriesActionCreator.getCategories(data));
        dispatch(CategoriesActionCreator.setCurrentCategory(data[0].category))
      })
      .catch((error) => {
        throw error;
      });
  },
};

export {CategoriesAsyncActionCreator};
