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
                {name:"fourier analysis", value:true}
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
                api.setValue('N_2', (this.state.slider[0].value));
                api.setValue('w', this.state.slider[1].value/2);
                api.setValue('h', this.state.slider[2].value);
            }, 100);
            setInterval(()=>{
                // alert(document.getElementById("Vol").value);
                api.setValue('squareWave', this.state.button[0].value);
                api.setValue('fourierSeries', this.state.button[1].value);
                api.setValue('breakdown', this.state.button[2].value);
                api.setValue('fd', this.state.button[3].value);
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
    }
    render() {
        return(
            <div>
                <Row>
                    <Col lg="8" >
                         <div id='ggb'></div>
                    </Col>
                    <Col lg="4">
                        <Slider sliderSetter={this.sliderSetter} name="N" min="1" max="25" defaultValue="1" step = {2}/>
                        <Slider sliderSetter={this.sliderSetter} name="period" min="0" max="5" defaultValue ="1"/>
                        <Slider sliderSetter={this.sliderSetter} name="height" min="0" max="5" defaultValue="1"/>
                        <Row>
                            <SwitchExample switchSetter = {this.switchSetter} name="squareWave" checked= {true} />
                            <SwitchExample switchSetter = {this.switchSetter} name="fourierSeries" checked= {true} />
                        </Row>
                        <Row>
                            <SwitchExample switchSetter = {this.switchSetter} name="breakdown" checked= {false} />
                            <SwitchExample switchSetter = {this.switchSetter} name="fourier analysis" checked= {true} />
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