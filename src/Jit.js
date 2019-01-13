import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';

class Jit extends Component {
    // constructor(props) {
    //     super(props);

    //     // an example array of 150 items to be paged
    //     var exampleItems = [...Array(150).keys()].map(i => ({id: (i + 1), name: 'Item ' + (i + 1)}));

    //     this.state = {
    //         exampleItems: exampleItems,
    //         pageOfItems: []
    //     };

    //     this.onChangePage = this.onChangePage.bind(this);
    // }

    // onChangePage(pageOfItems) {
    //     this.setState({
    //         pageOfItems: pageOfItems
    //     });
    // }

    // handlePageChange(e) {
    //   e.preventDefault();
    //   this.setState({
    //     currPage: e.value
    //   });
    // }

    // handleNext() {

    // }

    /*<div className="container">
                    <div className="text-center">
                      <h1>Pagination Example</h1>
                      {
                        this.state.pageOfItems.map(item =>
                          <div key={item.id}>{item.name}</div>
                        )
                      }
                      <Example items={this.state.exampleItems} onChangePage={this.onChangePage} />
                    </div>
                  </div>*/

    render() {
        return (
            <div>
{/*                <switch>
                    <Route exact path="/" component={Home}/>
                </switch>*/}
                <Home />
            </div>
        );
    }

}

export default Jit;
