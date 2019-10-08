import React from "react";
import "./style.css";

function Nav() {
  return (
    <div className="navWrap">
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
    </div>
  );
}

export default Nav;
