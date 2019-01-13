import React from 'react';
import './Time_Scaling_Content.css'
import {InlineTex} from 'react-tex';
import {Button, Row} from "reactstrap";
import {NavLink} from "react-router-dom";

const TimeScalingContent = () => {
    let latexString ="This is inline $$\\int_{a}^{b} f(x)dx = F(b) - F(a)$$ latex string";
    return(
        <div>
            <Row>
                <div id="lectuer" className="carousel slide col" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <h3 className="text-center">Time-scaling</h3>
                            {/*<Latex>*/}
                                {/*Time-scaling of a singal $x(t)$ is effected by replacing the time variable $t$ by $\alpha t$, where $\alpha$ is a positive real number*/}
                                {/*0 &lt  $\alpha$ &lt 1 : uniform expansion of $x(t)$ along the time axis*/}
                                {/*$ \alpha$ &gt 1 : uniform contraction of $x(t)$ along the time axis*/}
                            {/*</Latex>*/}
                            <InlineTex texContent={latexString} />
                        </div>
                        <div className="carousel-item">
                            <h3 className="text-center">Time-reversal</h3>

                        </div>
                        <div className="carousel-item">
                            <h3 className="text-center"> Time-shifting</h3>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#lectuer" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#lectuer" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </Row>
            <Button>
                <Row>
                        <NavLink style={{ color: 'white' }} to = '/chapter1/geogebra'>Playground</NavLink>
                </Row>
            </Button>
        </div>
    );
}

export default TimeScalingContent;