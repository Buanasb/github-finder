import { useContext } from "react";
import { UserContext } from "src/context/UserContext";
import { GithubRepository, GithubUser } from "src/types";
import axiosInstance from "src/utils/axiosInstance";

export const useGetUser = () => {
  const { user, setUser, repos, setRepos, isFetching, setFetching } =
    useContext(UserContext)!;
  const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

  const getUser = async (userName: string) => {
    setFetching(true);
    try {
      const response = await axiosInstance.get<GithubUser>(
        `/users/${userName}?client_id=${client_id}&client_secret=${client_secret}`
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setTimeout(() => {
        setFetching(false);
      }, 500);
    }
  };

  const getRepos = async (userName: string) => {
    setFetching(true);
    try {
      const response = await axiosInstance.get<GithubRepository[]>(
        `/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${client_id}&client_secret=${client_secret}`
      );
      setRepos(response.data);
    } catch (error) {
      console.error("Error fetching repos:", error);
    } finally {
      setTimeout(() => {
        setFetching(false);
      }, 500);
    }
  };
  return { user, repos, loading: isFetching, getUser, getRepos };
};
