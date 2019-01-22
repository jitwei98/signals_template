import React, {Component} from 'react';
import {Row, Col, Button} from 'reactstrap';
import {NavLink} from "react-router-dom";
import Slider from './Slider';
import SwitchExample from './Switch';
class TimeScalingGraph extends Component {
    constructor(props){
        super(props);
        this.state = {
            slider:[
                {name: "alpha", value:1},
                {name: "beta", value:0},
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
            setInterval(()=>{
                // alert(document.getElementById("Vol").value);
                api.setValue('a', this.state.slider[0].value);
                api.setValue('B', this.state.slider[1].value);
                api.setValue('PON', this.state.slider[2].value);
                api.setValue('height', this.state.slider[3].value);
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
    signSetter = (checked)=>{
        let slider = [...this.state.slider];

        if(checked){
            slider.forEach((item,i)=>{
                if(item.name === "sign"){
                    slider[i].value = 1;
                }
            });
        }else{
            slider.forEach((item,i)=>{
                if(item.name === "sign"){
                    slider[i].value = -1;
                }
            });
        }
        this.setState({
            slider
        });
    }
    render() {
        return(
            <div>
                <Row>
                    <Col lg="8" >
                         <div id='ggb'></div>
                    </Col>
                    <Col lg="4">
                        <Slider sliderSetter={this.sliderSetter} name="alpha" min="0" max="5" defaultValue="1"/>
                        <Slider sliderSetter={this.sliderSetter} name="beta" min="-5" max="5" defaultValue ="0"/>
                        <SwitchExample signSetter = {this.signSetter}/>
                        <Slider sliderSetter={this.sliderSetter} name="height" min="0" max="5" defaultValue="1"/>
                    </Col>
                </Row>
                <Button color="primary" block
                    tag={NavLink} to = '/TH/chapter1/lecture'
                >
                    Lecture
                </Button>
            </div>
        );
    }
}

export default TimeScalingGraph;