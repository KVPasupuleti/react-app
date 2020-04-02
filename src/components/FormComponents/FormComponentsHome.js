import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function FormComponentsHome() {
  return (
    <div className="container">
            <NavBar title="Form Components"/>
        <nav>
          <ul>
            <li>
              <Link to="/greetings">Greetings</Link>
            </li>
            <li>
              <Link to="/favouriteDessert">Favourite Dessert</Link>
            </li>
            <li>
              <Link to="/visitedCities">Visited Cities</Link>
            </li>
            <li>
              <Link to="/yourState">Your State</Link>
            </li>
            <li>
              <Link to="/disableButton">Disable Button</Link>
            </li>
          </ul>
        </nav>
        </div>
  );
}

export default FormComponentsHome;
