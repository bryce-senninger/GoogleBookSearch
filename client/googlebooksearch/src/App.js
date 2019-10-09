import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Search from "./pages/search";
import Bookshelf from "./pages/saved";
import NoMatch from "./pages/noMatch";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Bookshelf} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
