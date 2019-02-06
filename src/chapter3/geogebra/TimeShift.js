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