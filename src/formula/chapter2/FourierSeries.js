import React, { Component } from 'react';
import { BlockMath } from 'react-katex';
class FourierSeries  extends Component {

    render() {
        let FourierSynthesis = "x_{p}(t) = \\displaystyle\\sum_{k=-\\infty } ^\\infty c_k e^{(j \\frac{2\\pi}{T_p} kt) }; \\space \\space k= 0,\\pm1,\\pm2";
        let FourierAnalysis = "c_k = \\frac{1}{T_p} \\int_{t_0}^{t_0 + T_p} x_{p}(t)  e^{(-j \\frac{2\\pi}{T_p} kt) } ";
        let FourierTrigoA = "a_{k} = \\frac{1}{T_p} \\int_{t_0}^{t_0 + T_p} x_{p}(t)  \\cos {( \\frac{2\\pi}{T_p} kt) }; \\space k\\geq 1 ";
        let FourierTrigoB = "b_{k} = \\frac{1}{T_p} \\int_{t_0}^{t_0 + T_p} x_{p}(t)  \\sin {( \\frac{2\\pi}{T_p} kt) }; \\space k \> 1";
        let FourierSynthesisTrigo =  "x_{p}(t) = a_0 + 2\\displaystyle\\sum_{k= 1} ^\\infty [ a_k \\cos {( \\frac{2\\pi}{T_p} kt)} + b_k \\sin {( \\frac{2\\pi}{T_p} kt)}] ";
        return(
            <div>
                <BlockMath math={FourierSynthesis} />
                <BlockMath math={FourierAnalysis} />
                <BlockMath math={FourierTrigoA} />
                <BlockMath math={FourierTrigoB} />
                <BlockMath math={FourierSynthesisTrigo} />
            </div>
        );
    }
}

export default FourierSeries;