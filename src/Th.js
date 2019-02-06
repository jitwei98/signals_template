import React, { Component } from 'react';
import './App.css';
import Chapter1 from "./chapter1/Chapter1";
import Chapter2 from './chapter2/Chapter2';
import Chapter3 from './chapter3/Chapter3';
import Formula from "./formula/Formula"
import { Route } from 'react-router-dom';
class Th extends Component {


    render() {
        return (
            <div>
                <Route path='/TH/chapter1' component={Chapter1} />
                <Route path='/TH/chapter2' component={Chapter2} />
                <Route path='/TH/chapter3' component={Chapter3} />
                <Route path='/TH/Formula' component={Formula} />
            </div>
        );
    }

}

export default Th;
