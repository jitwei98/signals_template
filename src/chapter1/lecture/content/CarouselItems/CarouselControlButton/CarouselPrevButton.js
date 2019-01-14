import React from 'react';

const CarouselPrevButton = ()=>{
    return(
        <a className="carousel-control-prev" href="#lectuer" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
    )
}

export default CarouselPrevButton;