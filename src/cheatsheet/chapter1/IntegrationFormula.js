import React, {Component} from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';


class IntergrationFormula  extends Component{
    render() {
        let cos0 = " \\int_{-\\infty}^\\infty\n \\cos(\\alpha x) = 0"+ " \\space \\space \\space \\space"+
                    " where \\space \\alpha \\in \\Re" ;
        let euler1 = "e^{j\\theta} = \\cos{\\theta} + j\\sin{\\theta}";
        let euler2 = "e^{-j\\theta} = \\cos{\\theta} - j\\sin{\\theta}";
        let euler3 = "\\sin{\\theta} = \\frac{1}{2} (e^{j\\theta} + e^{-j\\theta})";
        let euler4 = "\\cos{\\theta} = \\frac{1}{2j} (e^{j\\theta} - e^{-j\\theta})";
        return(
            <div>
                <BlockMath math={cos0}/>
                <BlockMath math={euler1}/>
                <BlockMath math={euler2}/>
                <BlockMath math={euler3}/>
                <BlockMath math={euler4}/>
            </div>
        );
    }
};

export default IntergrationFormula;