import React, { Component } from 'react';
import './App.css';
import Chapter1 from "./chapter1/Chapter1";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
class Th extends Component {


    render() {
        return (
            <div>
                <Route path='/TH/chapter1' component={Chapter1} />
            </div>
        );
    }

}

export default Th;
