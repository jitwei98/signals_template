import React, { Component } from 'react';
import './App.css';
import BootstrapNavbar from './Navbar.js';
// import BootstrapPagination from './Pagination.js';
import Example from './Pagination';
// import Equations from './Equations';
import KatexEquation from './KatexEquation';

import { Route, BrowserRouter } from 'react-router-dom';
import Chapter1 from "./chapter1/Chapter1";

class App extends Component {
  constructor(props) {
    super(props);

    // an example array of 150 items to be paged
    var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

    this.state = {
      exampleItems: exampleItems,
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    this.setState({
      pageOfItems: pageOfItems
    });
  }

  // handlePageChange(e) {
  //   e.preventDefault();
  //   this.setState({
  //     currPage: e.value
  //   });
  // }

  // handleNext() {

  // }

  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <BootstrapNavbar />
            <div className="container">
              <Route path='/chapter1' component={Chapter1} />
            </div>
        

       { /*<div className="container">
                 <div className="text-center">
                   <h1>Pagination Example</h1>
                   {
                     this.state.pageOfItems.map(item => 
                       <div key={item.id}>{item.name}</div>
                     )
                   }
                   <Example items={this.state.exampleItems} onChangePage={this.onChangePage} />
                 </div>
               </div>*/}
           </div>
      </BrowserRouter>
    );
  }
}

export default App;
