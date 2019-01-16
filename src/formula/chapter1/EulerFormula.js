import React, {Component} from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';


class EulerFormula  extends Component{
    render() {
        let euler1 = "e^{j\\theta} = \\cos{\\theta} + j\\sin{\\theta}";
        let euler2 = "e^{-j\\theta} = \\cos{\\theta} - j\\sin{\\theta}";
        let euler3 = "\\cos{\\theta} = \\frac{1}{2} (e^{j\\theta} + e^{-j\\theta})";
        let euler4 = "\\sin{\\theta} = \\frac{1}{2j} (e^{j\\theta} - e^{-j\\theta})";
        let euler5 = "when \\space x = \\pi "+
                        "\\space \\space \\space "+
                        "e^{j\\pi} + 1 =0";
        return(
            <div>
                <BlockMath math={euler1}/>
                <BlockMath math={euler2}/>
                <BlockMath math={euler3}/>
                <BlockMath math={euler4}/>
                <BlockMath math={euler5}/>
            </div>
        );
    }
};

export default EulerFormula;