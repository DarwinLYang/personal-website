import React, { Component } from 'react';
import '../../css/Capstone.css';

class CapstoneHome extends Component {
    render() {
        return (
            <div className="body-container">
                <div className="menu-bar">
                    <div id="menu-home" className="menu-item active">Home</div>
                    <div id="menu-about" className="menu-item">About Us</div>
                    <div id="menu-blog" className="menu-item">Blog</div>
                    <div id="menu-contact" className="menu-item">Contact</div>
                </div>

                <br className="clear-both" />
                
                <div className="title text">Scribbles and Doodles</div>
                <div classNam="subtitle text">Scribbles and Doodles is a two in one platform to enhance the experience notetaking and drawing in an affordable manner.</div>

                <div className="header text">Needs Statement</div>
                <div className="text">We need a better, eco-friendly, affordable solution for students to take and share notes in class.</div>
                
                <div className="header text">Scribbles</div>
                <div className="text">Scribbles is a custom built stylus which not only operates on all tablets but in addition, it has the functionality to detect pressure sensitivity and tilt angles.</div>

                <div className="header text">Doodles</div>
                <div className="text">Doodles is the campanion application which works with the stylus to provide the user with the best notetaking and drawing experience.</div>
            </div>
        );
    }
}

export default CapstoneHome;
