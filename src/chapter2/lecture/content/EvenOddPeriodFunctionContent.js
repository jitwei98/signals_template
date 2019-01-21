import React, {Component} from 'react';
import {Button, Row} from "reactstrap";
import {NavLink} from "react-router-dom";
import EvenPeriodicFunction from "./CarouselItems/EvenPeriodFunction/EvenPeriodicFunction"
import OddPeriodicFunction from "./CarouselItems/OddPeriodFunction/OddPeriodicFunction";
import Summary from './CarouselItems/Summary/Summary';
import { Carousel } from "react-responsive-carousel";
export default () => (
    <div>
    <Carousel showThumbs={false} showArrows={true} style={{backgroundColor:'white'}} >
            <Summary/>
            <EvenPeriodicFunction/>
            <OddPeriodicFunction/>

    </Carousel>
    <Button color="primary" block
            tag={NavLink} to='/TH/Chapter2/Geogebra/OverallPlayground'
    >
            Playground
    </Button>
    </div>

);