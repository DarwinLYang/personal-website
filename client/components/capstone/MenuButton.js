import React, { Component } from 'react';
import '../../css/Capstone.css';

class MenuButton extends Component {
    render() {
        return (
            <div className={"menu-item" + (this.props.active == true ? " active" : "")} onClick={() => this.props.onClick()}>{this.props.name}</div>
        );
    }
}

export default MenuButton;
