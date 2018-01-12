import React, { Component } from 'react';
import '../../css/Capstone.css';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import MenuButton from './MenuButton';

class CapstoneHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active_tab: "menu-home",
        };
    }

    handleMenuClick(menu) {
        this.setState({active_tab: menu})
    }

    render() {
        let active_tab = this.state.active_tab;
        let container = null;
        
        if (active_tab == "menu-home") {
            container = <Home />
        } else if (active_tab == "menu-about") {
            container = <About />
        } else if (active_tab == "menu-blog") {
            container = <Blog />
        } else if (active_tab == "menu-contact") {
            container = <Contact />
        }


        return (
            <div className="body-container">
                <div className="menu-bar">
                    <MenuButton name='Home' onClick={() => this.handleMenuClick('menu-home')} active={this.state.active_tab == 'menu-home'} />
                    <MenuButton name='About' onClick={() => this.handleMenuClick('menu-about')} active={this.state.active_tab == 'menu-about'} />
                    <MenuButton name='Blog' onClick={() => this.handleMenuClick('menu-blog')} active={this.state.active_tab == 'menu-blog'} />
                    <MenuButton name='Contact' onClick={() => this.handleMenuClick('menu-contact')} active={this.state.active_tab == 'menu-contact'} />
                </div>

                <br className="clear-both" />

                { container }
            </div>
        );
    }
}

export default CapstoneHome;
