import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider, observer } from "mobx-react";

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
// import stores from './stores';
import stores from './common/stores';
import Home from "./components/Home/Home";
import LoginPage from "./components/LoginPage";
import loginStore from './stores/LoginStore';
import { ProductsPage } from "./EcommerceProductsDashboard/components/ProductsPage";
import { ProductsPageRoute } from "./EcommerceProductsDashboard/routes/ProductsPageRoute";
import { SizeFilter } from "./SizeFilterModule/components/SizeFilter";
import { SignInPage } from "./Authentication/components/SignInPage";

@observer
class App extends React.Component{

  render() {
  return (
    <Provider {...stores}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      <Route exact path="/e-commerce-app" component={ProductsPage}></Route>
      
      <Route exact path="/size-filter-module" component={SizeFilter}></Route>

      <Route exact path="/signin-page" component={SignInPage}></Route>

      <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </Provider>
  );
};
}

export default App;