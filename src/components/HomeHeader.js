import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../App.css';


class HomeHeader extends Component {

    render() {
        return (
            <div>
                <div className="header">
                    jordan stakenas
                </div>
                <div className="linebreak"/>
                <div className="subheader">
                    developer//engineer//for hire
                </div>
            </div>
        )
    }
}

export default HomeHeader;