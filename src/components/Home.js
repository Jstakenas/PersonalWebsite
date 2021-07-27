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
                            <div className="headerName">jordan stakenas</div>
                            <div className="headerHome">home</div>
                        </div>
                        <div className="linebreak"/>
                        <div className="subheader">
                            developer//engineer//for hire
                        </div>
                    </div>
                    <div className="body">
                        <div className="bodyS1">
                            <h1 className="welcome">
                                Welcome
                            </h1>

                            <br/><br/>
                            <div className="ProjList">
                                <ul>
                                    <lic>this website is heavily WIP.</lic>
                                    <br/>
                                    <lic>If you got here.. how?</lic>
                                </ul>
                            </div>
                        </div>
                        <div className="bodyS2">
                            text
                        </div>
                        <div className="bodyS3">
                            <div className="bodyS4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis justo et sapien efficitur mollis. Cras
                            </div>
                        </div>
                    </div>
                    <div className="watermark"><b>-__-</b></div>
                </div>
            )
    }
}
export default Home;