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
                {name: "pulse width", value:1},
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
            "height":500	,

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
                api.setValue('w', this.state.slider[1].value);
                api.setValue('h', this.state.slider[2].value);
            }, 100);
            setInterval(()=>{
                // alert(document.getElementById("Vol").value);
                api.setValue('squareWave', this.state.button[0].value);
                api.setValue('fourierSeries', this.state.button[1].value);
                api.setValue('breakdown', this.state.button[2].value);

            }, 200);

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
                    <Col lg="4">
                        <Slider sliderSetter={this.sliderSetter} name="N" min="0" max="20" defaultValue="1" step = {1}/>
                        <Slider sliderSetter={this.sliderSetter} name="pulse width" min="0" max="5" defaultValue ="1"/>
                        <Slider sliderSetter={this.sliderSetter} name="height" min="0" max="5" defaultValue="1"/>
                        <SwitchExample switchSetter = {this.switchSetter} name="squareWave" checked= {true} />
                        <SwitchExample switchSetter = {this.switchSetter} name="fourierSeries" checked= {true} />
                        <SwitchExample switchSetter = {this.switchSetter} name="breakdown" checked= {false} />
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

export default EvenPeriodicFunction;