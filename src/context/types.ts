import { ReducerType } from "src/constants";
import { alertUser, GithubItem, GithubRepository, GithubUser } from "src/types";

export interface ActionType {
  type: ReducerType;
  payload?: any;
}

export interface GithubStateType {
  users: GithubItem[];
  user: GithubUser | undefined;
  repos: GithubRepository[];
  loading: boolean;
}

export interface GithubContextType extends GithubStateType {
  searchUser: (text: string) => Promise<void>;
  clearUsers: () => void;
  getUser: (userName: string) => Promise<void>;
  getRepos: (userName: string) => Promise<void>;
}

export interface AlertStateType {
  alert: alertUser | null;
}

export interface AlertContextType extends AlertStateType {
  showAlert: (msg: string, type: string) => void;
}
