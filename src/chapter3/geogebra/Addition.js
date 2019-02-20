import React, {Component} from 'react';
import $ from 'jquery';
import {Row, Col, Button} from 'reactstrap';
import {NavLink} from "react-router-dom";
import Slider from './Slider';
class Addition extends Component {
    constructor(props){
        super(props);
        this.state = {
            slider:[
                {name: "pulse Width", value:5},
                {name: "height", value:1},
                {name: "pulse Width 2", value:1},
                {name: "height 2", value:1}
            ]
        };
    }
    componentDidMount() {
        var parameters = {"id":"applet",
            "width":650,
            "height":500,

            "ggbBase64":"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"
        }
        ;
        parameters.appletOnLoad = (api) =>{
            function checkSignButtonState() {
                if($('#sign').prop('checked')){
                    return 1
                }
                return -1;
            }
            setInterval(()=>{
                // alert(document.getElementById("Vol").value);
                api.setValue('t1', this.state.slider[0].value);
                api.setValue('h1', this.state.slider[1].value);
                api.setValue('t2', this.state.slider[2].value);
                api.setValue('h2', this.state.slider[3].value);
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
                        <Slider sliderSetter={this.sliderSetter} name="pulse Width" min="0" max="5" defaultValue="5" />
                        <Slider sliderSetter={this.sliderSetter} name="height" min="0" max="5" defaultValue ="1"/>
                        <Slider sliderSetter={this.sliderSetter} name="pulse Width 2" min="0" max={this.state.slider[0].value} defaultValue="1"/>
                        <Slider sliderSetter={this.sliderSetter} name="height 2" min="0" max="5" defaultValue="1"/>
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

export default Addition;