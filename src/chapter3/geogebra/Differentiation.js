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