import React, { useReducer } from "react";
import { ReducerType } from "src/constants";
import { AlertStateType } from "../types";
import { AlertContext } from "./AlertContext";
import GithubReducer from "./AlertReducer";

const AlertState = (props: any) => {
  const initialState: AlertStateType = {
    alert: null,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);
  //Get Alert
  const showAlert = (msg: string, type: string) => {
    dispatch({ type: ReducerType.SET_ALERT, payload: { msg, type } });
    setTimeout(() => {
      dispatch({ type: ReducerType.REMOVE_ALERT, payload: null });
    }, 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        showAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
