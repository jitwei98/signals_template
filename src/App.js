import React, { Component } from 'react';
import './App.css';
import BootstrapNavbar from './Navbar.js';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
// import { render } from "react-dom";

import LandingPage from './LandingPage';
import Home from './Home';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <BootstrapNavbar />
              <div className="container-fluid">
                <Switch>
                  <Route exact path='/' component={LandingPage} />
                  <Route path='/' component={Home} />
                </Switch>
              </div>
           </div>
      </BrowserRouter>
    );
  }
}

export default App;
