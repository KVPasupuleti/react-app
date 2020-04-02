import React from 'react';
import Greetings from './Greetings';
import FavouriteDessert from './FavouriteDessert';
import VisitedCities from './VisitedCities';
import YourState from './YourState';
import DisableButton from './DisableButton';
import FormComponentsHome from './FormComponentsHome';

import {
  BrowserRouter as Router,
  Switch,
  Route,
}
from "react-router-dom";

const dessertList = ["Vanilla", "Butterscotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"];
const cityList = ["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"];
const stateList = ["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"];

function FormComponents() {

  return (
    <Router>
      <div>
     
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/greetings">
            <Greetings />
          </Route>
          <Route path="/favouriteDessert">
            <FavouriteDessert dessertList={dessertList}/>
          </Route>
          <Route path="/visitedCities">
            <VisitedCities cityList={cityList}/>
          </Route>
          <Route path="/yourState">
            <YourState stateList={stateList}/>
          </Route>
          <Route path="/disableButton">
            <DisableButton />
          </Route>
          <Route path="/">
            <FormComponentsHome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default FormComponents;
