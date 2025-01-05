import React, { useContext } from "react";
import { AlertContext } from "src/context/alert/AlertContext";
import { GithubContext } from "src/context/github/GithubContext";
import Alert from "../layout/Alert";
import Search from "../users/Search";
import Users from "../users/Users";

const Home: React.FC = () => {
  const { users, clearUsers, loading, searchUser } = useContext(GithubContext)!;
  const { alert, showAlert } = useContext(AlertContext)!;

  return (
    <>
      <Alert alert={alert} />
      <Search
        searchUser={searchUser}
        clearUsers={clearUsers}
        showClear={users?.length || 0 > 1}
        showAlert={showAlert}
      />
      <Users loading={loading} users={users} />
    </>
  );
};

export default Home;
