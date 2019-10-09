import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search";
import Bookshelf from "./pages/saved";
import NoMatch from "./pages/noMatch";
import Index from "./components/navBar";

const App = () => (
  <Router>
    <div className="wrapper">
      <Index />
      <div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Bookshelf} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
