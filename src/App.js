import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import CountriesDashboardApp from "./components/CountriesDashboard/CountriesDashboardApp.js";
import SingleCountryCard from "./components/CountriesDashboard/SingleCountryCard.js";
import EmojiGame from "./components/EmojiGameDashboard/EmojiGameFolder/EmojiGame.js";
import ReactPractice from "./components/react-practice/reactPractice.js";

import "./App.css";

class App extends React.Component {

  state = {
    selectedTheme: "emojiGameLight"
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

  onChangeTheme = (themeOption) => {
    this.setState({ selectedTheme: this.themeOptions[themeOption] });
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
           selectedTheme={this.themeOptions[this.state.selectedTheme]} />
        </Route>
                  
        <Route path = "/emojiGame">
          <EmojiGame selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme}/>
        </Route>
        
        <Route path = "/react-practice">
          <ReactPractice />
        </Route>
        
        <Route path = "/:id"
          children = { <SingleCountryCard onChangeTheme={this.onChangeTheme} 
          selectedTheme={this.themeOptions[this.state.selectedTheme]} />}/>
        
        
        <Route path="/">
          <HomePage />
        </Route>
        
      </Switch>
    </Router>
    );
  }
}

export default App;
