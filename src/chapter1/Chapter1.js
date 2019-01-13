import React, { Component } from 'react';
import TimeScalingContent from './lecture/content/Time_Scaling_Content';
import TimeScalingGraph from './geogebra/TimeScalingGraph';
import {BrowserRouter, Route, Redirect} from "react-router-dom";
class Chapter1 extends Component{

    render() {
        return (
            <div>
                <div>hello from</div>
                <switch>
                    <Route path='/chapter1/lecture' component={TimeScalingContent} />
                    <Route path='/chapter1/geogebra' component={TimeScalingGraph} />
                </switch>
            </div>
        );
    }
}

export default Chapter1;