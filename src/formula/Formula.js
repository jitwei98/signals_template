import React, { Component } from 'react';
import { Route } from "react-router-dom";
import 'katex/dist/katex.min.css';
import { Switch, Route } from "react-router-dom";
import EulerFormula from './chapter1/EulerFormula';
import IntegrationFormula from './IntegrationFormula';
import TrigoFormula from './TrigoFormula';
import FourierSeries from './chapter2/FourierSeries'
class Formula extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route path='/TH/Formula/Euler' component={EulerFormula} />
                    <Route path='/TH/Formula/Integration' component={IntegrationFormula} />
                    <Route path='/TH/Formula/Trigo' component={TrigoFormula} />
                    <Route path='/TH/Formula/FourierSeries' component={FourierSeries}/>
                </Switch>

            </div>
        )
    }
}
export default Formula;
