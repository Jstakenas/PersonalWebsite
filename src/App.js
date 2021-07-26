import React from 'react';
import './App.css';
import Home from "./components/Home";
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
          </div>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
