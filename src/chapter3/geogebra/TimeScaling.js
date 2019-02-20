import React, {Component} from 'react';
import $ from 'jquery';
import {Row, Col, Button} from 'reactstrap';
import {NavLink} from "react-router-dom";
import Slider from './Slider';
class TimeScaling extends Component {
    constructor(props){
        super(props);
        this.state = {
            slider:[
                {name: "Beta", value:1}
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
                api.setValue('B', this.state.slider[0].value);
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
                        <Slider sliderSetter={this.sliderSetter} name="Beta" min="0" max="5" defaultValue="1" />
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

export default TimeScaling;