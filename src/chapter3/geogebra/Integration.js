import React, {Component} from 'react';
import $ from 'jquery';
import {Row, Col, Button} from 'reactstrap';
import {NavLink} from "react-router-dom";
import Slider from './Slider';
import SwitchExample from "../../chapter2/geogebra/Switch";
class Integration extends Component {
    constructor(props){
        super(props);
        this.state = {
            button:[
                {name:"x(t)", value:true},
                {name:"Integration", value:false},
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
                            <SwitchExample switchSetter = {this.switchSetter} name="Integration" checked= {false} />
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

export default Integration;