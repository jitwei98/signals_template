import React, { Component } from "react";
import Switch from "react-switch";

class SwitchExample extends Component {

    state = { checked: true };

    handleChange=(checked) =>{
        this.setState({ checked });
        this.props.signSetter(checked);
    }

    render() {
        return (
            <div className="example">
                <label htmlFor="icon-switch">
                    Sign:
                    <Switch
                        checked={this.state.checked}
                        onChange={this.handleChange}
                        uncheckedIcon={
                            <div
                                style={{color: "red"}}
                            >
                                -1
                            </div>
                        }
                        checkedIcon={
                            <div>
                                1
                            </div>
                        }
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