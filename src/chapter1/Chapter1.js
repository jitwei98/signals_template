import React, { Component } from 'react';
import TimeScalingContent from './lecture/content/Time_Scaling_Content';
import TimeScalingGraph from './geogebra/TimeScalingGraph';
import { Route } from "react-router-dom";

class Chapter1 extends Component{

    render() {
        return (
            <div>
                <switch>
                    <Route path='/TH/Chapter1/lecture' component={TimeScalingContent} />
                    <Route path='/TH/Chapter1/geogebra' component={TimeScalingGraph} />
                </switch>
            </div>
        );
    }
}

export default Chapter1;