import React from "react";

function Nav() {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Search Books
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Saved Books
        </a>
      </li>
    </ul>
  );
}

export default Nav;
