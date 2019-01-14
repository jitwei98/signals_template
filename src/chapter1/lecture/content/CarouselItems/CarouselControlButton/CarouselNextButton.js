import React from 'react';

const CarouselNextButton = ()=>{
    return(
        <a className="carousel-control-next" href="#lectuer" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    )
}

export default CarouselNextButton;