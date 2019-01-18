import React from 'react';
import { InlineTex} from "react-tex";

const TimeScaling = ()=>{
    let TimeScalingContent1 ="Time-scaling of a signal $$x(t)$$ is effected by replacing the time variable $$t$$ by  $$\\alpha t$$, where $$\\alpha$$ is a positive real number.";
    let TimeScalingContent2 = "$$0 <\\alpha < 1$$ : uniform <b>expansion</b> of $$x(t)$$ along the time axis";
    let TimeScalingContent3 = "$$\\alpha > 1$$ : uniform <b>contraction</b> of $$x(t)$$ along the time axis";
   return(
        <div >
            <h3 className="text-center">Time-scaling</h3>
            <p>
                <InlineTex texContent={TimeScalingContent1} />
            </p>
            <p>
                <InlineTex texContent={TimeScalingContent2} />
            </p>
            <p>
                <InlineTex texContent={TimeScalingContent3} />
            </p>
        </div>
    );
}

export default TimeScaling;