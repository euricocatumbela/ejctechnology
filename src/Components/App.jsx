import React from "react";
import Home from "./Home";
import Team from "./Team";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/team" component={Team} />
    </div>
  );
}

export default App;
