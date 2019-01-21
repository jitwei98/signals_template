import React from 'react';
import FourierSeries from '../../../../../formula/chapter2/FourierSeries';
const Summary = ()=>{
    let a_0 = "a_0 = 0";
    let a_n = "a_n = 0";
    let b_n = "b_n = \\frac{4}{T} \\int_{0}^{\\frac{T}{2}} f(t) \\sin( n \\frac{2pi}{T} t)dt";
    return(
        <div >
            <h3>Summary</h3>
            <FourierSeries/>
        </div>
    );
}

export default Summary;