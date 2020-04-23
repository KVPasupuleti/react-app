import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "mobx-react";

import ToDoList from './components/to-do-list/ToDoList';
import GridMemoryGame from './components/GridMemoryGame';
import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";

import "./App.css";
import MobxToDoList from "./components/MobxToDoList/MobxToDoList";
import ApiTodoApp from "./components/ApiTodoList"
import EventsApp from "./components/EventsPage/EventsApp";
import ReactPractice from "./components/react-practice/reactPractice";
import EmojiGame from "./components/EmojiGameDashboard/EmojiGameFolder/EmojiGame";
import UsersPage from "./components/UsersPage";
import stores from './stores';

class App extends React.Component{

  render() {
  return (
    <Provider {...stores}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route exact path="/grid-memory-game">
          <GridMemoryGame />
        </Route>
        
        
        <Route exact path="/mobx-todolist" component={MobxToDoList}></Route>
        <Route exact path="/users-page" component={UsersPage}></Route>
        <Route exact path="/api-todo-app" component={ApiTodoApp}></Route>
        
        
        <Route exact path="/events-app">
          <EventsApp />
        </Route>
        {/* <Route exact path="/react-practice">
          <ReactPractice />
        </Route> */}
        <Route exact path="/emojiGame">
          <EmojiGame />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
    </Provider>
  );
};
}

export default App;
