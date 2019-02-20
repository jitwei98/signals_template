import React, { Component } from 'react';
import { BlockMath } from 'react-katex';
class FourierSeries  extends Component {

    render() {
        let ForwardFourierTransform = "X(f) = \\int_{ -\\infty }^\\infty x(t) e^{-j2\\pi ft} ";
        let InverseFourierTransform = "x(t) = \\int_{ -\\infty }^\\infty X(f) e^{j2\\pi ft} ";
        return(
            <div>
                <BlockMath math={ForwardFourierTransform} />
                <BlockMath math={InverseFourierTransform} />
            </div>
        );
    }
}

export default FourierSeries;