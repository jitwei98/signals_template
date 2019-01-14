import React from 'react';
import './Time_Scaling_Content.css'
import {InlineTex} from 'react-tex';
import {Button, Row} from "reactstrap";
import {NavLink} from "react-router-dom";
import CarouselItem1 from "./CarouselItems/CarouselItem1/CarouselItem1"
import CarouselItem2 from "./CarouselItems/CarouselItem2/CarouselItem2"
import CarouselItem3 from "./CarouselItems/CarouselItem3/CarouselItem3"
import CarouselControlButton from './CarouselItems/CarouselControlButton'
const TimeScalingContent = () => {
    return(
        <div>
            <Row>
                <div id="lectuer" className="carousel slide col" data-ride="carousel">
                    <div className="carousel-inner">
                        <CarouselItem1/>
                        <CarouselItem2/>
                        <CarouselItem3/>
                    </div>
                    <CarouselControlButton/>
                </div>
            </Row>
            <Button>
                <Row>
                        <NavLink style={{ color: 'white' }} to = '/chapter1/geogebra'>Playground</NavLink>
                </Row>
            </Button>
        </div>
    );
}

export default TimeScalingContent;