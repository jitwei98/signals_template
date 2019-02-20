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