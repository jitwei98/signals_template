import React, { Component } from 'react';
import TimeScalingContent from './lecture/content/EvenOddPeriodFunctionContent';
import EvenPeriodicFunction from './geogebra/EvenPeriodicFunction';
import OverallPlayground from './geogebra/OverallPlayground';
import OddPeriodicFunction from './geogebra/OddPeriodicFunction'
import { Route } from "react-router-dom";

class Chapter2 extends Component{

    render() {
        return (
            <div>
                <switch>
                    <Route path='/TH/Chapter2/lecture' component={TimeScalingContent} />
                    <Route path='/TH/Chapter2/Geogebra/OverallPlayground' component={OverallPlayground} />
                    <Route path='/TH/Chapter2/Geogebra/EvenPeriodicFunction' component={EvenPeriodicFunction} />
                    <Route path='/TH/Chapter2/Geogebra/OddPeriodicFunction' component={OddPeriodicFunction} />
                </switch>
            </div>
        );
    }
}

export default Chapter2;