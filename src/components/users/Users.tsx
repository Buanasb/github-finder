import React from "react";
import { GithubItem } from "../../types";
import Spinner from "../layout/Spinner";
import UserItems from "./UserItems";

interface UsersProps {
  loading: boolean | undefined;
  users?: GithubItem[];
}

const Users: React.FC<UsersProps> = ({ users, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "1rem",
      }}
    >
      {users?.map((user: GithubItem) => (
        <UserItems key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
