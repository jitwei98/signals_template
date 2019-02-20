import React from 'react';
import { BlockMath } from 'react-katex';

const EvenPeriodicFunction = ()=>{
    let Differentiation = " \\frac{d}{dt} x(t) \\Leftrightarrow j 2 \\pi f X(f)";
    let Integration = "\\int_{ -\\infty }^t x(\\tau) d \\tau \\Leftrightarrow \\frac {1}{j 2 \\pi f} X(f) + \\frac{1}{2}X(0) \\delta(f)";
    let Convolution1 = "x_1(t) \\circledast x_2(t) = \\int_{ -\\infty }^\\infty x_1(\\zeta)x_2(t-\\zeta)d\\zeta";
    let Convolution2 = "\\int_{ -\\infty }^\\infty x_1(\\zeta)x_2(t-\\zeta)d\\zeta \\Leftrightarrow X_1(f)X_2(f)";
    let Multiplcation = "X_1(t)X_2(t) \\Leftrightarrow \\int_{ -\\infty }^\\infty x_1(\\zeta)x_2(f-\\zeta)d\\zeta"
    return(
        <div >
            <h3 className="text-center">Differentiation in the Time Domain</h3>
            <p>
                <BlockMath math={Differentiation} />
            </p>
            <h3 className="text-center">Integration in the Time Domain</h3>
            <p>
                <BlockMath math={Integration} />
            </p>
            <h3 className="text-center">Convolution in the Time Domain</h3>
            <p>
                <BlockMath math={Convolution1} />
                <BlockMath math={Convolution2} />
            </p>
            <h3 className="text-center">Multiplication in the Time Domain </h3>
            <p>
                <BlockMath math={Multiplcation} />
            </p>
        </div>
    );
}

export default EvenPeriodicFunction;