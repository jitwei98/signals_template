import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Addition from "./geogebra/Addition"
import TimeShift from './geogebra/TimeShift'
import FrequencyShift from './geogebra/FrequencyShift'
import TimeScaling from './geogebra/TimeScaling';
import Differentiation from './geogebra/Differentiation';
import Integration from './geogebra/Integration'
import Lecture from './lecture/content/lecture';
import Convolution1 from './geogebra/Convolution1';
import Convolution2 from './geogebra/Convolution2';
class Chapter3 extends Component{

    render() {
        return (
            <div>
                <switch>
                    <Route path='/TH/Chapter3/Geogebra/lecture' component={Lecture} />
                    <Route path='/TH/Chapter3/Geogebra/addition' component={Addition} />
                    <Route path='/TH/Chapter3/Geogebra/timeShift' component={TimeShift} />
                    <Route path='/TH/Chapter3/Geogebra/FrequencyShift' component={FrequencyShift} />
                    <Route path='/TH/Chapter3/Geogebra/TimeScaling' component={TimeScaling} />
                    <Route path='/TH/Chapter3/Geogebra/Differentiation' component={Differentiation} />
                    <Route path='/TH/Chapter3/Geogebra/Integration' component={Integration} />
                    <Route path='/TH/Chapter3/Geogebra/Convolution1' component={Convolution1} />
                    <Route path='/TH/Chapter3/Geogebra/Convolution2' component={Convolution2} />
                </switch>
            </div>
        );
    }
}

export default Chapter3;