import React, {Component} from 'react';
import $ from 'jquery';
import {Row, Col, Button} from 'reactstrap';
import {NavLink} from "react-router-dom";
import Slider from './Slider';
import SwitchExample from "../../chapter2/geogebra/Switch";
class Differentiation extends Component {
    constructor(props){
        super(props);
        this.state = {
            button:[
                {name:"x(t)", value:true},
                {name:"dx/dt", value:false},
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
                api.setValue('before', this.state.button[0].value);
                api.setValue('after', this.state.button[1].value);
            }, 200);

        };
        var applet = new window.GGBApplet(parameters, '5.0');
        applet.inject('ggb');
    }
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
    };
    render() {
        return(
            <div>
                <Row>
                    <Col lg="8" >
                        <div id='ggb'></div>
                    </Col>
                    <Col lg="4" className="float-left">
                        <Row>
                            <SwitchExample switchSetter = {this.switchSetter} name="x(t)" checked= {true} />
                        </Row>
                        <Row>
                            <SwitchExample switchSetter = {this.switchSetter} name="dx/dt" checked= {false} />
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

export default Differentiation;