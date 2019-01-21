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