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
                        <Slider sliderSetter={this.sliderSetter} name="pulse Width 2" min="0" max="5" defaultValue="1"/>
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