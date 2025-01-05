import React from "react";
import { GithubRepository } from "src/types";
import RepoItem from "./RepoItem";

interface RepositoryProps {
  repos: GithubRepository[] | undefined;
}

const Repository: React.FC<RepositoryProps> = ({ repos }) => {
  return (
    <>
      {repos?.map((repo: GithubRepository) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </>
  );
};

export default Repository;
