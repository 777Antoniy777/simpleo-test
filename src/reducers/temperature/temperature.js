import {TemperatureActionType} from "../../actions/temperature/action-creator";
import {updateItem, deleteItem} from "../../actions/action-helpers";

const initialState = {
  temperature: [
    {
      id: 1,
      data: 6,
    },
    {
      id: 2,
      data: 12,
    },
  ],
};

export default function createState(state = initialState, action) {
  switch (action.type) {
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

    default:
      return state;
  }
}
