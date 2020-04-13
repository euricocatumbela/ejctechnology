import React from "react";
import Home from "./Home";
import Team from "./Team";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Signin from "./Signin";
import Signnup from "./Signnup";
// import "bootstrap/dist/css/bootstrap.min.css";
import Quote from "./Quote";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signnup" component={Signnup} />
        <Route exact path="/quote" component={Quote} />
      </Switch>
    </Router>
  );
}

export default App;
