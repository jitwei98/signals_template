import React, {Component} from 'react';
import {Row, Col, Button} from 'reactstrap';
import {NavLink} from "react-router-dom";
class TimeShift extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        var parameters = {"id":"applet",
            "width":800,
            "height":600,

            "ggbBase64":"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"

        };
        var applet = new window.GGBApplet(parameters, '5.0');
        applet.inject('ggb');
    }
    render() {
        return(
            <div>
                <Row>
                    <Col lg="12" >
                        <div id='ggb'></div>
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

export default TimeShift;