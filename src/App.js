import React, { useState } from 'react';
import Home from './components/Home';
import Orders from './components/Orders';
import Note from './components/Note';
import { Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
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
          <Orders name={name} setName={setName} />
        </Route>
        <Route exact path="/note">
          <Note name={name} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
