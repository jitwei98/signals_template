import React, {Component} from 'react';
import {Button, Row} from "reactstrap";
import {NavLink} from "react-router-dom";
import TimeScaling from "./CarouselItems/CarouselItem1/TimeScaling"
import TimeReversal from "./CarouselItems/CarouselItem2/TimeReversal"
import TimeShifting from "./CarouselItems/CarouselItem3/TimeShifting"
import { Carousel } from "react-responsive-carousel";
import './Time_Scaling_Content.css'
import EulerFormula from "../../../formula/chapter1/EulerFormula";
export default () => (
    <div>
    <Carousel showThumbs={false} showArrows={true} style={{backgroundColor:'white'}} >
        <div>
            <TimeScaling/>
        </div>
        <div>
            <TimeReversal/>
        </div>
        <div>
            <TimeShifting/>
        </div>
        <div>
            <EulerFormula/>
        </div>
    </Carousel>
    <Button color="primary" block
            tag={NavLink} to='/TH/Chapter1/Geogebra/TimeScalingGraph'
    >
            Playground
    </Button>
    </div>

);