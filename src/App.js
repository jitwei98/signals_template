import React, { Component } from 'react';
import './App.css';
import BootstrapNavbar from './Navbar.js';
// import BootstrapPagination from './Pagination.js';
import Example from './Pagination';
// import Equations from './Equations';
import KatexEquation from './KatexEquation';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Chapter1 from "./chapter1/Chapter1";
import Jit from "./Jit"
import Th from './Th';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <BootstrapNavbar />
            <div className="container">
              <Switch>
                <Route path='/jit' component={Jit}/>
                <Route path='/TH' component={Th}/>
              </Switch>
              {/*<Route path='/chapter1' component={Chapter1} />*/}
            </div>
        

           </div>
      </BrowserRouter>
    );
  }
}

export default App;
