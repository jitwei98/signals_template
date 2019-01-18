import React, {Component} from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';


class TrigoFormula extends Component{
    render() {
        let Ptolemy1 = "\\sin(A\\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B";
        let Ptolemy2 = "\\cos(A\\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B";
        let doublesin = "\\sin (2A) = 2 \\sin A \\cos A";
        let doublecos = "\\cos (2A) = \\cos^2 A - \\sin^2 A = 2\\cos^2 A -1 = 1-2 \\ sin^2 A";
        let sps = "\\sin P + \\sin Q = 2\\sin \\frac{1}{2}(P+Q) \\cos \\frac{1}{2}(P-Q)";
        let sms = "\\sin P - \\sin Q = 2\\cos \\frac{1}{2}(P+Q) \\sin \\frac{1}{2}(P-Q)";
        let cpc = "\\cos P + \\cos Q = 2\\cos \\frac{1}{2}(P+Q) \\cos \\frac{1}{2}(P-Q)";
        let cmc = "\\cos P - \\cos Q = -2\\sin \\frac{1}{2}(P+Q) \\sin \\frac{1}{2}(P-Q)";
        let stc = "\\sin P \\cos Q = \\frac{1}{2} ( \\sin(P+Q) + \\sin(P-Q) )";
        let sts = "\\sin P \\sin Q = \\frac{1}{2} ( \\cos(P-Q) - \\cos(P+Q) )";
        let ctc = "\\cos P \\cos Q = \\frac{1}{2} ( \\cos(P+Q) + \\cos(P-Q) )";
        return(
            <div>
                <strong>Ptolemy’s identities:</strong>
                <BlockMath math={Ptolemy1}/>
                <BlockMath math={Ptolemy2}/>
                <hr />
                <strong>Double angle:</strong>
                <BlockMath math={doublesin}/>
                <BlockMath math={doublecos}/>
                <hr />
                <strong>Product-sum identities:</strong>
                <BlockMath math={sps}/>
                <BlockMath math={sms}/>
                <BlockMath math={cpc}/>
                <BlockMath math={cmc}/>
                <hr />
                <strong>Product identities:</strong>
                <BlockMath math={stc}/>
                <BlockMath math={sts}/>
                <BlockMath math={ctc}/>
                <hr />
            </div>
        );
    }
};

export default TrigoFormula;