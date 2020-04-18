import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <Link to="/page-1">Page 1</Link>
        
        <Link to="/countriesDashboard">CountriesDashboardApp</Link>
        
        <Link to="/emojiGame">EmojiGame</Link>
        
        <Link to="/mobx-todolist">Mobx ToDoList</Link>

        <Link to="/grid-memory-game">Grid Memory Game</Link>

        <Link to="/counter-dashboard">Counter</Link>

        <Link to="/events-app">Events App</Link>
        
        <Link to="/react-practice">React Practice</Link>
      
      </header>
    </div>
  );
}

export default App;
