import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <nav>
              <ul>
                <li>
                  <Link to="/carsList">CarsList</Link>
                </li>
                <li>
                  <Link to="/to-do-list">ToDoList</Link>
                </li>
                <li>
                  <Link to="/form">Form Components</Link>
                </li>
                <li>
                  <Link to="/countriesDashboard">Countries Dashboard</Link>
                </li>
              </ul>
            </nav>
  );
}

export default Home;
