import React, {Component} from 'react';
import { BlockMath } from 'react-katex';
import {NavLink} from "react-router-dom";

let ProveCos = () =>{
    let EulerFormula = "2 \\cos\\theta =  e^{j\\theta} = \\cos{\\theta} + j\\sin{\\theta} + e^{-j\\theta} = \\cos{\\theta} - j\\sin{\\theta}";

    return(
        <div>
            <BlockMath math={EulerFormula}/>
        </div>
    )
}

export default ProveCos;