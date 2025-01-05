import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GithubContext } from "src/context/github/GithubContext";
import Spinner from "../layout/Spinner";
import Repository from "../repos/Repository";

const User: React.FC = () => {
  const { getUser, getRepos, user, repos, loading } =
    useContext(GithubContext)!;
  const { login } = useParams();

  useEffect(() => {
    if (login) {
      getUser(login);
      getRepos(login);
    }
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{" "}
      {user?.hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={user?.avatar_url}
            alt=""
            className="round-img"
            style={{ width: "150px" }}
          />
          <h1>{user?.name}</h1>
          <p>Location: {user?.location}</p>
        </div>
        <div>
          {user?.bio && (
            <>
              <h3>Bio</h3>
              <p>{user.bio}</p>
            </>
          )}
          <a href={user?.html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {user?.login && (
                <>
                  <strong>Username:</strong> {user.login}
                </>
              )}
            </li>
            <li>
              {user?.company && (
                <>
                  <strong>Company:</strong> {user?.company}
                </>
              )}
            </li>
            <li>
              {user?.blog && (
                <>
                  <strong>Website:</strong> {user?.blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {user?.followers}</div>
        <div className="badge badge-success">Following: {user?.following}</div>
        <div className="badge badge-light">
          Public Repos: {user?.public_repos}
        </div>
        <div className="badge badge-dark">
          Public Gists: {user?.public_gists}
        </div>
      </div>
      <Repository repos={repos} />
    </>
  );
};

export default User;
