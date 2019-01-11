import React, { Component } from 'react';
import './App.css';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default class LatexEquation extends Component {

  render() {
     return (
            <h3>
                <InlineMath math={`\\int_0^\\infty x^2 dx`}/>
                <BlockMath math={`\\int_0^\\infty x^2 dx`}/>
            </h3>
        );
  }
}
