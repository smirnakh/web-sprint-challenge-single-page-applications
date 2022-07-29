import React from "react";
import Home from "./components/Home";
import Orders from "./components/Orders";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      
      <div className="App-header">
        <div className="logo">
           <img src= "logo192.png" className="App-logo" alt="logo"/>
           <h1>BloomTech Eats</h1>
        </div>
       
          <div className="App-link">
            <button><Link to="/">Home</Link></button>     
          </div>
      </div>
      
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/pizza" >
          <Orders />
        </Route>
      </Switch>
   </Router>
  );
};
export default App;