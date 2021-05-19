import React from "react";
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppNavbar from './components/AppNavbar';
import Home from './components/views/Home';
import About from './components/views/About';
import DeployScreen from './components/views/DeployScreen';
import { Auctioner } from './components/participants/Auctioner';
import { Buyer } from './components/participants/Buyer';
// import { AcceptWager } from "./components/participants/BobViews";

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/deploy" component={DeployScreen} />
          <Route path="/app/auctioner" component={Auctioner} />
          <Route path="/app/buyer" component={Buyer} />
          <Route path="/test" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
