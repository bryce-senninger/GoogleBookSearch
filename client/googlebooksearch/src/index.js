import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

class Root extends Component {
  render() {
    return <App />;
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
