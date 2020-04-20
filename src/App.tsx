import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ToDoList from './components/to-do-list/ToDoList';
import GridMemoryGame from './components/GridMemoryGame';
import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";

import "./App.css";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route exact path="/to-do-list">
          <ToDoList />
        </Route>
        <Route exact path="/grid-memory-game">
          <GridMemoryGame />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
