import { useContext } from "react";
import { UserContext } from "src/context/UserContext";
import { GithubUsers } from "src/types";
import axiosInstance from "src/utils/axiosInstance";

export const useGetUsers = () => {
  const { users, setUsers, isFetching, setFetching, alert, setAlert } =
    useContext(UserContext)!;
  const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

  const searchUser = async (text: string) => {
    if (!text.trim()) {
      return;
    }

    setFetching(true);
    try {
      const response = await axiosInstance.get<GithubUsers>(
        `/search/users?q=${text}&client_id=${client_id}&client_secret=${client_secret}`
      );
      setUsers(response.data.items);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setTimeout(() => {
        setFetching(false);
      }, 500);
    }
  };

  const clearUsers = () => {
    setUsers([]);
    setFetching(false);
  };

  const showAlert = (msg: string, type: string) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };
  return {
    users,
    alert,
    isFetching,
    searchUser,
    clearUsers,
    showAlert,
  };
};
