import React from 'react';
import {InlineTex} from "react-tex";

const TimeShifting = ()=>{
    const item1 = "Time-shifting of a signal $$x(t)$$ is effected by replacing the time variable $$t$$ by $$x(t- \\beta)$$, where $$\\beta$$ is a real number.";
   return(
        <div>
            <h3 className="text-center">Time-shifting</h3>
            <p>
                <InlineTex texContent={item1} />
            </p>
        </div>
    );
}

export default TimeShifting;