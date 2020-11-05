const TemperatureActionType = {
  EDIT_TEMPERATURE: 'EDIT_TEMPERATURE',
  DELETE_TEMPERATURE: 'DELETE_TEMPERATURE',
};

const TemperatureActionCreator = {
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


