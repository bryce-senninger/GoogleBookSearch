import React from "react";
import "./App.css";
import Nav from "./components/navBar";
import Jumbo from "./components/jumbo";
import SearchBar from "./components/searchBar";
import BookCards from "./components/bookCards";

function App() {
  return (
    <div className="App">
      <Jumbo />
      <BookCards />
    </div>
  );
}

export default App;
