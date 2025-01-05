import React from "react";
import { GithubRepository } from "src/types";

interface RepoItemProps {
  repo: GithubRepository;
}

const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

export default RepoItem;
