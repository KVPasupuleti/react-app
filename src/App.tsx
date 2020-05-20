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
import ReactPractice from "./components/react-practice/index";
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
import { themeObject, IndexThemeContext, IndexUserContext } from "./Contexts/ReactPracticeContext";
import NewPractice from "./components/react-practice-new";
import Index from './components/ExamPractice'
import PracticeAdvancedConceptsRoute from "./common/routes/PracticeAdvancedConceptsRoute/PracticeAdvancedConceptsRoute";
import EnhancedCountriesDashboard from "./common/components/CountriesDashboard";
import SingleCountry from "./common/components/SingleCountry";
import EnhancedSingleCountry from "./common/components/SingleCountry";

@observer
class App extends React.Component{

  changeContextValue = () => {
    this.setState({
      theme: this.state.theme===themeObject.light?themeObject.dark:themeObject.light
    })
  }

  state = {
    theme: themeObject.light,
    changeContextValue: this.changeContextValue
  }

  signedInUser = {
    name: "Vamsi"
  }

  render() {

  return (
    // <Provider {...stores}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      {/* <Route exact path="/e-commerce-app" component={ProductsPage}></Route>

      <Route exact path="/size-filter-module" component={SizeFilter}></Route>

      <Route exact path="/signin-page" component={SignInPage}></Route> */}

      {/* <Route exact path="/exam-problems">
        <IndexThemeContext.Provider value={this.state}>
          <IndexUserContext.Provider value={this.signedInUser}>
            <Index />
          </IndexUserContext.Provider>
        </IndexThemeContext.Provider>
      </Route> */}

      {/* <Route exact path="/exam-practice">
        <Index/>
      </Route> */}

      <Route exact path="/practice-advanced-concepts">
        <PracticeAdvancedConceptsRoute/>
      </Route>

      <Route exact path="/with-countries">
        <EnhancedCountriesDashboard/>
      </Route>

      <Route exact path="/single-country/:id">
        <EnhancedSingleCountry/>
      </Route>

      {/* <Route exact path="/emojiGame">
        <EmojiGame/>
      </Route> */}

      {/* <Route exact path="/new-practice">
        <NewPractice/>
      </Route> */}

      <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
    // </Provider>
  );
};
}

export { App as default }