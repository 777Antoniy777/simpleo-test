const TemperatureActionType = {
  GET_TEMPERATURE: 'GET_TEMPERATURE',
  EDIT_TEMPERATURE: 'EDIT_TEMPERATURE',
  DELETE_TEMPERATURE: 'DELETE_TEMPERATURE',
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
};

export {TemperatureActionType, TemperatureActionCreator};


