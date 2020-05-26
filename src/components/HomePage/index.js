import React from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../../logo.svg";

class App extends React.Component {

  render() {
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

        {/* <Link to="/practice-advanced-concepts">Practice Advanced Concepts</Link>

        <Link to="/countriesDashboard">CountriesDashboardApp</Link>

        <Link to="/with-countries">With Countries</Link>   

        <Link to="/custom-button">Custom Button</Link>   */}

        {/* <Link to="/exam-problems">React Practice</Link> */}

        <Link to="/new-practice">New Practice</Link>


        {/* <Link to="/emojiGame">EmojiGame</Link>    */}

        {/* <Link to="/exam-practice">Exam Practice</Link>

        <Link to="/exam-problems">React Practice</Link>
        
        <Link to="/new-practice">New Practice</Link>

        <Link to="/page-1">Page 1</Link>
        
        <Link to="/mobx-todolist">Mobx ToDoList</Link>

        <Link to="/api-todo-app">Api Todo App</Link>


        <Link to="/grid-memory-game">Grid Memory Game</Link>

        <Link to="/users-page">Users Page</Link>

        <Link to="/counter-dashboard">Counter</Link>

        <Link to="/events-app">Events App</Link> */}
        
      
      </header>
    </div>
    );
  }
}

export default App;
