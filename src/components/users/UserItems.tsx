import React from "react";
import { Link } from "react-router-dom";
import { GithubItem } from "../../types";

interface UserItemsProps {
  user: GithubItem;
}

const UserItems: React.FC<UserItemsProps> = ({
  user: { avatar_url, login },
}) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
        More
      </Link>
    </div>
  );
};

export default UserItems;
