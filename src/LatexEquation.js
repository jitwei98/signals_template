import React, { Component } from 'react';
import './App.css';
import Latex from 'react-latex';

class LatexEquation extends Component {

  render() {
     return (
            <h3>
                <Latex>What is $(3\times 4) \div (5-3)$</Latex>
            </h3>
        );
  }
}

export default LatexEquation;
