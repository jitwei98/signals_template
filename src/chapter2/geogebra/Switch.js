import React, { Component } from "react";
import Switch from "react-switch";

class SwitchExample extends Component {

    state = { checked: true };

    componentDidMount() {
        if(this.props.checked != null){;
            this.setState(
                {checked : this.props.checked}
            )
        }
    }

    handleChange=(checked) =>{
        this.setState({ checked });
        this.props.switchSetter(this.props.name,checked);
    };


    render() {
        return (
            <div className="example">
                <label htmlFor="icon-switch">
                    {this.props.name}:
                    <Switch
                        checked={this.state.checked}
                        onChange={this.handleChange}
                        onColor="#808080"
                        className="react-switch"
                        id="icon-switch"
                    />
                </label>
            </div>
        )
    }
}
export default SwitchExample