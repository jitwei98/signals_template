import React, { Component } from 'react';
import 'katex/dist/katex.min.css';
import { Switch, Route } from "react-router-dom";
import EulerFormula from './chapter1/EulerFormula';
import IntegrationFormula from './IntegrationFormula';
import TrigoFormula from './TrigoFormula';
import FourierSeries from './chapter2/FourierSeries'
import FourierTransform from './chapter3/FourierTransform';
class Formula extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route path='/TH/Formula/Euler' component={EulerFormula} />
                    <Route path='/TH/Formula/Integration' component={IntegrationFormula} />
                    <Route path='/TH/Formula/Trigo' component={TrigoFormula} />
                    <Route path='/TH/Formula/FourierSeries' component={FourierSeries}/>
                    <Route path='/TH/Formula/FourierTransform' component={FourierTransform}/>
                </Switch>

            </div>
        )
    }
}
export default Formula;
