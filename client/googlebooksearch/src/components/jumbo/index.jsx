import React from "react";
import NavBar from "../navBar";
import SearchBar from "../searchBar";
import "./style.css";

function Jumbo() {
  return (
    <div className="jumbotron">
      <NavBar />
      <h1 className="display-4">Book Search</h1>
      <p className="lead">
        “I have always imagined that Paradise will be a kind of library.” ―
        Jorge Luis Borges
      </p>
      <hr className="my-4" />
      <p>Search for and Save Books of Interest, Find Your Paradise</p>
      <SearchBar />
    </div>
  );
}

export default Jumbo;
