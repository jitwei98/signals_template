import React, {Component} from 'react';
import $ from 'jquery';
import {Row, Col, Button} from 'reactstrap';
import {NavLink} from "react-router-dom";
import Slider from './Slider';
class TimeShift extends Component {
    constructor(props){
        super(props);
        this.state = {
            slider:[
                {name: "Curve height", value:1},
                {name: "Curve Width", value:1},
                {name: "Sample Frequency", value:1},
                {name: "Sample height", value:1}

            ]
        };
    }
    componentDidMount() {
        var parameters = {"id":"applet",
            "width":800,
            "height":500,

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
                api.setValue('height_c', this.state.slider[0].value);
                api.setValue('width_c', this.state.slider[1].value);
                api.setValue('freq_v', this.state.slider[2].value);
                api.setValue('height_v', this.state.slider[3].value);
            }, 200);

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
                    <Col lg="9" >
                        <div id='ggb'></div>
                    </Col>
                    <Col lg="3" className="float-left">
                        <Slider sliderSetter={this.sliderSetter} name="Curve height" min="0" max="5" defaultValue="1" />
                        <Slider sliderSetter={this.sliderSetter} name="Curve Width" min="0" max="5" defaultValue="1" />
                        <Slider sliderSetter={this.sliderSetter} name="Sample Frequency" min="0" max="5" defaultValue="3" />
                        <Slider sliderSetter={this.sliderSetter} name="Sample height" min="0" max="5" defaultValue="1" />
                    </Col>
                </Row>
                <Button color="primary" block
                        tag={NavLink} to = '/TH/chapter2/lecture'
                >
                    Lecture
                </Button>
            </div>
        );
    }
}

export default TimeShift;