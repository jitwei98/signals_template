import React, { Component } from 'react';
import './App.css';
import BootstrapNavbar from './Navbar.js';
import SideNav from './SideNav.js';
// import BootstrapPagination from './Pagination.js';
import Example from './Pagination';
// import Equations from './Equations';
import KatexEquation from './KatexEquation';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { render } from "react-dom";

import Chapter1 from "./chapter1/Chapter1";
import Jit from "./Jit"
import Th from './Th';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <BootstrapNavbar />
            <div className="container-fluid">
              <SideNav />
              <Switch>
                <Route path='/jit' component={Jit}/>
                <Route path='/TH' component={Th}/>
              </Switch>
            </div>
        

           </div>
      </BrowserRouter>
    );
  }
}

export default App;
