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
                api.setValue('N', (this.state.slider[0].value+1)/2);
                api.setValue('w', this.state.slider[1].value/2);
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
                    <Col lg="4" className="float-left">
                        <Slider sliderSetter={this.sliderSetter} name="N" min="0" max="20" defaultValue="1" step = {1} />
                        <Slider sliderSetter={this.sliderSetter} name="period" min="0" max="5" defaultValue ="1"/>
                        <Slider sliderSetter={this.sliderSetter} name="height" min="0" max="5" defaultValue="1"/>
                        <Row>
                            <SwitchExample switchSetter = {this.switchSetter} name="squareWave" checked= {true} />
                            <SwitchExample switchSetter = {this.switchSetter} name="fourierSeries" checked= {true} />
                        </Row>
                        <Row>
                        <SwitchExample switchSetter = {this.switchSetter} name="breakdown" checked= {false} />
                        </Row>
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