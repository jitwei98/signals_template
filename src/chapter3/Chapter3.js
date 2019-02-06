import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Addition from "./geogebra/Addition"
import TimeShift from './geogebra/TimeShift'
import FrequencyShift from './geogebra/FrequencyShift'
import TimeScaling from './geogebra/TimeScaling';
import Differentiation from './geogebra/Differentiation';
import Integration from './geogebra/Integration'
class Chapter3 extends Component{

    render() {
        return (
            <div>
                <switch>
                    <Route path='/TH/Chapter3/Geogebra/addition' component={Addition} />
                    <Route path='/TH/Chapter3/Geogebra/timeShift' component={TimeShift} />
                    <Route path='/TH/Chapter3/Geogebra/FrequencyShift' component={FrequencyShift} />
                    <Route path='/TH/Chapter3/Geogebra/TimeScaling' component={TimeScaling} />
                    <Route path='/TH/Chapter3/Geogebra/Differentiation' component={Differentiation} />
                    <Route path='/TH/Chapter3/Geogebra/Integration' component={Integration} />
                </switch>
            </div>
        );
    }
}

export default Chapter3;