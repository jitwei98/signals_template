import React from 'react';
import {InlineTex} from "react-tex";

const TimeReversal = ()=>{
    let item1 = 'Time-reversal of a signal; $$x(t)$$ is effected by replacing the time variable $$t$$ by $$-t$$.'
   return(
        <div >
            <h3 className="text-center">Time-reversal</h3>
            <p>
                <InlineTex texContent={item1} />
            </p>
        </div>
    );
}

export default TimeReversal;