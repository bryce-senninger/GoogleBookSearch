import React from "react";
import NavBar from "../navBar";

function SavedJumbo() {
  return (
    <div className="jumbotron">
      <NavBar />
      <h1 className="display-4">Saved Books</h1>
      <p className="lead">“So many books, so little time.” ― Frank Zappa</p>
      <hr className="my-4" />
      <p>Here's a List of Your Saved Titles</p>
    </div>
  );
}

export default SavedJumbo;
