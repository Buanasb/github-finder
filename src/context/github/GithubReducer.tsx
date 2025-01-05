import { ReducerType } from "src/constants";
import { ActionType, GithubStateType } from "../types";

const GithubReducer = (
  state: GithubStateType,
  action: ActionType
): GithubStateType => {
  switch (action.type) {
    case ReducerType.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ReducerType.SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case ReducerType.CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    case ReducerType.GET_USER: {
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    }
    case ReducerType.GET_REPOS: {
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default GithubReducer;
