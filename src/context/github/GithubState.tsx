import React, { useReducer } from "react";
import { ReducerType } from "src/constants";
import { GithubRepository, GithubUser, GithubUsers } from "src/types";
import axiosInstance from "src/utils/axiosInstance";
import { GithubStateType } from "../types";
import { GithubContext } from "./GithubContext";
import GithubReducer from "./GithubReducer";

const GithubState = (props: any) => {
  const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  const initialState: GithubStateType = {
    users: [],
    user: undefined,
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  let githubClientId: string | undefined;
  let githubClientSecret: string | undefined;

  if (process.env.NODE_ENV !== "production") {
    githubClientId = client_id;
    githubClientSecret = client_secret;
  } else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
  }

  //Get Users
  const searchUser = async (text: string) => {
    if (!text.trim()) return;

    setLoading();
    try {
      const response = await axiosInstance.get<GithubUsers>(
        `/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      dispatch({
        type: ReducerType.SEARCH_USERS,
        payload: response.data.items,
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  //Clear Users
  const clearUsers = () => dispatch({ type: ReducerType.CLEAR_USERS });

  //Get Loading
  const setLoading = () => dispatch({ type: ReducerType.SET_LOADING });

  //Get User
  const getUser = async (userName: string) => {
    setLoading();
    try {
      const response = await axiosInstance.get<GithubUser>(
        `/users/${userName}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      dispatch({ type: ReducerType.GET_USER, payload: response.data });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  //Get Repos
  const getRepos = async (userName: string) => {
    setLoading();
    try {
      const response = await axiosInstance.get<GithubRepository[]>(
        `/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      dispatch({ type: ReducerType.GET_REPOS, payload: response.data });
    } catch (error) {
      console.error("Error fetching repos:", error);
    }
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUser,
        clearUsers,
        getUser,
        getRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
