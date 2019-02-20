import React, {Component} from 'react';
import $ from 'jquery';
import {Row, Col, Button} from 'reactstrap';
import {NavLink} from "react-router-dom";
import Slider from './Slider';
class FrequencyShift extends Component {
    constructor(props){
        super(props);
        this.state = {
            slider:[
                {name: "frequency shift", value:0}
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
                api.setValue('FreqShift', this.state.slider[0].value);
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
                        <Slider sliderSetter={this.sliderSetter} name="frequency shift" min="-5" max="5" defaultValue="0" />
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

export default FrequencyShift;