import React from "react";
import "./App.css";
import Nav from "./components/navBar";
import Jumbo from "./components/jumbo";
import SearchBar from "./components/searchBar";
import BookCards from "./components/bookCards";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SavedJumbo from "./components/savedJumbo";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/saved">
          <SavedJumbo />
        </Route>
        <Route path="/">
          <Jumbo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

{
  /* <div className="App">
  <Jumbo />
  <BookCards />
</div>; */
}
