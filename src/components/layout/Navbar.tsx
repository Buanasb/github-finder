import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  title?: string;
}

const Navbar: React.FC<NavbarProps> = ({ title = "Github Finder" }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <FontAwesomeIcon icon={faGithub} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
