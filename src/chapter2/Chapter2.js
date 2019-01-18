import React, { Component } from 'react';
import TimeScalingContent from './lecture/content/Time_Scaling_Content';
import EvenPeriodicFunction from './geogebra/EvenPeriodicFunction';
import EulerFormulaGraph from './geogebra/EulerFormulaGraph'
import { Route } from "react-router-dom";

class Chapter2 extends Component{

    render() {
        return (
            <div>
                <switch>
                    <Route path='/TH/Chapter2/lecture' component={TimeScalingContent} />
                    <Route path='/TH/Chapter2/Geogebra/EvenPeriodicFunction' component={EvenPeriodicFunction} />
                    <Route path='/TH/chapter2/Geogebra/EulerFormulaGraph' component={EulerFormulaGraph} />
                </switch>
            </div>
        );
    }
}

export default Chapter2;