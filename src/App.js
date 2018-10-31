import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Groups from './components/Groups.js';
import Home from './components/Home.js';
import Bird from './components/Bird.js';
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
                <li>
                  <Link to="/species/asdasd">Groups</Link>
                </li>
              </ul>

              <hr />

              <Route exact path="/" component={Home} />
              <Route path="/groups" component={Groups} />
              <Route path="/species" component={Bird} />
            </div>
            </div>
          </Router>
          
          
    );
  }
}

export default App;
