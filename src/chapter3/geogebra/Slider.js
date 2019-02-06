import React from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
const Handle = Slider.Handle;

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};
const wrapperStyle = { width: 300, margin: 0, marginBottom:10, padding:0 };
class SimpleSlider extends React.Component {
    handleChange = (value) => {
        this.props.sliderSetter(this.props.name,value);
    };
    componentDidMount() {
        if(this.props.step != null){
            this.step = this.props.step;
        }else{
            this.step = 0.1;
        }
    }

    render() {
        return (
            <div>
                <div style={wrapperStyle}>
                        <label htmlFor="icon-switch">
                            {this.props.name}
                        </label>
                        <Slider min={parseInt(this.props.min)}
                                max={parseInt(this.props.max)}
                                defaultValue={parseInt(this.props.defaultValue)}
                                handle={handle} step={this.step}
                                onChange={this.handleChange}
                                id={this.props.name}/>
                </div>
            </div>
        );
    }
}


export default SimpleSlider;
