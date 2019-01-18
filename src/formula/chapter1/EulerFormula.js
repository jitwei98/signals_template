import React, {Component} from 'react';
import { Route } from "react-router-dom";
import MainFormulaPage from "./MainFormulaPage";
import ProveCos from './ProveCos';

class EulerFormula  extends Component{
    render() {
        return(
            <div>
                <switch>
                    <Route exact path='/TH/Formula/Euler' component={MainFormulaPage} />
                    <Route path='/TH/Formula/Euler/ProveCos' component={ProveCos} />
                </switch>
            </div>
        );
    }
};

export default EulerFormula;