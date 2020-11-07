const TemperatureActionType = {
  GET_TEMPERATURE: 'GET_TEMPERATURE',
  EDIT_TEMPERATURE: 'EDIT_TEMPERATURE',
  DELETE_TEMPERATURE: 'DELETE_TEMPERATURE',
  SET_TEMPERATURE_REQUEST_DATA: 'SET_TEMPERATURE_REQUEST_DATA',
};

const TemperatureActionCreator = {
  getTemperature: (data) => ({
    type: TemperatureActionType.GET_TEMPERATURE,
    payload: data,
  }),

  editTemperature: (data) => ({
    type: TemperatureActionType.EDIT_TEMPERATURE,
    payload: data,
  }),

  deleteTemperature: (data) => ({
    type: TemperatureActionType.DELETE_TEMPERATURE,
    payload: data,
  }),

  setRequestData: (data) => ({
    type: TemperatureActionType.SET_TEMPERATURE_REQUEST_DATA,
    payload: data,
  }),
};

export {TemperatureActionType, TemperatureActionCreator};


