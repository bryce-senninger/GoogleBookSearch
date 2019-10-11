import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import image from "./icons8-book-shelf-64.png";
import image2 from "./glass.png";

function Index() {
  return (
    <nav className="navbar navbar-expand-lg">
      <ul className="navbar-nav mr-auto">
        <li>
          <img className="icon" src={image2}></img>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Search
          </Link>
        </li>
        <li>
          <img className="icon" src={image}></img>
        </li>
        <li className="nav-item">
          <Link
            to="/bookshelf"
            className={
              window.location.pathname === "/bookshelf"
                ? "nav-link active"
                : "nav-link"
            }
          >
            My Bookshelf
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Index;
