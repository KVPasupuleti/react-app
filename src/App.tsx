import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import GridMemoryGame from './components/GridMemoryGame';

import "./App.css";
import MobxToDoList from "./components/MobxToDoList/MobxToDoList";
import EventsApp from "./components/EventsPage/EventsApp";
import ReactPractice from "./components/react-practice/reactPractice";
import EmojiGame from "./components/EmojiGameDashboard/EmojiGameFolder/EmojiGame";

class App extends React.Component{

  Person = {
    firstName: "Vamsi",
    lastName: "P",
    age: 22,
    hobbies: "Eating"
  }

  render() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route exact path="/grid-memory-game">
          <GridMemoryGame />
        </Route>
        <Route exact path="/mobx-todolist">
          <MobxToDoList />
        </Route>
        <Route exact path="/events-app">
          <EventsApp />
        </Route>
        <Route exact path="/react-practice">
          <ReactPractice Person={this.Person}/>
        </Route>
        <Route exact path="/emojiGame">
          <EmojiGame />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};
}

export default App;
