import React from 'react';
import { BlockMath } from 'react-katex';;

const EvenPeriodicFunction = ()=>{
    let a_0 = "a_0 = \\frac{2}{T} \\int_{0}^{\\frac{T}{2}} f(t) dt";
    let a_n = "a_n = \\frac{4}{T} \\int_{0}^{\\frac{T}{2}} f(t) \\cos( n \\frac{2pi}{T} t)dt";
    let b_n = "b_n = 0";
   return(
        <div >
            <h3 className="text-center">Even periodic function</h3>
            <p>
                <BlockMath math={a_0} />
            </p>
            <p>
                <BlockMath math={a_n} />
            </p>
            <p>
                <BlockMath math={b_n} />
            </p>
        </div>
    );
}

export default EvenPeriodicFunction;