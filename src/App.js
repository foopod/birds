import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Groups from './components/Groups.js';
import Home from './components/Home.js';
import Bird from './components/Bird.js';
import Family from './components/Family.js';
import FamilyOfBirds from './components/FamilyOfBirds.js';
import './App.css';

class App extends Component {
  render() {
    return (
          <Router>
            <div className="App">
            <h1>
              NZ Birds Online
            </h1>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/groups">Groups</Link>
                </li>
              </ul>

              <Route exact path="/" component={Home} />
              <Route path="/groups" component={Groups} />
              <Route exact path="/family" component={Family} />
              <Route path="/family/:family" component={FamilyOfBirds} />
              <Route path="/species/:name" component={Bird} />
            </div>
            </div>
          </Router>
          
          
    );
  }
}

export default App;
