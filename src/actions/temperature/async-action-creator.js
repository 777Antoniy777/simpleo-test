import {TemperatureActionCreator} from "./action-creator";

const TemperatureAsyncActionCreator = {
  getTemperature: () => (dispatch, getState, api) => {
    return api.get('/temperature')
      .then((response) => {
        dispatch(TemperatureActionCreator.getTemperature(response.data));
      })
      .catch((error) => {
        throw error;
      });
  },

  editTemperature: (data) => (dispatch, getState, api) => {
    const {item} = data;

    return api.put(`/temperature/${item.id}`, item)
      .then((response) => {
        dispatch(TemperatureActionCreator.editTemperature(data));
      })
      .catch((error) => {
        throw error;
      });
  },

  deleteTemperature: (data) => (dispatch, getState, api) => {
    const {item} = data;

    return api.delete(`/temperature/${item.id}`)
      .then((response) => {
        dispatch(TemperatureActionCreator.deleteTemperature(data));
      })
      .catch((error) => {
        throw error;
      });
  },
};

export {TemperatureAsyncActionCreator};
