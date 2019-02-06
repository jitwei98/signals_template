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