import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import CountriesDashboardApp from "./components/CountriesDashboard/CountriesDashboardApp";

import "./App.css";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/CountriesDashboardApp">
          <CountriesDashboardApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
