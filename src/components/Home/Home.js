import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import authStore from '../../common/stores'
import Cookies from 'js-cookie'

class Home extends React.Component {

  goToSigninPage() {
    return(
      <Redirect
      to={{
        pathname: "/signin-page",
      }}/>
    );  
  }

  render() {
    console.log("username", Cookies.get("username"))
    // let isLoggedIn = JSON.parse(window.localStorage.getItem("isLoggedIn"))
    if(authStore.authStore.access_token !== '') {
      return (
        <nav>
              <ul>
              <Redirect
      to={{
        pathname: "/e-commerce-app",
      }}/>
                  
                {/* <li>
                  <Link to="/e-commerce-app">E-Commerce App</Link>
                </li> 

                <li>
                  <Link to="/size-filter-module">Size Filter</Link>
                </li>
                 */}
                {/*
                <li>
                  <Link to="/to-do-list">ToDoList</Link>
                </li>
                <li>
                  <Link to="/form">Form Components</Link>
                </li>
                <li>
                  <Link to="/countriesDashboard">Countries Dashboard</Link>
                </li> */}
              </ul>
        </nav>
  );
}
    else {
      return this.goToSigninPage()
}
  }
}

export default Home;
