import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { observer } from 'mobx-react';
import { configure } from 'mobx';


import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import CountriesDashboardApp from "./components/CountriesDashboard/CountriesDashboardApp.js";
import SingleCountryCard from "./components/CountriesDashboard/SingleCountryCard.js";
import EmojiGame from "./components/EmojiGameDashboard/EmojiGameFolder/EmojiGame.js";
<<<<<<< HEAD
import A from "./components/react-practice/reactPractice.js";

=======
import MobxToDoList from "./components/MobxToDoList/MobxToDoList.js";
import ReactPractice from "./components/react-practice/reactPractice.js";
>>>>>>> ee748dee827784eff634dde62cf0069c9937cd00
import Counter from './components/CounterDashboard/Counter';
import EventsApp from './components/EventsPage/EventsApp';

import themeStore from './stores/themeStore';

import "./App.css";
//import { configure } from "mobx";



<<<<<<< HEAD
//configure({ enforceActions: true });
=======
//configure({enforceActions: true}) 
>>>>>>> ee748dee827784eff634dde62cf0069c9937cd00


@observer
class App extends React.Component {

  getCurrentTheme = () => {
    return themeStore.selectedTheme;
  }

  onChangeTheme = (theme) => {
    const { setCurrentTheme } = themeStore;
    setCurrentTheme(theme);
  }

  themeOptions = {
    light: {
      id: "0",
      name: "light",
      color: "black",
      backgroundColor: "#fff",
      displayText: "Light Mode"
    },

    dark: {
      id: "1",
      name: "dark",
      color: "white",
      backgroundColor: "#2b3945",
      displayText: "Dark Mode"
    },

    emojiGameLight: {
      id: "2",
      name: "emojiGameLight",
      textColor: "black",
      cardColor: "white",
      emojiBackgroundColor: "#ebf8ff",
      displayText: "LIGHT THEME"
    },

    emojiGameDark: {
      id: "3",
      name: "emojiGameDark",
      textColor: "#fff",
      cardColor: "#2b6cb0",
      emojiBackgroundColor: "black",
      displayText: "DARK THEME"
    }

  }



  render() {
    return (

      <Router basename={process.env.PUBLIC_URL}>
      
      <Switch>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        
        <Route path="/countriesDashboard">
          <CountriesDashboardApp onChangeTheme={this.onChangeTheme} 
          selectedTheme={this.themeOptions[this.getCurrentTheme()]} />
        </Route>
                  
        <Route path = "/emojiGame">
          <EmojiGame selectedTheme={this.getCurrentTheme()} onChangeTheme={this.onChangeTheme}/>
        </Route>
        
        <Route path = "/mobx-todolist">
          <MobxToDoList />
        </Route>

        <Route path = "/events-app">
          <EventsApp />
        </Route>

        <Route path = "/react-practice">
          <A />
        </Route>
        
        <Route path = "/counter-dashboard">
          <Counter />
        </Route>
        
        <Route path = "/:id"
          children = { <SingleCountryCard onChangeTheme={this.onChangeTheme} 
          selectedTheme={this.themeOptions[this.getCurrentTheme()]} />}/>
        
        <Route path="/">
          <HomePage />
        </Route>

        
        
      </Switch>
    </Router>
    );
  }
}

export default App;
