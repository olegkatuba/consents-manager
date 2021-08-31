import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Consents from "./Consents";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/consents/:provider/:userId">
          <Consents />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
