import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
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
                                    <lic>
                                        <Link to="/project1">project 1</Link>
                                    </lic>
                                    <lic>
                                        <Link to="/project2">project 2</Link>
                                    </lic>
                                    <lic>
                                        <Link to="/project3">project 3</Link>
                                    </lic>
                                </ul>
                            </div>
                        </div>
                        <div className="bodyS2">
                           empty text
                        </div>
                        <div className="bodyS3">
                            <div className="bodyS4">
                                Lorem ipsum dolor sit amet,  Nunc sollicitudin interdum lectus vel lacinia. Donec semper felis at libero aliquam pretium rci ....
                            </div>
                        </div>
                    </div>
                    <div className="watermark"><b>-__-</b></div>
                </div>
            )
    }
}
export default Home;