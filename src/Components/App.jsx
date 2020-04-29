import React from "react";
import Home from "./Home";
import Team from "./Team";
import Pricing from "./Pricing";
import Careers from "./Careers";
import PromoCard from "./PromoCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./Signin";
import Signnup from "./Signnup";

import Quote from "./Quote";
import Article from "./Article";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signnup" component={Signnup} />
        <Route exact path="/quote" component={Quote} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/promocard" component={PromoCard} />
      </Switch>
    </Router>
  );
}

export default App;
