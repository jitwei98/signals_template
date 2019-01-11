import React, { Component } from 'react';
import './App.css';
import MathJax from 'react-mathjax';

class Equations extends Component {

  render() {
    const tex = `f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`;

    return (
      <div>
      <h1>MathJax Example</h1>
      <MathJax.Provider>
          <div>
              This is an inline math formula: <MathJax.Node inline formula={'a = b'} />
              And a block one:

              <MathJax.Node formula={tex} />
          </div>
      </MathJax.Provider>
      <hr />
      </div>
    );
  }
}

export default Equations;

// const MathJax = require('react-mathjax')
// const tex = `f(x) = \\int_{-\\infty}^\\infty
//     \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
//     \\,d\\xi`
 
// module.exports = () => {
//     return (
//         <MathJax.Provider>
//             <div>
//                 This is an inline math formula: <MathJax.Node inline formula={'a = b'} />
//                 And a block one:
 
//                 <MathJax.Node formula={tex} />
//             </div>
//         </MathJax.Provider>
//     );
// }