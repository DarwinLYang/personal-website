import React, { Component } from 'react';
import '../../css/Capstone.css';

class Home extends Component {
    render() {
        return (
            <div id="home-container">
                <div className="title text">Scribbles and Doodles</div>
                <div className="subtitle text">Scribbles and Doodles is a two in one platform to enhance the experience notetaking and drawing in an affordable manner.</div>

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

export default Home;
