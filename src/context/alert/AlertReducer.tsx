import { ReducerType } from "src/constants";
import { ActionType, AlertStateType } from "../types";

const AlertReducer = (
  state: AlertStateType,
  action: ActionType
): AlertStateType => {
  switch (action.type) {
    case ReducerType.SET_ALERT: {
      return {
        ...state,
        alert: action.payload,
      };
    }
    case ReducerType.REMOVE_ALERT: {
      return {
        ...state,
        alert: null,
      };
    }
    default:
      return state;
  }
};

export default AlertReducer;
