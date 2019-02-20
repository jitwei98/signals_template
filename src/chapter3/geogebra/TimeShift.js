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
                {name: "time shift", value:0}
            ]
        };
    }
    componentDidMount() {
        var parameters = {"id":"applet",
            "width":650,
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
                api.setValue('timeShift', this.state.slider[0].value);
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
                    <Col lg="4" className="float-left">
                        <Slider sliderSetter={this.sliderSetter} name="time shift" min="-5" max="5" defaultValue="0" />
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