import React, { Component } from 'react';
import { Route } from "react-router-dom";
import EulerFormula from './chapter1/EulerFormula';
import IntegrationFormula from './IntegrationFormula';
import TrigoFormula from './TrigoFormula';
class Formula extends Component {
    render() {
        return(
            <div>
                <switch>
                    <Route path='/TH/Formula/Euler' component={EulerFormula} />
                    <Route path='/TH/Formula/Integration' component={IntegrationFormula} />
                    <Route path='/TH/Formula/Trigo' component={TrigoFormula} />
                </switch>
            </div>
        )
    }
}
export default Formula;
