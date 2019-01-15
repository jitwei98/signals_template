import React, {Component} from 'react';
import $ from 'jquery';
import {Row, Col, Button} from 'reactstrap';
import {NavLink} from "react-router-dom";
import Slider from './Slider';
class TimeScalingGraph extends Component {
    constructor(props){
        super(props);
        this.state = {
            slider:[
                {name: "alpha", value:1},
                {name: "beta", value:1},
                {name: "sign", value:1},
                {name: "height", value:1}
            ]
        };
    }
    componentDidMount() {
        var parameters = {"id":"applet",
            "width":650,
            "height":500	,

            "ggbBase64":"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"

        };
        parameters.appletOnLoad = (api) =>{
            function checkSignButtonState() {
                if($('#sign').prop('checked')){
                    return 1
                }
                return -1;
            }
            setInterval(()=>{
                // alert(document.getElementById("Vol").value);
                api.setValue('a', this.state.slider[0].value);
                api.setValue('B', this.state.slider[1].value);
            }, 100);
        };
        var applet = new window.GGBApplet(parameters, '5.0');
        applet.inject('ggb');
    }
    sliderSetter = (name,value) =>{
        let slider = [...this.state.slider];
        slider.forEach((item,i)=>{
           if(item.name === name){
               slider[i].value = value;
           }
        });
        this.setState({
            slider
        });
    };
    render() {
        return(
            <div>
                <Row>
                    <Col lg="8" >
                         <div id='ggb'></div>
                    </Col>
                    <Col lg="4">
                        <Slider sliderSetter={this.sliderSetter} name="alpha"/>
                        <Slider sliderSetter={this.sliderSetter} name="beta"/>
                    </Col>
                </Row>
                <Button color="primary" block>
                    <NavLink style={{color: 'white'}} to = '/chapter1/lecture'>Lecture</NavLink>
                </Button>
            </div>
        );
    }
}

export default TimeScalingGraph;