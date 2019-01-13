import React, { Component } from 'react';
import './App.css';
import BootstrapNavbar from './Navbar.js';
import { Route, BrowserRouter } from 'react-router-dom';
import Chapter1 from "./chapter1/Chapter1";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <BootstrapNavbar />
            <div className="container">
              <Route path='/chapter1' component={Chapter1} />
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
