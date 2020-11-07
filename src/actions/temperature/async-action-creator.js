import {RequestMessage, RequestStatus} from "../../js/enums";
import {TemperatureActionCreator} from "./action-creator";

const TemperatureAsyncActionCreator = {
  getTemperature: () => (dispatch, getState, api) => {
    return api.get('/temperature')
      .then((response) => {
        dispatch(TemperatureActionCreator.getTemperature(response.data));
        dispatch(TemperatureActionCreator.setRequestData({
          status: RequestStatus.OK,
          message: '',
        }));
      })
      .catch((error) => {
        dispatch(TemperatureActionCreator.setRequestData({
          status: RequestStatus.ERROR,
          message: RequestMessage.ERROR_MESSAGE,
        }));

        throw error;
      });
  },

  editTemperature: (data) => (dispatch, getState, api) => {
    const {item} = data;

    return api.put(`/temperature/${item.id}`, item)
      .then((response) => {
        dispatch(TemperatureActionCreator.editTemperature(data));
        dispatch(TemperatureActionCreator.setRequestData({
          status: RequestStatus.OK,
          message: '',
        }));
      })
      .catch((error) => {
        dispatch(TemperatureActionCreator.setRequestData({
          status: RequestStatus.ERROR,
          message: RequestMessage.ERROR_MESSAGE,
        }));

        throw error;
      });
  },

  deleteTemperature: (data) => (dispatch, getState, api) => {
    const {item} = data;

    return api.delete(`/temperature/${item.id}`)
      .then((response) => {
        dispatch(TemperatureActionCreator.deleteTemperature(data));
        dispatch(TemperatureActionCreator.setRequestData({
          status: RequestStatus.OK,
          message: '',
        }));
      })
      .catch((error) => {
        dispatch(TemperatureActionCreator.setRequestData({
          status: RequestStatus.ERROR,
          message: RequestMessage.ERROR_MESSAGE,
        }));

        throw error;
      });
  },
};

export {TemperatureAsyncActionCreator};
