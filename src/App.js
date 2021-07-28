import React from 'react';
import './App.css';
import Home from "./components/Home";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import {HashRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <div  style={{height: 100+"%"}}>
            <Route exact path="/" render={()=><Home />}/>
            <Route exact path="/Home" render={()=><Home />}/>
            <Route exact path="/project1" render={()=><Project1 />}/>
            <Route exact path="/project2" render={()=><Project2 />}/>
            <Route exact path="/project3" render={()=><Project3 />}/>
          </div>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
