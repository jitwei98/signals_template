import React, {Component} from 'react';
import {Button, Row} from "reactstrap";
import {NavLink} from "react-router-dom";
import Summary from './CarouselItems/Summary/Summary';
import LinearityAndDuality from './CarouselItems/Properites/Linearity';
import Differentiation from './CarouselItems/Properites/Differentiation';
import { Carousel } from "react-responsive-carousel";
export default () => (
    <div>
    <Carousel showThumbs={false} showArrows={true} style={{backgroundColor:'white'}} >
            <Summary/>
            <LinearityAndDuality/>
            <Differentiation/>
    </Carousel>
    <Button color="primary" block
            tag={NavLink} to='/TH/Chapter3/Geogebra/addition'
    >
            Playground
    </Button>
    </div>

);