import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
            return (
                <div  style={{height: 100+"%"}}>
                    <div>
                        <div className="header">
                            jordan stakenas
                        </div>
                        <div className="linebreak"/>
                        <div className="subheader">
                            developer//engineer//for hire
                        </div>
                    </div>
                    <div className="body">
                        <h1 className="welcome">
                        Welcome
                        </h1>

                        <br/>
                        <div className="ProjList">
                            <ul>
                                <lic>this website is heavily WIP.</lic>
                                <lic>If you got here.. how?</lic>
                            </ul>
                        </div>
                    </div>
                    <div className="watermark"><b>-__-</b></div>
                </div>
            )
    }
}
export default Home;