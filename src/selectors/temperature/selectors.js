const getTemperatureData = (state) => {
  return state.temperature.temperature;
};

const getTemperatureRequestData = (state) => {
  return state.temperature.requestData;
};

export {getTemperatureData, getTemperatureRequestData};
