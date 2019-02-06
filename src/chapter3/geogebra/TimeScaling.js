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