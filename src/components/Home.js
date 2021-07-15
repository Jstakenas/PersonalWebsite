import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
            return (
                <div>
                    <h1 className="welcome">
                    Welcome
                    </h1>

                    <br/>
                    <h2 className="ProjList">
                    this website is heavily WIP. <br/> If you got here.. how?
                    </h2>

                </div>
            )
    }
}
export default Home;