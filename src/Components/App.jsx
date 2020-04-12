import React from "react";
import Home from "./Home";
import Team from "./Team";
import { Route } from "react-router-dom";
import Signin from "./Signin";
import Signnup from "./Signnup";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signnup" component={Signnup} />
    </div>
  );
}

export default App;
