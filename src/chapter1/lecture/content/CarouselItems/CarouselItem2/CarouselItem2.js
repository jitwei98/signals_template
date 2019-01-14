import React from 'react';
import {InlineTex} from "react-tex";

const CarouselItem2 = ()=>{
    let TimeScalingContent1 ="Time-scaling of a signal $$x(t)$$ is effected by replacing the time variable $$t$$ by  $$\\alpha t$$, where $$\\alpha$$ is a positive real number.";
   return(
        <div className="carousel-item active">
            <h3 className="text-center">Time-scaling</h3>
            <p>
                <InlineTex texContent={TimeScalingContent1} />
            </p>
        </div>
    );
}

export default CarouselItem2;