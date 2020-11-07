import {TemperatureActionType} from "../../actions/temperature/action-creator";
import {updateItem, deleteItem} from "../../actions/action-helpers";

const initialState = {
  temperature: [],
  requestData: {
    status: null,
    message: '',
  },
};

export default function createState(state = initialState, action) {
  switch (action.type) {
    case TemperatureActionType.GET_TEMPERATURE:
      return {
        ...state,
        temperature: action.payload,
      };

    case TemperatureActionType.EDIT_TEMPERATURE:
      return {
        ...state,
        temperature: updateItem(state.temperature, action.payload),
      };

    case TemperatureActionType.DELETE_TEMPERATURE:
      return {
        ...state,
        temperature: deleteItem(state.temperature, action.payload),
      };

    case TemperatureActionType.SET_TEMPERATURE_REQUEST_DATA:
      return {
        ...state,
        requestData: action.payload,
      };

    default:
      return state;
  }
}
