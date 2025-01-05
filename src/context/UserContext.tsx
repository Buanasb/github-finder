import React, { createContext, ReactNode, useMemo, useState } from "react";
import { alertUser, GithubItem, GithubRepository, GithubUser } from "../types";

interface UserContextProps {
  users: GithubItem[] | undefined;
  setUsers: React.Dispatch<React.SetStateAction<GithubItem[] | undefined>>;
  user: GithubUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<GithubUser | undefined>>;
  repos: GithubRepository[] | undefined;
  setRepos: React.Dispatch<
    React.SetStateAction<GithubRepository[] | undefined>
  >;
  isFetching: boolean;
  setFetching: React.Dispatch<React.SetStateAction<boolean>>;
  alert: alertUser | null;
  setAlert: React.Dispatch<React.SetStateAction<alertUser | null>>;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<GithubItem[] | undefined>(undefined);
  const [user, setUser] = useState<GithubUser | undefined>(undefined);
  const [repos, setRepos] = useState<GithubRepository[] | undefined>(undefined);
  const [isFetching, setFetching] = useState<boolean>(false);
  const [alert, setAlert] = useState<alertUser | null>(null);

  const value: UserContextProps = useMemo(
    () => ({
      users,
      setUsers,
      user,
      setUser,
      repos,
      setRepos,
      isFetching,
      setFetching,
      alert,
      setAlert,
    }),
    [users, user, repos, isFetching, alert]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
