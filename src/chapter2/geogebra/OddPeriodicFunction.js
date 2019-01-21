import React, {Component} from 'react';
import $ from 'jquery';
import {Row, Col, Button} from 'reactstrap';
import {NavLink} from "react-router-dom";
import Slider from './Slider';
import SwitchExample from './Switch';
class EvenPeriodicFunction extends Component {
    constructor(props){
        super(props);
        this.state = {
            slider:[
                {name: "N", value:1},
                {name: "period", value:1},
                {name: "height", value:1}
            ],
            button:[
                {name:"squareWave", value:true},
                {name:"fourierSeries", value:true},
                {name:"breakdown", value:false},
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
                api.setValue('N', this.state.slider[0].value);
                api.setValue('period', this.state.slider[1].value);
                api.setValue('h', this.state.slider[2].value);
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
    switchSetter = (name,value)=>{
        let button = [...this.state.button];
        button.forEach((item,i)=>{
            if(item.name === name){
                button[i].value = value;
            }
        });
        this.setState({
            button
        });
        console.log(this.state.button[0]);
    }
    render() {
        return(
            <div>
                <Row>
                    <Col lg="8" >
                         <div id='ggb'></div>
                    </Col>
                    <Col lg="4" className="float-left">
                        <Slider sliderSetter={this.sliderSetter} name="N" min="0" max="20" defaultValue="1" step = {1} />
                        <Slider sliderSetter={this.sliderSetter} name="period" min="0" max="5" defaultValue ="1"/>
                        <Slider sliderSetter={this.sliderSetter} name="height" min="0" max="5" defaultValue="1"/>
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

export default EvenPeriodicFunction;