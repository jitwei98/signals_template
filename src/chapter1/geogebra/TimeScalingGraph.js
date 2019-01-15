import React, {Component} from 'react';
import $ from 'jquery';
import { Row } from 'reactstrap';
import {NavLink} from "react-router-dom";
class TimeScalingGraph extends Component {
    constructor(props){
        super(props);
        this.state = {
            slider:[
                {name: "alpha", value:1},
                {name: "beta", value:1},
                {name: "sign", value:1}
            ]
        };
    }
    componentDidMount() {
        var parameters = {"id":"applet",
            "width":700,
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
                api.setValue('a', this.state.slider[0].value);

            }, 100);
        }
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
    }
    render() {
        return(
            <div>
                <div id='ggb'></div>
                <Row>
                    <NavLink activeStyle={{ color: 'red' }} to = '/chapter1/lecture'>Lecture</NavLink>
                </Row>
            </div>
        );
    }
}

export default TimeScalingGraph;