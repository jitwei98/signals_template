import React, {Component} from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';


class IntegrationFormula extends Component{
    render() {
        let sin0 = " \\int_{0}^T\n \\sin(n \\space \\omega t) dt = 0"+ " \\space \\space \\space \\space"+
            " where \\space n \\in \\Re \\space";
        let cos0 = " \\int_{0}^T\n \\cos(n \\space \\omega t) dt = 0"+ " \\space \\space \\space \\space"+
            " where \\space \\{n \\in \\Re \\space|\\space n \\ne 0 \\}";
        let sin0cos0 = " \\int_{0}^T\n \\sin(n \\space \\omega t) \\cos(m \\space \\omega t) dt = 0"+ " \\space \\space \\space \\space"+
            " where \\space \\{n \\in \\Re \\space|\\space n \\ne m \\}";
        let sin0sin0 = " \\int_{0}^T\n \\sin(n \\space \\omega t) \\sin(m \\space \\omega t) dt = 0"+ " \\space \\space \\space \\space"+
            " where \\space \\{n \\in \\Re \\space|\\space n \\ne m \\}";
        let cos0cos0 = " \\int_{0}^T\n \\cos(n \\space \\omega t) \\cos(m \\space \\omega t) dt = 0"+ " \\space \\space \\space \\space"+
            " where \\space \\{n \\in \\Re \\space|\\space n \\ne m \\}";
        let sinSquare = " \\int_{0}^T\n \\sin^2(n \\space \\omega t) dt = \\frac{T}{2}"+ " \\space \\space \\space \\space"+
            " where \\space \\{n \\in \\Re \\space|\\space n \\ne 0 \\}";
        let cosSquare = " \\int_{0}^T\n \\cos^2(n \\space \\omega t) dt = \\frac{T}{2}"+ " \\space \\space \\space \\space"+
            " where \\space \\{n \\in \\Re \\space|\\space n \\ne 0 \\}";
        return(
            <div>
                <BlockMath math={sin0}/>
                <BlockMath math={cos0}/>
                <BlockMath math={sin0cos0}/>
                <BlockMath math={sin0sin0}/>
                <BlockMath math={cos0cos0}/>
                <BlockMath math={sinSquare}/>
                <BlockMath math={cosSquare}/>
            </div>
        );
    }
};

export default IntegrationFormula;