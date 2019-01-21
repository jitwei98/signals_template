import React from 'react';
import { BlockMath } from 'react-katex';;

const OddPeriodicFunction = ()=>{
    let a_0 = "a_0 = 0";
    let a_n = "a_n = 0";
    let b_n = "b_n = \\frac{4}{T} \\int_{0}^{\\frac{T}{2}} f(t) \\sin( n \\frac{2pi}{T} t)dt";
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

export default OddPeriodicFunction;