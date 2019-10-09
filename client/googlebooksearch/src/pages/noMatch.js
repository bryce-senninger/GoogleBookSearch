import React from "react";
import Jumbotron from "../components/jumbo";

function NoMatch() {
  return (
    <div className="container">
      <Jumbotron
        image="http://www.justscience.in/wp-content/uploads/2018/01/what-would-happen-if-someone-detonated-a-nuclear-bomb-today.jpg"
        title="404"
        lead="Page Not Found"
        instructions=""
      />
    </div>
  );
}

export default NoMatch;
