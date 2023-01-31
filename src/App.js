import React from 'react';
import Home from './components/Home';
import Orders from './components/Orders';
import Note from './components/Note';
import { Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <div className="logo">
          {/* <img src= "logo192.png" className="App-logo" alt="logo"/> */}
          <h1 className="header">Build A Pizza</h1>
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pizza">
          <Orders />
        </Route>
        <Route exact path="/note">
          <Note />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
