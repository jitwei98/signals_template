import React from 'react';
import { BlockMath } from 'react-katex';;

const EvenPeriodicFunction = ()=>{
    let linearityFormula = " \\alpha x_1(t) + \\beta x_2(t)  \\space \\Leftrightarrow \\alpha X_1(f) + \\alpha X_2(f)";
    let DualityFormula = "X(t) \\Leftrightarrow x(-f) \\space or \\space X(-t) \\Leftrightarrow x(f)";
    let TimeScaling = "x(\\beta t) \\Leftrightarrow \\frac{1}{|\\beta|} \\space X  ( \\frac  {f}{\\beta} ) ";
    let TimeShifting = "x(t-t_0) \\Leftrightarrow X(f) e^{-j 2 \\pi f t_0}";
    let FreqShifting = "x(t)e^{j 2 \\pi f_0} \\Leftrightarrow X(f-f_0)"
    return(
        <div >
            <h3 className="text-center">Linearity</h3>
            <p>
                <BlockMath math={linearityFormula} />
            </p>
            <h3 className="text-center">Duality</h3>
            <p>
                <BlockMath math={DualityFormula} />
            </p>
            <h3 className="text-center">Time Scaling</h3>
            <p>
                <BlockMath math={TimeScaling} />
            </p>
            <h3 className="text-center">Time Shifting</h3>
            <p>
                <BlockMath math={TimeShifting} />
            </p>
            <h3 className="text-center">Frequency Shifting</h3>
            <p>
                <BlockMath math={FreqShifting} />
            </p>
        </div>
    );
}

export default EvenPeriodicFunction;