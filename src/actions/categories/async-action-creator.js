import PeopleIcon from '@material-ui/icons/People';
import ListAltIcon from '@material-ui/icons/ListAlt';
import {RequestMessage, RequestStatus} from "../../js/enums";
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
        dispatch(CategoriesActionCreator.setCurrentCategory(data[0].category));
        dispatch(CategoriesActionCreator.setRequestData({
          status: RequestStatus.OK,
          message: '',
        }));
      })
      .catch((error) => {
        dispatch(CategoriesActionCreator.setRequestData({
          status: RequestStatus.ERROR,
          message: RequestMessage.ERROR_MESSAGE,
        }));

        throw error;
      });
  },
};

export {CategoriesAsyncActionCreator};
