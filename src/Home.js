import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { render } from "react-dom";
import SideNav from './SideNav';

import Jit from "./Jit"
import Th from './Th';

class Home extends Component {

  render() {
    return (
      <div className="row">
        <SideNav />
        <div className="col-lg-10">
            <Switch>
              <Route path='/jit' component={Jit} />
              <Route path='/th' component={Th} />
            </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
